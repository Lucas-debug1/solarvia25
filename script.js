const input = document.getElementById("conta")
const resultado = document.getElementById("resultado")

input.addEventListener("input",()=>{

const valor=parseFloat(input.value)

if(!isNaN(valor)){

const mensal=(valor*0.7).toFixed(2)
const anual=(mensal*12).toFixed(2)

resultado.innerHTML=
`Economia estimada:<br>
R$ ${mensal} por mês<br>
R$ ${anual} por ano`

}else{

resultado.innerHTML=""

}

})