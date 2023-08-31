// Horse manager
// Croquet Microverse
// Generate and animate horses
// The horse was

// the following import statement is solely for the type checking and
// autocompletion features in IDE.  A Behavior cannot inherit from
// another behavior or a base class but can use the methods and
// properties of the card to which it is installed.
// The prototype classes ActorBehavior and PawnBehavior provide
// the features defined at the card object.

import {ActorBehavior, PawnBehavior} from "../PrototypeBehavior";

class HorseActor extends ActorBehavior {
    setup() {

        this.range = 1000;
        this.speed = 0.5; // don't move very fast yet
        this.height = 0; // height above the terrain
        let r2 = this.range/2;
        this.position = [0,0,5];
        this.yaw = -Math.PI/2;
        this.updateHorse();
    }

    rotateBy(angle) {
        this.yaw+=angle;
    }
    
    forwardBy(dist) {
        this.position[0]+=dist*Math.sin(this.yaw);
        this.position[2]+=dist*Math.cos(this.yaw);
    }

    updateHorse(){
        this.rotateBy(0.002);
        this.forwardBy(0.25);
        this.future(30).updateHorse();
        this.publish("global", "horsePosition", this.position);
    }
}

class HorsePawn extends PawnBehavior {
    setup() {
        console.log("HorsePawn.setup");
        this.subscribe("global", "horsePosition", this.updateHorse);
        this.euler = new Microverse.THREE.Euler();
    }

    updateHorse(){
        // get the terrain
        let h = this.actor.height; //this.actor.height;
        if(this.shape.children.length>0){
            let terrainLayer = this.service("ThreeRenderManager").threeLayer("terrain");
            let handlerModuleName = 'Terrain';
            let heightPawn = terrainLayer[0].wcPawn;
            if (heightPawn.has(`${handlerModuleName}$TerrainPawn`, "getHeightFast")) {
                h += heightPawn.call(`${handlerModuleName}$TerrainPawn`, "getHeightFast", this.actor.position);
            };
            let p = [...this.actor.position];
            p[1]=h;
            this.shape.children[0].position.set(...p);
            this.euler.set(0, this.actor.yaw, 0);
            this.shape.children[0].setRotationFromEuler(this.euler);
        }
    }
}

export default {
    modules: [
        {
            name: "Horse",
            actorBehaviors: [HorseActor],
            pawnBehaviors: [HorsePawn],
        }
    ]
}
