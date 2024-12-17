import React from "react";

const Home = () => {
  return (
    <div id="conteudo">
      <h1 id="textoHome">Bem-vindo à Nossa Padaria!</h1>
      <div id="caixaTexto">
        <p>
          Na nossa padaria, cada dia começa cedo e com dedicação para trazer até
          você os sabores mais autênticos e frescos.
        </p>
        <p>
          Utilizamos ingredientes selecionados e receitas artesanais, honrando a
          tradição e o sabor caseiro.
        </p>
        <p>
          Nossa paixão é criar pães, bolos e doces que tornam o seu dia mais
          especial.
        </p>
        <p>
          Estamos sempre prontos para receber você em um ambiente acolhedor,
          onde o aroma de pão fresco e café quente é o convite perfeito.
        </p>
      </div>
      <img id="fotoPadaria" src="img/nossaPadaria.png" alt="Nossa Padaria" />
    </div>
  );
};

export default Home;
