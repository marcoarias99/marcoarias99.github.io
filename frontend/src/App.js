import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Redirect to the static portfolio
    window.location.href = '/portfolio.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Loading Marco's Portfolio...</h2>
    </div>
  );
}

export default App;
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>Marco Arias</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#certificates" class="nav-link">Certificates</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Hi, I'm <span class="highlight">Marco Arias</span></h1>
                <h2>Computer Science Student & Business System Analyst</h2>
                <p>Passionate about technology, system integration, and automation. Currently based in Calgary, Alberta, with expertise in software development, business analysis, and data automation.</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-image">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTI1NTA1OTV8MA&ixlib=rb-4.1.0&q=85" alt="Marco Arias - Professional Photo">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2>About Me</h2>
                <p>Get to know more about my background and journey</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Hello! I'm Marco Arias</h3>
                    <p>I'm a Computer Science major based in Calgary, Alberta, with a passion for technology and problem-solving. Currently working as a Business System Analyst at an energy company, I have experience in system integration, automation, and customer support.</p>
                    
                    <p>My journey in technology began during my studies, where I developed a strong foundation in programming and system analysis. I've had the opportunity to work on diverse projects ranging from mobile app development to enterprise system integrations.</p>
                    
                    <p>I'm particularly interested in:</p>
                    <ul class="about-interests">
                        <li><i class="fas fa-code"></i> Software Development</li>
                        <li><i class="fas fa-cogs"></i> System Integration</li>
                        <li><i class="fas fa-robot"></i> Process Automation</li>
                        <li><i class="fas fa-chart-line"></i> Business Analysis</li>
                        <li><i class="fas fa-database"></i> Data Management</li>
                    </ul>
                </div>
                <div class="about-skills">
                    <h3>Technical Skills</h3>
                    <div class="skills-grid">
                        <div class="skill-item">
                            <i class="fab fa-swift"></i>
                            <span>Swift UI</span>
                        </div>
                        <div class="skill-item">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-file-excel"></i>
                            <span>VBA</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-project-diagram"></i>
                            <span>System Integration</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-chart-bar"></i>
                            <span>Business Analysis</span>
                        </div>
                        <div class="skill-item">
                            <i class="fas fa-database"></i>
                            <span>Data Management</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <h2>My Projects</h2>
                <p>Here are some of the projects I've worked on</p>
            </div>
            <div class="projects-grid">
                <!-- Project 1: Exercise Application -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg" alt="Exercise Application">
                    </div>
                    <div class="project-content">
                        <h3>Exercise Application</h3>
                        <div class="project-company">Personal Project</div>
                        <div class="project-skills">
                            <span class="skill-tag">Swift UI</span>
                            <span class="skill-tag">iOS Development</span>
                            <span class="skill-tag">Mobile App</span>
                        </div>
                        <p>Developed a comprehensive exercise tracking application using Swift UI. The app features workout planning, progress tracking, and exercise logging capabilities. Built with modern iOS development practices and intuitive user interface design.</p>
                        <div class="project-links">
                            <a href="#" class="project-link">View Project</a>
                        </div>
                    </div>
                </div>

                <!-- Project 2: System Integration -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25" alt="System Integration Project">
                    </div>
                    <div class="project-content">
                        <h3>System Integration Project</h3>
                        <div class="project-company">Energy Company</div>
                        <div class="project-skills">
                            <span class="skill-tag">System Integration</span>
                            <span class="skill-tag">Business Analysis</span>
                            <span class="skill-tag">API Integration</span>
                        </div>
                        <p>Led a comprehensive system integration project during my tenure as Business System Analyst at an energy company. The project involved connecting multiple enterprise systems to streamline data flow and improve operational efficiency across departments.</p>
                        <div class="project-links">
                            <a href="#" class="project-link">View Details</a>
                        </div>
                    </div>
                </div>

                <!-- Project 3: System Automation -->
                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1649180556628-9ba704115795" alt="System Automation Project">
                    </div>
                    <div class="project-content">
                        <h3>System Automation & Data Processing</h3>
                        <div class="project-company">Energy Company</div>
                        <div class="project-skills">
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">VBA</span>
                            <span class="skill-tag">Excel Automation</span>
                            <span class="skill-tag">Data Processing</span>
                        </div>
                        <p>Developed automated solutions for data processing and worksheet management. Created Python scripts and VBA macros to automatically clean and process Excel worksheets, reducing manual work by 80% and improving data accuracy across the organization.</p>
                        <div class="project-links">
                            <a href="#" class="project-link">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Work Experience Section -->
    <section id="experience" class="experience">
        <div class="container">
            <div class="section-header">
                <h2>Work Experience</h2>
                <p>My professional journey and key roles</p>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>Business System Analyst</h3>
                        <h4>Energy Company</h4>
                        <span class="timeline-date">Current Role</span>
                        <p>Leading system integration projects and business analysis initiatives. Responsible for analyzing business requirements, designing system solutions, and facilitating communication between technical and business teams.</p>
                        <ul class="timeline-achievements">
                            <li>Led system integration projects improving operational efficiency</li>
                            <li>Developed automated data processing solutions</li>
                            <li>Collaborated with cross-functional teams on business requirements</li>
                            <li>Implemented VBA and Python automation scripts</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>Customer Support Analyst</h3>
                        <h4>University</h4>
                        <span class="timeline-date">Previous Role</span>
                        <p>Provided technical support and assistance to university students and staff. Gained valuable experience in problem-solving, communication, and customer service.</p>
                        <ul class="timeline-achievements">
                            <li>Resolved technical issues for students and staff</li>
                            <li>Provided excellent customer service and support</li>
                            <li>Developed strong problem-solving and analytical skills</li>
                            <li>Collaborated with IT team on system improvements</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certificates Section -->
    <section id="certificates" class="certificates">
        <div class="container">
            <div class="section-header">
                <h2>Certificates & Education</h2>
                <p>My educational background and professional certifications</p>
            </div>
            <div class="certificates-grid">
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Computer Science Degree</h3>
                    <p>Currently pursuing Computer Science major with focus on software development and system analysis.</p>
                    <span class="certificate-status">In Progress</span>
                </div>
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Business Analysis Certification</h3>
                    <p>Professional certification in business analysis methodologies and practices.</p>
                    <span class="certificate-status">Completed</span>
                </div>
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>System Integration Training</h3>
                    <p>Specialized training in enterprise system integration and automation.</p>
                    <span class="certificate-status">Completed</span>
                </div>
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Programming Certifications</h3>
                    <p>Various programming certifications including Python, Swift, and VBA development.</p>
                    <span class="certificate-status">Multiple</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>Let's connect and discuss opportunities</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Calgary, Alberta, Canada</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>marco.arias@email.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+1 (XXX) XXX-XXXX</span>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-linkedin"></i>
                        <span>linkedin.com/in/marcoarias</span>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>Send Me a Message</h3>
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-text">
                    <p>&copy; 2024 Marco Arias. All rights reserved.</p>
                </div>
                <div class="footer-social">
                    <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </footer>
\`;

const portfolioStyles = \`
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo h2 {
    color: #2563eb;
    font-weight: 600;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #2563eb;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 100px 0 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-text h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.hero-text p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    line-height: 1.6;
}

.highlight {
    color: #fbbf24;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn {
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: #2563eb;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.profile-image img:hover {
    transform: scale(1.05);
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: #6b7280;
}

/* About Section */
.about {
    padding: 80px 0;
    background: #f9fafb;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: start;
}

.about-text h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.about-text p {
    margin-bottom: 1.5rem;
    color: #4b5563;
    line-height: 1.7;
}

.about-interests {
    list-style: none;
    margin-top: 1.5rem;
}

.about-interests li {
    padding: 0.5rem 0;
    color: #4b5563;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.about-interests i {
    color: #2563eb;
    width: 20px;
}

.about-skills h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.skill-item {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-5px);
}

.skill-item i {
    font-size: 2rem;
    color: #2563eb;
    margin-bottom: 0.5rem;
}

.skill-item span {
    font-weight: 500;
    color: #374151;
}

/* Projects Section */
.projects {
    padding: 80px 0;
    background: white;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 12px 12px 0 0;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
}

.project-company {
    color: #2563eb;
    font-weight: 500;
    margin-bottom: 1rem;
}

.project-skills {
    margin-bottom: 1rem;
}

.skill-tag {
    display: inline-block;
    background: #e5e7eb;
    color: #374151;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.project-content p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #1d4ed8;
}

/* Experience Section */
.experience {
    padding: 80px 0;
    background: #f9fafb;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #e5e7eb;
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    width: 50%;
}

.timeline-item:nth-child(odd) {
    left: 0;
    padding-right: 2rem;
}

.timeline-item:nth-child(even) {
    left: 50%;
    padding-left: 2rem;
}

.timeline-marker {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #2563eb;
    border-radius: 50%;
    top: 0;
    z-index: 10;
}

.timeline-item:nth-child(odd) .timeline-marker {
    right: -8px;
}

.timeline-item:nth-child(even) .timeline-marker {
    left: -8px;
}

.timeline-content {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.timeline-content h4 {
    font-size: 1.1rem;
    color: #2563eb;
    margin-bottom: 0.5rem;
}

.timeline-date {
    color: #6b7280;
    font-size: 0.9rem;
    font-weight: 500;
}

.timeline-content p {
    color: #4b5563;
    line-height: 1.6;
    margin: 1rem 0;
}

.timeline-achievements {
    list-style: none;
    margin-top: 1rem;
}

.timeline-achievements li {
    color: #4b5563;
    padding: 0.25rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.timeline-achievements li::before {
    content: '•';
    color: #2563eb;
    position: absolute;
    left: 0;
}

/* Certificates Section */
.certificates {
    padding: 80px 0;
    background: white;
}

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.certificate-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.certificate-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
}

.certificate-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1f2937;
}

.certificate-card p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.certificate-status {
    background: #10b981;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

/* Contact Section */
.contact {
    padding: 80px 0;
    background: #f9fafb;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #4b5563;
}

.contact-item i {
    color: #2563eb;
    width: 20px;
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-form h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2563eb;
}

.form-group textarea {
    resize: vertical;
}

/* Footer */
.footer {
    background: #1f2937;
    color: white;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #2563eb;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text h1 {
        font-size: 2.5rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .timeline::before {
        left: 20px;
    }
    
    .timeline-item {
        width: 100%;
        padding-left: 50px;
        padding-right: 0;
    }
    
    .timeline-item:nth-child(even) {
        left: 0;
        padding-left: 50px;
    }
    
    .timeline-marker {
        left: 12px !important;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .btn {
        padding: 10px 20px;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .profile-image img {
        width: 200px;
        height: 200px;
    }
}
\`;

const portfolioScript = \`
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});
\`;

export default App;