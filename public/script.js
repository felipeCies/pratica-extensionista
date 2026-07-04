document.addEventListener("DOMContentLoaded", () => {
  setUserName();
  setupLoginForm();
  setupFiltroCursos();
  setupBuscaAulas();
});

function setUserName() {
  const nameTitle = document.getElementsByClassName("profile-name").item(0);

  const user = JSON.parse(localStorage.getItem("user"));

  if (nameTitle) nameTitle.textContent = user.nome;
}

function setupLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msgErro = document.getElementById("msgErro");

    if (!email || !senha) {
      msgErro.textContent = "Por favor, preencha todos os campos.";
      return;
    }

    const response = await fetch(
      `https://laboratorio-maker-ruddy.vercel.app/api/users?email=${email}&senha=${senha}`
    );

    if (response.status !== 200) {
      const body = await response.json();

      msgErro.textContent = body.error;

      return;
    }

    const user = await response.json();

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "menu.html";
  });
}

function setupFiltroCursos() {
  const inputBusca = document.getElementById("buscaCursoIdeia");
  if (!inputBusca) return;

  inputBusca.addEventListener("input", () => {
    const filtro = inputBusca.value.toLowerCase();
    const cursos = document.querySelectorAll(".curso, .ideia");

    cursos.forEach((curso) => {
      const nome = curso.getAttribute("data-nome")?.toLowerCase() || "";
      const visivel = nome.includes(filtro);
      curso.style.display = visivel ? "block" : "none";
    });
  });
}

function setupBuscaAulas() {
  const btnAbrirBusca = document.getElementById("abrirBusca");
  const buscaWrapper = document.getElementById("buscaWrapper");
  const inputBusca = document.getElementById("buscaAula");

  if (!btnAbrirBusca || !inputBusca || !buscaWrapper) return;

  btnAbrirBusca.addEventListener("click", (e) => {
    e.stopPropagation();
    buscaWrapper.style.display = "block";
    inputBusca.focus();
  });

  document.addEventListener("click", (e) => {
    if (!buscaWrapper.contains(e.target) && e.target !== btnAbrirBusca) {
      buscaWrapper.style.display = "none";
    }
  });

  inputBusca.addEventListener("input", () => {
    const termo = inputBusca.value.toLowerCase();
    const aulas = document.querySelectorAll(".aula-item");

    aulas.forEach((aula) => {
      const nome = aula.textContent.toLowerCase();
      aula.style.display = nome.includes(termo) ? "block" : "none";
    });
  });
}


