let form = document.querySelector(".wrapper");
let nome = document.querySelector(".inserir");
let mostraNomes = document.querySelector(".nomes");
let btn = document.querySelector(".enviar");
let resultadosDaBusca = document.querySelector(".resultados");
let mostraRes;
let reset;
let item;
let incluir;
let nomes = [];
let nomesRes = [];

function filtroNomes() {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].indexOf(nome.value) === 0) {
      nomesRes.push(nomes[i]);
    }
  }

  if (nomesRes.length !== 0) {
    resultadosDaBusca.textContent = `Há no nosso sistema ${nomesRes.length} ocorrências para essa entrada`;

    nome.disabled = true;
    btn.disabled = true;

    reset = document.createElement("button");
    reset.textContent = "Realizar nova busca";
    form.appendChild(reset);

    mostraRes = document.createElement("button");
    mostraRes.textContent = "Ver resultados";
    form.appendChild(mostraRes);

    reset.addEventListener("click", novabusca);

    mostraRes.addEventListener("click", nomesResultantes);
  } else {
    resultadosDaBusca.textContent = "Esse nome não consta em nossos registros";

    nome.disabled = true;
    btn.disabled = true;

    incluir = document.createElement("button");
    incluir.textContent = "Incluir nome nos registros";
    form.appendChild(incluir);

    reset = document.createElement("button");
    reset.textContent = "Realizar nova busca";
    form.appendChild(reset);

    incluir.addEventListener("click", incluirNome);

    reset.addEventListener("click", novabusca2);
  }
}
function novabusca() {
  nome.disabled = false;
  btn.disabled = false;
  resultadosDaBusca.textContent = "";
  mostraNomes.textContent = "";
  nome.value = "";
  nome.focus();
  nomesRes = [];

  reset.parentNode.removeChild(reset);
  mostraRes.parentNode.removeChild(mostraRes);
}
function novabusca2() {
  nome.disabled = false;
  btn.disabled = false;
  resultadosDaBusca.textContent = "";
  mostraNomes.textContent = "";
  nome.value = "";
  nome.focus();
  nomesRes = [];

  reset.parentNode.removeChild(reset);

  incluir.parentNode.removeChild(incluir);
}
function nomesResultantes() {
  mostraRes.disabled = true;
  for (let j = 0; j < nomesRes.length; j++) {
    item = document.createElement("li");
    item.appendChild(document.createTextNode(nomesRes[j]));
    mostraNomes.appendChild(item);
  }
}

function incluirNome() {
  incluir.disabled = true;
  nomes.push(nome.value);
}

btn.addEventListener("click", filtroNomes);
