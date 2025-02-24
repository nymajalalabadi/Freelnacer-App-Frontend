import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Awaiting approval",
    className: "badge--secondary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {

  const [open, setOpen] = useState(false);
  const { status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal title="Change user status" open={open} onClose={() => setOpen(false)}>
            <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>Change user status</button>
      </td>
    </Table.Row>
  );
}
export default UserRow;

