function Projects() {
    const projectData = [{
        title: "ShopNex - E-commerce Website",
        tech : "HTML, CSS, Javascript",
        Description :"Responsive e-commerce frontend with product listings, cart functionality, and localStorage persistence.",
        Link :"https://shop-nex-theta.vercel.app/"
    },
    {
        title: "JobFinder - pro - Job Search Platform",
        tech : "HTML, CSS, Javascript",
        Description :"Responsive job search platform with job listings, search functionality, and user-friendly interface.",
        Link :"https://job-finder-pro-rho.vercel.app/"
    },
    {
        title : "Portfolio Website",
        tech : "React.js ,Css3", 
        Description :"Personal portfolio website to showcase projects and skills.",
        Link :"#"
    }

    
];
return (
    <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectData.map((project, index) => (
                <div key ={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p className="tech">{project.tech}</p>
                    <p className="description">{project.Description}</p>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>

            ))}
        </div>
    </section>
)
}

export default Projects;