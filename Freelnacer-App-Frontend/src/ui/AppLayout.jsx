import { Outlet } from "react-router-dom"
import Header from "./Header"
import Siderbar from "./Siderbar"

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <Header/>
        <Siderbar/>
        <div className="bg-secondary-100 p-8 overflow-y-auto">
            <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AppLayout
