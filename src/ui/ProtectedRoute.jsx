import { useNavigate, useLocation } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize"
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading, isAuthorized, isVerified } = useAuthorize();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // ذخیره مسیر فعلی برای بازگشت بعد از لاگین
        navigate("/auth", { 
          state: { from: location.pathname },
          replace: true 
        });
        return;
      }

      if (!isVerified) {
        toast.error("Your profile is not verified yet. Please wait for admin approval.");
        navigate("/complete-profile", { replace: true });
        return;
      }

      if (!isAuthorized) {
        toast.error("You don't have access to this page.");
        navigate("/not-access", { replace: true });
        return;
      }
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified, location]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  }

  if (isAuthenticated && isAuthorized) {
    return children;
  }

  return null;
}

export default ProtectedRoute; 