import React, { useEffect } from "react";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userNotExist } from "../../redux/reducer/auth";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    // Redirect to home page if user is not available
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      const response = apiRequest.post("/auth/logout");
      dispatch(userNotExist());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profilePage">
    {user && (
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
                src={user.avatar || "noavatar.jpg"}
                alt=""
              />{" "}
            </span>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <span>
              Email: <b>{user.email}</b>
            </span>
            <span>
              Contact: <b>{user.contact}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My Property</h1>
            <button>Add Property</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved Property</h1>
          </div>
          <List />
        </div>
      </div>
    )}
    <div className="chatContainer">
      <div className="wrapper">
        {/* Assuming Chat component exists and is correctly implemented */}
        <Chat />
      </div>
    </div>
  </div>
  
  )

};

export default Profile;
