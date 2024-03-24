const key = "71a7e30e33fb6267ada044cf924ee94b";

function dadosNaTela(dados) {
  /* atualiza o site com o nome da cidade + dados de temperatura */
  document.querySelector("#local-busca").innerHTML = "Clima em " + dados.name;
  document.querySelector(".temperatura-valor").innerHTML =
    Math.floor(dados.main.temp) + "º";

  /* aatualiza a imagem e a descrição */
  document.querySelector(".icone-temp").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
  document.querySelector(".temp-desc").innerHTML = dados.weather[0].description;

  /* atualiza o card detalhes */
  document.querySelector(".temperatura-max").innerHTML =Math.floor(dados.main.temp_max) + "º";
  document.querySelector(".temperatura-min").innerHTML =Math.floor(dados.main.temp_min) + "º";
  document.querySelector(".sensacao").innerHTML =Math.floor(dados.main.feels_like) + "º";
  document.querySelector(".umidade").innerHTML = Math.floor(dados.main.humidity) + "%";
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  dadosNaTela(dados);
}

function searchClick() {
  const cidade = document.querySelector("#search-area").value;

  buscarCidade(cidade);
}
