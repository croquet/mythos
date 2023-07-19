// mythos.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io


export function init(Constants) {
    Constants.AvatarNames = ["newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"].map((n) => ({
        type: "3d",
        name: n,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation: `./assets/avatars/${n}.zip`,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
        behaviorModules: ["HillsideWalker"]
    }));

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "terrain.js", "ambientSound.js", "fireball.js",
        "blowing.js", "crowd.js", "horse.js", "menus.js", "urlLink.js", "replaceWorld.js", "walker.js"
    ];


    // rotates an object around a center point.
    function rotateTo(center, length, angle){
        let pos = [];
        pos.push(length*Math.sin(angle));
        pos.push(0);
        pos.push(length*Math.cos(angle));
        pos[0]+=center[0];
        pos[1]=center[1];
        pos[2]+=center[2];
        return pos;
    }

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                // translation: [0, 0, -2],
                // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/WindAmbience.aac",
                // textureLocation: "./assets/images/mythos.png",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Lights"],
                dataType: "jpg",
                dataLocation: "./assets/sky/aboveClouds.jpg",
                attribution: "Above the Clouds texture from HDRMaps.com",
                clearColor: 0xffffff,
                loadSynchronously: true,
            }
        },
        {
            card: {
                name: "fireball",
               // layers: ["light"],
                type: "object",
                behaviorModules: ["Fireball"],
                layers:["pointer"],
                translation: [
                    137.04842673287243,
                    -16.422857610412652,
                    215.58989538473676
                ],
                attribution: "https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/",
            },
        },
        {
            card: {
                name: "horse",
                layers: ["pointer"],
                type: "3d",
                behaviorModules: ["Horse"],
                modelType: "glb",
                dataLocation: "./assets/3D/horse_stone_light.glb",
                dataScale: [0.1, 0.1, 0.1],
                translation: [
                    0,
                    0,
                    0
                ],
                attribution: "Mirada for Ro.me",
            },
        },

        /*{
            card: {
                name: "Croquet Card",
                //behaviorModules: ["ReplaceWorld"],
                //targetURL: "https://croquet.io/microverse/?world=test",
                translation: [0, 1.5, -7.963],
                //    translation: [4.440892098500626e-16, 2.5357677795120512, -7.9631457611584615],
                //rotation: [0, Math.PI / 2, 0],
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                cardURL: "https://croquet.io",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },*/

        {
            card: {
                name: "Gallery Card",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://croquet.github.io/gallery",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                translation: rotateTo([0, 1.5, 4], -11.963, 2*Math.PI/7),
                rotation: [0, 2*Math.PI/7, 0],
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/Croquet Gallery.png",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "Physics Card",
                translation: rotateTo([0, 1.5, 4], -11.963, 3*Math.PI/7),
                rotation: [0, 3*Math.PI/7, 0],
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://croquet.github.io/physics/",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                layers: ["pointer"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/Fountain.png",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "About Mythos",
                translation: rotateTo([0, 1, 4], -11.963, 5*Math.PI/7), //[-5, 2.1, -7.963],
                rotation: [0, 4*Math.PI/7, 0],
                scale: [4, 4, 4],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "./assets/PDF/Mythos Readme.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        {
            card: {
                name:"Terrain",
                behaviorModules: ["Terrain", "Menus"],
                layers: ["terrain"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
                attribution: "Terra   Mike Linkovich (spacejack) on Github",
            }
        },
        {
            card: {
                name:"Crowd",
                behaviorModules: ["Crowd"],
                layers: ["pointer"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
            }
        },
        {
            card:{
                translation: [14.323492647614785, -2.7804596526792222, -5.391810022345661],
                rotation: [0, -0.01904446484351159, 0, 0.9998186377332763],
                layers: ["walk"],
                name: "/treepack4_small.glb",
                // dataLocation: "./assets/3D/treepack4_small.glb",
                dataLocation: "36bHrAibIhhNDw5QTWfleb-P1ufV9Gp4EKM28m0ss4iUXkJCRkUMGRlQX1pTRRhDRRhVRFlHQ1NCGF9ZGUMZYHp-UmwPBQdUcFVsckMHd19iAUJ4X3RCDlx8BBlfWRhVRFlHQ1NCGFJPWFdAU0RFUxlQZlFiYnJBQEIEAldxD1VnRUcHbHppUgN6blJjUXpvT3xVZ0J7bm5_ckZ_GVJXQlcZY29dBAJQYQFHfVdnWXxRUw4CbmZbZntpY0R9WHlPV1xaeX9RaUQBBhtUUQ",
                dataScale: [1.5, 1.5, 1.5],
                fileName: "/treepack4_small.glb",
                behaviorModules: ["Blowing"],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                noFog: true,
                type: "3d",
                flatten: true
            }
        },
        {
            card: {
                dataLocation: "./assets/3D/temple_wmoss.glb",
                dataScale: [1,1,1],
                fileName: "/temple_wmoss.glb",
                layers: [
                    "walk", "pointer"
                ],
                modelType: "glb",
                name: "/temple_wmoss.glb",
                translation: [
                    137.04842673287243,
                    -16.422857610412652,
                    215.58989538473676
                ],
                rotation: [
                    0,
                    -0.8375393574138387,
                    0,
                    0.5463769987680797
                ],
                shadow: true,
                singleSided: true,
                noFog: true,
                type: "3d",
                flatten: true,
                attribution: "Havolik, modified by Kai Oldman",
            },
        }
    ];
}
