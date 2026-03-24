'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, Loader2, XCircle, Database, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type SetupStatus = 'checking' | 'needs_schema' | 'needs_auth' | 'needs_profile' | 'ready' | 'error'

export default function SetupPage() {
  const [status, setStatus] = useState<SetupStatus | null>(null)
  const [message, setMessage] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function checkStatus() {
    setStatus('checking')
    try {
      const res = await fetch('/api/setup')
      const data = await res.json()
      setStatus(data.status as SetupStatus)
      setMessage(data.message)
      if (data.status === 'ready') {
        setTimeout(() => router.push('/'), 1500)
      }
    } catch {
      setStatus('error')
      setMessage('Impossible de contacter le serveur.')
    }
  }

  async function initProfile() {
    if (!fullName.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: fullName.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ready')
        setMessage('Tout est configuré !')
        setTimeout(() => router.push('/'), 1500)
      } else {
        setMessage(data.error || 'Erreur lors de l\'initialisation.')
        setStatus('error')
      }
    } catch {
      setMessage('Erreur réseau.')
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    {
      key: 'schema',
      label: 'Tables Supabase',
      done: status !== null && status !== 'needs_schema' && status !== 'checking',
      active: status === 'needs_schema',
    },
    {
      key: 'auth',
      label: 'Authentification',
      done: status === 'needs_profile' || status === 'ready',
      active: status === 'needs_auth',
    },
    {
      key: 'profile',
      label: 'Profil & Organisation',
      done: status === 'ready',
      active: status === 'needs_profile',
    },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg space-y-6 rounded-xl bg-card p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
            A
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Configuration ARIA</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Vérification de votre installation Supabase
          </p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((step, i) => (
            <div key={step.key} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                {step.done ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : step.active ? (
                  <div className="h-4 w-4 rounded-full border-2 border-accent bg-accent/20" />
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted" />
                )}
                <span className={`text-xs ${step.done ? 'text-emerald-600' : step.active ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </div>
          ))}
        </div>

        {/* Content based on status */}
        <div className="space-y-4">
          {status === null && (
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Cliquez pour vérifier votre configuration Supabase.
              </p>
              <Button onClick={checkStatus} className="gap-2">
                <Database className="h-4 w-4" />
                Vérifier la configuration
              </Button>
            </div>
          )}

          {status === 'checking' && (
            <div className="flex items-center justify-center gap-2 py-4">
              <Loader2 className="h-5 w-5 animate-spin text-accent" />
              <span className="text-sm">Vérification en cours...</span>
            </div>
          )}

          {status === 'needs_schema' && (
            <div className="space-y-3 rounded-lg border border-orange-200 bg-orange-50 p-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-orange-500" />
                <span className="font-medium text-orange-700">Tables manquantes</span>
              </div>
              <p className="text-sm text-orange-600">
                Le schema SQL n&apos;a pas encore été déployé dans votre projet Supabase.
              </p>
              <ol className="list-decimal list-inside text-sm text-orange-600 space-y-1">
                <li>Allez sur <strong>supabase.com</strong> &rarr; votre projet &rarr; SQL Editor</li>
                <li>Copiez le contenu du fichier <code className="bg-orange-100 px-1 rounded">supabase/schema.sql</code></li>
                <li>Collez-le et cliquez sur <strong>Run</strong></li>
              </ol>
              <Button onClick={checkStatus} variant="outline" className="mt-2 gap-2">
                <Loader2 className="h-4 w-4" />
                Re-vérifier
              </Button>
            </div>
          )}

          {status === 'needs_auth' && (
            <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-blue-700">Connexion requise</span>
              </div>
              <p className="text-sm text-blue-600">
                Les tables existent. Connectez-vous pour continuer.
              </p>
              <Button onClick={() => router.push('/login')} className="gap-2">
                Se connecter
              </Button>
            </div>
          )}

          {status === 'needs_profile' && (
            <div className="space-y-4 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                <span className="font-medium">Créer votre profil</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tables OK, auth OK. Créez votre organisation et profil.
              </p>
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Votre nom complet</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jean Dupont"
                />
              </div>
              <Button onClick={initProfile} disabled={loading || !fullName.trim()} className="gap-2">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                Initialiser
              </Button>
            </div>
          )}

          {status === 'ready' && (
            <div className="flex flex-col items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              <p className="font-medium text-emerald-700">Tout est configuré !</p>
              <p className="text-sm text-emerald-600">Redirection vers le dashboard...</p>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <span className="font-medium text-red-700">Erreur</span>
              </div>
              <p className="text-sm text-red-600">{message}</p>
              <Button onClick={checkStatus} variant="outline" className="gap-2">
                Réessayer
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
