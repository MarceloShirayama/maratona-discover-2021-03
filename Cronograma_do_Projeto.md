## Aula 01

---

- [ ]  Ambiente
		- [ ] NodeJS 
    - [ ] Navegador
    - [ ] VS Code
        - [ ] Tema
				- [ ] Fontes
        - [ ] Plugins
- [ ] Apresentar HTML e CSS
    - [ ] index.html
    - [ ] profile.html
    - [ ] job.html
    - [ ] styles
    - [ ] scripts
- [ ] O que é Node
    - [ ] página oficial
    - [ ] node -v
- [ ] Iniciar o projeto
    - [ ] npm
- [ ] package.json
- [ ] Instalar Express
    - [ ] Dependencies
    - [ ] node_modules
- [ ] Criar servidor
    - [ ] require()
    - [ ] Iniciar o servidor (listen)
    - [ ] Primeira rota
        - [ ] `.get("/", () ⇒ console.log('cheguei na rota'))`
        - [ ] request e response
- [ ] Instalar o nodemon
    - [ ] dev dependencies
    - [ ] configurar
    - [ ] npm run dev
- [ ] mostrando index.html
- [ ] views directory
- [ ] public directory
- [ ] create routes.js
    - [ ] module.exports
- [ ] fix
    - [ ] file paths
    - [ ] href
- [ ] template engine
- [ ] Benefício 1: reutilizar componentes (header)
    - [ ] instalar ejs
    - [ ] transformar .html em .ejs
    - [ ] `<%- include('parts/page-header', { title: 'Meu Perfil'}) %>`
    - [ ] install ejs plugin
- [ ] Benefício 2: Programar no HTML
    - [ ] variáveis
    - [ ] criar o objeto do perfil de usuário
    - [ ] passar o objeto do perfil de usuário para o profile.ejs

---

Aula 02

---

## Salvar Job
	- [ ] Form job
    - [ ] method post
    - [ ] action="/job"
	- [ ] rota /job POST
    - [ ] req.body
    - [ ] urlencoded
	- [ ] Criar array de jobs
    - [ ] enviar para o index.ejs
    - [ ] .forEach
    - [ ] ajustes dos dados no index
	- [ ] Configurar jobs na criação de um novo Job
    - [ ] job id: pegar o id do ultimo item do array
    - [ ] created_at: Date.now()
      - [ ] para o cálculo de dias restantes
    - [ ] total-hours
    - [ ] daily-hours
    - [ ] name
	- [ ] Atualizar os jobs no index, antes de apresentar

## Remaining calculation
  - [ ] Devemos calcular sempre que apresentar o projeto, 
				pois poderemos mudar os dados do projeto a qualquer momento
  - [ ] remainingDays = total hours do job / daily hours do job
  - [ ] adicionar os dias à data de criação, para criar uma data futura
  - [ ] subtrair da data futura, o número de dias restantes baseado na data de hoje
  - [ ] pegar a diferença de milissegundos para dias
  - [ ] update status (done | progress)
  - [ ] budget: profile value hour * total job hours
    - [ ] deverá ser atualizado sempre que apresentar o projeto, 
						pois poderá variar dependendo dos dados do projeto ou dos dados do perfil
	- [ ] atualizar o index.ejs
    - [ ] Prazo encerrado ao invés de 0 dias para a entrega
	- [ ] adicionar uma entrada no jobs[] para o prazo encerrado
	
## Refatorar Jobs
    - [ ] Criar um Object Literal Jobs
    - [ ] Adicionar data em Jobs
    - [ ] Adicionar index() e create()

## Object Profile
	- [ ] data
  - [ ] update()
    - [ ] Calculo de custo de hora
	    - [ ] weeksPerYear
	    - [ ] weeksPerMonth = weeks per year - vacation
	    - [ ] total hours per week
	    - [ ] monthly total hours
	    - [ ] value hour = monthly budget / monthly total hours
    - [ ] redirect to /profile

## Editar job
  - [ ] criar função show
    - [ ] rota job/:id GET
    - [ ] req.params
    - [ ] .find
    - [ ] Job not found
    - [ ] service: calculate job budget
    - [ ] refactor index to use service
    - [ ] update job-edit.ejs
  - [ ] criar função de update
    - [ ] rota /job/:id POST
    - [ ] .find
    - [ ] job not found
    - [ ] updatedJob
    - [ ] Job.data= Job.data.map()
    - [ ] redirect

## Delete job
  - [ ] route /job/delete/:id POST
  - [ ] Job.controller.delete()
  - [ ] req.params.id
  - [ ] Job.data.filter()
  - [ ] redirect to /
	- [ ] Delete all Jobs and find error
    - [ ] lastId of Job.controller.create()
    - [ ] use optional chaining operator ?.
    - [ ] use Logical OR operator

---

Aula 03

---

## Refatorar
 - [ ] Sinalizar local da pasta views no server
 - [ ] Importar Path no server
 - [ ] Refatorar routes para nova forma de chamar views

## Refatorar Profile
	- [ ] Separar controller
  - [ ] Criar model
	- [ ] Separar data
	- [ ] Criar get no model
 	- [ ] Importar model Profile no ProfileController
	- [ ] Refaotrar Profile.data para Profile.get()
	- [ ] Refatorar update do profile no model

## Refatorar Job
	- [ ] Mover controller para JobController
	- [ ] Criar pasta utils
	- [ ] Mover services de job para utils
	- [ ] Importar utils dentro de jobController
	- [ ] Refatorar chamada de job services para JobUtils
  - [ ] Mover Job data para model Job
	- [ ] Importar model Job dentro de Jobcontroller
	- [ ] Refatorar chamadas de job.data para Job
	- [ ] Criar update no model recebendo newData
	- [ ] Criar delete no model

## Refatorar Dashboard
	- [ ] Passar index do JobController para DashboardController
	- [ ] Refatorar a chamada da rota "/" no routes
	- [ ] Importar model Job
  - [ ] Importar model Profile
	- [ ] Importar JobUtils
	- [ ] Refatorar chamadas de profile, job e utils
	- [ ] Passar profile para index.ejs
  - [ ] Refatorar os dados de profile no index.ejs
  - [ ] Criar StatusCount
	- [ ] Passar StatusCount para index.ejs
	- [ ] Refatorar os dados de contagem de status no index.ejs
  - [ ] Calcular freeHours
	- [ ] Passar freehours para index.ejs
	- [ ] Refatorar dados de freehours no index.ejs
	- [ ] Ajuste o alinhamento de campos de perfil

## Banco de dados
	- [ ] Como funciona banco de dados e tabelas

---

Aula 04

---

## Refatorar
- [ ] Save JobController

## Banco de dados
	- [ ] Instalar SQLite
	- [ ] Criar config
	- [ ] Criar init
	- [ ]  Async Await
	- [ ] Criar tabela profile
	- [ ] Criar tabela jobs
	- [ ] Inserir profile
	- [ ] Inserir Jobs
	- [ ]  Instalar beekeeper
	- [ ] Ver resultado no beekeeper

## Profile
	- [ ]  Importar config no module 

## Profile get()
	- [ ] iniciar banco de dados
	- [ ] SELECT de profile
	- [ ] Fechar banco de dados 
	- [ ] Normalizar os dados 
	- [ ] Retornar os dados normalizados
	- [ ]  Transformar index do controller em Async
	- [ ] Transformando index do DashboardController em Async

## Profile update()
	- [ ] iniciar banco de dados
	- [ ] UPDATE de profile
	- [ ] Fechar banco de dados 
	- [ ] Transformando update no controler em Async

## Jobs 
	- [ ] Importando config no module

## Jobs show()
	- [ ] iniciar banco de dados
	- [ ] SELECT de job
	- [ ] Fechar banco de dados 
	- [ ] Normalizar os dados 
	- [ ] Retornar os dados normalizados
	- [ ] Transformando show do controller em Async

## Jobs create()
	- [ ] iniciar banco de dados
	- [ ] INSERT de newJob
	- [ ] Fechar banco de dados

## Jobs update()
	- [ ] iniciar banco de dados
	- [ ] UPDATE de job
	- [ ] Fechar banco de dados 

## Jobs delete()
	- [ ] iniciar banco de dados
	- [ ] DELETE job
	- [ ] Fechar banco de dados  

---

Aula 05

---

# Trilha Back end

### Oportunidades

- [ ]  Salário
- [ ]  Como se posicionar?
    - [ ]  LinkedIn
    - [ ]  Github

### Alinhando expectativas

- [ ]  Certo nível de complexidade para iniciantes
    - [ ]  Dados, lógica de negócio, entendimento amplo do negócio
- [ ]  Maior consistência que Front End
    - [ ]  Front end existem muitas ferramentas
- [ ]  Você gosta de mexer com dados e de entender as minúcias de um negócio?
- [ ]  Você não liga muito para a aparência das coisas?

---

## Caminho

Direção é mais importante que velocidade.

### Visão geral

- [ ]  Como funciona a WEB
- [ ]  HTTP
    - [ ]  Servidor e Cliente
    - [ ]  Fluxo de comunicação
- [ ]  Entendimento de computadores
- [ ]  Estrutura de dados
- [ ]  Lógica e Algoritmos
- [ ]  Memória, Processamento
- [ ]  Abstração, eficiência

A maior parte desse conteúdo é técnico e serve para melhorar seu vocabulário e maneira de pensar como uma pessoa desenvolvedora

Seja uma pessoa preparada para as oportunidades

---

### Front end

- [ ]  Conhecimento geral
- [ ]  HTML
    - [ ]  Estrutura
- [ ]  CSS
    - [ ]  Layout
- [ ]  JS
    - [ ]  Web Apis
- [ ]  Fetch data

**Para praticar**

- [ ]  Codar a primeira maratona
- [ ]  1 Landing page
- [ ]  1 projeto que consuma uma API

Paciência e persistência

---

### NodeJS / Express

- [ ]  Servidor
- [ ]  middlewares
- [ ]  routes
- [ ]  CRUD
- [ ]  APIs

**Para praticar**

- [ ]  2 projetos que envolvam CRUD
    - [ ]  Lista de tarefas
    - [ ]  Playlist de músicas favoritas
- [ ]  1 projeto que irá consumir uma API
- [ ]  1 projeto que envolva upload de arquivos

A prática leva ao aperfeiçoamento

---

### Banco de Dados

- [ ]  Como funciona
- [ ]  Diferença entre SQL e NoSQL
    - [ ]  SQL
    - [ ]  MongoDB
- [ ]  Arquitetura de dados
- [ ]  Operações básicas: Inserir, Consultar, Alterar, Apagar
- [ ]  Busca avançada
- [ ]  Ordenação, Agrupamento, Paginação

**Para praticar**

- [ ]  1 projeto CRUD
- [ ]  1 projeto que envolva diversos filtros de dados
- [ ]  1 projeto que envolva paginação
- [ ]  3 projetos que envolva relacionamentos
    - [ ]  Produtos, Categorias
    - [ ]  Usuários, Grupos
    - [ ]  Blog, Comentários

A chave do sucesso em programação está na repetição!

---

### Alinhando expectativas

- [ ]  Continue a nadar
- [ ]  Será desafiador
- [ ]  Buscar contéudo e ajuda

---

### Autenticação e Autorização

- [ ]  Autenticação serve para mostrar quem é você
- [ ]  Autorização serve para definir o que você pode ou não fazer no sistema
- [ ]  Sign up/Sign In
    - [ ]  Login e Senha
    - [ ]  Validações
    - [ ]  Envio de email
- [ ]  Reset de senha

**Para praticar**

- [ ]  1 projeto que envolva autenticação
- [ ]  1 projeto que envolva autenticação e autorização
- [ ]  1 projeto que envolva envio de email
- [ ]  1 projeto que envolva reset de senha

Ao vencer essa etapa, você poderá utilizar ferramentas para criar as autenticações com as redes sociais

---

### Mais ideas de aplicativos para treinar

- [ ]  Encurtador de URL
- [ ]  Ecommerce (mini)
- [ ]  Stream de música e/ou vídeo
- [ ]  Rede social (mini)
- [ ]  APIs
- [ ]  Clone

---

### Alinhando expectativas

- [ ]  Você terá produzido +20 mini apps
- [ ]  Busque oportunidades e vagas
    - [ ]  Não fique um dia sem procurar e entrar em contato com alguém, mostrando seu desejo de ingressar no mercado
- [ ]  Essa busca de oportunidade é pra te trazer aprendizado e, talvez, uma vaga

---

## Mentalidade

- [ ]  Soft-skills
    - [ ]  Comunicação
    - [ ]  Inglês
    - [ ]  Resolução de problemas
    - [ ]  Pró-atividade
    - [ ]  Resiliência, Paciência, Persistência, Consistência
- [ ]  Foco
    - [ ]  Busque lembrar
        - [ ]  seu momento
        - [ ]  seu contexto
        - [ ]  seu objetivo
- [ ]  Comunidade
    - [ ]  Você poderá ir mais rápido só, mas irá mais longe com alguém do seu lado
    - [ ]  Busque ajuda
    - [ ]  Faça parcerias em projetos
- [ ]  #NeverStopLearning
    - [ ]  O estudo é constante
    - [ ]  O aprendizado é constante
    - [ ]  Ainda há muito que aprender
    - [ ]  Continue ....