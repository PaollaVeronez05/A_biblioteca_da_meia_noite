//  DADOS 
var capitulos = [
  { num:"I",    titulo:"19 Anos Atrás",            desc:"Nora recorda sua infância e as primeiras escolhas que moldaram quem ela se tornaria.",                  citacao:"Cada peixe morto era uma decisão." },
  { num:"II",   titulo:"A Noite mais Escura",       desc:"Um dia repleto de perdas que se acumulam até o limite do suportável.",                                  citacao:"O passado ainda dói." },
  { num:"III",  titulo:"Escuridão",                 desc:"Nora toma uma decisão irreversível e atravessa a fronteira entre o mundo dos vivos e algo mais.",       citacao:"00:00. Tudo é possível." },
  { num:"IV",   titulo:"A Biblioteca",              desc:"Nora se encontra numa biblioteca infinita suspensa entre a vida e a morte, guiada pela Sra. Elm.",      citacao:"Bem-vinda à Biblioteca da Meia-Noite." },
  { num:"V",    titulo:"Livro dos Arrependimentos", desc:"Um livro especial lista todas as escolhas que Nora lamenta — e cada uma abre a porta de outra vida.",   citacao:"Um livro pesado de possibilidades." },
  { num:"VI",   titulo:"Nova Vida",                 desc:"Nora começa a explorar vidas alternativas, descobrindo o que poderia ter sido se tivesse escolhido diferente.", citacao:"Cada escolha abre uma nova porta." },
  { num:"VII",  titulo:"Glaciologista",             desc:"Numa das vidas, Nora é cientista no Ártico, descobrindo que a solidão pode ser uma forma de liberdade.", citacao:"O gelo guarda memórias de milênios." },
  { num:"VIII", titulo:"Rockstar",                  desc:"Nora vive a fama que rejeitou — palcos, multidões e o vazio que nenhum aplauso consegue preencher.",    citacao:"O sucesso tem o sabor do que você abriu mão." },
  { num:"IX",   titulo:"O Peso do Possível",        desc:"Após tantas vidas exploradas, Nora começa a entender o verdadeiro significado de uma vida bem vivida.", citacao:"Não existe vida perfeita, apenas vida." },
  { num:"X",    titulo:"Querer Viver",              desc:"A decisão final de Nora — e a descoberta de que a vida que ela tinha valia mais do que imaginava.",     citacao:"Ela queria viver. Por fim, ela queria viver." }
];

var cores = ["#2a5c8a","#6b3a7d","#8a4a2a","#2a7a5a","#7a6a2a","#5a2a6a","#2a4a8a","#7a2a4a","#3a7a2a","#6a4a2a"];

//  RELÓGIO 
var seg = 0;
setInterval(function(){
  seg++;
  var el = document.getElementById("relogio");
  if(el) el.textContent = String(Math.floor(seg/60)).padStart(2,"0") + ":" + String(seg%60).padStart(2,"0");
}, 1000);

//  ESTRELAS 
var canvas = document.getElementById("estrelas");
var ctx = canvas.getContext("2d");
var stars = [];

function resizeCanvas(){ canvas.width = innerWidth; canvas.height = innerHeight; }
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for(var i = 0; i < 160; i++)
  stars.push({ x:Math.random()*innerWidth, y:Math.random()*innerHeight, r:Math.random()*.8+.2, a:Math.random(), da:(.002+Math.random()*.004)*(Math.random()<.5?1:-1) });

(function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(function(s){
    s.a += s.da;
    if(s.a>1||s.a<0) s.da *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = "rgba(168,221,184,"+s.a+")";
    ctx.fill();
  });
  requestAnimationFrame(draw);
})();

//  PÁGINAS VOANDO 
var frases = [
  "Entre a vida e a morte existe uma biblioteca.",
  "Cada escolha abre uma nova porta.",
  "Ela queria viver.",
  "O passado ainda dói.",
  "00:00. Tudo é possível.",
  "Cada peixe morto era uma decisão.",
  "Bem-vinda à Biblioteca da Meia-Noite.",
  "Não existe vida perfeita, apenas vida.",
  "Um livro pesado de possibilidades.",
  "O gelo guarda memórias de milênios.",
  "Nora. Nora Seed.",
  "A Sra. Elm sorriu.",
  "Qual vida você escolheria?",
  "Arrependimentos infinitos.",
  "O livro estava esperando por ela."
];

function lancarPaginas() {
  var overlay = document.getElementById("paginas-overlay");
  overlay.innerHTML = "";
  var total = 22;

  for (var i = 0; i < total; i++) {
    (function(i) {
      setTimeout(function() {
        var p = document.createElement("div");
        p.className = "pagina";

        // posição inicial: distribuída pela largura, começando no centro vertical
        var startX = 10 + Math.random() * 80; // % da tela
        var startY = 30 + Math.random() * 40;
        p.style.left = startX + "vw";
        p.style.top  = startY + "vh";

        // direção e rotação aleatórias
        var dx = (Math.random() - 0.5) * 160; // px horizontal
        var dy = -(80 + Math.random() * 220);  // sempre sobe
        var rot = (Math.random() - 0.5) * 540; // gira bastante
        var dur = 1.2 + Math.random() * 1.2;   // duração entre 1.2s e 2.4s

        p.style.setProperty("--dx", dx + "px");
        p.style.setProperty("--dy", dy + "px");
        p.style.setProperty("--rot", rot + "deg");
        p.style.animation = "pagina-voa " + dur + "s ease-out forwards";

        // frase aleatória dentro da página
        var frase = document.createElement("span");
        frase.className = "pagina-frase";
        frase.textContent = frases[Math.floor(Math.random() * frases.length)];
        p.appendChild(frase);

        overlay.appendChild(p);

        // remove do DOM após a animação terminar
        setTimeout(function(){ p.remove(); }, dur * 1000 + 100);
      }, i * 80); // cada página sai 80ms depois da anterior
    })(i);
  }
}

//  ENTRAR 
document.getElementById("btn-entrar").addEventListener("click", function(){
  var splash = document.getElementById("splash");
  var bib    = document.getElementById("biblioteca");

  lancarPaginas(); // 📄 páginas voam!

  splash.style.opacity = "0";
  splash.style.pointerEvents = "none";
  setTimeout(function(){
    splash.style.display = "none";
    bib.style.display = "flex";
    bib.style.opacity = "0";
    setTimeout(function(){ bib.style.transition = "opacity .8s"; bib.style.opacity = "1"; }, 20);
    criarLivros();
  }, 600);
});

// LIVROS 
function criarLivros(){
  var container = document.getElementById("prateleiras");
  container.innerHTML = "";
  var metade = Math.ceil(capitulos.length / 2);

  ["Primeira Parte","Segunda Parte"].forEach(function(nome, gi){
    var rotulo = document.createElement("p");
    rotulo.className = "rotulo-prateleira";
    rotulo.textContent = nome;
    container.appendChild(rotulo);

    var prat = document.createElement("div");
    prat.className = "prateleira";

    capitulos.slice(gi*metade, gi*metade+metade).forEach(function(cap, li){
      var idx = gi*metade + li;
      var livro = document.createElement("div");
      livro.className = "livro";
      livro.style.cssText = "background:"+cores[idx%cores.length]+";height:"+(110+Math.floor(Math.random()*50))+"px;";
      livro.innerHTML = '<div class="livro-interior"><span class="livro-num">'+cap.num+'</span><span class="livro-titulo-lombada">'+cap.titulo+'</span></div>';
      livro.onclick = function(){ abrirModal(idx); };
      prat.appendChild(livro);
    });

    container.appendChild(prat);
    var tabua = document.createElement("div");
    tabua.className = "tabua";
    container.appendChild(tabua);
  });
}

//  MODAL 
function abrirModal(i){
  var cap = capitulos[i];
  document.getElementById("modal-numero").textContent    = "Capítulo " + cap.num;
  document.getElementById("modal-titulo").textContent    = cap.titulo;
  document.getElementById("modal-descricao").textContent = cap.desc;
  document.getElementById("modal-citacao").textContent   = "\u201c" + cap.citacao + "\u201d";
  document.getElementById("modal").classList.add("aberto");
}

function fecharModal(){ document.getElementById("modal").classList.remove("aberto"); }

document.getElementById("modal-fechar").onclick = fecharModal;
document.getElementById("modal").onclick = function(e){ if(e.target===this) fecharModal(); };
document.addEventListener("keydown", function(e){ if(e.key==="Escape") fecharModal(); });

