/*
 * scene.js — o mundo da Nébula e da Mari
 * Desenha em <canvas> o céu, o planeta, as ilhas flutuantes e a personagem que está guiando, em pixel art.
 */

/* ---------- mundo ---------- */
const SKY={
 sobre:["#3a1450","#7a2f7e","#d65f9e","#ffb3cf"],
 fatec:["#2a1446","#5a2a78","#b04f9c","#f3a6d0"],
 pes:["#3b1648","#86386e","#e07aa8","#ffd3e2"],
 tech:["#401440","#8a2f6a","#e8709a","#ffc6c2"]};
const PLANET={sobre:["#ffe0ef","#ff5fa2"],fatec:["#f3dcff","#b46ad8"],pes:["#e0fff0","#6cc9a4"],tech:["#fff0d6","#ff8a8a"]};
const SPRITE=[".......y.......","......yyy......",".......y.......",".......o.......",".oo.........oo.",".opo.......opo.",".oppoooooooppo.",".owwwwwwwwwwwo.","owwwwwwwwwwwwwo","owweewwwwweewwo","owweewwwwweewwo","owpwwwwmwwwwpwo","owwwwwmwmwwwwwo",".owwwwwwwwwwwo.","..ogggggggggo..","..owwwwwwwwwo.o","..owwwwwwwwwoo.","..oowwo.owwoo..","...ooo...ooo..."];
const TALK=SPRITE.map((r,i)=>i===11?"owpwwwmmmwwwpwo":i===12?"owwwwwmpmwwwwwo":r);
const COL={o:"#4a1d4a",w:"#ffffff",p:"#ff8fc1",e:"#4a1d4a",m:"#4a1d4a",g:"#8fe3c0",y:"#ffe08a"};
const MARI=["....kkkkkkkk....","..kkhhhhhhhhkk..",".khhhhhhhhhhhck.","khhHhhhhhhhhccck","khHhhhhhhhhhhchk","khhhhsshhsshhhhk","khhhssssssssshhk","khhseessssseeshk","khhseEssssseEshk","khhbsssmmsssbhhk","khhhSsssssssShhk","khhhhkSSSSkhhhhk","khhhkwwddwwkhhhk",".khkddddddddkhk.","..ksddddddddsk..","..ksddyddyddsk..","..kkddddddddkk..",".kDDDDDDDDDDDDk.",".kkkkkkkkkkkkkk.","....kssk..kssk..","....kssk..kssk..","....kffk..kffk..","...kfffk..kfffk.","...kkkkk..kkkkk."];
const MARI_T=MARI.map((r,i)=>i===9?"khhbsssDDsssbhhk":r);
const MC={c:"#ff5fa2",k:"#4a1d4a",h:"#f3c55c",H:"#fff0b3",s:"#ffdcc8",S:"#f4b9a4",e:"#4a1d4a",E:"#ffffff",b:"#ff9cc7",m:"#c2456f",d:"#ff6fae",D:"#e0508f",w:"#ffffff",y:"#ffe08a",f:"#b0336f"};
const WING=["......kkk.","....kkwwwk","..kkwwppwk",".kwwpppwwk","kwwppppwk.","kwpppwwk..","kwwwwkk...","kwwkk.....","kwwwkk....","kwppwwk...",".kwppwk...",".kwwwk....","..kkk....."];
const WC={k:"#4a1d4a",w:"#fff7fd",p:"#ffc2e2"};
let dust=[];
let speaker="nebula";
const cv=document.getElementById("cv"),cx=cv.getContext("2d");
let W=0,H=0,T=0,blink=0,talk=0,sky=SKY.sobre,pl=PLANET.sobre,stars=[],motes=[],shoot=null,groundY=0;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const PX=()=>Math.max(3,Math.min(8,Math.round(H/72),Math.floor(W/56)));
function size(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
 let s=7;const rnd=()=>(s=(s*9301+49297)%233280)/233280;
 stars=Array.from({length:Math.round(W*H/5200)},()=>({x:rnd()*W,y:rnd()*H*.75,s:rnd()<.12?3:rnd()<.5?2:1,ph:rnd()*6,c:rnd()<.2?"#ffe08a":"#ffffff"}));
 motes=Array.from({length:18},()=>({x:Math.random()*W,y:Math.random()*H,v:.15+Math.random()*.3,ph:Math.random()*6}));
 layout();draw()}
let side=false;
function layout(){const dh=document.getElementById("dock").offsetHeight;const px=PX();groundY=H-dh-px*6;
 side=W/H>1.45&&H<640;document.getElementById("game").classList.toggle("side",side);
 document.getElementById("talk").style.setProperty("--bb",(side?dh+8:H-groundY+(speaker==="mari"?28:19)*px+40)+"px");if(typeof aimTail==="function")aimTail()}
const midX=()=>side?Math.max(W*.2,15*PX()):W/2;
const posX=w=>midX();
let poof=0;
const ell=(x,y,rx,ry,c)=>{cx.fillStyle=c;cx.beginPath();cx.ellipse(x,y,rx,ry,0,0,7);cx.fill()};
const blk=(x,y,w,h,c)=>{cx.fillStyle=c;cx.fillRect(Math.round(x),Math.round(y),Math.ceil(w),Math.ceil(h))};
function island(x,y,w,b,bob){y+=bob;const cols=Math.round(w/b);
 for(let i=0;i<cols;i++){const xx=x-w/2+i*b,edge=Math.min(i,cols-1-i),depth=Math.max(1,Math.round(edge*.75)+1);
  blk(xx,y,b,b,"#8fe3c0");blk(xx,y+b,b,b*.5,"#5fbf98");
  for(let k=1;k<=depth;k++)blk(xx,y+b*k+b*.5,b,b,k===1?"#b98aa8":k%2?"#94688d":"#a77a9c");
  if(i%5===2)blk(xx+b*.3,y-b*.6,b*.5,b*.6,"#ff9cc7");if(i%7===4)blk(xx+b*.2,y-b*.5,b*.5,b*.5,"#ffe08a")}}
function draw(){
 if(W<20||H<20)return;
 let g=cx.createLinearGradient(0,0,0,H);sky.forEach((c,i)=>g.addColorStop(i/(sky.length-1),c));cx.fillStyle=g;cx.fillRect(0,0,W,H);
 // nebulosa
 [[.22,.3,.34,"rgba(255,95,162,.22)"],[.75,.22,.28,"rgba(255,200,230,.14)"],[.55,.5,.42,"rgba(255,140,200,.16)"]].forEach(([a,b,r,c])=>{const n=cx.createRadialGradient(W*a,H*b,0,W*a,H*b,Math.max(W,H)*r);n.addColorStop(0,c);n.addColorStop(1,"rgba(0,0,0,0)");cx.fillStyle=n;cx.fillRect(0,0,W,H)});
 stars.forEach(s=>{const a=.35+.65*Math.abs(Math.sin(T*1.5+s.ph));cx.globalAlpha=a;blk(s.x,s.y,s.s,s.s,s.c);if(s.s===3){blk(s.x-2,s.y+1,7,1,s.c);blk(s.x+1,s.y-2,1,7,s.c)}});cx.globalAlpha=1;
 // planeta
 const px_=W<600?W*.82:W*.84,py=H*.2,pr=Math.max(26,Math.min(W,H)*.08);
 cx.strokeStyle="rgba(255,255,255,.55)";cx.lineWidth=Math.max(3,pr*.12);cx.beginPath();cx.ellipse(px_,py,pr*1.8,pr*.45,-.3,Math.PI,2*Math.PI);cx.stroke();
 const pg=cx.createRadialGradient(px_-pr*.35,py-pr*.35,pr*.1,px_,py,pr);pg.addColorStop(0,pl[0]);pg.addColorStop(1,pl[1]);ell(px_,py,pr,pr,pg);
 cx.beginPath();cx.ellipse(px_,py,pr*1.8,pr*.45,-.3,0,Math.PI);cx.stroke();
 ell(W*.12,H*.14,Math.max(8,pr*.3),Math.max(8,pr*.3),"rgba(255,250,255,.8)");
 // estrela cadente
 if(shoot){const t=shoot.t;cx.strokeStyle=`rgba(255,255,255,${1-t})`;cx.lineWidth=2;cx.beginPath();cx.moveTo(shoot.x+t*220,shoot.y+t*90);cx.lineTo(shoot.x+t*220-60,shoot.y+t*90-25);cx.stroke()}
 // ilhas ao fundo
 const b=PX(),bob=reduce?0:Math.sin(T*1.2)*3;
 cx.globalAlpha=.55;island(W*.16,groundY-H*.2,b*12,b*.7,-bob);island(W*.86,groundY-H*.08,b*10,b*.7,bob);cx.globalAlpha=1;
 // ilha principal
 const iw=Math.min(side?W*.4:W*.6,b*46);island(midX(),groundY,iw,b,0);
 // personagem: só quem está guiando aparece na ilha
 const hop=reduce?0:(Math.floor(T*1.6)%2)*b*.5,mouth=talk>0&&Math.floor(T*8)%2,x0=midX();
 ell(x0,groundY+b*.3,(speaker==="mari"?4:6)*b,(speaker==="mari"?.8:1.1)*b,"rgba(74,29,74,.22)");
 if(speaker==="nebula")(mouth?TALK:SPRITE).forEach((r,y)=>[...r].forEach((c,x)=>{if(!COL[c])return;let col=COL[c];if(blink>0&&c==="e"&&y===9)col=COL.w;blk(x0-7.5*b+x*b,groundY-19*b-hop+b*.2+y*b,b+.5,b+.5,col)}));
 else{ // Mari fadinha: flutua, bate as asas, segura a varinha e solta pozinho
  const fl=b*2.5+(reduce?0:Math.sin(T*2.2)*b*.7),mx0=x0-8*b,my0=groundY-24*b+b*.2-fl;
  const fx=(!reduce&&Math.floor(T*3.5)%2)?.78:1,w=b*1.3*fx,h=b*1.2;
  cx.globalAlpha=.95;
  WING.forEach((r,y)=>[...r].forEach((c,x)=>{if(!WC[c])return;blk(mx0+12.5*b+x*w,my0+3*b+y*h,w+.5,h+.5,WC[c]);blk(mx0+3.5*b-(x+1)*w,my0+3*b+y*h,w+.5,h+.5,WC[c])}));
  cx.globalAlpha=1;
  (mouth?MARI_T:MARI).forEach((r,y)=>[...r].forEach((c,x)=>{if(!MC[c])return;let col=MC[c];if(blink>3&&(c==="E"||c==="e")&&y===7)col=MC.s;if(blink>3&&c==="E")col=MC.e;blk(mx0+x*b,my0+y*b,b+.5,b+.5,col)}));
  [[14,14],[15,13],[16,12]].forEach(([x,y])=>blk(mx0+x*b,my0+y*b,b,b,"#b0336f"));
  const sx0=mx0+17*b,sy0=my0+10*b,tw=reduce?1:.65+.35*Math.abs(Math.sin(T*3));
  blk(sx0-b*1.5,sy0-b*.5,b*4,b*2,"#4a1d4a");blk(sx0-b*.5,sy0-b*1.5,b*2,b*4,"#4a1d4a");
  cx.globalAlpha=tw;blk(sx0-b,sy0,b*3,b,"#ffe08a");blk(sx0,sy0-b,b,b*3,"#ffe08a");blk(sx0,sy0,b,b,"#ffffff");cx.globalAlpha=1;
  if(!reduce&&Math.random()<(talk>0?.6:.2))dust.push({x:Math.random()<.5?mx0+17.5*b:mx0+8*b+(Math.random()-.5)*26*b,y:Math.random()<.5?my0+10.5*b:my0+(8+Math.random()*10)*b,v:.3+Math.random()*.5,l:60,c:["#ffe08a","#ffffff","#ff9cc7"][Math.random()*3|0]});
 }
 dust=dust.filter(d=>(d.l--,d.y+=d.v,d.x+=Math.sin(d.l/6)*.3,d.l>0));
 dust.forEach(d=>{cx.globalAlpha=d.l/60;blk(d.x,d.y,b*.6,b*.6,d.c)});cx.globalAlpha=1;
 // brilhos na troca de personagem
 if(poof>0){const k=1-poof/36;for(let i=0;i<10;i++){const a=i/10*6.283,r=b*(4+k*14),px=x0+Math.cos(a)*r,py=groundY-12*b+Math.sin(a)*r*.8;cx.globalAlpha=poof/36;blk(px-b*.5,py-b*1.5,b,b*3,i%2?"#ffe08a":"#ffffff");blk(px-b*1.5,py-b*.5,b*3,b,i%2?"#ffe08a":"#ffffff")}cx.globalAlpha=1}
 // vagalumes
 motes.forEach(m=>{const a=.3+.7*Math.abs(Math.sin(T*2+m.ph));ell(m.x,m.y,4,4,`rgba(255,224,138,${a*.25})`);blk(m.x-1,m.y-1,2,2,`rgba(255,240,190,${a})`)});
}
function step(){T+=1/60;if(blink>0)blink--;else if(Math.random()<.006)blink=8;if(talk>0)talk--;if(poof>0)poof--;
 motes.forEach(m=>{m.y-=m.v;m.x+=Math.sin(T+m.ph)*.3;if(m.y<-10){m.y=H;m.x=Math.random()*W}});
 if(shoot){shoot.t+=.025;if(shoot.t>1)shoot=null}else if(Math.random()<.004)shoot={x:Math.random()*W*.7,y:Math.random()*H*.3,t:0};
 draw();requestAnimationFrame(step)}
new ResizeObserver(size).observe(cv);
new ResizeObserver(()=>{layout();draw()}).observe(document.getElementById("dock"));
if(!reduce)requestAnimationFrame(step);
