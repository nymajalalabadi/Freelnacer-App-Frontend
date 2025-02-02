import { useState } from 'react';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toNumbersWithComma } from '../../utils/toNumbers'
import truncateText from '../../utils/truncateText'
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

function ProjectRow({project, index}) {

    const [isEditOpen, setIsEditOpen] = useState(false);    

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
        <td>
            <div className="flex items-center gap-x-4">
                <button onClick={() => setIsEditOpen(true)}>
                    <TbPencilMinus className="w-5 h-5 text-primary-900" />
                </button>
                <Modal open={isEditOpen} title="modal title" onClose={() => setIsEditOpen(false)}>this is modal ....</Modal>
                <button>
                    <HiOutlineTrash className="w-5 h-5 text-error" />
                </button>
            </div>
        </td>
    </Table.Row>
  )
}

export default ProjectRow
