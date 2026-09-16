# Décisions autonomes — Trinnov

## Révision demandée — page plus longue et plus claire
- Le hero sombre est conservé, car il était validé. Le CTA quitte le centre du produit et rejoint l’espace négatif à droite sur desktop ; sur mobile il se place sous le titre, avant la zone la plus dense du visuel.
- Tous les CTA principaux deviennent des pilules de 52 px avec une flèche logée dans un cercle. La rotation de la flèche au survol signale l’ouverture sans ajouter de décor.
- Après le hero, le noir cède la place à trois surfaces claires : ivoire, aluminium chaud et gris minéral. Le contraste sombre revient uniquement pour la démonstration finale et le footer.
- La narration passe de trois à six chapitres : vision, amplification, Optimizer, plateforme Altitude, quatre univers d’usage, conception française.
- Les descriptions expliquent le bénéfice avant la technologie. Les chiffres et capacités cités restent limités aux informations consultées sur les pages officielles.
- La page est volontairement environ trois fois plus longue afin de laisser à chaque idée un temps de lecture et un rythme visuel.

## Intention et périmètre
Landing page française inspirée de l’image fournie : noir profond, lumière rasante, aluminium, grands titres serif et panneaux techniques discrets. Travail réalisé seul, sans sous-agents ni question, conformément à la demande. Livraison locale ; aucune publication distante.

## Choix visuels
- Composition plein écran, sans reproduire le cadre de navigateur présent sur la référence.
- Titre « LE SON. À L’ÉTAT PUR. », scène produit centrale, détails techniques secondaires.
- Deux visuels artistiques générés à partir de la référence. Il ne s’agit pas de photographies officielles ni de reproductions contractuelles des appareils. Cette distinction figure dans les textes alternatifs et le pied de page.
- Palette noir #090a0a, ivoire #eeeae4, gris #a4a6a4, accent champagne discret #c8b69a.
- Georgia et Arial : polices système immédiatement disponibles, aucun téléchargement externe.
- Les spécifications complexes et chiffres commerciaux non nécessaires sont omis ; les liens produits renvoient au fabricant.

## Visual Story
| Séquence | Intention | Composition | Mouvement | Action |
| --- | --- | --- | --- | --- |
| Altitude32 | Faire ressentir la précision du produit | Titre monumental, métal éclairé sur noir, CTA décentré | Entrée progressive et déplacement de 10 px maximum au pointeur | Ouvrir la fiche officielle |
| Amplitude16 | Passer de l’émotion à la puissance | Image asymétrique, trois qualités sur filets | Apparition au défilement | Ouvrir la fiche officielle |
| Optimizer | Rendre perceptible une technologie invisible | Texte éditorial et ondes abstraites | Onde Canvas lente, uniquement dans le viewport | Découvrir Optimizer |
| Expérience | Inviter à une écoute réelle | Grand titre central et CTA unique | Apparition douce | Trouver un revendeur |

## Architecture
HTML sémantique, CSS et JavaScript natifs, serveur Node.js sans dépendances. Le dossier dist est directement distribuable sur tout hébergement statique. Le nom dist désigne ici les fichiers finaux, sans étape de compilation. run.sh fonctionne depuis n’importe quel dossier, lance sur le port 3000, et utilise Python 3 si Node est absent. Aucun npm install, aucun service tiers nécessaire au rendu. Les liens officiels nécessitent naturellement Internet.

## Responsive et accessibilité
Composition mobile spécifique à 700 px : navigation en panneau, titre réduit, scène recadrée, spécifications sur une ligne puis sections empilées. Ajustements à 370, 700, 1100 et 1600 px. Liens de saut, focus visibles, menu avec aria-expanded/inert, fermeture Échap, confinement du focus, fermeture lors d’un changement de taille. Reduced-motion coupe les transitions, le mouvement au pointeur et l’animation Canvas. Sans JavaScript, le contenu reste visible. Le menu mobile exige JavaScript ; les CTA et les ancres du contenu restent accessibles.

## Mouvement et performance
Pas de scroll hijacking, vidéo, bibliothèque d’animation ou curseur personnalisé. Révélations avec IntersectionObserver. Canvas plafonné à un ratio de pixels de 2 et suspendu hors écran / onglet masqué. La seconde image utilise loading=lazy ; la première est préchargée. Images locales 1536 × 1024, environ 3,8 Mio ensemble. Pas de profilage FPS exécuté.

## Vérifications et limites
- Exécution de run.sh : réponse HTTP 200 sur le port 3000.
- Vérification de syntaxe de server.mjs et dist/app.js avec node --check.
- Contrôles des fichiers locaux, ancres et réponses HTTP consignés dans evidence/validation.txt.
- Les deux visuels produits ont été inspectés directement.
- L’aperçu navigateur géré est indisponible dans cet environnement. Le navigateur refuse localhost et le service d’aperçu n’est pas présent. Aucun contournement du navigateur n’a été utilisé.
- En conséquence : rendu desktop/mobile, clics en navigateur, navigation clavier et mesures de performance réelles NON certifiés. Aucune capture fictive, aucun verdict de critique indépendant revendiqué.
- Skill Website Design lu et appliqué. Ses sous-skills design-loop, cinematic-build et mobile-experience ne sont pas installés dans le catalogue accessible ; leurs prescriptions résumées dans Website Design ont été appliquées directement. Travail solo prioritaire sur les critiques multi-agents mentionnées par le skill.

## Sources
Référence : upload/2f57ebdd-30ee-4c29-bb47-02a9dd88b718.png.
Pages officielles consultées le 16 septembre 2026 :
- https://www.trinnov.com/fr/
- https://www.trinnov.com/fr/produits/altitude32/
- https://www.trinnov.com/fr/produits/amplitude16/
Navigation officielle utilisée pour les liens Optimizer et revendeurs. Certaines pages affichent une vérification anti-robot dans l’outil de recherche ; leur destination provient bien de la navigation officielle.

## Fichiers
- dist/index.html : page finale et liens.
- dist/styles.css : direction visuelle, responsive, animations.
- dist/app.js : navigation, révélations, onde abstraite.
- dist/assets/ : deux scènes produit artistiques.
- server.mjs, run.sh, package.json : lancement autonome.
- design-system.md et bar.md : direction et critères visibles.
- README.md : mode d’emploi.
