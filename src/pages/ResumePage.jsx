import React from "react";
import '../styles/ResumePage.css'

function ResumePage(){
    return(
        <>
            <div className="resume-container">
                <h1>Résumé</h1>
                <div className="achievements-container">
                    <h2>Achievments</h2>
                    <div className="achievement">
                        <h3>Indonesian NOI (OSN Informatika)</h3>
                        <p><span>September 2023</span></p>
                        <p>Bronze Medalist</p>
                    </div>
                    <div className="achievement">
                        <h3>American Mathematics Olympiad</h3>
                        <p><span>September 2023</span></p>
                        <p>Gold Medalist</p>
                    </div>
                </div>
                <div className="experience-container">
                    <h2>Experience</h2>
                    <div className="achievement">
                        <h3>Competitive Programming Coach @ Kokocoder</h3>
                        <p><span>Aug 2024</span></p>
                        <p>(Until present) I teach private and semi-private classes (1-5 students) focused on introductory competitive programming, covering algorithms and problem-solving techniques.</p>
                    </div>
                    <div className="achievement">
                        <h3>Competitive Programming Coach @ ALC Indonesia</h3>
                        <p><span>Dec 2023</span></p>
                        <p>I lead a 3-day bootcamp that covers advance computational thinking</p>
                    </div>
                    <div className="achievement">
                        <h3>Co-Founder and Marketing Officer of Salur Tekno</h3>
                        <p><span>Sep 2023 - Jan 2024</span></p>
                        <p>Playing key role in reaching out participants through social media campaign</p>
                    </div>
                    <div className="achievement">
                        <h3>Head of Camera Crew Division @ Pradita Dirgantara Student PR</h3>
                        <p><span>Sep 2022 - Sep 2023</span></p>
                        <p>Coordinated captivating event visuals at SMA Pradita Dirgantara. Spearheaded collaboration across departments, advancing video production processes, and refining cinematography techniques.</p>
                    </div>
                    <div className="achievement">
                        <h3>Stage Crew Coordinator @ Pradita Dirgantara Student PR</h3>
                        <p><span>May 2022 - Sep 2022</span></p>
                        <p>Coordinated stage crew members for event preparations, excelling in music instrument setup, and specializing in crafting flawless transitions between stage acts.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumePage;