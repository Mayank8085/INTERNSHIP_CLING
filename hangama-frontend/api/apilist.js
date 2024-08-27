const base_url = `${process.env.BaseUrl}/api/`;
const apilist = {
  registration: base_url + "auth/register",
  login: base_url + "auth/login",
};
export default apilist;
