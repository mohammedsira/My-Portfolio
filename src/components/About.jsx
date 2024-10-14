import React from "react";
import "../style/about.css";

const About = ({ full_name, image, role, resume, contacts, year, age }) => {
    return (
        <>
            <section id="about" className="about">
                <h2 className="heading col-12">
                    <i className="fas fa-user-alt"></i> About <span>Me</span>
                </h2>

                <div className="row">

                    <div className="image col-12 col-sm-12 col-md-5">
                        <img className="w-50 " src={image} />
                    </div>

                    <div className="content col-12 col-sm-12 col-md-7">
                        <h3 className="col-12 col-md-12">I'm {full_name}</h3>
                        <span className="tag ">{role[0]}</span>

                        <p className="col-12 col-md-12 p-2">

                            <br />🚀 Passionate MERN Full Stack Developer 🚀
                            <br />

                            <br />🔹 Transforming ideas into robust, scalable web solutions with expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack development. <br />

                            <br />🔹 Proficient in crafting responsive, user-friendly interfaces using modern front-end technologies like HTML5, CSS3, and JavaScript frameworks/libraries. <br />

                            <br />🔹 Skilled in designing and implementing RESTful APIs for seamless communication between front-end and back-end systems. <br />

                            <br />🔹 Experienced in database management, including schema design, optimization, and querying with MongoDB. <br />

                            <br />🔹 Strong problem-solving abilities and a knack for troubleshooting and debugging complex issues. <br />

                            <br />🔹 Continuously staying updated with the latest trends and technologies in web development to deliver cutting-edge solutions. <br />

                            <br /> Let's collaborate and bring your digital visions to life! Connect with me to explore opportunities.
                        </p>

                        <div className="btn resumebtn">
                            <a href={resume} target="_blank" className="btn btn-link">
                                <span>Resume</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default About;