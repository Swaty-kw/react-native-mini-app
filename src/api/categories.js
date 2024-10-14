import instance from ".";

const getAllcategories = async () => {
  try {
    const response = await instance.get("/mini-project/api/categories/");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllcategories };
