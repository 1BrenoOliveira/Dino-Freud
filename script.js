const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cronometro = document.getElementById("cronometro");
const qtdPerguntas = 12;//numero de possiveis perguntas do sistema
var check = true;
var tempo = 10, fase = 0;
var Exibidos = [];
var opc, resposta, message = "FREUD:\n'ACEITOU A MORTE?...' \n\nVamos Reiniciar?";

respCerta = atualizarPerguntas();

function jump() {

    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 3000);
    }
}

let isAlive = setInterval(function () {


    //get current dino Y posistion
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //get current cactur X posistion
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


    //detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        var r = confirm(message);
        if (r == true) {
            location.reload();
        }
        else {
            window.close();
        }


    }
}, 10)

let t = setInterval(function () {
    cronometro.innerHTML = (tempo - 2);
    tempo--;
    if (tempo <= 1) {
        ApresentarCorrecao();
        desabilitarButton();
    }
    if (tempo <= 0 && resposta == respCerta) {
        if (fase < 10) {
            jump();
            tempo = 12;
            respCerta = atualizarPerguntas();
            resposta = "";
        }
        //confitnuar pulando sem morrer
        //jump(); jump(); jump();
        else if (fase == 14) {//acrescentar 3 loop para novo layout sair no começo 
            layoutFinal();
        }
        else {
            jump();
            fase++;
        }
    }
}, 1000);



//pra pular apertando teclas
//document.addEventListener("keydown", function (event) { jump() });

function RespostButton(respost) {
    resposta = respost;
    BottonAlterColor(respost);
}

function BottonAlterColor(respost) {
    if (respost == "A") {
        document.getElementById("buttonA").style.color = "yellow";
        document.getElementById("buttonB").style.color = "#fff";
        document.getElementById("buttonC").style.color = "#fff";
    }
    else if (respost == "B") {
        document.getElementById("buttonA").style.color = "#fff";
        document.getElementById("buttonB").style.color = "yellow";
        document.getElementById("buttonC").style.color = "#fff";
    }
    else if (respost == "C") {
        document.getElementById("buttonA").style.color = "#fff";
        document.getElementById("buttonB").style.color = "#fff";
        document.getElementById("buttonC").style.color = "yellow";
    } else {
        document.getElementById("buttonA").style.color = "#fff";
        document.getElementById("buttonB").style.color = "#fff";
        document.getElementById("buttonC").style.color = "#fff";
    }
}
function ApresentarCorrecao() {

    if (respCerta == "A") document.getElementById("buttonA").style.color = "green";
    else if (respCerta == "B") document.getElementById("buttonB").style.color = "green";
    else if (respCerta == "C") document.getElementById("buttonC").style.color = "green";

    if (resposta != respCerta) {
        if (resposta == "A") document.getElementById("buttonA").style.color = "red";
        else if (resposta == "B") document.getElementById("buttonB").style.color = "red";
        else if (resposta == "C") document.getElementById("buttonC").style.color = "red";
    }

}
function desabilitarButton() {
    document.getElementById("buttonA").disabled = true;
    document.getElementById("buttonB").disabled = true;
    document.getElementById("buttonC").disabled = true;
}
function habilitarButton() {
    document.getElementById("buttonA").disabled = false;
    document.getElementById("buttonB").disabled = false;
    document.getElementById("buttonC").disabled = false;
}
function atualizarPerguntas() {
    opc = Math.floor(Math.random() * qtdPerguntas) + 1;
    while (Exibidos.indexOf(opc) != -1) {
        opc = Math.floor(Math.random() * qtdPerguntas) + 1;//
    }
    Exibidos.push(opc);
    return atualizaHTML(opc);
}
function layoutFinal() {
    document.getElementById("cactus").style.backgroundImage = "url(img/fim.png)";
    document.getElementById("cactus").style.backgroundSize = "130px 160px";
    document.getElementById("cactus").style.width = "130px";
    document.getElementById("cactus").style.height = "160px";
    document.getElementById("cactus").style.top = "-10px";
    message = "Parabens\nVocê chegou ao Fim\n\n\nFREUD:'De Erro em Erro, vai-se descobrindo toda a Verdade...'";
}




function atualizaHTML(opc) {
    fase++;
    var pergunta, a, b, c, correta;
    switch (opc) {
        case 1:
            {
                pergunta = "Onde se inicia a psicologia quanto ciência ?";
                a = "Alemanha";
                b = "Estados Unidos";
                c = "Rússia";
                correta = "A";
                break;
            }
        case 2:
            {
                pergunta = "Id, ego e super ego, são categorias de...";
                a = "Whilliam Whundt";
                b = "Sigmund Freud";
                c = "Melanie Klein";
                correta = "B";
                break;
            }
        case 3:
            {
                pergunta = " Qual é o nome do metodo que consiste numa abordagem para ensinar e aprender, no qual a criança tem papel central e ativo na construção do conhecimento?";
                a = "Behaviorismos";
                b = "Construtivismo";
                c = "Gestalt";
                correta = "B";
                break;
            }
        case 4:
            {
                pergunta = "Quais são os 3 pilares da personalidade segundo Freud?"
                a = "Id, Ego, inconsciente";
                b = "Pre consciente, consciente e id";
                c = "Id, Ego e superego";
                correta = "C";
                break;
            }
        case 5:
            {
                pergunta = "De acordo com Freud, qual desses forma nossa personalidade?";
                a = "Inconsciente ";
                b = "Pré consciente";
                c = "Consciente";
                correta = "A";
                break;
            }
        case 6:
            {
                pergunta = "Quais as 5 fases do desenvolvimento psicossexual segundo Freud, respectivamente?";
                a = "Oral, Anal,genital, latente, fálica";
                b = "Oral, genital, falica, latente e fálica";
                c = "Oral, Anal, fálica, Latente e genital";
                correta = "C";
                break;
            }
        case 7:
            {
                pergunta = "Ela é individual, mas existe dentro de todos nós, através dela interpretamos o mundo ao nosso redor. Estou falando da?";
                a = "Subjetividade";
                b = "Interpretação";
                c = "Percepção";
                correta = "A";
                break;
            }
        case 8:
            {
                pergunta = "Este tipo de conhecimento é sistemático, rigoroso e abstrato, não se comprova de maneira experimental.";
                a = "Sociologico";
                b = "Filosófico";
                c = "Senso comum";
                correta = "B"
                break;
            }
        case 9:
            {
                pergunta = " O binômio 'estimulo'- resposta está relacionado á:"
                a = "Construtivismo";
                b = "Psicanalista";
                c = "Behaviorismo";
                correta = "C"
                break;
            }
        case 10:
            {
                pergunta = "Sabemos que Freud desenvolveu grandes estudos, entre eles o consciente, pré consciente e inconsciente. Qual desses foi o mais abordado e mais complexo?";
                a = "Pré consciente";
                b = "Inconsciente";
                c = "Consciente";
                correta = "B";
                break;
            }
        case 11:
            {
                pergunta = "Campo clínico de investigação teórica da psique humana independente da psicologia, desenvolvido por Sigmund Freud";
                a = "Psicologia organizacional";
                b = "Psicologia Criminal";
                c = "Psicanalise";
                correta = "C";
                break;
            }
        case 12:
            {
                pergunta = "Refere-se à forma de algo. Ela sugere que o todo é maior que a soma de suas partes. Há uma ênfase na percepção nesta teoria particular de psicoterapia";
                a = "Gestalt";
                b = "Behaviorimo";
                c = "Freudiano";
                correta = "A";
                break;
            }
        case 13:
            {
                pergunta = "Na teoria gestalt existe um conjunto de 8 leis. Uma delas recebe o nome de lei da simplicidade e boa forma. A qual lei se refere?";
                a = "Lei da Unidade";
                b = "Lei da unificação";
                c = "Lei da pregnância";
                correta = "C";
                break;
            }


    }
    BottonAlterColor(null);
    habilitarButton();
    document.getElementById("fase").innerHTML = ": " + fase;
    document.getElementById("numQuestao").innerHTML = fase;
    document.getElementById("pergunta").innerHTML = " - " + pergunta;
    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;
    return correta;
}


