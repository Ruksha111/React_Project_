import React from "react";
import Navbar from "./Components/navbar"
import Main from "./Components/main"
import data from "./data.js"
import Footer from "./Components/footer";
export default function App()
{ const card=data.map(item=>
  {return(
    <Main 
     title={item.title}
     location={item.location}
     googleMapsUrl={item.googleMapsUrl}
     startDate={item.startDate}
     endDate={item.endDate}
     description={item.description}
     imageUrl={item.imageUrl}
    />
  )

  })


  return(
    <div>
      <Navbar />
      {card}
      <Footer />

    </div>
  )
}