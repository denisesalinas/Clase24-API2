/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {
  const formulario = this.document.querySelector('form')

  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    postearComentario()
  })
})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
  const titulo = document.querySelector('#titulo')
  const comentario = document.querySelector('#comentario')

  //ARMAR EL OBEJETO BASADO EN LA INFORMACIÓN QUE ME SOLICITA LA APP
  let objeto = {
    title: titulo.value,
    body: comentario.value,
    userId:5,
  }

  return objeto
}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
// https://jsonplaceholder.typicode.com/guide/

function postearComentario() {
  // 👇 usamos nuestra funcion para capturar los datos y guardarlos como objeto
  const datos= capturarDatos()
  //console.log(datos)
  // 👇 armamos las configuraciones o payload
  const payload=  {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  // la api acepta JSON, por eso stringuificamos los datos
  fetch('https://jsonplaceholder.typicode.com/posts',payload)
  .then(respuesta => {
    console.log('Respuesta: ', respuesta)
    return respuesta.json()
  })
  .then(data =>{
    console.log('Data: ', data)
    renderizarRespuesta(data)
  })
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

function renderizarRespuesta(datos) {
  const div = document.querySelector('.respuesta')
  
  const template = `
  <p> Datos cargados en el servidor </p>
  <p>
  Title: ${datos.title} 
  </p>
  <p>
  Body: ${datos.body} 
  </p>
  `
  
  div.innerHTML = template
}

/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// TODO API
// En este caso vamos a trabajar la conexion con APIS,
// Valiéndose de la documentación y el trabajo en clase, deberán lograr crear un usuario en la API y obtener su token.
// Este proceso puede realizarse a través de la herramienta Postman, o si ya lo prefieren desde un archivo JavaScript.
// 👇
// Documentación: https://unlpam-todo-api.vercel.app/api-docs
