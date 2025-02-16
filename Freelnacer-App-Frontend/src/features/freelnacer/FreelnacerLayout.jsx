import AppLayout from '../../ui/AppLayout'
import Siderbar from '../../ui/Siderbar'
import CustomNavlink from '../../ui/CustomNavlink'
import { HiCollection, HiHome } from 'react-icons/hi'

function FreelnacerLayout() {
  return (
    <AppLayout>
      <Siderbar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>Dashboard</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiCollection />
          <span>Projects</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>Requests</span>
        </CustomNavlink>
      </Siderbar>
    </AppLayout>
  )
}

export default FreelnacerLayout
