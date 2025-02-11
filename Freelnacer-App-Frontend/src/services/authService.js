import http from "./httpService";

export function getOPT(data){
    return http.post("/user/get-otp", data).then(({data}) => data.data);
}

export function checkOPT(data){
    return http.post("/user/check-otp", data).then(({data}) => data.data);
}

export function completeProfile(data) {
    return http
      .post("/user/complete-profile", data)
      .then(({ data }) => data.data);
  }

export function getUser(){
    return http.get("/user/profile").then(({data}) => data.data);
}

export function logoutApi() {
    return http.post("/user/logout").then(({ data }) => data.data);
}