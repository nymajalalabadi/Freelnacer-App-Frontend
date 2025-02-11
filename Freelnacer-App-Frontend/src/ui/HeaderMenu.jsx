import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        
      </li>
      <li className="flex">
        
      </li>
    </ul>
  );
}
export default HeaderMenu;