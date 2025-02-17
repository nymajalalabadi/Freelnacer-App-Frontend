import { useState } from 'react'
import Table from '../../../ui/Table';
import truncateText from '../../../utils/truncateText';
import toLocalDateShort from '../../../utils/toLocalDateShort';
import { numberWithCommas } from '../../../utils/toNumbers';

const projectStatus = {
    OPEN: {
      label: "Open",
      className: "badge--success",
    },
    CLOSED: {
      label: "Closed",
      className: "badge--danger",
    },
  };

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);
  
  return (
     <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{numberWithCommas(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`} >
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        
      </td>
    </Table.Row>

  )
}

export default ProjectRow
