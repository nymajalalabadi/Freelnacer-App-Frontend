import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">Your Projects</h1>
      <Modal title="Add new project"  open={open} onClose={() => setOpen(false)} >
        <CreateProjectForm onClose={() => setOpen(false)}/>
      </Modal>
      <button onClick={() => setOpen(true)} className="btn btn--primary flex items-center gap-x-2" >
        <HiOutlinePlus />
        <span> Add new project </span>
      </button>
    </div>
  );
}
export default ProjectsHeader;