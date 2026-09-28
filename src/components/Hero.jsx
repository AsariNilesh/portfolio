import profilePic from "../assets/photo.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profilePic} alt="Asari Nilesh" className="profilepic"/>
      <h1>Hi, I'm <span>Asari Nilesh</span></h1>
      <h2>Frontend Developer</h2>
      <p>I build Responsive Web Applications using React.js, JavaScript, HTML, and CSS.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;