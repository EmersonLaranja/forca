let listaDePalavras = [
  "exceto",
  "cínico",
  "idôneo",
  "âmbito",
  "néscio",
  "mister",
  "índole",
  "vereda",
  "apogeu",
  "inócuo",
  "convém",
  "utopia",
  "sádico",
  "ênfase",
  "escopo",
  "mérito",
  "alusão",
  "casual",
  "anseio",
  "idiota",
  "hostil",
  "pressa",
  "alheio",
  "cético",
  "hétero",
  "legado",
  "nocivo",
  "infame",
  "gentil",
  "clichê",
  "exímio",
  "afável",
  "adorno",
  "paixão",
  "dádiva",
  "adesão",
  "sóbrio",
  "aferir",
  "êxtase",
  "astuto",
  "safado",
  "otário",
  "larica",
  "solene",
  "limiar",
  "sessão",
  "formal",
  "julgar",
  "também",
  "apreço",
  "hábito",
  "ensejo",
  "lábaro",
  "ocioso",
  "eficaz",
  "glória",
  "difuso",
  "outrem",
  "ímpeto",
  "júbilo",
  "embora",
  "alento",
  "dispor",
  "facção",
  "escusa",
  "perene",
  "exílio",
  "cessão",
  "abster",
  "lúdico",
  "nuance",
  "alçada",
  "ilação",
  "acento",
  "isento",
  "objeto",
  "sanção",
  "acesso",
  "etéreo",
  "tácito",
  "axioma",
  "cortês",
  "cobiça",
  "sisudo",
  "desejo",
  "mazela",
  "eximir",
  "receio",
  "buscar",
  "remoto",
  "vulgar",
  "avidez",
  "fático",
  "asseio",
  "ciente",
  "prazer",
  "cômico",
  "adágio",
  "insano",
];

// GLOBAIS
const palavraChave =
  listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)];

const limiteContador = 5;

let contadorErros = 0;

window.onload = () => {
  console.log(palavraChave);
  let span = document.getElementById("palavra-chave");

  for (let i = 0; i < palavraChave.length; i++) {
    let novoSpan = document.createElement("span");
    novoSpan.id = i;
    let text = document.createTextNode("_ ");
    novoSpan.appendChild(text);
    span.appendChild(novoSpan);
  }

  const input = document.getElementById("input-letra");
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      letraEscolhida();
    }
  });

  let PainelErros = document.getElementById("painel-erro");
  PainelErros.innerHTML = `Quantidade de erros: ${contadorErros}/${limiteContador}`;
};

function letraEscolhida() {
  let DivletraEscolhida = document.getElementById("input-letra");
  let letraEscolhida = DivletraEscolhida.value.toLowerCase();

  if (palavraChave.includes(letraEscolhida)) {
    let span = document.getElementById("palavra-chave");

    for (let i = 0; i < palavraChave.length; i++) {
      if (letraEscolhida == palavraChave.charAt(i)) {
        span.children[i].innerHTML = letraEscolhida;
      }
    }
  } else {
    let divLetrasInvalidas = document.getElementById("letras-invalidas");

    let novaLetra = document.createElement("span");

    let text = document.createTextNode(letraEscolhida + " ");
    novaLetra.appendChild(text);

    divLetrasInvalidas.appendChild(novaLetra);
    contadorErros++;
  }

  DivletraEscolhida.value = "";
  DivletraEscolhida.focus();
  let PainelErros = document.getElementById("painel-erro");
  PainelErros.innerHTML = `Quantidade de erros: ${contadorErros}/${limiteContador}`;
  if (contadorErros == limiteContador) {
    alert("PERDEU! Clique aqui para começar uma nova partida");
    document.location.reload();
  }
}
