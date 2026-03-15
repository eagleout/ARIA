# 🦒 Les Petitous — Guide d'installation Elementor

## Vue d'ensemble

Tu as 12 fichiers à utiliser :

| # | Fichier | Où le mettre |
|---|---------|-------------|
| 00 | `00-CSS-GLOBAL.css` | WordPress > Apparence > Personnaliser > CSS additionnel |
| 01 | `01-HERO.html` | Widget HTML Elementor — Section 1 |
| 02 | `02-TRUST-BAR.html` | Widget HTML Elementor — Section 2 |
| 03 | `03-ABOUT.html` | Widget HTML Elementor — Section 3 |
| 04 | `04-VALUES.html` | Widget HTML Elementor — Section 4 |
| 05 | `05-CRECHES.html` | Widget HTML Elementor — Section 5 |
| 06 | `06-STEPS.html` | Widget HTML Elementor — Section 6 |
| 07 | `07-TESTIMONIALS.html` | Widget HTML Elementor — Section 7 |
| 08 | `08-FAQ.html` | Widget HTML Elementor — Section 8 |
| 09 | `09-CTA-FINAL.html` | Widget HTML Elementor — Section 9 |
| 10 | `10-FOOTER.html` | Widget HTML Elementor — Section 10 |
| 11 | `11-SCRIPT-ANIMATIONS.html` | Widget HTML Elementor — DERNIER bloc de la page |

---

## Étape 1 : CSS Global

1. Va dans **WordPress > Apparence > Personnaliser > CSS additionnel**
2. Colle TOUT le contenu de `00-CSS-GLOBAL.css`
3. Clique **Publier**

C'est le fichier le plus important : il définit les couleurs, polices, boutons et animations utilisés par tous les blocs.

---

## Étape 2 : Créer la page dans Elementor

1. Va dans **Pages > Ajouter**
2. Titre : "Accueil"
3. Dans les attributs de page, choisis le template **"Elementor Pleine largeur"** (ou "Elementor Full Width")
4. Clique **Modifier avec Elementor**

---

## Étape 3 : Ajouter les blocs

Pour CHAQUE fichier HTML (01 à 11), dans l'ordre :

1. **Ajoute une nouvelle section** dans Elementor (clic sur le +)
2. Choisis la structure **1 colonne**
3. Dans les réglages de la section :
   - **Disposition > Largeur du contenu** : Pleine largeur (Boxed OFF)
   - **Disposition > Écart entre colonnes** : Pas d'écart
   - **Avancé > Marge** : 0 partout
   - **Avancé > Marge interne (padding)** : 0 partout
4. **Glisse le widget "HTML"** dans la colonne
5. **Colle le contenu** du fichier correspondant
6. Passe au bloc suivant

---

## Étape 4 : Personnaliser

### Remplacer les emojis par tes vraies images
Dans chaque bloc, tu trouveras des commentaires HTML qui t'indiquent exactement quoi remplacer :

```html
<!-- 
  REMPLACE le emoji 🦒 ci-dessus par ta vraie image de mascotte :
  <img src="/wp-content/uploads/mascotte-girafe.png" alt="Mascotte Les Petitous">
-->
```

### Mettre à jour les liens
- Remplace `/pre-inscription/` par l'URL réelle de ta page de pré-inscription
- Remplace `/nos-creches/villemomble/` par les URLs réelles de tes pages crèches
- Remplace les coordonnées (email, téléphone, réseaux sociaux)

### Mettre à jour les témoignages
Remplace les témoignages fictifs par de vrais avis de parents.

---

## Étape 5 : Définir comme page d'accueil

1. Va dans **Réglages > Lecture**
2. Coche **"Une page statique"**
3. Sélectionne ta page "Accueil" dans le menu déroulant
4. **Enregistrer**

---

## Astuces importantes

### Le header/navigation
La navigation (menu du haut) N'EST PAS incluse dans ces blocs car Elementor gère ça nativement. Utilise le **Header Builder** d'Elementor Pro ou le menu de ton thème. Configure-le avec :
- Logo Les Petitous à gauche
- Liens : Qui sommes-nous, Nos crèches, Pédagogie, FAQ
- Bouton CTA "Pré-inscrire" à droite (couleur : #5BBD72)

### Performance
- Installe **WP Rocket** ou **LiteSpeed Cache** pour le cache
- Installe **Imagify** pour compresser les images en WebP
- Désactive les widgets Elementor que tu n'utilises pas (Elementor > Outils > Fonctionnalités)

### SEO
- Installe **Rank Math** et configure les meta titles/descriptions
- Active le Schema markup "LocalBusiness" sur les pages crèches
- Active le Schema "FAQPage" sur la page FAQ

---

## Couleurs de référence

| Usage | Hex |
|-------|-----|
| Orange (titres, accents) | `#E8813A` |
| Orange clair | `#F5A623` |
| Vert (boutons CTA) | `#5BBD72` |
| Vert foncé (hover) | `#4AA862` |
| Texte principal | `#2A2A2A` |
| Texte secondaire | `#5A5A6A` |
| Fond crème | `#FFF9F3` |
| Fond sable | `#FAF3EB` |

## Polices

- **Titres** : Nunito (800 Extra Bold)
- **Corps** : Quicksand (400/600)
- Les deux sont des Google Fonts gratuites, importées via le CSS global.

---

Bonne mise en ligne ! 🦒
