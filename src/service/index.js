/** This file is used to define getData function that will be used in the application **/
/** API_URL LOCALHOST, change this when in production */
const API_URL =
  "https://raw.githubusercontent.com/jcommaret/GDEF/master/assets/data/est/data.json";

export function getData() {
  return fetch(`${API_URL}`).then(async (res) => await res.json());
}
