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
