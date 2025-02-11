import Search from "../components/Search";

import { useState } from "react";

import { IUser } from "../types/user";

import User from "../components/User";

import Error from "../components/Error";

const Home = () => {
  const [users, setUsers] = useState<IUser | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (username: string) => {
    setError(false);
    setUsers(null);

    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: IUser = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUsers(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {users && <User {...users} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
