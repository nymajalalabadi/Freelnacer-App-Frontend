import http from "./httpService";

export function getOPT(data){
    return http.post("/user/get-otp", data).then(({data}) => data.data)
}

export function checkOPT(data){
    return http.post("/user/check-otp", data)
}