import * as Marker from '..';
import * as Lab from '@hapi/lab';


const { expect } = Lab.types;


Marker('test');

expect.type<symbol>(Marker('test'));

expect.error(Marker());
expect.error(Marker('a', 'b'));
expect.error(Marker(123));
