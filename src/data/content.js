// All portfolio content lives here. Edit text/links in this file.

export const profile = {
  name: "Jagathi Nagamani Jonnalagadda",
  title: "Aspiring AI/ML Developer | Python Developer",
  email: "jagathimani123@gmail.com",
  phone: "+91 8341411329",
  location: "Punadipadu, Vijayawada, Andhra Pradesh, India",
  github: "https://github.com/Jagathinagamani-1a1246",
  linkedin: "https://www.linkedin.com/in/jagathi-nagamani-jonnalagadda-561005346",
};

// Navigation order: [label, section id]
export const navLinks = [
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Resume", "resume"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

// RESUME PDF LOCATION: replace the file public/resume/Jagathi_Nagamani_Resume.pdf
// (keep the same name), or change this path.
export const RESUME_URL = "/resume/Jagathi_Nagamani_Resume.pdf";
export const RESUME_DOWNLOAD_NAME = "Jagathi_Nagamani_Resume.pdf";

export const education = [
  { level: "B.Tech — Information Technology", school: "Dhanekula Institute of Engineering and Technology, Ganguru", period: "2023 – Present", score: "CGPA 7.65", big: "7.65" },
  { level: "Intermediate", school: "Sri Chaitanya Junior College, Anakapalli", period: "", score: "81.33%", big: "81.33%" },
  { level: "SSC", school: "Sri Chaitanya English Medium School", period: "", score: "99%", big: "99%" },
];

export const skills = [
  { name: "Languages", items: ["Python", "Java", "C", "JavaScript"] },
  { name: "Databases", items: ["SQL", "MySQL", "PostgreSQL"] },
  { name: "Data & Analysis", items: ["Pandas", "NumPy", "Matplotlib", "Excel", "Jupyter Notebook"] },
  { name: "AI & ML", items: ["Generative AI", "Machine Learning fundamentals"] },
  { name: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { name: "Tools", items: ["Git", "GitHub", "Jupyter Notebook"] },
];

export const experience = [
  { role: "AI Trainee", org: "Calibo AI Academy", status: "Ongoing", text: "Hands-on training in artificial intelligence, building a practical foundation in AI and machine learning concepts." },
  { role: "Java Full Stack Developer Intern", org: "EduSkills Academy", status: "Completed", text: "Completed a Java Full Stack internship covering application development across the stack." },
  { role: "Data Structures & Algorithms in C — Project Intern", org: "EduSkills Academy", status: "Internship", text: "Project-based internship applying data structures and algorithms using the C language." },
];

export const projects = [
  { title: "FitWise AI", tag: "AI / ML", status: "In progress", text: "A personalized clothing size and fit recommendation system that suggests suitable sizes from user and garment measurements. Virtual try-on is a proposed future feature, not yet built.", tech: ["Python", "Machine Learning"], repo: "https://github.com/Jagathinagamani-1a1246/FitSize-AI-Project" },
  { title: "Instagram Dashboard", tag: "Data Viz", status: "", text: "An interactive Instagram data analysis dashboard that visualizes social media metrics and engagement using PivotTables, charts and slicers.", tech: ["Excel", "PivotTables", "Charts", "Slicers"], repo: "https://github.com/Jagathinagamani-1a1246/instagram-dashboard" },
  { title: "Calculator Web Application", tag: "Web", status: "", text: "A calculator built with web technologies, with a clean interface and instant results.", tech: ["HTML", "CSS", "JavaScript"], repo: "https://github.com/Jagathinagamani-1a1246/calculator-web-application" },
];

export const achievements = [
  { title: "First Prize — Smart India Hackathon", note: "College-level achievement", kind: "Award" },
  { title: "Hedera Business Foundation", note: "Certification", kind: "Certificate" },
  { title: "Hedera Certified Foundation", note: "Certification", kind: "Certificate" },
  { title: "Java Full Stack Internship", note: "Completed through EduSkills Academy", kind: "Internship" },
];
