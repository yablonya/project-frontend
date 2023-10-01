import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {registerUser} from "@/lib/api";
import {User} from "@/types/User";
import styles from "@/components/registration-form/RegistrationForm.module.css";
import {checkForEmptiness} from "@/utils/workWithUser";

interface RegistrationFormProps {
  closeModal: Dispatch<SetStateAction<void>>,
}

const RegistrationForm: FC<RegistrationFormProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [isUserRegistered, setIsUserRegistered] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: ''
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const num = checkForEmptiness(formData, setIsUserRegistered);

    if (num !== '2') {
      const response: Promise<User | null> = registerUser(formData);
      const user: User | null = await response;
      console.log(user);
      setIsUserRegistered('1');
      clearForm();
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h4 className={styles.inputHeader}>Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <h4>Surname</h4>
        <input
          type="text"
          name="surname"
          placeholder="Enter your surname"
          value={formData.surname}
          onChange={handleChange}
        />

        <h4>Email</h4>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <h4>Password</h4>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className={styles.controls}>
          <button type="submit">Register</button>
          <button onClick={() => closeModal()} type="button">Close</button>
        </div>
      </form>

      {isUserRegistered === '1' &&
          <h4 style={{color: "green"}}>The user has been successfully registered!</h4>
      }
      {isUserRegistered === '2' &&
          <h4 style={{color: "red"}}>Please fill in all fields!</h4>
      }
    </div>
  );
};

export default RegistrationForm;