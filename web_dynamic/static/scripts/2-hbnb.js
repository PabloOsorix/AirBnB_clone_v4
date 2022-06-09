document.addEventListener("DOMContentLoaded", () => {
    alert("DOM ready!");
});




var div_circle = document.getElementById("api_status");
var response = await fetch("http://172.26.248.241:5001/api/v1/status");

if (response.status == 200) {
  div_circle.classList.add("available");
} else {
 div_circle.style.backgroundColor = "gray";
}

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
var select_amt = []
var counter = 0;
const checkboxes = document.querySelectorAll("input[name=check]").forEach(function(element){
  element.addEventListener('click', function() {
    var id = element.getAttribute("data-id")
    var name = element.getAttribute("data-name")
    if (this.checked){
      amenities.push(id)
      select_amt.push(name)
      window.alert("It's check " + amenities)
      document.getElementById("select_amt").textContent = select_amt
    } else {
      removeId(amenities, id)
      removeId(select_amt, name)
      window.alert(amenities)
      document.getElementById("select_amt").textContent = select_amt
    }
  });
});
