/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

$(document).ready(function () {
      // Get the URL
      var url = window.location.href.split('/').pop();

      if (url === '') {
        url = '/';
      }

      // Check the href of each link in the sidebar
      $('.admin-sidebar-content a').each(function () {
        if (url === $(this).attr('href')) {
          // If the href matches the current URL set it as active
          $(this).parents('li').addClass('active');
        }
      });
    });

    // Tab Panes
    // $('.admin-panes').each(function() {
    //   $(this).children('div').hide();
    //   $(this).children('.admin-pane:first').show();
    //   $(this).parent().find('li:first').addClass('active');
    //   $(this).parents('.admin-submenu-container').find('h1').text($('.active').find('a').text());
    // });

    // $(document).on('click', '.admin-submenu a', function(e) {
    //   e.preventDefault();

    //   var nth = $(this).parent().index() + 1;
    //   var target = $(this).parents('.admin-submenu-container').find('.admin-pane:nth-child(' + nth + ')');

    //   $(this).parents('.admin-submenu-container').find('.active').removeClass('active');
    //   $(this).parent().addClass('active');

    //   $(this).parents('.admin-submenu-container').find('.admin-panes').children().hide();
    //   $(this).parents('.admin-submenu-container').find('h1').text($(this).text());
    //   target.show();
    // });
