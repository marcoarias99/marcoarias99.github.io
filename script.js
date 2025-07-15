// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
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
document.getElementById('contact-form').addEventListener('submit', function(e) {
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
    
    // Show success message (In a real application, you would send this to a server)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

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

// Project expand/collapse functionality
let currentExpandedProject = null;

const projectData = {
    1: {
        title: "Exercise Application",
        company: "Personal Project",
        skills: ["Swift UI", "iOS Development", "Mobile App"],
        image: "https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg",
        description: "Developed a comprehensive exercise tracking application using Swift UI. The app features workout planning, progress tracking, and exercise logging capabilities. Built with modern iOS development practices and intuitive user interface design.",
        purpose: "The primary purpose of this application was to create a user-friendly fitness tracking solution that would help individuals maintain consistency in their workout routines. The app was designed to address the common problem of losing motivation and track progress effectively through intuitive design and comprehensive logging features.",
        workedWell: [
            "Clean and intuitive user interface design",
            "Effective use of Swift UI for modern iOS development",
            "Comprehensive data tracking and progress visualization",
            "Smooth user experience and navigation flow"
        ],
        couldImprove: [
            "Integration with health and fitness APIs",
            "Social features for community engagement",
            "More advanced analytics and insights",
            "Cross-platform compatibility"
        ],
        learnings: [
            "Advanced Swift UI development techniques",
            "Mobile app user experience design principles",
            "Data persistence and management in iOS",
            "Testing and debugging mobile applications"
        ],
        placeholderIcon: "fas fa-image",
        placeholderText: "Screenshot placeholder"
    },
    2: {
        title: "System Integration Project",
        company: "Energy Company",
        skills: ["System Integration", "Business Analysis", "API Integration"],
        image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
        description: "Led a comprehensive system integration project during my tenure as Business System Analyst at an energy company. The project involved connecting multiple enterprise systems to streamline data flow and improve operational efficiency across departments.",
        purpose: "This integration project aimed to eliminate data silos and manual processes by connecting disparate enterprise systems. The goal was to create a unified data flow that would reduce errors, improve decision-making capabilities, and enhance overall operational efficiency across multiple business units.",
        workedWell: [
            "Successful stakeholder collaboration and communication",
            "Effective requirement gathering and analysis",
            "Smooth system integration with minimal downtime",
            "Strong project management and timeline adherence"
        ],
        couldImprove: [
            "Earlier involvement of end users in testing",
            "More comprehensive documentation",
            "Additional training sessions for staff",
            "Better change management processes"
        ],
        learnings: [
            "Enterprise system architecture understanding",
            "API integration best practices",
            "Cross-functional team leadership",
            "Business process optimization techniques"
        ],
        placeholderIcon: "fas fa-project-diagram",
        placeholderText: "System architecture diagram placeholder"
    },
    3: {
        title: "System Automation & Data Processing",
        company: "Energy Company",
        skills: ["Python", "VBA", "Excel Automation", "Data Processing"],
        image: "https://images.unsplash.com/photo-1649180556628-9ba704115795",
        description: "Developed automated solutions for data processing and worksheet management. Created Python scripts and VBA macros to automatically clean and process Excel worksheets, reducing manual work by 80% and improving data accuracy across the organization.",
        purpose: "The automation project was designed to address the time-consuming and error-prone manual data processing tasks that were affecting productivity. By implementing automated solutions, we aimed to free up staff time for higher-value activities while ensuring data accuracy and consistency across all processed worksheets.",
        workedWell: [
            "Significant time savings (80% reduction in manual work)",
            "Improved data accuracy and consistency",
            "Scalable solution for different data formats",
            "User-friendly interface for non-technical staff"
        ],
        couldImprove: [
            "More robust error handling and logging",
            "Integration with cloud-based solutions",
            "Real-time processing capabilities",
            "Advanced reporting and analytics features"
        ],
        learnings: [
            "Advanced Python scripting and automation",
            "VBA macro development and optimization",
            "Data cleaning and processing techniques",
            "User adoption and change management"
        ],
        placeholderIcon: "fas fa-code",
        placeholderText: "Code snippet placeholder"
    }
};

function expandProject(button, projectId) {
    const expandedArea = document.getElementById('expandedProjectArea');
    const project = projectData[projectId];
    
    // If the same project is already expanded, collapse it
    if (currentExpandedProject === projectId) {
        collapseProject();
        return;
    }
    
    // If another project is expanded, collapse it first
    if (currentExpandedProject) {
        collapseProject();
    }
    
    // Hide all expand buttons
    document.querySelectorAll('.project-expand-btn').forEach(btn => {
        btn.style.display = 'none';
    });
    
    // Show the expanded area
    expandedArea.style.display = 'block';
    
    // Create the expanded content
    const expandedContent = `
        <div class="expanded-project-main">
            <div class="project-image" style="height: 200px; margin-bottom: 1rem;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <h3>${project.title}</h3>
            <div class="project-company">${project.company}</div>
            <div class="project-skills">
                ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <p>${project.description}</p>
        </div>
        
        <div class="expanded-project-details">
            <div class="expanded-project-section">
                <h4>Project Purpose</h4>
                <p>${project.purpose}</p>
            </div>
            
            <div class="expanded-project-section">
                <h4>Self-Reflection</h4>
                <div class="reflection-grid">
                    <div class="reflection-item">
                        <h5>What Worked Well</h5>
                        <ul>
                            ${project.workedWell.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="reflection-item">
                        <h5>What Could Be Improved</h5>
                        <ul>
                            ${project.couldImprove.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="reflection-item">
                        <h5>Key Learnings</h5>
                        <ul>
                            ${project.learnings.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="expanded-project-section">
                <h4>Project Visual</h4>
                <div class="project-screenshot-placeholder">
                    <i class="${project.placeholderIcon}"></i>
                    <p>${project.placeholderText}</p>
                </div>
            </div>
            
            <div class="project-collapse">
                <button class="project-collapse-btn" onclick="collapseProject()">Show Less</button>
            </div>
        </div>
    `;
    
    expandedArea.querySelector('.expanded-project-content').innerHTML = expandedContent;
    currentExpandedProject = projectId;
    
    // Smooth scroll to the expanded content
    setTimeout(() => {
        expandedArea.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function collapseProject() {
    const expandedArea = document.getElementById('expandedProjectArea');
    
    // Hide the expanded area
    expandedArea.style.display = 'none';
    
    // Show all expand buttons
    document.querySelectorAll('.project-expand-btn').forEach(btn => {
        btn.style.display = 'inline-block';
    });
    
    currentExpandedProject = null;
    
    // Smooth scroll back to the projects section
    setTimeout(() => {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .certificate-card, .volunteer-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero text
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});