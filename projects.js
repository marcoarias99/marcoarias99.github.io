// Consolidated Project Data - All project information in one place
const projectData = {
  1: {
    title: "Exercise Application",
    company: "Personal Project",
    status: "Complete",
    skills: ["Swift UI", "iOS Development", "Mobile App"],
    tools: ["SwiftUI", "Xcode", "Figma", "Wireframing Tools"],
    image: "images/exercise-application/exercise-app.gif",
    projectImages: [
      "images/exercise-application/main.png",
      "images/exercise-application/add.png",
      "images/exercise-application/timer.png",
    ],
    description:
      "Developed a comprehensive exercise tracking application using Swift UI. The app features workout planning, progress tracking, and exercise logging capabilities. Built with modern iOS development practices and intuitive user interface design.",
    // Enhanced STAR Format Implementation
    situation:
      "As someone interested in fitness and mobile development, I identified a personal need for a simple workout tracking app that could accommodate custom routines without the complexity of existing solutions.",
    task: "Build a fully functional exercise app from scratch, driven by personal interest in creating something useful for workout routines. The goal was to go from zero to finished app by defining my own features, including selecting workouts, counting sets, and integrating a timer.",
    action: [
      "Used SwiftUI, Xcode, Figma, and wireframing tools to design and structure the app before coding",
      "Taught myself Swift programming language in three weeks through tutorials, YouTube videos, and documentation",
      "Focused on one core idea at a time rather than getting distracted by multiple features",
      "Applied UI/UX design principles to create an intuitive user interface",
      "Implemented key features including workout selection, set counting, and timer integration",
      "Stayed curious and problem-solved independently when facing coding challenges",
    ],
    result: [
      "Successfully built and deployed a fully functional exercise tracking application",
      "Mastered Swift programming fundamentals and SwiftUI framework in just three weeks",
      "Developed core mobile development concepts and sparked interest in UI/UX design",
      "Created a user-friendly app that serves the intended purpose of workout tracking",
      "Gained confidence in independent learning and problem-solving for technical projects",
    ],
    challenges:
      "The biggest challenge was that I had never used Swift or built an app before, but I overcame this by staying curious and problem-solving independently.",
    placeholderIcon: "fas fa-image",
    placeholderText: "Screenshot placeholder",
  },
  2: {
    title: "System Integration for US Acquisition",
    company: "Gibson Energy",
    status: "Complete",
    skills: ["System Integration", "Business Analysis", "API Integration"],
    tools: [
      "Excel",
      "Power BI",
      "Virtual Machines",
      "Synthesis System",
      "Validation Scripts",
    ],
    image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
    description:
      "Led a comprehensive system integration project during my tenure as Business System Analyst at an energy company. The project involved connecting multiple enterprise systems to streamline data flow and improve operational efficiency across departments.",
    // Enhanced STAR Format Implementation
    situation:
      "Gibson Energy acquired a U.S. company, requiring integration of all relevant data from the newly acquired US company into our existing system, Synthesis, while preventing disruptions in production.",
    task: "Migrate all relevant data accurately into a test environment, perform quality checks, coordinate SOX compliance tasks, and ensure all users had appropriate access permissions while meeting internal control requirements.",
    action: [
      "Used Excel, Power BI, virtual machines, and the Synthesis system to support the migration process",
      "Performed comprehensive quality checks and uploaded test data to validate system integrity",
      "Developed validation scripts based on prior automation work to ensure data accuracy before and after migration",
      "Created detailed technical documentation outlining steps and validations required throughout testing",
      "Collaborated with the acquired team to develop feasible workarounds for system limitations",
      "Coordinated SOX compliance tasks and verified appropriate user access permissions were in place",
      "Helped create system backups and established post-integration reference processes",
    ],
    result: [
      "Successfully migrated all necessary data despite system limitations without production disruptions",
      "Established reusable documentation and processes that serve as reference for future integrations",
      "Ensured full regulatory compliance with SOX requirements and internal control standards",
      "Strengthened skills in system testing, stakeholder coordination, and regulatory compliance",
      "Created validated data handling procedures that met all internal control requirements",
    ],
    challenges:
      "A major challenge was migrating all necessary data despite system limitations, which we resolved by collaborating with the acquired team on feasible workarounds.",
    placeholderIcon: "fas fa-project-diagram",
    placeholderText: "System architecture diagram placeholder",
  },
  3: {
    title: "System Automation & Data Processing",
    company: "Gibson Energy",
    status: "Complete",
    skills: ["Python", "VBA", "Excel Automation", "Data Processing"],
    tools: ["VBA Macros", "Excel", "Python", "Power BI", "Validation Scripts"],
    image: "images/system-automation/automation.gif",
    projectImages: ["images/system-automation/automation.gif"],
    description:
      "Developed automated solutions for data processing and worksheet management. Created Python scripts and VBA macros to automatically clean and process Excel worksheets, reducing manual work by 80% and improving data accuracy across the organization.",
    // Enhanced STAR Format Implementation
    situation:
      "As a Business Systems Analyst, I observed that manual data validation for month-end processes was taking up to two hours and was prone to human error, especially in report comparisons for the finance team.",
    task: "Reduce manual data validation time, minimize human error in report comparisons, and create automation that would help the finance team catch discrepancies faster and more accurately.",
    action: [
      "Proposed the automation idea to my supervisor and received approval to build the solution",
      "Built automation using VBA macros, Excel, Python, and Power BI to streamline validation processes",
      "Created scripts that compared report values, flagged inconsistencies, and standardized data formats",
      "Worked closely with the finance team to understand the meaning of different columns and fields in their reports",
      "Developed solutions to handle inconsistent data across reports through scripting and standardization",
      "Improved technical understanding of Excel functions, VBA scripting, and financial dataset structures",
    ],
    result: [
      "Reduced manual validation time from two hours to automated processing (80% time reduction)",
      "Eliminated human error in report comparisons and significantly improved data accuracy",
      "Created tools that helped the finance team catch discrepancies faster and more reliably",
      "Accelerated month-end processes and improved overall reporting efficiency",
      "Enhanced technical skills in Excel functions, VBA scripting, and financial data analysis",
    ],
    challenges:
      "A key challenge was dealing with inconsistent data across reports, but scripting helped overcome that by standardizing and accelerating the validation process.",
    placeholderIcon: "fas fa-code",
    placeholderText: "Code snippet placeholder",
  },
  4: {
    title: "Cyclistic Case Study",
    company: "Google Data Analytics Capstone",
    status: "Complete",
    skills: ["SQL", "BigQuery", "Data Cleaning", "Tableau"],
    tools: [
      "BigQuery (SQL)",
      "Google Cloud Storage",
      "Google Sheets",
      "Kaggle (Markdown)",
      "Tableau",
    ],
    image: "images/cyclistic/dashboard-overview.png",
    projectImages: ["images/cyclistic/dashboard-overview.png"],
    description:
      "Comprehensive data analytics project analyzing bike-share usage patterns to understand differences between casual riders and annual members. Completed as part of the Google Data Analytics Professional Certificate program, utilizing real-world data to provide actionable business insights.",
    hasNotebook: true,
    notebookUrl: "https://www.kaggle.com/code/marcoariasb/cyclistic-case-study",
    hasTableau: true,
    // Enhanced STAR Format Implementation
    situation:
      "This project was the capstone for the Google Data Analytics Certificate, where Cyclistic (a fictional bike-share company) needed to understand user behavior differences between casual riders and annual members.",
    task: "Analyze ride data to answer how casual and annual members use Cyclistic's bikes differently, and how to encourage more conversions to annual memberships. The goal was to deliver a complete analysis with actionable business recommendations.",
    action: [
      "Used BigQuery (SQL), Google Cloud Storage, Google Sheets, Kaggle (Markdown), and Tableau to process and analyze the data",
      "Cleaned and organized millions of records of bike-share trip data to ensure data quality and accuracy",
      "Built comprehensive dashboards in Tableau to visualize findings and make insights accessible to stakeholders",
      "Explored key business questions including what stakeholders need to know and what the data supports",
      "Set up a cost-effective environment to handle large datasets within the limitations of free tools",
      "Created well-documented reports that explain findings clearly for non-technical users",
    ],
    result: [
      "Delivered a complete dashboard and comprehensive analysis that clearly explains findings for business stakeholders",
      "Learned to work confidently with large-scale data and became comfortable with enterprise-level data analysis",
      "Developed skills in asking the right business questions and working within environmental constraints",
      "Created actionable recommendations for converting casual riders through data-driven insights",
      "Gained experience in end-to-end data analytics process from raw data to business presentation",
    ],
    challenges:
      "Some obstacles included setting up the environment to handle large datasets and finding cost-effective ways to process and store them within the limitations of a free environment.",
    placeholderIcon: "fas fa-chart-line",
    placeholderText: "Tableau dashboard will be embedded here",
  },
};

// Generate project cards dynamically
function generateProjectCards() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  // Display projects in order: 4, 2, 3, 1 (Cyclistic → System Integration → System Automation → Exercise App)
  const projectOrder = [4, 2, 3, 1];

  projectOrder.forEach((projectId) => {
    const project = projectData[projectId];

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-project", projectId);

    projectCard.innerHTML = `
      <div class="project-status">${project.status}</div>
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
        ${
          project.hasNotebook
            ? `<div class="project-notebook-btn">
            <a href="${project.notebookUrl}" target="_blank" rel="noopener noreferrer" class="view-notebook-btn">
              <i class="fab fa-kaggle"></i>
              <span>View Notebook</span>
            </a>
          </div>`
            : ""
        }
      </div>
      <div class="project-expand-indicator">
        <i class="fas fa-chevron-down"></i>
      </div>
    `;

    // Add click event listener for expand/collapse
    projectCard.addEventListener("click", (e) => {
      // Don't expand if clicking on the notebook button
      if (!e.target.closest(".view-notebook-btn")) {
        expandProject(projectId);
      }
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

  // Create the expanded content with new layout: left column (main + tools), right column (details)
  const expandedContent = `
    <div class="expanded-project-left">
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
        ${
          project.hasNotebook
            ? `<div class="expanded-notebook-btn">
            <a href="${project.notebookUrl}" target="_blank" rel="noopener noreferrer" class="view-notebook-btn">
              <i class="fab fa-kaggle"></i>
              <span>View Notebook</span>
            </a>
          </div>`
            : ""
        }
      </div>
      
      <div class="expanded-project-section tools-section">
        <h4>Tools Used</h4>
        <div class="tools-used">
          ${project.tools
            .map((tool) => `<span class="tool-tag">${tool}</span>`)
            .join("")}
        </div>
      </div>
    </div>
    
    <div class="expanded-project-right">
      <div class="expanded-project-section">
        <h4>Project Details</h4>
        <div class="star-format">
          <div class="star-item">
            <h5>Background</h5>
            <p>${project.situation}</p>
          </div>
          <div class="star-item">
            <h5>Objectives</h5>
            <p>${project.task}</p>
          </div>
          <div class="star-item">
            <h5>What I Did</h5>
            <ul>
              ${project.action.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="star-item">
            <h5>Outcomes</h5>
            <ul>
              ${project.result.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          ${
            project.challenges
              ? `<div class="star-item">
              <h5>Challenges & Solutions</h5>
              <p>${project.challenges}</p>
            </div>`
              : ""
          }
        </div>
      </div>
      
      <div class="expanded-project-section">
        <h4>${
          project.hasTableau ? "Interactive Dashboard" : "Project Screenshots"
        }</h4>
        ${
          project.hasTableau
            ? `<div class="tableau-embed">
            <div class='tableauPlaceholder' id='viz${projectId}' style='position: relative'>
              <noscript>
                <a href='#'>
                  <img alt='Cyclistic Dashboard' src='https://public.tableau.com/static/images/Cy/Cyclistic_17531706788100/CyclisticAllUserDashboard/1_rss.png' style='border: none' />
                </a>
              </noscript>
              <object class='tableauViz' style='display:none;'>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='Cyclistic_17531706788100%2FCyclisticAllUserDashboard' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https%3A%2F%2Fpublic.tableau.com%2Fstatic%2Fimages%2FCy%2FCyclistic_17531706788100%2FCyclisticAllUserDashboard%2F1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
              </object>
            </div>
            <script type='text/javascript'>
              var divElement = document.getElementById('viz${projectId}');
              var vizElement = divElement.getElementsByTagName('object')[0];
              if ( divElement.offsetWidth > 800 ) { 
                vizElement.style.width='1000px';vizElement.style.height='827px';
              } else if ( divElement.offsetWidth > 500 ) { 
                vizElement.style.width='1000px';vizElement.style.height='827px';
              } else { 
                vizElement.style.width='100%';vizElement.style.height='777px';
              }
              var scriptElement = document.createElement('script');
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
            </script>
          </div>`
            : project.projectImages
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

// Initialize projects when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateProjectCards();
});
