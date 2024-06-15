import React from "react";

const contact = () => {
  return (
    <div>
      <div className="contactme">
        <h2 className="touch">GET IN TOUCH</h2>
        <div className="grid22">
          <div className="designs">
            <h1 id="upper">Have any doubt or Querry ?</h1>
            <p id="decorate">
              you can contact with me by fill the form or you can directly
              contact with me or send message by Email
            </p>
            <div className="socials">
              <div className="fontaw">
             <a href="tel:+1234567890">   <i className="fa-solid fa-phone"></i></a>
                <p id="itext">+91 6372442353</p>
              </div>

              <div className="fontaw">
               <a href="mailto:manasrpatra18@gmail.com"> <i className="fa-solid fa-envelope"></i></a>
                <p id="itext">manasrpatar18@gmail.com</p>
              </div>

              <div className="fontaw">
                <i className="fa-brands fa-github"></i>
                <p id="itext">ManasRanjanPatra</p>
              </div>

              <div className="fontaw">
                <i className="fa-solid fa-location-dot"></i>
                <p id="itext">Balasore,Bahanaga,Shibapura</p>
              </div>
            </div>
          </div>
          <div className="inputs">
            <form action="" className="form">
              <h2 id="niche">please fill out the form to get in touch</h2>
              <input type="text" placeholder="Name" id="coinput" required />
              <input type="email" placeholder="Email" id="coinput" required />
              <input type="number" placeholder="Phone" id="coinput" required />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button id="fbut">Submit</button>

            </form>
          </div>
        </div>
        <p className="footer">Made By #❤️# Manas</p>
      </div>
    </div>
  );
};

export default contact;
