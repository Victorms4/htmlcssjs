function dados(){
    document.getElementById('amostra').innerHTML="<h1>Nome</h1><br><p>Victor Marques de Souza</p><br><h1>Idade</h1><br><p>19</p><br><h1>Estado Civil</h1><br><p>Solteiro</p><br><h1>Endereço</h1><br><p>Rua Ângelo Gaiga, 171</p>";
    document.getElementById('amostra').style.fontFamily="Verdana";
}

function exp(){
    document.getElementById('amostra').innerHTML="<h1>Empresas</h1><br><p>WJR Produções</p><br><h1>Outros</h1><br><p>Tiro de Guerra 04-021</p>";
    document.getElementById('amostra').style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;";
}

function formacoes(){
    document.getElementById('amostra').innerHTML="<h1>Cursos</h1><br><p>Ciência da Computação - Puc Minas Poços de Caldas</p><br><h1>Línguas</h1><br><p>Inglês intermediário - Centro Municipal de Línguas</p>";
    document.getElementById('amostra').style.fontFamily="Sans";
}

var t=1;
function tema(){
    if(t%2==1){
        document.getElementById('fundo').style.backgroundColor = "khaki";
        document.getElementById('fundo').style.color = "darkslateblue";
    }
    else{
        document.getElementById('fundo').style.backgroundColor = "darkslateblue";
        document.getElementById('fundo').style.color = "khaki";
    }
    t++;
}



var i=1;
function fotoperfil(){
    if(i%2==1)
        document.getElementById('myImage').src = "imagens/imagem2.jfif"
    else
        document.getElementById('myImage').src = "imagens/imagem.jpg"

    i++;
}