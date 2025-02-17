import useProjects from '../../../hooks/useProjects';
import Empty from '../../../ui/Empty';
import Loading from '../../../ui/Loading';
import Table from '../../../ui/Table';
import ProjectRow from './ProjectRow';

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) 
  {
    return <Loading />;
  }

  if (!projects.length)
  {
    return <Empty resourceName="Projects" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Title Project</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Common</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );

}

export default ProjectsTable
