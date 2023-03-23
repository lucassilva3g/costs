import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";


function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  // fetch("http://localhost:5000/categories", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     setCategories(data);
  //   })

  //   .catch((err) => console.log(err));  o react n entende essa forma e chama milhoes de vezes,  fazemdo um loop infinito
  // a froma certa é essa abaixo, usando o useEffect
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      //usamos para pegar dados do backend
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault(); //para nao recarregar a pagina
    //console.log(project);
    handleSubmit(project); //chama a funcao que foi passada como props
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
    }});
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""} //se tiver categoria, pega o id, se nao, pega vazio
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""} //se tiver categoria, pega o id, se nao, pega vazio
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""} //se tiver categoria, pega o id, se nao, pega vazio
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
