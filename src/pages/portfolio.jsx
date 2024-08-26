import Project from "../components/project";
import "../styles/style.css";

// project data
const projectData = [
  {
    title: "Ryan's HTML Portfolio",
    image: "\imgs\HTML Portfolio Screenshot.png",
    projectLink: "https://ryanpetersen-89.github.io/Ryans_HTML_Portfolio/",
    githubLink: "https://github.com/RyanPetersen-89/Ryans_HTML_Portfolio.git",
  },
  {
    title: "Domain Hunter HQ",
    image: "\imgs\Domain Hunter HQ Screenshot.png",
    projectLink: "https://girlnotfound.github.io/Domain-Hunter-HQ/",
    githubLink: "https://github.com/girlnotfound/Domain-Hunter-HQ",
  },
  {
    title: "What's My Weather",
    image: "\imgs\What's My Weather Screenshot.png",
    projectLink: "https://ryanpetersen-89.github.io/What-Is-My-Weather/",
    githubLink: "https://github.com/RyanPetersen-89/What-Is-My-Weather.git",
  },
  {
    title: "ONline",
    image: "\imgs\ONline-HomePage_Screenshot.png",
    projectLink: "https://online-9xx1.onrender.com/",
    githubLink: "https://github.com/BunggoyLearn/ONline.git",
  },
];

// portfolio component
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioHeading">Portfolio</h1>
      <div className="portfolioGrid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;