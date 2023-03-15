import { CountUp } from 'countUp/dist/countUp.min.js';
import { Odometer } from '../dist/odometer.min.js';

window.onload = function() {
  var countUp = new CountUp('#count-here', 2000, {
    plugin: Odometer
  });
  countUp.start();
}