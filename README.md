# Calendário da Copa do Mundo 2026

Projeto desenvolvido para praticar fundamentos de desenvolvimento web com **HTML, CSS e JavaScript puro**, utilizando uma base local em JSON com os jogos da Copa do Mundo FIFA 2026.

A aplicação permite visualizar os jogos da competição, destacar os jogos do dia, filtrar partidas por seleção ou fase e consultar informações como data, horário, estádio, cidade, grupo e fase.

## Objetivo do projeto

O objetivo principal deste projeto é reforçar conceitos fundamentais de front-end, especialmente:

- Estruturação semântica com HTML;
- Estilização responsiva com CSS;
- Manipulação do DOM com JavaScript;
- Uso de arrays e objetos;
- Renderização dinâmica de cards;
- Filtros com `filter()`;
- Eventos com `addEventListener()`;
- Consumo de arquivo JSON com `fetch()`;
- Uso de `async/await`;
- Tratamento de erros com `try/catch`;
- Organização de dados em arquivo externo.

## Funcionalidades

- Listagem dos jogos da Copa do Mundo 2026;
- Seção de "Jogos de hoje";
- Filtro por seleção;
- Filtro por fase da competição;
- Botão para limpar filtros;
- Mensagem quando nenhum jogo é encontrado;
- Mensagem de carregamento dos dados;
- Tratamento de erro caso o JSON não seja carregado;
- Horários exibidos no horário de Brasília;
- Layout responsivo;
- Paleta visual inspirada nas cores da Copa do Mundo 2026.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub

## Estrutura do projeto

```txt
CalendarioCopadoMundo2026/
│
├── index.html
├── style.css
├── script.js
├── jogos.json
└── README.md
```

## Como funciona

Os dados dos jogos ficam armazenados no arquivo `jogos.json`.

O JavaScript busca esses dados utilizando `fetch()`:

```js
async function buscarJogos() {
  try {
    const resposta = await fetch("./jogos.json");
    const dados = await resposta.json();

    jogos = dados;

    mostrarJogos(jogos, areaTodosJogos);
    mostrarJogosHoje();
  } catch (erro) {
    console.error("Erro ao buscar jogos:", erro);
  }
}
```

Depois que os dados são carregados, a aplicação renderiza os cards dinamicamente na tela.

## Observação sobre os dados

Este projeto utiliza uma base local em JSON.

Isso significa que os dados **não são atualizados automaticamente em tempo real**. Informações como placar, status da partida, alterações de horário ou mudanças de estádio precisam ser atualizadas manualmente no arquivo `jogos.json`.

A estrutura do projeto foi pensada para permitir uma futura integração com API real ou backend.

## Próximas melhorias

Algumas melhorias possíveis para versões futuras:

- Exibir placar e status das partidas nos cards;
- Criar filtro por grupo;
- Criar filtro por status: agendado, ao vivo ou encerrado;
- Adicionar seção de próximos jogos;
- Melhorar exibição de jogos encerrados;
- Criar deploy com GitHub Pages;
- Integrar com uma API real;
- Criar backend ou proxy para evitar problemas de CORS;
- Adicionar README com imagens da interface.

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de JavaScript, como:

- `querySelector`;
- `innerHTML`;
- Template strings;
- `forEach()`;
- `filter()`;
- `includes()`;
- `toLowerCase()`;
- `Date`;
- `fetch()`;
- `async/await`;
- `try/catch`;
- Manipulação de dados vindos de JSON externo.

## Status do projeto

Versão atual: **v1.0**

O projeto está funcional como calendário local da Copa do Mundo 2026, com dados estruturados em JSON e horários adaptados para o horário de Brasília.
