import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [collapse,setCollapse] = useState(true);

  const handleCollapse = ()=>{
    if (collapse === true){
      setCollapse(false)
    }else{
      setCollapse(true)
    }
  }


  return (
    <>
      <div className={collapse ? "sidebar"  : "sidebar active" }>
        <div className="logo-content">
          <div className="logo">
            <i className="bx bx-spa"></i>
          </div>
          <div className="box-btn" onClick={handleCollapse}>
            <i className="bx bx-chevron-right" id="btn"></i>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="links-name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chart"></i>
              <span className="links-name">Performance</span>
            </a>
            <span className="tooltip">Performance</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book-open"></i>
              <span className="links-name">Guides</span>
            </a>
            <span className="tooltip">Guides</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-link"></i>
              <span className="links-name">Hotspots</span>
            </a>
            <span className="tooltip">Hotspots</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-check-shield"></i>
              <span className="links-name">Checklists</span>
            </a>
            <span className="tooltip">Checklists</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-like"></i>
              <span className="links-name">NPS</span>
            </a>
            <span className="tooltip">NPS</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user-pin"></i>
              <span className="links-name">Segments</span>
            </a>
            <span className="tooltip">Segments</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-edit"></i>
              <span className="links-name">Themes</span>
            </a>
            <span className="tooltip">Themes</span>
          </li>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="mood">
              <i className="bx bx-power-off" id="dark"></i>
              <span>Dark Mood</span>
            </div>
            <div className="profile-details">
              <img
                src="https://media.istockphoto.com/vectors/abstract-woman-face-with-wavy-hair-black-and-white-hand-drawn-line-vector-id1257298321?k=20&m=1257298321&s=612x612&w=0&h=S8TJlzUbA2X2PzCXtBQU4YeVrogJDepiNrD3BqJkKCM="
                alt="profile"
              />
              <div className="name-job">
                <div className="name">shaden Ghasri</div>
                <div className="job">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_contetnt">
        <div className="text">home</div>
      </div>
    </>
  );
}

export default App;
