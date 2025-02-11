import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Loading from "../../ui/Loading";
import useLogout from "./useLogout";

function Logout() {
  const { isPending, logout } = useLogout();

    return isPending ? (
        <Loading />
        ) : (
        <button onClick={logout}>
            <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
        </button>
    );
}
export default Logout;
