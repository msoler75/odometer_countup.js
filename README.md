# 🔌 Plugin for countup.js

Visit [countUp](https://github.com/inorganik/countUp.js) for instructions.

## Simple example

View [CodePen](https://codepen.io/msoler75/pen/NWLzNYj)

```
import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.6.0/countUp.js'
import { Odometer } from 'https://github.com/msoler75/odometer_countup.js/tree/master/dist/odometer.min.js'

const counter = new CountUp("counter", 999999, {
   plugin: new Odometer(/*{duration: .9}*/),
});
counter.start();
```

