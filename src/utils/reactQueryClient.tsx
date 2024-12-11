'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

export default function ReactQueryProvider ({ children }: React.PropsWithChildren){
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}