import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card"
import "./UserList.css";
const UserList = (props) => {
  if (props.item.length === 0) {
    <Card>
    return <h1>User Not Exist</h1>;
    </Card>
  }
  return (
    <ul>
      {props.item.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UserList;
