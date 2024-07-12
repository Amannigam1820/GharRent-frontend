import React, { useEffect } from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profile.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userExists, userNotExist } from "../../redux/reducer/auth";

import { useUserInfoQuery } from "../../redux/api/api";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const updatedUserInfo = useUserInfoQuery({ userId: user.id });

  useEffect(() => {
    if (updatedUserInfo?.data?.user) {
      dispatch(userExists(updatedUserInfo.data.user));
    }
  }, [updatedUserInfo, dispatch]);

  useEffect(() => {
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
              <Link to="/profile/update">
                <button>Update Profile</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:{" "}
                <img
                  src={updatedUserInfo?.data?.user.avatar || "noavatar.jpg"}
                  alt=""
                />{" "}
              </span>
              <span>
                Username: <b>{updatedUserInfo?.data?.user.username}</b>
              </span>
              <span>
                Email: <b>{updatedUserInfo?.data?.user.email}</b>
              </span>
              <span>
                Contact: <b>{updatedUserInfo?.data?.user.contact}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>My Property</h1>
              <Link to="/add-property">
                <button>Add Property</button>
              </Link>
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
  );
};

export default Profile;
