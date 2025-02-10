import Table from '../../ui/Table'
import toLocalDateShort from '../../utils/toLocalDateShort'
import truncateText from '../../utils/truncateText'

function ProposalRow( {proposal, index }) {
    const { status } = proposal;

    //const color = status === "2" ? "primary" : status === "1" ? "success" : "danger";

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
        <span className={`badge bg--${color}`}>{proposal.status}</span>
      </td>
      <td>
        ++
      </td>
    </Table.Row>
  )
}

export default ProposalRow
