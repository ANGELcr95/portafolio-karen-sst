        // Declariacion de variables globales 
let up = document.querySelectorAll('.works a')
let colour = document.getElementById('primeroida')
let menu = document.querySelector('.redes')

menu.addEventListener('mouseover',() => {
    document.getElementById('p').classList.remove('desactivo');
    document.getElementById('p').classList.add('activo');
})
 
menu.addEventListener('mouseout',() => {
    document.getElementById('p').classList.add('desactivo');
    document.getElementById('p').classList.remove('activo');
})   
        // Animacion de ida
let transition = (color) => {
    if(window.scrollY == 0 && color == 1){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://sarlaftend.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 2){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://proyectodo.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 3){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://weather-mauve-eight.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 4){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://www.uniquindio.edu.co/";},2250)
    } 
    if(window.scrollY == 0 && color == 5){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://intenalco.edu.co/portal/";},2250)
    }  
}

document.addEventListener('scroll', transition)

        // Recorre los a de work en el assets y a esos a agregarles un evento para que ejecute una funcion anonima tipo flecha

up.forEach((a) => {
    a.addEventListener('click', (e) => {
        setTimeout( () => {transition(e.target.name)},1000)
    })
})

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";
	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	colour.style.background = color;
}

generarNuevoColor()


let icons = document.querySelectorAll(".icons_banner-img")

let innerTexto = (id) =>{
    let divText = document.getElementById("inner-cart")
    console.log(id);
    
    switch (id) {
        case "safety":
            divText.classList.add("active")
            divText.innerHTML = "<h4>Seguridad <h4><p>Yo contribuyo con la seguridad de los colaboradores, soy asertiva en la implementaci??n de t??cnicas de concientizaci??n, como capacitaciones l??dicas, incentivando el autocuidado y al trabajo en equipo para la prevenci??n de accidentes y enfermedades laborales....??????</p>"
            break;
        case "salud":
            divText.classList.add("active")
            divText.innerHTML = "<h4>Salud<h4><p>Intervengo en la promoci??n de la salud de los colaboradores ????, incentiv??ndolos a la aplicaci??n de h??bitos de vida,  basados en una alimentaci??n sana, rutinas de ejercicio, higiene del sue??o, aprovechamiento de los tiempos libre en familia, tambi??n por medio de campanas para la prevenci??n de enfermedades que puedan afectar su bienestar...????</p>"
            break;
        case "ambiental":
            divText.classList.add("active")
            divText.innerHTML = "<h4>Ambiental<h4><p>El cuidado y la preservaci??n del medio ambiente ????, por medio de la disposici??n correcta de residuos, este es un aspecto fundamental en las buenas pr??cticas para la preservaci??n de nuestro planeta, uso racional de recursos h??dricos ???? y energ??a ???, sumado a las capacitaciones en tema como conciencia ambiental huella de carbono...</p>"
            break;
        default:
            divText.classList.remove("active")
            divText.innerHTML = ""
            break;
    }

}
icons.forEach((icon) => {
    icon.addEventListener('mouseout', () => {
        if (window.screen.width > 900) {
            innerTexto()
        }
    })
})

let select = document.getElementById("presentacion_id")

select.addEventListener('click', (e) => {
    if (window.screen.width < 900) {
        innerTexto(e.target.id)
    }
})

icons.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
        if (window.screen.width > 900) {
            innerTexto(e.target.id)
        }
    })
})

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        if (window.screen.width < 900) {
            innerTexto(e.target.id)
        }
    })
})




