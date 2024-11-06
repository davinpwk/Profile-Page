import React from "react";
import '../styles/HomePage.css'
import Card from "../components/Card";
import ProfilePicture from "../assets/ProfilePicture.png"
import CompetitiveProgramming from "../assets/CompetitiveProgramming.png"
import CreativeDirector from "../assets/CreativeDirector.png"
import ExploringNewSkills from "../assets/ExploringNewSkills.png"
import Connection from "../assets/Connection.png"
import Coaching from "../assets/Coaching.png"
import Traveling from "../assets/Traveling.png"


function HomePage(){
    return(
        <>
            <div className="hero-container">
                <div className="content-container">
                    <img src={ProfilePicture} alt="" srcset="" />
                    <div className="profile-container">
                        <span>HI THERE I'M</span>
                        <h1 className="full-name">Davin P W Khotob</h1>
                        <p>I’m an 18-year-old gap year student in Indonesia, working part-time as a competitive programming coach. Passionate about computer technology and creative media, I thrive on exploring the intersection of coding and creativity. <br /><br />
                        Having participated in various coding competitions, I’m eager to dive into hackathons and web development projects. My skills include HTML, CSS, JavaScript, Bootstrap, React, C++, Java, and Python. <br /><br />
                        Outside of tech, I enjoy traveling, watching movies, running, and playing table tennis. Always seeking new adventures and challenges!</p>
                    </div>
                </div>
            </div>
            <div className="separator">
                <h1>Parts of Me</h1>
            </div>
            <div className="parts-of-me">
                <div className="pom-container">
                    <Card 
                        img={CompetitiveProgramming} 
                        header="Programming" 
                        desc="I’m passionate about both competitive programming and software development, constantly honing my problem-solving skills while creating efficient, real-world solutions through code." 
                    />
                    <Card 
                        img={Coaching} 
                        header="Coaching" 
                        desc="As a competitive programming coach, I enjoy guiding students through complex problems, helping them develop problem-solving skills, and fostering a passion for coding." 
                    />
                    <Card 
                        img={CreativeDirector} 
                        header="Creative Director" 
                        desc="I've led several video production projects as a creative director, managing everything from storyboarding to editing to bring ideas to life." 
                    />
                    <Card 
                        img={ExploringNewSkills} 
                        header="Exploring Skills" 
                        desc="I’m always eager to explore new skills, diving into unfamiliar challenges to expand my knowledge and push my creative and technical boundaries." 
                    />
                    <Card 
                        img={Connection} 
                        header="Connection" 
                        desc="I look forward to building meaningful connections, sharing knowledge, and collaborating with others to spark new ideas and opportunities." 
                    />
                    <Card 
                        img={Traveling} 
                        header="Traveling" 
                        desc="I have a deep passion for traveling, always seeking new destinations to explore, discover different cultures, and gather inspiration for my personal and creative endeavors." 
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage;