// function fade(){
//     $("#mimi").fadeToggle(5000);
// }

// function changeColor(){
//     $("#div1").css('background-color', 'red');
// }

// function showDiv(){
//     $("#div1").toggle(function(){
//         $("#div2").toggle();
//     })
// }
// function changeText(){
//     $("#check").toggle(function(){
//         $("#aboutText").toggle();
//     })
// }


$("#card-grid").flip({
    trigger: "manual"
  });
  
  $("#flip").toggle(function() {
    $(this)
      .closest("#card-grid")
      .flip(true);
  });
  
  $("#unflip").toggle(function() {
    $(this)
      .closest("#card-grid")
      .flip(false);
  });
  
  