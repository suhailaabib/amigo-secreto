
let amigos= [];

    function adicionarAmigo() {
        let nomeInput = document.getElementById("amigo");
        let nome = nomeInput.value.trim();

        if(!nome) {
            alert ("Por favor, insira um amigo.");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        nomeInput.value = "";
        nomeInput.focus();
    }

    function atualizarLista() {
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Nenhum amigo cadastrado.");
            return;
        }

        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li> O amigo secreto sorteado é: ${sorteado}.</li>`;
    }


    let nomeInput = document.getElementById("amigo");
    nomeInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") adicionarAmigo();
    });