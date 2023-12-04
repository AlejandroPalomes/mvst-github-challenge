import React from 'react';

export const LazyLoader = (importCallback: () => Promise<any>) =>
  React.lazy(() =>
    importCallback().catch(() =>
      window.location.reload()));
