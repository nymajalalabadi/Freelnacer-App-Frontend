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

