import {Exercise} from "@/types/Exercise";

export interface TrainingProgram {
  name: string,
  exercises: Exercise[],
}