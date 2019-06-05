import {Spacecraft, Containnership} from './base-ships'
import {MillenniumFalcon} from './starfighter'

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="));

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHypersapce()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHypersapce()

let goodForTheJob = (ship: Containnership) => ship.cargoContainers > 2

console.log(`is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);
