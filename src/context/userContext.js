import { createContext, useEffect, useState } from "react";
import { data as initialUser, setToken } from "../services/localStorage";
import axios from "../config/axios";

const UserContext = createContext();
function UserContextPervider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [userNotification, setUserNotification] = useState([]);
  const [arrUserCommu, setArrUserCommu] = useState([]);
  const [Commu, setCommu] = useState([]);

  const getNewToken = async () => {
    try {
      await axios
        .get("/users/newtoken")
        .then((res) => {
          console.log("token", res.data.token);
          setToken(res.data.token);
        })
        .catch((err) => console.dir(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    axios
      .get("/feeds/allusers-communitys")
      .then((res) => setArrUserCommu(res.data.alldata))
      .catch((err) => console.dir(err));
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get("/feeds/usercommunitys")
        .then((res) => setCommu(res.data.communityLists))
        .catch((err) => console.dir(err));
      // axios
      //   .get("/notification")
      //   .then(res => setUserNotification(res.data.notification))
      //   .catch(err => console.log(err));
    }
  }, [user]);

  console.log(Commu);

  return (
    <UserContext.Provider
      value={{ user, setUser, arrUserCommu, Commu, getNewToken }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextPervider };
