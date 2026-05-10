export const profile = {
  personal: {
    fullName: "Luvinson Irudhayarasu",
    title: "Software Engineer",
    email: "luvinson777@gmail.com",
    phone: "+94-763813125",
    location: "Colombo, Sri Lanka",
    profileLinks: {
      github: "https://github.com/luvi2001",
      linkedin: "https://linkedin.com/in/luvinson-irudhayarasu"
    }
  },
  summary: {
    title: "Final-year Software Engineering Student & Full-Stack Developer",
    description: "Final-year Software Engineering student at SLIIT specializing in backend and full-stack development. Experienced in building scalable systems using NestJS/Node.js, designing REST APIs with comprehensive documentation via Swagger, integrating secure payment gateways, and implementing RBAC-based authorization.",
    specializations: [
      "Backend Systems Architecture",
      "Full-Stack Web Development",
      "Mobile Application Development",
      "API Design & Documentation",
      "DevOps & Cloud Deployment",
      "Machine Learning Integration"
    ]
  },
  education: {
    current: {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "Bachelor of Science Honours in Information Technology",
      specialization: "Software Engineering",
      startYear: 2022,
      expectedEndYear: 2025,
      status: "Final Year (Currently Enrolled)",
      cgpa: "3.54/4"
    }
  },
  experience: [
    {
      position: "Intern Software Engineer",
      company: "ZaVolt (Pvt) Ltd",
      duration: "Jul 2025 - Jan 2026",
      projects: [
        {
          name: "Hvibez Hotel Reservation Platform",
          role: "Full-Stack Developer",
          description: "End-to-end frontend and backend feature development with secure payment processing",
          technologies: ["Next.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "My Fatoorah"]
        },
        {
          name: "AccLead Mobile Accounting Application",
          role: "Full-Stack Developer",
          description: "Comprehensive accounting modules with role-based access control",
          technologies: ["React Native", "NestJS", "TypeScript", "Swagger", "PostgreSQL"]
        },
        {
          name: "Flutter Desktop Application Refactoring",
          role: "Lead Developer",
          description: "Enabled full offline functionality by removing Firebase dependencies",
          technologies: ["Flutter", "Local Storage", "Offline Seeders"]
        }
      ]
    }
  ],
  projects: [
    {
      name: "Smart Traffic Flow Optimization with Multi-Agent Reinforcement Learning",
      status: "In Progress",
      role: "Project Lead",
      objective: "Develop smart traffic signal optimization system using reinforcement learning",
      technologies: ["SUMO", "YOLOv8", "Streamlit", "OpenCV", "Python", "Roboflow"],
      repository: "github.com/luvi2001/smart-traffic-optimization"
    },
    {
      name: "FasterEats - Food Delivery Platform",
      duration: "Mar 2025 - May 2025",
      architecture: "Microservices-based",
      description: "Scalable food delivery system with containerization and orchestration",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"]
    },
    {
      name: "CMByouthLight Mobile App",
      duration: "Jan 2025 - Oct 2025",
      description: "Bible study session and leader statistics management application",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "Render"],
      repository: "github.com/luvi2001/cmbyyouthlight"
    },
    {
      name: "Hostel Management System",
      duration: "Mar 2024 - Jun 2024",
      role: "Project Lead",
      description: "Comprehensive hostel operations management system",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Online Music Instrument Store",
      duration: "Mar 2023 - Apr 2023",
      description: "E-commerce platform for musical instruments",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat"]
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Dart"],
    frontend: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
    backend: ["NestJS", "Node.js", "Express.js", "FastAPI"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    devOps: ["Docker", "Kubernetes", "GitHub Actions", "Nginx"],
    tools: ["Git", "Swagger/OpenAPI", "Prisma ORM", "SUMO", "YOLOv8"]
  }
};
