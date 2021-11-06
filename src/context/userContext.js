import { createContext, useEffect, useState } from "react";
import { data as initialUser, setToken } from "../services/localStorage";
import axios from "../config/axios";

const UserContext = createContext();
function UserContextPervider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [userNotification, setUserNotification] = useState([]);

  const [userInteraction, setUserInteraction] = useState([]);
  const getNewToken = async () => {
    try {
      await axios
        .get("/users/newtoken")
        .then(res => {
          console.log("token", res.data.token);
          setToken(res.data.token);
        })
        .catch(err => console.dir(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      const fetch = async () => {
        try {
          const res = await axios.get("/posts/getaction");
          setUserInteraction(res.data.action);
        } catch (err) {
          console.dir(err);
        }
      };
      fetch();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getNewToken,
        userInteraction,
        setUserInteraction,
        setUserNotification,
        userNotification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextPervider };
