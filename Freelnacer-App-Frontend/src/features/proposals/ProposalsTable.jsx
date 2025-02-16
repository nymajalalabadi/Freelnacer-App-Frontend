import React from 'react'
import useProposals from './useProposals'
import Table from '../../ui/Table'
import Empty from '../../ui/Empty'
import Loading from '../../ui/Loading'
import ProposalRow from './ProposalRow'

function ProposalsTable() {
    const { isLoading, proposals } = useProposals()

    if (isLoading)
    {
        return <Loading />
    }
    
    if(proposals.length === 0)
    {
        return <Empty resourceName="proposals" />
    }
    
    return (
        <Table>
          <Table.Header>
            <th>#</th>
            <th>Description</th>
            <th>DeadLine</th>
            <th>Price</th>
            <th>Status</th>
          </Table.Header>
          <Table.Body>
            {proposals.map((proposal, index) => (
              <ProposalRow key={proposal._id} proposal={proposal} index={index} />
            ))}
          </Table.Body>
        </Table>
      );
    
}

export default ProposalsTable
