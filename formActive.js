var previousClickedId;

$(document).ready(function(){
  $(".chotu").click(colorThis)
});

function colorThis(){
  $(this).addClass('active').innerHTML
}

function getID(clicked_id){
    var clickedID = "#"+clicked_id;    
    var removeItem = previousClickedId;  
    $(removeItem).removeClass('active');
    setAnchorTagActive(clickedID);
    previousClickedId = clickedID;
}

function setAnchorTagActive(clickedID){
  var cont = document.querySelector(clickedID);
  var parent = cont.parentElement.parentElement.id;
  var element = document.getElementById(parent);
  element.children[0].classList.add('active');
  setAnotherTagInactive(parent);
  //this parent is sending wrong value which is not updated. 
}

function setAnotherTagInactive(parent){
  if(parent=="subMenu"){
    var ele = document.getElementById("pet");
    ele.classList.remove('active');
  }
  else if(parent=="subMenu1"){
    var ele = document.getElementById("fruits");
    ele.classList.remove('active');
  }
  else{
    
  }
}


