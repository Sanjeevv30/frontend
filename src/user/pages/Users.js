import React from "react";
import UserList from "../components/UserList";
function User() {
    const USER =[
        {
        id:'uid 1',
        name:'Pushi Cat',
        image:'https://loremflickr.com/640/360',
        places:3
    }
]
  return <UserList item={USER} />;
}
export default User;
