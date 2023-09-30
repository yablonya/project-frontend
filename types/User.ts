import {ProgressRecord} from "@/types/ProgressRecord";

export interface User {
  password: string;
  surname: string;
  name: string;
  email: string,
  notes: string[],
  progress: ProgressRecord[],
}