// RECEBER DADOS DO FORMULÁRIO

const parametros = new URLSearchParams(window.location.search);

// CAPTURAR OS VALORES ENVIADOS PELO FORMULÁRIO

const nome = parametros.get("nome");
const email = parametros.get("email");
const plataforma = parametros.get("plataforma");
const genero = parametros.get("genero");

// LOCALIZAR OS ELEMENTOS DA PÁGINA

const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

// VERIFICAR SE OS DADOS FORAM RECEBIDOS

if (mensagem && resultado) {

    if (nome && email && plataforma && genero) {

        mensagem.textContent = `Olá, ${nome}! Confira suas preferências:`;

        resultado.textContent =
            `E-mail: ${email} | Plataforma: ${plataforma} | Gênero favorito: ${genero}`;

    } else {

        mensagem.textContent =
            "Nenhuma preferência foi recebida. Preencha o formulário primeiro.";

    }

}