let usuarios= ["Nilo"]
let senhas=["7830"]

function seeUsuarios(){
     usuarioPessoa=document.getElementById('tabela')

     usuarioPessoa.innerHTML=""
    //  usuarioPessoa.innerHTML=""   tava apagando o ja tinha

    for(let i=0;i<usuarios.length;i++){

        const linha =`<tr>
            <td>${usuarios[i]}</td>
            <td>${senhas[i]}</td>
            <td><button type="button" class="excluir" onclick="userRemove(${i})">Excluir</button></td>
        </tr>`

        // linha.insertAdjacentHTML('beforeend',linha)
        usuarioPessoa.insertAdjacentHTML('beforeend', linha);
    }

}
function cadastrar(){
   let usuario = document.getElementById('usuario').value
   let senha = document.getElementById('senha').value

   usuarios.push(usuario)
   senhas.push(senha)

   
}
function userRemove(ID){

    usuarios.splice(ID,1)
    senhas.splice(ID,1)
    // .splice() exclui a partir da casa (2), (1) item

    seeUsuarios()
    // chamar a function
}
