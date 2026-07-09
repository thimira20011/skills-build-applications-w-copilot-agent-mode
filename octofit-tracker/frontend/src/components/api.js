const backendPort = 8000;

function getCodespaceName() {
  return import.meta.env.VITE_CODESPACE_NAME?.trim() || '';
}

export function getApiBaseUrl() {
  const codespaceName = getCodespaceName();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return `http://localhost:${backendPort}`;
}

export function getApiResourceUrl(endpointPath) {
  return `${getApiBaseUrl()}${endpointPath}`;
}

export function getApiSetupMessage() {
  const codespaceName = getCodespaceName();

  if (!codespaceName) {
    return 'Set VITE_CODESPACE_NAME in .env.local for Codespaces; localhost fallback is active.';
  }

  return `Using Codespaces API host for ${codespaceName}.`;
}