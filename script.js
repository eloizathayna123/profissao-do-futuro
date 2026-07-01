function mensagem(){

    alert("Obrigado por visitar meu site sobre a profissão de Dentista! 🦷😁");

}

const botao = document.getElementById("tema");

botao.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        botao.innerHTML="☀️";

    }else{

        botao.innerHTML="🌙";

    }

});
