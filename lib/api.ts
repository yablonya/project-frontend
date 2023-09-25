import axios from "axios";

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
    console.error(`An error occurred while receiving data training program: ${name}`, message)
  }
}