import styles from "@/components/progress-block/ProgressBlock.module.css";
import Image from "next/image";
import binIcon from "@/public/icons/bin.png";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {User} from "@/types/User";
import {ProgressRecord} from "@/types/ProgressRecord";
import {addProgressRecord, deleteProgressRecord} from "@/lib/api";

interface ProgressBlockProps {
  email: string,
  progress: ProgressRecord[],
  updateUser: Dispatch<SetStateAction<User | null>>
}

const ProgressBlock:FC<ProgressBlockProps> = ({
    email,
    progress,
    updateUser
  }) => {

  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    creationDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      height: '',
      weight: '',
      creationDate: ''
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: Promise<User> = addProgressRecord(formData, email)
    ;
    const user: User = await response;
    updateUser(user)
    clearForm();
  }
  const handleDeleteProgressRecord = async (progressRecord: ProgressRecord, email: string) => {
    const response: Promise<User> = deleteProgressRecord(progressRecord, email);
    const user: User = await response;
    updateUser(user)
  }

  return (
    <div className={styles.wrapper}>
      {progress[0] ?
        progress.map((progressRecord, index) => (
          <div key={index} className={styles.progressRecordContainer}>
            <div className={styles.progressRecordContent}>
              <span>Зріст: <u>{progressRecord.height} см</u></span>
              <span>Вага: <u>{progressRecord.weight} кг</u></span>
              <span>{progressRecord.creationDate}</span>
            </div>
            <Image
              src={binIcon}
              width={20}
              height={20}
              alt="delete"
              onClick={() => handleDeleteProgressRecord(progressRecord, email)}
            />
          </div>
        ))
        :
        <div className={styles.ifNoProgress}> У вас поки немає записів прогресу</div>
      }
      <form className={styles.addProgressRecordForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="height"
          placeholder="Введіть зріст(в см)"
          value={formData.height}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Введіть вагу(в кг)"
          value={formData.weight}
          onChange={handleChange}
        />
        <input
          type="date"
          name="creationDate"
          value={formData.creationDate}
          onChange={handleChange}
        />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default ProgressBlock;