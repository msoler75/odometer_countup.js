import { CountUp} from 'countup.js';

import {Odometer, OdometerOptions} from './src/odometer'

const pluginOptions:OdometerOptions = {
    duration: .7,
    lastDigitDelay: 0
}

const counter = new CountUp('counter', 99999, {
  plugin: new Odometer(pluginOptions),
  duration: 2.0
})
counter.start()
