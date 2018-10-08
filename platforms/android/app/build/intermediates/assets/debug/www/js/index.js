function onLoad() {
    document.addEventListener("deviceready", deviceReady, false);
}


/*
 onclick='setGoogleSearch()'
 onchange="dateChange()"
 onclick="searchButtonClick()"
*/

function deviceReady() {
    // navigator.app.loadUrl('', { openExternal:true });
    
    console.log("deviceReady");

    var inAppBrowserRef = window.open('https://hopeprisonministries.org/', '_blank', 'location=no,zoom=no,toolbar=no');



}

