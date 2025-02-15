import React , {useEffect , useState} from "react";
import "./LandingPage.css"
import Heading from "./Heading";
import Register from "./Register";
import RocktavesInfo from "./RocktavesInfo";
import Rules from "./Rules";
import PastWinners from "./PastWinners";
import AboutUs from "./AboutUs";
import Timeline from "./Timeline";

const LandingPage = ({}) =>{
  
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorCircle = document.getElementById("cursorFollower");


    if (window.innerWidth >= 1000) {
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;

        cursor.style.display = "block";
        cursorCircle.style.display = "block";
        cursor.style.opacity = "1";
        cursorCircle.style.opacity = "1";
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;

        let _clientX = clientX - 12;
        let _clientY = clientY - 12;

        cursorCircle.animate(
          {
            left: `${_clientX}px`,
            top: `${_clientY}px`,
          },
          { duration: 600, fill: "forwards" }
        );
        if (event.target.style.cursor === "pointer") {
          cursorCircle.style.transform = "scale(1.75)";
        } else {
          cursorCircle.style.transform = "scale(1)"; 
        }
      };
    }
    return () => {
      window.onpointermove = null;
    };
  }, []);

  return (
    <div className="landingPageWrapper">
      <div className="cursor" id="cursor"></div>
      <div className="cursorFollower" id="cursorFollower"></div>
      <section className="headingWrapper">
        <div className="fixedBG"></div>
        <Heading />
      </section>
      <RocktavesInfo />
      <Rules />
      <Timeline />
      <PastWinners 
        Heading={true}
        First = {"INIDAN OCEAN"}
        Second = {"PARIKRAMA"}
      />
      <PastWinners 
        Heading={false}
        First = {"PRESTORIKA"}
        Second = {"THEM CLONES"}
      />
      <AboutUs />
      <Register />
    </div>
  )
}

export default LandingPage;
