import "../styles/style.css";

// main About component
export default function About() {
  // content for the About section
  const profileImageSrc = "\public\imgs\Ryan_portrait.jpg";
  const profileImageAlt = "Image of self";
  const aboutTitle = "About Me:";
  const aboutParagraphs = [
    "Hi there! I'm Ryan, and I'm a full-stack developer currently working on improving my skills through a coding bootcamp. I'm really curious and enjoy solving problems, which drives me to combine creativity with technical skills to create smooth and effective digital experiences. When I'm not coding, I like to explore different interests. I enjoy reading, practicing oil painting, and spending time outdoors. These hobbies not only spark my creativity but also give me a fresh perspective on my work in technology.",
  ];

  // render the component
  return (
    <div className="about-container page-container">
      <div className="about-content">
        {/* profile image section */}
        <div className="profile-image">
          <img
            src={profileImageSrc}
            alt={profileImageAlt}
            className="profile-img"
          />
        </div>

        {/* about text section */}
        <div className="about-text">
          <h1>{aboutTitle}</h1>
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}