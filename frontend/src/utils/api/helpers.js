const generateToken = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    token = Math.random()
      .toString(36)
      .substr(-8);
    localStorage.setItem("token", token);
  }

  return token;
};

const getHeaders = () => {
  return {
    Authorization: generateToken()
  };
};

const getApiUrl = () => "http://localhost:3001";

export { getHeaders, getApiUrl };
