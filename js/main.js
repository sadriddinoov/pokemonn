var slicedMovies = pokemons.slice(0, 148);

var ellist = document.querySelector(".list")


function renderMovies(array, wrapper) {

    wrapper.innerHTML = null
    
    // for (let i = 0; i < array.length; i++) {

        // // h4
        // var newh4 = document.createElement("h4");
        
        // newh4.textContent = array[i].Title;
    
        // // div
    
        // var newWrapperDiv = document.createElement("div");
    
        // newWrapperDiv.classList = "card-body";
    
        // newWrapperDiv.appendChild(newh4);
    
        // // img
    
        // var newImg = document.createElement("img");
    
        // newImg.classList = "card-img-top mb-2";
    
        // newImg.src = "https://upload.wikimedia.org/wikipedia/ru/e/eb/3_spider-mans_%28No_way_home%29.jpg"
    
    
        // // div
    
        // var newDivCard = document.createElement("div");
    
        // newDivCard.classList = "card";
    
        // newDivCard.appendChild(newImg);
    
        // newDivCard.appendChild(newWrapperDiv);
    
        // // cardWrapper
    
        // var newCardWrapper = document.createElement("div");
    
        // newCardWrapper.classList = "col-6 mb-3";
    
        // newCardWrapper.appendChild(newDivCard);
    
        // wrapper.appendChild(newCardWrapper)
    
        // console.log(newCardWrapper);
    // }

    for (var item of array) {
         // h4
         var pweight = document.createElement("h4");
        
         pweight.textContent = item.weight;

         pweight.classList = "mb-3"
     
         // div
     
         var pheight = document.createElement("h4");
     
         pheight.textContent = item.height;

         pweight.classList = "pb-2"
     
     
         // img
     
         var newImg = document.createElement("img");
     
         newImg.classList = "mt-2 mb-2";
     
         newImg.src =`http://www.serebii.net/pokemongo/pokemon/${item.num}.png`
     
     
         // div
     
         var newh3 = document.createElement("h2");
     
         newh3.textContent = item.name
     
        //apend-child

        var apendchild = document.createElement("li")

        apendchild.classList = "col-3 bg-info text-center item"

        apendchild.appendChild(newh3);

        apendchild.appendChild(newImg);

        apendchild.appendChild(pweight);

        apendchild.appendChild(pheight);

   
    
    ellist.appendChild(apendchild)
    }

    ellist.classList = "container"
    
}

renderMovies(slicedMovies, ellist)

