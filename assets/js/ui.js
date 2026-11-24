/*
 * ui.js — estado e interface
 * XP, conquistas, selo Super Fã, histórico, troca de guia e a caixa de diálogo com efeito de digitação.
 */

/* ---------- estado ---------- */
const $=id=>document.getElementById(id);
const toast=$("toast");
const seen=new Set(),got=new Set(),SEC=new Set(),NEED=["sobre","timeline","contato"];
const ACH=[["first","Primeiro oi"],["fatec","Veterana Fatec"],["fora","Fora da caixa"],["stack","Caça-stacks"],["net","Networking"],["explo","Exploradora"],["superfa","SUPER FÃ"]];
let cur="sobre",lastQ=null;
function route_(k){if(k===cur)return;cur=k;sky=SKY[k];pl=PLANET[k];draw()}
const norm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const has=(t,w)=>w.some(x=>new RegExp("(^|[^a-z0-9])"+x+"($|[^a-z0-9])").test(t));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function stats(){
 const xp=seen.size*10+got.size*25;$("xpVal").textContent=xp;$("lv").textContent=1+Math.floor(xp/80);$("xpBar").style.width=(xp%80)/80*100+"%";
 $("achVal").textContent=got.size;
 $("achList").innerHTML=ACH.map(([k,n])=>`<li class="${got.has(k)?"on":""}">${got.has(k)?"★":"☆"} ${n}</li>`).join("");
 const done=seen.size+NEED.filter(k=>SEC.has(k)).length,tot=ALL.length+NEED.length,fp=Math.floor(done/tot*100);
 $("fanPct").textContent=$("pillPct").textContent=fp+"%";$("fanBar").style.width=fp+"%";
 if(API.every(x=>seen.has(x.id)))unlock("fatec");if(seen.size>=10)unlock("explo");
 if(done===tot&&!got.has("superfa"))setTimeout(()=>{unlock("superfa");$("fanOverlay").hidden=false;$("fanContact").focus()},900);
}
let tt;
function unlock(k){if(got.has(k))return;got.add(k);toast.textContent="★ CONQUISTA: "+ACH.find(a=>a[0]===k)[1];toast.hidden=false;clearTimeout(tt);tt=setTimeout(()=>toast.hidden=true,2400);stats()}
function add(label){lastQ=label}
const DEFAULT=()=>[[V("Sobre a Mari","Sobre mim"),"sobre"],["Projetos da Fatec","faculdade"],["Projetos pessoais","projetos pessoais"],["Stack","tecnologias"],["Contato","contato"]];
let typer,gen=0,guide="nebula";
const V=(n,m)=>guide==="mari"?m:n;
function aimTail(){const d=$("dlg"),c=cv.getBoundingClientRect(),r=d.getBoundingClientRect();if(!r.width)return;
 const x=c.left+posX(speaker)-r.left;d.style.setProperty("--tx",Math.max(34,Math.min(r.width-34,x))+"px")}
function say(line,html){
 const q=lastQ,my=++gen;lastQ=null;
 if(speaker!==guide)poof=reduce?0:36;speaker=guide;layout();draw();
 const tag=$("nameTag");tag.textContent=speaker==="mari"?"MARI":"NÉBULA";tag.classList.toggle("mari",speaker==="mari");aimTail();
 const li=document.createElement("li");li.innerHTML=(q?`<small>Você: ${esc(q)}</small>`:"")+`<b>${speaker==="mari"?"Mari":"Nébula"}:</b> `+line;$("hist").prepend(li);
 $("asked").innerHTML=q?`<span class="asked">VOCÊ: ${esc(q).toUpperCase()}</span>`:"";
 const body=$("body");body.hidden=true;body.innerHTML=html;const h3=body.querySelector("h3");if(h3&&body.firstElementChild===h3)h3.remove();
 const opts=[...body.querySelectorAll(".opts")],ch=$("choices");
 if(opts.length){ch.innerHTML="";opts.forEach(o=>{ch.append(...o.children);o.remove()})}else ch.innerHTML=DEFAULT().map(([l,v])=>`<button class="btn" data-q="${v}">${l}</button>`).join("");
 $("scroll").scrollTop=0;const d=$("dlg");d.style.animation="none";d.offsetHeight;d.style.animation="";
 const head=$("head"),plain=line.replace(/<[^>]+>/g,"");
 clearInterval(typer);
 const done=()=>{if(my!==gen)return;head.innerHTML=line;body.hidden=false;talk=0};
 if(reduce)return done();
 let i=0;talk=999;head.innerHTML='<span class="caret"></span>';
 typer=setInterval(()=>{if(my!==gen)return clearInterval(typer);i+=2;head.innerHTML=esc(plain.slice(0,i))+'<span class="caret"></span>';if(i>=plain.length){clearInterval(typer);setTimeout(done,120)}},28);
}
$("dlg").addEventListener("click",e=>{if(!e.target.closest("button,a")&&$("body").hidden){clearInterval(typer);$("head").innerHTML=$("head").textContent;gen++;$("body").hidden=false;talk=0}});
const chips=a=>`<div class="opts">${a.map(([l,q])=>`<button class="btn" data-q="${esc(q)}">${l}</button>`).join("")}</div>`;
const tags=t=>`<div class="tags">${t.map(x=>`<span class="tag">${x}</span>`).join("")}</div>`;
const cards=l=>`<div class="cards">${l.map(p=>`<button class="card${seen.has(p.id)?" seen":""}" data-p="${p.id}"><b>${p.n}</b><span>${p.y} · ${p.t.slice(0,2).join(", ")}</span></button>`).join("")}</div>`;
const sortY=l=>[...l].sort((a,b)=>b.y-a.y);
