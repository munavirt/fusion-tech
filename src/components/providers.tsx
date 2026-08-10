"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { EnvironmentProvider } from "@/contexts/EnvironmentContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <EnvironmentProvider>{children}</EnvironmentProvider>
    </QueryClientProvider>
  );
}
