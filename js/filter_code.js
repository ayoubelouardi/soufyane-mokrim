/* Filter - Isotope */
const gridCheck = document.querySelector('.grid');

if (gridCheck !== null) { 
    // init Isotope
    var iso = new Isotope( '.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) )  {
            return;
        }
        var filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        iso.arrange({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup( buttonGroup );
    }
    
    function radioButtonGroup( buttonGroup ) {
        buttonGroup.addEventListener( 'click', function( event ) {
            // only work with buttons
            if ( !matchesSelector( event.target, 'button' ) )  {
                return;
            }
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
    }
}
function setActive(button) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.filter');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
  }