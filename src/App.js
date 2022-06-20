import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i class="bx bx-spa"></i>
          <div className="logo-name">hamresaan</div>
        </div>
        <i class='bx bx-chevron-right' id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <i class="bx bxs-dashboard"></i>
            <span className="links-name">Dashboard</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chart"></i>
            <span className="links-name">Performance</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">Guides</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">Hotspots</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">Checklists</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">NPS</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">Segments</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
        <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span className="links-name">Themes</span>
          </a>
          {/* <span className='tooltip'>dashboard</span> */}
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
        <div className="mood">
          <i class='bx bx-power-off' id="dark"></i>
          <span>Dark Mood</span>
        </div>
          <div className="profile-details">
            <img src="https://media.istockphoto.com/vectors/abstract-woman-face-with-wavy-hair-black-and-white-hand-drawn-line-vector-id1257298321?k=20&m=1257298321&s=612x612&w=0&h=S8TJlzUbA2X2PzCXtBQU4YeVrogJDepiNrD3BqJkKCM=" alt="profile" />
            <div className="name-job">
              <div className="name">shaden Ghasri</div>
              <div className="job">Web Developer</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
