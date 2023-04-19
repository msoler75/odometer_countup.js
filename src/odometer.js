var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var rAF = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
};
var Odometer = /** @class */ (function () {
    function Odometer(options) {
        this.version = '1.0';
        this.defaults = {
            duration: 0.8,
            lastDigitDelay: 0.25
        };
        this.cell_digits = null;
        this.options = __assign(__assign({}, this.defaults), options);
        this.cell_digits = null;
    }
    Odometer.prototype.render = function (elem, formatted) {
        // render DOM here
        var options = this.options;
        var createdNow = false;
        if (!this.cell_digits) {
            createdNow = true;
            // avoid adding more than once
            if (!document.querySelector('style[odometer]')) {
                // add styles for odometer numbers
                var style = document.createElement('style');
                style.setAttribute('odometer', 'odometer');
                style.innerHTML =
                    '.odometer-numbers{display:inline-flex;line-height:100%;overflow-y:hidden}.odometer-numbers>span{display:flex;flex-direction:column;justify-content:start;align-items:center;height:1em;will-change:transform;transform:translateY(0)}';
                document.head.appendChild(style);
            }
            // create wrapper
            elem.innerHTML = '<div class="odometer-numbers"></div>';
            // create array cell_digits information
            this.cell_digits = [];
        }
        //blank space
        var blank = '<span style="color:transparent">0</span>';
        var transitionDigit = "transform ".concat(options.duration, "s ease-out");
        // appearing new cell_digits
        for (var i = this.cell_digits.length; i < formatted.length; i++) {
            // create a container
            var container = document.createElement('span');
            container.style.transition = transitionDigit;
            // add a first transparent cell
            container.innerHTML = createdNow ? '' : blank;
            if (elem.firstChild)
                elem.firstChild.appendChild(container);
            // prepare data id cell
            this.cell_digits.push({
                container: container,
                current: undefined,
                position: createdNow ? 1 : 0,
                new: true
            });
        }
        function appendDigit(cell, newDigit) {
            cell.position--;
            cell.container.appendChild(newDigit);
            cell.lastTimeAdd = +new Date();
            // we need to stablish transition at first number, using timeout
            if (cell.new) {
                cell.new = false;
                rAF(function () {
                    cell.container.style.transform = "translateY(".concat(cell.position, "em)");
                });
            }
            else
                cell.container.style.transform = "translateY(".concat(cell.position, "em)");
        }
        function pushDigit(cell, newDigit) {
            // if there was another cell waiting to be added, we add it here
            if (cell.nextToAdd) {
                appendDigit(cell, cell.nextToAdd);
                clearTimeout(cell.lastTimer);
                cell.nextToAdd = null;
            }
            var now = +new Date();
            var delayTime = options.lastDigitDelay * 1000 - (now - cell.lastTimeAdd);
            // if we are in slow animation, we just add digit
            if (options.lastDigitDelay <= 0 ||
                now - cell.lastTimeAdd >= delayTime * 1.05) {
                appendDigit(cell, newDigit);
                cell.nextToAdd = null;
            }
            else {
                // if not, we delay the push
                cell.nextToAdd = newDigit;
                cell.lastTimer = setTimeout(function () {
                    appendDigit(cell, cell.nextToAdd);
                    cell.nextToAdd = null;
                }, options.duration * 1000);
            }
        }
        // we add all sequence cell_digits that are new in formatted number
        // or remove cells no more exist (we put blank cells)
        var len = Math.max(formatted.length, this.cell_digits.length);
        var _loop_1 = function () {
            // cell has changed
            ch = i < formatted.length ? formatted.charAt(i) : null;
            var cell = this_1.cell_digits[i];
            if (cell.current != ch) {
                cell.current = ch;
                newDigit = document.createElement('span');
                newDigit.innerHTML = ch === null ? blank : ch;
                // the last delay animation only if there is a minimum of 3 elements
                if (cell.container.children.length < 4) {
                    appendDigit(cell, newDigit);
                }
                else {
                    pushDigit(cell, newDigit);
                }
                clearTimeout(cell.timerClean);
                // when animation end, we can remove all extra animated cells
                cell.timerClean = setTimeout(function () {
                    cell.timerClean = null;
                    if (cell.container.children.length < 3)
                        return;
                    cell.container.style.transition = 'none'; // temporally clear animation transition
                    rAF(function () {
                        cell.position = -1;
                        // we remove all childs except last
                        while (cell.container.children.length > 1)
                            cell.container.removeChild(cell.container.firstChild);
                        //insert blank space (forcing width to avoid weird behaviour in comma)
                        var digitBlank = document.createElement('span');
                        digitBlank.innerHTML = blank;
                        cell.container.insertBefore(digitBlank, cell.container.firstChild);
                        // set scroll to last cell position
                        cell.container.style.transform = "translateY(".concat(cell.position, "em)");
                        rAF(function () {
                            cell.container.style.transition = transitionDigit; // restart animation transition
                        });
                    });
                }, ((options.duration || 0.8) + (options.duration || 0.25)) *
                    1000 +
                    2500); // 2.5 seconds after last update
            }
        };
        var this_1 = this, ch, newDigit;
        for (var i = 0; i < len; i++) {
            _loop_1();
        }
    };
    return Odometer;
}());
export { Odometer };
