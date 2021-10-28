import { createContext, useEffect, useState } from "react";
import { data as initialUser } from "../services/localStorage";
import axios from "../config/axios";

const UserContext = createContext();
function UserContextPervider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [userNotification, setUserNotification] = useState([]);
  const [arrUserCommu, setArrUserCommu] = useState([]);
  const [Commu, setCommu] = useState([]);

  useEffect(() => {
    axios
      .get("/feeds/allusers-communitys")
      .then(res => setArrUserCommu(res.data.alldata))
      .catch(err => console.dir(err));
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get("/feeds/usercommunitys")
        .then(res => setCommu(res.data.communityLists))
        .catch(err => console.dir(err));
      // axios
      //   .get("/notification")
      //   .then(res => setUserNotification(res.data.notification))
      //   .catch(err => console.log(err));
    }
  }, [user]);

  console.log(Commu);

  return <UserContext.Provider value={{ user, setUser, arrUserCommu, Commu }}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextPervider };
