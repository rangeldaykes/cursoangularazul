class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntoHypersapce(){
        console.log(`enter hyperspace with ${this.propulsor}`);
        
    }
}

interface Containnership{
    cargoContainers: number
}

export {Spacecraft, Containnership}