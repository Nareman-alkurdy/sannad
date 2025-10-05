import useGetQuery from "../../../api/halper/useGetQuery"

const API = {
    GET:'/products',
    GET_ONE:'/products/',
    UPDATE:'/products',
    DELETE:'/products',
    ADD:'/products'
}
const KEY= "products"

export const useGetProducts = (params: Record<any, string> = {}, options: Record<any, string> = {}) => useGetQuery(KEY, API.GET, params, options)
// export const useAddCustomer = () => useAddMutation(KEY, API.ADD)

