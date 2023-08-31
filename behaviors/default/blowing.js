// Blowing in the wind
// Croquet Microverse
// Moves an object with the wind
// This was a quick hack to demonstrate - this should use a noise function and
// the leaves should use a UV shader.

// the following import statement is solely for the type checking and
// autocompletion features in IDE.  A Behavior cannot inherit from
// another behavior or a base class but can use the methods and
// properties of the card to which it is installed.
// The prototype classes ActorBehavior and PawnBehavior provide
// the features defined at the card object.

import {ActorBehavior, PawnBehavior} from "../PrototypeBehavior";


class BlowingActor extends ActorBehavior {
    setup() {
        this.future(20).update();
    }


    update(){
        this.say("updateWorld", this.now());
        this.future(20).update();
    }
}

class BlowingPawn extends PawnBehavior {
    setup() {
        // the 3D object will likely not be loaded yet. 
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    modelLoaded(){
        this.object = this.shape.children[0];

        let i =0;
        this.object.traverse( c => {
            if(c.geometry){
                c.material = this.installShader(c.material, i++);
            }
        });
        this.listen("updateWorld", this.update);
    }
// 0 === trunk
// 1 === branches
// 2 === leaves
    installShader(material, part){

        material.onBeforeCompile = function ( shader ) {

            let s = [
                'vec3 transformed = vec3( position );', 
                'transformed.z += 0.02*transformed.y*sin(time);',
                'transformed.z += 0.01*cos(0.2*time);',
                'transformed.x += 0.012*transformed.y*sin(time*1.25);',
            ];
            let s2 = [
                'transformed.z += 0.005*sin(time*20.0);',
                'transformed.x += 0.0022*sin(time*25.0);',
                'transformed.y += 0.0011*cos(time*30.0);'
            ];

            if(part === 0){
                s.push(...s2);
            }
            shader.uniforms.time = { value: 0 };
            shader.vertexShader = 'uniform float time;\n' + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                s.join( '\n' )
            );

            material.userData.shader = shader;
        };

        return material;
    }

    update(t){
        if(this.object)
            this.object.traverse( c =>{
                if(c.geometry){
                    let shader = c.material.userData.shader;
                    shader.uniforms.time.value = 0.001*t;
                }
            })
    }
}

export default {
    modules: [
        {
            name: "Blowing",
            actorBehaviors: [BlowingActor],
            pawnBehaviors: [BlowingPawn],
        }
    ]
}
