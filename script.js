$(document).ready(() => {
  // Using Jquery and the dayjs API to add the current date to the header of the page
  const currentDayEl = $('#currentDay');
  currentDayEl.text(dayjs().format('MMMM DD, YYYY'));
  // hourTracker function that loops through each time-block element and adds the class based on the
  // current hour.
  const hourTracker = () => {
    let currentHour = dayjs().hour();
    $('.time-block').each(function() {
      let timeBlockHour = parseInt($(this).attr('id').split('hour')[1])
      
      if (timeBlockHour === currentHour) {
        $(this).addClass('present');
        $(this).removeClass('future');
        $(this).removeClass('past');
      }
      else if (timeBlockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('future');
        $(this).removeClass('present');
      }
      else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      }
    })    
  }
const init = () => {
  for (let i= 8; i <= 17; i++) {
    $('#hour' + i + ' .description').val(localStorage.getItem('hour' + i));
  }
}


  $('.saveBtn').on('click', function () {
    let task = $(this).siblings('.description').val();
    let timeBlock = $(this).parent().attr('id');
    localStorage.setItem(timeBlock,task);
  }) 



  hourTracker();
  init();
  
})


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
