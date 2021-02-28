import axios from "axios"

export const getProductBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/products/${slug}`)
        console.log(res)
    }
}