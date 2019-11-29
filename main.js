$(document).ready(function () {
  if (localStorage.getItem('token')) {
    $('.welcome-page').show()
    $('.go-to-three-options').show()
    $('.login').hide()
    $('.three-options').hide()
  } else {
    $('.login').show()
    $('.welcome-page').hide()
    $('.go-to-three-options').hide()
    $('.three-options').hide()
  }
})

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
      $('.welcome-page').show()
      $('.go-to-three-options').show()
      $('.login').hide()
      $('.three-options').hide()
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
      $('.welcome-page').show()
      $('.go-to-three-options').show()
      $('.login').hide()
      $('.three-options').hide()
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
function signOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.removeItem('token')
    $('.login').show()
    $('.welcome-page').hide()
    $('.three-options').hide()
    console.log('User signed out.')
  });
}

function goToThreeOptions() {
  event.preventDefault()
  $(".go-to-three-options").click(function () {
    $('.go-to-three-options').fadeOut(1000, function () {
      $('.welcome-page').slideUp('slow')
    })
  })
  $('.three-options').show()
}

function goToELI(event) {
  event.preventDefault()
  $('.three-options').slideUp(1000, function () {
    $('.eli').show()
    $('.syiril').hide()
    $('.alfred').hide()
  })
}

function goToSYIRIL(event) {
  event.preventDefault()
  $('.three-options').slideUp(1000, function () {
    $('.eli').hide()
    $('.syiril').show()
    $('.alfred').hide()
  })
}

function goToALFRED(event) {
  event.preventDefault()
  $('.three-options').slideUp(1000, function () {
    $('.eli').hide()
    $('.syiril').hide()
    $('.alfred').show()
  })
}

function backToThreeOptions(event) {
  event.preventDefault()
  $('.alfred').hide()
  $('.eli').hide()
  $('.syiril').hide()
  $('.three-options').slideDown(1000)
}