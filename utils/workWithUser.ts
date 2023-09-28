import {Dispatch, SetStateAction} from "react";
import {User} from "@/types/User";

export const checkForEmptiness = (obj: object, func: Dispatch<SetStateAction<string>>) => {
  const formValues = Object.values(obj);

  for (let value in formValues) {
    if (formValues[value] === '') {
      func('2');
      return '2';
    }
  }
  return '1';
};