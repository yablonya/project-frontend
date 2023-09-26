import axios from "axios";
import {User} from "@/types/User";

export const getAllTrainingPrograms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/programs');
    return response.data;
  } catch (message) {
    console.error('An error occurred while receiving data about training programs:', message)
  }
}

export const getTrainingProgram = async (name: string) => {
  try {
    const response = await axios.get('http://localhost:8080/programs/${name}');
    return response.data;
  } catch (message) {
    console.error(`An error occurred while receiving training program with name: ${name}`, message)
  }
}

export const registerUser = async (formData: User) => {
  try {
    const response = await axios.post('http://localhost:8080/users/register', formData);
    return response.data;
  } catch (message) {
    console.error('An error occurred while adding new user', message)
  }
}