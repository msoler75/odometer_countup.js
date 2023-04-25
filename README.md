# 🔌 Plugin for countup.js

From countup.js version 2.6

Visit [countUp](https://github.com/inorganik/countUp.js) for instructions on using plugins.

## Parameters

- **duration**: the time in seconds to transition to number
- **lastDigitDelay**: experimental delaying last digit in sequence

## Typescript

```
interface OdometerOptions {
  duration?: number // barrel animation in seconds,
  lastDigitDelay?: number // delay last digit in animation, in seconds, 0 to deactivate
}

export class Odometer implements CountUpPlugin;
```

## Example

```
import { CountUp } from 'countup.js';

import { Odometer } from 'odometer_countup';

const counter = new CountUp("counter", 99999, {
  plugin: new Odometer({ duration: 2.3, lastDigitDelay: 0 }),
  duration: 3.0
});
counter.start();

```

View [CodePen](https://codepen.io/msoler75/pen/NWLzNYj)

