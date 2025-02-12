import { HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";


function DarkModeToggle() {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button>
      <HiOutlineSun className="w-5 h-5 text-primary-900" />
    </button>
  );
}
export default DarkModeToggle;