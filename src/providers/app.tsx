import { PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/lib/react-query';

const ErrorFallback = () => (
  <div className="text-red-500 w-screen h-screen flex justify-center items-center">
    <h1>There was an error! Please refresh the page</h1>
  </div>
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-screen h-screen">Loading...</div>
);

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
