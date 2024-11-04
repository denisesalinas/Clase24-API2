window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    //recuperar info dle html
    const form = document.querySelector('form')
    const firstName = document.getElementById('inputNombre')
    const lastName = document.getElementById('inputApellido')
    const email = document.getElementById('inputEmail')
    const password = document.getElementById('inputPassword')
    const url = 'https://unlpam-todo-api.vercel.app'// declaración de url para uso de la app


/* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener('submit', function (event) {
    event.preventDefault()// previene la recarga la página
    const payload = { // completa la data que se quiere enviar
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    }
    const settings = {//construir los requisitos de fetch
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    realizarRegister(settings) 
  })
 /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    fetch(`${url}/users`, settings) // url relativo
      .then(response => {
        console.log('Respuesta: ', response)// imprime la respuesta por consola
        return response.json()
      })
      .then(data => {
        console.log('Data: ', data)// imprime los datos por consola
      })
      .catch(error => {
        console.log('Promesa rechazada: ', error) // imprime el error por consola
      })
  }
})
