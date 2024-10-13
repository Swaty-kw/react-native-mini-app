const getAllcategories = async()=>{
    try {
        const response = await instance.get("/mini-project/api/categories/")
        return response.data;
    } catch (error) {
        
    }

}




export {getAllcategories}