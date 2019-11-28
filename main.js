// login page animation function
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
  item.addEventListener('click', function () {
    switchers.forEach(item => item.parentElement.classList.remove('is-active'))
    this.parentElement.classList.add('is-active')
  })
})

// end of login page animation function

function signIn(event) {
  event.preventDefault()
  $.ajax({
    url: "http://localhost:3000/users/login",
    method: "POST",
    data: {
      email: $('#login-email').val(),
      password: $('#login-password').val()
    }
  })
    .done(token => {
      localStorage.setItem('token', token.token)
      Swal.fire({
        title: 'Welcome',
        showConfirmButton: false,
        timer: 500
      })
      showTodo()
      $('.homepage').show()
      $('.login').hide()
    })
    .fail(err => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Maybe you forgot your password?'
      })
    })
}

function signUp(event) {
  event.preventDefault()
  $.ajax({
    url: "http://localhost:3000/users/register",
    method: "POST",
    data: {
      email: $('#signup-email').val(),
      password: $('#signup-password').val()
    }
  })
    .done(user => {
      console.log(user)
      Swal.fire({
        type: 'success',
        title: 'Registration successful',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .fail(err => {
      console.log(err)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'The email that you use is already registered in our database, please use other email.',
        footer: '<a href>Why do I have this issue?</a>'
      })
    })
}

function onSignIn(googleUser) {
  let id_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    url: "http://localhost:3000/users/googleSignIn",
    method: 'POST',
    data: {
      token: id_token
    }
  })
    .done(token => {
      console.log(token.token);
      localStorage.setItem('token', token.token)
      $('.homepage').show()
      $('.login').hide()
    })
    .fail(err => {
      console.log(err)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Maybe you forgot your password?'
      })
    })
}