// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact Form Handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Show success message (In a real application, you would send this to a server)
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    this.reset();
  });

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
    }
  }
});

// Consolidated Project Data - All project information in one place
const projectData = {
  1: {
    title: "Exercise Application",
    company: "Personal Project",
    skills: [
      "Swift UI",
      "iOS Development",
      "Mobile App",
      "Test Cases Development",
    ],
    image: "https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg",
    projectImages: [
      "images/exercise-application/screenshot1.png",
      "images/exercise-application/screenshot2.png",
    ],
    description:
      "Driven by curiosity and a desire to build something personally useful, I developed a comprehensive exercise tracking app using SwiftUI. The app includes workout planning, progress tracking, and exercise logging, and was built using modern iOS development practices with an intuitive, user-focused design",
    purpose:
      "This personal project aimed to create a simple yet effective fitness app that would allow users to log and organize their custom workouts by day. The goal was to design an application I would personally use, while learning SwiftUI, interface layout planning, and app structure from the ground up.",
    workedWell: [
      "Developed clean and functional SwiftUI views for a smooth user experience",
      "Gained a strong foundation in Swift and mobile app logic within weeks",
      "Successfully implemented features like custom workouts and day-based logging",
    ],
    couldImprove: [
      "Early designs changed multiple times to include too many features at once",
      "Could benefit from better planning around state management",
      "More advanced analytics and insights",
      "Cross-platform compatibility",
    ],
    learnings: [
      "How to build and test SwiftUI views using custom wireframes",
      "Mobile app user experience design principles",
      "Importance of focusing on core features before expanding",
      "How to structure test cases and plan for scalable app growth",
    ],
    placeholderIcon: "fas fa-image",
    placeholderText: "Screenshot placeholder",
  },
  2: {
    title: "System Integration for US Acquisition",
    company: "Gibson Energy",
    skills: [
      "System Integration",
      "Business Analysis",
      "Data Migration",
      "System Testing",
    ],
    image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
    description:
      "Led a comprehensive system integration project during my tenure as Business System Analyst at an energy company. The project involved connecting multiple enterprise systems to streamline data flow and improve operational efficiency across departments.",
    purpose:
      "This project focused on integrating large volumes of operational and master data from a recently acquired U.S. terminal into the existing systems. The goal was to ensure data accuracy, maintain operational continuity, and reduce risk during the transition by validating records, troubleshooting upload issues, and preparing test environments for deployment.",
    workedWell: [
      "Use of test environments to catch errors before main system deployment",
      "Data cleanup processes that prevented system inconsistencies",
      "Reuse of automation tools from earlier projects to streamline validation",
    ],
    couldImprove: [
      "Earlier planning around data limitations of the existing system",
      "Increased visibility of progress for external stakeholders",
    ],
    learnings: [
      "System limitations and how to navigate legacy data constraints",
      "Importance of proactive testing and stakeholder feedback loops",
      "How to adapt validation scripts for evolving use cases",
    ],
    placeholderIcon: "fas fa-project-diagram",
    placeholderText: "System architecture diagram placeholder",
  },
  3: {
    title: "System Automation & Data Processing",
    company: "Gibson Energy",
    skills: [
      "Python",
      "VBA",
      "Excel Automation",
      "Data Processing",
      "Data Cleaning",
      "Spreadsheet Management",
    ],
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795",
    description:
      "Developed automated solutions for data processing and worksheet management using Python and VBA. Strengthened and applied advanced Excel skills to build tools that cleaned and processed spreadsheets automatically, reducing manual work by 80% and improving data accuracy across the organization.",
    purpose:
      "The automation project was created to reduce manual effort in spreadsheet validation and processing. Weekly reports relied on multiple Excel files, and inconsistencies led to delays and errors. I built automation scripts to scan, clean, and validate these spreadsheets using Python and VBA, freeing up hours of manual work and increasing reporting accuracy.",
    workedWell: [
      "Significant time savings (80% reduction in manual work)",
      "Significantly improved accuracy in reporting data",
      "Tools were simple enough for non-technical team members to use",
      "The solution scaled easily across different spreadsheet formats",
    ],
    couldImprove: [
      "Initial scripts were slower due to large datasets",
      "Integration with cloud-based solutions",
      "Real-time processing capabilities",
      "Advanced reporting and analytics features",
    ],
    learnings: [
      "Advanced Python scripting and automation",
      "VBA macro development and optimization",
      "Data cleaning and processing techniques",
      "User adoption and change management",
    ],
    placeholderIcon: "fas fa-code",
    placeholderText: "Code snippet placeholder",
  },
};

// Generate project cards dynamically
function generateProjectCards() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  Object.keys(projectData).forEach((projectId) => {
    const project = projectData[projectId];

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-project", projectId);

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <div class="project-company">${project.company}</div>
        <div class="project-skills">
          ${project.skills
            .map((skill) => `<span class="skill-tag">${skill}</span>`)
            .join("")}
        </div>
        <p>${project.description}</p>
      </div>
      <div class="project-expand-indicator">
        <i class="fas fa-chevron-down"></i>
      </div>
    `;

    // Add click event listener for expand/collapse
    projectCard.addEventListener("click", () => {
      expandProject(projectId);
    });

    projectsGrid.appendChild(projectCard);
  });
}

// Project expand/collapse functionality
let currentExpandedProject = null;

function expandProject(projectId) {
  const expandedArea = document.getElementById("expandedProjectArea");
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

  // Show the expanded area
  expandedArea.style.display = "block";

  // Update expand indicators
  document
    .querySelectorAll(".project-expand-indicator")
    .forEach((indicator) => {
      indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
    });

  // Update the clicked project's indicator
  const clickedCard = document.querySelector(`[data-project="${projectId}"]`);
  if (clickedCard) {
    const indicator = clickedCard.querySelector(".project-expand-indicator");
    indicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
  }

  // Create the expanded content
  const expandedContent = `
    <div class="expanded-project-main">
      <div class="project-image" style="height: 200px; margin-bottom: 1rem;">
        <img src="${project.image}" alt="${
    project.title
  }" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
      </div>
      <h3>${project.title}</h3>
      <div class="project-company">${project.company}</div>
      <div class="project-skills">
        ${project.skills
          .map((skill) => `<span class="skill-tag">${skill}</span>`)
          .join("")}
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
              ${project.workedWell.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="reflection-item">
            <h5>What Could Be Improved</h5>
            <ul>
              ${project.couldImprove.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="reflection-item">
            <h5>Key Learnings</h5>
            <ul>
              ${project.learnings.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
      
      <div class="expanded-project-section">
        <h4>Project Screenshots</h4>
        ${
          project.projectImages
            ? `<div class="project-screenshots">
            ${project.projectImages
              .map(
                (img) =>
                  `<div class="project-screenshot">
                <img src="${img}" alt="${project.title} Screenshot" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">
              </div>`
              )
              .join("")}
          </div>`
            : `<div class="project-screenshot-placeholder">
            <i class="${project.placeholderIcon}"></i>
            <p>${project.placeholderText}</p>
          </div>`
        }
      </div>
      
      <div class="project-collapse">
        <button class="project-collapse-btn" onclick="collapseProject()">Show Less</button>
      </div>
    </div>
  `;

  expandedArea.querySelector(".expanded-project-content").innerHTML =
    expandedContent;
  currentExpandedProject = projectId;

  // Smooth scroll to the expanded content
  setTimeout(() => {
    expandedArea.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

function collapseProject() {
  const expandedArea = document.getElementById("expandedProjectArea");

  // Hide the expanded area
  expandedArea.style.display = "none";
  currentExpandedProject = null;

  // Reset all expand indicators
  document
    .querySelectorAll(".project-expand-indicator")
    .forEach((indicator) => {
      indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
    });

  // Smooth scroll back to the projects section
  setTimeout(() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Generate project cards first
  generateProjectCards();

  const animatedElements = document.querySelectorAll(
    ".project-card, .certificate-card, .volunteer-card, .timeline-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add typing effect to hero text
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-text h1");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

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
