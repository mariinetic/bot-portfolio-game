/*
 * bot.js — as falas da Nébula e da Mari
 * Cada função de R é uma resposta. V(textoDaNebula, textoDaMari) escolhe a fala conforme quem está guiando; route() reconhece o que foi digitado.
 */

const R={
hello(){route_("sobre");say(V("Oi! Eu sou a <b>Nébula</b>!","Oi! Eu sou a <b>Mari</b>!"),V(`<p>Sou a gatinha-guia do portfólio da <b>Mari</b>. Vou te mostrar três anos da trajetória dela, de 2024 até hoje, com ${ALL.length} projetos.</p><p>Se preferir ouvir tudo da boca dela, é só trocar para a Mari lá em cima, quando quiser. E quem explorar tudo ganha o selo de <b>Super Fã</b> ★</p>`,`<p>Que bom te ver por aqui! Esse é o meu portfólio, e pra te guiar eu virei uma <b>fadinha</b>! A <b>Nébula</b>, minha gatinha-guia, também está por aqui. Vou te contar sobre os meus três anos de código, de 2024 até hoje, com ${ALL.length} projetos.</p><p>Se quiser que a Nébula te guie, é só trocar lá em cima, quando quiser. E quem explorar tudo ganha o selo de <b>Super Fã</b> ★</p>`)+chips([[V("Conhecer a Mari","Quem é você?"),"sobre"],["Projetos da Fatec","faculdade"],["Projetos pessoais","projetos pessoais"],["Tecnologias","tecnologias"]]))},
swap(){route_("sobre");say(V("Oi, voltei! Agora quem te guia sou <b>eu</b>.","Oi! Agora quem fala sou <b>eu</b>, a Mari."),V(`<p>A Mari vai descansar um pouquinho. Eu continuo te mostrando tudo sobre ela!</p>`,`<p>A Nébula me passou a palavra (e a varinha!). A partir de agora eu mesma te conto sobre os meus projetos.</p>`)+chips([[V("Sobre a Mari","Sobre mim"),"sobre"],["Projetos da Fatec","faculdade"],["Projetos pessoais","projetos pessoais"],["Tecnologias","tecnologias"]]))},
menu(){say("O que vamos explorar agora?",`<p>Pergunte pelo nome de um projeto, por uma tecnologia (tipo Vue ou Python), por um ano, ou escolha um caminho:</p>`+chips([[V("Sobre a Mari","Sobre mim"),"sobre"],["Faculdade","faculdade"],["Projetos pessoais","projetos pessoais"],["Tecnologias","tecnologias"],["Linha do tempo","linha do tempo"],["Contato","contato"]]))},
sobre(){route_("sobre");SEC.add("sobre");stats();say(V("Essa é a <b>Mari</b>!","Prazer, eu sou a <b>Mari</b>!"),V(`<p>Ela é estudante de <b>Banco de Dados na FATEC São José dos Campos</b>, com conclusão prevista para 2026, e trabalha como <b>Software Developer e Early-Career AI Engineer na Ericsson</b>, com Python, Java, IA, machine learning, automação com IA e LLMs.</p><p>Ela gosta de IA, desenvolvimento de software e dados. Na faculdade já foi dev, Product Owner e DevOps, e fora dela vive criando agentes de IA e projetos com gatinhos. Eu que o diga!</p>`,`<p>Sou estudante de <b>Banco de Dados na FATEC São José dos Campos</b>, com conclusão prevista para 2026, e trabalho como <b>Software Developer e Early-Career AI Engineer na Ericsson</b>, com Python, Java, IA, machine learning, automação com IA e LLMs.</p><p>Gosto de IA, desenvolvimento de software e dados. Na faculdade já fui dev, Product Owner e DevOps, e fora dela vivo criando agentes de IA e projetos com gatinhos.</p>`)+chips([["Linha do tempo","linha do tempo"],["Projetos da Fatec","faculdade"],["Contato","contato"]]))},
timeline(){route_("sobre");SEC.add("timeline");stats();say(V("A jornada da Mari em <b>três fases</b>!","Minha jornada em <b>três fases</b>!"),V(`<p><b>2024 · Fase 1:</b> os primeiros passos dela com HTML, JavaScript e Java, o intensivo Santander Coders, matemática discreta virando código, a Calculadora Científica e o Pacer.</p><p><b>2025 · Fase 2:</b> ela virou Product Owner e dev full-stack no Timesync e no CIMOB, mergulhou em Spring Boot e Vue e criou os primeiros agentes de IA com LangChain e LangGraph.</p>`,`<p><b>2024 · Fase 1:</b> meus primeiros passos com HTML, JavaScript e Java, o intensivo Santander Coders, matemática discreta virando código, a Calculadora Científica e o Pacer.</p><p><b>2025 · Fase 2:</b> virei Product Owner e dev full-stack no Timesync e no CIMOB, mergulhei em Spring Boot e Vue e criei meus primeiros agentes de IA com LangChain e LangGraph.</p>`)+`<p><b>2026 · Fase 3:</b> Data Warehouse e DevOps no SCARS, classificação de documentos no Akpedia, NoSQL com o Kitty Runner, visão computacional e machine learning.</p>`+chips([["Projetos de 2024","2024"],["Projetos de 2025","2025"],["Projetos de 2026","2026"]]))},
fatec(){route_("fatec");say("Chegamos na <b>Fatec</b>!",`<h3>Faculdade</h3><p>No curso de Banco de Dados, cada semestre tem um projeto integrador (a <b>API</b>) com uma empresa parceira. `+V(`A Mari foi <b>dev</b> no 1º e 2º semestres, <b>Product Owner</b> no 3º e 4º e <b>dev</b> de novo no 5º e 6º.`,`Eu fui <b>dev</b> no 1º e 2º semestres, <b>Product Owner</b> no 3º e 4º e <b>dev</b> de novo no 5º e 6º.`)+`</p><p>Além das APIs, tem os trabalhos de disciplina. Tudo isso está no <a href="https://github.com/mariinetic/portfolio-tgbd-fatec">Trabalho de Graduação</a>.</p>`+chips([["As 6 APIs","apis"],["Trabalhos de disciplina","disciplinas"]]))},
apis(){route_("fatec");say("As <b>6 APIs</b>, uma por semestre.",`<h3>Projetos integradores</h3><p>${V("Escolha um para ver o papel dela e as contribuições:","Escolha um para ver o meu papel e o que eu fiz:")}</p>`+cards(API)+chips([["Trabalhos de disciplina","disciplinas"]]))},
disc(){route_("fatec");say("Os trabalhos de <b>disciplina</b>.",`<h3>Disciplinas</h3>`+[...new Set(DISC.map(p=>p.c))].map(c=>`<p class="sec">${c}</p>`+cards(sortY(DISC.filter(p=>p.c===c)))).join(""))},
pes(){route_("pes");unlock("fora");say("Agora, fora da faculdade!",`<h3>Projetos pessoais</h3><p>${V(`São ${PES.length} projetos que ela fez por conta própria, em cursos e intensivos.`,`São ${PES.length} projetos que eu fiz por conta própria, em cursos e intensivos.`)} Escolha uma categoria:</p>`+chips(CATS.map(c=>[`${c} (${PES.filter(p=>p.c===c).length})`,"cat:"+c])))},
cat(c){route_("pes");unlock("fora");say(`Categoria: <b>${c}</b>`,`<h3>${c}</h3>`+cards(sortY(PES.filter(p=>p.c===c)))+chips(CATS.filter(x=>x!==c).map(x=>[x,"cat:"+x])))},
techs(){route_("tech");const n={};ALL.forEach(p=>p.t.forEach(t=>n[t]=(n[t]||0)+1));
 const G=[["Linguagens",["Python","Java","TypeScript","SQL"]],["Front-end",["Vue.js","Angular"]],["Back-end",["Spring Boot","Django","Flask"]],["Bancos de dados",["PostgreSQL","MySQL","Oracle","MongoDB"]],["IA",["LLM","LangChain","LangGraph"]],["DevOps",["Docker","GitHub Actions","Prometheus","Grafana"]]];
 say(V("A <b>stack principal</b> da Mari!","A minha <b>stack principal</b>!"),`<h3>Stack principal</h3><p>${V("Estas são as tecnologias que a Mari mais usa nos projetos, organizadas por área. Escolha uma para ver onde ela aplicou:","Estas são as tecnologias que eu mais uso nos projetos, organizadas por área. Escolha uma para ver onde eu apliquei:")}</p>`+G.map(([g,l])=>`<p class="sec">${g}</p>`+chips(l.filter(t=>n[t]).map(t=>[`${t} · ${n[t]} projeto${n[t]>1?"s":""}`,"tech:"+t]))).join(""))},
tech(t){route_("tech");unlock("stack");const l=sortY(ALL.filter(p=>p.t.includes(t)));say(`Projetos com <b>${t}</b>`,`<h3>${t}</h3><p>${l.length} projeto${l.length>1?"s":""} com ${t}:</p>`+cards(l))},
year(y){route_("tech");const l=ALL.filter(p=>p.y===y);say(`Tudo de <b>${y}</b>!`,`<h3>${y}</h3>`+["api","disc","pes"].map(g=>{const s=l.filter(p=>p.g===g);return s.length?`<p class="meta">${{api:"APIs",disc:"Disciplinas",pes:"Pessoais"}[g]}</p>`+cards(s):""}).join(""))},
contato(){route_("sobre");SEC.add("contato");unlock("net");stats();say(V("Vamos falar com a <b>Mari</b>?","Vamos <b>conversar</b>?"),`<p>${V("Ela vai adorar falar com você! É só chamar:","Vou adorar falar com você! Me chama por aqui:")}</p><p>E-mail: <b>marianaoliveiray21@gmail.com</b></p><p>LinkedIn: <a href="https://www.linkedin.com/in/oliveirasmari">linkedin.com/in/oliveirasmari</a></p><p>GitHub: <a href="https://github.com/mariinetic">github.com/mariinetic</a></p><div class="opts"><button class="btn btn-primary" id="copyMail">Copiar e-mail</button></div>`)},
project(p){route_(p.g==="pes"?"pes":"fatec");seen.add(p.id);stats();if(API.every(x=>seen.has(x.id)))unlock("fatec");if(seen.size>=10)unlock("explo");
 document.querySelectorAll(`[data-p="${p.id}"]`).forEach(b=>b.classList.add("seen"));
 const link=p.r?`<a href="https://github.com/mariinetic/${p.r}">Ver o repositório →</a>`:`<a href="https://github.com/mariinetic/portfolio-tgbd-fatec">Ver no Trabalho de Graduação →</a>`;
 const meta=[p.y,p.sem,p.co,p.role].filter(Boolean).join(" · ");const same=sortY(ALL.filter(x=>x.c===p.c&&x.id!==p.id)).slice(0,4);
 say(`<b>${p.n}</b>! ${p.d.split(/[,.]/)[0]}.`,`<h3>${p.n}</h3><p class="meta">${meta} · ${p.c}</p><p>${p.d}</p>`+(p.pts?`<p><b>${V("O que ela fez:","O que eu fiz:")}</b></p><ul>${p.pts.map(x=>`<li>${x}</li>`).join("")}</ul>`:"")+tags(p.t)+`<p>${link}</p>`+(same.length?`<p class="meta">Mais de ${p.c}:</p>`+cards(same):""))},
falta(){const miss=ALL.filter(p=>!seen.has(p.id)),secs=[["sobre",V("Sobre a Mari","Sobre mim")],["timeline","Linha do tempo"],["contato","Contato"]].filter(([k])=>!SEC.has(k));
 if(!miss.length&&!secs.length)return say("Você já é <b>Super Fã</b>!",`<p>Você já viu absolutamente tudo. Obrigada pela visita! ★</p>`);
 say(`Faltam <b>${miss.length+secs.length}</b> itens para o selo!`,`<h3>Rumo ao selo Super Fã</h3><p>Para ganhar o selo, veja todos os projetos e ${V("as seções sobre a Mari","as seções sobre mim")}.</p>`+(secs.length?`<p class="meta">Seções que faltam:</p>`+chips(secs.map(([k,l])=>[l,{sobre:"sobre",timeline:"linha do tempo",contato:"contato"}[k]])):"")+(miss.length?`<p class="meta">Projetos que faltam (${miss.length}):</p>`+cards(miss.slice(0,12))+(miss.length>12?`<p class="meta">...e mais ${miss.length-12}. Toque em "O que falta?" de novo depois.</p>`:""):""))},
greet(k){
 const G={
  hi:[V("Oi, oi! Que bom que você veio!","Oiê! Que bom te ver aqui!"),V("<p>Eu sou a Nébula, a gatinha-guia da Mari. Quer que eu te mostre o que ela já aprontou por aí?</p>","<p>Bem-vinda(o) ao meu cantinho no espaço! Quer ver meus projetos?</p>")],
  how:[V("Tô ótima! Acabei de tirar uma soneca numa nuvem.","Tô bem, e mais feliz ainda com a visita!"),V("<p>Vida de gatinha espacial é assim: soneca, estrelas e falar da Mari. E você, veio conhecer os projetos dela?</p>","<p>Entre a faculdade, a Ericsson e os projetos, tá corrido, mas tá bom! E você, quer ver no que eu ando trabalhando?</p>")],
  thanks:[V("Imagina! Miau de nada.","Eu que agradeço a visita!"),V("<p>Foi um prazer te guiar. Se quiser, ainda tem muita coisa pra ver!</p>","<p>De verdade, fico muito feliz que você passou por aqui.</p>")],
  bye:[V("Tchau, tchau! Volta logo, tá?","Tchau! Foi um prazer!"),V("<p>Vou ficar aqui flutuando, esperando você. Ah, e não esquece de dar um oi pra Mari!</p>","<p>Antes de ir, que tal me chamar pra conversar de verdade? Tô no LinkedIn!</p>")],
  who:[V("Eu sou a <b>Nébula</b>!","Eu sou a <b>Mari</b>!"),V("<p>Uma gatinha espacial, guia oficial deste portfólio e especialista em uma coisa só: a Mari. Ah, e em sonecas.</p>","<p>A dona deste portfólio, em versão fadinha pixel! Mas se quiser me conhecer de verdade, é só pedir.</p>")]
 }[k];
 say(G[0],G[1]+chips(k==="bye"?[["Contato","contato"],["Só mais um projeto","projetos pessoais"]]:[[V("Conhecer a Mari","Sobre mim"),"sobre"],["Projetos da Fatec","faculdade"],["Projetos pessoais","projetos pessoais"],["Tecnologias","tecnologias"]]))},
nope(q){
 const t=esc((q||"").slice(0,40));
 const J=V([
  ["Miau? Eu sou uma gatinha-guia, não um oráculo!",`<p>"${t}"? Isso aí eu deixo pros humanos. Eu só sei falar da Mari.</p>`],
  ["Erro 404: resposta não encontrada.",`<p>Procurei no meu cérebro felino inteirinho e só achei três coisas: projetos da Mari, sonecas e sachê.</p>`],
  ["Se eu soubesse isso, eu trabalhava na NASA!",`<p>Mas como sou só uma gatinha flutuando numa ilha, prefiro te mostrar o que a Mari construiu.</p>`],
  ["Ei, foco! Aqui é portfólio, não horóscopo.",`<p>Eu sei, eu sei, sou fofa e dá vontade de conversar sobre tudo. Mas meu trabalho é outro.</p>`],
  ["Hmm... isso não está em nenhum planeta que eu conheço.",`<p>Já viajei a galáxia toda e nunca vi "${t}" por lá. Que tal voltar pros projetos?</p>`],
  ["*finge que não ouviu e lambe a patinha*",`<p>Pronto, esqueci. Vamos falar de coisa boa: os projetos da Mari!</p>`]
 ],[
  ["SELECT resposta FROM minha_cabeca... 0 linhas retornadas.",`<p>Estudo Banco de Dados, mas o meu só tem uma tabela: meus projetos. "${t}" não tá nela!</p>`],
  ["Haha, boa tentativa!",`<p>Mas esse bot é roteirizado, viu? Sem IA, sem token e sem resposta pra isso. Só portfólio!</p>`],
  ["Essa pergunta não estava no backlog dessa sprint.",`<p>Como boa ex-Product Owner, vou priorizar o que importa: te mostrar meus projetos.</p>`],
  ["Eita, aí você me pegou!",`<p>Eu até queria responder "${t}", mas aqui eu só sei falar de mim mesma. Que egocêntrica, né?</p>`],
  ["NullPointerException: assunto não encontrado.",`<p>Meu código não tem tratamento pra isso. Mas tem pra Java, Vue, Python, IA...</p>`],
  ["Isso aí vai pra issue e fica no backlog pra sempre.",`<p>Brincadeira! É que aqui é só portfólio mesmo. Bora ver o que eu já fiz?</p>`]
 ]);
 let i;do{i=Math.floor(Math.random()*J.length)}while(J.length>1&&i===R._last);R._last=i;
 say(J[i][0],J[i][1]+`<p class="meta">Dica: pergunte o nome de um projeto, uma tecnologia (Java, Vue, MongoDB...) ou um ano (2024, 2025, 2026).</p>`+chips([["Projetos da Fatec","faculdade"],["Projetos pessoais","projetos pessoais"],["Tecnologias","tecnologias"],["Contato","contato"]]))}
};
const TAGS=[...new Set(ALL.flatMap(p=>p.t))];
const ALIAS={vue:"Vue.js",vuejs:"Vue.js",js:"JavaScript",ts:"TypeScript",spring:"Spring Boot",mongo:"MongoDB",postgres:"PostgreSQL",ml:"Machine learning","machine learning":"Machine learning"};
function route(raw){const q=raw.trim();if(!q)return;
 if(q.startsWith("cat:"))return R.cat(q.slice(4));if(q.startsWith("tech:"))return R.tech(q.slice(5));
 const t=norm(q);
 const hits=ALL.filter(p=>[norm(p.n),norm(p.r||""),norm(p.r||"").replace(/-/g," ")].filter(k=>k.length>=4).some(k=>t.includes(k)));
 if(hits.length===1)return R.project(hits[0]);if(hits.length>1)return say("Achei mais de um!",`<p>Qual destes?</p>`+cards(hits));
 if(has(t,["o que falta","falta","selo","super fa"]))return R.falta();
 if(/(quem (e|eh) (voce|vc)|qual (e )?(o )?seu nome|voce e (um )?(robo|bot|ia))/.test(t))return R.greet("who");
 if(has(t,["contato","email","e-mail","linkedin","contratar","falar com"]))return R.contato();
 if(has(t,["linha do tempo","trajetoria","timeline","evolucao"]))return R.timeline();
 if(has(t,["sobre","quem","ericsson","trabalho atual","experiencia","perfil"]))return R.sobre();
 if(has(t,["apis?","integrador","integradores","semestres?"]))return R.apis();
 if(has(t,["disciplinas?","materias?","aulas?"]))return R.disc();
 if(has(t,["faculdade","fatec","academicos?","tg"]))return R.fatec();
 if(has(t,["ia","agentes?","chatbots?","bots?","inteligencia artificial"]))return R.cat("IA e agentes");
 if(has(t,["dados","data science","visao computacional","ciencia de dados"]))return R.cat("Dados e machine learning");
 if(has(t,["jogos?","games?","criativos?"]))return R.cat("Jogos e projetos criativos");
 if(has(t,["web","design","sites?","ui","ux"]))return R.cat("Web e design");
 if(has(t,["estudos?","exercicios?","logica"]))return R.cat("Estudos de Java e lógica");
 if(has(t,["pessoais","pessoal","fora","extras?","hobbies?","proprios"]))return R.pes();
 if(has(t,["tecnologias?","stack","skills?","habilidades?","ferramentas?","linguagens?"]))return R.techs();
 for(const[k,v]of Object.entries(ALIAS))if(has(t,[k]))return R.tech(v);
 const tag=TAGS.find(x=>has(t,[norm(x).replace(/[.+]/g,"\\$&")]));if(tag)return R.tech(tag);
 const y=t.match(/20(24|25|26)/);if(y)return R.year(+y[0]);
 if(/(obrigad|brigad|valeu|vlw|agradec)/.test(t))return R.greet("thanks");
 if(/(tchau|ate (mais|logo|breve)|falou|flw|bye|adeus|fui$)/.test(t))return R.greet("bye");
 if(/(tudo (bem|bom|certo|joia|tranquilo)|como (vai|voce esta|vc ta|vc esta|voce ta|esta)|beleza\?|td bem)/.test(t))return R.greet("how");
 if(/^(oi+e*|ola+|hey|hi|hello|e ?ai|eai|salve|opa|alo|oie)\b/.test(t)||has(t,["bom dia","boa tarde","boa noite"]))return R.greet("hi");
 if(has(t,["menu","ajuda","inicio","comecar","voltar"]))return R.menu();
 R.nope(q)}
