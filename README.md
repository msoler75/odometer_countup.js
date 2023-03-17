# 🔌 Plugin for countup.js

From countup.js version 2.6

Visit [countUp](https://github.com/inorganik/countUp.js) for instructions on using plugins.

## Parameters

- **duration**: the time in seconds to transition to number
- **delay**: experimental delaying last digit in sequence

## Typescript

```
interface OdometerOptions {
  duration?: number // barrel animation in seconds,
  delay?: number // delay last digit in animation, in seconds, 0 to deactivate
}

export class Odometer implements CountUpPlugin;
```

## Example

```
import { CountUp } from "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.6.0/countUp.min.js";

import { Odometer } from "https://codepen.io/msoler75/pen/YzOvZVL.js";

const counter = new CountUp("counter", 99999, {
  plugin: new Odometer({ duration: 2.3, delay: 0 }),
  duration: 3.0
});
counter.start();

```

View [CodePen](https://codepen.io/msoler75/pen/NWLzNYj)

