import axios from "axios";

const getCatalogProducts = (page) => {
    return axios
        .get(`http://localhost:8081/api/v1/product/pagination?page=${page - 1}&size=16`)
}

const getBrandsList = () => {
    return axios
        .get('http://localhost:8081/api/v1/brand')
}

export { 
    getCatalogProducts,
    getBrandsList 
}

