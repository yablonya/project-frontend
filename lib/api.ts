import axios from "axios";
import {User} from "@/types/User";
import {ProgressRecord} from "@/types/ProgressRecord";
import {RegistrationData} from "@/types/RegistrationData";

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
    const response = await axios.get(`http://localhost:8080/programs/${name}`);
    return response.data;
  } catch (message) {
    console.error(`An error occurred while receiving training program with name: ${name}`, message)
  }
}

export const registerUser = async (formData: RegistrationData) => {
  try {
    const response = await axios.post('http://localhost:8080/users/register', formData);
    return response.data;
  } catch (message) {
    console.error('An error occurred while adding new user', message)
  }
}

export const getUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/users/get-user-info?email=${email}&password=${password}`
    );
    return response.data;
  } catch (message) {
    console.error(`An error occurred while getting user with email: ${email}`, message)
  }
}

export const addNote = async (email: string, note: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/users/add-note?note=${note}&email=${email}`
    );
    return response.data;
  } catch (message) {
    console.error('An error occurred while adding new note', message)
  }
}

export const deleteNote = async (email: string, note: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/users/delete-note?note=${note}&email=${email}`
    );
    return response.data;
  } catch (message) {
    console.error('An error occurred while deleting note', message)
  }
}

export const addProgressRecord = async (formData: ProgressRecord, email: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/users/add-progress-record?email=${email}`, formData
    );
    return response.data;
  } catch (message) {
    console.error('An error occurred while adding new progress record', message)
  }
}

export const deleteProgressRecord = async (progressRecord: ProgressRecord, email: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/users/delete-progress-record?email=${email}`, progressRecord
    );
    return response.data;
  } catch (message) {
    console.error('An error occurred while deleting progress record', message)
  }
}
