// close the toggle menu if user clicks outside of the menu

$(document).click(function(event) {
    if(
      $('.toggle > input').is(':checked') &&
      !$(event.target).parents('.toggle').is('.toggle')
    ) {
      $('.toggle > input').prop('checked', false);
    }
  })