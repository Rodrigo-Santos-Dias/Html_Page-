let nome = window.document.getElementById('nome')


function validName(){
    let txt= document.querySelector('#txtName')
    if(nome.value.length <3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    } 
}
