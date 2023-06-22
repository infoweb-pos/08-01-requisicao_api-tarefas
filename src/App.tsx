import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas (apenas leitura)</h1>
		</div>
	);
};

const AppTarefas = () => {
	return (
		<div className="card">
			<button>Pegar tarefas</button>
			<ul>
				<li>
					Criar o projeto, adicionar bibliotecas e limpar o código
				</li>
				<li>
					Criar o componente AppNavBar com o título da aplicação e
					adicionar instância em App
				</li>
				<li>
					Criar o componente AppTarefas com uma lista de tarefas e
					adicionar instância em App
				</li>
				<li>
					Transferir dados da lista para estado tarefas de AppTarefas
				</li>
				<li>
					Montas o estado tarefas do componente AppTarefas a partir de
					requisião a API
				</li>
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
