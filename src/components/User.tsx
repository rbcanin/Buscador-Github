import { IUser } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import classes from "./User.module.css";

const User = ({ login, avatar_url, location, followers, following }: IUser) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={classes.userStats}>
        <div>
          <p>Seguidores</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
