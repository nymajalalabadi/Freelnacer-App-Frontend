import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...data }) 
{ // data => {projectId, status}
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}

export function getProposalsApi() 
{
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function createProposalApi({ data })
{
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
