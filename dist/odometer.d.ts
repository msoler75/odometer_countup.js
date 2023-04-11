import { CountUpPlugin } from 'node_modules/countup.js/src/countUp';
export interface OdometerOptions {
    duration?: number;
    delay?: number;
}
export declare class Odometer implements CountUpPlugin {
    version: '1.0';
    private options;
    private defaults;
    private cell_digits;
    constructor(options?: OdometerOptions);
    render(elem: HTMLElement | HTMLInputElement, formatted: string): void;
}
