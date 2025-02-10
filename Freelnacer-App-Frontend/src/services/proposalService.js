import http from "./httpService";

export function changeProposalStatusApi({ id, data }) 
{
  // {status, projectId}
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}