import { useState } from 'react';
import Table from '../../ui/Table'
import toLocalDateShort from '../../utils/toLocalDateShort'
import truncateText from '../../utils/truncateText';
import Modal from '../../ui/Modal';
import ChangeProposalStatus from './ChangeProposalStatus';

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
      label: "Confirmed",
      className: "badge--success",
    },
];

function ProposalRow( {proposal, index }) {
    const { status } = proposal;

    //const color = status === "2" ? "primary" : status === "1" ? "success" : "danger";

    const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{toLocalDateShort(proposal.duration)} day</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={() => setOpen(false)} title="Change request status" >
            <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>Change state</button>
      </td>
    </Table.Row>
  )
}

export default ProposalRow
