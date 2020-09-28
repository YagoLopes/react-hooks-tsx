import React, { useState, useMemo, useCallback } from "react";

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [users, setUsers] = useState<[IUser]>();
  const names = useMemo(() => users?.map((user) => user.name).join(", "), [
    users,
  ]);

  //OBS: Sempre tipar os parametros da useCallback

  const greeting = useCallback(() => alert(`Hello ${names}`), [names]);

  return <div />;
}

export default App;
