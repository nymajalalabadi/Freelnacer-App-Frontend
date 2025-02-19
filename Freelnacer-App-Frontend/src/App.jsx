import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerLayout from "./features/owner/OwnerLayout";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelnacerDashboard from "./pages/FreelnacerDashboard";
import FreelnacerLayout from "./features/freelnacer/FreelnacerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/auth" element={ <Auth /> } />
          <Route path="/complete-profile" element={ <CompleteProfile /> } />
          <Route path="/owner"  element={<OwnerLayout />}>
            <Route index element={ <Navigate to="dashboard" replace /> } />
            <Route path="dashboard" element={ <OwnerDashboard /> } />
            <Route path="projects" element={ <Projects /> } />
            <Route path="projects/:id" element={ <Project /> } />
          </Route>
          <Route path="/freelnacer" element={ <FreelnacerLayout /> }>
            <Route index element={ <Navigate to="dashboard" replace /> } />
            <Route path="dashboard" element={< FreelnacerDashboard />}/>
            <Route path="proposals" element={< Proposals />}/>
            <Route path="projects" element={< SubmittedProjects />}/>
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
    </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
