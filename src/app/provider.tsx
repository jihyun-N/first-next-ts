"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  // 뮤테이션할 때 사용한다.

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
