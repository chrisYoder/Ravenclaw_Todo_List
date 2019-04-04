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

$('.fa-calendar-plus').on('click', function(){
  $('#todo').hide();
  $('#dates').show();
});

$('.fa-list').on('click', function(){
  $('#dates').hide();
  $('#todo').show();
});
//new item function
const importantDates = [];

$("#todoInput").on('keypress', function(e){
  if(e.keyCode === 13){
    let value = $(this).val();
    let words = value.split(' ');
    let styledTodo = [];
    tags(words, styledTodo);
    $('#todoList').append(`<li><span><i class="fa fa-trash"></i></span> ${styledTodo.join(' ')} </li>`);
    //set local storage with stuff to save
    $(this).val('');
  }
});

$('#datesInput').on('keypress', function(e){
  if(e.keyCode === 13){
    let value = $(this).val();
    let words = value.split(' ');
    let date = words[0];
    let formattedDate = new Date(date).toLocaleDateString();
    let time = words[1];
    let event = words.slice(2, words.length);
    let styledEvent = [];
    
    tags(event, styledEvent);
    $('#datesList').append(`<li><span><i class="fa fa-trash"></i></span> ${date} | ${time} | ${styledEvent.join(' ')}</li>`);
    importantDates.push([formattedDate,  `<li><span><i class="fa fa-trash"></i></span>${time} | ${styledEvent.join(' ')}</li>`]);
    console.log(importantDates);
    
    $(this).val('');
  }
});



const tags = (arr, rArr) => {
  // search array for # and style it in a particular way
    arr.forEach(e => {
      if(e[0] === '#') {
        e = `<i class='tag'>${e}</i>`;
        rArr.push(e);
      }
      else{
        rArr.push(e);
      }
    });
    return rArr;
};


//recurring dates
//format ! + d for daily || w for weekly || m for monthly || y for yearly


//import date to To-do list on the date that it is due
  //ie: something due on 4.5.19 will show up in the to-do list on 4.5.19
  
const date2todo = () => {
  if(importantDates[0] === new Date().toLocaleDateString()){
    console.log('The comparison worked');
  }
  
};
  //I need to loop through the Important Dates LI 
  //check to see if the first element == today's date
    //if true then add time and event to to-do
  // this might be better when I can add a backend but for now i will add it to an array
  
$('window').on('load', function(){
  if(localStorage.hasOwnProperty('importantDates') === false && localStorage.hasOwnProperty('todo') === false){
    localStorage.setItem(importantDates, []);)
    localStorage.setItem(todos, []);
  }
})
