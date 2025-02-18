import http from "./httpService";

export function changeProposalStatusApi({ id, data }) 
{
  // {status, projectId}
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}


export function getProposalsApi() 
{
  // {status, projectId}
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function createProposalApi({ data })
{
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
