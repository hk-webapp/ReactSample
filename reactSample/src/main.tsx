import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./route.ts";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRoute} />
    </QueryClientProvider>
  </StrictMode>
);
