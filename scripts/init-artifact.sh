#!/usr/bin/env bash
set -euo pipefail

ARTIFACT_NAME="${1:?Usage: init-artifact.sh <artifact-name>}"
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT_DIR/$ARTIFACT_NAME"

if [ -d "$DEST" ]; then
  echo "Directory '$ARTIFACT_NAME' already exists." >&2
  exit 1
fi

echo "Initializing artifact: $ARTIFACT_NAME"
mkdir -p "$DEST/src/components"

# package.json
cat > "$DEST/package.json" <<EOF
{
  "name": "$ARTIFACT_NAME",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "vite": "^5.3.1"
  }
}
EOF

# vite.config.js
cat > "$DEST/vite.config.js" <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

# postcss.config.js
cat > "$DEST/postcss.config.js" <<'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# tailwind.config.js
cat > "$DEST/tailwind.config.js" <<'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# index.html
cat > "$DEST/index.html" <<EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${ARTIFACT_NAME}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# src/main.jsx
cat > "$DEST/src/main.jsx" <<'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOF

# src/index.css
cat > "$DEST/src/index.css" <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# src/App.jsx
cat > "$DEST/src/App.jsx" <<'EOF'
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <p className="p-8 text-gray-500">Artifact scaffold ready.</p>
    </div>
  )
}
EOF

echo "Done. Run: cd $ARTIFACT_NAME && npm install && npm run dev"
