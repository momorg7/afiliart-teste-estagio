# afiliart-teste-estagio
Aplicação feita para o teste de estágio, com a finalidade de realizar cadastros de programadores da empresa Afiliart.

É necessário ter o Node.js e o MongoDB instalados em sua máquina.

Para rodar o projeto:

Utilizando o terminal no diretório do projeto, digite o comando "npm install", para instalar as dependências do projeto;

Digite o comando "npm run dev".

Acesse as rotas utilizando programas como Insomnia e Postman, que são acessadas através do endereço "http://localhost:8000/users/". 

O arquivo JSON segue o seguinte formato:

{
	"email": "morgana@email.com",
	"name": "Morgana Leite",
	"phone": "81999999999",
	"linkedin": "linkedin.com/profile/morgana",
	"city": " ",
	"state": " ",
	"shift": [1, 0, 0],
	"abilities": [3, 0, 3, 2, 4]
}