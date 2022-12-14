import React from "react";
import "./AllProjects.css";

const AllProjects = () => {
  return (
    <>
      <h1 className=" text-white text-3xl font-serif font-bold text-center my-6">
        Projects
      </h1>
      <div className=" lg:mx-28 lg:my-12  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="card w-96 bg-slate-500 my-10 mx-5 "
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/blue-schoolchild-backpack-table_23-2148204808.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
              TimeZone
            </h2>
            <p className=" text-white">
              {" "}
              This is my MERN stack projects. Users can store their product
              information in the database.I have used Html , CSS , JavaScript ,
              React ,Bootstrap , Express Js , MongoDB for make this
              web site.
            </p>
            <div className="card-actions justify-end">
              <a href="https://assignment-12-8d290.web.app/">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  VIEW
                </button>
              </a>
              <a href="https://github.com/naimur202163/Timekeeper-React-js-Client-side">
                {" "}
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  SOURCE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="card w-96 bg-slate-500 my-10 mx-5"
        >
          <figure>
            <img
              height={20}
              src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
            HopeMedical
            </h2>
            <p className=" text-white">
              This is my MERN stack projects. This is a website about Doctors.
              user can booked your appointments and advice from doctors.
            </p>

            <div className="card-actions justify-end">
              <a href=" https://lucid-franklin-825867.netlify.app/home">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  VIEW
                </button>
              </a>

              <a href="https://github.com/naimur202163/HopeMecial-React-Js">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  SOURCE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="card w-96 bg-slate-500 my-10 mx-5"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.2.270866342.1647831681"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
            Madang Food 
            </h2>
            <p className=" text-white">
              {" "}
              I have made this website with 1.html and css 2. react icons.
              3.react router hooks,bootstrap 5 and react router
            </p>
            <div className="card-actions justify-end">
              <a href="https://hardcore-pare-4a9874.netlify.app/home">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  VIEW
                </button>
              </a>
              <a href="https://hardcore-pare-4a9874.netlify.app/home">
                {" "}
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  SOURCE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="card w-96 bg-slate-500 my-10 mx-5"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/top-view-picture-frame-with-flowers-light-background-couple-color-gift-present-valentines-day-love-feeling-marriage_140725-160730.jpg?t=st=1655202423~exp=1655203023~hmac=d713cb72154534085ca1276a50c7c24704aa8ca2ebb266d865d3404b15f9d2c9&w=1380"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
              Wedding Photographer
            </h2>
            <p className=" text-white">
              html, CSS 3 ,React router ,React icons,React router hook
            </p>
            <div className="card-actions justify-end">
              <a href="https://independent-service-prov-60d93.web.app/">
                {" "}
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  VIEW
                </button>
              </a>
              <a href="https://github.com/Tasnim63/independent-services">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  className="btn btn-outline btn-base-100 text-white"
                >
                  SOURCE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
