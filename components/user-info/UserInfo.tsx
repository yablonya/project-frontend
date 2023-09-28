"use client";

import {useState} from "react";
import LoginForm from "@/components/login-form/LoginForm";
import {User} from "@/types/User";

const UserInfo = () => {
  const [user , setUser] = useState<User | null>(null);

  return (
    <div>
      <LoginForm setUser={setUser}/>
    </div>
  );
}

export default UserInfo;

