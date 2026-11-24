/*
 * data.js — projetos do portfólio
 * Para adicionar um projeto, inclua uma linha em API, DISC ou PES. Veja o README.
 */

/* ---------- dados ---------- */
const API=[
{id:"calc",n:"Calculadora Científica",y:2024,sem:"1º semestre",co:"FATEC (professor de Organização de Computadores como cliente)",role:"Desenvolvedora",r:"Calculadora-Cientifica",
 d:"Calculadora de terminal com operações matemáticas, conversão de bases e validação de entradas, migrada de VisualG para TypeScript.",
 t:["TypeScript","VisualG","Git","Trello"],
 pts:["Implementou a equação de 2º grau (Bhaskara) com retorno de tipo união","Escreveu uma raiz quadrada iterativa sem Math.sqrt()","Ajudou a construir o menu principal com do...while","Propôs a estrutura modular do código"]},
{id:"pacer",n:"Pacer",y:2024,sem:"2º semestre",co:"FATEC",role:"Desenvolvedora",r:"Pacer",
 d:"App desktop em JavaFX para avaliação de competências entre colegas ao fim de cada sprint, com relatórios de médias por aluno e por grupo.",
 t:["Java","JavaFX","MySQL","Jira"],
 pts:["Tela de login e controller de recuperação de senha","Validação de RA em tempo real","Navegação com sceneSwitcher e acesso a dados com AlunoDAO","Modelagem do banco relacional MySQL com integridade referencial"]},
{id:"timesync",n:"Timesync",y:2025,sem:"3º semestre",co:"Altave",role:"Product Owner e dev full-stack",r:null,
 d:"Aplicação web de controle de ponto para funcionários terceirizados, com análise de horas e relatórios exportáveis.",
 t:["Java","Spring Boot","Angular","TypeScript","MySQL","JWT"],
 pts:["Front em Angular: telas de colaboradores e espelho de ponto, filtros, paginação, dashboards e exportação","Endpoints de espelho de ponto e autenticação JWT no Spring","Modelagem MySQL com stored procedures e índices compostos: consultas caíram de ~4s para ~400ms","Liderou um time de 6 pessoas e o backlog no Jira"]},
{id:"cimob",n:"CIMOB",y:2025,sem:"4º semestre",co:"Prefeitura de São José dos Campos",role:"Product Owner e dev full-stack",r:"Cimob-parent",
 d:"Plataforma de análise de dados de radares de trânsito, com dashboards, mapas georreferenciados e alertas automáticos.",
 t:["Vue.js","Nuxt","TypeScript","Java","Spring Boot","Oracle","Redis","Docker","Figma"],
 pts:["Front completo em Vue.js, do protótipo no Figma até a produção","Serviço de alertas no Telegram agendado a cada 5 minutos","Manual do usuário, guia de instalação e apresentações das sprints"]},
{id:"scars",n:"SCARS – Strategic Cost Analytics",y:2026,sem:"5º semestre",co:"SIATT",role:"Dev frontend e trilha de DevOps",r:"strategic-cost-analytics",
 d:"Data Warehouse com análise multidimensional de custos de projetos (materiais, horas técnicas e orçamento) e dashboards gerenciais.",
 t:["Vue.js","TypeScript","Python","Django","PostgreSQL","Docker","GitHub Actions","K6","Prometheus","Grafana"],
 pts:["Telas de Materiais, Horas e Consolidado com KPIs, gráficos e indicador de desvio orçamentário","Monitoramento com Prometheus, Alertmanager, Grafana e Logstash","Ambientes dev e prod separados em Docker Compose","Testes de carga com K6 no CI/CD, com staging e aprovação manual para produção"]},
{id:"akpedia",n:"Akpedia",y:2026,sem:"6º semestre",co:"Akaer",role:"Desenvolvedora",r:"akpedia",
 d:"Solução automatizada para classificar e organizar documentos técnicos.",
 t:["Python","Java","Vue.js","TypeScript","MongoDB","Docker","GitHub Actions"],
 pts:["Endpoint de download de PDFs com visualização inline, cache com ETag e requisições por Range","Busca enriquecida com o trecho do match e a posição do chunk","Rota de pré-análise que sugere a categoria sem salvar o documento","Busca e listagem restritas a documentos aprovados"]}
].map(p=>({...p,g:"api",c:"Projetos integradores (API)"}));

const mk=(g,c,list)=>list.map(([r,y,d,t,n])=>({id:r.toLowerCase(),r,y,d,t,g,c,n:n||r.replace(/[-_]/g," ")}));
const DISC=[
 ...mk("disc","NoSQL",[["kitty-runner",2026,"Jogo de plataforma 2D com fases, inimigos, pontuação, conquistas, controles para celular e ranking global persistente. É a inspiração visual deste chatbot.",["Python","Flask","JavaScript","MongoDB","HTML5 Canvas"],"Kitty Runner"],["masanori-nosql",2026,"Exercícios e projetos da disciplina de banco de dados não estruturado.",["Jupyter","NoSQL"],"NoSQL (exercícios)"]]),
 ...mk("disc","Laboratórios web",[["vue-lab420252",2025,"Laboratório de desenvolvimento com Vue.",["Vue.js"],"Vue Lab"],["springlab420252",2025,"Lab de Spring Boot com entidades JPA e endpoints CRUD REST.",["Java","Spring Boot","JPA"],"Spring Lab"],["bertoti",2024,"Projetos das aulas do professor Giuliano Bertoti.",["HTML","CSS"],"Projetos do prof. Bertoti"]]),
 ...mk("disc","Programação e estruturas",[["Estrutura-Dados",2025,"Implementação comentada das principais estruturas de dados.",["C"],"Estrutura de Dados"],["LP1-Java",2024,"Práticas e exercícios oficiais de Linguagem de Programação I.",["Java"],"LP1 Java"],["Intesivo-TS",2024,"Intensivo de TypeScript do laboratório de banco de dados.",["TypeScript"],"Intensivo TypeScript"]]),
 ...mk("disc","Banco de dados",[["sql-learning",2025,"Prática de banco: criação de tabelas, manipulação de dados e consultas simples.",["SQL"],"SQL Learning"],["Aulas-de-Idiomas",2024,"Aplicação SQL para gerenciar alunos, escolas e aulas de idiomas.",["SQL"],"Aulas de Idiomas"]]),
 ...mk("disc","Matemática discreta",[["Operac-conjuntos",2024,"Operações com conjuntos: união, interseção, diferença e complemento.",["JavaScript"],"Operações com conjuntos"],["Matriz3x3",2024,"Matriz 3x3 baseada em aula de matemática discreta.",["HTML","JavaScript"],"Matriz 3x3"],["Venn-Diagrama",2024,"Diagramas de Venn e conjuntos.",["HTML"],"Diagrama de Venn"],["Quizz-MD",2024,"Quiz com questões do livro usado na disciplina.",["JavaScript"],"Quiz de Matemática Discreta"],["Landing-page-Boole",2024,"Página sobre George Boole.",["HTML","CSS"],"Landing page Boole"]])
];
const PES=[
 ...mk("pes","IA e agentes",[["tradutor-SQLBigQuery",2026,"Traduz perguntas em português para SQL do BigQuery, com validação e execução opcionais.",["Python","LLM","BigQuery","SQL"],"Tradutor SQL BigQuery"],["daily-agent",2025,"CLAIR Agent: planeja o dia de trabalho e protege blocos de foco.",["Python","LLM","Jupyter"],"Daily Agent (CLAIR)"],["transcript-agent",2025,"Gera legendas e resumos de vídeos.",["Python","Whisper","FFmpeg","LLM"],"Transcript Agent"],["study-agent",2025,"Agente de plano de estudos com humano no loop, para Geografia do ENEM.",["Python","LLM","Jupyter"],"Study Agent"],["Quick-agents",2025,"Exercícios e experimentos de um curso de agentes de IA.",["Python","LangChain","LangGraph"],"Quick Agents"],["langchain-course",2025,"Repositório de curso de LangChain.",["LangChain"],"Curso LangChain"],["langgraph-course",2025,"Repositório de curso de LangGraph.",["LangGraph"],"Curso LangGraph"],["TelegramChatBotWithOllama",2024,"Chococat Bot: chatbot de Telegram com análise de sentimento, usando Ollama.",["Ollama","LLM","Telegram"],"Chococat Bot (Telegram)"]]),
 ...mk("pes","Dados e machine learning",[["cat-neural",2026,"App web de visão computacional que detecta gatos e analisa pontos faciais.",["Python","Visão computacional"],"Cat Neural"],["ml-notebooks",2026,"Notebooks de estudo e experimentos de machine learning e ciência de dados.",["Python","Jupyter","Machine learning"],"ML Notebooks"],["data-science-course",2025,"Exercícios de um curso de fundamentos de cientista de dados.",["Python","Jupyter"],"Curso de Data Science"]]),
 ...mk("pes","Jogos e projetos criativos",[["Cat-Coffee",2025,"Jogo multiplayer feito para estudar Python.",["Python"],"Cat Coffee"],["Piece-Naval",2024,"Batalha naval em Java com personagens de One Piece.",["Java"],"Piece Naval"],["MyMelody-Coffee",2024,"Cardápio de cafeteria em Java com tema My Melody.",["Java"],"My Melody Coffee"],["Kitty-Calculator",2024,"Calculadora de soma e subtração em Java com tema Hello Kitty.",["Java"],"Kitty Calculator"],["Bichinho-Virtual",2024,"Bichinho virtual em Java, do intensivo Santander Coders 2024, para praticar POO.",["Java"],"Bichinho Virtual"]]),
 ...mk("pes","Web e design",[["Amo-Travel-App",2024,"App de viagens criado no curso de UI/UX da Voitto, seguindo as especificações do cliente.",["UI/UX","Figma"],"Amo Travel App"],["Previs-o-IA",2024,"Site de previsão do tempo com a API do OpenWeather, com IA apoiando o desenvolvimento.",["JavaScript","API"],"Previsão do tempo"],["site-bio",2024,"Tela de login para um seminário de biomedicina.",["HTML","CSS"],"Site Bio"],["Calculadora-de-IMC",2024,"Primeiro projeto: calculadora de IMC para aprender programação e o VS Code.",["HTML","JavaScript"],"Calculadora de IMC"],["Diagramas-Mermaid",2024,"Estudo da linguagem Mermaid para diagramas e fluxogramas.",["Mermaid"],"Diagramas Mermaid"],["dio-lab-open-source",2024,"Lab da DIO sobre como contribuir com projetos open source.",["Git","Jupyter"],"DIO Lab Open Source"],["mariinetic",2024,"README de perfil personalizado do GitHub.",["Markdown"],"README de perfil"]]),
 ...mk("pes","Estudos de Java e lógica",[["Java-Exercises",2026,"Exercícios de lógica em Java com testes unitários.",["Java","JUnit"],"Java Exercises"],["projeto-junit",2026,"Projeto de testes com JUnit.",["Java","JUnit"],"Projeto JUnit"],["Registro-Alunos-Collection",2025,"Sistema para registrar alunos de uma turma e quatro notas ponderadas.",["Java"],"Registro de Alunos"],["AreaChecker",2025,"Cálculo de áreas de figuras geométricas com POO e polimorfismo.",["Java"],"Area Checker"],["java-practice",2025,"Exercícios resolvidos de conceitos fundamentais de Java.",["Java"],"Java Practice"],["projeto-baralho-array",2025,"Baralho com arrays: embaralhar, distribuir e imprimir.",["Java"],"Baralho com arrays"],["HelloWorld-Java",2024,"Primeiro teste no IntelliJ, na trilha Backend do Santander Coders 2024.",["Java"],"Hello World Java"],["Desafios-py",2024,"Desafios de programação em Python.",["Python"],"Desafios Python"]])
];
const ALL=[...API,...DISC,...PES];
const byId=Object.fromEntries(ALL.map(p=>[p.id,p]));
const CATS=[...new Set(PES.map(p=>p.c))];
