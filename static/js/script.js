function ageDays() {
    let birthYear = prompt('What year were you born?');
    let visitorDays = (2020 - birthYear) * 365;
    let h2 = document.createElement('h2');
    let visitorResult = document.createTextNode('You are ' + visitorDays + ' Days old');
    h2.setAttribute('id', 'ageDays');
    h2.appendChild(visitorResult);
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset() {
    document.getElementById('ageDays').remove();
}