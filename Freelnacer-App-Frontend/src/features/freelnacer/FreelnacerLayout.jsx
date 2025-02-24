import AppLayout from '../../ui/AppLayout'
import Siderbar from '../../ui/Siderbar'
import CustomNavlink from '../../ui/CustomNavlink'
import { HiCollection, HiHome, HiOutlineViewGrid } from 'react-icons/hi'

function FreelnacerLayout() {
  return (
    <AppLayout>
      <Siderbar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>proposals</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiOutlineViewGrid />
          <span>Projects</span>
        </CustomNavlink>
      </Siderbar>
    </AppLayout>
  )
}

export default FreelnacerLayout
