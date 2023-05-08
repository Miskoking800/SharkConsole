
# SharkConsole

SharkConsole is a JavaScript Project that allows users to create a simple console with custom commands

## Installation

Create a html file like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheat Menu</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Miskoking800/SharkConsole@main/style.css">
    <script src="https://cdn.jsdelivr.net/gh/Miskoking800/SharkConsole@main/script.js"></script>
</head>
<body>
    <div class="menu">
        <div class="output" id="output"></div>
        <div class="tools">
          <hr class="hr">
          <input type="text" class="input">
          <button type="button" class="button" onclick="executeCommand()">Submit</button>
        </div>
      </div>
    
</body>

<script>
    function executeCommand() {
        var input = document.getElementsByClassName('input')[0];
        var output = document.getElementById('output');
        var command = input.value.trim().toLowerCase();
        input.value = '';
  
        if (command === 'pause sound') {
          pauseSound();
          output.innerHTML += '<br>Sound paused.';
        } else if (command === 'play sound') {
          playSound();
          output.innerHTML += '<br>Sound played.';
        } else if (command === 'alert nice') {
          window.alert("Nice!");
          output.innerHTML += '<br>Alerted';
        } else {
            output.innerHTML += '<br>Unrecognized command: ' + command;
        }
  
        output.lastElementChild.scrollIntoView({ behavior: "smooth" });
      }
  
      function pauseSound() {
        // Functionality for pausing sound
        console.log('Sound paused');
      }
  
      function playSound() {
        // Functionality for playing sound
        console.log('Sound played');
      }

      
      

    </script>

```

As you can see you can add more functions to the console.

Of course if you want you can remove the 

```link
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Miskoking800/SharkConsole@main/style.css"> 

```

And style as you want

## License

This project is licensed under the MIT License. See the LICENSE file for details.

