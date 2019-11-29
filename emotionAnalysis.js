function emotionAnalysis(){
    $("#result-emotion-analysis").empty()
    event.preventDefault()
    let text = $("#input-emotion-analysis").val()
    $.ajax({
        method : "POST",
        url : "http://localhost:3000/word",
        data : {
            text
        }
    })
    .done((emotion) => {
            $("#result-emotion-analysis").append(`
            <div class="row">
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="https://images7.alphacoders.com/987/987066.jpg" alt="profile-sample1" style="height: 100%;" class="background"/>
                    <img src="./assets/051-happy.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Happy<br><small>${(Number(emotion.emotion.happy) * 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="https://image.freepik.com/free-vector/blue-circles-background_1164-888.jpg" alt="profile-sample1" style="height: 100%;" class="background"/>
                    <img src="./assets//051-sad.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Sad<br><small>${(Number(emotion.emotion.sad) * 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="https://ctl.s6img.com/society6/img/cdYTUDT3b8_pDkLaUcTyTKgdQOE/w_700/leggings/swatch/~artwork,fw_7500,fh_8996,fx_-508,fy_-177,iw_8550,ih_8550/s6-original-art-uploads/society6/uploads/misc/64062611a494431c901993567980f124/~~/red-camo1851582-leggings.jpg" alt="profile-sample1" style="height: 100%;" class="background"/>
                    <img src="./assets//051-angry.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Angry<br><small>${(Number(emotion.emotion.angry)* 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="https://heymyke.com/wp-content/uploads/edd/2016/05/Squiggles_Worship_Background_Purple-632x356.jpg" alt="profile-sample1" style="height: 100%;" class="background"/>
                    <img src="./assets/051-scare.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Fear<br><small>${(Number(emotion.emotion.fear) * 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="https://i.ytimg.com/vi/UQTdBYbGJIU/maxresdefault.jpg" alt="profile-sample1" style="height: 100%;" class="background"/>
                    <img src="./assets/051-happy-4.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Excited<br><small>${(Number(emotion.emotion.excited) * 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
                <div class="col-md-2">
                <div class="card profile-card-1">
                    <img src="http://media.istockphoto.com/photos/low-poly-black-background-picture-id595734386?k=6&m=595734386&s=612x612&w=0&h=bGa3M_kVFLZXag5SBSteWwkQrVv-wY7aeo6L_tOQ8kQ=" style="height: 100%;" class="background"/>
                    <img src="/assets//051-confused.png" alt="profile-image" class="profile"/>
                    <div class="card-content">
                        <h5>Indifferent<br><small>${(Number(emotion.emotion.indifferent) * 100).toFixed(2)}%</small></h5>
                    </div>
                </div>
                </div>
            </div>
            `)
        })
    }
    