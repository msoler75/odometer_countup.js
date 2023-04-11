import { CountUpPlugin } from 'countup.js';

export interface OdometerOptions {
    duration?: number;
    delay?: number;
}
export declare class Odometer implements CountUpPlugin {
    version: string;
    constructor(options?: OdometerOptions);
    render(elem: HTMLElement | HTMLInputElement, formatted: string): void;
}
