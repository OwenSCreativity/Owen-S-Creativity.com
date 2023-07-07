
var myVar;

function oc_index_loader_func () {
  myVar = setTimeout(oc_index_loader_show, 5000);
}
function oc_index_loader_show() {
  document.getElementById("oc-index-loader").style.display = "none";
  document.getElementById("oc-hidden-bc-img").style.display = "none";
  document.getElementById("oc-txt-img-upper-right").style.display = "none";
  document.getElementById("oc-txt-img-upright").style.display = "none";
  document.getElementById("hidden-div3").style.display = "block";

}



  function openNav() {
    document.getElementById("myoc-side-nav-con").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.padding = "15px";
    document.getElementById("oc-big-hidden").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("myoc-side-nav-con").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("oc-big-hidden").style.display = "inline";
    document.getElementById("main").style.padding = "0px";

  }


  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function oc_toggle() {
  var x = document.getElementById("main");
  if (x.style.backgroundColor === "black") {
    x.style.backgroundColor = "white";
  } else {
    x.style.backgroundColor = "black";
  }
  var b = document.getElementById("oc-nav-dm");
  if (b.style.backgroundColor === "white") {
    b.style.backgroundColor = "black";
  } else {
    b.style.backgroundColor = "white";
  }


}