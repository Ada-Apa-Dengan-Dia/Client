
function detect() {
  console.log("masuk detect");
  console.log($('#from-lang').val(), "ini texxxxxxxxxt");
  
  $('#to-lang').empty()
  $.ajax({

    url: `http://localhost:3000/caption/detect`,
    method: 'POST',
    data: {
      text: $('#from-lang').val()
    }
  })
    .done(data => {
      console.log(data.text[0], "dataaaaaaaaaaa");
      // $('#result').clear()
      // $('#result').val(data)
      // $('#language').val(data)
      // $('#result').append(`
      
      // <h1>${data.text[0]}</h1>
      
      // `)
      
      $('#to-lang').append(`${data.text[0]}`)
    })
    .fail(err => {
      console.log(err)
    })
}

// function translate() {
//   $.ajax({
//     url: `http://localhost:3000/caption/translate`,
//     method: 'POST',
//     data: {
//       lang: $('#language').val(data),
//       text: $('#from-lang').val()
//     }
//   })
//     .done(({ data }) => {
//       $('#to-lang').val(data)
//       $('#to-lang').append(`${data}`)
//     })
// }