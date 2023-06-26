import { useState } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
	baseURL: "https://infoweb-api.vercel.app/",
});

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas (apenas leitura)</h1>
		</div>
	);
};

const AppTarefas = () => {
	const [tarefas, setTarefas] = useState([]);

	const tratarClique = () => {
		api.get("tarefas").then(
			(resposta) => {
				console.log("Alô mundo")
				console.info(resposta.data.data);
				const lista = resposta.data.data.map(
					(item: any) =>  item.titulo
				);
				console.info(lista);
				setTarefas(lista);
			}
		);
	};
	return (
		<div className="card">
			<button onClick={tratarClique}>Pegar tarefas</button>
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
