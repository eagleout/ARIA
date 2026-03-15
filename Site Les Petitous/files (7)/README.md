# 🦒 Les Petitous — Page "Contact"

## SEO
- **URL** : `/contact/`
- **Title** : `Contact | Micro-crèche Les Petitous Île-de-France`
- **Meta description** : `Contactez les micro-crèches Les Petitous : Villemomble (93), Juvisy (91), Kremlin-Bicêtre (94). Téléphone, email, horaires. Réponse sous 48h.`

## 2 blocs

| # | Fichier | Section |
|---|---------|---------|
| 01 | `01-HERO-CARDS.html` | Hero H1 + 3 cartes contact (une par crèche) |
| 02 | `02-FORMULAIRE-CARTE.html` | Formulaire contact général + sidebar (siège, carte, réseaux, CTA pré-inscription) |

## Installation
1. Crée la page `/contact/` dans WordPress
2. Template Elementor : Pleine largeur
3. 2 sections, widget HTML dans chacune

## À personnaliser
- Adresses, numéros de téléphone, emails de chaque crèche
- Adresse du siège social (OMA Services)
- iframe Google Maps
- Liens Instagram et Facebook
- Formulaire : remplace le HTML par ton shortcode WPForms `[wpforms id="XXX"]`

## Notes sur le formulaire
Le bloc 02 contient un formulaire HTML statique (il ne soumet rien).
Tu dois le remplacer par un vrai formulaire WordPress :

**Option recommandée :** WPForms
1. Crée un formulaire dans WPForms avec les mêmes champs
2. Remplace tout le contenu de `.ctf-form` par `[wpforms id="XXX"]`
3. Le CSS d'Elementor/WPForms gérera le style automatiquement

**Alternative :** Contact Form 7
`[contact-form-7 id="XXX" title="Contact"]`

## Différence avec la page pré-inscription
- Page contact = questions générales, demandes de visite, recrutement, tarifs
- Page pré-inscription = formulaire Meeko pour inscrire un enfant
- Un lien CTA dans la sidebar du bloc 02 redirige vers /pre-inscription/ 
  pour les parents qui veulent inscrire leur enfant
