import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import guy from "../assets/guy.png";

const Register = ({goToForm}) =>{
  return(
    <section className="registerSection">
      <Link to="/form">
      <div className="scroll text1" onClick={goToForm}>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
      </div>
      </Link>
      <Link to="/form">
      <div className="scroll text2" onClick={goToForm}>
      <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
      </div>
      </Link>
      <div className="imgContainer">
        {/* <img src={guy} alt="" className="registerImg" /> */}
      </div>
      <div className="footer">
        <div className="connect">
          <h4>Connect with us</h4>
          <div className="contacts">
            <p>Anantshree: +91 99204 70207</p>
            <p>Shubhayu: +91 93202 74901</p>
          </div>
        </div>
        <div className="socials">
        <a target="_blank" className="chakra-link css-spn4bz" href="https://www.facebook.com/rocktaves"><svg stroke="#D3D3D3" fill="#D3D3D3" strokeWidth="0" viewBox="0 0 512 512" fontSize="2rem"  width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>
        <a target="_blank" className="chakra-link css-spn4bz" href="https://open.spotify.com/user/31n22nt6v5hkfl4rytgxwjg7xbhq?si=aXyid_92R9SggJ1trRX9gg&amp;utm_source=whatsapp"><svg stroke="#D3D3D3" fill="#D3D3D3" strokeWidth="0" viewBox="0 0 496 512" fontSize="2rem"  width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg></a>
        <a target="_blank" className="chakra-link css-spn4bz" href="https://www.instagram.com/rocktaves.bits/"><svg stroke="#D3D3D3" fill="#D3D3D3" strokeWidth="0" viewBox="0 0 448 512" fontSize="2rem"  width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
        </div>
      </div>
    </section>
  );
};

export default Register;