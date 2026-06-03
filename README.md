# ABC Buddy

Run the site locally:

```powershell
npm start
```

Open:

```text
http://localhost:3000
```

Run on another localhost port:

```powershell
npm run start:5500
```

Open:

```text
http://localhost:5500
```

You can also choose any port in PowerShell:

```powershell
node server.js 8080
```

## Sync Updates

Run this after editing files to commit and push changes to GitHub:

```powershell
.\sync.ps1 "chore: update site"
```

The local `.myney.core/` folder is ignored and will not be uploaded.
