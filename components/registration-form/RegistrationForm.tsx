import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {registerUser} from "@/lib/api";
import {User} from "@/types/User";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: Promise<User | null> = registerUser(formData);
    const user: User | null = await response;
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ім'я:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Прізвище:</label>
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Пароль:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <button onClick={() => closeModal()} type="button">Закрити</button>
      <button type="submit">Зареєструватись</button>
    </form>
  );
};

export default RegistrationForm;