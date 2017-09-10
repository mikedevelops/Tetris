import Pixel from './Pixel';
import Row from './Row';

export default interface State extends Array<Pixel> {
    [index: number]: Pixel
};