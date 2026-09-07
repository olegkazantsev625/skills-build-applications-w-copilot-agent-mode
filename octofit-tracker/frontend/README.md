# OctoFit Tracker Frontend

The presentation tier uses React 19, Vite, Bootstrap, and react-router-dom.

## Environment

Define `VITE_CODESPACE_NAME` in `.env.local` when running the frontend in Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```
