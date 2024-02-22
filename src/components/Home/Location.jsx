import React from "react";

function Location() {
  return (
    <>
      <div className="grid grid-cols-2 mt-20">
        <div className=" justify-center items-center text-center">
          <h1 className="text-xl font-serif">LOCATION </h1>
          <div className="mt-5">
            <p className="text-gray-500">112 W Main St.</p>
            <p className="text-gray-500">Alhambra, CA 91801</p>
          </div>
        </div>
        <div className="justify-center w-50">
          <p className="w-64  text-gray-500">
            Here are directions to our location. We hope to see you soon!
          </p>
          
          <p className="leading-6 mt-6 underline  text-gray-500 hover:cursor-pointer">
           <a href="https://maps.app.goo.gl/BVgrQfQgqGqJuvFE7">Get Directions</a> 
          </p>
          <p className="leading-6 mt-6 underline  text-gray-500 hover:cursor-pointer">
          <a href="https://www.instagram.com/p/COCNWnaj_zO/?img_index=1" target="_blank">

            Parking Information
          </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31541990.363833945!2d-140.9477474834832!3d35.75725313750873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1708444119443!5m2!1sen!2sin"
          style={{ border: "0", filter: "grayScale(1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="m-20 w-full h-96 "
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
}

export default Location;
