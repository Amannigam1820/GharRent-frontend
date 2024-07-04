import React from "react";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />{" "}
            </span>
            <span>Username: <b>John Doe</b></span>
            <span>Email: <b>john @gmail.com</b></span>
            <span>Contact: <b>1234567890</b></span>

          </div>
          <div className="title">
            <h1>My Property</h1>
            <button>Add Property</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved Property</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
