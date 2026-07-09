import { useEffect, useMemo, useState } from 'react';

import { getApiResourceUrl, getApiSetupMessage } from './api.js';

function normalizeCollectionPayload(payload) {
  if (Array.isArray(payload)) {
    return { items: payload, count: payload.length, meta: {} };
  }

  if (payload && typeof payload === 'object') {
    const items =
      payload.data ??
      payload.items ??
      payload.results ??
      payload.docs ??
      payload.collection ??
      [];

    const resolvedItems = Array.isArray(items) ? items : [];
    const count =
      typeof payload.count === 'number'
        ? payload.count
        : typeof payload.total === 'number'
          ? payload.total
          : resolvedItems.length;

    return {
      items: resolvedItems,
      count,
      meta: {
        apiBaseUrl: payload.apiBaseUrl,
        next: payload.next,
        page: payload.page,
        pageSize: payload.pageSize,
        totalPages: payload.totalPages
      }
    };
  }

  return { items: [], count: 0, meta: {} };
}

export function useApiCollection(resource) {
  const [state, setState] = useState({
    count: 0,
    error: '',
    items: [],
    loading: true,
    meta: {},
    setupMessage: getApiSetupMessage()
  });

  const resourceUrl = useMemo(() => getApiResourceUrl(resource), [resource]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCollection() {
      setState((currentState) => ({ ...currentState, loading: true, error: '' }));

      try {
        const response = await fetch(resourceUrl, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const normalized = normalizeCollectionPayload(payload);

        setState({
          count: normalized.count,
          error: '',
          items: normalized.items,
          loading: false,
          meta: normalized.meta,
          setupMessage: getApiSetupMessage()
        });
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setState((currentState) => ({
          ...currentState,
          error: error.message || 'Unable to load data.',
          loading: false
        }));
      }
    }

    loadCollection();

    return () => controller.abort();
  }, [resourceUrl]);

  return state;
}