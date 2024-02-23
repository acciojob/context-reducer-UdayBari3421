import React, { createContext, useContext, useState } from "react";
import "../styles/App.css";
import Compo from "./Compo";

const UserContext = createContext();

const App = () => {
  const [obj, setObj] = useState({
    currentUser: null,
    isAuth: false,
  });

  const [currentUser, setCurrentUser] = useState({
    user: null,
    state: false,
  });

  const Component = () => {
    return (
      <div>
        <h2>Hi {obj.currentUser} again, are you in Agra?</h2>
      </div>
    );
  };

  const onLogin = () => {
    setObj({ ...obj, currentUser: currentUser.user, isAuth: true });
  };

  const onSignout = () => {
    setObj({ ...obj, currentUser: null, isAuth: false });
  };

  const onClearList = () => {
    setObj({ ...obj, currentUser: null });
  };

  return (
    <div>
      <UserContext.Provider value={{ obj, setObj }}>
        <h3>use Context Hook</h3>
        {obj.currentUser && (
          <>
            <Compo Text={"Hello " + obj.currentUser} />
            <Compo Text={"Component"} compNo={1} />
            <Compo Text={"Component"} compNo={2} />
            <Compo Text={"Component"} compNo={3} />
            <Compo Text={"Component"} compNo={4} />
            <Compo Text={"Component"} compNo={5} />
          </>
        )}
        <h2>context reducer hook</h2>
        {obj.currentUser != null && <Component />}
      </UserContext.Provider>

      <form onSubmit={(e) => e.preventDefault()}>
        <span>
          <button onClick={onLogin}>Login</button>
          <button onClick={onSignout}>Signout</button>
        </span>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setCurrentUser({ ...currentUser, user: e.target.value });
            }}
          />
        </div>
        <span>
          <button onClick={onClearList}>Clear List</button>
        </span>
      </form>
    </div>
  );
};

export default App;
