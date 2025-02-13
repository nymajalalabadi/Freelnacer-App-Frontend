
function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      
    </div>
  )
}

export default Stats
