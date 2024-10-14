import instance from ".";

const getItems = async () => {
  try {
    const response = await instance.get("/mini-project/api/items/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



export { getItems };
