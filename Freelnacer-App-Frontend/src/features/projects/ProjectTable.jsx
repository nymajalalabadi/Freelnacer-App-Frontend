import useOwnerProjects from "./useOwnerProjects";
import Loading from '../../ui/Loading';
import Empty from "../../ui/Empty";

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
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>Project Title</th>
            <th>Category</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Tags</th>
            <th>Freelnacer</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.category.title}</td>
                <td>{project.budget}</td>
                <td>{new Date(project.deadline).toLocaleDateString()}</td>
                <td>
                  <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => {
                      <span className="badge badge--secondary" key={tag}>{tag}</span>
                    })}
                  </div>
                </td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>
                  {project.status === "OPEN" ? (
                    <span className="badge badge--success">OPEN</span>
                  ) : (
                    <span className="badge badge--danger">CLOSED</span>
                  )}
                </td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable
