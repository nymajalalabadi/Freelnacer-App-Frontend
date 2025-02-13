import { HiCollection, HiHome } from "react-icons/hi"
import AppLayout from "../../ui/AppLayout"
import CustomNavlink from "../../ui/CustomNavlink"
import Siderbar from "../../ui/Siderbar"

function OwnerLayout() {
  return (
    <AppLayout>
      <Siderbar>
            <CustomNavlink to="/owner/dashboard">
                <HiHome className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium leading-none relative top-[4px]">Dashboard</span>
            </CustomNavlink>
            <CustomNavlink to="/owner/projects">
              <HiCollection className="w-5 h-5 flex-shrink-0"/>
              <span className="text-sm font-medium leading-none relative top-[3px]">Projects</span>
            </CustomNavlink>
      </Siderbar>
    </AppLayout>
  )
}

export default OwnerLayout
