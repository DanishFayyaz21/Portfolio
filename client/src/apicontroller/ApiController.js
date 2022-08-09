import Axios from 'axios'

const POST = async (route, formData) => {
  var result = await Axios.post(process.env.REACT_APP_API_URL+route, formData)
  return result.data
}

const GET = async (route) => {
  var result = await Axios.get(process.env.REACT_APP_API_URL+route)
  return result.data;
}

const DELETE = async (route, id) => {
  var result = await Axios.delete(process.env.REACT_APP_API_URL+route+'/'+id)
  return result.data;
}

const PUT = async (route, formData, id) => {
  var result = await Axios.put(process.env.REACT_APP_API_URL+route+'/'+id, formData)
  return result.data
}

const GETID = async (route, id) => {
  var result = await Axios.get(process.env.REACT_APP_API_URL+route+'/'+id)
  return result.data;
}

export { POST, GET, DELETE, PUT, GETID }
