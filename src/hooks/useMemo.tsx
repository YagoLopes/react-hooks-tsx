import React, { useState, useEffect, useMemo } from "react";

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [users, setUsers] = useState<[IUser]>();

  //O useMemo serve para memorizar um valor.
  //Essa função junta todos os nomes e separa por virgula
  //Ela só será executada se o array de ususarios mudar.

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  return <div />;
}

export default App;
