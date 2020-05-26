# Projects
Aplicação para armazenar projetos e utilizando Express


Após clonar a aplicação rode o **yarn** para instalar as dependencias 

inicie a aplicação com o comando **node index.js**

Usando as rotas /projects e possivel manipular os dados 

# Exemplo:

# Listar todas as tarefas:

GET: http://localhost:3000/projects


# Listar uma tarefa:

GET: http://localhost:3000/projects/1


# Criar tarefas:

POST http://localhost:3000/projects

body: 
{
 	"id": "5",
	"title":"Novo Projeto"
}

POST http://localhost:3000/projects/2/tasks

body:
{
	"task": "Nova tarefa"	
}

# Alterar titulo:

http://localhost:3000/projects/1

body:
{
	"title": "Novo Titilo"	
}

# Deletar tarefa:

DELETE: http://localhost:3000/projects/0

