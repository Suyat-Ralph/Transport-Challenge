
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
    window.open("https://www.jeep.ca/en/wrangler");
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

jQuery(function($){
    var count = 0;
    var convForm = $('#chat').convform({eventList:{onInputSubmit: function(convState, ready) {
        console.log('input is being submitted...');
        //here you send the response to your API, get the results and build the next question
        if(convState.current.answer.value==='end') {
            convState.current.next = false;
            //emulating random response time (100-600ms)
            setTimeout(ready, Math.random()*500+100);
        } else {
            if(Array.isArray(convState.current.answer)) var answer = convState.current.answer.join(', ');
            else var answer = convState.current.answer.text;
            convState.current.next = convState.newState({
                type: 'select',
                noAnswer: true,
                name: 'dynamic-question-'+count,
                questions: ['This question state was built on your previous answer (you answered: '+answer+') and doesnt expect an answer'],
            });
            convState.current.next.next = convState.newState({
                type: 'select',
                name: 'dynamic-question-'+count,
                questions: ['This question state was built on your previous answer (you answered: '+answer+')'],
                answers: [
                    {text: 'Answer 1', value: '1'},
                    {text: 'Answer 2', value: '2'},
                    {text: 'END', value: 'end'}
                ]
            });
            //emulating random response time (100-600ms)
            setTimeout(ready, Math.random()*500+100);
        }
        count++;
    }}});
});

