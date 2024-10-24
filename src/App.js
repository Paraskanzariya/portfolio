import './App.css';
import logo from './P2.png';
import icon from './icon.png';
import icon1 from './Internship-1.png';
import icon2 from './Internship-2.jpg';
import project1 from './Project-1.png';
import project2 from './Project-2.png';

function App() {
  return (
    <div className="App">
      <nav>
        <label className='navbar'>
          <label className='nav-name'>
            <img className='Icon1' src={icon} alt="logo"></img>
            <label className='L1'>Paras Kanzariya</label>
          </label>
          <label className='L2'>
            <a href="#home" className='L3'>Home</a>
            <a href="#education" className='L3'>Education</a>
            <a href="#internship" className='L3'>Internship</a>
            <a href="#projects" className='L3'>Projects</a>
            <a href="#skills" className='L3'>Skills</a>
          </label>
        </label>
      </nav>

      <header className="App-header" id="home">
        <img className='pic' src={logo} alt="logo" />
        <ul className='header-details'>
          <li>🔧 Proficient in: Angular, Node.js, Express.js, ReactJS and related technologies</li>
          <li>🎓 Bachelor of Technology in Information Technology</li>
          <li>🛠️ Successfully completed internships and mini projects</li>
          <li>🏅 Certified in Office 365/Microsoft 365</li>
          <li>💻 Skills: Angular, Node.js, Express.js, React.js, HTML5, CSS, JavaScript, TypeScript</li>
          <li>🎯 Objective: Eager to contribute my expertise in full stack development and passion for innovative solutions to drive success in a dynamic team environment.</li>
        </ul>
      </header>

      <div className='p1' id="education">
        <h3>Education Details</h3>
        <label>2020 - 2024: Shantilal Shah Engineering College, Bhavnagar <br />
          BE-IT (Information Technology) from GTU and CPI is 7.77 & CGPA is 7.82
        </label> <br /><br />
        <label>
          2020: HSC (Science) <br />
          HSC completed from GSEB with 62.52% (Percentage).
        </label> <br /><br />
        <label>
          2018: SSC <br />
          SSC completed from GSEB with 79.33% (Percentage).
        </label>
      </div>

      <div className='p2' id="internship">
        <div className='d1'>
          <h3 className='h1'>Internship Details</h3> <br />
        </div>
        <div className='d2'>
          <div>
            <img className='pic1' src={icon1} alt="Internship Certificate" />
          </div>
          <div>
            <h3 className='h11'>React JS Internship</h3> <br /><br /><br /><br />
            <label className='L4'>I have done this internship from Infolabz Infotech. In this internship we covered
              the fundamentals of JS and ES6, worked on the React framework along with API integration,
              and developed an API-based React application.
            </label>
          </div>
        </div>

        <div className='d3'>
          <div>
            <h3 className='h2'>PHP Internship</h3> <br /><br /><br /><br />
            <label className='L5'>I have done this internship from Creart Solution. In this internship, we covered the
              fundamentals of PHP and Laravel. We worked on the Laravel framework and developed
              a video calling application.
            </label>
          </div>
          <div>
            <img className='pic2' src={icon2} alt="Internship Certificate"></img>
          </div>
        </div>
      </div>

      <div className='d4' id="projects">
        <div>
          <h3 className='h3'>Project Details</h3>
          <div>
            <h3 className='h3'>Team Project (Sports Management System)</h3>
            <div>
              <img className='pic3' src={project1} alt="Sports Management System"></img>
            </div> <br />
            <label className='L6'>We did this project in a group of four members, and I led the team.
              We built a Sports Management Website to assist players, teachers, and organizations.
              The site includes team registration, event announcements, and medical help for players.
            </label>
          </div>
          <div> <br /><br />
            <h3 className='h3'>Video Calling Web App</h3>
            <div>
              <img className='pic3' src={project2} alt="Video Calling Web App"></img>
            </div> <br />
            <div className='L6'>I developed this project during my PHP Internship. The web application
              functions similarly to MS Teams or Google Meet, enabling video calls and chats.
            </div>
          </div>
        </div>
      </div>

      <div className='d5' id="skills">
        <div>
          <h3 className='h4'>Skills</h3>
        </div>
        <div className='d6'>
          <label>
            <li>React Js</li>
            <li>Angular</li>
            <li>PHP</li>
            <li>Node Js</li>
            <li>HTML, CSS, and JavaScript</li>
          </label> <br />
          <label>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem Solving</li>
          </label>
        </div>
      </div>

      <div className='d7'>
        <h3 className='h5'>Certifications</h3>
        <label>I have completed certifications like Spoken English and Front End Development
          (HTML, CSS, JavaScript, and ReactJS).
        </label>
      </div>

      <footer>Powered by Paras Kanzariya @ 2023</footer>
    </div>
  );
}

export default App;
