import axios from "axios"
import { apiUrl } from "../constants"
import { ISignupDetails } from "../interfaces"

export const signUp = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  role: "mentor" | "fresher"
) => {
  const postHeader = {
    userDetails: {
      email,
      password,
      first_name,
      last_name
    },
    role
  }
  try {
    const result = await axios.post(`${apiUrl}/auth/signup`, postHeader)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export const login = async (
  email: string,
  password: string,
  role: "admin" | "mentor" | "fresher"
) => {
  const postHeader = {
    userDetails: {
      email,
      password
    },
    role
  }
  try {
    const result = await axios.post(`${apiUrl}/auth/login`, postHeader)
    console.log(result.data.authorization)
    sessionStorage.setItem("accessToken", result.data.authorization as string)
  } catch (error) {
    console.log(error)
  }
}
