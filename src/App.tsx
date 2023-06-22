import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas (apenas leitura)</h1>
		</div>
	);
};

const AppTarefas = () => {
	const [tarefas, setTarefas] = useState([
		"Criar o projeto, adicionar bibliotecas e limpar o código",
		"Criar o componente AppNavBar com o título da aplicação e adicionar instância em App",
		"Criar o componente AppTarefas com uma lista de tarefas e adicionar instância em App",
		"Transferir dados da lista para estado tarefas de AppTarefas",
		"Montas o estado tarefas do componente AppTarefas a partir de requisião a API",
	]);

	return (
		<div className="card">
			<button>Pegar tarefas</button>
			<ul>
				{tarefas.map((tarefa: string, indice: number) => (
					<li key={indice}>{tarefa}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<>
			<AppNavBar />
			<AppTarefas />
		</>
	);
};

export default App;
