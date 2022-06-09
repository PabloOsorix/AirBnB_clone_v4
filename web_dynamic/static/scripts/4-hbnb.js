/*async function fetchUserInf(user_id) {
fetch(`http://localhost:5001/api/v1/users/${user_id}`,
{
  method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  });
  const info = await response.json
  return info
}*/


// POINT 2
function removeId(array, value) {
  var index = 0;
  while (index < array.length) {
    if (array[index] === value) {
      array.splice(index, 1);
    } else {
      ++index;
    }
  }
  return array;
}
var amenities = [];
var select_amt = [];
var counter = 0;
const checkboxes = document.querySelectorAll("input[name=check]").forEach(function(element){
element.addEventListener('click', function() {
  var id = element.getAttribute("data-id");
  var name = element.getAttribute("data-name");
  if (this.checked){
    amenities.push(id);
    select_amt.push(` ${name}`);
    document.getElementById("select_amt").textContent = select_amt;
  } else {
    name = ` ${name}`;
    removeId(amenities, id);
    removeId(select_amt, name);
    document.getElementById("select_amt").textContent = select_amt;
  }
    });
});

// POINT 3
const div_circle = document.querySelector("div#api_status");
fetch("http://localhost:5001/api/v1/status").then((response) => {
  if (response.status == 200) {
      div_circle.className += " available";
  } else {
      div_circle.className.replace(" available", "");
  }
});


// POINT 4
const section_places = document.querySelector("section.places");
fetch("http://localhost:5001/api/v1/places_search/", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then( json => {
    json.forEach( place => {
    // Create tag aticle and add to a tag <section class="places">
    const article = document.createElement("article");
    // Create div tag and add like a child to a article tag.
    const div = document.createElement("div"); div.className = "title_box";
    // Create h2 tag and add like a child inside tag div.
    const h2 = document.createElement("h2"); h2.textContent = place.name;
    // Create a sub div tag (tag div inside <div class="title_box") add like child
    const subDiv = document.createElement("div"); 
    subDiv.className = "price_by_night"; subDiv.textContent = "$" + place.price_by_night

    /* Create another div inside article tag it's <div class="information">
      it have three div inside it, divGuests, divRooms and divBath.*/
    const divInf = document.createElement("div"); divInf.className = "information";
    // Create div child of class information, it's <div class="max_guest">

        const divGuests = document.createElement("div");
        divGuests.className = "max_guest";  
        if (place.max_guest != 1 ) {
          divGuests.textContent = place.max_guest + " Guests";
          //Guests in case of more than 1 guest
        } else { 
          divGuests.textContent = place.max_guest + " Guest";
          //Guest in case of just one guest.
        }
        // Create div child of class information, it's <div class="number_rooms">
        const divRooms = document.createElement("div");
        divRooms.className = "number_rooms";
        if (place.number_rooms != 1) {
          divRooms.textContent = place.number_rooms + " Bedrooms";
        } else {
          divRooms.textContent = place.number_rooms + " Bedroom";
        }

        // Create div child of class information, it's <div class="number_bathrooms">
        const divBath = document.createElement("div");
        divBath.className = "number_bathrooms";
        if (place.number_bathrooms != 1) {
          divBath.textContent = place.number_bathrooms + " Bathrooms";
        } else {
          divBath.textContent = place.number_bathrooms + " Bathroom";
        }

    /* Create tag div that it's child of article, its class is User, it
      contains a tag <b>*/
    const divUser = document.createElement("div");
    divUser.className = "User";
    const owner = document.createElement("b");
    owner.textContent = "Owner: ";
    /* Create tag div that it's child of article, its class is Description, it
        contains the description of a place.*/
    const divDescrip = document.createElement("div"); 
    divDescrip.className = "description";
    if (place.description != null) {
      divDescrip.textContent = place.description;
    } else {
      divDescrip.textContent = "None";
    }

    div.appendChild(h2);
    div.appendChild(subDiv);
    divInf.appendChild(divGuests);
    divInf.appendChild(divBath);
    divInf.appendChild(divRooms);
    divUser.appendChild(owner);

    article.appendChild(div);
    article.appendChild(divInf);
    article.appendChild(divUser);
    article.appendChild(divDescrip);
    section_places.appendChild(article);
    });
});


//POINT 5
async function getPlaces () {
    const response = await window.fetch('http://localhost:5001/api/v1/places_search/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
})
};
button = document.querySelector("button");
button.addEventListener('click', async () => {
    info = { amenities: checkAmenities };
    placesSection.innerHTML = '';
    getPlaces(info);
});
