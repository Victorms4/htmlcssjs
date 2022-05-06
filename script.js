function minhaFuncao(){
document.getElementById('demo').innerHTML = 'data de hoje'
}

function minhaFuncao2(){
document.getElementById('demo2').innerHTML = 'quando foi criado'
}

var i=1;

function minhaFuncao3(){
    if(i%2==1)
        document.getElementById('demo').innerHTML = 'data de hoje'
    else
        document.getElementById('demo').innerHTML = 'quando foi criado'

    i++;
}