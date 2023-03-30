/* alert("hola");
const juanito1=document.getElementById('juanito');
//console.log(juanito1);


const imagen = document.createElement('img');
imagen.setAttribute('src','https://www.alkosto.com/medias/alkosto-logo.svg?context=bWFzdGVyfGltYWdlc3wxMjMxMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmEvaDNlLzk5OTExMTAwNjYyMDYuc3ZnfDhkYTBjMDNjNTNhZjY5NTE0YTg5M2Y0NzZiODk1NjdmNTE4OTZiZWFlMTE1OTY3NTZlZGY4MWM0ZWNjNGI0NGM');
//console.log(imagen);

juanito1.appendChild(imagen);
*/
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#boton');
const pResult = document.querySelector('#resultado')


form.addEventListener('submit' , SumarValue)

function SumarValue (event){
   // console.log({event});
    event.preventDefault();
   const sumaDeInputs = input1.value + input2.value;
   pResult.innerText = 'resultado:  ' + sumaDeInputs;

}
//onclick= btnClick() va en HTML