# Trinnov — Le son à l’état pur

Landing page française, animée, inspirée de la référence fournie.

## Lancer
```bash
./run.sh
```
Ouvrir http://localhost:3000. Arrêt : Ctrl+C.

Pour utiliser un autre port, par exemple 3001 :
```bash
./run.sh 3001
```
Node.js 18+ ou Python 3 est nécessaire. Aucune dépendance à installer.
Si votre logiciel d’extraction retire le droit d’exécution : `bash run.sh`.

## Modifier
- Structure et textes : `dist/index.html`
- Style et responsive : `dist/styles.css`
- Interactions : `dist/app.js`
- Visuels : `dist/assets/`

`npm run check` vérifie la syntaxe JavaScript ; aucune compilation n’est nécessaire.
Les décisions, les sources et les limites de validation sont dans `DECISION.MD`.
Les visuels sont des interprétations artistiques de la référence, non contractuelles.
