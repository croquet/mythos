// the following import statement is solely for the type checking and
// autocompletion features in IDE.  A Behavior cannot inherit from
// another behavior or a base class but can use the methods and
// properties of the card to which it is installed.
// The prototype classes ActorBehavior and PawnBehavior provide
// the features defined at the card object.

import {ActorBehavior, PawnBehavior} from "../PrototypeBehavior";

class HillsideWalkerPawn extends PawnBehavior {
    setup() {
        if (!this.isMyPlayerPawn) {return;}
        this.lastHillSideTime = 0;
        this.maxFall = -100;
        this.fallDistance = this.eyeHeight / 6;
        let walkManager = this.service("WalkManager");
        walkManager.removeAll();

        [
            ["BuiltinWalker", "WalkerPawn", "checkPortal"],
            ["BuiltinWalker", "WalkerPawn", "bvh"],
            ["HillsideWalker", "HillsideWalkerPawn", "checkHillside"]
        ].forEach((spec) => walkManager.append(spec));
    }

    checkHillside(vq, time, _delta) {
        let collide_throttle = this.collide_throttle || 50;
        const EYE_HEIGHT = 2.5;
        let terrainLayer = this.service("ThreeRenderManager").threeLayer("terrain");
        let handlerModuleName = 'Terrain';

        if ((this.actor.fall || this.spectator) && time - this.lastHillSideTime > collide_throttle) {
            this.lastHillSideTime = time;
            terrainLayer.forEach(t=>{
                let pawn = t.wcPawn;
                if (pawn.has(`${handlerModuleName}$TerrainPawn`, "getHeight")) {
                    let v = vq.v;
                    let v1 = pawn.call(`${handlerModuleName}$TerrainPawn`, "getHeight", v, EYE_HEIGHT);
                    vq = {v: [v[0], v1, v[2]], q: vq.q};
                }
            });
        }
        return [vq, false];
    }
}

export default {
    modules: [
        {
            name: "HillsideWalker",
            pawnBehaviors: [HillsideWalkerPawn],
        }
    ]
}
