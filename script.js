$(document).ready(() => {
  // Using Jquery and the dayjs API to add the current date to the header of the page
  const currentDayEl = $('#currentDay');
  currentDayEl.text(dayjs().format('MMMM DD, YYYY'));
  // hourTracker function that loops through each time-block element and adds the class based on the
  // current hour.
  const hourTracker = () => {
    let currentHour = dayjs().hour();
    $('.time-block').each(function() {
      let timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      
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
  // Init function to get tasks from local storage and set values
  const init = () => {
    for (let i= 8; i <= 17; i++) {
      $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
    }
  }
  // Event listener for the save button to store element to local storage
  $('.saveBtn').on('click', function () {
    let task = $(this).siblings('.description').val();
    let timeBlock = $(this).parent().attr('id');
    localStorage.setItem(timeBlock,task);
    $('.saved-message').text("Saved to local storage ✅");
    setTimeout(hide,2000);
  })
  // Hide function to hide the saved message after 2 seconds
  const hide = () => {
    $(".saved-message").text("");
  }
  // Clear task list button
  $('.clear-button').on('click', function() {
    for (let i= 8; i <= 17; i++) {
      let timeBlock = 'hour-' + i;
      localStorage.removeItem(timeBlock);
      $('#' + timeBlock + ' .description').val('');
    }
  })

  hourTracker();
  init();
  
})

