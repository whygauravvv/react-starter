import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { StateContextProvider } from "./context/state-context.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="app-theme">
    <QueryClientProvider client={queryClient}>
      <StateContextProvider>
        <TooltipProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </TooltipProvider>
      </StateContextProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
