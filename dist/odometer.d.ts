import { CountUpPlugin } from 'countup.js';
export interface OdometerOptions {
    duration?: number;
    lastDigitDelay?: number;
}
export declare class Odometer implements CountUpPlugin {
    version: string;
    private options;
    private defaults;
    private cell_digits;
    constructor(options?: OdometerOptions);
    render(elem: HTMLElement | HTMLInputElement, formatted: string): void;
}
