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
    location.reload(); 
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
