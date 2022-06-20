import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i class="bx bx-spa"></i>
          <div className="logo-name">coding</div>
        </div>
        <i class="bx bx-menu" id="btn"></i>
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
          <div className="profile-details">
            <img src="" alt="profile" />
            <div className="name-job">
              <div className="name">shaden Ghasri</div>
              <div className="job">Web Developer</div>
            </div>
            <i class="bx bx-ghost" id="light"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
