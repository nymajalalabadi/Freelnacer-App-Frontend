import { useState } from 'react';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toNumbersWithComma } from '../../utils/toNumbers'
import truncateText from '../../utils/truncateText'
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProject';

function ProjectRow({project, index}) {

    const [isEditOpen, setIsEditOpen] = useState(false);    
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const {removeProject, isDeleting} = useRemoveProject();

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
                <Modal open={isEditOpen} title={`Edit ${project.title}`} onClose={() => setIsEditOpen(false)}>
                    this is modal ....
                </Modal>
                
                <button onClick={() => setIsDeleteOpen(true)} >
                    <HiOutlineTrash className="w-5 h-5 text-error" />
                </button>
                <Modal open={isDeleteOpen} title={`Delete ${project.title}`} onClose={() => setIsDeleteOpen(false)}>
                    <ConfirmDelete resourceName={project.title} onClose={() => setIsDeleteOpen(false)} 
                        onConfirm={() => removeProject(project._id, {
                        onSuccess: () => setIsDeleteOpen(false),
                        onError: () => setIsDeleteOpen(false)
                    })} disabled={false} />
                </Modal>
            </div>
        </td>
    </Table.Row>
  )
}

export default ProjectRow
