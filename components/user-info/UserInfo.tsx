"use client";

import {useState} from "react";
import LoginForm from "@/components/login-form/LoginForm";
import {User} from "@/types/User";

import styles from "@/components/user-info/UserInfo.module.css"
import NotesBlock from "@/components/notes-block/NotesBlock";
import ProgressBlock from "@/components/progress-block/ProgressBlock";

const UserInfo = () => {
  const [user , setUser] = useState<User | null>(null);

  return (
    <div className={styles.wrapper}>
      <LoginForm setUser={setUser}/>
      <h2 className={styles.divider}>User progress and notes</h2>
      {user ?
        <div className={styles.progressNotesBlock}>
          <ProgressBlock email={user.email} progress={user.progress} updateUser={setUser}/>
          <NotesBlock email={user.email} notes={user.notes} updateUser={setUser}/>
        </div>
        :
        <h4 className={styles.userNotLogged}>To receive information about the user, enter an email and password</h4>
      }
    </div>
  );
}

export default UserInfo;

