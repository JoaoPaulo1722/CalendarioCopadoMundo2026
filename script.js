let jogos = [];

const areaTodosJogos = document.querySelector("#todos-jogos");
const areaJogosHoje = document.querySelector("#jogos-hoje");

const selecaofiltro = document.querySelector("#filtro-selecao");
const fasefiltro = document.querySelector("#filtro-fase");

const botaoLimparFiltros = document.querySelector("#limpar-filtros");

function mostrarJogos(listaDeJogos, area) {
  area.innerHTML = "";

  listaDeJogos.forEach(function (jogo) {
    area.innerHTML += `
      <article class="card-jogo">
        <span class="fase-jogo">${jogo.fase}</span>

        <h3>${jogo.selecaoA} x ${jogo.selecaoB}</h3>

        <p><strong>Grupo:</strong> ${jogo.grupo}</p>
        <p><strong>Data:</strong> ${jogo.data}</p>
        <p><strong>Horário:</strong> ${jogo.horario} - ${jogo.fusoHorario}</p>
        <p><strong>Estádio:</strong> ${jogo.estadio}</p>
        <p><strong>Cidade:</strong> ${jogo.cidade}</p>
      </article>
    `;
  });
}

function pegarDataHoje() {
  const hoje = new Date();
  const dataFormatada = hoje.toISOString().split("T")[0];
  return dataFormatada;
}

function mostrarJogosHoje() {
  const dataHoje = pegarDataHoje();

  const jogosDeHoje = jogos.filter(function (jogo) {
    return jogo.data === dataHoje;
  });

  if (jogosDeHoje.length === 0) {
    areaJogosHoje.innerHTML =
      "<p class='mensagem-vazia'>Não há jogos hoje.</p>";
    return;
  }

  mostrarJogos(jogosDeHoje, areaJogosHoje);
}

function filtrarJogos() {
  const selecaoSelecionada = selecaofiltro.value.toLowerCase();
  const faseSelecionada = fasefiltro.value;

  const jogosFiltrados = jogos.filter(function (jogo) {
    const correspondeSelecao =
      selecaoSelecionada === "" ||
      jogo.selecaoA.toLowerCase().includes(selecaoSelecionada) ||
      jogo.selecaoB.toLowerCase().includes(selecaoSelecionada);

    const correspondeFase =
      faseSelecionada === "" || jogo.fase === faseSelecionada;

    return correspondeSelecao && correspondeFase;
  });

  if (jogosFiltrados.length === 0) {
    areaTodosJogos.innerHTML =
      "<p class='mensagem-vazia'>Nenhum jogo encontrado com os filtros selecionados.</p>";
    return;
  }

  mostrarJogos(jogosFiltrados, areaTodosJogos);
}

function limparFiltros() {
  selecaofiltro.value = "";
  fasefiltro.value = "";

  mostrarJogos(jogos, areaTodosJogos);
}

async function buscarJogos() {
  areaTodosJogos.innerHTML =
    "<p class='mensagem-vazia'>Carregando jogos...</p>";

  areaJogosHoje.innerHTML =
    "<p class='mensagem-vazia'>Carregando jogos de hoje...</p>";

  try {
    const resposta = await fetch("./jogos.json");

    if (!resposta.ok) {
      throw new Error("Erro ao carregar o arquivo jogos.json");
    }

    const dados = await resposta.json();

    jogos = dados;

    mostrarJogos(jogos, areaTodosJogos);
    mostrarJogosHoje();
  } catch (erro) {
    areaTodosJogos.innerHTML =
      "<p class='mensagem-vazia'>Erro ao carregar os jogos.</p>";

    areaJogosHoje.innerHTML =
      "<p class='mensagem-vazia'>Não foi possível carregar os jogos de hoje.</p>";

    console.error("Erro ao buscar jogos:", erro);
  }
}

selecaofiltro.addEventListener("input", filtrarJogos);
fasefiltro.addEventListener("change", filtrarJogos);
botaoLimparFiltros.addEventListener("click", limparFiltros);

buscarJogos();
