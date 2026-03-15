import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET /api/setup — vérifie si les tables existent et si l'utilisateur a un profil
export async function GET() {
  try {
    const supabase = await createClient()

    // 1. Vérifier si la table "organizations" existe
    const { error: tableError } = await supabase
      .from('organizations')
      .select('id')
      .limit(1)

    if (tableError) {
      // Si la table n'existe pas, le message contient "relation" ou "does not exist"
      const msg = tableError.message.toLowerCase()
      if (msg.includes('relation') || msg.includes('does not exist') || msg.includes('404') || tableError.code === '42P01') {
        return NextResponse.json({
          status: 'needs_schema',
          message: 'Les tables n\'existent pas encore. Déployez le schema SQL.',
        })
      }
      // Autre erreur
      return NextResponse.json({
        status: 'error',
        message: tableError.message,
      })
    }

    // 2. Vérifier si l'utilisateur est authentifié
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({
        status: 'needs_auth',
        message: 'Vous devez vous connecter d\'abord.',
      })
    }

    // 3. Vérifier si l'utilisateur a un profil
    const { data: profile } = await supabase
      .from('users')
      .select('id, organization_id')
      .eq('id', user.id)
      .single()

    if (!profile) {
      return NextResponse.json({
        status: 'needs_profile',
        message: 'Profil utilisateur manquant. Cliquez sur "Initialiser" pour créer votre organisation.',
        userId: user.id,
        email: user.email,
      })
    }

    return NextResponse.json({
      status: 'ready',
      message: 'Tout est configuré !',
      organizationId: profile.organization_id,
    })
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      message: err instanceof Error ? err.message : 'Erreur inconnue',
    }, { status: 500 })
  }
}

// POST /api/setup — appelle bootstrap_user pour créer org + profil
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const fullName = body.fullName || 'Admin'

    const supabase = await createClient()

    // Vérifier l'auth
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    // Appeler la fonction bootstrap
    const { data, error } = await supabase.rpc('bootstrap_user', {
      p_full_name: fullName,
    })

    if (error) {
      return NextResponse.json({
        error: error.message,
        hint: error.hint,
        code: error.code,
      }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Error ? err.message : 'Erreur inconnue',
    }, { status: 500 })
  }
}
