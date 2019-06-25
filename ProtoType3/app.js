//Call Back Functions
function google(stateWrapper, ready) {
    window.open("https://google.com");
    ready();
}
function bing(stateWrapper, ready) {
    window.open("https://bing.com");
    ready();
}

function reset(stateWrapper,ready){
    window.location = window.location; 
    ready();
}

function yeetcar1(stateWrapper,ready){
    window.open("https://www.subaru.ca/WebPage.aspx?WebSiteID=282&WebPageID=22413&Range=BRZ&ModelYear=2019");
    window.location = window.location;
    ready();
}

function yeetcar2(stateWrapper,ready){
    window.open("https://www.subaru.ca/WebPage.aspx?WebSiteID=282&WebPageID=21832&Range=Ascent&ModelYear=2019");
    window.location = window.location;
    ready();
}

function yeetcar3(stateWrapper,ready){
    window.open("https://www.subaru.ca/WebPage.aspx?WebSiteID=282&WebPageID=22118&Range=Impreza&ModelYear=2019");
    window.location = window.location;
    ready();
}

function yeetcar4(stateWrapper,ready){
    window.open("https://www.subaru.ca/WebPage.aspx?WebSiteID=282&WebPageID=22261&Range=Forester&ModelYear=2019");
    window.location = window.location;
    ready();
}

function MLChoice(stateWrapper,ready){
    window.open("https://i.kym-cdn.com/entries/icons/original/000/028/526/honklhonk.jpg");
    window.location = window.location;
    ready();
}
// Other typa Functions
var rollbackTo = false;
var originalState = false;
function storeState(stateWrapper, ready) {
    rollbackTo = stateWrapper.current;
    console.log("storeState called: ",rollbackTo);
    ready();
}
function rollback(stateWrapper, ready) {
    console.log("rollback called: ", rollbackTo, originalState);
    console.log("answers at the time of user input: ", stateWrapper.answers);
    if(rollbackTo!=false) {
        if(originalState==false) {
            originalState = stateWrapper.current.next;
                console.log('stored original state');
        }
        stateWrapper.current.next = rollbackTo;
        console.log('changed current.next to rollbackTo');
    }
    ready();
}
function restore(stateWrapper, ready) {
    if(originalState != false) {
        stateWrapper.current.next = originalState;
        console.log('changed current.next to originalState');
    }
    ready();
}

jQuery(function($){
    convForm = $('#chat').convform({selectInputStyle: 'disable'});
    console.log(convForm);
});
