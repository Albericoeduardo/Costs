import {useNavigate} from 'react-router-dom'

import ProjetoForm from '../Projects/ProjetoForm'

import styles from './NovoProjeto.module.css'

function NovoProjeto() {

const navigate = useNavigate()

function createPost(project) {
  //initialize cost and service
  project.cost = 0
  project.services = []

  fetch("http://localhost:5000/projects", {
    method: "POST",
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(project),
  }).then((resp) => resp.json()) 
  .then((data) => {
    console.log(data)
    //redirect
    navigate('/projects', {state: {message: 'Projeto criado com sucesso!'}})
  })
  .catch(err => console.log(err))

}

    return (
        <div className={styles.container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
    )
}

export default NovoProjeto