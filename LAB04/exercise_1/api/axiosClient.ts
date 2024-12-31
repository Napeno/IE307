import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"
const axiosClient = axios.create({
	baseURL: "https://fakestoreapi.com/",
})

const onRequest = async (config: any) => {
	try {
		return config
	} catch (error: any) {
		console.log(error)
	}
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.log(error.request?.status)

	return Promise.reject(error.request)
}
const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response
}
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
	console.error(error.response?.status)
	return Promise.reject(error.response)
}
const setupInterceptors = (axiosInstance: AxiosInstance) => {
	axiosInstance.interceptors.request.use(onRequest, onRequestError)
	axiosInstance.interceptors.response.use(onResponse, onResponseError)
	return axiosInstance
}
setupInterceptors(axiosClient)
export { axiosClient }
