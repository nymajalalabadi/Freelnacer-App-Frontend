import { HiCollection, HiHome } from "react-icons/hi"
import { NavLink } from "react-router-dom"


function Siderbar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
        <ul className="flex flex-col gap-y-4">
          <li>
            <CustomNavlink to="/owner/dashboard">
            <HiHome className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium leading-none relative top-[4px]">Dashboard</span>
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/owner/projects">
              <HiCollection className="w-5 h-5 flex-shrink-0"/>
              <span className="text-sm font-medium leading-none relative top-[3px]">Projects</span>
            </CustomNavlink>
          </li>
        </ul>
    </div>
  )
}

export default Siderbar


function CustomNavlink({children, to}) {
  const navlinkClass = "flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300 hover:bg-primary-100/50 hover:text-primary-900";

  return (
    <NavLink to={to} className={({ isActive }) => isActive ? `${navlinkClass} bg-primary-100/80 text-primary-900`: `${navlinkClass} text-secondary-600`}>
      {children}
    </NavLink>
  )
}