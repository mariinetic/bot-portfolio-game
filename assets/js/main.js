/*
 * main.js — eventos e inicialização
 * Liga cliques, formulário, painéis e o seletor "Conversar com", e começa a conversa.
 */

function ask(text,label){unlock("first");add(label||text,true);route(text)}
document.addEventListener("click",e=>{
 const p=e.target.closest("[data-p]");if(p){const pr=byId[p.dataset.p];unlock("first");add(pr.n,true);R.project(pr);return}
 const c=e.target.closest("[data-q]");if(c){let l=c.dataset.l||(c.querySelector("b")||c).textContent.replace(/\s·\s\d+\sprojetos?(\s→)?$|\s\(\d+\)(\s→)?$|\s→$/,"");if(l===l.toUpperCase())l=l.charAt(0)+l.slice(1).toLowerCase();ask(c.dataset.q,l);return}
 if(e.target.id==="copyMail"||e.target.closest&&e.target.closest("#copyMail")){navigator.clipboard.writeText("marianaoliveiray21@gmail.com").then(()=>e.target.textContent="Copiado!").catch(()=>e.target.textContent="Selecione e copie")}
});
$("form").addEventListener("submit",e=>{e.preventDefault();const v=$("q").value;$("q").value="";if(v.trim())ask(v)});
$("fanClose").addEventListener("click",()=>$("fanOverlay").hidden=true);
$("fanContact").addEventListener("click",()=>{$("fanOverlay").hidden=true;ask("contato","Contato")});
addEventListener("keydown",e=>{if(e.key==="Escape")$("fanOverlay").hidden=true});
$("restart").addEventListener("click",()=>{$("hist").innerHTML="";R.hello()});
stats();R.hello();

document.querySelectorAll(".pick button").forEach(b=>b.addEventListener("click",()=>{const g=b.dataset.g;if(g===guide)return;guide=g;
 document.querySelectorAll(".pick button").forEach(x=>{const on=x.dataset.g===g;x.classList.toggle("on",on);x.setAttribute("aria-checked",String(on))});R.swap()}));
function toggle(btn,panel,other){const p=$(panel);p.hidden=!p.hidden;$(btn).setAttribute("aria-expanded",String(!p.hidden));$(other[1]).hidden=true;$(other[0]).setAttribute("aria-expanded","false")}
$("pill").addEventListener("click",()=>toggle("pill","panel",["histBtn","histPanel"]));
$("histBtn").addEventListener("click",()=>toggle("histBtn","histPanel",["pill","panel"]));
document.addEventListener("click",e=>{if(!e.target.closest(".panel,#pill,#histBtn")){["panel","histPanel"].forEach(id=>$(id).hidden=true);["pill","histBtn"].forEach(id=>$(id).setAttribute("aria-expanded","false"))}},true);
