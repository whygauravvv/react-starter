import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Unauthorized from "./components/pages/unauthorized";
import NotFound from "./components/pages/not-found";
import { Toaster } from "sonner";
import ErrorBoundary from "./components/common/error-boundary";
import { useTheme } from "./components/ui/theme-provider";
import Home from "./pages/home/home";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Toaster richColors position="top-center" theme={theme} />
        <Routes>
          {/* 404 */}
          <Route path="*" element={<NotFound />} />

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
