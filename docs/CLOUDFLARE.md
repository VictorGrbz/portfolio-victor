# Configuration Cloudflare pour jess-vic.ovh

Ce guide couvre les étapes à réaliser manuellement dans le dashboard Cloudflare (aucun outil ne permet de les automatiser depuis Claude Code). Le projet Vercel `portfolio-victor` est déjà créé et déployé, et les domaines `jess-vic.ovh` et `www.jess-vic.ovh` sont déjà déclarés côté Vercel.

**Important** : ne change surtout pas les nameservers du domaine. Ils doivent rester sur Cloudflare (`glen.ns.cloudflare.com` / `lauryn.ns.cloudflare.com`) pour ne pas casser `ha.jess-vic.ovh` et Cloudflare Zero Trust. On ajoute juste des enregistrements DNS, on ne migre rien.

## 1. Enregistrements DNS

Dans le dashboard Cloudflare > le domaine `jess-vic.ovh` > **DNS** > **Records**, ajoute :

| Type | Nom | Contenu | Proxy |
|---|---|---|---|
| A | `@` (racine) | `76.76.21.21` | Proxied (nuage orange) |
| A | `www` | `76.76.21.21` | Proxied (nuage orange) |

Ce sont les valeurs que Vercel a lui-même indiquées comme recommandées pour ce projet. Laisse le proxy Cloudflare activé (nuage orange) : c'est ce qui permettra à Cloudflare Access de protéger `/priv/*` plus tard, et ça n'empêche pas Vercel de fonctionner correctement.

## 2. Mode SSL/TLS

Dans **SSL/TLS** > **Overview**, vérifie que le mode est sur **Full** (pas "Flexible", qui provoquerait des boucles de redirection avec Vercel, et pas besoin de "Full (strict)" à ce stade).

## 3. Vérifier la propagation

Une fois les enregistrements ajoutés (la propagation peut prendre de quelques minutes à 1h), vérifie que ça fonctionne :

```bash
npx vercel@latest domains verify jess-vic.ovh --scope victor-garbez
npx vercel@latest domains verify www.jess-vic.ovh --scope victor-garbez
```

Ou simplement ouvre `https://jess-vic.ovh` dans un navigateur : tu dois voir la page d'accueil du portfolio.

## 4. Cloudflare Zero Trust Access (section privée)

Objectif : `jess-vic.ovh/priv/nous/*` accessible uniquement à Victor et Jess, `jess-vic.ovh/priv/famille/*` accessible à un cercle plus large (famille/amis) — Victor et Jess ayant accès aux deux.

### 4.1. Créer un groupe "Famille & amis" (optionnel mais recommandé)

Dans **Zero Trust** > **Access** > **Groups** (menu de gauche) :
1. **Add a group**
2. Nom : `Famille & amis`
3. Règle d'inclusion : `Emails` — liste les adresses email des proches à qui tu veux donner accès
4. Enregistrer

Ça évite de dupliquer la liste d'emails à chaque nouvelle Application, et de la maintenir à un seul endroit.

### 4.2. Application "Espace nous" (Victor + Jess)

Dans **Zero Trust** > **Access** > **Applications** :
1. **Add an application** > **Self-hosted**
2. Nom : `Portfolio - Nous`
3. Domaine : `jess-vic.ovh`, chemin : `/priv/nous*`
4. Durée de session : 24h ou plus selon ton confort (juste vous deux, pas besoin d'être trop strict)
5. Policy :
   - Nom : `Victor + Jess`
   - Action : `Allow`
   - Include : `Emails` → renseigne les deux adresses (la tienne : `victor.garbez@gmail.com`, plus celle de Jess)
6. Enregistrer

### 4.3. Application "Espace famille" (famille/amis)

Même écran, nouvelle Application :
1. Nom : `Portfolio - Famille`
2. Domaine : `jess-vic.ovh`, chemin : `/priv/famille*`
3. Policy :
   - Nom : `Famille et amis`
   - Action : `Allow`
   - Include : `Emails - Group` → sélectionne le groupe `Famille & amis` créé en 4.1 (ou directement les emails un par un si tu préfères sauter cette étape)
   - Ajoute une deuxième règle Include en `OR` avec `Emails` → tes deux adresses (Victor + Jess), pour que vous gardiez l'accès à cet espace aussi
4. Enregistrer

### 4.4. Test

- Ouvre `https://jess-vic.ovh/priv/nous` en navigation privée : Cloudflare doit afficher un écran de connexion (code reçu par email), puis laisser passer seulement les emails autorisés
- Même test sur `https://jess-vic.ovh/priv/famille`
- Vérifie que `https://jess-vic.ovh` et `https://jess-vic.ovh/projets` restent accessibles sans aucune authentification
