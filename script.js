document.getElementById("loginForm").onsubmit = function (event) {
  event.preventDefault();

  var usuario = document.getElementById("usuario").value.trim();
  var senha = document.getElementById("senha").value.trim();
  var mensagem = document.getElementById("mensagem");

  if (usuario === "admin" && senha === "1234") {
    mensagem.style.color = "green";
    mensagem.textContent = "Login bem-sucedido!";
    setTimeout(function () {
      window.location.href = "dashboard.html"; // Redireciona para outra página
    }, 1000);
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "Usuário ou senha incorretos!";
  }
};
