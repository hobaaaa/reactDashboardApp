import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SidebarProvider } from "./Context/sidebarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
