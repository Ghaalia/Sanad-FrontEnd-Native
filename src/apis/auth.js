import { instance } from ".";

const login = async (email, password) => {
  const res = await instance.post("/login", {
    email,
    password,
  });
  return res.data;
};

export { login };
