import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
import { useSinglePropertyQuery } from "../../redux/api/api";
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();

 // const singleProperty  = useSinglePropertyQuery({propertyId:id});

  const {data:singleProperty, isLoading, error} = useSinglePropertyQuery({propertyId:id});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!singleProperty?.post) {
    return <div>No data available</div>;
  }

  console.log(singleProperty.post);

//  if(error){
//   <div>{error.message}</div>
//  }

//   console.log(data);

  //console.log(singleProperty.data?.post);
 


  return isLoading ? (<div>Loading....</div>) :(
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singleProperty.post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singleProperty.post.title}</h1>
                <div className="address">
                  <img src="pin.png" />
                  <span>{singleProperty.post.address}</span>
                </div>
                <div className="price">${singleProperty.post.price}</div>
              </div>
              <div className="user">
                <img src={singleProperty.post.user.avatar} />
                <span>{singleProperty.post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{singleProperty.post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="utility.png" alt="" />
              <div className="featureText">
                <span>Utility</span>
                {
                  singleProperty.post.postDetail.utilities === "owner" ? 
                  <p>Owner is Responsible</p> : <p>Tenant is Responsible</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {
                  singleProperty.post.postDetail.pet === "allowed" ? 
                  <p>Pets Allowed</p> : <p>Pets not Allowed</p>
                }
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{singleProperty.post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
          <div className="size">
            <img src="size.png" alt="" />
            <span>{singleProperty.post.postDetail.size} sqft</span>
          </div>
          <div className="size">
            <img src="bed.png" alt="" />
            <span>{singleProperty.post.bedroom} Beds</span>
          </div>
          <div className="size">
            <img src="bath.png" alt="" />
            <span>{singleProperty.post.bathroom} Bathroom </span>
          </div>
          </div>
          <p className="title">Neaby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{singleProperty.post.postDetail.school > 999 ? (singleProperty.post.postDetail.school/1000).toFixed(1) + "km" : singleProperty.post.postDetail.school + "m"} away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{singleProperty.post.postDetail.bus > 999 ? (singleProperty.post.postDetail.bus/1000).toFixed(1) + "km" : singleProperty.post.postDetail.bus + "m"} away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{singleProperty.post.postDetail.
                  restaurant > 999 ? (singleProperty.post.postDetail.restaurant/1000).toFixed(1) + "km" : singleProperty.post.postDetail.
                  restaurant + "m"}away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singleProperty.post]} />
          </div>
          <div className="button">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SinglePage;
