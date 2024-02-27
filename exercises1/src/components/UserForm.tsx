import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const name = useRef(null);
  const email = useRef(null);
  const isActive = useRef(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = {
      name: name.current.value,
      email: email.current.value,
      isActive: isActive.current.checked,
    };
    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" ref={name} />
        Email: <input name="email" ref={email} />
        Active: <input type="checkbox" ref={isActive} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
