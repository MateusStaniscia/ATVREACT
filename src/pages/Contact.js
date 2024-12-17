import React from "react";

const Contact = () => {
  return (
    <div id="conteudoContato">
      <h2>Entre em contato conosco</h2>
      <form id="formContato">
        <div className="campoFormulario">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="campoFormulario">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <div className="campoFormulario">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
