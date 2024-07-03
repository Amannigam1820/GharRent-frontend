import React from 'react'
import "./ListPage.scss"
import {listData} from "../../lib/dummydata"
import Filter from '../../components/filter/Filter';
import Card from "../../components/card/Card"
import Map from '../../components/map/Map';
const ListPage = () => {
  const data = listData;
  // console.log(data[0].img);
  return (
    <div class="listPage">
      <div class="listContainer">
        <div class="wrapper">
          <Filter/>
          {
            data.map((item)=>(
              <Card key={item.id} item = {item}/>
              
            ))
          }
        </div>
      </div>
      <div class="mapContainer">
        <Map items = {data}/>
      </div>
    </div>
  )
}

export default ListPage