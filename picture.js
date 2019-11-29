const baseUri = 'http://localhost:3000'

$( "#fetch-url" ).click(function(e) {
    let url = $('#url-picture').val()
    // alert( 'halooo');
    
    fetchData(url)
  });

function fetchData(url){

    let link=url
    let finalLink

    if(link.indexOf('/?utm_source=ig_web_copy_link') > 0){
        let newLink = link.replace('/?utm_source=ig_web_copy_link','')
        finalLink = newLink + '/media/?size=l'
    }else{
        finalLink = url
    }

    $('.picture-fetched').empty()

    $.ajax({
        method:'POST',
        url : `${baseUri}/pictures`,
        data : {
            url : url
        } 
    })

    
    .done(function(response){

        console.log(finalLink)
        if(response.output === 'No face detected.'){
            Swal.fire(
                'No face detected?',
                'We are still improving~',
                'Try another image'
              )
        }
        if(response.code === 400){
            Swal.fire(
                'Is it an image url?',
                'Try another image'
              )
        }else{
            let obj = response.facial_emotion
            let html = ''
            html += `
                        <div class="content" style="display: flex; justify-content: center;flex-direction: column;align-items: center;">
                        <div class="circular--landscape">
                        <img src="${finalLink}" />
                        </div>
    
                        <div class="emojis">
                            <div class="circular--emoji">
                                <img src="./assets/happy.png" />
                                <h3 style="color:white; text-align: center;">${(obj[0].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/angry.png" />
                                <h3 style="color:white; text-align: center;">${(obj[1].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/netural.png" />
                                <h3 style="color:white; text-align: center;">${(obj[2].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/shock.png" />
                                <h3 style="color:white; text-align: center;">${(obj[3].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/disgust.png" />
                                <h3 style="color:white; text-align: center;">${(obj[4].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/sad.png" />
                                <h3 style="color:white; text-align: center;">${(obj[5].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                            <div class="circular--emoji">
                                <img src="./assets/fear.png" />
                                <h3 style="color:white; text-align: center;">${(obj[6].score*100).toString().slice(0,4)+'%'}</h3>
                            </div>
                        </div>
                    </div>
            
                    `
        $('.picture-fetched').append(html)

        }

    })
    .fail(err => {
        alert('no face detected')
        console.log(err);
    })
}