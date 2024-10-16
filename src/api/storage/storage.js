import { setItemAsync, getItemAsync } from "expo-secure-store";
const settoken = async (token) => {
  try {
    const token = await setItemAsync("token", token);
  } catch (error) {
    console.log(error);
  }
};
const gettoken = async () => {
  try {
    const token = await getItemAsync("token");
    return token;
  } catch (error) {
    console.log(error);
  }
};
const deletetoken = async () => {
  try {
    await deleteItemAsync("token");
  } catch (error) {
    console.log(error);
  }
};
export { settoken, gettoken, deletetoken };
