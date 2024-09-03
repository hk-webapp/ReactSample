import axios from "axios";

export function getData(url: string) {
  return axios.get(url, { responseType: "json" });
}

export function postData(url: string, data: any) {
  return axios.post(url, data);
}
