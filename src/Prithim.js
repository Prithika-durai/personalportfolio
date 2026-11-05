
import React, { useState } from "react";
import "./Prithim.css";

// Custom SVG icons: no external icon package required
function Icon({ name, size = 20 }) {
  const icons = {
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    code: <><path d="m8 8-5 4 5 4m8-8 5 4-5 4m-2-12-4 16" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1 15 3.5a13.5 13.5 0 0 0-7 0C5.4 1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18v4" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7h3a3 3 0 0 1 3 3v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    arrow: <><path d="M5 12h14m-7-7 7 7-7 7" /></>,
    folder: <><path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z" /><path d="M4 4.5v15A2.5 2.5 0 0 1 6.5 17H20" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    check: <path d="m5 12 4 4L19 6" />
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] || icons.code}
    </svg>
  );
}

// Update these links and image paths with your own details
const projects = [
  {
    title: "Notes App",
    category: "Frontend Development",
    description: "Create, edit, delete and manage daily notes with a simple interface.",
    image: "notes.png",
    github: "https://github.com/Prithika-durai/Notesrs.git",
    demo: "https://notesrs-smde.vercel.app/"
  },
  {
    title: "Password Generator",
    category: "React Project",
    description: "Generate secure passwords with customizable length and character options.",
    image: "paass.png",
    github: "https://github.com/Prithika-durai/Passwordrs.git",
    demo: "https://passwordrs.vercel.app/"
  },
  {
    title: "Quiz Game",
    category: "React Project",
    description: "An interactive multiple-choice quiz with score tracking and instant answer feedback.",
    image: "quiz-game.png",
    github: "https://github.com/Prithika-durai/Quizr.git",
    demo: "https://quizr-pied.vercel.app/"
  },
  {
    title: "Expense Tracker",
    category: "Task Management",
    description: "Add income and expenses and watch your balance update instantly, built with React state.",
    image: "expense-tracker.png",
    github: "https://github.com/Prithika-durai/expensesr.git",
    demo: "https://expensesr.vercel.app/"
  },
  {
    title: "FAQ Application",
    category: "Frontend Development",
    description: "An interactive FAQ application that displays answers when selected.",
    image: "faq.png",
    github: "https://github.com/Prithika-durai/faqr.git",
    demo: "https://faqr-theta.vercel.app"
  },
  {
    title: "Color Theme Switcher",
    category: "React Project",
    description: "Switch between different color themes to improve user experience.",
    image: "themech.png",
    github: "https://github.com/Prithika-durai/Themer.git",
    demo: "https://themer-rouge.vercel.app/"
  }
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML 🌐", "CSS 🎨", "JavaScript 🟨", "React ⚛️"]
  },
  {
    title: "Backend and Serverside Development",
    skills: ["Java ☕", "Spring Boot 🍃", "SQL 🗄️"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git 🔀", "GitHub 🐙", " VS Code 💻"]
  }
];

function Prithim() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Experience", "experience"],
    ["Certifications", "certifications"],
    ["Contact", "contact"]
  ];

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink =
      `mailto:yourmail@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <div className="portfolio" data-theme={theme}>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">PD<span>.</span></a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Switch theme"
            title="Switch theme"
          >
            <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>

      <main>

        {/* HOME */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
            <h1>Hello, I'm <span>Prithika D</span></h1>
            <h2>Full Stack Java Developer</h2>

            <p className="hero-description">
              I am passionate about building professional, responsive,
              and user-friendly web applications using modern technologies.
              I enjoy learning new skills, solving problems, and creating
              meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <Icon name="arrow" size={17} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Prithika-durai/faqr.git" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={21} />
              </a>
              <a href="https://faqr-theta.vercel.app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={21} />
              </a>
              <a href="mailto:prithika635@gmail.com" aria-label="Email">
                <Icon name="mail" size={21} />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-card">
            <div className="about-icon"><Icon name="user" size={30} /></div>
            <div>
              <h3>Passionate Full Stack Java Developer</h3>
              <p>
                I am an aspiring Full Stack Java Developer with an interest
                in designing and developing web applications. I have knowledge
                of frontend technologies such as HTML, CSS, JavaScript, and
                React, along with backend and server side technologies including Java,
                Spring Boot, and SQL.
              </p>
              <p>
                I enjoy solving problems, improving my technical skills,
                and building applications that provide a clean and effective
                user experience.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TECHNICAL EXPERTISE</p>
            <h2>Skills & <span>Technologies</span></h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-icon"><Icon name="code" size={25} /></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">MY RECENT WORK</p>
            <h2>Featured <span>Projects</span></h2>
            <p className="section-description">
              A collection of projects demonstrating my development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.parentElement.classList.add("image-fallback");
                    }}
                  />
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Icon name="github" size={17} /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <Icon name="external" size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section content-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY LEARNING JOURNEY</p>
            <h2>My <span>Education</span></h2>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon"><Icon name="book" size={25} /></div>
            <div>
              <p className="timeline-label">EDUCATION</p>
              <h3>B.E(Computer Science and Engineering)<span><p>8.5 CGPA / Distiction</p></span></h3>
              <p>IFET College Of Engineering</p>
              <span className="timeline-date">2021-2025</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section content-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
            <h2>Experience</h2>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon"><Icon name="briefcase" size={25} /></div>
            <div>
              <p className="timeline-label">PROJECT EXPERIENCE</p>
              <h3>Personal Web Development Projects</h3>
              <p>
                Developed practical projects using HTML, CSS, JavaScript, React, Java, Spring Boot and Sql to strengthen full stack development skills.
                Practiced version control using Git and GitHub.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section content-section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <h2>My <span>Certifications</span></h2>
          </div>

          <div className="certification-card">
            <Icon name="check" size={24} />
            <div>
              <h3>HDCA - Honours Diploma in Computer Applications</h3>
              <p>Completed with "A" Grade</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section content-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Contact <span>Me</span></h2>
            <p className="section-description">
              Have a project or opportunity in mind? Send me a message.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <p>
                Feel free to contact me for opportunities, collaborations,
                or professional discussions.
              </p>

              <div className="contact-item">
                <div className="contact-icon"><Icon name="mail" /></div>
                <div>
                  <span>Email</span>
                  <a href="mailto:prithika635@gmail.com">prithika635@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Icon name="location" /></div>
                <div>
                  <span>Location</span>
                  <p>India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Icon name="github" /></div>
                <div>
                  <span>GitHub</span>
                  <a href="https://github.com/Prithika-durai" target="_blank" rel="noreferrer">
                    https://github.com/Prithika-durai
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Icon name="linkedin" /></div>
                <div>
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/prithika-d-93473b42b" target="_blank" rel="noreferrer">
                    https://www.linkedin.com/in/prithika-d-93473b42b
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>

              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter message subject"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />

              <button type="submit" className="btn btn-primary submit-button">
                Send Message <Icon name="send" size={17} />
              </button>

              <p className="form-note">
                Submitting opens the visitor's email application.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-logo">PD.</a>
        <p>© {new Date().getFullYear()} Prithika D. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Prithika-durai" target="_blank" rel="noreferrer">
            <Icon name="github" />
          </a>
          <a href="https://www.linkedin.com/in/prithika-d-93473b42b" target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Prithim;
