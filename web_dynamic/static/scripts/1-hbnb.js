document.addEventListener("DOMContentLoaded", () => {
  alert("DOM ready!");
});
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


// const checkboxes = document.querySelectorAll("input[name=check]").forEach(function(value){
//   value.addEventListener('click', function() {
//     if (this.checked){
//       var data_name = this.value.getAttribute("data-name");
//       var id = this.value.getAttribute("data-id");
//       amenities[data_name] = [{"id": id}];
//       window.alert(amenities[data_name]);
//     } else {
//       if (data_name == amenities.name){
//         delete amenities[data_name];
//         window.alert(amenities[data_name]);
//     }
//   }
//   })
// });


//var amenities = {}
//const checkboxes = document.querySelectorAll("input[name=check]");
//checkboxes.forEach((value) =>
//value.addEventListener('change', function() {
//  var id = value.getAttribute("data-id")
//  var data_name = value.getAttribute("data-name")
//  if (this.checked) {
//    amenities[data_name] = [{"id": id}];
//    window.alert(amenities.getAttribute(data_name));
//  } else {
//      if (data_name == amenities.name){
//        delete amenities[data_name];
//        window.alert(amenities.id);
//    }
//  }
//}));
//