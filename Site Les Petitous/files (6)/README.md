# 🦒 Les Petitous — Page "Pré-inscription"

## SEO
- **URL** : `/pre-inscription/`
- **Title** : `Pré-inscription micro-crèche | Les Petitous Île-de-France`
- **Meta description** : `Pré-inscrivez votre enfant dans une micro-crèche Les Petitous. Formulaire en ligne, gratuit, sans engagement. Réponse sous 48h. 3 crèches en Île-de-France.`

## 3 blocs

| # | Fichier | Section |
|---|---------|---------|
| 01 | `01-HERO.html` | Hero avec H1 + pilules de réassurance |
| 02 | `02-FORMULAIRE-MEEKO.html` | Formulaire Meeko intégré (iframe) + sidebar infos |
| 03 | `03-FAQ-REASSURANCE.html` | 6 questions FAQ + barre de confiance |

## ⚠️ CONFIGURATION MEEKO OBLIGATOIRE

### Étape 1 : Trouver ton URL Meeko
1. Connecte-toi sur https://www.meeko.pro
2. Va dans **Site internet** → **Éditer mon site**
3. Navigue vers la page de **pré-inscription**
4. Copie l'URL dans la barre d'adresse du navigateur
   Format : `https://les-petitous.meeko.site/registration`

### Étape 2 : Remplacer dans le bloc 02
Ouvre le fichier `02-FORMULAIRE-MEEKO.html` et remplace :
```
src="https://les-petitous.meeko.site/registration"
```
par ton URL réelle.

### Si l'iframe ne fonctionne pas
Certains navigateurs ou configurations peuvent bloquer les iframes.
Dans ce cas, passe en **Option B** (bouton de redirection) :
1. Supprime le bloc `.pif-form-embed` 
2. Décommente le bloc `.pif-form-button` dans le CSS et le HTML
3. Remplace le lien par ton URL Meeko

### Alternative : formulaire par crèche
Si tu as une URL Meeko différente par crèche, tu peux :
- Soit mettre 3 onglets/boutons qui redirigent vers chaque formulaire
- Soit utiliser le formulaire Meeko qui inclut déjà un sélecteur de crèche

## Hauteur de l'iframe
La hauteur est définie à `min-height: 900px`. Si le formulaire Meeko est plus
long ou plus court, ajuste cette valeur dans le CSS du bloc 02 :
```css
.pif-form-body iframe { min-height: 900px; }
```

## Maillage interne
Cette page est LA page de conversion du site. Elle doit être liée depuis :
- Le header (bouton CTA principal)
- Tous les CTA de toutes les pages
- Les pages établissements
- La page tarifs
