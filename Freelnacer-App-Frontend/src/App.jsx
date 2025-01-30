import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/complete-profile" element={<CompleteProfile/>} />
          <Route  element={<AppLayout/>}>
            <Route path="/owner" element={<Owner/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </QueryClientProvider>
  )
}

export default App
