'use client'
import "@/app/globals.css";
import React from "react";
import {useState} from 'react';
import Baker from "@/components/Baker";

const Page = () => {
    const [readMore , setReadMore] = useState(false);
  return (
    <main className="font-serif px-4 md:px-24 mb-5">
        <h1 className="text-4xl font-bold mb-10">Resume</h1>
        <div className="horizontal-line my-6 "></div>
        <div className="sm:flex flex-col md:flex-row">
            <div className="experience md:basis-9/12">
                <div className="sm:flex sm:flex-row">
                    <h2 className="text-md sm:text-xl flex h-36 w-36 items-center rounded-full bg-orange-300 px-8 font-bold mb-4">Career Objective</h2>
                    <p className="text-sm sm:text-md pt-5 sm:pl-24 pr-4 text-reg-text-grey">I am a web developer with a passion for creating beautiful
                    and functional websites. With over 6 years of hands-on experience in web development and UI/UX design, 
                    I am passionate about crafting engaging and user-friendly digital experiences. Whether it's building 
                    responsive websites, developing robust web applications, or designing intuitive interfaces, I strive to 
                    deliver high-quality solutions tailored to meet my clients' needs.</p>
                </div>
                <div className="horizontal-line my-6 "></div>
                <div className="sm:flex sm:flex-row">
                    <h2 className="text-md sm:text-xl h-36 w-36 flex items-center rounded-full bg-orange-300 px-8 font-bold mb-4">Work History</h2>
                    <div className="text-md sm:pl-24 pr-4 flex flex-col gap-6 text-reg-text-grey">
                        <div className="company-wrap"> 
                            <label className="text-sm sm:text-sm font-light">July 2021 – April 2022</label>
                            <h3 className="text-md sm:text-lg my-1">Front-End Developer</h3>
                            <h4 className="text-sm sm:text-md font-bold my-1">IBM SOFTWARE LABS, INDIA</h4>
                            {/* <p className="text-[11px] sm:text-sm line-clamp-2 text-reg-text-grey">I am a web developer with a passion for creating beautiful
                            and functional websites. With over 6 years of hands-on experience in web development and UI/UX design, 
                            I am passionate about crafting engaging and user-friendly digital experiences. Whether it's building 
                            responsive websites, developing robust web applications, or designing intuitive interfaces, I strive to 
                            deliver high-quality solutions tailored to meet my clients' needs.</p> */}
                        </div>
                        <div className="company-wrap"> 
                            <label className="text-sm sm:text-sm font-light">June 2019 – July 2021</label>
                            <h3 className="text-md sm:text-lg my-1">Software Engineering Specialist</h3>
                            <h4 className="text-sm sm:text-md font-bold my-1">BAKER HUGHES, INDIA</h4>
                            {/* <p className="text-[11px] sm:text-sm line-clamp-2 text-reg-text-grey">I am a web developer with a passion for creating beautiful
                            and functional websites. With over 6 years of hands-on experience in web development and UI/UX design, 
                            I am passionate about crafting engaging and user-friendly digital experiences. Whether it's building 
                            responsive websites, developing robust web applications, or designing intuitive interfaces, I strive to 
                            deliver high-quality solutions tailored to meet my clients' needs.</p> */}
                        </div>
                        <div className="company-wrap"> 
                            <label className="text-sm sm:text-sm font-light">February 2016 – June 2019</label>
                            <h3 className="text-md sm:text-lg my-1">Associate Software Engineer </h3>
                            <h4 className="text-sm sm:text-md font-bold my-1">CLOUDIUM SOFTWARE, INDIA</h4>
                            {/* <p className="text-[11px] sm:text-sm line-clamp-2 text-reg-text-grey">I am a web developer with a passion for creating beautiful
                            and functional websites. With over 6 years of hands-on experience in web development and UI/UX design, 
                            I am passionate about crafting engaging and user-friendly digital experiences. Whether it's building 
                            responsive websites, developing robust web applications, or designing intuitive interfaces, I strive to 
                            deliver high-quality solutions tailored to meet my clients' needs.</p> */}
                        </div>
                    </div>
                </div>
                <div className="horizontal-line my-6 "></div>
                <div className="sm:flex sm:flex-row">
                    <h2 className="text-md sm:text-xl h-36 w-36 flex items-center rounded-full bg-orange-300 px-8 font-bold mb-4">Education</h2>
                    <div className="text-md sm:pl-24 pr-4 flex flex-col gap-6 text-reg-text-grey">
                        <div className="edu-wrap"> 
                            <h3 className="text-sm sm:text-md font-bold my-1">Post Graduation in Computer Software and Database Development</h3>
                            <h4 className="text-sm sm:text-md my-1">LAMBTON COLLEGE, TORONTO, CANADA</h4>
                            <label className="text-[10px] sm:text-sm font-light">May 2022 – Dec 2023</label>
                        </div>
                        <div className="edu-wrap"> 
                            <h3 className="text-sm sm:text-md font-bold my-1">Bachelor of Technology in Computer Science and Engineering </h3>
                            <h4 className="text-sm sm:text-md my-1">KANNUR UNIVERSITY, KERALA, INDIA</h4>
                            <label className="text-[10px] sm:text-sm font-light">August 2011 – July 2015</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line my-6 sm:hidden"></div>
            <div className="skills md:basis-3/12 my-6 sm:my-0 sm:ml-2 px-4 rounded-md bg-skills">
                <h2 className="text-md sm:text-xl flex items-center p-8 font-bold mb-4">Skills</h2>
                <ul className="flex justify-normal flex-wrap">
                    <li className="sm:text-md sm:font-bold">HTML5</li>
                    <li className="sm:text-md sm:font-bold">CSS3</li>
                    <li className="sm:text-md sm:font-bold">JavaScript</li>
                    <li className="sm:text-md sm:font-bold">TypeScript</li>
                    <li className="sm:text-md sm:font-bold">AngularJs</li>
                    <li className="sm:text-md sm:font-bold">Angular</li>
                    <li className="sm:text-md sm:font-bold">React</li>
                    <li className="sm:text-md sm:font-bold">NextJs</li>
                    <li className="sm:text-md sm:font-bold">Node.js</li>
                    <li className="sm:text-md sm:font-bold">MongoDB</li>
                    <li className="sm:text-md sm:font-bold">Git</li>
                    <li className="sm:text-md sm:font-bold">Tailwind CSS</li>
                    <li className="sm:text-md sm:font-bold">Angular Material</li>
                    <li className="sm:text-md sm:font-bold">Bootstrap</li>
                    <li className="sm:text-md sm:font-bold">RESTful API</li>
                    <li className="sm:text-md sm:font-bold">JSON</li>
                    <li className="sm:text-md sm:font-bold">Jsx</li>
                    <li className="sm:text-md sm:font-bold">Redux</li>
                    <li className="sm:text-md sm:font-bold">MEAN Stack</li>
                    <li className="sm:text-md sm:font-bold">ES6</li>
                    <li className="sm:text-md sm:font-bold">Jest</li>
                    <li className="sm:text-md sm:font-bold">Enzyme</li>
                    <li className="sm:text-md sm:font-bold">RTL</li>
                    <li className="sm:text-md sm:font-bold">Scrum</li>
                    <li className="sm:text-md sm:font-bold">Agile</li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Page