# Usando dados a partir de requisições a API
- **Tema**: Fundamentos de React
- **Subtema**: Fundamentos - Requisições a API

## Objetivos
- Montar dados da interface a partir de dados recebidos de requisições a API

## Resumo
Será criado um projeto javascript de uma aplicação web com o framework React e a 
linguagem de programação TypeScript usando o aplicativo npm e o script vite.
O aplicativo web será encapsulado no componente React `App` que conterá componentes: AppNavBar com um título; 
e AppTarefas, com um botão e uma lista de tarefas.
O botão de AppTarefas será o responsável por atualizar a lista de tarefas a partir de requisição a API.

## Informações gerais
- curso: infoweb
- disciplina: programação orientada a serviços
- conteúdo: [aplicação web](https://github.com/infoweb-pos/react-notas_de_aula)
- instituição: IFRN CNAT
- professor: [Leonardo Ataide Minora](https://github.com/leonardo-minora/)

## Executar a aplicação
```console
[08-01-requisicao_api-tarefas] $ npm i
added 209 packages, and audited 210 packages in 15s

39 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

[08-01-requisicao_api-tarefas] $ npm run dev
 VITE v4.3.9  ready in 400 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## Acompanhar os códigos-fonte de acordo com o sumário

1. [Criar o projeto, adicionar bibliotecas e limpar o código](https://github.com/infoweb-pos/react-notas_de_aula/blob/main/fundamentos/08-requisicao_api-tarefas.md#1-criar-o-projeto-adicionar-bibliotecas-e-limpar-o-c%C3%B3digo)
```console
[08-01-requisicao_api-tarefas] $ git checkout 01-app 
branch '01-app' set up to track 'origin/01-app'.
Switched to a new branch '01-app'

[08-01-requisicao_api-tarefas] $ 
```
2. [Criar o componente `AppNavBar` com o título da aplicação e adicionar instância em `App`](https://github.com/infoweb-pos/react-notas_de_aula/blob/main/fundamentos/08-requisicao_api-tarefas.md#2-criar-o-componente-appnavbar-com-o-t%C3%ADtulo-da-aplica%C3%A7%C3%A3o-e-adicionar-inst%C3%A2ncia-em-app)
```console
[08-01-requisicao_api-tarefas] $ git checkout 02-appNavBar 
branch '02-appNavBar' set up to track 'origin/02-appNavBar'.
Switched to a new branch '02-appNavBar'

[08-01-requisicao_api-tarefas] $
```
3. [Criar o componente `AppTarefas` com uma lista de tarefas e adicionar instância em `App`](https://github.com/infoweb-pos/react-notas_de_aula/blob/main/fundamentos/08-requisicao_api-tarefas.md#3-criar-o-componente-apptarefas-com-uma-lista-de-tarefas-e-adicionar-inst%C3%A2ncia-em-app)
```console
[08-01-requisicao_api-tarefas] $ git checkout 03-AppTarefas 
branch '03-AppTarefas' set up to track 'origin/03-AppTarefas'.
Switched to a new branch '03-AppTarefas'

[08-01-requisicao_api-tarefas] $
```
4. [Transferir dados da lista para estado `tarefas` de `AppTarefas`](https://github.com/infoweb-pos/react-notas_de_aula/blob/main/fundamentos/08-requisicao_api-tarefas.md#4-transferir-dados-da-lista-para-estado-tarefas-de-apptarefas)
```console
[08-01-requisicao_api-tarefas] $ git checkout 04-estado-tarefas 
branch '04-estado-tarefas' set up to track 'origin/04-estado-tarefas'.
Switched to a new branch '04-estado-tarefas'

[08-01-requisicao_api-tarefas] $
```
5. [Montas o estado `tarefas` do componente `AppTarefas` a partir de requisião a API](https://github.com/infoweb-pos/react-notas_de_aula/blob/main/fundamentos/08-requisicao_api-tarefas.md#5-montas-o-estado-tarefas-do-componente-apptarefas-a-partir-de-requisi%C3%A3o-a-api)
```console
[08-01-requisicao_api-tarefas] $ git checkout 05-api_request 
branch '05-api_request' set up to track 'origin/05-api_request'.
Switched to a new branch '05-api_request'

[08-01-requisicao_api-tarefas] $
```
