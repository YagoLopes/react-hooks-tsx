import React, { useState } from "react";

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [user, setUser] = useState<IUser>();

  async function loadData() {
    const response = await fetch("https://api.github.com/users/YagoLopes");
    const data = await response.json();
    setUser(data);
  }

  return <div>{user?.name}</div>;
}

export default App;
