## NLW Copa
### Trilha Explorer

## Aula 01: Construindo as bases

<em>"Nossos primeiros passos! Nesta aula vamos conhecer as bases necessárias para dar os primeiros passos na prática em programação e dar início à estruturação de pastas e HTML do nosso projeto."</em>

### A) Boas vindas;

### B) O Projeto:

- Será desenvolvido um <strong>Calendário de Jogos</strong>;
- disponibilizados links do <a href="https://www.google.com/search?q=copa+do+mundo+calend%C3%A1rio+&hl=en&sxsrf=ALiCzsZoKWNkDcZB5r6yUZ_gOOckX6sfew%3A1666552817096&ei=8ZNVY5S4BZHM1sQPhYyY8AI&ved=0ahUKEwjU9KWFiff6AhURppUCHQUGBi4Q4dUDCA8&uact=5&oq=copa+do+mundo+calend%C3%A1rio+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOg0IABDkAhDWBBCwAxgBSgQITRgBSgQIQRgASgQIRhgBUKgDWKgDYIkGaAFwAXgAgAGhAYgBoQGSAQMwLjGYAQCgAQHIAQ3AAQHaAQYIARABGAk&sclient=gws-wiz#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;">Calendário do Google com os jogos</a>, bem como do <a href="https://www.figma.com/file/eV90XQCnjnBjZX66TaJ8lY/Calend%C3%A1rio-de-Jogos-(Community)?node-id=0%3A1">Figma</a>.

### C) Preparando o ambiente:

- utilizado VS Code;
- instalação de extensões (Live Server, Material Icon Theme, Omni Theme, Prettier);

### D) Introdução ao HTML:

- criado arquivo index.html, e iniciada sua estruturação básica.
- inserida imagem de logo a partir do Figma (Copy/Paste as... Copy as SVG -> criar um arquivo .svg e colar o código).

## Aula 02: Explorando o CSS

<em>"Chegou a hora de começar a estilizar nosso projeto! Vamos explorar o CSS (Cascading Style Sheets), implementar o estilo no nosso projeto e entender como funciona o Box Model."</em>

### A) Introdução ao CSS:

- "cascata" = quando há 2 (ou mais) declarações, a última será mais relevante.
- especificidade = cada seletor tem um peso:

  - id caracteriza um elemento único;
  - peso: id > classe > elemento.

- todos os elementos html serão considerados uma caixa (conteúdo, largura, altura, preenchimento, margem, bordas, espaçamento).

### B) Retomando o projeto:

- Configurando o VS Code:

  - criação da pasta .vscode;
  - criação do arquivo settings.json.

- Criando e configurando o arquivo style.css.

  - aplicação de fonte obtida no <a href="https://fonts.google.com/">Google Fonts</a>.

## Aula 03: Introdução ao JavaScript

<em>"Nessa aula vamos perder o medo de palavras como Algoritmo, Lógica de programação e Funções. Um spoiler, não tem nada de matemática aqui! Nós vamos descomplicar a programação e perder o medo de Javascript, entendendo o poder que ele dá para nossos projetos."</em>

### A) Fundamentos da Programação (descomplicando conceitos):

- programação = ensinar ao computador;
- algoritmo = sequência de passos, conjunto de regras;
- lógica de programação = maneira de pensar;
- sintaxe = maneira correta de escrever.

### B) Introdução ao Javascript:

- é uma linguagem de programação, interpretada e executada pelos navegadores;
- é a inteligência da tríade:

  - HTML é a estrutura;
  - CSS é a beleza;
  - JS é a inteligência.

- por que aprender JS?

  - apps para web, desktop (Elektron), mobile (React Native);
  - empresas famosas (Instagram, Google, Netflix, TikTok,...);
  - moderna e viva (comunidade e linguagem em crescimento).

- instruções e sintaxe:

  - instruções: ordens ao computador;
  - sintaxe: maneira correta de escrever.
  - lembrar que há algumas palavras reservadas da linguagem.

- executando JS:

  - diretamente no navegador, com ferramenta DevTools (apertando F12 no teclado);
  - plataformas online (como fronteditor.dev e codepen.io);
  - projeto local (arquivos no pc):
    - diretamente no arquivo .html: &lt;script&gt;alert('Olá')&lt;/script&gt;.
    - importa um arquivo .js no seu .html: &lt;script src="./script.js"&gt;&lt;/script&gt;.

### C) Variáveis e tipos de dados:

- variáveis são caixinhas em que guardamos tipos de dados que serão utilizados mais tarde;
  - palavra reservada <strong>"let"</strong> é usada para declarar a variável.
  - palavra reservada <strong>"const"</strong> é usadapara declarar constantes (não pode alterar o valor).
- tipos de dados: textos, numéricos, booleanos (lógicos = V ou F) ou dados mais estruturados.

### D) Funções:

- permite agrupamento e reuso de código;
- é um mini programa dentro do programa maior;
- toda linguagem oferece muitas opções.

### E) Objetos:

- tudo é objeto!
- objetos possuem atributos (propriedades) e métodos (funcionalidades).

### F) Retomando o projeto:

- criação do arquivo main.js.
- quando utilizamos ``, é possível fazer quebra de linha na string declarada no JS.

## Aula 04: Personalizando o projeto

<em>Vamos deixar nossa marca no projeto! Existem diversas maneiras de customizar e personalizar um projeto, nesta aula vamos usar animações, CSS variables e refactor.</em>

### A) Refactor:

- Mudar o código, sem mudar o comportamento final;
- Mais clareza e melhorias para o código.

### B) Animações e transições:

- Transition - no CSS;
- @keyframes (animações, act rule) - no CSS;
- Dynamic with JS - no arquivo main.js.

### C) Desktop Mode:

- @media.

### D) Custom colors:

- CSS variables (3 opções: null/vazio, green ou blue).