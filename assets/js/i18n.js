/*
 * i18n.js — idioma do portfólio (português e inglês)
 * L(textoEmPortugues, textoEmIngles) escolhe o texto conforme o idioma atual.
 * Os textos fixos da página ficam em UI; os elementos do index.html apontam para eles com data-i18n.
 * O idioma inicial vem de ?lang=en ou ?lang=pt na URL, depois da última escolha salva e, por fim, do idioma do navegador.
 */

let lang=(()=>{
 const u=new URLSearchParams(location.search).get("lang");if(u==="pt"||u==="en")return u;
 try{const s=localStorage.getItem("lang");if(s==="pt"||s==="en")return s}catch(e){}
 return /^pt/i.test(navigator.language||"pt")?"pt":"en";
})();
const L=(pt,en)=>lang==="en"?en:pt;

const UI={
 pt:{
  title:"Portfólio da Mariana",
  desc:"Portfólio interativo da Mariana Oliveira: converse com a Nébula ou com a Mari e conheça os projetos da Fatec e os projetos pessoais.",
  sub:" · PORTFÓLIO DA MARI",talkWith:"CONVERSAR COM",talkWithAria:"Conversar com",
  hist:" HISTÓRICO",fan:" SUPER FÃ",restart:"Recomeçar conversa",restartT:"Recomeçar",
  langBtn:"EN",langAria:"Switch to English",
  visit:"SUA VISITA",ach:"CONQUISTAS",seal:"SELO SUPER FÃ",
  sealHint:"Veja todos os projetos e as seções sobre a Mari para ganhar o selo.",
  missing:"O que falta?",missingL:"O que falta para o selo?",
  histTitle:"HISTÓRICO DA CONVERSA",shortcuts:"Atalhos",
  mAbout:"SOBRE",mFatec:"FATEC",mPes:"PESSOAIS",mStack:"STACK",mContact:"CONTATO",
  askLabel:"Pergunte à Nébula",ph:"Pergunte: Vue, 2025, Timesync...",send:"FALAR",
  sealBadge:"<b>★</b>SUPER<br>FÃ",fanTitle:"Você é Super Fã!",
  fanText:"Viu todos os projetos e tudo sobre a Mari. Ela vai adorar saber, que tal mandar um oi?",
  fanContact:"Falar com a Mari",fanClose:"Continuar"
 },
 en:{
  title:"Mariana's Portfolio",
  desc:"Mariana Oliveira's interactive portfolio: chat with Nébula or with Mari and explore her FATEC and personal projects.",
  sub:" · MARI'S PORTFOLIO",talkWith:"TALK TO",talkWithAria:"Talk to",
  hist:" HISTORY",fan:" SUPER FAN",restart:"Restart conversation",restartT:"Restart",
  langBtn:"PT",langAria:"Mudar para português",
  visit:"YOUR VISIT",ach:"ACHIEVEMENTS",seal:"SUPER FAN BADGE",
  sealHint:"See every project and all the sections about Mari to earn the badge.",
  missing:"What's left?",missingL:"What's left for the badge?",
  histTitle:"CONVERSATION HISTORY",shortcuts:"Shortcuts",
  mAbout:"ABOUT",mFatec:"FATEC",mPes:"PERSONAL",mStack:"STACK",mContact:"CONTACT",
  askLabel:"Ask Nébula",ph:"Ask: Vue, 2025, Timesync...",send:"SEND",
  sealBadge:"<b>★</b>SUPER<br>FAN",fanTitle:"You're a Super Fan!",
  fanText:"You've seen every project and everything about Mari. She'd love to know, why not say hi?",
  fanContact:"Talk to Mari",fanClose:"Keep exploring"
 }
};

function applyUI(){
 const t=UI[lang];
 document.documentElement.lang=L("pt-BR","en");document.title=t.title;
 const m=document.querySelector('meta[name="description"]');if(m)m.content=t.desc;
 document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t[el.dataset.i18n]);
 document.querySelectorAll("[data-i18n-html]").forEach(el=>el.innerHTML=t[el.dataset.i18nHtml]);
 // atributos: data-i18n-attr="placeholder:ph,aria-label:askLabel"
 document.querySelectorAll("[data-i18n-attr]").forEach(el=>el.dataset.i18nAttr.split(",").forEach(pair=>{const[a,k]=pair.split(":");el.setAttribute(a,t[k])}));
}
function setLang(l){
 if(l===lang)return;lang=l;
 try{localStorage.setItem("lang",l)}catch(e){}
 applyUI();
}
