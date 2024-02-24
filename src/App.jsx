// import { client } from "./lib/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'


import Layout from "./components/Layout";
import SmallLayout from "./components/SmallLayout";
import ProductDetails from "./components/ProductDetails";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000, // 1 minute (in milliseconds)
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SmallLayout />} />
            <Route path="product/:productId" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// 1:15:35
