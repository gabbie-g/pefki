(async function(){

    try{

        let response = await fetch("translate.json");
        if(!response.ok){
            throw new Error("Error in readind this file");
        }
        let translate = await response.json();

        let flags = $(".flags");
        let list = $("li");

        for (let i = 0; i< flags.length; i++) {
            flags[i].addEventListener("click", function(){
        
                let id = flags[i].id;
        
                switch(id){
                    case "gr":
                        $("a")[1].textContent = translate.link0.gr;
                        $("a")[5].textContent = translate.link0.gr;
                        $("a")[2].textContent = translate.link1.gr;
                        $("a")[6].textContent = translate.link1.gr;
                        $("a")[3].textContent = translate.link2.gr;
                        $("a")[7].textContent = translate.link2.gr; 
                        if(window.innerWidth < 1030){
                            $("a")[7].classList.add("d-none");
                        }
                            
                        $("a")[4].textContent = translate.link3.gr;
                        $("a")[8].textContent = translate.link3.gr;
                    
                        $("h1")[1].textContent = translate.header.gr;
                        $("h3")[1].textContent = translate.header.gr;
                    
                        $("p")[0].textContent = translate.p1.gr;
                        $("h2")[1].textContent = translate.header1.gr;
                        $("h3")[2].textContent = translate.header1.gr;
                    
                        $("p")[1].textContent = translate.p2.gr;
                        $("p")[2].textContent = translate.header41.gr;
                        $("p")[3].textContent = translate.header42.gr;
                        $("p")[4].textContent = translate.header43.gr;
                    
                        list[0].textContent = translate.list_0.gr;
                        list[1].childNodes[0].textContent = translate.list_1.gr;
                        list[1].childNodes[1].children[0].textContent = translate.list_2.gr;
                        list[1].childNodes[1].children[1].textContent = translate.list_3.gr;
                        list[1].childNodes[1].children[2].textContent = translate.list_4.gr;
                        list[1].childNodes[1].children[3].textContent = translate.list_5.gr;
                    
                        $("p")[5].textContent = translate.p5.gr;
                        list[6].textContent = translate.list6.gr;
                        list[7].textContent = translate.list7.gr;
                        list[8].textContent = translate.list8.gr;
                    
                        $("h3")[3].textContent = translate.header3.gr;
                        $("h4")[1].textContent = translate.header3.gr;
                        $("p")[6].textContent = translate.p6.gr;
                        list[9].textContent = translate.list9.gr;
                        list[10].textContent = translate.list10.gr;
                        list[11].textContent = translate.list11.gr;
                        list[12].textContent = translate.list12.gr;
                        list[13].textContent = translate.list13.gr;
                        list[14].textContent = translate.list14.gr;
                        list[15].textContent = translate.list15.gr;
                        list[16].textContent = translate.list16.gr;
                        list[17].textContent = translate.list17.gr;
                        list[18].textContent = translate.list18.gr;
                        list[19].textContent = translate.list19.gr;
                        $("button")[0].textContent = translate.button.gr;
                        $("button")[1].textContent = translate.button.gr;
                        $("h3")[4].textContent = translate.header3_2.gr;
                        $("h4")[2].textContent = translate.header3_2.gr;
                    
                        $("p")[7].textContent = translate.p7.gr;
                        $("a")[15].textContent = translate.link11.gr;
                        $("p")[8].innerHTML = translate.p8.gr;
                    
                        $("h3")[5].textContent = translate.h3_3.gr;
                        $("p")[9].textContent = translate.p9.gr;
                        $("h4")[3].textContent = translate.h4_2.gr;
                        $("h4")[4].textContent = translate.h4_3.gr;
                        $("h3")[6].textContent = translate.h3_4.gr;
                        $("h4")[5].textContent = translate.h4_4.gr;
                        $("h4")[7].textContent = translate.h4_6.gr;
                    break;
        
                    case "eng":
                        $("a")[1].textContent = translate.link0.eng;
                        $("a")[5].textContent = translate.link0.eng;
                        $("a")[2].textContent = translate.link1.eng;
                        $("a")[6].textContent = translate.link1.eng;
                        $("a")[3].textContent = translate.link2.eng;
                        $("a")[7].textContent = translate.link2.eng           
                        $("a")[4].textContent = translate.link3.eng;
                        $("a")[8].textContent = translate.link3.eng;
                    
                        $("h1")[1].textContent = translate.header.eng;
                        $("h3")[1].textContent = translate.header.eng;
                    
                        $("p")[0].textContent = translate.p1.eng;
                        $("h2")[1].textContent = translate.header1.eng;
                        $("h3")[2].textContent = translate.header1.eng;
                    
                        $("p")[1].textContent = translate.p2.eng;
                        $("p")[2].textContent = translate.header41.eng;
                        $("p")[3].textContent = translate.header42.eng;
                        $("p")[4].textContent = translate.header43.eng;
                    
                        list[0].textContent = translate.list_0.eng;
                        list[1].childNodes[0].textContent = translate.list_1.eng;
                        list[1].childNodes[1].children[0].textContent = translate.list_2.eng;
                        list[1].childNodes[1].children[1].textContent = translate.list_3.eng;
                        list[1].childNodes[1].children[2].textContent = translate.list_4.eng;
                        list[1].childNodes[1].children[3].textContent = translate.list_5.eng;
                    
                        $("p")[5].textContent = translate.p5.eng;
                        list[7].textContent = translate.list7.eng;
                    
                        $("h3")[3].textContent = translate.header3.eng;
                        $("h4")[1].textContent = translate.header3.eng;
                        $("p")[6].textContent = translate.p6.eng;
                        list[9].textContent = translate.list9.eng;
                        list[10].textContent = translate.list10.eng;
                        list[11].textContent = translate.list11.eng;
                        list[12].textContent = translate.list12.eng;
                        list[13].textContent = translate.list13.eng;
                        list[14].textContent = translate.list14.eng;
                        list[15].textContent = translate.list15.eng;
                        list[16].textContent = translate.list16.eng;
                        list[17].textContent = translate.list17.eng;
                        list[18].textContent = translate.list18.eng;
                        list[19].textContent = translate.list19.eng;
                        $("button")[0].textContent = translate.button.eng;
                        $("button")[1].textContent = translate.button.eng;
                        $("h3")[4].textContent = translate.header3_2.eng;
                        $("h4")[2].textContent = translate.header3_2.eng;
                        $("p")[7].textContent = translate.p7.eng;
                        $("a")[15].textContent = translate.link11.eng;
                        $("p")[8].innerHTML = translate.p8.eng;
                    
                        $("h3")[5].textContent = translate.h3_3.eng;
                        $("p")[9].textContent = translate.p9.eng;
                        $("h4")[3].textContent = translate.h4_2.eng;
                        $("h4")[4].textContent = translate.h4_3.eng;
                        $("h3")[6].textContent = translate.h3_4.eng;
                        $("h4")[5].textContent = translate.h4_4.eng;
                        $("h4")[7].textContent = translate.h4_6.eng;
                    break;
        
                    case "ro":
                        $("a")[1].textContent = translate.link0.ro;
                        $("a")[5].textContent = translate.link0.ro;
                        $("a")[2].textContent = translate.link1.ro;
                        $("a")[6].textContent = translate.link1.ro;
                        $("a")[3].textContent = translate.link2.ro;
                        $("a")[7].textContent = translate.link2.ro;
                        $("a")[4].textContent = translate.link3.ro;
                        $("a")[8].textContent = translate.link3.ro;
                    
                        $("h1")[1].textContent = translate.header.ro;
                        $("h3")[1].textContent = translate.header.ro;
                    
                        $("p")[0].textContent = translate.p1.ro;
                        $("h2")[1].textContent = translate.header1.ro;
                        $("h3")[2].textContent = translate.header1.ro;
                    
                        $("p")[1].textContent = translate.p2.ro;
                        $("p")[2].textContent = translate.header41.ro;
                        $("p")[3].textContent = translate.header42.ro;
                        $("p")[4].textContent = translate.header43.ro;
                    
                        list[0].textContent = translate.list_0.ro;
                        list[1].childNodes[0].textContent = translate.list_1.ro;
                        list[1].childNodes[1].children[0].textContent = translate.list_2.ro;
                        list[1].childNodes[1].children[1].textContent = translate.list_3.ro;
                        list[1].childNodes[1].children[2].textContent = translate.list_4.ro;
                        list[1].childNodes[1].children[3].textContent = translate.list_5.ro;
                    
                        $("p")[5].textContent = translate.p5.ro;
                        list[7].textContent = translate.list7.ro;
                    
                        $("h3")[3].textContent = translate.header3.ro;
                        $("h4")[1].textContent = translate.header3.ro;
                        $("p")[6].textContent = translate.p6.ro;
                        list[9].textContent = translate.list9.ro;
                        list[10].textContent = translate.list10.ro;
                        list[11].textContent = translate.list11.ro;
                        list[12].textContent = translate.list12.ro;
                        list[13].textContent = translate.list13.ro;
                        list[14].textContent = translate.list14.ro;
                        list[15].textContent = translate.list15.ro;
                        list[16].textContent = translate.list16.ro;
                        list[17].textContent = translate.list17.ro;
                        list[18].textContent = translate.list18.ro;
                        list[19].textContent = translate.list19.ro;
                        $("button")[0].textContent = translate.button.ro;
                        $("button")[1].textContent = translate.button.ro;
                        $("h3")[4].textContent = translate.header3_2.ro;
                        $("h4")[2].textContent = translate.header3_2.ro;
                    
                        $("p")[7].textContent = translate.p7.ro;
                        $("a")[15].textContent = translate.link11.ro;
                        $("p")[8].innerHTML = translate.p8.ro;
                    
                        $("h3")[5].textContent = translate.h3_3.ro;
                        $("p")[9].textContent = translate.p9.ro;
                        $("h4")[3].textContent = translate.h4_2.ro;
                        $("h4")[4].textContent = translate.h4_3.ro;
                        $("h3")[6].textContent = translate.h3_4.ro;
                        $("h4")[5].textContent = translate.h4_4.ro;
                        $("h4")[7].textContent = translate.h4_6.ro;
                    break;
        
                    case "sr":
        
                        $("a")[1].textContent = translate.link0.sr;
                        $("a")[5].textContent = translate.link0.sr;
                        $("a")[2].textContent = translate.link1.sr;
                        $("a")[6].textContent = translate.link1.sr;
                        $("a")[3].textContent = translate.link2.sr;
                        $("a")[7].textContent = translate.link2.sr;
                        $("a")[4].textContent = translate.link3.sr;
                        $("a")[8].textContent = translate.link3.sr;
                    
                        $("h1")[1].textContent = translate.header.sr;
                        $("h3")[1].textContent = translate.header.sr;
                    
                        $("p")[0].textContent = translate.p1.sr;
                        $("h2")[1].textContent = translate.header1.sr;
                        $("h3")[2].textContent = translate.header1.sr;
                    
                        $("p")[1].textContent = translate.p2.sr;
                        $("p")[2].textContent = translate.header41.sr;
                        $("p")[3].textContent = translate.header42.sr;
                        $("p")[4].textContent = translate.header43.sr;
                    
                        list[0].textContent = translate.list_0.sr;
                        list[1].childNodes[0].textContent = translate.list_1.sr;
                        list[1].childNodes[1].children[0].textContent = translate.list_2.sr;
                        list[1].childNodes[1].children[1].textContent = translate.list_3.sr;
                        list[1].childNodes[1].children[2].textContent = translate.list_4.sr;
                        list[1].childNodes[1].children[3].textContent = translate.list_5.sr;
                    
                        $("p")[5].textContent = translate.p5.sr;
                        list[7].textContent = translate.list7.sr;
                    
                        $("h3")[3].textContent = translate.header3.sr;
                        $("h4")[1].textContent = translate.header3.sr;
                        $("p")[6].textContent = translate.p6.sr;
                        list[9].textContent = translate.list9.sr;
                        list[10].textContent = translate.list10.sr;
                        list[11].textContent = translate.list11.sr;
                        list[12].textContent = translate.list12.sr;
                        list[13].textContent = translate.list13.sr;
                        list[14].textContent = translate.list14.sr;
                        list[15].textContent = translate.list15.sr;
                        list[16].textContent = translate.list16.sr;
                        list[17].textContent = translate.list17.sr;
                        list[18].textContent = translate.list18.sr;
                        list[19].textContent = translate.list19.sr;
                        $("button")[0].textContent = translate.button.sr;
                        $("button")[1].textContent = translate.button.sr;
                        $("h3")[4].textContent = translate.header3_2.sr;
                        $("h4")[2].textContent = translate.header3_2.sr;
                    
                        $("p")[7].textContent = translate.p7.sr;
                        $("a")[15].textContent = translate.link11.sr;
                        $("p")[8].innerHTML = translate.p8.sr;
                    
                        $("h3")[5].textContent = translate.h3_3.sr;
                        $("p")[9].textContent = translate.p9.sr;
                        $("h4")[3].textContent = translate.h4_2.sr;
                        $("h4")[4].textContent = translate.h4_3.sr;
                        $("h3")[6].textContent = translate.h3_4.sr;
                        $("h4")[5].textContent = translate.h4_4.sr;
                        $("h4")[7].textContent = translate.h4_6.sr;
                    break;
                }
            })
        }
    }
    catch(err){
        console.log("Error: " + err.message);
    }

})()



            
    



