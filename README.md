
# 📚 A Biblioteca da Meia-Noite — Website Interativo em JavaScript
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


Projeto educacional desenvolvido utilizando **HTML, CSS e JavaScript**, inspirado no livro **“A Biblioteca da Meia-Noite” de Matt Haig**.

O objetivo do projeto é criar uma **experiência interativa no navegador**, simulando uma biblioteca onde cada livro representa um capítulo da história. O usuário pode entrar na biblioteca, explorar os livros nas prateleiras e visualizar detalhes sobre cada capítulo.

---

# 🎯 Objetivo do Projeto

Este projeto tem como finalidade:

* Desenvolver um **site interativo utilizando JavaScript**
* Trabalhar com **manipulação do DOM**
* Utilizar **arrays para armazenar dados**
* Criar **interfaces dinâmicas**
* Implementar **eventos e animações**
* Aplicar **HTML, CSS e JavaScript de forma integrada**

Além disso, o projeto busca proporcionar uma **experiência visual inspirada no universo do livro**.

---

# 🧠 Conceitos de Programação Utilizados

Durante o desenvolvimento foram aplicados diversos conceitos importantes de programação:

### Estruturas utilizadas

* Arrays
* Objetos JavaScript
* Funções
* Loops
* Eventos
* Manipulação do DOM

### Recursos de Interface

* Canvas para animação
* Modal interativo
* Animações CSS
* Layout responsivo
* Elementos dinâmicos

---

# 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

* **HTML5** → Estrutura da página
* **CSS3** → Estilização e animações
* **JavaScript (Vanilla JS)** → Lógica e interatividade
* **Canvas API** → Animação de estrelas
* **Google Fonts** → Tipografia personalizada

Fontes utilizadas:

* Playfair Display
* Space Mono
* Lora

---

# 📂 Estrutura do Projeto

```
biblioteca-meia-noite/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### Descrição dos arquivos

| Arquivo    | Função                          |
| ---------- | ------------------------------- |
| index.html | Estrutura principal da página   |
| style.css  | Estilização, layout e animações |
| script.js  | Lógica e interatividade do site |

---

# 🖥️ Estrutura da Página (HTML)

A página possui três seções principais:

### Splash Screen (Tela inicial)

Apresenta:

* Nome da autora
* Título do livro
* Relógio em tempo real
* Botão para entrar na biblioteca

```html
<button id="btn-entrar">✦ Entrar na Biblioteca ✦</button>
```

Quando o usuário clica no botão, o sistema:

* executa animações
* remove a tela inicial
* abre a biblioteca interativa.



---

# 🌌 Animação de Estrelas (Canvas)

O fundo do site possui uma **animação de estrelas** criada com a **Canvas API**.

O JavaScript gera várias estrelas com posições aleatórias e cria um efeito de brilho.

```javascript
var stars = [];
```

Cada estrela possui propriedades como:

* posição X
* posição Y
* tamanho
* opacidade

Isso cria um **efeito visual de céu noturno animado**.



---

# 📚 Sistema de Capítulos

Os capítulos da história são armazenados em um **array de objetos**.

Cada objeto contém:

* número do capítulo
* título
* descrição
* citação

Exemplo:

```javascript
var capitulos = [
{
num:"I",
titulo:"19 Anos Atrás",
desc:"Nora recorda sua infância.",
citacao:"Cada peixe morto era uma decisão."
}
];
```

Esse array funciona como um **pequeno banco de dados do site**.



---

# 📖 Criação Dinâmica dos Livros

Os livros exibidos nas prateleiras são criados dinamicamente através do JavaScript.

Para cada capítulo do array, o programa cria um elemento HTML representando um livro.

```javascript
var livro = document.createElement("div");
```

Cada livro possui:

* cor aleatória
* altura diferente
* número do capítulo
* título na lombada

Ao clicar em um livro, abre-se uma janela com mais informações.



---

# 🪟 Sistema de Modal

Quando um livro é clicado, o sistema abre um **modal informativo** contendo:

* número do capítulo
* título
* descrição
* citação

```javascript
function abrirModal(i){
```

O modal pode ser fechado de três maneiras:

* clicando no botão **X**
* clicando fora da caixa
* pressionando **ESC**



---

# 📄 Animação de Páginas Voando

Quando o usuário entra na biblioteca, ocorre uma animação onde várias **páginas de livros voam pela tela**.

Cada página contém uma frase do livro.

Essa animação utiliza:

* elementos criados dinamicamente
* animações CSS
* propriedades aleatórias de movimento.



---

# 🎨 Estilização (CSS)

O design do projeto foi desenvolvido com foco em criar uma **atmosfera noturna e literária**.

Principais características:

* cores escuras
* tons de verde
* iluminação suave
* animações suaves
* layout inspirado em bibliotecas

Exemplo de cores utilizadas:

```css
--fundo: #080f0b;
--verde-escuro: #1a4a2e;
--verde-vivo: #4caf6e;
```



---

# 📱 Responsividade

O layout também foi adaptado para **dispositivos móveis**.

Quando a tela é pequena:

* as colunas se reorganizam
* o conteúdo fica vertical
* a navegação continua funcional.



---



# 📚 Aprendizados da Atividade

Durante o desenvolvimento desta atividade foram trabalhados conceitos importantes como:

* criação de interfaces interativas
* manipulação de elementos HTML com JavaScript
* uso de arrays para armazenar dados
* criação de animações visuais
* organização de código em arquivos separados
* desenvolvimento de interfaces responsivas

---

# 👩‍💻 Autora

**Paolla Paula Veronez**

Projeto desenvolvido para fins educacionais utilizando **HTML, CSS e JavaScript**.

---

