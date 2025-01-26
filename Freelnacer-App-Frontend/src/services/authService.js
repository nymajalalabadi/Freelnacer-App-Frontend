import http from "./httpService";

export function getOPT(data){
    return http.post("/user/get-opt", data)
}

export function checkOPT(data){
    return http.post("/user/check-opt", data)
}