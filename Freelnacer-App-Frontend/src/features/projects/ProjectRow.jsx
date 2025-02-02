import Table from '../../ui/Table'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toNumbersWithComma } from '../../utils/toNumbers'
import truncateText from '../../utils/truncateText'

function ProjectRow({project, index}) {
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td>{truncateText(project.title)}</td>
        <td>{project.category.title}</td>
        <td>{toNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td>
            <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag) => {
                <span className="badge badge--secondary" key={tag}>{tag}</span>
            })}
            </div>
        </td>
        <td>{project.freelancer?.name || "-"}</td>
        <td>
            {project.status === "OPEN" ? ( <span className="badge badge--success">OPEN</span> ) : (<span className="badge badge--danger">CLOSED</span>)}
        </td>
        <td>...</td>
    </Table.Row>
  )
}

export default ProjectRow
