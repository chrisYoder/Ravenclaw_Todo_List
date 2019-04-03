/*strike through specific todos*/

$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//listen for clicks on x

$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

//new item function

$("input[type='text']").on('keypress', function(e){
  if(e.keyCode === 13){
    let value = $(this).val();
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${value} </li>`);
    $(this).val('');
  }
});