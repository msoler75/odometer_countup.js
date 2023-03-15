# 🔌 Plugin for countup.js

Visit [countUp](https://github.com/inorganik/countUp.js) for instructions.

## Simple example

index.html: 
```
<!DOCTYPE html>
<html>
  <head> ... </head>
  <body>
    <div id="count-here"></div>
    <script src="main.js"></script>
  </body>
</html>
```

main.js:
```
import { CountUp } from 'countUp.js';
import { Odometer } from 'odometer_countUp';

window.onload = function() {
  var countUp = new CountUp('#count-here', 2000, {
    plugin: Odometer
  });
  countUp.start();
}
```
