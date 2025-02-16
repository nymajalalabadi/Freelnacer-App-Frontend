import Stat from "../../ui/Stat";
import { HiOutlineViewGrid, HiCurrencyDollar, HiCollection, } from "react-icons/hi";

function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat color="primary" title="Projects" value={numOfProjects} icon={<HiOutlineViewGrid className="w-20 h-20" />} />

      <Stat color="green" title="Assigned Projects" value={numOfAcceptedProjects} icon={<HiCurrencyDollar className="w-20 h-20" />} />
      
      <Stat color="orange" title="Requests" value={numOfProposals} icon={<HiCollection className="w-20 h-20" />}/>
    </div>
  )
}

export default Stats
