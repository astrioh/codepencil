import { queryClient } from '@/lib/react-query';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';

const ErrorFallback = () => (
  <div className="text-red-500 w-screen h-screen flex justify-center items-center">
    <h1>There was an error! Please refresh the page</h1>
  </div>
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-screen h-screen">Loading...</div>
);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
