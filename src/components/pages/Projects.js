import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Container from "../pages/Container";
import LinkButton from "../layout/LinkButton";
import styles from "./Project.module.css";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Project() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();

  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category ? project.category.name : "Sem categoria"}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  );
}

export default Project;
