var cib = document.getElementById("section1");
var cic = document.getElementById("section2");

cic.classList.add("hide");

var cicbtn = document.getElementById("cic-btn").addEventListener("click", () => {

  cib.classList.remove("hide");
  cic.classList.remove("hide");
  cib.classList.add("hide");

});

var cibbtn = document.getElementById("cib-btn").addEventListener("click", () => {

  cib.classList.remove("hide");
  cic.classList.remove("hide");
  cic.classList.add("hide");

});;


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector("#myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("#myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector(".input2");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}