import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { numberWithCommas } from "../../utils/toNumbers";
import truncateText from "../../utils/truncateText";

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

function ProposalRow({ proposal, index }) {
  const { status, description, duration, price } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td> {toLocalDateShort(duration)} day</td>
      <td>{numberWithCommas(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
