import axios from "axios";
  //creating an instance of axios

  const Api = axios.create({
    baseURL : "http://localhost:8000",
    withCredentials : true,
    headers : {
        "content-Type" : "multipart/form-data"
    }

  });

export const testApi = () => Api.get('/test')

//creating register api


export const registerUserApi = (data) => Api.post('/api/user/create',data)


//creating login api
export const loginUserApi = (data) => Api.post('api/user/login',data)

// create product create api
export const createProductApi = (data) => Api.post('/api/product/create',data)

// fetch all products
export const getAllProducts = () => Api.get('/api/product/get_all_products')
