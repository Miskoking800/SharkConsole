var button = document.getElementsByClassName('button')[0];
var input = document.getElementsByClassName('input')[0];
var output = document.getElementById('output');

button.addEventListener('click', function() {
    output.innerHTML = input.value;
    input.value = '';
});
