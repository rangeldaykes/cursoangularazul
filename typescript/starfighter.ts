import {Spacecraft, Containnership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containnership {
    cargoContainers: number;

    constructor() {
        super('hyperdrive');
        this.cargoContainers = 2
    }

    jumpIntoHypersapce(){
        if (Math.random() >= 0.5){
            super.jumpIntoHypersapce()
        }else{
            console.log('Failed to jump');
            
        }
    }
}