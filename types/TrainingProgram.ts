import {Exercise} from "../../project-front/types/Exercise";

export interface TrainingProgram {
  name: string,
  exercises: Exercise[],
}