import React, { useState } from 'react';
import '../styles/Resume.css'; // For styling
import { Phone, Email, LinkedIn, GitHub, LocationOn } from '@mui/icons-material';
import { MdAccountCircle, MdSchool, MdPsychology, MdLaptop, MdArticle } from "react-icons/md";
import faaborImage from '../assets/faabor.png';
import callBuddiesImage from '../assets/callbuddies.png';
import aiTrafficImage from '../assets/sih.png';
import myphoto from '../assets/myphoto.png';
import studentRegImage from '../assets/studentcollege.png';
import ritLogo from '../assets/ritlogo.png';

import backgroundImage from '../assets/background.jpg';


import rinex from '../assets/rinex.png';
import reactjs from '../assets/reactjs.png';
import pycharm from '../assets/pycharm.png';

import intellij from '../assets/intellij.png';
import html from '../assets/html.png';
import flutter from '../assets/flutter.png';
import firebase from '../assets/firebase.png';

import dart from '../assets/dart.png';
import css from '../assets/css.png';

import vs from '../assets/vs.png';
import java from '../assets/java.png';
import sjchssLogo from '../assets/sjchsslogo.png';
import python from '../assets/python.png';

import coursera from '../assets/coursera.png';
import nptel from '../assets/nptel.png';
import aws from '../assets/aws.png';
import eclipse from '../assets/eclipse.png';
import sql from '../assets/sql.png';


const Resume = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProject, setSelectedProject] = useState('faabor');

  const buttons = [
    { name: "About me", icon: <MdAccountCircle /> },
    { name: "Education", icon: <MdSchool /> },
    { name: "Skills", icon: <MdPsychology /> },
    { name: "Projects", icon: <MdLaptop /> },
    { name: "IPR", icon: <MdArticle /> },
  ];

  const getProjectContent = () => {
    switch (selectedProject) {
      case 'faabor':
        return {
          title: "Faabor",
          description: "Developed a software application, ”Faabor” (Feed App Archive Between Orphanages and Restaurants), to notify nearby orphanages about available food in restaurants, college messes, and event functions."
        };
      case 'callbuddies':
        return {
          title: "Call Buddies",
          description: "Developed a software application, ”Call Buddies”, designed to reduce stress in children by creating a bridge between children and cartoon animations."
        };
      case 'aitraffic':
        return {
          title: "AI Traffic Control Management System", 
          description: "“AI Traffic Control Management System” is our problem statement in SIH-2024. \n• Utilized TensorFlow to train an AI model \n• Used SUMO software for traffic visualization with Python and React.js."
        };
      case 'studentreg':
        return {
          title: "Student Registration Form",
          description: "Developed a student application form to collect information from 1st-year 1288 students. Built a full-stack web application using MongoDB, React.js (Vite), and Node.js."
        };
      default:
        return {
          title: "Select a project",
          description: "Click on project details to view more information."
        };
    }
  };

  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return (
          <div className="content-container">
            <h3 className="contact-heading1">Hi!, I'm Charles,</h3>
            <p className="contact-heading2">An App Developer dedicated to building user-friendly and efficient applications. My goal is to contribute to the growth of organizations by delivering innovative solutions that make a difference.</p>
          </div>
        );
        case 1:
          return (
            <div className="content-container1">
              <div className="education-item">
                <div className="image-style">
                  <img src={ritLogo} alt="RIT Logo" />
                </div>
                <div className="contact-heading3">
                  <h3>
                    Rajalakshmi Institute of Technology<br />
                    Bachelor of Engineering in Computer Science<br />
                    CGPA: 8.47
                  </h3>
                </div>
              </div>
              <div className="education-item">
                <div className="image-style">
                  <img src={sjchssLogo} alt="SJCHSS Logo" />
                </div>
                <div className="contact-heading3">
                  <h3>
                  St. Joseph’s College Higher Secondary School 
 
<br />
12th Standard<br />
Total Mark: 95.5%
                  </h3>
                </div>
              </div>
            </div>
          );
      case 2:
        return (
          <div className="content-container2">
        <div className="skills-container">
  <div className="skills-section">
    <h3>Languages</h3>
    <ul>
      <li>
        <img src={python} alt="Python" /> Python
      </li>
      <li>
        <img src={java} alt="Java" /> Java
      </li>
      <li>
        <img src={dart} alt="Dart" /> Dart
      </li>
      <li>
        <img src={sql} alt="SQL" /> SQL
      </li>
      <li>
        <img src={html} alt="HTML" /> HTML
      </li>
      <li>
        <img src={css} alt="CSS" /> CSS
      </li>
    </ul>

    <h3>Frameworks</h3>
    <ul>
      <li>
        <img src={reactjs} alt="React.js (Vite)" /> React.js (Vite)
      </li>
      <li>
        <img src={flutter} alt="Flutter" /> Flutter
      </li>
    </ul>
  </div>

  <div className="skills-section1">
    <h3>Developer Tools</h3>
    <ul>
      <li>
        <img src={firebase} alt="Firebase" /> Firebase
      </li>
      <li>
        <img src={vs} alt="Visual Studio Code" /> Visual Studio Code
      </li>
      <li>
        <img src={pycharm} alt="PyCharm" /> PyCharm
      </li>
      <li>
        <img src={intellij} alt="IntelliJ" /> IntelliJ
      </li>
      <li>
        <img src={eclipse} alt="Eclipse" /> Eclipse
      </li>
    </ul>
  </div>
  </div>

          </div>
        );
      case 3:
        return (
          <div className="content-container3">
            <section className="projects">
              <h2>Projects</h2>
              <div className="grid">
                <div className="project-item">
                  <img src={faaborImage} alt="Faabor" className="project-icon" />
                  <div className="project-text">
                    <p>Faabor</p>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject('faabor');
                      setIsFlipped(!isFlipped);
                    }}>details</a>
                  </div>
                </div>
                <div className="project-item">
                  <img src={callBuddiesImage} alt="Call Buddies" className="project-icon" />
                  <div className="project-text">
                    <p>Call Buddies</p>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject('callbuddies');
                      setIsFlipped(!isFlipped);
                    }}>details</a>
                  </div>
                </div>
                <div className="project-item">
                  <img src={aiTrafficImage} alt="AI Traffic Control" className="project-icon" />
                  <div className="project-text">
                    <p>AI Traffic Control Management System</p>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject('aitraffic');
                      setIsFlipped(!isFlipped);
                    }}>details</a>
                  </div>
                </div>
                <div className="project-item">
                  <img src={studentRegImage} alt="Student Registration" className="project-icon" />
                  <div className="project-text">
                    <p>Student Registration Form</p>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject('studentreg');
                      setIsFlipped(!isFlipped);
                    }}>details</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="certifications">
              <h2>Certifications</h2>
              <ul>
                <li>
                  <img src={nptel} alt="NPTEL" className="cert-icon" />
                  <span>‘Programming In Java’ by NPTEL.</span>
                </li>
                <li>
                  <img src={aws} alt="AWS" className="cert-icon" />
                  <span>‘AWS Cloud Foundation’ by AWS.</span>
                </li>
                <li>
                  <img src={rinex} alt="Rinex" className="cert-icon" />
                  <span>‘Data Science Course’ by Rinex.</span>
                </li>
                <li>
                    <img src={coursera} alt="Coursera" className="cert-icon" />
                  <span>‘Introduction To CATIA V5’ by Coursera.</span>
                </li>
              </ul>
            </section>
          </div>
        );
      case 4:
        return (
          <div className="content-container4">
      <div className="section1">
      <section className="section">
        <h2>COPYRIGHTS</h2>
        <p>
          <strong>FAABOR</strong> (Feed App Achieves Between Orphanages and Restaurants) – Diary No. 24901/2024-CO/SW
        </p>
        <p>
          <strong>KIDDOCALL</strong> – Diary No. 8227/2025-CO/SW
        </p>
      </section>

      <section className="section">
        <h2>PATENTS</h2>
        <p>
          Aesthetic Birdhouse with Monitoring System – App No. 431450-001
        </p>
      </section>

      <section className="section">
        <h2>PUBLICATIONS</h2>
        <p>
          Magnoplus Shield Vehicle Security Lock System <br />
          <a
            href="https://www.irjet.net/archives/V11/i11/IRJET-V111132.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.irjet.net/archives/V11/i11/IRJET-V111132.pdf
          </a>
        </p>
      </section></div>
    </div>
        );
      default:
        return <div className="content-container">Select a section to view details.</div>;
    }
  };

  return (
    <div className="resume-container">
      <div className="resume-container1">
      <div className="circle"> </div><div className="circle-text1">
        <h2>CHARLES J</h2>
        <h3>APP DEVELOPER</h3>
      </div>
      <div className={`container ${isFlipped ? 'flipped' : ''}`}>
        <div className="container-front">
          <h2 className="contact-heading">Contact Info</h2>
          <div className="contact-row">
            <Phone className="contact-icon" />
            <span className="contact-text">+91 7904523079</span>
          </div>
          <div className="contact-row">
            <Email className="contact-icon" />
            <span className="contact-text">charlesjmng@gmail.com</span>
          </div>
          <div className="contact-row">
            <LinkedIn className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/charles-j-7bb299297"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              www.linkedin.com/in/charles-j-7bb299297
            </a>
          </div>
          <div className="contact-row">
            <GitHub className="contact-icon" />
            <a
              href="https://github.com/CHARLESJESU"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/CHARLESJESU
            </a>
          </div>
          <div className="contact-row">
            <LocationOn className="contact-icon" />
            <span className="contact-text">RIT, Poonamallee, Chennai - 620124</span>
          </div>
        </div>
        <div className="container-back">
          <h2 className="contact-heading">{getProjectContent().title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{getProjectContent().description}</p>
        </div>
      </div>
      <div className="container1">
        {buttons.map((button, index) => (
          <div key={index} className="button-wrapper">
            <button
              className={`circle-button ${activeButton === index ? "active" : ""}`}
              onClick={() => setActiveButton(index)}
            >
              {button.icon}
            </button>
            <div
              className={`button-label ${activeButton === index ? "active-label" : ""}`}
            >
              {button.name}
            </div>
          </div>
        ))}
      </div>
      <div className="content-section">
        {renderContent()}
      </div>
      </div>
    </div>
  );
};

export default Resume;
