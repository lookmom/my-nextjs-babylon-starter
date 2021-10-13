import { useRouter } from 'next/router';
import React, { DependencyList } from 'react';

/**
 * Helper hook that returns a ref indicating if the current component is still mounted
 */
export function useMounted() {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

/**
 * If you want to be able to abort the async request use this method
 */
export function useAbortableAsyncResult<T extends any = any>(
  fn: (signal: AbortSignal) => Promise<T>,
  dependencies: DependencyList = []
) {
  const isMounted = useMounted();
  const abortController = React.useRef<AbortController>();
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [isLoading, setIsLoading] = React.useState(false);

  const reload = React.useCallback(async () => {
    if (abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    try {
      setError(null);
      setIsLoading(true);
      const response = await fn(abortController.current.signal);
      if (isMounted.current) setData(response);
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
      if (isMounted.current) setError(e);
      if (isMounted.current) setData(null);
      console.warn(e);
    } finally {
      if (isMounted.current) setIsInitialized(true);
      if (isMounted.current) setIsLoading(false);
    }
  }, dependencies);

  // Load on componentDidMount, and whenever the reload-method changes
  React.useEffect(() => void reload(), [reload]);

  return { isInitialized, isLoading, reload, error, data };
}

export const useCurrentLocale = () => {
  const { locale } = useRouter();
  const {
    data: messages,
    isLoading,
    isInitialized,
    error,
  } = useAbortableAsyncResult(() => {
    if (!locale) return null;
    return import(`@src/locales/${locale}.json`);
  }, [locale]);

  return { locale, messages, isLoading, isInitialized, error };
};
