window.addEventListener("load", function(){


    var closeBtn = document.createElement("div");
    closeBtn.id = "close-button";

    $("#beach")[0].onclick = function(){
        document.body.style.overflow = "hidden";
        $(".background-dark")[0].style.display = "flex";
        $("#large-beach")[0].appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            $(".background-dark")[0].style.display = "none";
            document.body.style.overflow = "auto";
        });
        document.onkeyup = (event)=>{
            if(event.key == "Escape"){
                $(".background-dark")[0].style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }

    $("#boat")[0].onclick = function(){
        document.body.style.overflow = "hidden";
        $(".background-dark")[1].style.display = "flex";
        $("#boat-cruisers")[0].appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            $(".background-dark")[1].style.display = "none";
            document.body.style.overflow = "auto";
        });
        document.onkeyup = (event)=>{
            if(event.key == "Escape"){
                $(".background-dark")[1].style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }

    $("#food")[0].onclick = function(){
        document.body.style.overflow = "hidden";
        $(".background-dark")[2].style.display = "flex";
        $("#tavernas")[0].appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            $(".background-dark")[2].style.display = "none";
            document.body.style.overflow = "auto";
        });
        document.onkeyup = (event)=>{
            if(event.key == "Escape"){
                $(".background-dark")[2].style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }


    let buttons = document.getElementsByClassName("btn-danger");
    for(let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){

            (async function () {

                try{
                    let response = await fetch("data.json");
                    console.log(response.status);

                    if(response.status !== 200){
                        throw new Error("Fetch error");
                    }

                    let data = await response.json();
                    //console.log(data);
                    data = data.gallery;
                    //console.log(data);

                    document.body.style.overflow = "hidden";

                    let bg_gallery = document.createElement("div");
                    document.body.appendChild(bg_gallery);
                    bg_gallery.id = "bg-gallery";

                    let photo_gallery = document.createElement("div");
                    bg_gallery.appendChild(photo_gallery);
                    photo_gallery.id = "photo-gallery";


                    let header = document.createElement("div");
                        let text = document.createElement("h2");
                        header.appendChild(text);
                        text.innerHTML = data.name;
                        text.style.color = "white";
                        let close_btn = document.createElement("div");
                        close_btn.id = "gallery-close-button";
                        header.appendChild(close_btn);
                        header.id = "gallery-header";

                        close_btn.addEventListener("click", function(){
                            bg_gallery.style.display = "none";
                            document.body.style.overflow = "auto";
                        });
                        document.onkeyup = (event)=>{
                            if(event.key == "Escape"){
                                bg_gallery.style.display = "none";
                                document.body.style.overflow = "auto";
                            }
                        };
                    photo_gallery.appendChild(header);


                    let gallery_container = document.createElement("div");
                    gallery_container.id = "gallery-container";
                    photo_gallery.appendChild(gallery_container);
                    let gallery = document.createElement("div");
                    gallery.classList.add('gallery');
                    gallery_container.appendChild(gallery);

                    data = data.images;

                    for(let i=0; i < data.length; i++){

                        let image = data[i].thumbnail;

                        gallery.innerHTML += `<img src=${image.url} id=${data[i].id} height=${image.height} title=${data[i].title} class='gallery-images'>`;

                    }


                    var container = document.createElement("div");
                    container.id = "container";
                    photo_gallery.appendChild(container);

                        let arrow_container = document.createElement("div");
                        arrow_container.id = "arrow-container";

                        let arrowLeft = document.createElement("i");
                        arrow_container.appendChild(arrowLeft);
                        arrowLeft.classList.add("fas");
                        arrowLeft.classList.add("fa-chevron-left");
                        arrowLeft.classList.add("arrow");

                        let arrowRight = document.createElement("i");
                        arrow_container.appendChild(arrowRight);
                        arrowRight.classList.add("fas");
                        arrowRight.classList.add("fa-chevron-right");
                        arrowRight.classList.add("arrow");

                    container.appendChild(arrow_container);



                    let interval;

                    var images = gallery.getElementsByClassName("gallery-images");
                    for(let j = 0; j < images.length; j++){
                        
                        images[j].addEventListener("click", function(){

                            container.style.backgroundImage = `url(${images[j].src})`;
                            localStorage.setItem("selected-image", images[j].id - 1);

                            if(photo_gallery.clientHeight < 540){
                                if(interval){
                                    cancelAnimationFrame(interval);
                                    interval = undefined;
                                }else{
                                    interval = requestAnimationFrame(update);
                                }
                            }
                        });
                    }



                    let gallery_1 = gallery.cloneNode(true);
                    gallery_container.appendChild(gallery_1);
                    var images_1 = gallery_1.getElementsByClassName("gallery-images");
                    for(let i = 0; i < images_1.length; i++){
                        
                        images_1[i].addEventListener("click", function(){

                            container.style.backgroundImage = "url(" + images_1[i].src + ")";
                            localStorage.setItem("selected-image", images_1[i].id - 1);

                            if(photo_gallery.clientHeight < 540){
                                if(interval){
                                    cancelAnimationFrame(interval);
                                    interval = undefined;
                                }else{
                                    interval = requestAnimationFrame(update);
                                }
                            }

                        });
                    }

                    let pos = 0;
                    function update(){             
                        if(parseInt(gallery.style.left) <= -gallery.scrollWidth){
                            gallery.style.left = 0;
                            gallery_1.style.left = gallery.scrollWidth + 'px';
                            pos = 0;
                        } 
                           
                        pos--;
                        gallery.style.left = pos + 'px';
                        gallery_1.style.left = pos + 'px';
                        interval = requestAnimationFrame(update);
                    }
                    update();


            
                    arrowLeft.onclick = ()=>{
                        if (localStorage.getItem("selected-image") =="0"){
                            localStorage.setItem("selected-image", images.length - 1);
                            container.style.backgroundImage =   "url(" + gallery.children[images.length - 1].src + ")";
                        } else {
                            localStorage.setItem("selected-image", localStorage.getItem("selected-image") - 1);
                            container.style.backgroundImage = `url(${gallery.children[parseInt(localStorage.getItem("selected-image"))].src})`;
                        }
                    };
                    arrowRight.addEventListener("click", ()=>{

                        if (localStorage.getItem("selected-image") == images.length - 1){
                            localStorage.setItem("selected-image", "0");
                            container.style.backgroundImage =   "url(" + gallery.children[0].src + ")";
                        } else {
                            localStorage.setItem("selected-image", parseInt(localStorage.getItem("selected-image")) + 1);
                            container.style.backgroundImage =   "url(" + gallery.children[parseInt(localStorage.getItem("selected-image"))].src + ")";
                        }
                    });

                    if(localStorage.getItem("selected-image") != null){
                        container.style.backgroundImage =  "url(" + gallery.children[localStorage.getItem("selected-image")].src + ")";
                    } else {
                        container.style.backgroundImage = "url(" + gallery.children[0].src + ")";
                        localStorage.setItem("selected-image", 0);
                    }


                }
                catch(err){
                    console.log(err);
                }

            })();
        })
    }


    
    $(document).scroll(function(){
        if(this.documentElement.scrollTop > this.documentElement.clientHeight){
            $("#header").addClass("solid-header");
            $("#header").removeClass("p-3");
        } else {
            $("#header").removeClass("solid-header");
            $("#header").addClass("p-3");
        }
    })

    
    $("#menu-btn").click(function(){
        $("#mobile-menu").css("display", "block");
    })
    $("#close-btn").click(function(){
        $("#mobile-menu").css("display", "none");
    })
    $(".mobile-menu-item").each(function(){
        $(this).click(function(){
            $("#mobile-menu").css("display", "none");
        })
    })
            

    var map = L.map('map', {
        center: [39.006525477492744, 23.210849951479815], 
        zoom: 14,
        scrollWheelZoom: false,
        gestureHandling: true,
        gestureHandlingOptions:{
            text:{touch: "Use two fingers to move the map"}
        } 
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([39.00662164313321, 23.2107612490654]).addTo(map).bindPopup('Pefki Villas:<br> 39.00662164313321, 23.2107612490654').openPopup();

    map.on('click', function(ev) {
        alert("Coordinates of clicked point are: " + ev.latlng.lat + ', ' + ev.latlng.lng);
    });

    L.marker([39.007309449817285, 23.21081489324574]).addTo(map);


    $(".map").each(function(){
        this.onclick=function(){
            let id = this.id;
            switch(id){
                case "plus":
                    map.zoomIn(1);
                    break;
                case "minus":
                    map.zoomOut(1);
                    break;
            }

        }
    })


})


