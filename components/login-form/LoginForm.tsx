import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {checkForEmptiness} from "@/utils/workWithUser";
import {User} from "@/types/User";
import {getUser} from "@/lib/api";
import styles from "@/components/login-form/LoginForm.module.css";

interface LoginFormProps {
  setUser: Dispatch<SetStateAction<User | null>>,
}

const LoginForm:FC<LoginFormProps> = ({setUser}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isUserLogged, setIsUserLogged] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      email: '',
      password: ''
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFieldEmpty = checkForEmptiness(formData, setIsUserLogged);

    if (isFieldEmpty !== '2') {
      const response: Promise<User | null> = getUser(formData.email, formData.password);
      const user: User | null = await response;
      user && setUser(user);
      console.log(user);
      setIsUserLogged('1');
      clearForm();
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h4>Email</h4>
        <input
          type="email"
          name="email"
          placeholder="Введіть email"
          value={formData.email}
          onChange={handleChange}
        />
        <h4>Пароль</h4>
        <input
          type="password"
          name="password"
          placeholder="Введіть пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Показати інформацію</button>
      </form>
      {isUserLogged === '2' &&
          <h4 style={{color: "red"}}>Будь ласка заповніть всі поля!</h4>
      }
    </div>
  );
}

export default LoginForm;