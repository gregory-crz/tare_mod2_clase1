const nombre = prompt("cual es tu nombre" );
const saludo = 'hola, '+ nombre;
alert(saludo)
let edad = prompt("¿Cual es tu edad ?");
const mensaje = "Tu edad es: "+ edad;
console.log(mensaje);
edad = parseInt(edad)
const nu_dias = edad*365
console.log("Usted ha vivido " + nu_dias + " dias");
const snack = prompt("¿Cual es tu snack favorito?");
const favorito = "Tu snack favorito es " + snack;
console.log(favorito);
const comerxdia = prompt("cuantos comes al dia");
const comes ="Comes "+ comerxdia + " al dia"
console.log(comes);
let edadmaxima = 81
edadmaxima = parseInt(edadmaxima);
const calcular = edadmaxima - edad *365*2;
const faltan = "Te faltan comer  "+ calcular + " snack"
console.log(faltan);
const precio_snack = prompt("Cuanto cuesta el snack")
const precio_total = precio_snack*calcular;
const aviso = " lo que te falta por gastar el resto de tu vida es: "+ precio_total; 
alert(aviso)

