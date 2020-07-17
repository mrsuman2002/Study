/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }

});
}

/*class 5 script*/
function class5() {
    var x = document.getElementById("class5");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  }


/*class 6 script*/
function class6() {
    var y = document.getElementById("class6");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }

  }

  /*class 6 script*/
function class7() {
    var z = document.getElementById("class7");
    if (z.style.display === "block") {
      z.style.display = "none";
    } else {
      z.style.display = "block";
      
    }
  }

  function removeHTML()
  {
  document.getElementById('classes').innerHTML = '';
  }