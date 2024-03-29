import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };

//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) =>
    res.json()
  );
}

export default function FetchDemo1({ title }: BaseProps) {
  const [userId, /* setUserId*/] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  //Use this to fetch the next user when the "Next User" button is clicked
  //Make sure you understand why we don't need useEffect here
  const fetchNextUser = async () => {
    setLoading(true);
    const nextUser = (user?.id ?? 0) + 1 <= 15 ? (user?.id ?? 0) + 1 : 1;
    //Do not set call setUserId here it will cause an extra render
    const theUser = await fetchUser(nextUser);
    setUser(theUser);
    setLoading(false);
  };

  //Call fetchUser(..) immediately when the component is mounted
  useEffect(() => {
    const cont = new AbortController();
    if (!user) {
      setLoading(true);
      fetchUser(userId, { signal: cont.signal }).then((response) => {
        setUser(response);
        setLoading(false);
        console.log(response);
      });
    }
    return () => {
      cont.abort();
    };
  }, [userId, user]);

  return (
    <>
      <h2>{title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user && JSON.stringify(user)}
          <br />
          <button onClick={fetchNextUser}>Next User</button>
        </>
      )}
    </>
  );
}
