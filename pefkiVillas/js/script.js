window.addEventListener("load", function(){


    var closeBtn = document.createElement("div");
    closeBtn.id = "close-button";

    let beach = document.getElementById("beach");
    beach.onclick = function(){
        let largeBeach = document.getElementById("large-beach");
        let backgroundBeach = document.getElementsByClassName("background-dark")[0];
        backgroundBeach.style.display = "flex";
        closeBtn.style.top = "16px";
        largeBeach.appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            backgroundBeach.style.display = "none";
        })
    }

    let boat = document.getElementById("boat");
    boat.onclick = function(){
        let boatCruisers = document.getElementById("boat-cruisers");
        let backgroundBoat = document.getElementsByClassName("background-dark")[1];
        backgroundBoat.style.display = "flex";
        closeBtn.style.top = "16px";
        boatCruisers.appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            backgroundBoat.style.display = "none";
        })
    }

    let taverna = document.getElementById("food");
    taverna.onclick = function(){
        let fishTavernas = document.getElementById("tavernas");
        let backgroundTaverna = document.getElementsByClassName("background-dark")[2];
        backgroundTaverna.style.display = "flex";
        closeBtn.style.top = "16px";
        fishTavernas.appendChild(closeBtn);
        closeBtn.addEventListener("click", function(){
            backgroundTaverna.style.display = "none";
        })
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
                    console.log(data);
                    data = data.gallery;
                    console.log(data);

                    let bgGallery = document.createElement("div");
                    document.body.appendChild(bgGallery);
                    bgGallery.id = "bg-gallery";

                    let photoGallery = document.createElement("div");
                    bgGallery.appendChild(photoGallery);
                    photoGallery.id = "photo-gallery";
                    console.log(photoGallery.clientHeight);

                    var header = document.createElement("h2");
                    header.innerHTML = data.name;
                    header.style.color = "white";
                    photoGallery.appendChild(header);

                    photoGallery.appendChild(closeBtn);
                    let h = header.clientHeight - closeBtn.clientHeight;
                    console.log(header.clientHeight);
                    console.log(closeBtn.clientHeight);
                    console.log(h/2);
                    var style = photoGallery.currentStyle || window.getComputedStyle(photoGallery);

                    console.log('padding-top: ' + parseInt(style.paddingTop) + parseFloat(h/2));
                    closeBtn.style.top = parseInt(style.paddingTop) + h/2 + "px";
                    console.log(closeBtn.style.top);
                    closeBtn.addEventListener("click", function(){
                        bgGallery.style.display = "none";
                    })

                    let gallery = document.createElement("div");
                    photoGallery.appendChild(gallery);
                    gallery.id = "gallery";


                    let headerStyle = window.getComputedStyle(header);

                    data = data.images;

                    var container = document.createElement("div");
                    container.id = "container";
                    photoGallery.appendChild(container);

                    var imageBackground = document.createElement("div");
                    imageBackground.id = "image-background";
                    container.appendChild(imageBackground);

                    var imageContainer = document.createElement("div");
                    imageContainer.id = "image-container";
                    container.appendChild(imageContainer);



                    for(let i=0; i < data.length; i++){

                        let image = data[i].thumbnail;

                        gallery.innerHTML += "<img src=" + image.url + " id=" + data[i].id + " width=" + image.width
                            + " height=" + image.height + " title=" + data[i].title + " class='gallery-images'>";

                        container.style.height = $(photoGallery).height() - $(header).outerHeight(true) - $(gallery).outerHeight(true) + "px";
                    }

                    let arrow = document.createElement("i");
                    photoGallery.appendChild(arrow);
                    arrow.classList.add("fas");
                    arrow.classList.add("fa-chevron-right");
                    arrow.id = "arrow";
                    arrow.style.top = parseFloat(window.getComputedStyle(photoGallery).paddingTop) + header.clientHeight + parseFloat(headerStyle.marginBottom) + gallery.clientHeight/2 - arrow.clientHeight/2 + "px";

                    var images = document.getElementsByClassName("gallery-images");
                    let sum = 0;


                    for(let j = 0; j < images.length; j++){
                        
                        sum += images[j].clientWidth;

                        images[j].addEventListener("mouseenter", function(){

                            imageBackground.style.backgroundImage = 'url(' + images[j].src + ')';
                            imageContainer.style.backgroundImage = "url(" + images[j].src + ")";

                            localStorage.setItem("selected-image", images[j].id);
                        });
                    }

                    gallery.addEventListener("scroll", function(){

                        if(gallery.scrollLeft + gallery.clientWidth > sum){
                            arrow.style.display = "none";
                        } else {
                            arrow.style.display = "block";
                        }
                    })


                    if(localStorage.getItem("selected-image") != null){
                        imageContainer.style.backgroundImage =  "url(" + gallery.children[localStorage.getItem("selected-image") - 1].src + ")";
                        imageBackground.style.backgroundImage = 'url(' + gallery.children[localStorage.getItem("selected-image") - 1].src + ')';
                    } else {
                        imageContainer.style.backgroundImage = "url(" + data[0].thumbnail.url + ")";
                        imageBackground.style.backgroundImage = 'url(' + data[0].thumbnail.url + ')';
                    }

                }
                catch(err){
                    console.log(err);
                }

            })();
        })
    }

    let header = document.getElementById("header");
    let hero = document.getElementById("hero-section");

    document.onscroll = function(){
        if(document.documentElement.scrollTop > hero.clientHeight){
            if(!header.classList.contains("solid-header")){
                header.classList.add("solid-header");
                header.classList.remove("p-3");
            }
        } else {
            if(header.classList.contains("solid-header")){
                header.classList.remove("solid-header");
                header.classList.add("p-3");
            }
        }

    }


    
    let menuBtn = document.getElementById("menu-btn");
    let mobileMenu = document.getElementById("mobile-menu");
    let closeButton = document.getElementById("close-btn");

    menuBtn.addEventListener("click", function() {
        mobileMenu.style.display = "block";
    })

    closeButton.addEventListener("click", function() {
        mobileMenu.style.display = "none";
    })

    let mobileMenuItems = document.getElementsByClassName("mobile-menu-item");
    for (let i = 0; i < mobileMenuItems.length; i++) {
        mobileMenuItems[i].addEventListener("click", function() {
            mobileMenu.style.display = "none";
        })
    };
            

    var map = L.map('map', {
        center: [39.006525477492744, 23.210849951479815], 
        zoom: 14,
        scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([39.006525477492744, 23.210849951479815]).addTo(map)
        .bindPopup('Pefki Villas:<br> 39.006525477492744, 23.210849951479815')
        .openPopup();

    let mapButtons = document.getElementsByClassName("map");
    for (let i = 0; i < mapButtons.length; i++) {
        mapButtons[i].addEventListener("click", function(){
            let id = this.id;
            switch(id){
                case "plus":
                    map.zoomIn(1);
                    break;
                case "minus":
                    map.zoomOut(1);
                    break;
            }
        })
    }

})


