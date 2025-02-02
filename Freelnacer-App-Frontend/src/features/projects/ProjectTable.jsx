import useOwnerProjects from "./useOwnerProjects";
import Loading from '../../ui/Loading';
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
    const { isLoading, projects } = useOwnerProjects();
    
    if (isLoading)
    {
      return <Loading />
    }

    if(projects.length === 0)
    {
      return <Empty resourceName="Project" />
    }

  return (
    <Table>
        <Table.Header>
            <th>#</th>
            <th>Project Title</th>
            <th>Category</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Tags</th>
            <th>Freelnacer</th>
            <th>Status</th>
            <th>Operation</th>
        </Table.Header>
        <Table.Body>
            {projects.map((project, index) => {
                <ProjectRow key={project._id} project={project} index={index}/>
            })}
        </Table.Body>
    </Table>
  )
}

export default ProjectTable
