import { instance } from ".";

const login = async (email, password) => {
  const res = await instance.post("/login", {
    email,
    password,
  });
  return res.data;
};

const register = async (email, password, phone_number) => {
  const res = await instance.post("/register", {
    email,
    phone_number,
    password,
  });
};
export { login, register };
