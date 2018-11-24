function init() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var uri = url.searchParams.get("uri");
    var xhr = new XMLHttpRequest();

    var titre = document.getElementById("titreSerie");
    var resume = document.getElementById("resume");
    var titreResume = document.getElementById("titreResume");
    var lienPlusInfos = document.getElementById("lienPlusInfos");
    var typeOfSerie = document.getElementById("typeOfSerie");
    var dateDebut = document.getElementById("dateDebut");
    var nbSaison = document.getElementById("nbSaison");
    var tempsEpisode = document.getElementById("tempsEpisode");
    var imageSerie = document.getElementById("imageSerie");
    var diffusion = document.getElementById("diffusion");
    var production = document.getElementById("production");

    xhr.open("POST", "http://localhost:4000/getDataFromUri", true) ;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var json = JSON.parse(xhr.responseText);

            console.log(json);

            try{titre.innerHTML = json.ressourceName[0].name.value;}catch (e){}
            try{resume.innerHTML = json.abstract[0].abstract.value;}catch (e){}
            try{titreResume.innerHTML = "What is "+json.ressourceName[0].name.value + " ?";}catch (e){}
            try{lienPlusInfos.setAttribute("href",json.linkOfficialSeriePage[0].link.value);}catch (e){}
            try{typeOfSerie.innerHTML = json.serieTypeAccordingToLanguage[0].name.value;}catch (e){}
            try{dateDebut.innerHTML = "Serie started on "+json.StartDateFromSerie[0].date.value+" in "+json.OriginCountryFromSerie[0].name.value;}catch (e){}
            try{nbSaison.innerHTML = json.SaisonNumberFromSerie[0].number.value+" season(s) ("+json.EpisodeNumberFromSerie[0].number.value+" episodes)";}catch (e){}
            try{tempsEpisode.innerHTML = "Approximately "+json.Runtime[0].runtime.value +" min per episode";}catch (e){}
            try{
                var res = "";
                json.DiffusionChannel.forEach(function (item) {
                    res+="<a target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                });
                diffusion.innerHTML = "Broadcast channel(s) : "+res;
            }catch (e){}
            try{
                res = "";
                json.ProductionSociety.forEach(function (item) {
                    res+="<a target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                });
                production.innerHTML = "Production society : "+res;}catch (e){}

            imageSerie.setAttribute("src",json.LinkLogoFromSerie[0].url.value);

            var listeActeur = document.getElementById("listeActeur");
            var listeCreator = document.getElementById("listeCreator");
            var listeRealisator = document.getElementById("listeRealisator");
            var listeCompositor = document.getElementById("listeCompositor");


            try{
                json.ActorFromSerie.forEach(function (item) {
                    var newSubDiv = document.createElement("div");
                    newSubDiv.setAttribute("class","moto-widget-carousel-caption moto-widget-text");
                    //  newDiv.appendChild(newSubDiv);

                    var newP = document.createElement("p");
                    newP.setAttribute("class","moto-text_system_13");
                    newSubDiv.appendChild(newP);

                    var newSpan = document.createElement("span");
                    newSpan.setAttribute("class","moto-color5_5");
                    newSpan.innerHTML = "<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                    newP.appendChild(newSpan);

                    var newP3 = document.createElement("p");
                    newP3.setAttribute("class","moto-text_system_9");
                    newSubDiv.appendChild(newP3);

                    var newSpan2 = document.createElement("span");
                    newSpan2.setAttribute("class","moto-color1_3");
                    newSpan2.innerHTML = (item.abstract.value).substring(0,100)+"..."+"<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">Read more.</a>  ";
                    newP3.appendChild(newSpan2);


                    listeActeur.appendChild(newSubDiv);
                });

            }catch (e){}

            try{
                json.CreatorFromSerie.forEach(function (item) {
                    var newSubDiv = document.createElement("div");
                    newSubDiv.setAttribute("class","moto-widget-carousel-caption moto-widget-text");
                    //  newDiv.appendChild(newSubDiv);

                    var newP = document.createElement("p");
                    newP.setAttribute("class","moto-text_system_13");
                    newSubDiv.appendChild(newP);

                    var newSpan = document.createElement("span");
                    newSpan.setAttribute("class","moto-color5_5");
                    newSpan.innerHTML = "<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                    newP.appendChild(newSpan);

                    var newP3 = document.createElement("p");
                    newP3.setAttribute("class","moto-text_system_9");
                    newSubDiv.appendChild(newP3);

                    var newSpan2 = document.createElement("span");
                    newSpan2.setAttribute("class","moto-color1_3");
                    newSpan2.innerHTML = (item.abstract.value).substring(0,100)+"..."+"<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">Read more.</a>  ";
                    newP3.appendChild(newSpan2);


                    listeCreator.appendChild(newSubDiv);
                });

            }catch (e){}

            try{
                json.RealisatorFromSerie.forEach(function (item) {
                    var newSubDiv = document.createElement("div");
                    newSubDiv.setAttribute("class","moto-widget-carousel-caption moto-widget-text");
                    //  newDiv.appendChild(newSubDiv);

                    var newP = document.createElement("p");
                    newP.setAttribute("class","moto-text_system_13");
                    newSubDiv.appendChild(newP);

                    var newSpan = document.createElement("span");
                    newSpan.setAttribute("class","moto-color5_5");
                    newSpan.innerHTML = "<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                    newP.appendChild(newSpan);

                    var newP3 = document.createElement("p");
                    newP3.setAttribute("class","moto-text_system_9");
                    newSubDiv.appendChild(newP3);

                    var newSpan2 = document.createElement("span");
                    newSpan2.setAttribute("class","moto-color1_3");
                    newSpan2.innerHTML = (item.abstract.value).substring(0,100)+"..."+"<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">Read more.</a>  ";
                    newP3.appendChild(newSpan2);


                    listeRealisator.appendChild(newSubDiv);
                });

            }catch (e){}

            try{
                json.SerieMusicCompositor.forEach(function (item) {
                    var newSubDiv = document.createElement("div");
                    newSubDiv.setAttribute("class","moto-widget-carousel-caption moto-widget-text");
                    //  newDiv.appendChild(newSubDiv);

                    var newP = document.createElement("p");
                    newP.setAttribute("class","moto-text_system_13");
                    newSubDiv.appendChild(newP);

                    var newSpan = document.createElement("span");
                    newSpan.setAttribute("class","moto-color5_5");
                    newSpan.innerHTML = "<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">"+item.name.value+"</a>  ";
                    newP.appendChild(newSpan);

                    var newP3 = document.createElement("p");
                    newP3.setAttribute("class","moto-text_system_9");
                    newSubDiv.appendChild(newP3);

                    var newSpan2 = document.createElement("span");
                    newSpan2.setAttribute("class","moto-color1_3");
                    newSpan2.innerHTML ="<a style='color: #ffffff;' target='_blank' href="+item.wikilink.value+">Read more.</a> ";
                    newP3.appendChild(newSpan2);


                    listeCompositor.appendChild(newSubDiv);
                });

            }catch (e){}

        }
    } ;
    var data = JSON.stringify({"data": uri});
    xhr.send(data);

}