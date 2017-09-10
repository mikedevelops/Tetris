import Pixel from './Pixel';

export default interface Row extends Array<any> {
    [index: number]: Pixel
}