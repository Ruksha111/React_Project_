import React from "react";
export default function Main(props)
{
  return(
    <div className="main-container">
      <div>
      <img src={props.imageUrl} className="img"/>
      </div>
    
      <div>
       <div class="loc-container">
        <img src="./location-icon.png" className="icon"/>
       <p class="location">{props.location}</p>
       <a href={props.googleMapsUrl} className="gmaps" target="_blank">View on Google Maps</a>
       </div>
        <p className="title">{props.title}</p>
        <p className="date">{props.startDate}-{props.endDate}</p>
        <p className="desc">{props.description}</p>
       </div>
       
 
    </div>
   
  )
}