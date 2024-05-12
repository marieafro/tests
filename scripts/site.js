var introScreen = document.querySelector( '.intro' );

function hideIntroScreen( ) {
    introScreen.style.opacity = 0;

    setTimeout( function( ) {
        introScreen.remove( );
    }, 500 );
}
introScreen.addEventListener( 'click', hideIntroScreen );


var countryLinks = document.querySelectorAll( '.countries p span' );
var countryFlags = document.querySelectorAll( '.flags img' );

function showFlag( event ) {
    var countryLink = event.currentTarget;
    var countryName = countryLink.attributes.class.value;
    var countryFlag = document.querySelector( `.flags .${ countryName }` );

    countryFlag.style.display = 'block';
}
function hideFlags( ) {
    countryFlags.forEach( function( countryFlag ) {
        countryFlag.style.display = '';
    })
}

countryLinks.forEach( function( countryLink ) {
    countryLink.addEventListener( 'mouseenter', showFlag );
    countryLink.addEventListener( 'mouseleave', hideFlags );
} );