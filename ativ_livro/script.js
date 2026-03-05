
      var capitulos = [
        { num: "I", titulo: "19 Anos Atrás", desc: "Nora recorda sua infância — os peixes que ela deixou morrer, as escolhas que moldaram sua vida.", citacao: "Cada peixe morto era uma decisão não tomada." },
        { num: "II", titulo: "A Noite mais Escura", desc: "Um dia de perdas se acumula: emprego, gato, amigo. Nora confronta o peso do arrependimento.", citacao: "O passado é o presente que ainda não terminou de doer." },
        { num: "III", titulo: "Escuridão", desc: "A decisão de Nora. O momento em que a vida e a morte se encontram no limiar da meia-noite.", citacao: "00:00. O único momento em que tudo é possível." },
        { num: "IV", titulo: "A Biblioteca", desc: "Nora desperta entre estantes infinitas. A Sra. Elm a recebe neste lugar entre todos os possíveis.", citacao: "Bem-vinda à Biblioteca da Meia-Noite." },
        { num: "V", titulo: "O Livro dos Arrependimentos", desc: "Um volume escrito com a tinta dos 'e se...'. Cada página, uma vida não vivida.", citacao: "O livro era pesado com todas as escolhas não feitas." },
        { num: "VI", titulo: "A Vida Glaciologista", desc: "Nora entra numa vida onde seguiu seu sonho científico. Gelo e silêncio na Groenlândia.", citacao: "Naquele silêncio ártico, ela era finalmente livre." },
        { num: "VII", titulo: "Cambridge", desc: "Uma vida de academia e filosofia pura. O que é uma vida bem vivida?", citacao: "A filosofia era a arte de fazer as perguntas certas." },
        { num: "VIII", titulo: "A Nadadora Olímpica", desc: "Com seu irmão como treinador, Nora conquista medalhas. O preço do sucesso é a conexão perdida.", citacao: "Ouro. Mas o pódio era um lugar solitário." },
        { num: "IX", titulo: "A Fazenda", desc: "Uma vida rural, longe do caos urbano. Simplicidade que esconde complexidades próprias.", citacao: "A terra não mente. Ela simplesmente é." },
        { num: "X", titulo: "Noite de Rock", desc: "O palco. A banda que ela deixou para trás. Uma plateia que nunca chegou a conhecê-la.", citacao: "A música era o idioma que ela esqueceu de falar." },
        { num: "XI", titulo: "A Vida Australiana", desc: "Um mergulho nas profundezas do oceano Índico. Outro sonho perseguido, outra solidão encontrada.", citacao: "No fundo do mar, a pressão era diferente, mas presente." },
        { num: "XII", titulo: "Casada com Dan", desc: "A vida que poderia ter sido. Um subúrbio tranquilo e os questionamentos que ele carrega.", citacao: "Felicidade é uma arte que precisa ser praticada." },
        { num: "XIII", titulo: "A Filosofia da Decepção", desc: "Nora aprende que as vidas que imaginou serem perfeitas guardam suas próprias sombras.", citacao: "A decepção é apenas expectativa mal direcionada." },
        { num: "XIV", titulo: "Vinhos e Vinhedos", desc: "Uma vida no coração da Toscana. Uvas, vinho, e a solidão elegante de quem está sempre de passagem.", citacao: "O vinho guarda a memória da terra." },
        { num: "XV", titulo: "A Celebridade", desc: "Fama, dinheiro, o mundo aos seus pés — e o vazio que nenhum holofote ilumina.", citacao: "Ser visto por todos e conhecido por ninguém." },
        { num: "XVI", titulo: "Regras da Biblioteca", desc: "A Sra. Elm explica: cada vida visitada consome o livro de arrependimentos. Nora deve escolher com sabedoria.", citacao: "Cada porta aberta fecha outra para sempre." },
        { num: "XVII", titulo: "A Veterinária", desc: "Nora cuida de animais. Encontra propósito nas criaturas que não julgam, que apenas precisam.", citacao: "Eles confiavam sem questionar. Que dádiva." },
        { num: "XVIII", titulo: "O Olimpo Não Dura", desc: "O pódio olímpico começa a rachar. A glória tem prazo de validade.", citacao: "Toda chama, eventualmente, consome a si mesma." },
        { num: "XIX", titulo: "A Vida Mais Improvável", desc: "Uma existência que Nora jamais teria imaginado. E ainda assim, há algo que ressoa como verdade.", citacao: "Às vezes a vida certa é a que menos esperamos." },
        { num: "XX", titulo: "Ash", desc: "Um relacionamento que ela abandonou. Ao revisitá-lo, Nora entende o que a conexão genuína significa.", citacao: "Amar é o ato mais corajoso." },
        { num: "XXI", titulo: "A Biblioteca Treme", desc: "Algo está errado. As prateleiras vibram. O livro de arrependimentos enfraquece.", citacao: "A eternidade, descobriu Nora, também tem seus limites." },
        { num: "XXII", titulo: "Vidas Paralelas", desc: "Nora observa versões de si mesma que nunca se conhecerão — e sente compaixão por quem ela é.", citacao: "Ser humano é ser múltiplo." },
        { num: "XXIII", titulo: "A Crise", desc: "Uma vida em colapso — não a de Nora, mas de alguém próximo que ela não soube ver.", citacao: "Às vezes salvamos os outros para nos salvar." },
        { num: "XXIV", titulo: "Gratidão Improvável", desc: "No meio do caos de múltiplas vidas, Nora encontra um momento de quietude e beleza inesperada.", citacao: "A gratidão não precisa de razão para existir." },
        { num: "XXV", titulo: "O Fim da Biblioteca?", desc: "As prateleiras começam a desaparecer. O tempo se esgota. Nora precisa tomar a decisão definitiva.", citacao: "Toda biblioteca tem seu horário de fechar." },
        { num: "XXVI", titulo: "A Chave", desc: "Nora descobre: não é a vida perfeita que ela busca, mas a vida autenticamente sua.", citacao: "A chave não abre uma porta — ela abre os olhos." },
        { num: "XXVII", titulo: "Caos e Clareza", desc: "As últimas vidas. As últimas chances. Cada escolha ilumina algo novo sobre quem Nora realmente é.", citacao: "No caos, há sempre um fio de clareza." },
        { num: "XXVIII", titulo: "O Momento Raiz", desc: "Nora retorna ao instante fundamental — a escolha original que ramificou todas as outras.", citacao: "Algumas decisões moldam todas as outras." },
        { num: "XXIX", titulo: "Ela Mesma", desc: "A revelação: a única vida que Nora nunca explorou completamente foi a sua própria.", citacao: "O lugar mais inexplorado do mundo é você mesmo." },
        { num: "XXX", titulo: "A Escolha Final", desc: "Com o livro quase vazio e a biblioteca a desaparecer, Nora faz a escolha que muda tudo.", citacao: "Querer viver é a forma mais pura de esperança." },
        { num: "XXXI", titulo: "O Despertar", desc: "Nora acorda. O mundo é o mesmo — e completamente diferente. Ela é a mesma — e completamente diferente.", citacao: "O sol nasceu. E ela estava lá para vê-lo." },
        { num: "XXXII", titulo: "Pequenas Maravilhas", desc: "Os detalhes ordinários da vida ganham uma luminosidade nova. O café. A rua. Um gato.", citacao: "Estar vivo é o milagre mais subestimado." },
        { num: "XXXIII", titulo: "Possibilidades Infinitas", desc: "A última página. Nora compreende que cada momento presente é uma biblioteca inteira de futuros possíveis.", citacao: "A vida, Nora percebeu, sempre valeu a pena." },
      ];

      var coresLivros = [
        { fundo: '#1a4a2e', texto: '#4caf6e' }, { fundo: '#2d7a4a', texto: '#7ecf96' },
        { fundo: '#0f2d1a', texto: '#3d8f5a' }, { fundo: '#1e5a36', texto: '#5abf7a' },
        { fundo: '#163d25', texto: '#4caf6e' }, { fundo: '#245e38', texto: '#6bc98a' },
        { fundo: '#0d2618', texto: '#2d7a4a' }, { fundo: '#2a6b40', texto: '#7ecf96' },
        { fundo: '#1a2e3a', texto: '#7eb8d4' }, { fundo: '#2a1a3a', texto: '#b09fd4' },
        { fundo: '#3a1a2a', texto: '#d4a0b8' }, { fundo: '#f0f7ee', texto: '#1a4a2e' },
      ];
      var larguras = [22, 26, 18, 30, 24, 20, 28, 16, 32, 22, 18, 26];
      var alturas = [110,140,120,130,100,145,115,135,108,125,138,118,122,112,142,128,105,132,118,145,108,125,115,138,120,130,112,140,122,108,135,118,128];

      function escurecerCor(hex) {
        var n = parseInt(hex.slice(1), 16);
        var r = Math.max(0, (n >> 16) - 18);
        var g = Math.max(0, ((n >> 8) & 0xff) - 18);
        var b = Math.max(0, (n & 0xff) - 18);
        return '#' + [r, g, b].map(function(c) { return c.toString(16).padStart(2, '0'); }).join('');
      }

      function criarEl(tag, cls, estilos, pai) {
        var el = document.createElement(tag);
        if (cls) el.className = cls;
        if (estilos) el.style.cssText = estilos;
        if (pai) pai.appendChild(el);
        return el;
      }

      // Estrelas
      (function () {
        var canvas = document.getElementById('estrelas');
        var ctx = canvas.getContext('2d');
        function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
        resize();
        addEventListener('resize', resize);
        var stars = [];
        for (var i = 0; i < 100; i++) {
          stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.2 + 0.2, vel: Math.random() * 0.006 + 0.002, fase: Math.random() * Math.PI * 2 });
        }
        (function loop(t) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          stars.forEach(function(s) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168,221,184,' + ((Math.sin(t * s.vel + s.fase) + 1) / 2 * 0.7 + 0.1) + ')';
            ctx.fill();
          });
          requestAnimationFrame(loop);
        })(0);
      })();

      // Livros decorativos
      (function () {
        var cores = ['#1a4a2e','#2d7a4a','#0f2d1a','#1e5a36','#163d25','#1a2e3a','#f0f7ee','#2a1a3a'];
        ['livros-topo', 'livros-base'].forEach(function(id) {
          var container = document.getElementById(id);
          var isTopo = id === 'livros-topo';
          for (var i = 0; i < 55; i++) {
            var w = 16 + ~~(Math.random() * 22), h = 70 + ~~(Math.random() * 80);
            var atraso = (Math.random() * 1.5).toFixed(2) + 's';
            criarEl('div', 'livro-deco',
              'width:' + w + 'px;height:' + h + 'px;background:' + cores[~~(Math.random() * cores.length)] + ';border-radius:' + (isTopo ? '0 0 2px 2px' : '2px 2px 0 0') + ';animation:' + (isTopo ? 'cai' : 'sobe') + ' 2s ease ' + atraso + ' forwards;transform:translateY(' + (isTopo ? '-100%' : '100%') + ')',
              container);
          }
        });
      })();

      // Relógio
      (function () {
        var s = 0;
        setInterval(function() {
          s = (s + 1) % 3600;
          document.getElementById('relogio').textContent = String(~~(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        }, 1000);
      })();

      // Transição
      function entrarNaBiblioteca() {
        var splash = document.getElementById('splash');
        var anim = document.getElementById('animacao-livro');
        splash.style.opacity = '0';
        setTimeout(function() {
          splash.style.display = 'none';
          anim.style.display = 'flex';
          setTimeout(function() {
            anim.style.transition = 'opacity 0.5s ease';
            anim.style.opacity = '0';
            setTimeout(function() { anim.style.display = 'none'; mostrarBiblioteca(); }, 500);
          }, 2200);
        }, 500);
      }

      function mostrarBiblioteca() {
        var bib = document.getElementById('biblioteca');
        bib.style.display = 'block';
        bib.style.overflowY = 'auto';
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
        criarPrateleiras();
        criarParticulas();
        setTimeout(function() { bib.style.opacity = '1'; }, 50);
      }

      function criarPrateleiras() {
        var container = document.getElementById('prateleiras');
        var dist = [6, 6, 6, 6, 6, 3];
        var nomes = ['I','II','III','IV','V','VI'];
        var idx = 0;
        dist.forEach(function(qtd, i) {
          var secao = criarEl('div', 'secao-prateleira', null, container);
          var rotulo = criarEl('div', 'rotulo-prateleira', null, secao);
          rotulo.textContent = 'Prateleira ' + nomes[i] + ' \u2014 Cap\u00EDtulos ' + (idx + 1) + '\u2013' + Math.min(idx + qtd, capitulos.length);
          var prat = criarEl('div', 'prateleira', null, secao);
          for (var j = 0; j < qtd && idx < capitulos.length; j++, idx++) {
            var cap = capitulos[idx], cor = coresLivros[idx % 12];
            var livro = criarEl('div', 'livro', 'width:' + larguras[idx % 12] + 'px;height:' + alturas[idx] + 'px', prat);
            livro.title = 'Cap. ' + cap.num + ': ' + cap.titulo;
            var interior = criarEl('div', 'livro-interior', 'background:linear-gradient(180deg,' + cor.fundo + ',' + escurecerCor(cor.fundo) + ')', livro);
            var num = criarEl('div', 'livro-num', 'color:' + cor.texto + '99', interior);
            num.textContent = cap.num;
            var tit = criarEl('div', 'livro-titulo-lombada', 'color:' + cor.texto + 'bb', interior);
            tit.textContent = cap.titulo;
            (function(capturedIdx, livroEl) {
              livroEl.onclick = function() { abrirModal(capturedIdx, livroEl); };
            })(idx, livro);
          }
          criarEl('div', 'tabua', null, secao);
        });
      }

      function criarParticulas() {
        var container = document.getElementById('particulas');
        for (var i = 0; i < 18; i++) {
          criarEl('div', 'particula', 'left:' + (Math.random()*100) + '%;bottom:' + (Math.random()*30) + '%;--dur:' + (4+Math.random()*8) + 's;--delay:' + (Math.random()*10) + 's', container);
        }
      }

      function abrirModal(idx, livroEl) {
        var cap = capitulos[idx];
        document.getElementById('modal-numero').textContent = 'Cap\u00EDtulo ' + cap.num;
        document.getElementById('modal-titulo').textContent = cap.titulo;
        document.getElementById('modal-descricao').textContent = cap.desc;
        document.getElementById('modal-citacao').textContent = '\u201C' + cap.citacao + '\u201D';
        document.querySelectorAll('.livro.selecionado').forEach(function(l) { l.classList.remove('selecionado'); });
        livroEl.classList.add('selecionado');
        document.getElementById('modal').classList.add('aberto');
      }

      function fecharModal(e, forcado) {
        var modal = document.getElementById('modal');
        if (forcado || (e && e.target === modal)) {
          modal.classList.remove('aberto');
          document.querySelectorAll('.livro.selecionado').forEach(function(l) { l.classList.remove('selecionado'); });
        }
      }
  
  