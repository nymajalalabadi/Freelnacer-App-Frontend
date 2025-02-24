import http from "./httpService";


export function getOwnerProjectApi() {
    return http.get("/project/owner-projects").then(({data}) => data);
}

export function CreateProjectApi(data) {
    return http.delete("/project/add", data).then(({data}) => data);
}

export function removeProjectApi(id) {
    return http.delete(`/project/${id}`).then(({data}) => data);
}

export function editProjectApi( id, newProject ) {
    return http.patch(`/project/update/${id}`, newProject).then(({data}) => data);
}

export function toggleProjectStatusApi({ id, data }) {
    //data : {status:"OPEN"}
    return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}
  

export function getProjectApi({ id }) {
    return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function getProjectsApi(qs) {
    return http.get(`/project/list${qs}`).then(({data}) => data);
}