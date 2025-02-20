import useAuthorize from "../features/authentication/useAuthorize"


function ProtectedRoute({ children }) 
{
  const { isLoading, isAuthenticated, isAuthorized } = useAuthorize();

  return children
}

export default ProtectedRoute
