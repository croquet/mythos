(globalThis["webpackChunk_croquet_microverse"] = globalThis["webpackChunk_croquet_microverse"] || []).push([["src_microverse_js"],{

/***/ "./apps/multiblaster.js":
/*!******************************!*\
  !*** ./apps/multiblaster.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiBlaster": () => (/* binding */ MultiBlaster)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _src_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/card.js */ "./src/card.js");




/////////// Model code is executed inside of synced VM /////////// 

class MultiBlaster extends _src_card_js__WEBPACK_IMPORTED_MODULE_1__.CardActor {
    get pawn(){ return MultiBlasterDisplay; }
    init(options) {
        super.init(options);
        this.beWellKnownAs("multiBlaster");
        this.ships = new Map();
        this.asteroids = new Set();
        this.blasts = new Set();
        this.subscribe(this.sessionId, "view-join", this.viewJoined);
        this.subscribe(this.sessionId, "view-exit", this.viewExited);
        this.subscribe(this.sessionId, "switch-pause", this.switchPause);
        Asteroid.create({});
        this.active = true;
        this.mainLoop();
    }

    switchPause() {
        console.log("switchPaused!!!!")
        this.active = !this.active;
    }

    viewJoined(viewId) {
        const ship = Ship.create({ viewId });
        this.ships.set(viewId, ship);
    }

    viewExited(viewId) {
        const ship = this.ships.get(viewId);
        this.ships.delete(viewId);
        ship.destroy();
    }

    checkCollisions() {
        for (const asteroid of this.asteroids) {
            if (asteroid.wasHit) continue;
            const minx = asteroid.x - asteroid.size;
            const maxx = asteroid.x + asteroid.size;
            const miny = asteroid.y - asteroid.size;
            const maxy = asteroid.y + asteroid.size;
            for (const blast of this.blasts) {
                if (blast.x > minx && blast.x < maxx && blast.y > miny && blast.y < maxy) {
                    asteroid.hitBy(blast);
                    break;
                }
            }
            for (const ship of this.ships.values()) {
                if (!ship.wasHit && ship.x + 10 > minx && ship.x - 10 < maxx && ship.y + 10 > miny && ship.y - 10 < maxy) {
                    if (!ship.score && Math.abs(ship.x-512) + Math.abs(ship.y-512) < 40) continue; // no hit if just spawned
                    ship.hitBy(asteroid);
                    break;
                }
            }
        }
    }

    mainLoop() {
        if(this.active){
            for (const ship of this.ships.values()) ship.move();
            for (const asteroid of this.asteroids) asteroid.move();
            for (const blast of this.blasts) blast.move();
            this.checkCollisions();
        }
        this.future(50).mainLoop(); // move & check every 50 ms
    }
}
MultiBlaster.register("MultiBlaster");

class Ship extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Actor {
    init({ viewId }) {
        super.init();
        this.viewId = viewId;
        this.reset();
        this.subscribe(viewId, "left-thruster", this.leftThruster);
        this.subscribe(viewId, "right-thruster", this.rightThruster);
        this.subscribe(viewId, "forward-thruster", this.forwardThruster);
        this.subscribe(viewId, "fire-blaster", this.fireBlaster);
    }

    reset() {
        this.x = 512;
        this.y = 512;
        this.a = -Math.PI / 2;
        this.dx = 0;
        this.dy = 0;
        this.left = false;
        this.right = false;
        this.forward = false;
        this.score = 0;
        this.wasHit = 0;
    }

    leftThruster(active) {
        if (this.wasHit) return;
        this.left = active;
    }

    rightThruster(active) {
        if (this.wasHit) return;
        this.right = active;
    }

    forwardThruster(active) {
        if (this.wasHit) return;
        this.forward = active;
    }

    fireBlaster() {
        if (this.wasHit) return;
        const dx = Math.cos(this.a) * 20;
        const dy = Math.sin(this.a) * 20;
        const x = this.x + dx;
        const y = this.y + dy;
        Blast.create({ x, y, dx, dy, ship: this });
    }

    move() {
        if (this.wasHit) {
            // keep drifting as debris for 3 seconds
            if (++this.wasHit > 60) this.reset();
        } else {
            // process thruster controls
            if (this.forward) {
                this.dx += Math.cos(this.a) * 0.5;
                this.dy += Math.sin(this.a) * 0.5;
                if (this.dx > 10) this.dx = 10;
                if (this.dx < -10) this.dx = -10;
                if (this.dy > 10) this.dy = 10;
                if (this.dy < -10) this.dy = -10;
            }
            if (this.left) this.a -= 0.2;
            if (this.right) this.a += 0.2;
            if (this.a < 0) this.a += Math.PI * 2;
            if (this.a > Math.PI * 2) this.a -= Math.PI * 2;
        }
        // drift through space
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) this.x += 1024;
        if (this.x > 1024) this.x -= 1024;
        if (this.y < 0) this.y += 1024;
        if (this.y > 1024) this.y -= 1024;
    }

    hitBy(asteroid) {
        // turn both into debris
        this.wasHit = 1;
        asteroid.wasHit = 1;
    }
}
Ship.register("Ship");

class Asteroid extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Actor {
    init({ size, x, y, a, dx, dy, da }) {
        super.init();
        if (size) {
            // init second asteroid after spliting
            this.size = size;
            this.x = x;
            this.y = y;
            this.a = a;
            this.dx = dx;
            this.dy = dy;
            this.da = da;
        } else {
            // init new large asteroid
            this.size = 40;
            this.x = Math.random() * 400 - 200;
            this.y = Math.random() * 400 - 200;
            this.a = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            this.dx = Math.cos(this.a) * speed;
            this.dy = Math.sin(this.a) * speed;
            this.da = (0.02 + Math.random() * 0.03) * (Math.random() < 0.5 ? 1 : -1);
            this.wasHit = 0;
            this.move();
        }
        this.wellKnownModel("multiBlaster").asteroids.add(this);
    }

    move() {
        if (this.wasHit) {
            // keep drifting as debris, larger pieces drift longer
            if (++this.wasHit > this.size) this.destroy();
        }
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) this.x += 1024;
        if (this.x > 1024) this.x -= 1024;
        if (this.y < 0) this.y += 1024;
        if (this.y > 1024) this.y -= 1024;
        if (!this.wasHit) {
            this.a += this.da;
            if (this.a < 0) this.a += Math.PI * 2;
            if (this.a > Math.PI * 2) this.a -= Math.PI * 2;
        }
    }

    hitBy(blast) {
        if (!blast.ship.wasHit) blast.ship.score++;
        if (this.size > 20) {
            // split into two smaller faster asteroids
            this.size *= 0.7;
            this.da *= 1.5;
            this.dx = -blast.dy * 10 / this.size;
            this.dy = blast.dx * 10 / this.size;
            Asteroid.create({ size: this.size, x: this.x, y: this.y, a: this.a, dx: -this.dx, dy: -this.dy, da: this.da });
        } else {
            // turn into debris
            this.wasHit = 1;
        }
        blast.destroy();
    }

    destroy() {
        const asteroids = this.wellKnownModel("multiBlaster").asteroids;
        asteroids.delete(this);
        super.destroy();
        // keep at least 5 asteroids around
        if (asteroids.size < 5) Asteroid.create({});
    }
}
Asteroid.register("Asteroid");

class Blast extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Actor {
    init({x, y, dx, dy, ship}) {
        super.init();
        this.ship = ship;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.t = 0;
        this.wellKnownModel("multiBlaster").blasts.add(this);
    }

    move() {
        // move for 1.5 second before disappearing
        if (++this.t < 30) {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) this.x += 1024;
            if (this.x > 1024) this.x -= 1024;
            if (this.y < 0) this.y += 1024;
            if (this.y > 1024) this.y -= 1024;
        } else {
            this.destroy();
        }
    }

    destroy() {
        this.wellKnownModel("multiBlaster").blasts.delete(this);
        super.destroy();
    }
}
Blast.register("Blast");


/////////// Code below is executed outside of synced VM /////////// 

// Copyright 2021 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

class MultiBlasterDisplay extends _src_card_js__WEBPACK_IMPORTED_MODULE_1__.CardPawn {
    constructor(actor) {
        super(actor);

        this.addEventListener("pointerDown", "onPointerDown");
        this.addEventListener("pointerMove", "onPointerMove");
        this.addEventListener("pointerUp", "onPointerUp");
        this.addEventListener("keyDown", "onKeyDown");
        this.addEventListener("keyUp", "onKeyUp");

        this.smoothing = new WeakMap(); // position cache for interpolated rendering

        this.context = this.canvas.getContext("2d");
        this.future(50).doUpdate();
    }

    onPointerDown(p3d) {
        if (!p3d.uv) {return;}
        this.joystick = this.uv2xy(p3d.uv);
        this.knob = this.joystick;
    }

    onPointerMove(p3d) {
        if (!p3d.uv) {return;}
        this.knob= this.uv2xy(p3d.uv);
        let dx = this.knob[0]- this.joystick[0];
        let dy = this.knob[1] - this.joystick[1];
        if (dx > 30) {
            if (!this.right) { this.publish(this.viewId, "right-thruster", true); this.right = true; }
        } else if (this.right) { this.publish(this.viewId, "right-thruster", false); this.right = false; }
        if (dx < -30) {
            if (!this.left) { this.publish(this.viewId, "left-thruster", true); this.left = true; }
        } else if (this.left) { this.publish(this.viewId, "left-thruster", false); this.left = false; }
        if (dy < -30) {
            if (!this.forward) { this.publish(this.viewId, "forward-thruster", true); this.forward = true; }
        } else if (this.forward) { this.publish(this.viewId, "forward-thruster", false); this.forward = false; }
    }

    onPointerUp(p3d) {
        if (!p3d.uv) {return;}
        if (!this.right && !this.left && !this.forward) {
            this.publish(this.viewId, "fire-blaster");
        }
        if (this.right) { this.publish(this.viewId, "right-thruster", this.false); this.right = false; }
        if (this.left) { this.publish(this.viewId, "left-thruster", false); this.left = false;  }
        if (this.forward) { this.publish(this.viewId, "forward-thruster", false); this.forward = false; }

        this.joystick = null;
        this.knob= null;
    }

    onPointerCancel(p3d) {
        this.onPointerUp(p3d);
    }

    onKeyDown(e) {
        //joystick.style.display = "none";
        if (e.repeat) return;
        switch (e.key) {
            case "a": case "A": case "ArrowLeft":  this.publish(this.viewId, "left-thruster", true); break;
            case "d": case "D": case "ArrowRight": this.publish(this.viewId, "right-thruster", true); break;
            case "w": case "W": case "ArrowUp":    this.publish(this.viewId, "forward-thruster", true); break;
            case " ":                              this.publish(this.viewId, "fire-blaster"); break;
            case "p": case "P":                    this.publish(this.actor.sessionId, "switch-pause"); break;
        }
    }

    onKeyUp(e) {
        if (e.repeat) return;
        switch (e.key) {
            case "a": case "A": case "ArrowLeft":  this.publish(this.viewId, "left-thruster", false); break;
            case "d": case "D": case "ArrowRight": this.publish(this.viewId, "right-thruster", false); break;
            case "w": case "W": case "ArrowUp":    this.publish(this.viewId, "forward-thruster", false); break;
        }
    }

    // update is called once per render frame
    // read from shared model, interpolate, render

    setup() {
    }

    doUpdate() {
        if(this.actor.active){
            this.context.clearRect(0, 0, 1024, 1024);
            this.context.font = '40px sans-serif';
            this.context.fillStyle = "rgba(255, 255, 255, 0.5)";
            this.context.lineWidth = 3;
            this.context.strokeStyle = "white";
            for (const ship of this.actor.ships.values()) {
                const { x, y, a } = this.smoothPosAndAngle(ship);
                this.context.save();
                this.context.translate(x, y);
                if (ship.score) this.context.fillText(ship.score, 30, 15);
                this.context.rotate(a);
                if (ship.wasHit) this.drawShipDebris(ship.wasHit);
                else this.drawShip(ship.forward, ship.viewId === this.viewId);
                this.context.restore();
            }
            for (const asteroid of this.actor.asteroids) {
                const { x, y, a } = this.smoothPosAndAngle(asteroid);
                this.context.save();
                this.context.translate(x, y);
                this.context.rotate(a);
                if (asteroid.wasHit) this.drawAsteroidDebris(asteroid.size, asteroid.wasHit * 2);
                else this.drawAsteroid(asteroid.size);
                this.context.restore();
            }
            for (const blast of this.actor.blasts) {
                const { x, y } = this.smoothPos(blast);
                this.context.save();
                this.context.translate(x, y);
                this.drawBlast();
                this.context.restore();
            }
            if(this.joystick)this.drawJoystick();
            this.texture.needsUpdate = true;
        }
        this.future(50).doUpdate();
    }

    smoothPos(obj) {
        if (!this.smoothing.has(obj)) {
            this.smoothing.set(obj, { x: obj.x, y: obj.y, a: obj.a });
        }
        const smoothed = this.smoothing.get(obj);
        const dx = obj.x - smoothed.x;
        const dy = obj.y - smoothed.y;
        if (Math.abs(dx) < 50) smoothed.x += dx * 0.3; else smoothed.x = obj.x;
        if (Math.abs(dy) < 50) smoothed.y += dy * 0.3; else smoothed.y = obj.y;
        return smoothed;
    }

    smoothPosAndAngle(obj) {
        const smoothed = this.smoothPos(obj);
        const da = obj.a - smoothed.a;
        if (Math.abs(da) < 1) smoothed.a += da * 0.3; else smoothed.a = obj.a;
        return smoothed;
    }

    drawJoystick() {
        this.drawCircle(this.joystick, 50, false);
        this.drawCircle(this.knob, 25, true);
    }

    drawCircle(pos, radius, filled) {
        this.context.fillStyle = '#ffffff';
        this.context.beginPath();
        this.context.arc(pos[0], pos[1], radius, 0, Math.PI*2, true);
        if(filled)this.context.fill();
        else this.context.stroke();
    }

    drawShip(thrust, highlight) {
        this.context.beginPath();
        this.context.moveTo(+20,   0);
        this.context.lineTo(-20, +10);
        this.context.lineTo(-20, -10);
        this.context.closePath();
        this.context.stroke();
        if (highlight) {
            this.context.fill();
        }
        if (thrust) {
            this.context.beginPath();
            this.context.moveTo(-20, +5);
            this.context.lineTo(-30,  0);
            this.context.lineTo(-20, -5);
            this.context.stroke();
        }
    }

    drawShipDebris(t) {
        this.context.beginPath();
        this.context.moveTo(+20 + t,   0 + t);
        this.context.lineTo(-20 + t, +10 + t);
        this.context.moveTo(-20 - t * 1.4, +10);
        this.context.lineTo(-20 - t * 1.4, -10);
        this.context.moveTo(-20 + t, -10 - t);
        this.context.lineTo(+20 + t,   0 - t);
        this.context.stroke();
    }

    drawAsteroid(size) {
        this.context.beginPath();
        this.context.moveTo(+size,  0);
        this.context.lineTo( 0, +size);
        this.context.lineTo(-size,  0);
        this.context.lineTo( 0, -size);
        this.context.closePath();
        this.context.stroke();
    }

    drawAsteroidDebris(size, t) {
        this.context.beginPath();
        this.context.moveTo(+size + t,  0 + t);
        this.context.lineTo( 0 + t, +size + t);
        this.context.moveTo(-size - t,  0 - t);
        this.context.lineTo( 0 - t, -size - t);
        this.context.moveTo(-size - t,  0 + t);
        this.context.lineTo( 0 - t, +size + t);
        this.context.moveTo(+size + t,  0 - t);
        this.context.lineTo( 0 + t, -size - t);
        this.context.stroke();
    }

    drawBlast() {
        this.context.beginPath();
        this.context.ellipse(0, 0, 2, 2, 0, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.stroke();
    }
}


/***/ }),

/***/ "./src/DynamicTexture.js":
/*!*******************************!*\
  !*** ./src/DynamicTexture.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTexture": () => (/* binding */ DynamicTexture)
/* harmony export */ });
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

// DynamicTexture is used to define and interact with an offscreen canvas that updates a texture object. In particular,
// it is used as the text editing object.
// Despite its name, it isn't a TObject.


class DynamicTexture{
  //'initialize',{
    // width and height are in pixels, to be used to create the canvas
    // width, height, options.fillStyle, options.clearStyle
    constructor(width, height, fillStyle, clearStyle){
        if (width>2048 || height>2048) console.warn("large texture: "+width+"x"+height); // @@ DEBUG
        var nearestPowerOfTwo = value=>2**(Math.round( Math.log( value ) / Math.LN2 ) );

        var twoWidth = nearestPowerOfTwo(width), twoHeight = nearestPowerOfTwo(height);
        var needsAdjustment = twoWidth!==width || twoHeight!==height; // || (canvas && (twoWidth!==canvas.width || twoHeight!==canvas.height));
        if (needsAdjustment) console.log("TDynamicTexture: " + width + "x" + height + " becomes " + twoWidth + "x" + twoHeight);

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width = twoWidth;
        this.canvas.height = this.height = twoHeight;

        this.context = this.canvas.getContext("2d");
        this.texture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.CanvasTexture(this.canvas);
        this.extractMipmapLevel = 3;

        this.fontName = 'Arial';
        this.fontHeight = 32;
        this.fillStyle = fillStyle || 'black';
        this.clearStyle = clearStyle;
        this.setFont("normal 32px Arial"); // default
        this.align = 'left';
        this.scale = 1;
    }

//  'interface',{
    asMaterial(){
        return new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 1,
            emissive: 0x333333,
            map: this.texture,
            transparent: false,
        });
    }

    getTexture(){return this.texture}

    getMiniTexture(){
        if (this.miniTexture) return this.miniTexture;

        let texture = this.texture;
        let level = this.extractMipmapLevel, multiple = 2**level;
        let miniWidth = this.width/multiple, miniHeight = this.height/multiple;

        let renderer = this.service("ThreeRenderManager").renderer,
            gl = renderer.getContext(),
            glTexture = gl.createTexture();

        // following https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
        const loadLevel = 0;
        const internalFormat = gl.RGBA;
        const srcFormat = gl.RGBA;
        const srcType = gl.UNSIGNED_BYTE;

        gl.bindTexture(gl.TEXTURE_2D, glTexture);

        let utils = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.WebGLUtils(gl);
        // these lines from uploadTexture() in three.js; we might need more (e.g., anisotropy)
        gl.pixelStorei( gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );
        gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha );
        gl.pixelStorei( gl.UNPACK_ALIGNMENT, texture.unpackAlignment );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, utils.convert( texture.wrapS ) );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, utils.convert( texture.wrapT ) );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, utils.convert( texture.magFilter ) );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, utils.convert( texture.minFilter ) );

        // note: we might be able to do this more efficiently; see discussion of texStorage2D
        // in "Creating a complete texture" in https://www.khronos.org/opengl/wiki/Common_Mistakes
        gl.texImage2D(gl.TEXTURE_2D, loadLevel, internalFormat, srcFormat, srcType, this.canvas);
        gl.generateMipmap(gl.TEXTURE_2D);

        // Create a framebuffer backed by the desired level of the texture
        let framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        // NB: following (with non-zero level parameter) requires webgl2
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, glTexture, level);
        let data;
        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER), ok = status===gl.FRAMEBUFFER_COMPLETE;
        if (ok) {
            // Read the contents of the framebuffer
            data = new Uint8Array(miniWidth * miniHeight * 4);
            gl.readPixels(0, 0, miniWidth, miniHeight, gl.RGBA, gl.UNSIGNED_BYTE, data);
        } else console.log("frame buffer not ready; status="+status);
        gl.deleteFramebuffer(framebuffer);
        gl.deleteTexture(glTexture);
        if (!ok) return null; // better luck next time

        // Create a mini canvas to store the result
        let miniCanvas = document.createElement("canvas"), context = miniCanvas.getContext("2d");
        miniCanvas.width = miniWidth;
        miniCanvas.height = miniHeight;

        // Copy the pixels to the mini canvas
        let imageData = context.createImageData(miniWidth, miniHeight);
        imageData.data.set(data);
        context.putImageData(imageData, 0, 0);

        this.miniTexture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.CanvasTexture(miniCanvas);
        this.miniTexture.flipY = false;
        return this.miniTexture;
    }

    discardMiniTexture() { delete this.miniTexture; }

    // parsing the font spec seems to be pretty heavy - so if we're using the same font
    // many times, we don't want to keep re-assigning this.context.font.
    // however... because the context's font setting is lost during a restore(), for example
    // as used to remove the clip() setting after drawing a cell region of a TDataTable texture,
    // in such cases we'll only end up skipping repeated font setting if the texture's default
    // font (set as this.font) is also the font used for the cells.
    setFont(font){ this.context.font = this.font = this.lastContextFont = font; }
    // called internally, so we can skip the setting if it's the same as last time
    setContextFont(font) {
        if (font!==this.lastContextFont) this.context.font = this.lastContextFont = font;
    }

    setFillStyle(fillStyle){this.fillStyle = fillStyle;}

    setAlign(align){this.align = align;}

    doWithClip(x, y, width, height, fn){
        let context = this.context;
        context.save();
        context.beginPath();
        context.rect(x,y,width,height);
        context.clip();

        fn();

        context.restore();
        this.lastContextFont = this.font; // @@ assume (somewhat riskily) that we're returning to the base state
    }

    fill(fillStyle){
        this.context.save();
        this.context.scale(1/this.scale, 1/this.scale);
        this.fillRect(0, 0, this.canvas.width, this.canvas.height, fillStyle);
        this.context.restore();
    }

    clear(){
        this.context.save();
        this.context.scale(1/this.scale, 1/this.scale);
        this.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.texture.needsUpdate = true;
        this.context.restore();
    }

    fillRect(x, y, width, height, fillStyle){
        this.context.fillStyle = fillStyle || this.fillStyle;
        this.context.fillRect(x, y, width, height);
        this.texture.needsUpdate = true;
    }

    clearRect(x, y, width, height){
        if( this.clearStyle !== undefined ){
            this.context.fillStyle = this.clearStyle;
            this.context.fillRect(x, y, width, height);
        }else{
            this.context.clearRect(x, y, width, height);
        }
        this.texture.needsUpdate = true;
    }

    drawImage(...args){
        // execute the drawImage on the internal context
        // the arguments are the same the official context2d.drawImage so we just pass it through
        this.context.drawImage(...args);
        this.texture.needsUpdate = true;
    }

    drawText(text, x, y, fillStyle, contextFont, suppressShadow){
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        if(!isNumber(x)) return this.drawTextCentered(text, y, fillStyle, contextFont, suppressShadow);
        this.setContextFont(contextFont||this.font);
        let context = this.context;
        context.textAlign = this.align;

        // draw a black version to sharpen the text's outline
        // ael: add suppressShadow argument to allow caller to disable this
        if (!suppressShadow) {
            context.fillStyle = 'black';
            context.fillText(text, x+1, y+1);
        }
        context.fillStyle = fillStyle||this.fillStyle;
        context.fillText(text, x, y);
        this.texture.needsUpdate = true;
    }

    drawTextCentered(text, y, fillStyle, contextFont, suppressShadow){
        this.setContextFont(contextFont||this.font);
        var w = this.context.measureText(text).width;
        var h = this.fontHeight;
        var x = (this.canvas.width-w)/2;
        if (typeof y!=="number") y = (this.canvas.height+h)/2 -2;
        if (!suppressShadow) {
            this.context.fillStyle = 'black';
            this.context.fillText(text, x+1, y+1);
        }
        this.context.fillStyle = fillStyle||this.fillStyle;
        this.context.fillText(text, x, y);
        this.texture.needsUpdate = true;
    }

    drawTextRight(text, y, fillStyle, contextFont, suppressShadow){
        this.setContextFont(contextFont||this.font);
        var w = this.context.measureText(text).width+2;
        var h = this.fontHeight;
        var x = this.canvas.width-w;
        if (typeof y!=="number") y = (this.canvas.height+h)/2 -2;
        if (!suppressShadow) {
            this.context.fillStyle = 'black';
            this.context.fillText(text, x+1, y+1);
        }
        this.context.fillStyle = fillStyle||this.fillStyle;
        this.context.fillText(text, x, y);
        this.texture.needsUpdate = true;
    }

    drawTextLeft(text, y, fillStyle, contextFont){
        this.setContextFont(contextFont||this.font);
        //var w = this.context.measureText(text).width+2;
        var h = this.fontHeight;
        var x = 2, y = y || (this.canvas.height+h)/2 -2;
        this.context.fillStyle = 'black';
        this.context.fillText(text, x+1, y+1);
        this.context.fillStyle = fillStyle||this.fillStyle;
        this.context.fillText(text, x, y);
        this.texture.needsUpdate = true;
    }

    drawRect(x, y, width, height, style, lineWidth){
        // Green rectangle
        this.context.beginPath();
        this.context.lineWidth=lineWidth||"4";
        this.context.strokeStyle= style||"green";
        this.context.rect(x,y,width,height);
        this.context.stroke();
        this.texture.needsUpdate = true;
    }

    drawLine(fromX,fromY, toX,toY, style, lineWidth){
        this.context.lineWidth=lineWidth||"1";
        this.context.strokeStyle= style||"white";
        this.context.beginPath();
        this.context.moveTo(fromX,fromY);
        this.context.lineTo(toX,toY);
        this.context.stroke();
        this.texture.needsUpdate = true;
    }

    // poly is an array with x,y,x,y,x,y,.. format
    drawPoly(poly, style, lineWidth){
        this.context.lineWidth=lineWidth||"1";
        this.context.strokeStyle= style||"white";
        this.context.beginPath();
        this.context.moveTo(poly[0], poly[1]);
        for(let i=2; i<poly.length; i+=2){
            this.context.lineTo(poly[i], poly[i+1]);
        }
        this.context.stroke();
        this.texture.needsUpdate = true;
    }

    // path is a Path2D object (SVG path)
    // let path = new Path2D('M 100,100 h 50 v 50 h 50');
    // dynamic.drawPath(path);
    drawPath( path ){
        this.context.stroke(path);
        this.texture.needsUpdate = true;
    }

    // image is an HTMLImageElement
    // let img = new Image();
    // img.src = "./assets/svg/CroquetSymbol_CMYK_NoShadow.svg";
    // dynamic.drawImage(10,10, img);
    drawImage(  image, x, y, width, height ){
        this.context.drawImage( image, x, y, width, height );
        this.texture.needsUpdate = true;
    }

    changed(){this.texture.needsUpdate = true; this.mipmapTexture.dispose(); this.mipmapTexture = null;}

    setScale(scale){this.scale = scale; this.context.scale(scale, scale);}
}


/***/ }),

/***/ "./src/Pointer.js":
/*!************************!*\
  !*** ./src/Pointer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_PointerTarget": () => (/* binding */ AM_PointerTarget),
/* harmony export */   "PM_Pointer": () => (/* binding */ PM_Pointer),
/* harmony export */   "PM_PointerTarget": () => (/* binding */ PM_PointerTarget)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io



//------------------------------------------------------------------------------------------
//-- AM_PointerTarget ----------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Copied from the implementaion in Worldcore, but heavily modified to support event listener style dynamic manipulation of event listeners.

// eventListeners:Map<eventName:EventName, Array<{moduleName:string, behaviorName:string, eventName:string, listener:string}>>

const AM_PointerTarget = superclass => class extends superclass {
    init(options) {
        super.init(options);
        this.eventListeners = new Map();
        this.listen("dispatchEvent", this.dispatchEvent);
    }

    // When an actor-side event listener for a pointer event is added,
    // the pawn automatically sends the pointer event over the
    // dispatchEvent Croquet event.  If the lister registered has
    // moduleName and behaviorName, it invokes the behavior method.
    // Otherwise, it looks up the method from the base object and
    // invokes it.
    dispatchEvent(data) {
        // console.log("dispatchEvent", data);
        let {eventName, evt} = data;
        let array = this.eventListeners.get(eventName);
        if (!array) {return;}

        array.forEach((obj) => {
            let {moduleName, behaviorName, listener} = obj;
            if (moduleName && behaviorName) {
                this.call(`${moduleName}$${behaviorName}`, listener, evt);
            } else {
                this[listener](evt);
            }
        });
    }

    addEventListener(eventName, listener) {
        // console.log("addEventListener", eventName, listener);
        let origListener = listener;
        if (typeof listener === "function") {
            listener = listener.name;
        }

        let behaviorName;
        let moduleName;

        let dollar = listener.indexOf("$");

        if (dollar >= 1) {
            moduleName = listener.slice(0, dollar);
            listener = listener.slice(dollar + 1);
        }

        let dot = listener.indexOf(".");
        if (dot >= 1) {
            behaviorName = listener.slice(0, dot);
            listener = listener.slice(dot + 1);
        }

        let behavior = this._behavior;

        if (!moduleName && behavior) {
            moduleName = behavior.module.externalName;
        }

        if (!behaviorName && behavior) {
            behaviorName = behavior.$behaviorName;
        }

        let array = this.eventListeners.get(eventName);
        if (!array) {
            array = [];
            this.eventListeners.set(eventName, array);
        }
        if (array.findIndex((obj) => {
            return obj.eventName === eventName &&
                obj.listener === listener &&
                obj.moduleName === moduleName &&
                obj.behaviorName === behaviorName
        }) >= 0) {
            this.removeEventListener(eventName, origListener, true);
            // console.log("multiple registration of the same function");
        }
        array.push({moduleName, behaviorName, eventName, listener});

        this.say("registerEventListener", {eventName, listener});
    }

    removeEventListener(eventName, listener, noDelete) {
        // console.log("removeEventListener", eventName, listener);
        if (typeof listener === "function") {
            listener = listener.name;
        }

        /*

        if (listener.indexOf(".") >= 1) {
            let split = listener.split(".");
            behavior = split[0];
            listener = split[1];
        }

        */

        let behaviorName = this._behavior.$behaviorName;
        let moduleName = this._behavior.module.externalName;

        let array = this.eventListeners.get(eventName);
        if (!array) {
            // console.log("try to remove non-existent listener");
            return;
        }
        let ind = array.findIndex((obj) => obj.behaviorName === behaviorName && obj.moduleName === moduleName && obj.listener === listener);
        if (ind < 0) {
            // console.log("try to remove non-existent listener");
            return;
        }
        array.splice(ind, 1);
        if (array.length === 0) {
            if (!noDelete) {
                this.eventListeners.delete(eventName);
            }
            this.say("unregisterEventListener", {eventName, listener});
        }
    }
}
;(0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.RegisterMixin)(AM_PointerTarget);

//------------------------------------------------------------------------------------------
//-- PM_PointerTarget ----------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Copied from the implementaion in Worldcore, but heavily modified to support event listener style dynamic manipulation of event listeners.

// eventListeners:Map<eventName:EventName, Array<{name:string, eventName:string, listener:function}>>
// This manages the event listeners added to the pawn side.

// modelListeners:Map<eventName:EventName, func:function
// When an event listener for a pointer event is added to the actor side, the pawn was notified so that it should send a dispatchEvent when the specified pointerEvent type occurs on the pawn side.

const PM_PointerTarget = superclass => class extends superclass {
    constructor(actor) {
        super(actor);
        this.eventListeners = new Map();
        this.modelListeners = new Map();

        this.listen("registerEventListener", "registerEventListener");
        this.listen("unregisterEventListener", "unregisterEventListener");

        // if (this.onKeyDown) this.listen("keyDown", this.onKeyDown);
        // if (this.onKeyUp) this.listen("keyUp", this.onKeyUp);

        this.registerAllEventListeners();
    }

    destroy() {
        let avatar = this.actor.service("PlayerManager").players.get(this.viewId);
        const avatarPawn = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(avatar.id);
        if (avatarPawn) {
            if (avatarPawn.hoverPawn === this) {
                avatarPawn.hoverPawn = null;
            }
            if (avatarPawn.focusPawn === this) {
                avatarPawn.focusPawn = null;
            }
        }
        super.destroy();
    }

    addEventListener(eventName, listener, name) {
        let origListener = listener;
        if (typeof listener === "string") {
            name = listener;
            listener = (evt) => this[name](evt);
        } else {
            if (!name) {
                name = listener.name;
            }
        }
        let array = this.eventListeners.get(eventName);
        if (!array) {
            array = [];
            this.eventListeners.set(eventName, array);
        }
        if (array.find((obj) => {
            return obj.name === name &&
                obj.eventName === eventName;
        })) {
            this.removeEventListener(eventName, origListener, name);
            // console.log("multiple registration of the same function");
        }
        array.push({name, eventName, listener});
    }

    removeEventListener(eventName, listener, name) {
        if (typeof listener === "string") {
            name = listener;
            // listener = (evt) => this[listener](evt);
        } else {
            if (!name) {
                name = listener.name;
            }
        }
        let array = this.eventListeners.get(eventName);
        if (!array) {
            // console.log("try to remove non-existent listener");
            return;
        }
        let ind = array.findIndex((obj) => {
            return obj.name === name &&
                obj.eventName === eventName;
        });
        if (ind < 0) {
            // console.log("try to remove non-existent listener");
            return;
        }
        array.splice(ind, 1);
    }

    registerEventListener(data) {
        // console.log("registerEventLIstener", data);
        let {eventName} = data;
        let func = (evt) => this.say("dispatchEvent", {eventName, evt: evt});
        this.modelListeners.set(eventName, func);
        this.addEventListener(eventName, func, `dispatch_${eventName}`);
    }

    unregisterEventListener(data) {
        let {eventName, _listener} = data;
        let func = this.modelListeners.get(eventName);
        if (!func) {return;}
        this.removeEventListener(eventName, func, `dispatch_${eventName}`);
    }

    // this is called only upon the initialization time. If the actor
    // already has some entries in the eventListeners, the pawn sets
    // up the disptchEvent link for them.

    registerAllEventListeners() {
        if (!this.actor.eventListeners) {return;}
        for (let eventName of this.actor.eventListeners.keys()) {
            this.registerEventListener({eventName});
        }
    }
}

//------------------------------------------------------------------------------------------
//-- PM_Pointer ----------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// Copied from the implementaion in Worldcore, but heavily modified to support event listener style dynamic manipulation of event listeners.

// This mixin is used by the avatar to implement the event routing.

const PM_Pointer = superclass => class extends superclass {
    constructor(actor) {
        super(actor);
        if (!this.isMyPlayerPawn) {return;}

        /* Microverse uses InputManager from Worldcore */

        this.subscribe("input", "pointerDown", this.doPointerDown);
        this.subscribe("input", "pointerUp", this.doPointerUp);
        this.subscribe("input", "pointerMove", this.doPointerMove);
        this.subscribe("input", "click", this.doPointerClick);
        this.subscribe("input", "wheel", this.doPointerWheel);
        this.subscribe("input", "doubleDown", this.doPointerDoubleDown);
        this.subscribe("input", "tap", this.doPointerTap);
        this.subscribe("input", "keyDown", this.doKeyDown);
        this.subscribe("input", "keyUp", this.doKeyUp);

        this.firstResponders = new Map();
        this.lastResponders = new Map();
        // {eventName -> [{eventMask, pawn}]} // eventMask should be exclusive
    }

    modifierEqual(e1, e2) {
        return !!e1.altKey === !!e2.altKey && !!e1.ctrlKey === !!e2.ctrlKey && !!e1.metaKey === !!e2.metaKey && !!e1.shiftKey === !!e2.shiftKey;
    }

    addResponder(responders, eventName, eventMask, pawn) {
        if (pawn._target) {pawn = pawn._target;}
        let ms = ["altKey", "shiftKey", "ctrlKey", "metaKey"];
        let array = responders.get(eventName);
        if (!array) {
            array = [];
            responders.set(eventName, array);
        }

        function has() {
            for (let i = 0; i < array.length; i++) {
                let obj = array[i];
                let all = true;

                for (let i = 0; i < ms.length; i++) {
                    all = all && obj.eventMask[ms[i]] === eventMask[ms[i]]
                }
                if (obj.pawn === pawn && all) {return true;}
            }
            return false;
        }

        if (has()) {return;}

        array.forEach((obj) => {
            for (let i = 0; i < ms.length; i++) {
                if (obj.eventMask[ms[i]] && eventMask[ms[i]]) {
                    throw new Error(`${ms[i]} is already handled for ${eventName}`);
                }
            }
        });
        array.unshift({eventMask, pawn});
    }

    removeResponder(responders, eventName, eventMask, pawn) {
        if (pawn._target) {pawn = pawn._target;}
        let array = responders.get(eventName);
        if (!array) {return;}
        let responderIndex = array.findIndex((obj) => {
            let ms = ["altKey", "shiftKey", "ctrlKey", "metaKey"];
            let all = true;
            for (let i = 0; i < ms.length; i++) {
                if (obj.eventMask[ms[i]]) {
                    all = all && eventMask[ms[i]];
                }
            }
            return all;
        });

        if (responderIndex >= 0 && array[responderIndex].pawn === pawn) {
            array.splice(responderIndex, 1);
        }
    }

    findResponder(responders, e, eventName, requireModefier) {
        let array = responders.get(eventName);
        if (!array) {return null;}
        let responderIndex = array.findIndex((obj) => {
            let ms = ["altKey", "shiftKey", "ctrlKey", "metaKey"];
            let all = true;
            let any = false;
            for (let i = 0; i < ms.length; i++) {
                if (e[ms[i]]) {
                    any = true;
                    all = all && obj.eventMask[ms[i]];
                }
            }

            if (requireModefier && (Object.keys(obj.eventMask).length === 0 && !any)) {
                return true;
            }
            if (requireModefier && !any) {return false;}
            return all;
        });

        if (responderIndex >= 0) {
            return array[responderIndex].pawn;
        }
        return null;
    }

    addFirstResponder(eventName, eventMask, pawn) {
        return this.addResponder(this.firstResponders, eventName, eventMask, pawn);
    }

    removeFirstResponder(eventName, eventMask, pawn) {
        return this.removeResponder(this.firstResponders, eventName, eventMask, pawn);
    }

    findFirstResponder(e, eventName) {
        return this.findResponder(this.firstResponders, e, eventName, true);
    }

    addLastResponder(eventName, eventMask, pawn) {
        return this.addResponder(this.lastResponders, eventName, eventMask, pawn);
    }

    removeLastResponder(eventName, eventMask, pawn) {
        return this.removeResponder(this.lastResponders, eventName, eventMask, pawn);
    }

    findLastResponder(e, eventName) {
        return this.findResponder(this.lastResponders, e, eventName, false);
    }

    destroy() {
        super.destroy();
    }

    getTargets(type, optWalk) {
        const render = this.service("ThreeRenderManager");
        let objects = optWalk ? render.threeLayerUnion('pointer', 'walk') : render.threeLayer("pointer");
        return objects.filter((obj) => {
            let array = obj.wcPawn.eventListeners.get(type);
            return array && array.length !== 0;
        });
    }

    invokeListeners(type, target, rc, wcEvent) {
        let array = target.eventListeners.get(type);
        let event;
        if (!rc) {
            event = wcEvent;
        } else {
            event = this.pointerEvent(rc, wcEvent);
        }
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.has(`${handlerModuleName}$AvatarPawn`, "handlingEvent")) {
            this.call(`${handlerModuleName}$AvatarPawn`, "handlingEvent", type, target, event);
        }
        if (array) {
            array.forEach((n) => n.listener.call(target, event));
        }
    }

    pointerCapture(toPawn) {
        this.focusPawn = toPawn;
    }

    doPointerDown(e) {
        let eventName = "pointerDown";
        let rc;
        if (e.source) {
            rc = this.pointerRaycast(e.source, this.getTargets(eventName));
        } else {
            rc = this.pointerRaycast(e.xy, this.getTargets(eventName));
        }

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (e.button === 0) {
            this.isPointerDown = true;
            if (this.focusPawn !== rc.pawn) {
                this.focusPawn = rc.pawn;
            }
        }
        if (this.focusPawn) {
            this.invokeListeners(eventName, this.focusPawn, rc, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, rc, e);
            }
        }
    }

    doPointerUp(e) {
        let eventName = "pointerUp";

        let rc;
        if (e.source) {
            rc = this.pointerRaycast(e.source, this.getTargets(eventName));
        } else {
            rc = this.pointerRaycast(e.xy, this.getTargets(eventName));
        }

        this.isPointerDown = false;
        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (this.focusPawn) {
            this.invokeListeners(eventName, this.focusPawn, rc, e);
        }

        let lastResponder = this.findLastResponder(e, eventName);
        if (lastResponder) {
            return this.invokeListeners(eventName, lastResponder, rc, e);
        }
        // this.focusPawn = null;
    }

    doPointerMove(e) {
        let eventName = "pointerMove";

        let rc;
        if (e.source) {
            rc = this.pointerRaycast(e.source, this.getTargets(eventName));
        } else {
            rc = this.pointerRaycast(e.xy, this.getTargets(eventName));
        }

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (this.hoverPawn !== rc.pawn) {
            if (this.hoverPawn) {
                this.invokeListeners("pointerLeave", this.hoverPawn, rc, e);
            }
            this.hoverPawn = rc.pawn;
            if (this.hoverPawn) {
                this.invokeListeners("pointerEnter", this.hoverPawn, rc, e);
            }
        }

        if (this.isPointerDown && this.focusPawn && this.focusPawn === rc.pawn) { // dubious check
            this.invokeListeners(eventName, this.focusPawn, rc, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, rc, e);
            }
        }
    }

    doPointerClick(e) {
        let eventName = "click";
        const rc = this.pointerRaycast(e.xy, this.getTargets(eventName));

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (rc.pawn) {
            this.invokeListeners(eventName, rc.pawn, rc, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, rc, e);
            }
        }
    }

    doPointerDoubleDown(e) {
        let eventName = "pointerDoubleDown";
        const rc = this.pointerRaycast(e.xy, this.getTargets(eventName, true), true);

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (rc.pawn) {
            this.invokeListeners(eventName, rc.pawn, rc, e);
        }
    }

    doPointerWheel(e) {
        let eventName = "pointerWheel";
        const rc = this.pointerRaycast(e.xy, this.getTargets(eventName, true), true);

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (rc.pawn) {
            this.invokeListeners(eventName, rc.pawn, rc, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, rc, e);
            }
        }
    }

    doPointerTap(e) {
        let eventName = "pointerTap";

        let rc;
        if (e.source) {
            rc = this.pointerRaycast(e.source, this.getTargets(eventName));
        } else {
            rc = this.pointerRaycast(e.xy, this.getTargets(eventName));
        }

        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, rc, e);
        }

        if (rc.pawn) {
            this.invokeListeners(eventName, rc.pawn, rc, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, rc, e);
            }
        }
    }

    doKeyDown(e) {
        let eventName = "keyDown";
        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, null, e);
        }

        if (this.focusPawn) {
            this.invokeListeners(eventName, this.focusPawn, null, e);
        } else {
            let lastResponder = this.findLastResponder(e, eventName);
            if (lastResponder) {
                return this.invokeListeners(eventName, lastResponder, null, e);
            }
        }
    }

    doKeyUp(e) {
        let eventName = "keyUp";
        let firstResponder = this.findFirstResponder(e, eventName);
        if (firstResponder) {
            return this.invokeListeners(eventName, firstResponder, null, e);
        }

        if (this.focusPawn) {
            this.invokeListeners(eventName, this.focusPawn, null, e);
        }

        // this falling through part is also a hack, but we want to clear the wasd key bits in avatar.
        let lastResponder = this.findLastResponder(e, eventName);
        if (lastResponder) {
            return this.invokeListeners(eventName, lastResponder, null, e);
        }
    }

    pointerEvent(rc, wcEvent) {
        const pe = {avatarId: this.actor.id}
        if (rc.pawn) {
            pe.targetId = rc.pawn.actor.id;
            pe.xyz = rc.xyz;
            pe.uv = rc.uv;
            pe.normal = rc.normal;
            pe.distance = rc.distance;
        }
        pe.ctrlKey = wcEvent.ctrlKey;
        pe.altKey = wcEvent.altKey;
        pe.shiftKey = wcEvent.shiftKey;
        pe.metaKey = wcEvent.metaKey;
        pe.xy = wcEvent.xy;
        pe.id = wcEvent.id;
        pe.button = wcEvent.button;
        pe.buttons = wcEvent.buttons;
        if (rc.ray) {
            pe.ray = {origin: rc.ray.origin.toArray(), direction: rc.ray.direction.toArray()};
        }
        if (wcEvent.deltaY !== undefined) {
            pe.deltaY = wcEvent.deltaY;
        }
        return pe;
    }
}


/***/ }),

/***/ "./src/ThreeRender.js":
/*!****************************!*\
  !*** ./src/ThreeRender.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PM_ThreeCamera": () => (/* binding */ PM_ThreeCamera),
/* harmony export */   "PM_ThreeVisible": () => (/* binding */ PM_ThreeVisible),
/* harmony export */   "THREE": () => (/* binding */ THREE),
/* harmony export */   "THREE_MESH_BVH": () => (/* reexport module object */ three_mesh_bvh__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   "ThreeRenderManager": () => (/* binding */ ThreeRenderManager)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/index.js");
/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ "./node_modules/three/examples/jsm/postprocessing/EffectComposer.js");
/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ "./node_modules/three/examples/jsm/postprocessing/RenderPass.js");
/* harmony import */ var three_examples_jsm_postprocessing_Pass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/Pass.js */ "./node_modules/three/examples/jsm/postprocessing/Pass.js");
/* harmony import */ var three_examples_jsm_shaders_CopyShader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/shaders/CopyShader.js */ "./node_modules/three/examples/jsm/shaders/CopyShader.js");
/* harmony import */ var three_examples_jsm_csm_CSMFrustum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/csm/CSMFrustum.js */ "./node_modules/three/examples/jsm/csm/CSMFrustum.js");
/* harmony import */ var three_examples_jsm_csm_CSMShader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/csm/CSMShader.js */ "./node_modules/three/examples/jsm/csm/CSMShader.js");
/* harmony import */ var three_examples_jsm_csm_CSM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/csm/CSM.js */ "./node_modules/three/examples/jsm/csm/CSM.js");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
/* harmony import */ var three_examples_jsm_loaders_MTLLoader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/examples/jsm/loaders/MTLLoader.js */ "./node_modules/three/examples/jsm/loaders/MTLLoader.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_FBXLoader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader.js */ "./node_modules/three/examples/jsm/loaders/FBXLoader.js");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader.js */ "./node_modules/three/examples/jsm/loaders/DRACOLoader.js");
/* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ "./node_modules/three/examples/jsm/loaders/SVGLoader.js");
/* harmony import */ var three_examples_jsm_loaders_EXRLoader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three/examples/jsm/loaders/EXRLoader.js */ "./node_modules/three/examples/jsm/loaders/EXRLoader.js");
/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils.js */ "./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js");
/* harmony import */ var three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! three/examples/jsm/loaders/FontLoader.js */ "./node_modules/three/examples/jsm/loaders/FontLoader.js");
/* harmony import */ var three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! three/examples/jsm/geometries/TextGeometry.js */ "./node_modules/three/examples/jsm/geometries/TextGeometry.js");
/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ "./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js");
/* harmony import */ var three_examples_jsm_postprocessing_OutlinePass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! three/examples/jsm/postprocessing/OutlinePass.js */ "./node_modules/three/examples/jsm/postprocessing/OutlinePass.js");
/* harmony import */ var three_examples_jsm_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! three/examples/jsm/webxr/VRButton.js */ "./node_modules/three/examples/jsm/webxr/VRButton.js");
/* harmony import */ var three_examples_jsm_webxr_XRControllerModelFactory_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! three/examples/jsm//webxr/XRControllerModelFactory.js */ "./node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js");
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");



























//------------------------------------------------------------------------------------------
//-- ThreeVisible  -------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
const PM_ThreeVisible = superclass => class extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_21__.PM_Visible)(superclass) {

    constructor(...args) {
        super(...args);
        this.listen("viewGlobalChanged", this.refreshDrawTransform);
    }

    destroy() {
        super.destroy();
        const render = this.service("ThreeRenderManager");
        if (render && render.scene) {
            if(this.renderObject)render.scene.remove(this.renderObject);
            if(this.colliderObject)render.scene.remove(this.colliderObject);
        }
    }

    refreshDrawTransform() {
        if(this.renderObject){
            this.renderObject.matrix.fromArray(this.global);
            this.renderObject.matrixWorldNeedsUpdate = true;
        }
        if(this.colliderObject){
            this.colliderObject.matrix.fromArray(this.global);
            this.colliderObject.matrixWorldNeedsUpdate = true;
        }
    }

    setRenderObject(renderObject) {
        const render = this.service("ThreeRenderManager");
        if (render) render.dirtyAllLayers();
        renderObject.wcPawn = this;
        this.renderObject = renderObject;
        this.renderObject.matrixAutoUpdate = false;
        this.renderObject.matrix.fromArray(this.global);
        this.renderObject.matrixWorldNeedsUpdate = true;
        if (render && render.scene) render.scene.add(this.renderObject);
        if (this.onSetRenderObject) this.onSetRenderObject(renderObject);
    }

    setColliderObject(colliderObject) {
        const render = this.service("ThreeRenderManager");
        if (render) render.dirtyAllLayers();
        colliderObject.wcPawn = this;
        this.colliderObject = colliderObject;
        this.colliderObject.matrixAutoUpdate = false;
        this.colliderObject.matrix.fromArray(this.global);
        this.colliderObject.matrixWorldNeedsUpdate = true;
        if (render && render.scene) render.scene.add(this.colliderObject);
    }
};



//------------------------------------------------------------------------------------------
//-- ThreeCamera  --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const PM_ThreeCamera = superclass => class extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_21__.PM_Camera)(superclass) {
    constructor(...args) {
        super(...args);

        if (this.isMyPlayerPawn) {
            const render = this.service("ThreeRenderManager");
            render.camera.matrix.fromArray(this.lookGlobal);
            render.camera.matrixAutoUpdate = false;
            render.camera.matrixWorldNeedsUpdate = true;

            this.listen("lookGlobalChanged", this.refreshCameraTransform);
            this.listen("viewGlobalChanged", this.refreshCameraTransform);
        }
    }

    refreshCameraTransform() {
        const render = this.service("ThreeRenderManager");
        render.camera.matrix.fromArray(this.lookGlobal);
        render.camera.matrixWorldNeedsUpdate = true;
    }

    setRayCast(xy) {
        const x = ( xy[0] / window.innerWidth ) * 2 - 1;
        const y = - ( xy[1] / window.innerHeight ) * 2 + 1;
        const render = this.service("ThreeRenderManager");
        if (!this.raycaster) this.raycaster = new THREE.Raycaster();
        this.raycaster.setFromCamera({x: x, y: y}, render.camera);
        this.raycaster.params.Line = {threshold: 0.2};
        this.raycaster.params.Point = {threshold: 0.2};
        return this.raycaster;
    }

    setXRRayCast(xrEvent) {
        let vec = new THREE.Vector3(0, 0, -1);
        vec.applyEuler(xrEvent.target.rotation);
        if (!this.raycaster) this.raycaster = new THREE.Raycaster();
        this.raycaster.set(xrEvent.target.position, vec);
    }

    pointerRaycast(source, targets, optStrictTargets) {
        if (Array.isArray(source)) {
            this.setRayCast(source);
        } else {
            this.setXRRayCast(source);
        }
        const render = this.service("ThreeRenderManager");
        const h = this.raycaster.intersectObjects(targets || render.threeLayer("pointer"));
        if (h.length === 0) {
            return {ray: this.raycaster.ray.clone()};
        }

        let hit;
        let normal;
        if (optStrictTargets) {
            for (let i = 0; i < h.length; i++) {
                let me = h[i].object;
                let wcPawn = me.wcPawn;
                while (!wcPawn && me) {
                    me = me.parent;
                    wcPawn = me.wcPawn;
                }
                if (wcPawn) {
                    normal = wcPawn.hitNormal;
                    if (Array.isArray(normal)) {
                        normal = new THREE.Vector3(...normal);
                    }
                    hit = h[i];
                    break;
                }
            }
        }

        for (let i = 0; i < h.length; i++) {
            let me = h[i].object;
            if (me.renderOrder > 1000) {
            // we would actually sort them in renderOrder, but for now we use only for special cases,
            // and orders among objects with renderOrder should not come in play easily
                hit = h[i];
                break;
            }
        }

        if (!hit) {
            hit = h[0];
        }

        if(hit.face && !normal) {
            normal = hit.face.normal;
        }
        if (normal) {
            let m = new THREE.Matrix3().getNormalMatrix( hit.object.matrixWorld );
            normal = normal.clone().applyMatrix3( m ).normalize();
        }

        return {
            pawn: this.getPawn(hit.object),
            xyz: hit.point.toArray(),
            uv: hit.uv ? hit.uv.toArray() : undefined,
            normal: normal ? normal.toArray() : undefined,
            distance: hit.distance,
            ray: this.raycaster.ray.clone()
        };
    }

    getPawn(object) {
        let o = object;
        while(!o.wcPawn) {
            if (!o.parent) return null;
            o = o.parent;
        };
        return o.wcPawn;
    }

};

//------------------------------------------------------------------------------------------
//-- XRController --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class XRController {
    constructor(manager) {
        this.manager = manager;
        this.controllerModelFactory = new three_examples_jsm_webxr_XRControllerModelFactory_js__WEBPACK_IMPORTED_MODULE_20__.XRControllerModelFactory();

        this.raycaster = new THREE.Raycaster();

        function selectStart(controller, evt) {
            if (manager.avatar) {
                let e = {
                    button: 0,
                    buttons: 1,
                    id: 1,
                    source: evt,
                };
                manager.avatar.doPointerDown(e);
            }
            controller.userData.pointerDown = true;
            controller.userData.pointerDownTime = Date.now();
        }

        function selectEnd(controller, evt) {
            if (manager.avatar) {
                let e = {
                    button: 0,
                    buttons: 1,
                    id: 1,
                    source: evt,
                };
                if (controller.userData.pointerDownTime) {
                    let now = Date.now();
                    if (now - controller.userData.pointerDownTime < 400) {
                        manager.avatar.doPointerTap(e);
                    }
                }
                manager.avatar.doPointerUp(e);
            }
            controller.userData.pointerDown = false;
            controller.userData.pointerDownTime = null;
        }

        [0, 1].forEach((i) => {
            let n = `controller${i}`;
            this[n] = manager.renderer.xr.getController(i);
            let c = this[n];
            c.addEventListener("selectstart", (evt) => selectStart(c, evt));
            c.addEventListener("selectend", (evt) => selectEnd(c, evt));
            c.userData.pointerDown = false;
            c.addEventListener("connected", (event) => {
                c.add(this.buildController(event.data, i));
            });
            c.addEventListener("disconnected", () => {
                c.remove(c.children[0]);
                manager.origReferenceSpace = null;
            });
            manager.scene.add(c);

	    let gn = `controllerGrip${i}`;
            this[gn] = manager.renderer.xr.getControllerGrip(i);
            let g = this[gn];
	    g.add(this.controllerModelFactory.createControllerModel(g));
	    manager.scene.add(g);
        });
        this.lastDelta = [0, 0];
    }

    buildController(data, i) {
        let geometry;
        let material;

        if (data.gamepad) {
            this[`gamepad${i}`] = data.gamepad;
        }

        if (!this.manager.origReferenceSpace) {
            this.manager.origReferenceSpace = this.manager.renderer.xr.getReferenceSpace();
        }

        switch (data.targetRayMode) {
            case 'tracked-pointer':
                geometry = new THREE.BufferGeometry();
                geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, - 1 ], 3));
                geometry.setAttribute('color', new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3));
                material = new THREE.LineBasicMaterial({vertexColors: true, blending: THREE.AdditiveBlending});
                return new THREE.Line(geometry, material);
            case 'gaze':
                geometry = new THREE.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1);
                material = new THREE.MeshBasicMaterial({opacity: 0.5, transparent: true});
                return new THREE.Mesh(geometry, material);
        }

    }

    update(avatar) {
        let dx = 0;
        let dy = 0;
        dx += this.gamepad0?.axes[2] || 0;
        dx += this.gamepad1?.axes[2] || 0;
        dy += this.gamepad0?.axes[3] || 0;
        dy += this.gamepad1?.axes[3] || 0;

        if ((this.lastDelta[0] === 0 && this.lastDelta[1] === 0) &&
            (dx !== 0 || dy !== 0)) {
            avatar.startMotion();
        }

        if (dx !== 0 || dy !== 0) {
            avatar.updateMotion(dx * 80, dy * 80);
        }
        if ((this.lastDelta[0] !== 0 || this.lastDelta[1] !== 0) &&
            (dx === 0 && dy === 0)) {
            avatar.endMotion();
        }
        this.lastDelta = [dx, dy];

        if (this.controller0.userData.pointerDown) {
            let e = {
                button: 0,
                buttons: 1,
                id: 1,
                source: {target: this.controller0}
            };
            avatar.doPointerMove(e);
        }

        if (this.controller1.userData.pointerDown) {
            let e = {
                button: 0,
                buttons: 1,
                id: 1,
                source: {target: this.controller1}
            };
            avatar.doPointerMove(e);
        }
    }
}


//------------------------------------------------------------------------------------------
//-- ThreeRenderManager --------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// The top render interface that controls the execution of draw passes.

class ThreeRenderManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_21__.RenderManager {
    constructor(options = {}, name) {
        super(options, name || "ThreeRenderManager");

        this.threeLayers = {}; // Three-specific layers

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);

        if (!options.canvas) {
            this.canvas = document.createElement("canvas");
            this.canvas.id = "ThreeCanvas";
            this.canvas.style.cssText = "position: absolute; left: 0; top: 0; z-index: 0";
            document.body.insertBefore(this.canvas, null);
            options.canvas = this.canvas;
        }

        this.setupRenderer(options);
    }

    setupRenderer(options) {
        if (this.renderer) {
            this.renderer.dispose();
        }

        if (this.vrButton) {
            this.vrButton.remove();
        }

        if (this.canvas) {
            options.canvas = this.canvas;
        }

        this.renderer = new THREE.WebGLRenderer(options);
        this.renderer.shadowMap.enabled = true;

        this.hasXR().then((xr) => {
            if (xr) {
                this.vrButton = three_examples_jsm_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_19__.VRButton.createButton(this.renderer);
                let styleCallback = (records, _observer) => {
                    let styleChanged = false;

                    for (let i = 0; i < records.length; i++) {
                        if (records[i].type === "attributes") {
                            styleChanged = true;
                            break;
                        }
                    }
                    if (styleChanged) {
                        if (this.vrButton.textContent === "ENTER VR") {
                            if (this.vrButton.style.left) {
                                this.vrButton.style.removeProperty("left");
                                this.vrButton.style.setProperty("right", "20px");
                            }
                        }
                    }
                };
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer = null;
                }
                this.observer = new MutationObserver(styleCallback);
                this.observer.observe(this.vrButton, {attributes: true, attributeFilter: ["style"]});

                document.body.appendChild(this.vrButton);
                this.renderer.xr.enabled = true;
                this.xrController = new XRController(this);
            } else {
                // at this moment, there is no effects added but this is where they will go.
                this.composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_0__.EffectComposer( this.renderer );
                this.renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_1__.RenderPass( this.scene, this.camera );
                this.composer.addPass( this.renderPass );
            }
            this.resize();
            this.subscribe("input", "resize", () => this.resize());
            this.setRender(true);
        });
    }

    installOutlinePass(){
        if(!this.outlinePass){
            this.outlinePass = new three_examples_jsm_postprocessing_OutlinePass_js__WEBPACK_IMPORTED_MODULE_18__.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), this.scene, this.camera );
            this.outlinePass.edgeStrength = 3.0;
            this.outlinePass.edgeGlow = 0.1;
            this.outlinePass.edgeThickness = 1.5;
            this.outlinePass.pulsePeriod = 2.0;
            this.outlinePass.visibleEdgeColor.set( '#88ff88' );
            this.outlinePass.hiddenEdgeColor.set( '#ff0000' );
            this.outlinePass.selectedObjects = [];
            this.composer.addPass( this.outlinePass );
        }
    }

    addToOutline(obj){
        if(!this.outlinePass)this.installOutlinePass();
        this.outlinePass.selectedObjects.push( obj );
    }

    clearOutline(){
        this.outlinePass.selectedObjects = [];
    }

    setRender(bool) {
        this.doRender = bool;
    }

    async hasXR() {
        try {
            return await navigator.xr.isSessionSupported("immersive-vr");
        } catch (_) {
            return false;
        }
    }

    destroy() {
        super.destroy();
        this.renderer.dispose();
        if (this.canvas) this.canvas.remove();
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        if (this.composer) {
            this.composer.setSize(window.innerWidth, window.innerHeight)
        }
    }

    dirtyLayer(name) {
        this.threeLayers[name] = null;
    }

    dirtyAllLayers(){
        this.threeLayers = {};
    }

    threeLayer(name) {
        if (!this.layers[name]) return [];
        if (!this.threeLayers[name]) {
            this.threeLayers[name] = Array.from(this.layers[name]).map(p => p.colliderObject || p.renderObject);
        }
        return this.threeLayers[name];
    }

    threeLayerUnion(...names) {
        let result = [];
        while (names.length > 0) {
            const a = this.threeLayer(names.pop());
            result = result.concat(a.filter(x => result.indexOf(x) < 0))
        }
        return result;
    }

    update() {
        if (this.doRender) {
            if (this.composer) {
                this.composer.render();
            } else {
                this.renderer.render(this.scene, this.camera);
            }
        }

        if (this.xrController && this.avatar) {
            this.xrController.update(this.avatar);
        }
    }
}

const THREE = {
    ...three__WEBPACK_IMPORTED_MODULE_22__, Pass: three_examples_jsm_postprocessing_Pass_js__WEBPACK_IMPORTED_MODULE_2__.Pass, UnrealBloomPass: three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_17__.UnrealBloomPass, CopyShader: three_examples_jsm_shaders_CopyShader_js__WEBPACK_IMPORTED_MODULE_3__.CopyShader, CSMFrustum: three_examples_jsm_csm_CSMFrustum_js__WEBPACK_IMPORTED_MODULE_4__.CSMFrustum, CSMShader: three_examples_jsm_csm_CSMShader_js__WEBPACK_IMPORTED_MODULE_5__.CSMShader, CSM: three_examples_jsm_csm_CSM_js__WEBPACK_IMPORTED_MODULE_6__.CSM,
    OBJLoader: three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_7__.OBJLoader, MTLLoader: three_examples_jsm_loaders_MTLLoader_js__WEBPACK_IMPORTED_MODULE_8__.MTLLoader, GLTFLoader: three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_9__.GLTFLoader, FBXLoader: three_examples_jsm_loaders_FBXLoader_js__WEBPACK_IMPORTED_MODULE_10__.FBXLoader, DRACOLoader: three_examples_jsm_loaders_DRACOLoader_js__WEBPACK_IMPORTED_MODULE_11__.DRACOLoader, SVGLoader: three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_12__.SVGLoader, EXRLoader: three_examples_jsm_loaders_EXRLoader_js__WEBPACK_IMPORTED_MODULE_13__.EXRLoader, BufferGeometryUtils: three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_14__,
    FontLoader: three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_15__.FontLoader, Font: three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_15__.Font, TextGeometry: three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_16__.TextGeometry
};




/***/ }),

/***/ "./src/agoraChat.js":
/*!**************************!*\
  !*** ./src/agoraChat.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgoraChatManager": () => (/* binding */ AgoraChatManager)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io



class AgoraChatManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "AgoraChatManager");
        this.subscribe("playerManager", "enter", "playerEnter");
        this.subscribe("playerManager", "leave", "playerLeave");
        this.subscribe("playerManager", "detailsUpdated", "playerDetailsUpdated");

        this.startMessageListener();

        // if this view's player is already in the world, make sure the embedded
        // chat app is running.
        const player = this.localPlayer;
        const alreadyHere = player && player.inWorld;

        if (alreadyHere) this.ensureChatIFrame();

        console.log(`AgoraChatManager (local actor ${alreadyHere ? "already" : "not yet"} here)`, this);
    }

    get localPlayer() { return this.model.service("PlayerManager").players.get(this.viewId);  }

    computeSessionHandles() {
        // derive handles { persistent, ephemeral } from the
        // persistentId and sessionId respectively.
        const hasher = id => _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.hash(id).slice(0, 8); // chat app only uses 8 chars
        const persistent = this.session.persistentId;
        const ephemeral = this.sessionId;
        return { persistent: hasher(persistent), ephemeral: hasher(ephemeral)};
    }

    startMessageListener() {
        this.messageListener = e => {
            if (!this.chatIFrame) return;

            if (e.source === this.chatIFrame.contentWindow) this.handleChatFrameEvent(e.data);
        };
        window.addEventListener('message', this.messageListener);
    }

    sendMessageToChat(event, data = null) {
        if (!this.chatIFrame) {
            console.warn(`attempt to send ${event} event before chat initialized`);
            return;
        }
        this.chatIFrame.contentWindow.postMessage({ event, data }, "*");
    }

    handleChatFrameEvent({ event, data }) {
        // console.log(event, data);
        switch (event) {
            case 'sessionInfoRequest':
                this.handleSessionInfoRequest(data);
                break;
            case 'userInfoRequest':
                this.handleUserInfoRequest(data);
                break;
            case 'videoChatInitialStateRequest':
                this.handleVideoChatInitialStateRequest(data);
                break;
            case 'chatReady':
                this.handleChatReady(data);
                break;
            case 'chatJoined':
                this.handleChatJoined(data);
                break;
            case 'chatLeft':
                this.handleChatLeft(data);
                break;
            case 'setFrameStyle':
                this.handleSetFrameStyle(data);
                break;
            case "setAvatarURL":
                this.handleSetAvatarURL(data);
                break;
            default:
                console.warn(`unknown event ${event} from chat iframe`);
        }
    }

    ensureChatIFrame() {
        if (this.chatIFrame) return;

        const existing = document.getElementById('agoraChatIFrame');
        if (existing) {
            // not sure there is any legitimate way this can happen
            console.warn("AgoraChatMgr: found existing iframe");
            this.chatIFrame = existing;
            this.chatReady = true; // assume it's ready
            return;
        }

        // use chatReady flag to avoid sending important messages to the chat iframe
        // until we've heard from it that it's ready to start.
        // if we include the url option requestName, this won't happen until the chat
        // has requested and received from the user a nickname.
        this.chatReady = false;
        const frame = this.chatIFrame = document.createElement('iframe');
        frame.id = 'agoraChatIFrame';
        frame.style.cssText = "position: absolute; width: 1px; height: 1px; z-index: 100; transition: none;"
        frame.setAttribute("allow", "microphone;camera");
        frame.setAttribute("sandbox", "allow-same-origin allow-scripts");
        document.body.appendChild(frame);
        const chatURL = new URL(`../video-chat/microverse.html?debug=session`, window.location.href).href;
        // const chatURL = new URL(`http://localhost:8000/video-chatv4/microverse.html?debug=session`).href;
        frame.src = chatURL;
    }

    handleSessionInfoRequest() {
        const { persistent, ephemeral } = this.computeSessionHandles();
        this.sendMessageToChat('sessionInfo', { sessionHandle: persistent, ephemeralSessionHandle: ephemeral });
    }

    handleUserInfoRequest() {
        const { _name: nick } = this.localPlayer;
        const userInfo = { initials: this.viewId.slice(0, 2), nickname: nick || '' };
        this.sendMessageToChat('userInfo', userInfo);
    }

    handleVideoChatInitialStateRequest() {
        let info = {
            mic: 'on',
            video: 'unavailable'
        };
        this.sendMessageToChat('videoChatInitialState', info);
    }

    handleChatReady(_data) {
        this.chatReady = true;
        this.updateActiveInChat();
    }

    handleChatJoined(_data) {
        this.publish("playerManager", "details", { playerId: this.viewId, details: { inChat: true } });
    }

    handleChatLeft(_data) {
        this.publish("playerManager", "details", { playerId: this.viewId, details: { inChat: false } });
    }

    handleSetFrameStyle(data, _source) {
        Object.assign(this.chatIFrame.style, data);
    }

    playerEnter(p) {
        if (p.playerId !== this.viewId) {
            this.updateActiveInChat();
            return;
        }

        console.log("our player entered");
        this.ensureChatIFrame();
    }

    playerLeave(p) {
        this.updateActiveInChat(); // whichever player left, its actor.inWorld will already have been updated
        if (p.playerId !== this.viewId) return;

        console.log("our player left");
        if (!this.chatIFrame) return;

        this.sendMessageToChat('leaveChat');
    }

    playerDetailsUpdated(_p) {
        this.updateActiveInChat();
    }

    updateActiveInChat() {
        // tell the chat iframe which users are currently in the chat, as updated in
        // the player states in response to events from each user's AgoraChatManager
        if (!this.chatReady) return;

        const inChat = this.model.service("PlayerManager").playersInWorld().filter(p => p._inChat).map(p => p._name);
        if (this.lastInChat?.length === inChat.length && !inChat.some((nick, i) => this.lastInChat[i] !== nick)) return;

        this.lastInChat = inChat;
        this.sendMessageToChat('activeInChat', { inChat });
    }

    destroy() {
        console.log("AgoraChatMgr: destroy");
        window.removeEventListener('message', this.messageListener);
        if (this.chatIFrame) this.chatIFrame.remove(); // will cause us to crash out of Agora chat, probably not cleanly
        this.chatIFrame = null;
        this.chatReady = false;
        super.destroy();
    }
}


/***/ }),

/***/ "./src/assetManager.js":
/*!*****************************!*\
  !*** ./src/assetManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetManager": () => (/* binding */ AssetManager),
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "addEnvMap": () => (/* binding */ addEnvMap),
/* harmony export */   "addMeshProperties": () => (/* binding */ addMeshProperties),
/* harmony export */   "addTexture": () => (/* binding */ addTexture),
/* harmony export */   "normalizeSVG": () => (/* binding */ normalizeSVG)
/* harmony export */ });
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io
/* globals JSZip */

const MAX_IMPORT_MB = 100; // aggregate

let THREE;

function isZip(buffer) {
    return buffer[0] === 0x50 && buffer[1] === 0x4b &&
        buffer[2] === 0x03 && buffer[3] === 0x04;
}

class ImportChecker {
    constructor() {
        this.totalSize = 0;
    }

    addItem(spec) {
        if (!this.withinLimits) return false;

        this.totalSize += spec.buffer.byteLength;
        return this.withinLimits;
    }

    get withinLimits() {
        return this.totalSize <= 1048576 * MAX_IMPORT_MB;
    }

    get totalBytes() {
        return this.totalSize;
    }
}

class AssetManager {
    constructor() {
        this.assetCache = {}; // {[dataId]: {data /*(of any kind)*/, ids: [viewObjectId|"0"]}}
        this.supportedFileTypes = new Set(["zip", "glb", "obj", "fbx", "svg", "png", "jpeg", "jpg", "gif", "exr", "pdf", "vrse"]);
    }

    fetchFile(item) {
        const file = item.getAsFile(); // getAsFile() is a method of DataTransferItem
        const type = this.getFileType(file.name);

        if (file && type) {
            return this.fetchSpecForDroppedFile(file, type).then((spec) => {
                if (!this.supportedFileTypes.has(type)) {
                    throw new Error("unsupported file type");
                }

                return {type, buffer: spec.buffer};
            });
        }
        throw new Error("could not read a file");
    }

    async handlePasteText(items) {
        for (const item of items) {
            if (item.kind === "string" && item.type === "text/plain") {
                return new Promise(resolve => item.getAsString(resolve));
            }
        }
    }

    async handleFiles(items) {
        const importSizeChecker = new ImportChecker();

        if (items.length > 1) {
            console.warn("multiple files or dirs dropped");
        }

        const item = items[0];

        const entry = item.getAsEntry ? item.getAsEntry()
            : (item.webkitGetAsEntry ? item.webkitGetAsEntry() : null);
        if (entry && entry.isDirectory) {
            try {
                return this.analyzeDirectory(entry, importSizeChecker);
                // returns {zip, type}
            } catch(_err) {
                throw Error("directory could not be zipped");
            }
        }

        let obj = await this.fetchFile(item);
        if (entry) obj.fileName = entry.fullPath;
        return obj;
    }

    async analyzeDirectory(dirEntry, importSizeChecker) {
        // recursively examine the directory contents, adding files to zip and figure out type
        const todo = [{path: dirEntry.fullPath, entry: dirEntry, depth: 0}];

        let zip = new JSZip();

        let maybeType;

        const processEntries = () => {
            const { path, entry, depth } = todo.pop();
            if (entry.isDirectory) {
                return new Promise((resolve, _reject) => {
                    entry.createReader().readEntries(entries => {
                        for (const entryInDir of entries) {
                            todo.push({ path: entryInDir.fullPath, entry: entryInDir, depth: depth + 1 });
                        }
                        resolve(true);
                    });
                })
            } else {
                // file() is a method of FileSystemFileEntry
                return new Promise((resolve, reject) => {
                    entry.file(async file => {
                        const fileType = this.getFileType(file.name);
                        const spec = await this.fetchSpecForDroppedFile(file, fileType);
                        if (spec.type === "obj") {
                            maybeType = "obj";
                        }
                        spec.path = path;
                        spec.depth = depth;
                        importSizeChecker.addItem(spec);
                        if (importSizeChecker.withinLimits) {
                            zip.file(path, spec.buffer);
                        } else {
                            throw new Error("directory too large");
                        }
                        resolve(true);
                    }, (err) => {
                        reject(err);
                    });
                });
            }
        };

        return new Promise(async (resolve, _reject) => {
            while (todo.length > 0) {
                await processEntries();
            }
            resolve(true);
        }).then(() => ({zip, type: maybeType}));
    }

    getFileType(fileName) {
        let index = fileName.lastIndexOf(".");
        if (index >= 0) {
            return fileName.slice(index + 1).toLowerCase();
        }
        return null;
    }


    async fetchSpecForDroppedFile(file, fileType) {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        }).then((buffer) => {
            return { name: file.name, type: fileType, blob: file, buffer };
        }).catch((e) => {
            console.error(e);
            throw new Error("reading a file failed");
        });
    }

    async drop(data) {
        let hasFiles = [...data.types].includes("Files");
        if (hasFiles) {
            let {zip, buffer, type, fileName} = await this.handleFiles(data.items);
            if (zip) return zip.generateAsync({type: "uint8array"});
            return { fileName, type, buffer };
        } else {
            let buffer = await this.handlePasteText(data.items);
            if (buffer) return { type: "pastedtext", buffer };
        }
        return null;
    }

    setupHandlersOn(dom, callback) {
        const handleData = async (data) => {
            let obj = await this.drop(data);
            if (!obj) {
                console.log("not a file");
                return;
            }
            let {buffer, fileName, type} = obj;
            if (callback) {
                callback(buffer, fileName, type);
            };
        };
        dom.ondragover = (evt) => evt.preventDefault();
        dom.ondrop = (evt) => {
            evt.preventDefault();
            handleData(evt.dataTransfer);
        }
        dom.onpaste = (evt) => {
            evt.preventDefault();
            handleData(evt.clipboardData || window.clipboardData);
        };
    }

    setCache(dataId, data, id) {
        if (!this.assetCache[dataId]) {
            this.assetCache[dataId] = {data, ids: new Set([id])};
        } else {
            this.assetCache[dataId].ids.delete("0");
            this.assetCache[dataId].ids.add(id);
        }
    }

    getCache(dataId) {
        let obj = this.assetCache[dataId];
        if (obj) {return obj.data;}
        return null;
    }

    fillCacheIfAbsent(dataId, func, id) {
        let obj = this.assetCache[dataId];
        if (obj) {
            this.assetCache[dataId].ids.add(id);
            return obj.data;
        }
        obj = func();
        this.setCache(dataId, obj, id);
        return obj;
    }

    revoke(dataId, id) {
        let obj = this.assetCache[dataId];
        if (!obj) {return;}
        obj.ids.delete(id);
        if (obj.ids.size === 0) {
            delete this.assetCache[dataId];
        }
    }

    async load(buffer, type, THREE, options) {
        // here is a bit of checks to do. The file dropped might have been a directory,
        // and then we zipped it. But the file dropped might have been a zip file,
        // The dropped file might have been named like
        // abc.glb.zip, but it might have been abc.zip
        let types = {
            "glb": "importGLB",
            "obj": "importOBJ",
            "fbx": "importFBX",
            "svg": "importSVG",
            "png": "importIMG",
            "jpg": "importIMG",
            "jpeg": "importIMG",
            "gif": "importIMG",
            "exr": "importEXR"
        };

        if (isZip(buffer)) {
            let zipFile = new JSZip();
            let zip = await zipFile.loadAsync(buffer);
            let files = Object.keys(zip.files);

            for (let file in types) {
                if (files.find((name) => name.endsWith(`.${file}`))) {
                    let loader = new Loader();
                    return loader[types[file]](buffer, options, THREE);
                }
            }

            throw new Error("unknown file type");
        }

        for (let file in types) {
            if (type === file) {
                let loader = new Loader();
                return loader[types[file]](buffer, options, THREE);
            }
        }
        throw new Error("unknown file type");
    }
}

class Loader {
    localName(str) {
        // str can be  [blob:]https://.../... or /.../... such.
        // It just take the last part after the last /
        let index = str.lastIndexOf("/");
        if (index >= 0) {
            return str.slice(index + 1);
        }
        return str;
    }

    imgType(name) {
        // returns a MIME-subtype string or null
        if (name.endsWith(".png")) {
            return "png";
        }
        if (name.endsWith(".jpeg") || name.endsWith(".jpg")) {
            return "jpeg";
        }
        return null;
    };

    async setupFilesInZip(buffer, required) {
        // required: {[name]: dataType}
        // returns {[type]: blob, ...imgContents}
        let zipFile = new JSZip();
        let zip = await zipFile.loadAsync(buffer);
        let imgContents = {}; // {[name after slash]: dataURL}

        let files = Object.keys(zip.files);

        let promises = Object.keys(required).map((req) => {
            let dataType = required[req];
            let file = files.find((name) => name.endsWith(`.${req}`));
            return zip.file(file).async(dataType).then((content) => {
                return {type: req, blob: URL.createObjectURL(new Blob([content]))};
            });
        });

        let result = {};
        await Promise.all(promises).then((pairs) => {
            pairs.forEach((pair) => {
                result[pair.type] = pair.blob;
            });
        });

        let imgFiles = files.map((n) => ({name: n, type: this.imgType(n)})).filter((o) => o.type);

        let imgPromises = imgFiles.map((obj) => {
            let {name, type} = obj;
            let localName = this.localName(name);
            return zip.file(name).async("uint8array").then((content) => {
                let blob = new Blob([content], {type: `image/${type}`});
                let reader = new FileReader();
                return new Promise((resolve, _reject) => {
                    reader.addEventListener("load", () => {
                        imgContents[localName] = reader.result;
                        resolve(reader.result);
                    });
                    return reader.readAsDataURL(blob);
                });
            });
        });

        await Promise.all(imgPromises);

        return {...result, imgContents};
    };

    setURLModifierFor(manager, imgContents) {
        if (!imgContents) {return;}
        manager.setURLModifier(urlStr => {
            // console.log(`handling request for ${urlStr}`);

            if (this.imgType(urlStr)) {
                // console.log(`returning imgUrl`);
                let localName = this.localName(urlStr);
                return imgContents[localName] || ""; // it may not have the file
            }
            // console.log(`returning ${urlStr}`);
            return urlStr;
        });
    }

    async importOBJ(buffer, options, THREE) {
        let mtl;

        const setupFiles = async () => {
            if (!isZip(buffer)) {
                let c = {"obj": URL.createObjectURL(new Blob([buffer]))};
                return Promise.resolve(c);
            }

            return this.setupFilesInZip(buffer, {"obj": "string", "mtl": "string"});
        };

        let contents = await setupFiles();
        const manager = new THREE.LoadingManager();
        this.setURLModifierFor(manager, contents.imgContents);

        if (contents.mtl) {
            const mtlLoader = new THREE.MTLLoader(manager);
            mtl = await new Promise((resolve, reject) => {
                mtlLoader.load(contents.mtl, resolve, null, reject);
            });//.catch((err) => console.log("laoding material failed"));
        }

        const objLoader = new THREE.OBJLoader(manager);
        let obj = await new Promise((resolve, reject) => {
            if (mtl) {
                objLoader.setMaterials(mtl);
            }
            objLoader.load(contents.obj, resolve, null, reject);
        });//.catch((err) => console.log("laoding material failed"));

        Object.keys(contents).forEach((k) => {
            if (contents[k] && k !== "imgContents") {
                URL.revokeObjectURL(contents[k]);
            }
        });
        return obj;
    }

    async importFBX(buffer, options, THREE) {
        const setupFiles = async () => {
            if (!isZip(buffer)) {
                let c = {"fbx": URL.createObjectURL(new Blob([buffer]))};
                return Promise.resolve(c);
            }

            return this.setupFilesInZip(buffer, {"fbx": "ArrayBuffer"});
        };

        let contents = await setupFiles();

        const manager = new THREE.LoadingManager();
        this.setURLModifierFor(manager, contents.imgContents);

        const fbxLoader = new THREE.FBXLoader(manager);
        let obj = await new Promise((resolve, reject) => {
            return fbxLoader.load(contents.fbx, resolve, null, reject);
        }).then((object) => {
            if (object.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(object);
                object._croquetAnimation = {
                    lastTime: 0,
                    mixer,
                    animations: object.animations
                };
            }
            return object;
        });

        Object.keys(contents).forEach((k) => {
            if (contents[k] && k !== "imgContents") {
                URL.revokeObjectURL(contents[k]);
            }
        });
        return obj;
    }

    async importGLB(buffer, options, THREE) {
        const getBuffer = async () => {
            if (isZip(buffer)) {
                let zipFile = new JSZip();
                let zip = await zipFile.loadAsync(buffer);
                let files = Object.keys(zip.files);
                let glbFile = files.find((name) => name.endsWith(".glb"));
                return zip.files[glbFile].async("ArrayBuffer");
            } else {
                return Promise.resolve(buffer.buffer);
            }
        };

        return getBuffer().then((data) => {
            let loader = new THREE.GLTFLoader();
            return new Promise((resolve, _reject) => {
                let draco = new THREE.DRACOLoader();
                draco.setDecoderConfig({type: 'wasm'});
                draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
                loader.setDRACOLoader(draco);
                return loader.parse(data, null, (obj) => resolve(obj));
            }).then((loaded) => {
                let {scene, animations} = loaded;
                if (animations.length > 0) {
                    const mixer = new THREE.AnimationMixer(scene);
                    scene._croquetAnimation = {
                        lastTime: 0,
                        mixer,
                        animations
                    };
                }
                return scene;
            })
        });
    }

    async importSVG(buffer, options, THREE) {
        const setupFiles = async () => {
            let c = {"svg": URL.createObjectURL(new Blob([buffer]))};
            return Promise.resolve(c);
        };

        let contents = await setupFiles();

        let svg = await new Promise((resolve, _reject) => {
            const {fullBright, color, frameColor, depth, _shadow, _singleSided} = options;
            const M = fullBright ? THREE.MeshBasicMaterial : THREE.MeshStandardMaterial;
            const loader = new THREE.SVGLoader();
            let offset = 0;
            loader.load(contents.svg, (data) => {
                const paths = data.paths;
                const group = new THREE.Group();
                for ( let i = 0; i < paths.length; i ++) {
                    const path = paths[ i ];
                    const fillColor = path.userData.style.fill;
                    if ( fillColor !== undefined && fillColor !== 'none' ) {
                        let material = new M( {
                            color: new THREE.Color().setStyle( fillColor ),
                            opacity: path.userData.style.fillOpacity,
                            side: (depth ? THREE.FrontSide : THREE.DoubleSide),
                        } );
                        if(color)material.color = new THREE.Color(color);
                        if(depth)material = [material, new THREE.MeshStandardMaterial({color:frameColor, metalness:1.0})];
                        const shapes = THREE.SVGLoader.createShapes( path );
                        for ( let j = 0; j < shapes.length; j ++ ) {
                            const shape = shapes[ j ];
                            let geometry;
                            if (depth) {
                                geometry = new THREE.ExtrudeGeometry( shape, {depth: 1 + offset, bevelEnabled:false})
                            } else {
                                geometry = new THREE.ShapeGeometry( shape );
                            }
                            const mesh = new THREE.Mesh( geometry, material );
                            mesh.position.z += depth;
                            offset += 0.002;
                            group.add( mesh );
                        }
                    }
                    const strokeColor = path.userData.style.stroke;
                    if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                        const material = new M( {
                            color: new THREE.Color().setStyle( strokeColor ),
                            opacity: path.userData.style.strokeOpacity,
                            //transparent: true,
                            side: THREE.DoubleSide,
                            //depthWrite: false,
                        } );

                        for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {
                            const subPath = path.subPaths[ j ];
                            const geometry = THREE.SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );
                            if ( geometry ) {
                                const mesh = new THREE.Mesh( geometry, material );
                                group.add( mesh );
                            }
                        }
                    }
                }
                resolve(group);
	    });
        });

        Object.keys(contents).forEach((k) => {
            if (contents[k] && k !== "imgContents") {
                URL.revokeObjectURL(contents[k]);
            }
        });
        return svg;
    }

    async importIMG(buffer, options, THREE) {
        let objectURL = URL.createObjectURL(new Blob([buffer]));
        let loader = new THREE.TextureLoader();
        let texture = new Promise((resolve, reject) => {
            loader.load(objectURL, (texture) => {
                texture.width = texture.image.width;
                texture.height = texture.image.height;
                resolve(texture);
            }, null, reject);
        });

        return texture.then(() => {
            URL.revokeObjectURL(objectURL);
            return texture;
        })
    }

    async importEXR(buffer, options, THREE) {
        const setupFiles = async () => {
            if (!isZip(buffer)) {
                let c = {"exr": URL.createObjectURL(new Blob([buffer]))};
                return Promise.resolve(c);
            }

            return this.setupFilesInZip(buffer, {"exr": "ArrayBuffer"});
        };

        let contents = await setupFiles();

        let obj = new Promise((resolve, reject) => {
            new THREE.EXRLoader().load(contents.exr, resolve, null, reject);
        });

        Object.keys(contents).forEach((k) => {
            if (contents[k] && k !== "imgContents") {
                URL.revokeObjectURL(contents[k]);
            }
        });
        return obj;
    }
}

function addMeshProperties(obj3d, shadow, singleSide, noFog, THREE) {
    obj3d.traverse(n => {
        if(n.material) {
            if(noFog)n.material.fog = false;
            if (singleSide) {
                n.material.side = THREE.FrontSide; //only render front side
            }
            n.material.format = THREE.RGBAFormat; // fixes a bug in GLTF import
            if(shadow){
                n.castShadow = true;
                n.receiveShadow = true;
            }
        }
    });
}

function normalizeSVG(svgGroup, depth, shadow, three) {
    THREE = three;
    let bb = boundingBox(svgGroup);
    let ext = extent3D(svgGroup, bb);
    let cen = center3D(svgGroup, bb);
    svgGroup.scale.y *= -1;
    cen.y *= -1;
    let mx = Math.max(ext.x, ext.y);
    // scale SVG object to 1 along largest axis
    if (mx > 0) {
        // need svgGroup.aspect for positioning in jump to card
        if (ext.y) svgGroup.aspect = ext.x / ext.y;
        svgGroup.position.set(-cen.x, -cen.y, -cen.z);
        let sc = 1 / mx;
        svgGroup.position.multiplyScalar(sc);
        let sg = svgGroup.scale;
        if (depth) {
            svgGroup.scale.set(sg.x * sc, sg.y * sc, depth);
        } else {
            svgGroup.scale.multiplyScale(sc);
        }
    }

    svgGroup.traverse(obj => {
        if (obj.material) {
            normalizeUV(obj.geometry.attributes.uv.array, obj.geometry.attributes.normal.array, bb);
            if (shadow) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        }
    });
}

function normalizeUV(uvArray, uvNormal, bb) {
    let s = [bb.max.x - bb.min.x, bb.max.y - bb.min.y];
    s[0] = s[0] > 0 ? 1 / s[0] : 1;
    s[1] = s[1] > 0 ? 1 / s[1] : 1;
    let o = [bb.min.x, bb.min.y];
    let index = 0;
    let count = 0;
    for(let i = 0; i < uvArray.length;i++) {
        count += index;
        if(!uvNormal[count * 3] + 2) { // if z is 0, then do nothing
            uvArray[i] = (uvArray[i] - o[index]) * s[index];
            if (index) uvArray[i] = 1 - uvArray[i];
        }
        index = index === 0 ? 1 : 0;
    }
}

function boundingBox(obj, bigBox, depth) {
    // this needs to recursively merge the bounding box of all of the objects it contains.
    // computes the boundingBox in LOCAL coordinates.  if there's a parent, temporarily
    // remove from the parent and reset position and orientation.
    // the boundingBox reflects the extent after application of the current scale setting.

    if (!bigBox) {
        bigBox = new THREE.Box3();
        depth = 0;
    }
    if (obj.geometry) { //means it is a visible thing
        if (!obj.geometry.boundingBox)obj.geometry.computeBoundingBox();
        const box = obj.geometry.boundingBox.clone();
        box.applyMatrix4(obj.matrixWorld);
        bigBox.union(box);
    }
    if (obj.children) {
        obj.children.forEach(child => boundingBox(child, bigBox, depth + 1));
    }
    return bigBox;
}

function extent3D(obj, bb) {
    let rVec = new THREE.Vector3();
    if (!bb) bb = boundingBox(obj);

    if (bb) {
        rVec.copy(bb.max);
        rVec.sub(bb.min);
    }
    return rVec;
}

function center3D(obj, bb) {
    let rVec = new THREE.Vector3();
    if (!bb) bb = boundingBox(obj);
    if (bb) {
        rVec.copy(bb.max);
        rVec.add(bb.min);
        rVec.multiplyScalar(0.5);
    }
    return rVec;
}

function addTexture(group, texture) {
    //const texture = new THREE.TextureLoader().load(url);
    group.traverse((child) => {
        if (child.material) {
            if(Array.isArray(child.material)) {
                child.material[0].map = texture;
                //child.material[2].map = texture;
            } else {
                child.material.map = texture;
            }
        }
    });
}

function addEnvMap(group, envMap){
    group.traverse((child) => {
        if (child.material) {
            if (Array.isArray(child.material)) {
                child.material[0].envMap = envMap;
                child.material[1].envMap = envMap;
            } else {
                child.material.envMap = envMap;
            }
        }
    });
}


/***/ }),

/***/ "./src/avatar.js":
/*!***********************!*\
  !*** ./src/avatar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarActor": () => (/* binding */ AvatarActor),
/* harmony export */   "AvatarPawn": () => (/* binding */ AvatarPawn)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame.js */ "./src/frame.js");
/* harmony import */ var _Pointer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pointer.js */ "./src/Pointer.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _worldMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worldMenu.js */ "./src/worldMenu.js");
/* harmony import */ var _settingsMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settingsMenu.js */ "./src/settingsMenu.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

/* globals XRRigidTransform */







// import { TextFieldActor } from "./text/text.js";




const EYE_HEIGHT = 1.676;
const PORTAL_DISTANCE = 0.4; // tuned to the girth of the avatars
const COLLISION_RADIUS = 0.8;
const M4_ROTATIONY_180 = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationY)(Math.PI);
let initialPortalLookExternal;

class AvatarActor extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.mix)(_card_js__WEBPACK_IMPORTED_MODULE_4__.CardActor).with(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.AM_Player) {
    init(options) {
        let playerId = options.playerId;
        delete options.playerId;
        super.init(options);
        this._playerId = playerId;

        this._layers = options.layers;
        // make sure layers has avatar the user defined layers are given in Avatarnames
        this.addLayer("avatar");

        this.lookPitch = 0;
        this.lookYaw = 0;
        this.lookOffset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();

        this.fall = false;
        this.tug = 0.05; // minimize effect of unstable wifi
        this.set({tickStep: 30});
        this.listen("goHome", this.goHome);
        this.listen("goThere", this.goThere);
        this.listen("startFalling", this.startFalling);
        this.listen("avatarLookTo", this.onLookTo);
        this.listen("comeToMe", this.comeToMe);
        this.listen("followMeToWorld", this.followMeToWorld);
        this.listen("continuePresenting", this.continuePresenting);
        this.listen("continueFollowing", this.continueFollowing);
        this.listen("stopPresentation", this.stopPresentation);
        this.listen("inWorldSet", this.inWorldSet);
        this.listen("nameSet", this.nameSet);
        this.listen("fileUploaded", "fileUploaded");
        this.listen("addSticky", this.addSticky);
        this.listen("textPasted", this.textPasted);
        this.listen("resetStartPosition", this.resetStartPosition);
        this.subscribe("playerManager", "presentationStarted", this.presentationStarted);
        this.subscribe("playerManager", "presentationStopped", this.presentationStopped);
        this.subscribe("actorManager", "destroyed", this.actorDestroyed);

        this.listen("leavePresentation", this.leavePresentation);
        this.listen("setAvatarData", "setAvatarData");
        this.listen("setWorldState", "setWorldState");

        this.listen("addOrCycleGizmo", "addOrCycleGizmo");
        this.listen("removeGizmo", "removeGizmo");

        this.future(0).tick();
    }

    setAndPublish(details) {
        // aug 2022: a convenience function for updating a player's properties and
        // publishing an event that anyone interested in the state of all players
        // can subscribe to - for example the agoraChatManager, which wants to know
        // which users are now in the chat.
        this.set(details);
        this.publish("playerManager", "detailsUpdated");
    }

    get pawn() { return AvatarPawnFactory; }
    get lookNormal() { return (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_rotate)([0, 0, -1], this.rotation); }

    // used by the BVH based walking logic. customizable when the avatar is not a human size.
    get collisionRadius() { return this._cardData.collisionRadius || COLLISION_RADIUS; }
    get inWorld() { return !!this._inWorld; }   // our user is either in this world or render

    ensureNicknameCard() {
        if (!this.inWorld) return;
        if (this._cardData.noNicknameCard) {return;}

        const nickname = this._name;
        if (!nickname) {
            if (this.nicknameCard) {
                this.nicknameCard.destroy();
                this.nicknameCard = null;
            }
            return;
        }

        const TEXT_SCALE = 0.005; // 100px of text scales to 0.5 world units
        const PADDING = 0.1; // horizontal and vertical
        const MARGIN_FUDGE = 0.02; // compensate for text widget's small gap at the left
        if (!this.nicknameCard) {
            const marginLeft = (PADDING - MARGIN_FUDGE) / TEXT_SCALE;
            const marginTop = PADDING * 1.1 / TEXT_SCALE;
            const options = {
                name: 'nickname',
                behaviorModules: ["Billboard"],
                translation: [0, 1, -0.1], // above and slightly in front
                type: "text",
                depth: 0.02,
                margins: { left: marginLeft, top: marginTop },
                backgroundColor: 0x300079,
                frameColor: 0x400089,
                fullBright: true,
                opacity: 0.8,
                runs: [],
                width: 0.1,
                height: 0.1,
                textScale: TEXT_SCALE,
                readOnly: true,
                noDismissButton: true,
                noSave: true,
                avatarParts: true,
                parent: this
            };
            this.nicknameCard = this.createCard(options);
        }

        const measurement = this.getTextFieldActorClass().defaultMeasurement(nickname);
        const signWidth = Math.min(measurement.width * TEXT_SCALE + 2 * PADDING, 2);
        const signHeight = Math.min(measurement.height * TEXT_SCALE + 2 * PADDING, 0.4);
        this.nicknameCard.load([{text: nickname, style: {color: 'white'}}]);
        this.nicknameCard.setExtent({width: signWidth / TEXT_SCALE, height: signHeight / TEXT_SCALE});
    }

    removeNicknameCard() {
        if (this.nicknameCard) {
            this.nicknameCard.destroy();
        }
        this.nicknameCard = null;
    }

    // The user leaves the "guided tour".
    leavePresentation() {
        if (!this.follow) {return;}

        let manager = this.service("PlayerManager");
        let presentationMode = manager.presentationMode;
        if (!presentationMode) {return;}
        if (this.follow !== this.playerId) {
            this.presentationStopped();
            this.say("setLookAngles", {lookOffset: [0, 0, 0]});
            manager.leavePresentation(this.playerId);
        }
    }

    setWorldState(data) {
        // let {inWorld, translation, rotation, anchor} = data;
        this.set(data);
    }

    stopPresentation() {
        this.service("PlayerManager").stopPresentation();
    }

    inWorldSet({o, v}) {
        if (!o !== !v) this.service("PlayerManager").playerInWorldChanged(this);
        if (v) this.ensureNicknameCard();
    }

    nameSet({o, v}) {
        if (o !== v) this.ensureNicknameCard();
    }

    startFalling() {
        this.fall = true;
    }

    resetStartPosition() {
        this.goTo(this.translation, this.rotation, false);
    }

    onLookTo(data) {
        let [pitch, yaw, lookOffset] = data;
        if (pitch !== undefined) {this.lookPitch = pitch;}
        if (yaw !== undefined) {this.lookYaw = yaw;}
        if (lookOffset !== undefined) this.lookOffset = lookOffset;
        this.rotateTo((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, this.lookYaw, 0));
        this.restoreTargetId = undefined; // if you look around, you can't jump back
    }

    goHome() {
        let v, q;
        if (this._anchor) {
            v = this._anchor.translation;
            q = this._anchor.rotation;
        } else {
            v = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();
            q = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)();
        }
        this.goTo(v, q, false);
        this.lookOffset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();
        this.lookPitch = 0;
        this.lookYaw = 0;
        this.say("setLookAngles", {pitch: 0, yaw: 0, lookOffset: this.lookOffset});
    }

    goTo(v, q, fall) {
        this.leavePresentation();
        this.vStart = [...this.translation];
        this.qStart = [...this.rotation];
        this.vEnd = v;
        this.qEnd = q;
        this.fall = fall;
        this.goToStep(0.1);
        //this.set({translation: there[0], rotation: there[1]});
    }

    goThere(p3d) {
        this.leavePresentation();
        this.vStart = [...this.translation];
        this.qStart = [...this.rotation];

        if (!this.fall && (p3d.targetId === this.restoreTargetId)) { // jumpback if you are  doubleclicking on the same target you did before
            this.vEnd = this.restoreTranslation;
            this.qEnd = this.restoreRotation;
            this.restoreRotation = undefined;
            this.restoreTranslation = undefined;
            this.restoreTargetId = undefined;
        } else {
            this.fall = false; // sticky until we move
            this.restoreRotation = [...this.rotation];
            this.restoreTranslation = [...this.translation];
            this.restoreTargetId = p3d.targetId;
            let normal = [...(p3d.normal || this.lookNormal)]; //target normal may not exist
            let point = p3d.xyz;
            this.vEnd = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)(point, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(normal, p3d.offset || EYE_HEIGHT));
            normal[1] = 0; // clear up and down
            let nsq = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sqrMag)(normal);
            if (nsq < 0.0001) {
                this.qEnd = this.rotation; // use the current rotation
            }else {
                normal = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_normalize)(normal);
                let theta = Math.atan2(normal[0], normal[2]);
                this.qEnd = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, theta, 0);
            }
            if (p3d.look) {
                let pitch = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_pitch)(this.qEnd);
                let yaw = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_yaw)(this.qEnd);
                this.lookPitch = pitch;
                this.lookYaw = yaw;
                this.say("setLookAngles", {pitch, yaw});
            }
        }
        this.goToStep(0.1);
    }

    comeToMe() {
        this.service("PlayerManager").startPresentation(this.playerId);
    }

    followMeToWorld(presenterTransferData) {
        // presenterTransferData is the same as the spec this avatar will use to enter
        // the new world, minus its cardData and name.
        // first confirm that we are indeed still the presenter.
        const manager = this.service("PlayerManager");
        if (manager.presentationMode === this.playerId) {
            const followerTransferData = { ...presenterTransferData };
            followerTransferData.following = followerTransferData.presenting;
            delete followerTransferData.presenting;
            for (const playerId of manager.followers) {
                if (playerId === this.playerId) continue;
                const follower = manager.player(playerId);
                follower.followToWorld(followerTransferData);
            }
        }
    }

    followToWorld(followerTransferData) {
        this.say("followToWorld", { followerTransferData });
    }

    presentationStarted() {
        // the PlayerManager has already decided which players are in the presentation
        const { presenter, followers } = this.service("PlayerManager");
        if (presenter.playerId === this.playerId || !followers.has(this.playerId)) return;

        this._translation = [...presenter.translation];
        this._rotation = [...presenter.rotation];
        this.say("forceOnPosition");
        this.follow = presenter.playerId;
        this.fall = false;
        this._anchor = presenter._anchor;
    }

    presentationStopped() {
        this.follow = null;
    }

    continuePresenting(presenterToken) {
        // we came into this world through a portal while presenting.  if there is
        // not already a presentation in progress, become the presenter and sign up
        // every follower who enters (or has already entered) carrying the same token.
        this.service("PlayerManager").continuePresenting(this, presenterToken);
    }

    continueFollowing(presenterToken) {
        // we came into this world through a portal while following.  if the presenter
        // has come through ahead and is already presenting, the PlayerManager will
        // sign us up and invoke this.presentationStarted.  otherwise we just wait,
        // holding onto the token (and knowing that the expected presenter may never
        // turn up).
        this.service("PlayerManager").continueFollowing(this, presenterToken);
    }

    goToStep(delta, t) {
        if (!t) t = delta;
        if (t >= 1) t = 1;
        let v = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_lerp)(this.vStart, this.vEnd, t);
        let q = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_slerp)(this.qStart, this.qEnd, t);
        this.positionTo({v, q});
        this.say("forceOnPosition");
        if (t < 1) this.future(50).goToStep(delta, t + delta);
    }

    // A following avatar updates its pose based on leader's pose, and updates its pawn
    tick(_delta) {
        if (this.follow) {
            let followMe = this.service("PlayerManager").players.get(this.follow);
            if (followMe) {
                this.positionTo({v: followMe._translation, q: followMe._rotation});
                this.lookOffset = followMe.lookOffset;
                this.lookPitch = followMe.lookPitch;
                this.lookYaw = followMe.lookYaw;
                this.say("setLookAngles", {pitch: followMe.lookPitch, yaw: followMe.lookYaw, lookOffset: followMe.lookOffset});
            } else {
                this.presentationStopped();
            }
        }
        if (!this.doomed) this.future(this._tickStep).tick(this._tickStep);
    }

    // compute the position in front of the avatar
    // optOffset is perpendicular (on the same xz plane) to the lookNormal
    dropPose(distance, optOffset) {
        let n = this.lookNormal;
        let t = this.translation;
        let r = this.rotation;
        if (!optOffset) {
            let p = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(n, distance), t);
            return {translation: p, rotation: r};
        }

        let q = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, -Math.PI / 2, 0);
        let perpendicular = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_rotate)(n, q);
        let offset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_multiply)(optOffset, perpendicular);
        let p = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(n, distance), t), offset);
        return {translation:p, rotation:r};
    }

    // invoked in response to a file drop.
    fileUploaded(data) {
        let {dataId, fileName, type, translation, rotation, animationClipIndex, dataScale} = data;

        let cardType = type === "exr" ? "lighting" : (type === "svg" || type === "img" || type === "pdf" ? "2d" : "3d");

        let options = {
            name: fileName,
            translation,
            rotation,
            type: cardType,
            fileName,
            modelType: type,
            shadow: true,
            singleSided: true
        };

        if (animationClipIndex !== undefined) {
            options.animationClipIndex = animationClipIndex;
        }

        if (cardType === "3d" && dataScale) {
            options.dataScale = dataScale;
        }

        if (type === "img") {
            options = {
                ...options,
                textureLocation: dataId,
                textureType: "image",
                scale: [4, 4, 4],
                cornerRadius: 0.02,
                fullBright: false,
            };
        } else if (type === "pdf") {
            options = {
                ...options,
                behaviorModules: ["PDFView"],
                scale: [4, 4, 4],
                layers: ["pointer"],
                type: "2d",
                frameColor: 0xffffff,
                color: 0x888888,
                depth: 0.05,
                fullBright: true,
                pdfLocation: dataId
            };
        } else {
            options = {...options, dataLocation: dataId};
        }

        if (type !== "exr") {
            this.createCard(options);
        } else {
            let light = [...this.service("ActorManager").actors.values()].find(o => o._cardData.type === "lighting");
            if (light) {
                light.updateOptions({...light._cardData, dataLocation: dataId, dataType: "exr"});
            }
        }

        this.publish(this.sessionId, "triggerPersist");
    }

    textPasted({string, translation, rotation}) {
        if (string.startsWith("http://") || string.startsWith("https://")) {
            this.createPortal(translation, rotation, string);
        } else {
            if (this.behaviorManager.hasBehavior("StickyNote")) {
                this.createStickyNote(translation, rotation, string);
            }
        }
    }

    addSticky(pe) {
        if (!this.behaviorManager.hasBehavior("StickyNote")) {return;}
        const tackOffset = 0.1;
        let tackPoint = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)(pe.xyz, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(pe.normal, tackOffset));
        let normal = [...pe.normal]; // clear up and down
        normal[1] = 0;
        let nsq = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sqrMag)(normal);
        let rotation;
        if (nsq > 0.0001) {
            normal = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_normalize)(normal);
            let theta = Math.atan2(normal[0], normal[2]);
            rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, theta, 0);
        } else {
            rotation = this.rotation;
            tackPoint[1] += 2;
        }
        this.createStickyNote(tackPoint, rotation);
    }

    createStickyNote(translation, rotation, text) {
        let runs = [];
        if (!text) {
            text = "";
        }
        runs.push({text});
        let options = {
            name:'sticky note',
            className: "TextFieldActor",
            behaviorModules: ["StickyNote"],
            translation,
            rotation,
            type: "text",
            depth: 0.05,
            margins: {left: 20, top: 20, right: 20, bottom: 20},
            backgroundColor: 0xf4e056,
            frameColor: 0xfad912,
            runs,
            width: 1,
            height: 1,
            textScale: 0.002
        };

        this.createCard(options);
        this.publish(this.sessionId, "triggerPersist");
    }

    actorDestroyed(id) {
        if (this.gizmo?.target?.id === id) {
            this.removeGizmo();
        }
    }

    addOrCycleGizmo(data) {
        let {target, viewId} = data;
        if (!this.gizmo) {
            if (!this.behaviorManager.modules.get("Gizmo")) {return;}
            this.gizmo = this.createCard({
                translation: target.translation,
                name: 'gizmo',
                behaviorModules: ["Gizmo"],
                parent: target.parent,
                type: "object",
                noSave: true,
            });
            this.gizmo.target = target;
            this.gizmo.creatorId = viewId;
        } else {
            this.publish(this.gizmo.id, "cycleModes");
        }
    }

    removeGizmo() {
        this.gizmo?.destroy();
        delete this.gizmo;
        this.say("clearGizmo"); // let the pawn know
    }

    createPortal(translation, rotation, portalURL) {
        // sigh - all portals are "backwards"
        // or maybe *all* models are backwards and we need to fix dropPose and avatar models?
        rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_multiply)((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, Math.PI, 0), rotation); // flip by 180 degrees

        let card = {
            name: "portal",
            className: "PortalActor",
            translation,
            rotation,
            type: "2d",
            layers: ["pointer"],
            color: 0xFF66CC,
            frameColor: 0x888888,
            width: 3,
            height: 3,
            depth: 0.2,
            cornerRadius: 0.05,
            portalURL,
            sparkle: false,
        };

        this.createCard(card);
        this.publish(this.sessionId, "triggerPersist");
    }

    setAvatarData(options) {
        console.log("setAvatarData", options);
        this.setupAvatarBehavior(options);
        this.updateOptions(options);
        // this.ensureNicknameCard(); handled separately
    }

    setupAvatarBehavior(options) {
        console.log("setupAvatarBehavior");
        if (!options.avatarEventHandler) {
            options.avatarEventHandler = "AvatarEventHandler";
        }

        let handlerModuleName = options.avatarEventHandler;
        let behaviorManager = this.service("BehaviorModelManager");

        if (behaviorManager && behaviorManager.modules.get(handlerModuleName)) {
            if (!options.behaviorModules) {
                options.behaviorModules = [handlerModuleName];
            } else {
                if (!options.behaviorModules.includes(handlerModuleName)) {
                    options.behaviorModules = [...options.behaviorModules, handlerModuleName];
                }
            }
        }
    }

    destroy() {
        this.removeGizmo();
        super.destroy();
    }
}

AvatarActor.register('AvatarActor');

class AvatarPawnFactory extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(actor) {
        super(actor);
        if (this.viewId === actor.playerId) {
            return new AvatarPawn(actor);
        }
        return new RemoteAvatarPawn(actor);
    }
}

const PM_SmoothedDriver = superclass => class extends superclass {
    constructor(options) {
        super(options);
        this.throttle = 125; //ms
        this.ignore("scaleSet");
        this.ignore("rotationSet");
        this.ignore("translationSet");
        this.ignore("positionSet");
    }

    // If our global changes, so do the globals of our children
    globalChanged() {
        if (!this._global && this.renderObject && !this.renderObject.matrixWorldNeedsUpdate) {
            this.refreshDrawTransform();
            if (this.children)  {
                this.children.forEach(child => child.onGlobalChanged());
            }
        }
    }

    positionTo(v, q, throttle) {
        if (!this.actor.follow) {
            throttle = throttle || this.throttle;
            // we have special case here for avatar movement
            if ((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_equals)(this.actor.translation, v, 0) && (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_equals)(this.actor.rotation, q, 0)) {return;}

            this._translation = v;
            this._rotation = q;
            this.onLocalChanged();
            this.isTranslating = false;
            this.isRotating = false;
        }
        super.positionTo(v, q, throttle);
        this.globalChanged();
    }

    scaleTo(v, throttle) {
        if (!this.actor.follow) {
            throttle = throttle || this.throttle;
            this._scale = v;
            this.onLocalChanged();
            this.isScaling = false;
        }
        super.scaleTo(v, throttle);
        this.globalChanged();
    }

    rotateTo(q, throttle) {
        if (!this.actor.follow) {
            throttle = throttle || this.throttle;
            this._rotation = q;
            this.onLocalChanged();
            this.isRotating = false;
        }
        super.rotateTo(q, throttle);
        this.globalChanged();
    }

    translateTo(v, throttle)  {
        if (!this.actor.follow) {
            throttle = throttle || this.throttle;
            this._translation = v;
            this.isTranslating = false;
            this.onLocalChanged();
        }
        super.translateTo(v, throttle);
        this.globalChanged();
    }
}

function setModelOpacity(model, visible, opacity) {
    let transparent = opacity !== 1;
    model.visible = visible;
    model.traverse(n => {
        n.renderOrder = 10000; // render this only after everything else
        if (n.material && n.material.opacity !== opacity) {
            n.material.opacity = opacity;
            n.material.transparent = transparent;
            n.material.side = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide;
            n.material.needsUpdate = true;
        }
    });
}

class RemoteAvatarPawn extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.mix)(_card_js__WEBPACK_IMPORTED_MODULE_4__.CardPawn).with(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.PM_Player, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.PM_ThreeVisible) {
    constructor(actor) {
        super(actor);
        this.lastUpdateTime = 0;

        this.spin = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)();
        this.velocity = [0, 0, 0];

        this.lookPitch = this.actor.lookPitch;
        this.lookYaw = this.actor.lookYaw;
        this.lookOffset = [0, 0, 0]; // Vector displacing the camera from the avatar origin.

        this.tug = 0.06; // instead of default 0.2, to work with spaced updates
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    addChild(id) {
        super.addChild(id);
        delete this.lastOpacity;
    }

    setOpacity(opacity) {
        if (!this.shape) {return;}
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "mapOpacity")) {
            opacity = this.call(`${handlerModuleName}$AvatarPawn`, "mapOpacity", opacity);
        }
        let transparent = opacity !== 1;
        this.shape.visible = this.actor.inWorld && opacity !== 0;
        this.shape.traverse(n => {
            if (n.material) {
                n.material.opacity = opacity;
                n.material.transparent = transparent;
                n.material.side = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide;
                n.material.needsUpdate = true;
            }
        });
    }

    removeChild(id) {
        super.removeChild(id);
        delete this.lastOpacity;
    }

    modelLoaded() {
        console.log("remote avatar model loaded");
        delete this.lastOpacity;
        delete this.lastInWorld;
        this.modelLoadTime = Date.now();
        setModelOpacity(this.shape.children[0], true, 0);
    }

    detach() {
        delete this.modelLoadTime;
        super.detach();
    }
}

let dormantAvatarSpec = null;
let useDormantAvatarSpec = true;
class AvatarPawn extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.mix)(_card_js__WEBPACK_IMPORTED_MODULE_4__.CardPawn).with(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.PM_Player, PM_SmoothedDriver, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.PM_ThreeVisible, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.PM_ThreeCamera, _Pointer_js__WEBPACK_IMPORTED_MODULE_3__.PM_Pointer) {
    constructor(actor) {
        super(actor);

        console.log("LocalAvatarPawn");

        this.lastUpdateTime = 0;
        this.lastCollideTime = 0;
        this.lastCollideTranslation = this.actor.translation;

        this.spin = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)();
        this.velocity = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();

        this.lookPitch = this.actor.lookPitch;
        this.lookYaw = this.actor.lookYaw;
        this.lookOffset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)(); // Vector displacing the camera from the avatar origin.
        this._rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, this.lookYaw, 0);
        this.portalLookExternal = initialPortalLookExternal;

        this.isMobile = !!("ontouchstart" in window);

        this.isFalling = false;

        const renderMgr = this.service("ThreeRenderManager");
        this.camera = renderMgr.camera;
        this.scene = renderMgr.scene;
        renderMgr.avatar = this; // hack

        this.lastHeight = EYE_HEIGHT; // tracking the height above ground
        this.yawDirection = this.isMobile ? -1 : 1;
        this.pitchDirection = this.isMobile ? 1 : -1;

        /*
        this.walkCamera = new THREE.Object3D();
        this.walkcaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0));
        */

        this.portalcaster = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Raycaster(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(), new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(), 0, PORTAL_DISTANCE);

        this.fadeNearby();
        if (this.fadeNearbyInterval) {
            clearInterval(this.fadeNearbyInterval);
            this.fadeNearbyInterval = null;
        }
        this.fadeNearbyInterval = setInterval(() => this.fadeNearby(), 100);

        document.getElementById("homeBtn").onclick = () => this.goHome();
        (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_5__.filterDomEventsOn)(document.getElementById("homeBtn"));

        document.getElementById("editModeBtn").setAttribute("mobile", this.isMobile);
        document.getElementById("editModeBtn").setAttribute("pressed", false);

        let editButton = document.getElementById("editModeBtn");
        editButton.onpointerdown = (evt) => this.setEditMode(evt);
        editButton.onpointerup = (evt) => this.clearEditMode(evt);

        (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_5__.setupWorldMenuButton)(this, _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App, this.sessionId);

        window.myAvatar = this;

        this.eyeHeight = EYE_HEIGHT;
        this.fallDistance = EYE_HEIGHT / 12;
        this.maxFall = -15;

        this.service("WalkManager").setupDefaultWalkers();

        if (this.actor.behaviorManager.hasBehavior("FileDragAndDropHandler")) {
            // drop and paste
            this.service("AssetManager").assetManager.setupHandlersOn(document, (buffer, fileName, type) => {
                if (type === "pastedtext") {
                    this.pasteText(buffer);
                } else if (type === "vrse") {
                    this.loadvrse(buffer);
                } else {
                    this.analyzeAndUploadFile(new Uint8Array(buffer), fileName, type);
                }
            });
        }

        // keep track of being in the primary frame or not.  because of the delay involved
        // in creating the avatar, the frame itself (in frame.js) is bound to have already
        // processed a "frame-type" message and set its exported isPrimaryFrame value.
        this.isPrimary = _frame_js__WEBPACK_IMPORTED_MODULE_2__.isPrimaryFrame;

        // clip halfspace behind portalCamera.
        // [old comment] 0.2 is to cover the gap of the portal thickness
        // if there is no anchor, this is the default clip plane
        // otherwise it will be updated below
        this.portalClip = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, -1), 0);
        this.setPortalClipping();

        this.shellListener = (command, { frameType, spec, cameraMatrix, dx, dy, acknowledgeReceipt }) => {
            let handlerModuleName = this.actor._cardData.avatarEventHandler;
            switch (command) {
                case "frame-type":
                    const isPrimary = frameType === "primary";
                    // a frame generated by addFrame supplies no spec.  in all other cases
                    // (portal-enter, world-enter) we need to start with the frame frozen.
                    if (spec) this.setWorldSwitchFreeze(true);
                    if (isPrimary !== this.isPrimary) this.frameTypeChanged(isPrimary, spec);
                    // a secondary frame for which we already have camera information
                    // will receive it as part of this message
                    if (cameraMatrix) this.portalCameraUpdate(cameraMatrix);
                    // acknowledge receipt so that shell knows this frame is ready
                    (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("avatar-ready", { frameType });
                    break;
                case "release-freeze":
                    // sent to the primary as soon as all frames (this included) have
                    // confirmed their switch to primary or secondary state.
                    this.setWorldSwitchFreeze(false);
                    this.refreshCameraTransform();
                    this.updatePortalRender(true); // true => force portals to re-render
                    break;
                case "sync-render-now":
                    if (this.frozenForWorldSwitch) {
                        console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)(), "ignoring sync-render while frozen");
                        return;
                    }
                    this.refreshCameraTransform();
                    renderMgr.composer.render();
                    if (acknowledgeReceipt) (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("primary-rendered");
                    break;
                case "portal-camera-update":
                    // sent to a through-portal world, to get it to render using
                    // the camera position supplied by the corresponding portal
                    this.setWorldSwitchFreeze(false);
                    this.portalCameraUpdate(cameraMatrix);
                    break;
                case "motion-start":
                    if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "startMotion")) {
                        this.call(`${handlerModuleName}$AvatarPawn`, "startMotion", dx, dy);
                    } else {
                        this.startMotion(dx, dy);
                    }
                    break;
                case "motion-end":
                    if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "endMotion")) {
                        this.call(`${handlerModuleName}$AvatarPawn`, "endMotion", dx, dy);
                    } else {
                        this.endMotion(dx, dy);
                    }
                    break;
                case "motion-update":
                    if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "updateMotion")) {
                        this.call(`${handlerModuleName}$AvatarPawn`, "updateMotion", dx, dy);
                    } else {
                        this.updateMotion(dx, dy);
                    }
                    break;
            }
        }
        ;(0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.addShellListener)(this.shellListener);

        // initialize actor
        // the fact that we're creating an AvatarPawn rather than a RemoteAvatarPawn
        // means that this pawn is for the local user.  it will either be for the
        // primary frame (in which case it sets the actor's inWorld to true) or
        // non-primary (inWorld set to false - which forces the pawn's setOpacity
        // method to set its own visibility to false, so it can sneak around
        // as a disembodied through-portal camera).
        // if there is a dormantAvatarSpec in the global context, and we're building
        // the primary-frame avatar, we publish that spec to become the configuration for
        // this actor - and hence for this pawn, and all RemoteAvatarPawns that other
        // users have for it.
        const inWorld = this.isPrimary;

        // spectator pawns cannot talk to their actors
        if (this.spectator) {
            // start spectators to home position
            this.goHome();
        } else {
            // regular avatars
            let actorSpec;
            let avatarSpec;
            let avatarName;
            if (inWorld && dormantAvatarSpec) {
                actorSpec = dormantAvatarSpec;
                actorSpec.inWorld = true;
                dormantAvatarSpec = null;
                avatarSpec = actorSpec.cardData;
                avatarName = actorSpec.name;
                avatarSpec.name = avatarName;
            } else {
                actorSpec = { inWorld };
                const anchor = this.anchorFromURL(window.location, !this.isPrimary);
                if (anchor) {
                    actorSpec.anchor = anchor; // actor or {translation, rotation}
                    actorSpec.translation = anchor.translation;
                    actorSpec.rotation = anchor.rotation;
                }
                let tempCardSpec = this.makeCardSpecFrom(window.settingsMenuConfiguration, this.actor, avatarName);
                avatarSpec = {...tempCardSpec};
            }

            // FIXME: do not send 3 messages via reflector
            this.say("setWorldState", {
                inWorld: actorSpec.inWorld,
                translation: actorSpec.translation,
                rotation: actorSpec.rotation,
                anchor: actorSpec.anchor});
            this.say("setAvatarData", avatarSpec); // NB: after setting actor's name
            this.say("resetStartPosition");
        }

        this.subscribe("playerManager", "playerCountChanged", this.showNumbers);
        this.listen("setLookAngles", this.setLookAngles);
        // respond to followToWorld immediately, to freeze our movements ASAP
        this.listenImmediate("followToWorld", this.followToWorld);
        this.showNumbers();

        this.listen("forceOnPosition", this.onPosition);

        this.listen("goThere", this.stopFalling);

        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");

        this.listen("clearGizmo", this.clearGizmo);

        this.subscribe("playerManager", "presentationStarted", this.presentationStarted);
        this.subscribe("playerManager", "presentationStopped", this.presentationStopped);

        this.wasdVelocity = [0, 0, 0];
        this.wasdMap = {w: false, a: false, d: false, s: false};

        console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)(), "MyPlayerPawn created", this, "primary:", this.isPrimary);
    }

    detach() {
        this.setDormantAvatarSpec(this.specForRevival());
        if (this.fadeNearbyInterval) {
            clearInterval(this.fadeNearbyInterval);
            this.fadeNearbyInterval = null;
        }

        this.gizmoTargetPawn?.unselectEdit();
        delete this.gizmoTargetPawn;
        delete this.modelLoadTime;
        super.detach();
    }

    startMotion(dx, dy) {
        this.spin = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)();
        this.velocity = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();
        this.say("startFalling");
        if (dx || dy) this.updateMotion(dx, dy);
    }

    endMotion(_dx, _dy) {
        this.activeMMotion = false;
        this.spin = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)();
        this.velocity = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)();
    }

    updateMotion(dx, dy) {
        const JOYSTICK_V = 0.000030;
        const MAX_V = 0.015;
        const MAX_SPIN = 0.0004;

        let v = dy * JOYSTICK_V;
        v = Math.min(Math.max(v, -MAX_V), MAX_V);

        const yaw = dx * (this.isMobile ? -2.5 * MAX_SPIN : -MAX_SPIN);
        this.spin = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, yaw ,0);
        this.velocity = [0, 0, v];
        this.maybeLeavePresentation();
    }

    get presenting() {
        return this.actor.service("PlayerManager").presentationMode === this.viewId;
    }

    get spectator() {
        if (!this.wellKnownModel("modelRoot").broadcastMode) return false;
        if (this.actor.broadcaster) return false;
        // in case addBroadcaster for our view has not been processed yet by model
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get("broadcastMode") !== "true";
    }

    setWorldSwitchFreeze(bool) {
        // if (!!this.frozenForWorldSwitch !== bool) console.warn(frameName(), `freeze: ${bool}`);
        this.frozenForWorldSwitch = bool;
    }

    onPosition() {
        this._rotation = this.actor.rotation;
        this._translation = this.actor.translation;
        this.onLocalChanged();
    }

    setLookAngles(data) {
        let {pitch, yaw, lookOffset} = data;
        if (pitch !== undefined) {this.lookPitch = pitch;}
        if (yaw !== undefined) {this.lookYaw = yaw;}
        if (lookOffset !== undefined) {this.lookOffset = lookOffset;}
    }

    async analyzeAndUploadFile(buffer, fileName, type) {
        let handle = await _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.store(this.sessionId, buffer, true);
        let dataId = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.toId(handle);
        let assetManager = this.service("AssetManager").assetManager;
        let obj;
        let animationClipIndex;
        let dataScale;
        try {
            if (type !== "pdf") {
                // it is special cased as the assetManager itself does not load pdf
                // but still is supported by a behavior.
                obj = await assetManager.load(buffer, type, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE, {});
            }
        } catch (e) {
            console.warn("dropped file could not be processed", e);
            return;
        }

        if (obj && obj.isObject3D) { // is3D
            assetManager.setCache(dataId, buffer, "0");
            if (obj._croquetAnimation) {
                animationClipIndex = 0;
            }

            let size = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, 0);
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Box3().setFromObject(obj).getSize(size);
            let max = Math.max(size.x, size.y, size.z);
            let s = 4 / max;
            dataScale = [s, s, s];
        }

        let pose = this.dropPose(6);
        this.say("fileUploaded", {
            dataId, fileName, type: /^(jpe?g|png|gif)$/.test(type) ? "img" : type,
            translation: pose.translation,
            rotation: pose.rotation,
            animationClipIndex,
            dataScale
        });
    }

    async uploadFile(buffer, fileName, type) {
        let handle = await _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.store(this.sessionId, buffer);
        let dataId = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.toId(handle);
        let pose = this.dropPose(6);
        this.say("fileUploaded", {
            dataId, fileName, type: /^(jpe?g|png|gif)$/.test(type) ? "img" : type,
            translation: pose.translation,
            rotation: pose.rotation
        });
    }

    async pasteText(string) {
        const MAX_PASTE_LENGTH = 2000;
        if (string.length > MAX_PASTE_LENGTH) {
            console.warn("Paste too long, truncating");
            string = string.substr(0, MAX_PASTE_LENGTH);
        }
        let pose = this.dropPose(6);
        this.say("textPasted", {
            string,
            translation: pose.translation,
            rotation: pose.rotation
        });
    }

    loadvrse(buffer) {
        let result = new TextDecoder("utf-8").decode(buffer);
        let parsed;
        try {
            parsed = JSON.parse(result);
        } catch (e) {
            console.log("vrse file is not in JSON format");
        }

        if (!parsed) {return;}

        let cards = parsed.data.cards;
        let toplevel = 0;
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i].card;
            if (!card.parent) {toplevel++;}
        }

        let asScene = toplevel >= 2;
        this.loadFromFile(result, asScene, !asScene);
    }

    dropPose(distance, optOffset) { // compute the position in front of the avatar
        return this.actor.dropPose(distance, optOffset);
    }

    // if our URL specifies an anchor, this is our home location
    anchorFromURL(url, viaPortal) {
        const { actors } = this.actor.service("ActorManager");
        const { searchParams } = new URL(url);
        const anchorString = searchParams.get("anchor");
        if (!anchorString) {
            // if we are coming via a portal but with no anchor, assume the first portal
            if (viaPortal) {
                for (const actor of actors.values()) {
                    if (actor.isPortal) return actor;
                }
            }
            // otherwise use the default anchor
            for (const actor of actors.values()) {
                if (actor._cardData.spawn === "default") return actor;
            }
            // otherwise come in at [0,0,0]
            return null;
        }
        // see if it's a named actor
        for (const actor of actors.values()) {
            if (actor.name === anchorString) return actor;
        }
        // otherwise it might be explicit coordinates
        const coords = anchorString.split(",").map(x => parseFloat(x));
        if (coords.length !== 7 || coords.some(x => isNaN(x))) return null;
        const [vx, vy, vz, ru, rv, rw, rq] = coords;
        return {
            translation: [vx, vy, vz],
            rotation: [ru, rv, rw, rq]
        }
    }

    showNumbers() {
        let manager = this.actor.service("PlayerManager");
        let userCountDisplay = document.getElementById("userCountDisplay");
        if (this.service("AgoraChatManager")) {
            if (userCountDisplay) {userCountDisplay.remove();}
            return;
        }

        if (!userCountDisplay) {
            let c = document.createElement("div");
            c.innerHTML = `<div id="userCountDisplay"><div id="userCountReadout">0</div></div>`;
            userCountDisplay = c.firstChild;
            document.body.appendChild(userCountDisplay);

            if (this.service("DolbyChatManager") && window.innerWidth >= 600) userCountDisplay.style.left = "40%";
        }

        let readout = userCountDisplay.querySelector("#userCountReadout");
        if (!readout) {return;}

        // TODO: change PlayerManager to only create avatars for players that are actually in the world
        let total = manager.players.size;
        let here = manager.playersInWorld().length;
        let suffix = here === 1 ? "user" : "users";
        let tooltip = `${here} ${here === 1 ? "user is" : "users are"} in this world`;
        if (here !== total) {
            let watching = total - here;
            tooltip += `, ${watching} ${watching === 1 ? "user has" : "users have"} not entered yet`;
            total = `${here}+${watching}`;
        }
        if (manager.presentationMode) {
            let followers = manager.followers.size; // includes the presenter
            readout.textContent = `${followers}/${total} ${suffix}`;
            tooltip = `${followers} ${followers === 1 ? "user" : "users"} in guided tour, ${tooltip}`;
        } else {
            readout.textContent = `${total} ${suffix}`;
        }
        userCountDisplay.setAttribute("title", tooltip);
        readout.setAttribute("presenting", this.presenting);
    }

    presentationStarted() {
        (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_5__.updateWorldMenu)(this);
    }
    presentationStopped() {
        (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_5__.updateWorldMenu)(this);
    }

    modelLoaded() {
        console.log("avatar model loaded");
        delete this.lastOpacity;
        delete this.lastInWorld;
        this.modelLoadTime = Date.now();
        setModelOpacity(this.shape.children[0], true, 0);
    }

    setEditMode(evt) {
        evt.target.setAttribute("pressed", true);
        evt.target.setPointerCapture(evt.pointerId);
        evt.stopPropagation();
        this.service("InputManager").setModifierKeys({ctrlKey: true});
    }

    clearEditMode(evt) {
        evt.target.setAttribute("pressed", false);
        evt.target.releasePointerCapture(evt.pointerId);
        evt.stopPropagation();
        this.service("InputManager").setModifierKeys({ctrlKey: false});
    }

    maybeLeavePresentation() {
        if (this.actor.follow) {
            this.say("leavePresentation");
        }
    }

    lookTo(pitch, yaw, lookOffset) {
        this.maybeLeavePresentation();
        this.setLookAngles({pitch, yaw, lookOffset});
        this.say("avatarLookTo", [pitch, yaw, lookOffset], 30);
        let q = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, this.lookYaw, 0);

        this._rotation = q;
        this.onLocalChanged();
        this.isRotating = false;
    }

    destroy() {
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.removeShellListener)(this.shellListener);
        // When the pawn is destroyed, we dispose of our Three.js objects.
        // the avatar memory will be reclaimed when the scene is destroyed - it is a clone, so leave the  geometry and material alone.
        super.destroy();
    }

    get lookGlobal() {
        if (this.lookOffset) {
            // This test above is relevant only at the start up.
            // This is called from ThreeCamera's constructor but
            // all look* properties are not intialized yet.
            if (!this.isPrimary && this.portalLookExternal) return this.portalLook;
            else return this.walkLook();
        } else return this.global;
    }

    // the camera when walking: based on avatar with 3rd person lookOffset
    walkLook() {
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "walkLook")) {
            return this.call(`${handlerModuleName}$AvatarPawn`, "walkLook");
        }

        const pitchRotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_axisAngle)([1,0,0], this.lookPitch);
        const m0 = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_translation)(this.lookOffset);
        const m1 = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationQ)(pitchRotation);
        const m2 = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m1, m0);
        return (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m2, this.global);
    }

    // the camera when rendering world as portal: based on external camera
    // and our own anchor
    get portalLook() {
        // apply portal transform to external camera
        const anchor = this.anchor || this.actor._anchor || { translation: [0,0,0], rotation: [0,0,0,1] };
        const mtra = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_translation)(anchor.translation);
        const mrot = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationQ)(anchor.rotation);
        const mrot_inv = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(mrot, M4_ROTATIONY_180); // flip by 180 degrees
        const mportal = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(mrot_inv, mtra);
        const mcam = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(this.portalLookExternal, mportal);
        // transform portal clip plane to match the anchor
        this.portalClip.normal.set(0, 0, -1);
        this.portalClip.constant = 0;
        const mclip = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Matrix4();
        mclip.set(...mrot);
        mclip.invert();
        this.portalClip.applyMatrix4(mclip);
        const pos = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...anchor.translation);
        this.portalClip.constant = -this.portalClip.distanceToPoint(pos);
        // if portal is facing away from us, flip the clip plane
        // const facingAway = ???;
        // if (facingAway) {
        //     this.portalClip.normal.multiplyScalar(-1);
        //     this.portalClip.constant = -this.portalClip.constant;
        // }
        return mcam;
    }

    specForRevival() {
        // on going dormant, generate the spec to be used if this tab is revived
        const spec = {
            translation: this._translation,
            rotation: this._rotation,
            lookPitch: this.lookPitch,
            lookYaw: this.lookYaw,
            lookOffset: this.lookOffset,
            cardData: this.actor._cardData, // keep avatar appearance
            name: this.actor._name, // and name
            inChat: false, // see comment in MyPlayerManager.playerInWorldChanged
            behaviorModules: this.actor._behaviorModules,
        };
        return spec;
    }

    setDormantAvatarSpec(data) {
        if (useDormantAvatarSpec) {
            dormantAvatarSpec = data;
        }
    }

    useDormantAvatarSpec(bool) {
        useDormantAvatarSpec = bool;
    }

    specForPortal(portal, jumpVector, crossingBackwards) {
        // we are about to enter this portal. meaning we disappear from this world and appear in the target world
        // visually nothing should change, so we need this avatar's position relative to the portal, as well as
        // its look pitch and offset. This will be passed to frameTypeChanged() in the target world.
        const jumpMatrix = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_translation)(jumpVector);
        const ourJumpedMatrix = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(this.global, jumpMatrix);
        const t = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_invert)(portal.global);
        const m = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(ourJumpedMatrix, t);
        // const log = (c, m) => console.log(c+"\n"+m.map((v, i) => +v.toFixed(2) + (i % 4 == 3 ? "\n" : ",")).join(''));
        // log("portal", portal.global);
        // log("avatar", this.global);
        // log("m", m);

        // the entered world will use the translation and rotation that we send from here
        // relative to its own anchor point
        const translation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getTranslation)(m);
        const rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getRotation)(m);
        const spec = {
            translation,
            rotation,
            lookPitch: this.lookPitch,
            lookYaw: this.lookYaw,
            lookOffset: this.lookOffset,
            cardData: this.actor._cardData, // keep avatar appearance
            name: this.actor._name, // and name
            url: portal.resolvePortalURL(),
            crossingBackwards
        };
        // keep presenting
        if (this.presenting) spec.presenting = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.hash(this.viewId); // hash to not leak the viewId
        return spec;
    }

    frameTypeChanged(isPrimary, spec) {
        // our avatar just came into or left this world, either through a portal
        // (in which case we have a view spec), or through a navigation event (browser's back/forward)
        // in all cases we set the actor's inWorld which will show/hide the avatar
        this.isPrimary = isPrimary;
        const enteringWorld = isPrimary;
        const leavingWorld = !isPrimary;
        const actorSpec = {
            inWorld: enteringWorld,
        };

        // portal-enter and world-enter provide cardData so avatar can keep its
        // appearance.
        if (spec?.cardData) actorSpec.cardData = spec.cardData;
        if (spec?.name) actorSpec.name = spec.name;

        // a portal transition under our own steam specifies translation, rotation etc
        if (enteringWorld && spec?.translation) {
            let { translation, rotation } = spec;
            // transform spec relative to anchor
            const anchor = this.anchorFromURL(spec.url, true);
            if (anchor) {
                const m_avatar_tra = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_translation)(translation);
                const m_avatar_rot = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationQ)(rotation);
                const m_avatar = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m_avatar_rot, m_avatar_tra);
                const m_anchor_tra = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_translation)(anchor.translation);
                const m_anchor_rot = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationQ)(anchor.rotation);
                const m_anchor_rot_inv = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m_anchor_rot, M4_ROTATIONY_180); // flip by 180 degrees
                const m_anchor = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m_anchor_rot_inv, m_anchor_tra);
                const m = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_multiply)(m_avatar, m_anchor);
                translation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getTranslation)(m);
                rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getRotation)(m);
                actorSpec.anchor = anchor; // actor or {translation, rotation}
                this.anchor = anchor;
            }
            // move actor to the right place
            actorSpec.translation = translation;
            actorSpec.rotation = rotation;
            // move pawn to the right place
            this._translation = translation;
            this._rotation = rotation;
            this.onLocalChanged();
            // copy camera settings to pawn
            if (spec.lookPitch) this.lookPitch = spec.lookPitch;
            if (spec.lookYaw) this.lookYaw = spec.lookYaw;
            if (spec.lookOffset) this.lookOffset = spec.lookOffset;
        }
        if (leavingWorld) {
            let handlerModuleName = this.actor._cardData.avatarEventHandler;
            this.call(`${handlerModuleName}$AvatarPawn`, "endMotion");
        }
        // now actually leave or enter the world (stops presenting in old world)
        console.log(`${(0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)()} setting actor`, actorSpec);
        // the actor handling of _set (in Actor.set) applies the specified properties
        // in alphabetical order, each property triggering a say(`${propname}Set`).
        this.say("_set", actorSpec);
        if (enteringWorld) {
            delete this.modelLoadTime;
            this.say("setAvatarData", actorSpec.cardData || {}); // NB: after setting actor's name
            // start presenting and following in new space too
            if (spec?.presenting) {
                let manager = this.actor.service("PlayerManager");
                if (!manager.presentationMode) {
                    this.say("continuePresenting", spec.presenting);
                }
            } else if (spec?.following) {
                this.say("continueFollowing", spec.following);
            }
        }
        this.setPortalClipping();
    }

    followToWorld({ followerTransferData }) {
        const { url, following } = followerTransferData;
        if (this.isPrimary) {
            console.log(`${(0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)()} sending world-enter to ${url} following: ${following}`);
            this.setWorldSwitchFreeze(true);
            followerTransferData.cardData = this.actor._cardData;
            followerTransferData.name = this.actor._name;
            (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("world-enter", { portalURL: url, transferData: followerTransferData });
        } else {
            console.log(`${(0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)()} not sending world-enter to ${url}`);
        }
    }

    update(time, delta) {
        if (this.frozenForWorldSwitch) return; // don't move

        if (this.actor.follow || this.actor.remoteControlled) {
            // when following, the actor is remote controlled (see AvatarActor.tick)
            // so just call the PM_Smoothed version of update()
            this.tug = 0.06;
            super.update(time, delta);
        } else {
            this.tug = 0.2;
            const manager = this.actor.service("PlayerManager");
            this.throttle = (manager.presentationMode === this.actor.playerId) ? 60 : 125;
            if (this.actor.inWorld || this.spectator) {
                // get the potential new pose from velocity and spin.
                // the v and q variable is passed around to compute a new position.
                // unless positionTo() is called the avatar state (should) stays the same.

                let vq = this.updatePose(delta);
                let walkManager = this.service("WalkManager")
                vq = walkManager.walk(this, vq, time, delta);

                // the implementation of positionTo checks closeness to the current value so
                // calling positionTo should not cause a performance problem.
                this.positionTo(vq.v, vq.q, this.throttle);
                this.refreshCameraTransform();

                // this part is copied from CardPawn.update()
                // as we may not be calling super.update() all the time to avoid the smoothing logic from kicking in.
                // We should think about cleaning up here.
                if (this.updateRequests) {
                    this.updateRequests.forEach((u) => {
                        // [behaviorName, methodName]
                        this.call(...u, time, delta);
                    });
                }
            }
        }
        this.updateXRReference();
        this.updatePortalRender();
    }

    updateXRReference() {
        let manager = this.service("ThreeRenderManager");
        if (!manager.origReferenceSpace) {return;}

        let xr = manager.renderer.xr;
        let inv = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_invert)(this.global);
        let vv = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getTranslation)(inv);
        let rr = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_getRotation)(inv);

        let offsetTransform = new XRRigidTransform(
            {x: vv[0], y: vv[1], z: vv[2]},
            {x: rr[0], y: rr[1], z: rr[2], w: rr[3]});

        let newSpace = manager.origReferenceSpace.getOffsetReferenceSpace(offsetTransform);
        xr.setReferenceSpace(newSpace);
    }

    // compute motion from spin and velocity
    updatePose(delta) {
        let q, v;
        let tug = this.tug;
        if (delta) tug = Math.min(1, tug * delta / 15);

        if (!(0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_isZero)(this.spin)) {
            q = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_normalize)((0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_slerp)(this.rotation, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_multiply)(this.rotation, this.spin), tug));
        } else {
            q = this.rotation;
        }
        if (!(0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_isZero)(this.velocity)) {
            const relative = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(this.velocity, delta);
            const move = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_transform)(relative, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_rotationQ)(this.rotation));
            v = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)(this.translation, move);
        } else {
            v = this.translation;
        }

        return {v, q};
    }

    // update the camera transform and clipping planes depending on whether this avatar
    // is non-primary - i.e., rendering for a portal.
    setPortalClipping() {
        let { clippingPlanes } = this.service("ThreeRenderManager").renderer;
        if (this.isPrimary) {
            // we are the top world, so we turn off portal clipping
            const idx = clippingPlanes.indexOf(this.portalClip);
            if (idx >= 0) clippingPlanes.splice(idx, 1);
        } else {
            // we are rendering for a portal in another world.  turn on portal clipping.
            if (!clippingPlanes.includes(this.portalClip)) {
                clippingPlanes.push(this.portalClip);
            }
        }
    }

    // this is sent on every update(), as long as we're not frozen.
    // if this is the primary frame and it has portals,
    // they are given the chance to figure out if their camera matrices have
    // changed (due to motion of either the avatar or the portal).  if changed
    // portals are found, we tell the shell so it can coordinate rendering.
    updatePortalRender(force = false) {
        if (this.isPrimary) {
            const portalSpecs = [];
            let secondaryRenders = false;
            this.publish("avatar", "gatherPortalSpecs", {
                callback: spec => {
                    portalSpecs.push(spec);
                    secondaryRenders |= !!spec.cameraMatrix;
                },
                force
            });
            const renderMgr = this.service("ThreeRenderManager");
            if (portalSpecs.length) (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("portal-update", { portalSpecs });
            else renderMgr.setRender(true); // no portals, so use automatic rendering.

            // if we are being woken after a world switch (in which case force=true),
            // and it turns out that there are no portals whose rendering the shell
            // will await, render immediately and send "primary-rendered" to the shell
            // so it will reorder any frames.
            if (force && !secondaryRenders) {
                console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)(), "no portals in sight; rendering immediately");
                renderMgr.composer.render();
                (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("primary-rendered");
            }
        } else {
            // we are rendering for a portal in another world.
            // if we have an anchor, the anchor may have been moved
            if (this.actor._anchor) this.refreshCameraTransform();
        }
    }

    portalCameraUpdate(cameraMatrix) {
        this.lastCameraMatrix = cameraMatrix;
        const renderMgr = this.service("ThreeRenderManager");
        renderMgr.setRender(false); // we assume each update is likely part of a series; auto rendering will be switched back on if there is a pause in the updates
        if (cameraMatrix) {
            if (this.endMovementTimeout) clearTimeout(this.endMovementTimeout);
            this.endMovementTimeout = setTimeout(() => {
                const renderNow = !!this.lastCameraMatrix && !this.frozenForWorldSwitch;
                // console.log(`movement ended; setRender(${renderNow})`);
                renderMgr.setRender(renderNow);
            }, 50);

            this.portalLookExternal = cameraMatrix;
            initialPortalLookExternal = cameraMatrix;
            if (!this.isPrimary && !this.frozenForWorldSwitch) {
                this.refreshCameraTransform();
                renderMgr.composer.render();
                (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("portal-world-rendered");
            }
        }

    }

    checkFloor(vq) {
        // cast a ray to negative y direction and see if there is a walk layer object
        let walkLayer = this.service("ThreeRenderManager").threeLayer("walk");
        let collideList = walkLayer.filter(obj => obj.collider);

        let someFloor = false;

        for (let j = 0; j < collideList.length; j++) {
            let c = collideList[j];
            let iMat = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Matrix4();
            iMat.copy(c.matrixWorld).invert();

            let down = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, -1, 0);
            let ray = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Ray(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...vq.v), down);
            ray.applyMatrix4(iMat);
            let hit = c.children[0].geometry.boundsTree.raycastFirst(ray);
            someFloor = someFloor || hit;
        }

        return someFloor;
    }

    collideBVH(collideList, vq) {
        // uses:
        // https://github.com/gkjohnson/three-mesh-bvh
        // in particular, the characterMovement.js example

        // The segment is a short vertical line at the center of the avatar body.
        // From each end, a semi-sphere is added and make the cBox emcompasses the "capsule" shape.
        // It makes sure tha the bottom of the bottom semi-sphere "touches" the floor.

        // segment and cBox are transformed into the colliders frame (there may be a bug)
        // the shapecast method first enumerates the triangles that intersects cBox.

        // among those triangles, we compute the distance to the segment and checks if the distance
        // is less than radius. That is there is no explicit capsule like geometry, but the distance
        // check gives you that if a triangle interesects with the capsule.

        // We collect all intersecting triangles. The basic idea is that we move the segment away
        // from intersecting triangles so that end result has no intersection with the gometry.
        // IOW, we nudge the segment a bit by bit based on the list of triangles.

        // Some of those triangles would be in the direction of
        // the xz-plane from the bottom end point of the segment and some of those triangles are
        // in the direction of negative y direction. A problem is that we need to order nudges.
        // If the new position is on a part of stair-like geometry, if we first nudge the segment
        // away from a trinangle on the xz-plane, the avatar loses the toe-hold onto the triangle
        // that was under it. So we sort the triangles so that the bottom ones are tested first,
        // make sure that stairs pushes up the avatar first and then checks if it still intersects
        // with the triangle more closer to the horizontal plane.

        // The above is done to save a triangle in the maybeUp variable and unshift it into directions.

        // When all nudging is done, there should not be an intersecting triangle.

        // if there is no walkable geometry in the negative y direction (checkFloor()),
        // it however reverts back to the opposite side of the last safe position.

        // If it determined that the position change is mostly only horizontal,
        // it deems that the avatar is on a solid floor and keep it from trying to fall all the time.

        // This method returns a new pose (v for position and q for rotation) of the avatar.

        let capsulePoint = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3();
        let triPoint = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3();

        const radius = this.actor.collisionRadius;
        const leg = EYE_HEIGHT / 2; // all are fudge factors at this moment

        let positionChanged = false;

        let velocity = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sub)(vq.v, this.translation);
        // let currentPosition = this.translation;
        let newPosition = vq.v; // v3_add(currentPosition, stepVelocity);
        let onGround = false;

        for (let j = 0; j < collideList.length; j++) {
            let c = collideList[j];
            let iMat = c.children[0].matrixWorld.clone();
            iMat.invert();

            let segment = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Line3(
                new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(newPosition[0], newPosition[1], newPosition[2]),
                new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(newPosition[0], newPosition[1] - leg, newPosition[2])
            );

            let cBox = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Box3();
            cBox.makeEmpty();
            cBox.expandByPoint(segment.start);
            cBox.expandByPoint(segment.end);
            cBox.min.addScaledVector(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(-1, -1, -1), radius);
            cBox.max.addScaledVector(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(1, 1, 1), radius);

            segment.applyMatrix4(iMat);
            cBox.applyMatrix4(iMat);

            let directions = [];
            // let start = Date.now();

            let maybeUp;

            c.children[0].geometry.boundsTree.shapecast({
                intersectsBounds: box => box.intersectsBox(cBox),
                intersectsTriangle: tri => {
                    const distance = tri.closestPointToSegment(segment, triPoint, capsulePoint);
                    if (distance < radius) {
                        const depth = radius - distance;
                        const direction = capsulePoint.sub(triPoint).normalize();

                        let h = Math.sqrt(direction.x ** 2 + direction.z ** 2);
                        let v = direction.y;

                        if (h < 0.1 && v > 0.9 && (!maybeUp || depth > maybeUp.depth)) {
                            maybeUp = tri.clone();
                            directions.unshift(maybeUp);
                        } else {
                            directions.push(tri.clone());
                        }
                    }
                }
            });

            directions.forEach((tri) => {
                const distance = tri.closestPointToSegment(segment, triPoint, capsulePoint);
                if (distance < radius) {
                    let depth = radius - distance;
                    const direction = capsulePoint.sub(triPoint).normalize();

                    // there is an issue when you double click a too low point, but it is
                    // a better problem than simply go up the wall
                    //if (direction.y < 0) {
                    //depth = -depth;
                    //}

                    segment.start.addScaledVector(direction, depth);
                    segment.end.addScaledVector(direction, depth);
                    positionChanged = true;
                }
            });

            // console.log(Date.now() - start);

            let outPosition = segment.start.clone();
            outPosition.applyMatrix4(c.children[0].matrixWorld); // convert back to world coordinates
            // outPosition.y -= centerLen;

            newPosition = outPosition.toArray();
            // console.log(deltaVector);
            onGround = onGround || positionChanged && velocity[1] < -0.1 && Math.abs(velocity[0]) < 0.001 && Math.abs(velocity[2]) < 0.001;
        }

        if (onGround) {
            this.isFalling = false;
            return {v: this.translation, q: vq.q};
        }

        if (positionChanged) {
            this.isFalling = true;
            return {v: newPosition, q: vq.q};
        } else {
            this.isFalling = true;
            return vq;
        }
    }

    // given the 3D object, find the pawn
    pawnFrom3D(obj3d) {
        while (obj3d) {
            if (obj3d.wcPawn) return obj3d.wcPawn;
            obj3d = obj3d.parent;
        }
        return undefined;
    }

    collidePortal(vq) {
        if (this.frozenForWorldSwitch) return false;

        const renderMgr = this.service("ThreeRenderManager");
        const portalLayer = renderMgr.threeLayer("portal");
        if (!portalLayer) return false;

        let dir = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sub)(vq.v, this.translation);
        const traveled = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_magnitude)(dir);
        // if we're not moving, we're not crossing
        if (traveled === 0) return false;

        dir = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_normalize)(dir);
        this.portalcaster.far = 5; // first just find a portal; later worry about if we're close enough to cross it
        this.portalcaster.ray.direction.set(...dir);
        this.portalcaster.ray.origin.set(...this.translation);
        const firstIntersection = this.portalcaster.intersectObjects(portalLayer, true)[0];
        if (firstIntersection) {
            let portal = this.pawnFrom3D(firstIntersection.object);
            if (!portal) return false;

            // the normal of the portal's globalPlane points into the portal world
            const portalPlane = portal.globalPlane;
            const movingTowards = portalPlane.normal.dot(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...dir)) > 0;
            if (!movingTowards) return false;

            // simplest check is whether the distance to the intersect with the portal
            // plane is less than the distance we moved in the last time unit.  if
            // it is, assume we're going to cross within the next step.
            let crosses = firstIntersection.distance <= traveled;

            if (!crosses) {
                // otherwise, find our signed perpendicular distance to the portal's plane.
                // if within the designated portal-crossing distance, on the portal's
                // front side, we're going to cross.
                const perpendicular = portalPlane.distanceToPoint(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...vq.v));
                crosses = perpendicular >= -PORTAL_DISTANCE;
            }

            if (!crosses) return false;

            const { camera } = renderMgr;
            const cameraDir = camera.getWorldDirection(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3());
            const crossingBackwards = portalPlane.normal.dot(cameraDir) < 0;

            // remember which portal we left the world from
            this.anchor = portal.actor;

            // NOTE: THIS IS NOT THE ONLY CODE PATH FOR ENTERING WORLDS
            // we also jump between worlds using the browser's "forward/back" buttons
            console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.frameName)(), "player", this.viewId, "enter portal", portal.portalId);

            // make sure automatic rendering is off, and update-generated rendering
            renderMgr.setRender(false);
            this.setWorldSwitchFreeze(true);

            // spec for this avatar in new world
            let jumpVector = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(dir, firstIntersection.distance);
            jumpVector = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)(jumpVector, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_scale)(portalPlane.normal.toArray(), PORTAL_DISTANCE));
            const transferData = this.specForPortal(portal, jumpVector, crossingBackwards);

            // shell will swap iframes and trigger avatarPawn.frameTypeChanged() for this user in both worlds
            // but it also may delete this frame if it is unowned
            (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("portal-enter", { portalId: portal.portalId, transferData });
            // if we were presenting, tell followers to come with us
            if (this.presenting) {
                const { cardData: _cd, name: _n, ...presenterTransferData } = transferData;
                this.say("followMeToWorld", presenterTransferData);
                // calls followToWorld() in followers
                // which will result in frameTypeChanged() on follower's clients
            }
            return true;
        }
        return false;
    }

    keyDown(e) {
        // This is currently invoked as the "last responder", namely only if no card handled it.
        // by writing a new avatarEvents.js that exports a different AvatarEventHandler behavior module
        // you can override the avatars behavior.
        let w = this.wasdVelocity;
        let nw;

        const MAX_V = 0.015;
        const KEY_V = MAX_V / 2;

        if (e.ctrlKey || e.altKey) {
            switch(e.key) {
                case 'a':
                    console.log("My avatar pawn", this);
                    console.log("translation: ",this.actor.translation);
                    console.log("rotation (euler):",
                        (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_pitch)(this.actor.rotation),
                        (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_yaw)(this.actor.rotation),
                        (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_roll)(this.actor.rotation));
                    console.log("scale:", this.actor.scale);
                    break;
                case 'r':
                    let renderer = this.service("ThreeRenderManager").renderer;
                    console.log("Renderer", renderer);
                    console.log("Scene polycount:", renderer.info.render.triangles)
                    console.log("Active Drawcalls:", renderer.info.render.calls)
                    console.log("Textures in Memory", renderer.info.memory.textures)
                    console.log("Geometries in Memory", renderer.info.memory.geometries)
                    break;
            }
            return;
        }

        switch(e.key) {
            case 'Tab':
                this.jumpToNote(e); break;
            case 'w': case 'W': // forward
            case 'a': case 'A': // left strafe
            case 'd': case 'D': // right strafe
            case 's': case 'S': // backward
                this.wasdMap[e.key.toLowerCase()] = true;
                switch (e.key) {
                    case 'w': case 'W': // forward
                        nw = w[2] === KEY_V ? 0 : -KEY_V;
                        this.wasdVelocity = [w[0], w[1], nw];
                        break;
                    case 'a': case 'A': // left strafe
                        nw = w[0] === KEY_V ? 0 : -KEY_V;
                        this.wasdVelocity = [nw, w[1], w[2]];
                        break;
                    case 'd': case 'D': // right strafe
                        nw = w[0] === -KEY_V ? 0 : KEY_V;
                        this.wasdVelocity = [nw, w[1], w[2]];
                        break;
                    case 's': case 'S': // backward
                        nw = w[2] === -KEY_V ? 0 : KEY_V;
                        this.wasdVelocity = [w[0], w[1], nw];
                        break;
                }
                this.velocity = this.wasdVelocity;
                this.maybeLeavePresentation();
                break;
        }
    }

    keyUp(e) {
        // This is currently invoked as the "last responder", namely only if no card handled it.
        // by writing a new avatarEvents.js that exports a different AvatarEventHandler behavior module
        // you can override the avatars behavior.
        switch(e.key) {
            case 'w': case 'W': // forward
            case 'a': case 'A': // left strafe
            case 'd': case 'D': // right strafe
            case 's': case 'S': // backward
                this.wasdMap[e.key.toLowerCase()] = false;
                let h;
                if (this.wasdMap.a && !this.wasdMap.d) {
                    h = -0.01;
                } else if (!this.wasdMap.a && this.wasdMap.d) {
                    h = 0.01;
                } else {
                    h = 0;
                }
                let v;
                if (this.wasdMap.w && !this.wasdMap.s) {
                    v = -0.01;
                } else if (!this.wasdMap.w && this.wasdMap.s) {
                    v = 0.01;
                } else {
                    v = 0;
                }
                this.wasdVelocity = [h, 0, v];
                this.velocity = this.wasdVelocity;;
        }
    }

    addSticky(e) {
        if (e.shiftKey) {
            const render = this.service("ThreeRenderManager");
            const rc = this.pointerRaycast(e.xy, render.threeLayerUnion('pointer', 'walk'));
            let pe = this.pointerEvent(rc, e);
            this.say("addSticky", pe);
        }
    }

    stopFalling() {
        this.isFalling = false;
    }

    xy2yp(xy) {
        let camera = this.service("ThreeRenderManager").camera;
        let fov = camera.fov / 2;
        let h = window.innerHeight / 2;
        let w = window.innerWidth / 2;
        let c = (fov * Math.PI / 180) / h;
        return[c * (xy[0] - w), c * (h - xy[1])];
    }

    clearGizmo() {
        this.gizmoTargetPawn = null;
    }

    pointerDown(e) {
        let render = this.service("ThreeRenderManager");
        let rc = this.pointerRaycast(e.xy, render.threeLayerUnion("pointer"));
        this.targetDistance = rc.distance;
        let p3e = this.pointerEvent(rc, e);
        let pawn = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(p3e.targetId);

        let pawnIsGizmo = pawn && pawn.actor._behaviorModules?.some(m => m.startsWith("Gizmo"));

        if (this.gizmoTargetPawn && !pawnIsGizmo && pawn !== this.gizmoTargetPawn) {
            this.gizmoTargetPawn.unselectEdit();
            this.gizmoTargetPawn = null;
            this.publish(this.actor.id, "removeGizmo");
        }

        if (e.ctrlKey || e.altKey) { // should be the first responder case
            this.actor.behaviorManager.lookup("Gizmo", "GizmoActor");
            if (pawn && this.actor.behaviorManager.lookup("Gizmo", "GizmoActor")) {
                if (pawnIsGizmo) {
                    console.log("Tried to gizmo gizmo");
                    this.publish(this.actor.id, "addOrCycleGizmo", {target: this.gizmoTargetPawn.actor, viewId: this.viewId});
                } else {
                    if (this.gizmoTargetPawn != pawn) {
                        pawn.selectEdit();
                    }
                    this.gizmoTargetPawn = pawn;
                    this.publish(this.actor.id, "addOrCycleGizmo", {target: this.gizmoTargetPawn.actor, viewId: this.viewId});
                }
            } else {
                this.publish(this.actor.id, "removeGizmo");
            }
        } else {
            if (this.gizmoTargetPawn) {
                this.gizmoTargetPawn.unselectEdit();
                this.gizmoTargetPawn = null;
                this.publish(this.actor.id, "removeGizmo");
            } else {
                this.dragWorld = this.xy2yp(e.xy);
                this.lookYaw = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_yaw)(this._rotation);
            }
            let handlerModuleName = this.actor._cardData.avatarEventHandler;
            if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "handlingEvent")) {
                this.call(`${handlerModuleName}$AvatarPawn`, "handlingEvent", "pointerDown", this, e);
            }
            if (!pawnIsGizmo) {
                this.publish(this.actor.id, "removeGizmo");
            }
        }
    }

    pointerMove(e) {
        // should be the last responder case
        if (!this.focusPawn && this.isPointerDown && e.xy && this.dragWorld) {
            let yp = this.xy2yp(e.xy);
            let yaw = this.lookYaw + (this.dragWorld[0] - yp[0]) * this.yawDirection;
            let pitch = this.lookPitch + (this.dragWorld[1] - yp[1]) * this.pitchDirection;
            pitch = pitch > 1 ? 1 : (pitch < -1 ? -1 : pitch);
            this.dragWorld = yp;
            this.lookTo(pitch, yaw);
        }
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "handlingEvent")) {
            this.call(`${handlerModuleName}$AvatarPawn`, "handlingEvent", "pointerMove", this, e);
        }
    }

    pointerUp(e) {
        // Below is a suppot for an incomplete user program.
        // If there are left over first responders (pointer capture) from a user object,
        // delete them here.
        if (this.firstResponders) {
            for (let [_eventName, array] of this.firstResponders) {
                for (let i = array.length - 1; i >= 0; i--) {
                    let obj = array[i];
                    if (obj.pawn !== this) {
                        array.splice(i, 1);
                    }
                }
            }
        }
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.hasBehavior(`${handlerModuleName}$AvatarPawn`, "handlingEvent")) {
            this.call(`${handlerModuleName}$AvatarPawn`, "handlingEvent", "pointerUp", this, e);
        }
    }

    pointerTap(_e) {
        /*
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        if (this.has(`${handlerModuleName}$AvatarPawn`, "handlingEvent")) {
            this.call(`${handlerModuleName}$AvatarPawn`, "handlingEvent", "pointerTap", this, e);
        }
        */
    }

    pointerWheel(e) {
        let z = this.lookOffset[2];
        z += Math.max(1,z) * e.deltaY / 1000.0;
        z = Math.min(100, Math.max(z,0));
        this.lookOffset = [this.lookOffset[0], z, z];
        let pitch = (this.lookPitch * 11 + Math.max(-z / 2, -Math.PI / 4)) / 12;
        this.lookTo(pitch, (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_yaw)(this._rotation), this.lookOffset); //,
    }

    fadeNearby() {
        let manager = this.actor.service("PlayerManager");
        let presentationMode = manager.presentationMode;
        let setOpacity = (pawn, opacity) => {
            const inWorld = pawn.actor.inWorld;
            // don't try to set (and record) opacity until the avatar has its model
            if (!pawn.modelLoadTime || (pawn.lastOpacity === opacity && pawn.lastInWorld === inWorld)) {return;}

            pawn.lastOpacity = opacity;
            pawn.lastInWorld = inWorld;

            let origOpacity = opacity;

            let handlerModuleName = pawn.actor._cardData.avatarEventHandler;
            if (pawn.hasBehavior(`${handlerModuleName}$AvatarPawn`, "mapOpacity")) {
                opacity = pawn.call(`${handlerModuleName}$AvatarPawn`, "mapOpacity", this, opacity);
            }

            let model = pawn.shape.children[0];
            if (!model) {return;}

            let visible = inWorld && opacity !== 0;
            setModelOpacity(model, visible, opacity);

            // don't mess with opacity levels of children, but make them
            // visible or invisible appropriately
            if (pawn._children) {
                for (let c of pawn._children) {
                    if (c.actor._cardData.avatarParts) c.shape.visible = visible;
                }
            }

            let ghostfoot = this.shape.getObjectByName("ghostfoot");
            if (ghostfoot) {
                ghostfoot.visible = pawn.actor.inWorld && origOpacity !== 0;
            }
        };

        for (let [_viewId, a] of manager.players) {
            // a for actor, p for pawn
            let p = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(a.id);
            if (!p) {continue;}
            if (!this.actor.inWorld) {
                setOpacity(p, 1); // we are not even here so don't affect their opacity
            } else if (a.follow) {
                setOpacity(p, 0); // never render followers
            } else if (((p === this && (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_isZero)(a.lookOffset)) || (a._playerId === presentationMode && this.actor.follow)) && (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_isZero)(a.lookOffset)) {
                setOpacity(p, 0); // never render me or my leader in 1st person
            } else { // fade based on their (or our own) distance between avatar and camera
                let m = this.lookGlobal; // camera location
                let cv = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(m[12], m[13], m[14]);
                m = a.global; // avatar location
                let av = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(m[12], m[13], m[14]);
                // fade between 0.5 and 3.3 meters (but we used squared distance)
                let d = Math.min(Math.max((cv.distanceToSquared(av) - 0.7) / 10, 0), 1);
                setOpacity(p, d);
            }
        }
    }

    addChild(id) {
        super.addChild(id);
        delete this.lastOpacity;
    }

    removeChild(id) {
        super.removeChild(id);
        delete this.lastOpacity;
    }

    makeCardSpecFrom(configuration, actor, avatarName) {
        let oldCardData = {...actor._cardData};
        let handlerModuleName = this.actor._cardData.avatarEventHandler;
        let behaviorModules = actor._behaviorModules || [];
        let avatarType = oldCardData.avatarType;

        [
            "dataLocation", "dataTranslation", "dataScale", "dataRotation", "handedness",
            "modelType", "type", "name", "shadow", "avatarType"].forEach((n) => {delete oldCardData[n];});

        if (!configuration.type && (!avatarType || avatarType === "wonderland")) {
            let options = {
                name: avatarName || this.actor._name,
                dataScale: [0.3, 0.3, 0.3],
                dataRotation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, Math.PI, 0),
                dataTranslation: [0, -0.4, 0],
                dataLocation: `./assets/avatars/${this.actor._name}.zip`,
                modelType: "glb",
                type: "3d",
                behaviorModules: behaviorModules,
                ...oldCardData,
            };
            if (options.type === "initial") {options.type = "3d";}
            return options;
        }

        let options = {
            type: "3d",
            modelType: "glb",
            dataLocation: configuration.avatarURL,
            name: configuration.nickname,
            dataRotation: [0, Math.PI, 0],
            handedness: configuration.handedness,
            shadow: true,
            behaviorModules: behaviorModules,
            ...oldCardData,
        };
        if (options.type === "initial") {options.type = "3d";}
        if (configuration.type === "ReadyPlayerMe") {
            options = {...options, ...{
                avatarEventHandler: "HalfBodyAvatarEventHandler",
                dataScale: [1.5, 1.5, 1.5],
                dataTranslation: [0, -0.7, 0],
                behaviorModules: [...options.behaviorModules, "HalfBodyAvatarEventHandler"]
            }};
            if (options.behaviorModules.indexOf(handlerModuleName) >= 0) {
                options.behaviorModules = options.behaviorModules.filter((n) => n !== handlerModuleName);
            }
        } else {
            options = {...options, ...{
                dataScale:  [0.3, 0.3, 0.3],
                dataTranslation:  [0, -0.4, 0]
            }};
        }
        return options;
    }

    showSettingsMenu() {
        let promise = new Promise((resolve, _reject) => {
            (0,_settingsMenu_js__WEBPACK_IMPORTED_MODULE_6__.startSettingsMenu)(false, resolve);
        });
        promise.then(changed => {
            if (changed) {
                const configuration = window.settingsMenuConfiguration;
                (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("update-configuration", { localConfig: configuration });
                let tempCardSpec = this.makeCardSpecFrom(window.settingsMenuConfiguration, this.actor);
                delete this.modelLoadTime;
                this.say("setAvatarData", tempCardSpec);
                this.modelHasLoaded = false;
            }
        });
    }

    showShareMenu() {
        (0,_settingsMenu_js__WEBPACK_IMPORTED_MODULE_6__.startShareMenu)(this);
    }

    goHome() {
        if (!this.spectator) this.say("goHome");
        else {
            let anchor = this.anchorFromURL(window.location.href);
            if (!anchor) {
                anchor = {
                    translation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_zero)(),
                    rotation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_identity)(),
                }
            }
            let translation = [...anchor.translation];
            this.lastCollideTranslation = translation;
            translation[0] += 0.00001; // defeat the positionTo() optimization
            this.positionTo(translation, anchor.rotation);
        }
    }

    comeToMe() {
        let manager = this.actor.service("PlayerManager");
        if (!manager.presentationMode) {
            this.say("comeToMe");
            return;
        }

        if (manager.presentationMode === this.viewId) {
            this.say("stopPresentation");
        }
    }

    jumpToNote(e) {
        // collect the notes and jump to the next one or last.
        let cards = this.actor.queryCards({methodName: "filterNotes"}, this);
        let lastIndex;
        if (this.lastCardId === undefined) {
            lastIndex = 0;
        } else {
            lastIndex = cards.findIndex(c => c.id === this.lastCardId);
            if (e.shiftKey) {
                lastIndex--;
            } else {
                lastIndex++;
            }
        }

        if (lastIndex >= cards.length) {
            lastIndex = 0;
        }

        if (lastIndex < 0) {
            lastIndex = cards.length - 1;
        }

        let newCard = cards[lastIndex];

        if (newCard) {
            this.lastCardId = newCard.id;
            let pawn = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(newCard.id);
            if (!pawn) {return;}
            let pose = pawn.getJumpToPose ? pawn.getJumpToPose() : null;

            if (pose) {
                let obj = {xyz: pose[0], offset: pose[1], look: true, targetId: newCard.id, normal: pawn.hitNormal || [0, 0, 1]};
                this.say("goThere", obj);
            }
        }
    }

    filterNotes(c) {
        return c._behaviorModules && c._behaviorModules.includes("StickyNote");
    }

    loadFromFile(data, asScene, inFront) {
        let model = this.actor.wellKnownModel("ModelRoot");

        let array = new TextEncoder().encode(data);
        let ind = 0;
        let key = Math.random();

        this.publish(model.id, "loadStart", key);

        while (ind < array.length) {
            let buf = array.slice(ind, ind + 2880);
            this.publish(model.id, "loadOne", {key, buf});
            ind += 2880;
        }

        let pose = inFront ? this.dropPose(6) : null;
        this.publish(model.id, "loadDone", {asScene, key, pose});
    }
}


/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardActor": () => (/* binding */ CardActor),
/* harmony export */   "CardPawn": () => (/* binding */ CardPawn),
/* harmony export */   "MicroverseAppManager": () => (/* binding */ MicroverseAppManager),
/* harmony export */   "intrinsicProperties": () => (/* binding */ intrinsicProperties)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _Pointer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pointer.js */ "./src/Pointer.js");
/* harmony import */ var _assetManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assetManager.js */ "./src/assetManager.js");
/* harmony import */ var _text_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text/text.js */ "./src/text/text.js");
/* harmony import */ var _DynamicTexture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DynamicTexture.js */ "./src/DynamicTexture.js");
/* harmony import */ var _code_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.js */ "./src/code.js");
/* harmony import */ var _worldSaver_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worldSaver.js */ "./src/worldSaver.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io
//
// Collaborative Card Object










// import { forEach } from 'jszip';

const { MeshBVH, /*MeshBVHVisualizer*/ } = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE_MESH_BVH;

const intrinsicProperties = ["translation", "scale", "rotation", "layers", "parent", "behaviorModules", "multiuser", "name", "noSave"];


//------------------------------------------------------------------------------------------
//-- CardActor ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

class CardActor extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.mix)(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Actor).with(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.AM_Smoothed, _Pointer_js__WEBPACK_IMPORTED_MODULE_2__.AM_PointerTarget, _code_js__WEBPACK_IMPORTED_MODULE_6__.AM_Code) {
    static okayToIgnore() { return [ "$local", "$global", "$rigidBody" ]; }

    init(options) {
        let {cardOptions, cardData} = this.separateOptions(options);

        if (!cardOptions.layers) {cardOptions.layers = ["pointer"];}

        // coming from different mixins, but still used by listen.
        this.scriptListeners = new Map();
        super.init(cardOptions);
        this._cardData = cardData;
        this.noSave = options.noSave;
        this.createShape(cardData);
        this.listen("selectEdit", this.saySelectEdit);
        this.listen("unselectEdit", this.sayUnselectEdit);
        this.listen("showControls", this.showControls);
        this.listen("setCardData", this.setCardData);

        // this.listen("dataScaleComputed", this.dataScaleComputed);
        this.listen("setAnimationClipIndex", this.setAnimationClipIndex);
    }

    destroy() {
        this.publish("actorManager", "destroyed", this.id);
        super.destroy();
    }

    separateOptions(options) {
        // options are either intrinsic or non-intrinsic. We store non-intrinsic values in _cardData.
        let cardOptions = {};
        let cardData = {};

        Object.keys(options).forEach((k) => {
            if (intrinsicProperties.indexOf(k) >= 0) {
                cardOptions[k] = options[k];
            } else {
                cardData[k] = options[k];
            }
        });
        return {cardOptions, cardData};
    }

    updateOptions(options) {
        // fully override the _cardData with given variable (keys that are not in options will be deleted.
        console.log("updateOptions", options);
        let {cardOptions, cardData} = this.separateOptions(options);
        this.updateBehaviors(options);
        this.set({...cardOptions});
        this.set({cardData: cardData});
        this.say("updateShape", options);
    }

    addBehaviorModule(moduleName) {
        let behaviorModules;
        if (!this._behaviorModules) {
            behaviorModules = [moduleName];
        } else if (this._behaviorModules.includes(moduleName)) {
            return;
        } else {
            behaviorModules = [...this._behaviorModules, moduleName];
        }
        this.updateBehaviors({behaviorModules});
    }

    removeBehaviorModule(moduleName) {
        let behaviorModules;
        if (!this._behaviorModules) {return;}
        let index = this._behaviorModules.indexOf(moduleName);
        if (index < 0) {return;}
        behaviorModules = [...this._behaviorModules];
        behaviorModules.splice(index, 1);
        this.updateBehaviors({behaviorModules});
    }

    updateBehaviors(options) {
        // we need to call teardown and setup for behaviors removed or added;
        // so we need to keep track of changes from the previous state.
        // also, since non-system modules can depend on system modules, we ensure that
        // system modules appear first in the behavior order even if added later.

        if (!options.behaviorModules) {return;}
        let behaviorManager = this.behaviorManager;

        let allNewActorBehaviors = [];
        let allNewPawnBehaviors = [];

        options.behaviorModules.forEach((moduleName) => {
            let module = behaviorManager.modules.get(moduleName);
            if (!module) {
                console.error(`unknown module ${moduleName} is specified for update`);
                return;
            }
            if (module.actorBehaviors) {
                allNewActorBehaviors.push(...module.actorBehaviors.values());
            }
            if (module.pawnBehaviors) {
                allNewPawnBehaviors.push(...module.pawnBehaviors.values());
            }
        });

        let allOldActorBehaviors = [];
        let allOldPawnBehaviors = [];

        let oldSystemModules = [];
        if (this._behaviorModules) {
            this._behaviorModules.forEach((oldModuleName) => {
                let oldModule = behaviorManager.modules.get(oldModuleName);
                if (oldModule.actorBehaviors) {
                    allOldActorBehaviors.push(...oldModule.actorBehaviors.values());
                }
                if (oldModule.pawnBehaviors) {
                    allOldPawnBehaviors.push(...oldModule.pawnBehaviors.values());
                }
            });
        }

        allOldActorBehaviors.forEach((oldBehavior) => {
            if (!allNewActorBehaviors.includes(oldBehavior)) {
                behaviorManager.modelUnuse(this, oldBehavior);
            }
        });
        allOldPawnBehaviors.forEach((oldBehavior) => {
            if (!allNewPawnBehaviors.includes(oldBehavior)) {
                behaviorManager.viewUnuse(this, oldBehavior);
            }
        });

        allNewActorBehaviors.forEach((newBehavior) => {
            if (!allOldActorBehaviors.includes(newBehavior)) {
                behaviorManager.modelUse(this, newBehavior);
            }
        });
        allNewPawnBehaviors.forEach((newBehavior) => {
            if (!allOldPawnBehaviors.includes(newBehavior)) {
                behaviorManager.viewUse(this, newBehavior);
            }
        });

        this._behaviorModules = [...oldSystemModules, ...options.behaviorModules];
    }

    addLayer(newLayerName) {
        if (this._layers && this._layers.includes(newLayerName)) {return;}
        this.set({layers: [...(this._layers || []), newLayerName]});
    }

    removeLayer(layerName) {
        if (!this._layers.includes(layerName)) {return;}
        this._layers = this._layers.filter((layer) => layer !== layerName);
    }

    setCardData(options) {
        let newOptions = {...this._cardData, ...options};
        this.set({cardData: newOptions});
        this.updateBehaviors(options);
        // this line below should be good, except that right now it fails some objects.
        // this.say("updateShape", options);
    }

    createShape(options) {
        let type = options.type;
        if (type === "text") {
            this.subscribe(this.id, "changed", "textChanged");
        } else if (type === "code") {
            this.subscribe(this.id, "changed", "textChanged");
            // this is a weird inter mixins dependency but not sure how to write it
            this.subscribe(this.id, "text", "codeAccepted");
        } else if (type === "3d" || type === "3D") {
            if (this._cardData.animationClipIndex !== undefined && this._cardData.animationStartTime === undefined) {
                this._cardData.animationStartTime = this.now();
            }
        } else if (type === "2d" || type === "2D" ) {
        } else if (type === "lighting") {
        } else if (type === "object" || type === "initial") {
        } else {
            console.log("unknown type for a card: ", options.type);
        }
    }

    get pawn() { return CardPawn; }
    get layers() { return this._layers; }
    get isCard() {return true;}
    get name() {return this._name || 'Card'}
    get color() {return this._color || 0xffffff}

    uv2xy(uv) {
        return [this._cardData.textureWidth * uv[0], this._cardData.textureHeight * (1 - uv[1])];
    }

    /*
    dataScaleComputed(s) {
        // when a 3D model is loaded, it automatically computes dataScale on the view side.
        // the value is transmitted to the model. (potentially multiple times).
        if (s === undefined) {
            delete this._cardData.dataScale;
        } else {
            this._cardData.dataScale = s;
        }
    }
    */

    textChanged() {
        this._cardData.runs = this.content.runs;
        this.publish(this.sessionId, "triggerPersist");
    }

    sayDeck(message, data) {
        if (this._parent) {
            return this.publish(this._parent.id, message, data);
        }
        this.publish(this.id, message, data);
    }

    listenDeck(message, method) {
        if (this._parent) {
            return this.subscribe(this._parent.id, message, method);
        }
        this.subscribe(this.id, message, method);
    }

    rotateBy(angles) {
        // angles are either a 3 value array or 4 value array
        // if it is a 3-value array, it is interpreted as an euler angle
        // if it is a 4-value array, it is interpreted as a quaternion
        let q = angles.length === 3 ? (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(...angles) : angles;
        let newQ = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_multiply)(this.rotation, q);
        this.rotateTo(newQ);
    }

    translateBy(dist) {
        // dist is either a 3-value array or a scalar.
        // if it is a 3-value array, it specify the offset.
        // if it is a scalar, it is intepretered as [0, 0, dist].
        let offset = Array.isArray(dist) ? dist : [0, 0, dist];
        let t = this.translation;
        this.translateTo([t[0] + offset[0], t[1] + offset[1], t[2] + offset[2]]);
    }

    forwardBy(dist) {
        // dist is either a 3-value array or a scalar.
        // if it is a 3-value array, it specify the offset, in the reference frame of the receiver.
        // if it is a scalar, it is intepretered as [0, 0, dist].
        let offset = Array.isArray(dist) ? dist : [0, 0, dist];
        let vec = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_rotate)(offset, this.rotation)
        let t = this.translation;
        this.translateTo([t[0] + vec[0], t[1] + vec[1], t[2] + vec[2]]);
    }

    scaleBy(factor) {
        // factor is either a 3-value array or a scalar.
        // if it is a 3-value array, it specify the difference.
        // if it is a scalar, it is intepretered as [factor, factor, factor].
        let offset = Array.isArray(factor) ? factor : [factor, factor, factor];
        let cur = this.scale;
        this.scaleTo([cur[0] + offset[0], cur[1] + offset[1], cur[2] + offset[2]]);
    }

    nop() {}

    duplicate() {
        let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_7__.WorldSaver(CardActor);
        let data = saver.collectCardData(this);
        delete data.parent;
        let t = this.translation;

        data.translation = [t[0] + 2, t[1], t[2]];
        this.createCard(data);
    }

    saveCard(data) {
        this.say("saveCard", data);
    }

    allChildrenMap(cards) {
        if (!cards) {cards = new Map();}
        if (!this.noSave) {
            cards.set(this.id, this);
        }
        if (this.children) {
            this.children.forEach(c => c.allChildrenMap(cards));
        }
        return cards;
    }

    showControls(toWhom) {
        // it creates a property sheet, when a module called "PropertySheet" is loaded.
        let avatar = this.service("ActorManager").actors.get(toWhom.avatar);
        let distance = (toWhom.distance || 6);
        distance = Math.min(distance * 0.7, 4);
        if (avatar) {
            let pose = avatar.dropPose(distance, [1, 1, 0]);
            if (!this.behaviorManager.modules.get("PropertySheet")) {return;}
            let menu = this.createCard({
                name: "property panel",
                behaviorModules: ["PropertySheet"],
                translation: pose.translation,
                rotation: pose.rotation,
                type: "object",
                fullBright: true,
                color: 0xffffff,
                frameColor: 0x666666,
                width: 3,
                height: 3.2,
                cornerRadius: 0.02,
                depth: 0.02,
                noSave: true,
                target: this.id,
            });
            menu.call("PropertySheet$PropertySheetActor", "setObject", this);
        }
    }

    setAnimationClipIndex(animationClipIndex) {
        // called when a view loads a 3D model and detects that it has animation clips.
        this._cardData.animationClipIndex = animationClipIndex;
        if (this._cardData.animationStartTime === undefined) this._cardData.animationStartTime = this.now();
        this.say("animationStateChanged");
    }

    intrinsicProperties() {return intrinsicProperties;}

    saySelectEdit() {
        console.log("saySelectEdit says doSelectEdit");
        this.say("doSelectEdit");
    }

    sayUnselectEdit() {
        this.say("doUnselectEdit");
    }

    collectCardData() {
        let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_7__.WorldSaver(CardActor);
        return saver.collectCardData(this, true);
    }

    static load(cards, world, version) {
        let array;
        let nameMap;
        if (Array.isArray(cards)) {
            array = cards;
        } else {
            array = cards.array;
            nameMap = cards.nameMap;
        }
        // it is supposed to load a JSONable structure from array, but a special case is made
        // for the parent property where you can give an actual object
        if (version === "1") {
            let appManager = world.service("MicroverseAppManager");
            let behaviorManager = world.service("BehaviorModelManager");
            let map = new Map();
            return array.map(({id, card}) => {
                let Cls;
                let options = {...card};
                let behavior;
                if (options.type === "code") {
                    if (options.behaviorModule) {
                        let [moduleName, behaviorName] = options.behaviorModule.split(".");
                        behavior = behaviorManager.lookup(moduleName, behaviorName);
                    }

                    let runs = [{text: behavior ? behavior.code : ""}];

                    options = {
                        backgroundColor: 0xcccccc,
                        textScale: options.textScale || 0.002,
                        ...options,
                        runs: runs,
                    };
                    Cls = _text_text_js__WEBPACK_IMPORTED_MODULE_4__.TextFieldActor;
                } else if (card.type === "text") {
                    Cls = _text_text_js__WEBPACK_IMPORTED_MODULE_4__.TextFieldActor;
                } else if (card.className) {
                    Cls = appManager.get(card.className);
                    delete options.className;
                } else {
                    Cls = CardActor;
                }
                if (card.parent) {
                    if (typeof card.parent !== "object") {
                        let parent = map.get(card.parent);
                        options.parent = parent;
                    }
                }

                if (Array.isArray(card.rotation) && card.rotation.length === 3) {
                    options.rotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(...card.rotation);
                }

                if (Array.isArray(card.dataRotation) && card.dataRotation.length === 3) {
                    options.dataRotation = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(...card.dataRotation);
                }

                if (nameMap) {
                    if (options.behaviorModules) {
                        options.behaviorModules = options.behaviorModules.map((n) => nameMap.get(n) || n);
                    }
                }

                // this should not happen but so far we have not found the cause.
                if (typeof options.parent === "string") {
                    console.log("encountered parent as string", options.parent);
                    delete options.parent;
                }

                let actor = Cls.create(options);
                if (id) {
                    map.set(id, actor);
                }

                if (options.type === "code" && behavior) {
                    actor.subscribe(behavior.id, "setCode", "loadAndReset");
                }

                return actor;
            });
        }
        return [];
    }

    get rigidBody() {
        // the API changed from rapier 0.7.6 to 0.9.0, but we do not want to load two versions of Rapier engines.
        // The old session with Rapier 0.7.6 will still load with the stubbed out versions of behaviors/croquet/rapier.js.
        // but the simulation in such a session won't run anymore.
        if (this._oldRapier07) {
            return {applyForce: () => undefined, applyTorque: () => undefined};
        }
        return this.call("Physics$PhysicsActor", "getRigidBody");
    }

    setPhysicsWorld(v) {
        this._physicsWorld = v;
        return v;
    }

    get physicsWorld() {
        let manager = this.service("PhysicsManager");
        if (manager.globalWorld) {return manager.globalWorld;}
        if (this._physicsWorld) {return this._physicsWorld;}
        if (this._parent) {return this._parent._physicsWorld;}
        return undefined;
    }

    collisionEvent(rb1, rb2, started) {
        return this.call(this.collisionEventHandlerBehavior, this.collisionEventHandlerMethod, rb1, rb2, started);
    }

    getTextFieldActorClass() {
        return _text_text_js__WEBPACK_IMPORTED_MODULE_4__.TextFieldActor;
    }
}
CardActor.register('CardActor');

//------------------------------------------------------------------------------------------
//-- CardPawn ------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------


class CardPawn extends (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.mix)(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Pawn).with(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.PM_Smoothed, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.PM_ThreeVisible, _Pointer_js__WEBPACK_IMPORTED_MODULE_2__.PM_PointerTarget, _code_js__WEBPACK_IMPORTED_MODULE_6__.PM_Code) {
    constructor(actor) {
        super(actor);
        this.addToLayers(...actor.layers);
        //this.addEventListener("pointerWheel", "onPointerWheel");
        this.addEventListener("pointerDoubleDown", "onPointerDoubleDown");
        this.listen("doSelectEdit", this.doSelectEdit);
        this.listen("doUnselectEdit", this.doUnselectEdit);
        this.listen("cardDataSet", this.cardDataUpdated);
        this.listen("updateShape", this.updateShape);
        this.listen("layersSet", this.updateLayers);

        this.listen("saveCard", this.saveCard);
        this.listen("animationStateChanged", this.tryStartAnimation);
        this.animationInterval = null;
        this.subscribe(this.id, "3dModelLoaded", this.tryStartAnimation);
        this.constructCard();
        this._editMode = false; // used to determine if we should ignore pointer events
    }

    sayDeck(message, vars) {
        if (this.actor._parent !== undefined) this.publish(this.actor._parent.id, message, vars);
        else this.publish(this.actor.id, message, vars);
    }

    listenDeck(message, method) {
        if (this.actor._parent !== undefined) this.subscribe(this.actor._parent.id, message, method);
        else this.subscribe(this.actor.id, message, method);
    }

    constructCard() {
        this.shape = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Group()
        this.shape.name = this.actor.name;
        this.setRenderObject(this.shape);
        this.constructShape(this.actor._cardData);
    }

    constructShape(options) {
        let type = options.type;
        if (type === "3d" || type === "3D") {
            this.construct3D(options);
        } else if (type === "2d" || type === "2D") {
            this.isFlat = true;
            this.construct2D(options);
        }  else if (type === "text" || type === "code") {
            this.isFlat = true;
        } else if (type === "lighting") {
            // this.constructLighting(options);
        }
    }

    destroy() {
        let cardData = this.actor._cardData;
        let assetManager = this.service("AssetManager").assetManager;
        if (cardData.dataLocation) {
            assetManager.revoke(cardData.dataLocation, this.id);
        }
        if (cardData.textureLocation) {
            assetManager.revoke(cardData.textureLocation, this.id);
        }
        this.cleanupColliderObject();
        super.destroy();
    }

    ensureColliderObject() {
        if (!this.colliderObject) {
            let collider = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Group();
            this.setColliderObject(collider);
            collider.collider = true;
        }
    }

    cleanupColliderObject() {
        if (this.colliderObject) {
            [...this.colliderObject.children].forEach((m) => {
                if (m.geometry) {
                    m.geometry.dispose();
                    this.colliderObject.remove(m);
                }
            });
            if (this.colliderObject.geometry) {
                this.colliderObject.geometry.dispose();
            }
            this.colliderObject.removeFromParent();
            delete this.colliderObject;
        }
    }

    updateLayers() {
        let oldLayers = this.layers();
        let toRemove = [];
        oldLayers.forEach((layerName) => {
            if (!this.actor.layers.includes(layerName)) {
                toRemove.push(layerName);
            }
        });
        if (toRemove.length > 0) {
            this.removeFromLayers(...toRemove);
        }
        let origLayers = this.actor._layers;
        if (origLayers) {
            this.addToLayers(...origLayers);
        }
    }

    cleanupShape(_options) {
        this.updateLayers();
        delete this.isFlat;

        if (this.placeholder) {
            this.placeholder.children.forEach((m) => {
                m.geometry.dispose();
                m.material.dispose();
            });
            this.shape.remove(this.placeholder);
            delete this.placeholder;
        }

        delete this.video;
        if (this.texture) {
            this.texture.dispose();
            delete this.texture;
        }

        if (this.objectURL) {
            URL.revokeObjectURL(this.objectURL);
            delete this.objectURL;
        }

        if (this.material) {
            this.material.dispose();
        }

        delete this.name;
        delete this.properties2D;
        delete this.animationSpec;

        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }

        this.cleanupColliderObject();

        if (this.shape) {
            this.shape.traverse((m) => {
                // the idea here is that any data that should be disposed should be
                // already accounted for.
                if (m === this.shape) {return;}

                if (m.geometry) {
                    m.geometry.dispose();
                }
                if (m.material) {
                    if (m.material.dispose) {
                        m.material.dispose();
                    } else {
                        m.material.forEach((mm) => mm.dispose());
                    }
                }
            });
            [...this.shape.children].forEach((m) => this.shape.remove(m));
        }
    }

    updateShape(options) {
        this.cleanupShape(options);
        this.constructShape(this.actor._cardData);
    }

    construct3D(options) {
        let model3d = options.dataLocation;
        let modelType = options.modelType;

        /* this is really a hack to make it work with the current model. */
        if (options.placeholder) {
            let size = options.placeholderSize || [40, 1, 40];
            let color = options.placeholderColor || 0x808080;
            let offset = options.placeholderOffset || [0, -1.7, 0];

            const gridImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOnAAADusBZ+q87AAAAJtJREFUeJzt0EENwDAAxLDbNP6UOxh+NEYQ5dl2drFv286598GrA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAa4AO0BqgA7QG6ACtATpAu37AD8eaBH5JQdVbAAAAAElFTkSuQmCC";

            let image = new Image();
            let texture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Texture(image);
            image.onload = () => texture.needsUpdate = true;
            image.src = gridImage;

            texture.wrapS = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.RepeatWrapping;
            texture.wrapT = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.RepeatWrapping;
            texture.repeat.set(size[0], size[2]);
            let pGeometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BoxGeometry(...size);
            let pMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshStandardMaterial({map:texture, color: color, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.FrontSide});

            let mesh = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(pGeometry, pMaterial);
            mesh.receiveShadow = true;
            this.placeholder = mesh;
            this.placeholder.position.set(...offset);
            this.placeholder.name = "placeholder";
            if (this.actor.layers.indexOf('walk') >= 0) {
                this.constructCollider(this.placeholder);
            }
            this.shape.add(this.placeholder);
        }

        let name = this.actor.name;
        let shadow = options.shadow !== undefined ? options.shadow : true;
        let singleSided = options.singleSided !== undefined ? options.singleSided : false;
        let noFog = options.noFog !== undefined ? options.noFog : false;

        // bail out if we're in the process of loading this same model
        if (!model3d || this._model3dLoading === model3d) {return;}

        this._model3dLoading = model3d;
        let assetManager = this.service("AssetManager").assetManager;
        this.getBuffer(model3d).then((buffer) => {
            assetManager.setCache(model3d, buffer, this.id);
            return assetManager.load(buffer, modelType, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
        }).then((obj) => {
            if (model3d !== this._model3dLoading) {
                console.log("model load has been superseded");
                return;
            }

            this.setupObj(obj, options);
            // if it is loading an old session, the animation field may not be there.
            this.setupAnimation(obj);
            obj.updateMatrixWorld(true); // @@ not sure whose benefit this is for, given that obj isn't yet in the scene graph

            if (options.placeholder) {
                console.log("delete collider for placeholder");
                // assuming that a card with placeholder specified does not need to keep the cache.
                // So we special case it to delete the cache entry.
                assetManager.revoke(model3d, this.id);
                this.cleanupColliderObject();
                this.shape.remove(this.placeholder);
            }
            if(options.flatten) {
                let flattenedObj = this.flattenObj(obj);
                if(flattenedObj !== obj) {
                    obj.traverse((mesh) => {
                        if (mesh.geometry){
                            mesh.geometry.dispose();
                            mesh.material.dispose();
                        }
                    });
                    obj = flattenedObj;
                }
            }
            (0,_assetManager_js__WEBPACK_IMPORTED_MODULE_3__.addMeshProperties)(obj, shadow, singleSided, noFog, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
            if (this.actor.layers.indexOf('walk') >= 0) {
                this.constructCollider(obj);
            }

            // place this after collider construction
            // or collider incorporates shape transform
            this.shape.add(obj);

            obj.updateMatrixWorld(true); // now sort out where everything is, before announcing model load

            if (name) {obj.name = name;}

            if (Array.isArray(obj.material)) {
                obj.material.dispose = arrayDispose;
            }

            delete this._model3dLoading;
            this.publish(this.id, "3dModelLoaded");
        }).catch(_err => {
            delete this._model3dLoading;
        });
    }

    construct2D(options) {
        let dataLocation = options.dataLocation;
        let textureLocation = options.textureLocation;
        let textureType = options.textureType;

        let texturePromise; // resolves to texture and width and height

        let depth = (options.depth !== undefined) ? options.depth : 0.05;
        let width = (options.width !== undefined) ? options.width : 1;
        let height = (options.height !== undefined) ? options.height : 1;
        let textureWidth = (options.textureWidth !== undefined) ? options.textureWidth : 512;
        let textureHeight = (options.textureHeight !== undefined) ? options.textureHeight : 512;

        let name = options.name || this.id;
        let color = options.color; // if color is undefined, use SVG colors
        let frameColor = options.frameColor || 0x666666;
        let fullBright = options.fullBright !== undefined ? options.fullBright : false;
        let shadow = options.shadow !== undefined ? options.shadow : true;
        let cornerRadius = options.cornerRadius !== undefined ? options.cornerRadius : 0;

        this.properties2D = {depth, width, height, textureWidth, textureHeight, name, color, frameColor, fullBright, shadow, cornerRadius};

        // You might want to parallelize the texture data loading and svg data loading by arranging
        // promises cleverly, but this.texture should be set quite early
        // (that is before returning from this method) to have apps like multiblaster function

        if (textureType === "video") {
            let muted = this.actor._cardData.muted !== undefined ? this.actor._cardData.muted : true;
            let loop = this.actor._cardData.loop !== undefined ? this.actor._cardData.loop : false;
            this.video = document.createElement("video");
            this.video.autoplay = true;
            this.video.muted = muted;
            this.video.loop = loop;
            this.video.controls = false;
            this.video.width = textureWidth;
            this.video.height = textureHeight;

            this.getBuffer(textureLocation).then((buffer) => {
                let objectURL = URL.createObjectURL(new Blob([buffer], {type: "video/mp4"}));
                this.video.src = objectURL;
                this.videoLoaded = true;
                this.objectURL = objectURL;
                // need to be revoked when destroyed
            });
            this.texture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.VideoTexture(this.video);
            texturePromise = Promise.resolve({
                width: this.video.width,
                height: this.video.height,
                texture: this.texture
            });
        } else if (textureType === "image") {
            texturePromise = this.getBuffer(textureLocation).then((bufferOrObj) => {
                if (bufferOrObj.texture) {
                    this.texture = bufferOrObj.texture;
                    return Promise.resolve(bufferOrObj);
                }
                let objectURL = URL.createObjectURL(new Blob([bufferOrObj]));
                this.objectURL = objectURL;
                return new Promise((resolve, reject) => {
                    this.texture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.TextureLoader().load(
                        objectURL,
                        (texture) => {
                            URL.revokeObjectURL(objectURL);
                            resolve({width: texture.image.width, height: texture.image.height, texture})
                        }, null, reject);
                });
            });
        } else if (textureType === "canvas") {
            this.canvas = document.createElement("canvas");
            this.canvas.id = name;
            this.canvas.width = textureWidth;
            this.canvas.height = textureHeight;
            this.texture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.CanvasTexture(this.canvas);
            texturePromise = Promise.resolve({width: textureWidth, height: textureHeight, texture: this.texture});
        } else if (textureType === "dynamic") {
            this.dynamic = new _DynamicTexture_js__WEBPACK_IMPORTED_MODULE_5__.DynamicTexture(textureWidth, textureHeight, options.fillStyle, options.clearStyle);
            this.texture = this.dynamic.texture;
            texturePromise = Promise.resolve({width: textureWidth, height: textureHeight, texture: this.texture});
        }

        if (!texturePromise) {texturePromise = Promise.resolve(undefined);}

        let loadOptions = {
            texture: this.texture,
            color,
            frameColor,
            fullBright,
            shadow,
            depth,
        };

        let assetManager = this.service("AssetManager").assetManager;

        if (dataLocation) {
            return this.getBuffer(dataLocation).then((buffer) => {
                assetManager.setCache(dataLocation, buffer, this.id);
                return assetManager.load(buffer, "svg", _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE, loadOptions);
            }).then((obj) => {
                (0,_assetManager_js__WEBPACK_IMPORTED_MODULE_3__.normalizeSVG)(obj, depth, shadow, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
                return obj;
            }).then((obj) => {
                if (this.texture) {
                    (0,_assetManager_js__WEBPACK_IMPORTED_MODULE_3__.addTexture)(obj, this.texture);
                }
                if (options.dataTranslation) {
                    obj.position.set(...options.dataTranslation);
                }
                obj.name = "2d";
                if (Array.isArray(obj.material)) {
                    obj.material.dispose = arrayDispose;
                }
                this.objectCreated(obj);
                this.shape.add(obj);
                this.publish(this.id, "2dModelLoaded");
            });
        } else {
            return texturePromise.then((textureObj) => {
                if (textureObj && textureObj.texture) {
                    textureWidth = textureObj.width;
                    textureHeight = textureObj.height;
                    let max = Math.max(textureWidth, textureHeight);
                    let scale = 1 / max;
                    width = textureWidth * scale;
                    height = textureHeight * scale;
                    if (textureLocation) {
                        assetManager.setCache(textureLocation, textureObj, this.id);
                    }
                    this.properties2D = {...this.properties2D, width, height, textureWidth, textureHeight};
                }

                let geometry = this.roundedCornerGeometry(width, height, depth, cornerRadius);
                let material = this.makePlaneMaterial(depth, color || 0xffffff, frameColor, fullBright);

                if (this.texture) {
                    material[0].map = this.texture;
                }

                this.material = material;
                let obj = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(geometry, material);
                obj.castShadow = shadow;
                obj.name = "2d";
                this.objectCreated(obj);
                this.shape.add(obj);
                this.publish(this.id, "2dModelLoaded");
            });
        }
    }

    // flattenObj does its best to remove groups and merge meshes with the same
    // textures. It is used if the "flatten:" flag is set in the card.
    // It is a poor man's mesh merge, so should not be used if the same texture is used
    // in different kinds of materials (which is likely rare).
    // It is quite similar to constructCollider and these could be merged at some point.
    flattenObj(obj) {
        let staticGroup = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Group();
        let meshData = [];
        let beforeCount = 0, endCount = 0;
        try {
            obj.traverse(c =>{
                beforeCount++;
                if(c.geometry){
                    let cloned = c.geometry.clone();
                    cloned.applyMatrix4(c.matrixWorld);
                    if (cloned.index) {
                        // this test may be dubious as some models can legitimately contain
                        // non-indexed buffered geometry.
                        if(cloned.attributes.uv2){
                            // three.js doesn't support these
                            delete cloned.attributes.uv2;
                            delete cloned.attributes.texcoord_2;
                        }
                        let id = c.material.map ? c.material.map.id : 0;
                        if (!meshData[id]) meshData[id] = {material: c.material.clone(), geometries:[]};
                        meshData[id].geometries.push(cloned);
                    } else {
                        console.warn("skipping a geometry in the model that is not indexed");
                    }
                }
            });

            let BufferGeometryUtils = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BufferGeometryUtils;
            meshData.forEach(m=>{
                endCount++;
                let mergedGeometry = BufferGeometryUtils.mergeBufferGeometries( m.geometries, false);
                let mesh = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(mergedGeometry, m.material);
                staticGroup.add(mesh);
            })

        } catch (err) {
            console.error("failed to build the static for:", obj);
            console.error(err);
            return obj;
        }
        console.log("Static - before:", beforeCount, "end:", endCount, "object:", obj);
        return staticGroup;
    }

    constructCollider(obj) {
        let geometries = [];
        this.ensureColliderObject();

        let mergedGeometry;

        try {
            obj.traverse(c =>{
                if(c.geometry){
                    let cloned = c.geometry.clone();
                    cloned.applyMatrix4(c.matrixWorld);
                    for( const key in cloned.attributes) {
                        if (key !== "position") {
                            cloned.deleteAttribute(key);
                        }
                    }
                    if (cloned.index) {
                        // this test may be dubious as some models can legitimately contain
                        // non-indexed buffered geometry.
                        geometries.push(cloned);
                    } else {
                        console.warn("skipping a geometry in the model that is not indexed");
                    }
                }
            });

            let BufferGeometryUtils = window.THREE.BufferGeometryUtils;
            mergedGeometry = BufferGeometryUtils.mergeBufferGeometries( geometries, false);
            mergedGeometry.boundsTree = new MeshBVH( mergedGeometry, { lazyGeneration: false } );
        } catch (err) {
            console.error("failed to build the BVH collider for:", obj);
            console.error(err);
            return;
        }

        let collider = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(mergedGeometry);
        collider.material.wireframe = true;
        collider.material.opacity = 0.5;
        //collider.material.transparent = true;
        collider.matrixWorld = obj.matrixWorld.clone();
        collider.updateMatrixWorld(true);
        collider.visible = false;
        this.colliderObject.add(collider);

        /*
          let visualizer = new MeshBVHVisualizer( collider, 10 );
          visualizer.visible = true;

          this.shape.parent.add(visualizer)
        */
    }

    setupObj(obj, options) {
        if (options.dataScale) {
            obj.scale.set(...options.dataScale);
        } else {
            /*
            let size = new THREE.Vector3(0, 0, 0);
            new THREE.Box3().setFromObject(obj).getSize(size);
            let max = Math.max(size.x, size.y, size.z);
            let s = 4 / max;
            obj.scale.set(s, s, s);
            // this part of code is executed by all views at this moment
            if (!this.actor._cardData.dataScale) {
                this.say("dataScaleComputed", [s, s, s]);
            }
            */
        }
        if (options.dataTranslation) {
            obj.position.set(...options.dataTranslation);
        }
        if (options.dataRotation) {
            let d = (options.dataRotation.length === 3) ? (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(...options.dataRotation) : options.dataRotation;
            obj.quaternion.set(...d);
        }
    }

    setupAnimation(obj) {
        // There are a few ways to get here:
        // -  the card is recently created, and animation loop has not been started.
        // -  the card was here, and animation loop was on and showing different animations
        //    and a new 3D model was just loaded.
        // - a new model with an actor behavior that specifies animationClipIndex already.
        // For the second case, animationRunning may be true.
        if (!obj._croquetAnimation) {return;}

        let spec = obj._croquetAnimation;
        if (spec) {
            this.animationSpec = spec;
            this.tryStartAnimation();
        }
    }

    objectCreated() {}

    roundedCornerGeometry(width, height, depth, cornerRadius) {
        let x = height / 2;
        let y = width / 2;
        let z = depth / 2;
        let radius = cornerRadius === undefined ? 0 : cornerRadius;

        let shape = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Shape();
        shape.moveTo(-x, -y + radius);
        shape.lineTo(-x,  y - radius);
        shape.quadraticCurveTo(-x, y, -x + radius, y);
        shape.lineTo(x - radius, y);
        shape.quadraticCurveTo(x, y, x, y - radius);
        shape.lineTo(x, -y + radius);
        shape.quadraticCurveTo(x, -y, x - radius, -y);
        shape.lineTo(-x + radius, -y);
        shape.quadraticCurveTo( -x, -y, -x, -y + radius);

        let extrudePath = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.LineCurve3(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, z), new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, -z));
        extrudePath.arcLengthDivisions = 3;
        let geometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.ExtrudeGeometry(shape, {extrudePath});

        geometry.parameters.width = width;
        geometry.parameters.height = height;
        geometry.parameters.depth = depth;

        let normalizeUV = (uvArray, bb) => {
            let w = bb.max.x - bb.min.x;
            let h = bb.max.y - bb.min.y;
            if (w && h) {
                let wScale = 1;
                let hScale = 1;
                if (h > w) hScale = h / w;
                else if (w > h) wScale = w / h;
                for (let i = 0; i < uvArray.length; i += 2) {
                    uvArray[i  ] = uvArray[i  ] * wScale + 0.5;
                    uvArray[i+1] = uvArray[i+1] * hScale + 0.5; // eslint-disable-line
                }
            }
        };

        let boundingBox = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Box3(
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(-x, -y, -z),
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3( x,  y,  z));

        let uv = geometry.getAttribute('uv');
        normalizeUV(uv.array, boundingBox);
        return geometry;
    }

    makePlaneMaterial(depth, color, frameColor, fullBright) {
        if (this.material) {
            this.material.dispose();
        }
        let material;
        if (!fullBright) {
            material = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshPhongMaterial({color:color, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.FrontSide});
        } else {
            material = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshBasicMaterial({color:color, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.FrontSide, toneMapped: false});
        }

        if (depth > 0) {
            let second;
            second = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshPhongMaterial({color: frameColor, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.FrontSide});
            material = [material, second ];
        }

        this.material = material;
        if (Array.isArray(this.material)) {
            this.material.dispose = arrayDispose;
        }
        return material;
    }

    isDataId(name) {
        return !(name.startsWith("http://") ||
                 name.startsWith("https://") ||
                 name.startsWith(".") ||
                 name.startsWith("/"));
    }

    getBuffer(name) {
        let assetManager = this.service("AssetManager").assetManager;
        let buffer = assetManager.getCache(name);
        if (buffer) { return Promise.resolve(buffer); }
        if (!this.isDataId(name)) {
            return fetch(name)
                .then((resp) => {
                    if (!resp.ok) throw Error(`fetch failed: ${resp.status} ${resp.statusText}`);
                    return resp.arrayBuffer();
                }).then((arrayBuffer) => new Uint8Array(arrayBuffer))
        } else {
            let handle = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.fromId(name);
            return _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Data.fetch(this.sessionId, handle);
        }
    }

    cardDataUpdated(data) {
        // it might be independently implemented in a behavior, and independently subscribed

        if (this.didPropertyChange(data, ["type", "dataLocation", "dataRotation", "dataScale"])) return this.updateShape();

        if (data.v.type !== "2d") {return;}
        let obj = this.shape.children.find((o) => o.name === "2d");
        if (!obj || !obj.children || obj.children.length === 0) {return;}
        obj = obj.children[0];
        if (this.didPropertyChange(data, ["depth", "width", "height", "color", "frameColor", "cornerRadius", "fullBright"])) {
            let {depth, width, height, color, frameColor, cornerRadius, fullBright} = data.v;

            depth = (depth !== undefined) ? depth : 0.05;
            width = (width !== undefined) ? width : 1;
            height = (height !== undefined) ? height : 1;
            color = color || 0xFFFFFF;
            frameColor = frameColor || 0x666666;
            cornerRadius = cornerRadius !== undefined ? cornerRadius : 0;
            fullBright = fullBright !== undefined ? fullBright : false;

            let material = this.makePlaneMaterial(depth, color, frameColor, fullBright);

            if (this.didPropertyChange(data, ["depth", "width", "height", "cornerRadius"])) {
                let geometry = this.roundedCornerGeometry(width, height, depth, cornerRadius)
                obj.geometry = geometry;
            }
            obj.material = material;
        }
    }

    // TODO: move this to utility function in Worldcore (kernel/src/Utilities.js)
    didPropertyChange({ o, v }, propertyName) {
        if (Array.isArray(propertyName)) {
            return propertyName.some((name) => o[name] !== v[name]);
        } else {
            return o[propertyName] !== v[propertyName];
        }
    }

    uv2xy(uv) {
        return this.actor.uv2xy(uv);
    }

    /*
    onPointerWheel(e) {
        let wheel = e.deltaY;
        let s = this.scale;
        let w = wheel < 0 ? -0.1 : 0.1;
        if (s[0] + w > 0.3) {
            this.scaleTo([s[0] + w, s[1] + w, s[2] + w], 100);
        }
    }
    */

    onPointerDoubleDown(pe) {
        if (!pe.targetId) {return;}
        let pose = this.getJumpToPose ? this.getJumpToPose() : null;
        if (pose) {
            pe.xyz = pose[0]; // world coordinates
            pe.offset = pose[1]; // distance from target
            pe.look = true;
        } else {
            // pe.offset = Constants.EYE_HEIGHT; // filled in by the receiving side
        }
        this.publish(pe.avatarId, "goThere", pe);
    }

    showControls(actorInfo) {
        this.say("showControls", actorInfo);
    }

    // compute and return the position and distance the avatar should jump to to see the card full screen
    getJumpToPose() {
        if(!this.isFlat) return null;
        let current = this.renderObject.localToWorld(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3()).toArray(); // this is where the card is
        let renderer = this.service("ThreeRenderManager");
        let camera = renderer.camera;
        let caspect = camera.aspect;
        let cWidth = renderer.canvas.width;
        let cHeight = renderer.canvas.height;

        let base = (cHeight / 2) * Math.sqrt(3); // when fov is 60 deg; subject to change

        let temp = this.renderObject.matrix;
        let size = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, 0);
        try {
            let scale = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 0, 0);
            scale.setFromMatrixScale(temp);
            let mat4 = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Matrix4();
            mat4.makeScale(scale.x, scale.y, scale.z);
            this.renderObject.matrix = mat4;
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Box3().setFromObject(this.renderObject).getSize(size);
        } finally {
            this.renderObject.matrix = temp;
        }
        let taspect = size.x / size.y;

        let d = taspect < caspect ? (size.y * base) / cHeight : (size.x * base) / cWidth;
        return [current, d * 1.1];
    }

    verticalNorm(norm){
        let normal = [...norm];
        normal[1] = 0;

        let nsq = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sqrMag)(normal);
        if(nsq < 0.001){
            normal[0] = 0;
            normal[1] = norm[1];
            normal[2] = 0;
        }
        return (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_normalize)(normal);
    }

    dragPlane(rayCaster, p3e){
        // XYZZY the flamingo does not follow the cursor when dragging in the plane.
        if(!this._plane) {
            let normal = p3e.normal || p3e.lookNormal; // normal may not exist
            normal = this.verticalNorm( normal );

            let offset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_dot)(p3e.xyz, normal);
            this._plane = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...normal), -offset);
            this._parentInvert = this._parent ? (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_invert)(this._parent.global) : (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.m4_identity)();
            this.startDrag = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_transform)(p3e.xyz, this._parentInvert)
            this._startTranslation = this._translation;
        }
        let p = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3();
        rayCaster.ray.intersectPlane(this._plane, p);
        let here = p.toArray();
        let localHere = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_transform)(here, this._parentInvert);
        let delta = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sub)(localHere, this.startDrag);
        this.set({translation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_add)(this._startTranslation, delta)});
    }

    rotatePlane(rayCaster, p3e){
        if(!this._plane) {
            // first
            let normal = [...p3e.lookNormal];
            normal[1] = 0;
            // let nsq = v3_sqrMag(normal);
            normal = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_normalize)(normal);
            let offset = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_dot)(p3e.xyz, normal);
            this._plane = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...normal), -offset);
            this.startDrag = p3e.xyz;
            this.baseRotation = this._rotation;
            this.rotAngle = 0;
        }
        let p = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3();
        rayCaster.ray.intersectPlane(this._plane, p);
        let here = p.toArray();
        let delta = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_sub)(this.startDrag, here);
        delta[1] = 0;
        let angle = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_magnitude)(delta);
        let sign = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_cross)(p3e.lookNormal, delta)[1];
        if (sign < 0) angle = -angle;
        let qAngle = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, angle, 0);
        this.set({rotation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_multiply)(this.baseRotation, qAngle)});
    }

    tryStartAnimation() {
        if (this.actor._cardData.animationClipIndex === undefined && this.animationSpec?.animations.length > 0) {
            this.say("setAnimationClipIndex", 0);
            // use the first animation clip as default. Some views may call this at the same time,
            // but that should be okay
        }
        this.runAnimation();
    }

    runAnimation() {
        let spec = this.animationSpec;
        if (!spec) {
            if (this.animationInterval) {
                clearInterval(this.animationInterval);
                this.animationInterval = null;
            }
            return;
        }

        if (!this.animationInterval) {
            this.animationInterval = setInterval(() => this.runAnimation(), 50)
        }

        let animationClipIndex = this.actor._cardData.animationClipIndex;
        if (animationClipIndex === undefined) {return;}
        if (animationClipIndex < 0) {return;}

        // if the animationClipIndex has been changed,
        // the new clip is started and the time is adjusted according to the model side
        // animation startTime.

        // logicalStartTime is on the logical time.
        // if it is the same as current this.actor._cardData.animationStartTime,
        // the ordinally flow of time is not disturbed so it goes business as usual.
        // if it is different from animationStartTime, the animation will use it as
        // the new "startTime" basis.

        let now = this.now();
        let modelStartTime = this.actor._cardData.animationStartTime;
        let { mixer, lastTime, lastAnimationClipIndex } = spec;

        if (animationClipIndex !== lastAnimationClipIndex) {
            mixer.stopAllAction();
            let clip = spec.animations[animationClipIndex];
            if (!clip) {return;}
            mixer.clipAction(clip).play();
            spec.lastAnimationClipIndex = animationClipIndex;
        }
        let newTime = (now - modelStartTime) / 1000;
        let delta = newTime - lastTime;

        mixer.update(delta);
        spec.lastTime = newTime;

    }

    selectEdit() {
        this.say("selectEdit");
    }

    unselectEdit() {
        this.say("unselectEdit")
        delete this._plane;
    }

    doSelectEdit() {
        this._editMode = true;
        console.log("doSelectEdit")
        if (this.renderObject) {
            this.addWireBox(this.renderObject);
        }
    }

    doUnselectEdit() {
        this._editMode = false;
        console.log("doUnselectEdit")
        if (this.renderObject) {
            this.removeWireBox(this.renderObject);
        }
    }

    nop() {}

    getMyAvatar() {
        let playerManager = this.actor.service("PlayerManager");
        let myAvatar = playerManager.players.get(this.viewId);
        if (!myAvatar) {return undefined;}
        return (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(myAvatar.id);
    }


    addWireBox(obj3d) {
        let tmpMat = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Matrix4();
        let currentMat = obj3d.matrix;
        let box;
        try {
            obj3d.matrix = tmpMat;
            box = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Box3().setFromObject(obj3d);
        } finally {
            obj3d.matrix = currentMat;
        }

        let min = box.min;
        let max = box.max;

        let x = max.x - min.x;
        let ax = (max.x + min.x) / 2;
        let y = max.y - min.y;
        let ay = (max.y + min.y) / 2;
        let z = max.z - min.z;
        let az = (max.z + min.z) / 2;

        let cylinder = (len, rotateSel, tx, ty, tz) => {
            let cyl = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.CylinderGeometry(0.02, 0.02, len);
            if (rotateSel) {
                cyl[rotateSel](Math.PI / 2);
            }
            cyl.translate(tx, ty, tz);
            return cyl;
        };

        let c0 =  cylinder(x, "rotateZ", ax, max.y * 1.01, max.z * 1.01);
        let c1 =  cylinder(x, "rotateZ", ax, max.y * 1.01, min.z * 1.01);
        let c2 =  cylinder(x, "rotateZ", ax, min.y * 1.01, max.z * 1.01);
        let c3 =  cylinder(x, "rotateZ", ax, min.y * 1.01, min.z * 1.01);

        let c4 =  cylinder(y, null,      max.x * 1.01, ay, max.z * 1.01);
        let c5 =  cylinder(y, null,      max.x * 1.01, ay, min.z * 1.01);
        let c6 =  cylinder(y, null,      min.x * 1.01, ay, max.z * 1.01);
        let c7 =  cylinder(y, null,      min.x * 1.01, ay, min.z * 1.01);

        let c8 =  cylinder(z, "rotateX", max.x * 1.01, max.y * 1.01, az);
        let c9 =  cylinder(z, "rotateX", max.x * 1.01, min.y * 1.01, az);
        let c10 = cylinder(z, "rotateX", min.x * 1.01, max.y * 1.01, az);
        let c11 = cylinder(z, "rotateX", min.x * 1.01 , min.y * 1.01, az);

        let cylinders = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

        let BufferGeometryUtils = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BufferGeometryUtils;
        let mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(cylinders, false);

        let mat = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshStandardMaterial({
            color: 0xdddddd,
            transparent: true,
            opacity: 0.6,
            depthTest: false,
            depthWrite: false
        });

        let line = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(mergedGeometry, mat);
        line._wireline = true;
        line.renderOrder = 10000;
        obj3d.add(line);
    }

    removeWireBox(obj3d) {
        [...obj3d.children].forEach((c) => {
            if (c._wireline) {
                c.geometry.dispose();
                c.material.dispose();
                c.removeFromParent();
            }
        });
    }

    /*
    showSelectEdit(obj3d) {
        this.service("ThreeRenderManager").addToOutline(obj3d);
        obj3d.traverse((obj)=>{
            if(obj.geometry){

                let m = obj.material;
                let mat;
                if(Array.isArray(m))mat = m;
                else mat = [m];

                mat.forEach(m=>{
                    let c = m.color;
                    if(c && !m._oldColor) { // check for reused color
                        m._oldColor = c;
                        let gray = (c.r * 0.299 + c.g * 0.587 + c.b * 0.114) * 0.50;
                        m.color = new THREE.Color(gray, gray, gray);
                        m._oldOpacity = m.opacity;
                        m.opacity = 0.5;
                        m._oldTransparent = m.transparent;
                        m.transparent = true;
                        m.needsUpdate = true;
                    }
                })
            }
        });
    }

    showUnselectEdit(obj3d) {
        this.service("ThreeRenderManager").clearOutline(obj3d);
        let mat;
        obj3d.traverse((obj)=>{
            if(obj.type === '_lineHighlight') {
                // lines.push(obj);
            } else if(obj.geometry) {
                mat = (Array.isArray(obj.material)) ? obj.material : [obj.material];
                mat.dispose = arrayDispose;
                //console.log("removeWire, material",mat);
                mat.forEach(m=>{
                    if(m._oldColor) {
                        m.color = m._oldColor;
                        m.opacity = m._oldOpacity;
                        m.transparent = m._oldTransparent;
                        delete m._oldColor;
                        delete m._oldOpacity;
                        delete m._oldTransparent;
                        m.needsUpdate = true;
                    }
                });
            }
        });
    }*/

    saveCard(data) {
        if (data.viewId !== this.viewId) {return;}

        let cardsMap = this.actor.allChildrenMap();
        let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_7__.WorldSaver(CardActor);
        let json = {};
        let cards = saver.collectData(cardsMap);
        delete cards[0].card.parent;
        json.cards = cards;

        let allModules = [];

        cards.forEach((spec) => {
            if (spec.card.behaviorModules) {
                allModules.push(...spec.card.behaviorModules);
            }
        });

        let modules = this.actor.behaviorManager.save(allModules)
        json.behaviorModules = modules;

        if (_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.UserRapier) {
            json.useRapier = true;
        }

        let string = saver.stringify(json);
        let name = this.actor._name || "card";
        let result = {name, version: "1", data: JSON.parse(string)};

        let div = document.createElement("a");
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result, null, 4));
        div.setAttribute("href", dataStr);
        div.setAttribute("download", `${name}.vrse`);
        div.click();
    }
}

class MicroverseAppManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ModelService {
    init(_options) {
        super.init("MicroverseAppManager");
        // this.$apps = options.registry; // new Map() {[name]: cls}
    }

    add(_cls) {
        // this.set(cls.name, cls);
    }
    set(_name, _cls) {
        // this.$apps.set(name, cls);
    }
    get(name) {
        // return this.$apps.get(name);
        try {
            return this.constructor.classFromID(name);
        } catch (e) {}
        return null;
    }
    delete(_name) {
        // return this.$apps.delete(name);
    }
}

MicroverseAppManager.register("MicroverseAppManager");

function arrayDispose() {
    if (Array.isArray(this)) {
        this.forEach((e) => e.dispose());
    } else {
        this.dispose();
    }
}



/***/ }),

/***/ "./src/code.js":
/*!*********************!*\
  !*** ./src/code.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM_Code": () => (/* binding */ AM_Code),
/* harmony export */   "BehaviorModelManager": () => (/* binding */ BehaviorModelManager),
/* harmony export */   "BehaviorViewManager": () => (/* binding */ BehaviorViewManager),
/* harmony export */   "CodeLibrary": () => (/* binding */ CodeLibrary),
/* harmony export */   "PM_Code": () => (/* binding */ PM_Code),
/* harmony export */   "checkModule": () => (/* binding */ checkModule)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _physics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics.js */ "./src/physics.js");
/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame.js */ "./src/frame.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io


const {ViewService, ModelService, GetPawn, Model, Constants} = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__;





//console.log(WorldcoreRapierExports);

let isProxy = Symbol("isProxy");
function newProxy(object, handler, module, behavior) {
    if (object[isProxy]) {
        return object;
    }
    return new Proxy(object, {
        get(target, property) {
            // Note to developers:
            // You may be seeing this in the developer tool of the browser.
            // Don't worry! You can press the "Step into" button several times to get to the
            // "apply" line a few lines below. If you step into it, you will see the behavior
            // method you are trying to get to.
            if (property === isProxy) {return true;}
            if (property === "_target") {return object;}
            if (property === "_behavior") {return behavior;}
            if (handler && handler.hasOwnProperty(property)) {
                // let behavior handler override the method / getter
                const getter = Object.getOwnPropertyDescriptor(handler, property)?.get;
                // use the card object as "this" in behavior getters
                const handlerProp = getter ? getter.apply(object) : handler[property];
                return handlerProp;
            }
            return target[property];
        },
        set(target, property, value) {
            // let behavior handler override the method / getter
            const setter = handler && handler.hasOwnProperty(property) && Object.getOwnPropertyDescriptor(handler, property)?.set;
            if (setter) {
                // use the card object as "this" in behavior setters
                setter.apply(object, [value]);
            } else {
                target[property] = value;
            }
            return true;
        },
    });
}

/* AM_Code: A mixin to support Live programming */

const AM_Code = superclass => class extends superclass {
    init(options) {
        super.init(options);
        this.scriptListeners = new Map();
        this.behaviorManager = this.service("BehaviorModelManager");
        if (options.behaviorModules) {
            options.behaviorModules.forEach((name) => { /* name: Bar */
                let module = this.behaviorManager.modules.get(name);
                if (!module) {
                    console.error(`unknown module ${name} is specified`);
                    return;
                }
                let {actorBehaviors, pawnBehaviors} = module;
                if (actorBehaviors) {
                    for (let behavior of actorBehaviors.values()) {
                        this.behaviorManager.modelUse(this, behavior);
                    }
                }
                if (pawnBehaviors) {
                    for (let behavior of pawnBehaviors.values()) {
                        this.behaviorManager.viewUse(this, behavior);
                    }
                }
            });
        }
    }

    destroy() {
        if (this[isProxy]) {
            return this._target.destroy();
        }
        if (this._behaviorModules) {
            this._behaviorModules.forEach((name) => { /* name: Bar */
                let module = this.behaviorManager.modules.get(name);
                if (!module) {
                    console.error(`unknown module ${name} is being torn down`);
                    return;
                }
                let {actorBehaviors, pawnBehaviors} = module;
                if (actorBehaviors) {
                    for (let behavior of actorBehaviors.values()) {
                        this.behaviorManager.modelUnuse(this, behavior);
                    };
                }
                if (pawnBehaviors) {
                    for (let behavior of pawnBehaviors.values()) {
                        this.behaviorManager.viewUnuse(this, behavior);
                    };
                }
            });
        }
        super.destroy();
    }

    future(time) {
        if (!this[isProxy]) {return super.future(time);}
        let behaviorName = this._behavior.$behaviorName;
        let moduleName = this._behavior.module.externalName;
        return this.futureWithBehavior(time, moduleName, behaviorName);
    }

    // In order to enable a future call in the regular syntax:
    //    this.future(100).aBehaviorMethod()
    // the future call creates a proxy that remembers the calling behavior by name
    // and "aBehaviorMethod is looked up from the behavior.

    // A special case is needed when the method name is "call", therefore it expects
    // explicit specification of behavior.

    futureWithBehavior(time, moduleName, behaviorName) {
        let superFuture = (sel, args) => super.future(time, sel, ...args);
        let behaviorManager = this.behaviorManager;
        let basicCall = this.call;

        return new Proxy(this, {
            get(_target, property) {
                let behavior = behaviorManager.lookup(moduleName, behaviorName);

                let func = property === "call" ? basicCall : behavior.$behavior[property];
                let fullName = property === "call" ?  "call" : `${moduleName}$${behaviorName}.${property}`;
                if (typeof func === "function") {
                    const methodProxy = new Proxy(func, {
                        apply(_method, _this, args) {
                            return superFuture(fullName, args);
                        }
                    });
                    return methodProxy;
                }
                throw Error("Tried to call " + property + "() on future of " + behaviorName + " which is not a function");
            }
        });
    }

    // call a behavior method. behaviorName is either ModuleName$BehaviorName or BehaviorName.
    // If former, the current (calling) module's name is used.
    call(behaviorName, name, ...values) {
        let moduleName;
        let split = behaviorName.split("$");
        if (split.length > 1) {
            moduleName = split[0];
            behaviorName = split[1];
        }
        if (!moduleName && this[isProxy]) {
            moduleName = this._behavior.module.externalName;
        }

        let behavior = this.behaviorManager.lookup(moduleName, behaviorName);
        if (!behavior) {
            throw new Error(`behavior named ${behaviorName} not found`);
        }

        return behavior.invoke(this[isProxy] ? this._target : this, name, ...values);
    }

    listen(eventName, listener) {
        return this.scriptSubscribe(this.id, eventName, listener);
    }

    subscribe(scope, eventName, listener) {
        return this.scriptSubscribe(scope, eventName, listener);
    }

    has(moduleName, maybeMethod) {
        return this.hasBehavior(moduleName, maybeMethod);
    }

    hasBehavior(moduleName, maybeMethod) {
        // either
        // moduleName = "A" and no maybeMethod: if the named module is installed to this
        // moduleName = "A$B" and no maybeMethod: if the named module installed to this and it has B
        // moduleName = "A$B" with maybeMethod: if the named module installed to this and it has B,
        //                                      and B has method maybeMethod

        return this.checkBehavior(this, true, moduleName, maybeMethod);
    }

    checkBehavior(obj, isActor, moduleName, maybeMethod) {
        let module;
        let behaviorName;

        if (moduleName.indexOf("$") > 0) {
            let split = moduleName.split("$");
            module = split[0];
            behaviorName = split[1];
        } else {
            module = moduleName;
            behaviorName = null;
        }

        if (!module && obj[isProxy]) {
            module = obj._behavior.module.externalName;
        }

        let who = obj;
        if (!isActor) {
            who = who.actor;
        }

        let behaviorModules = who._behaviorModules;
        let behaviorManager = who.behaviorManager;

        if (!behaviorModules) {return false;}
        if (!behaviorModules.includes(module)) {return false;}

        if (!behaviorName) {return false;}

        let behavior = behaviorManager.lookup(module, behaviorName);
        if (!behavior) {return false;}
        if (!maybeMethod) {return true;}
        return !!behavior.$behavior[maybeMethod];
    }

    // setup() of a behavior, and typically a subscribe call in it, gets called multiple times
    // in its life cycle because of live programming feature. This wrapper for subscribe records
    // the current set of subscription.
    //
    // canonical value of listener is a string that represents the name of a method.
    // So double registration is not a problem.
    scriptSubscribe(scope, eventName, listener) {
        // listener can be:
        // this.func
        // name for a base object method
        // name for a behavior method
        // string with "." for this module, a behavior and method name
        // // string with "$" and "." for external name of module, a behavior name, method name

        if (typeof listener === "function" && !this[isProxy]) {
            return super.subscribe(scope, eventName, listener);
        }

        if (typeof listener === "function") {
            listener = listener.name;
        }

        let behaviorName;
        let moduleName;

        let dollar = listener.indexOf("$");

        if (dollar >= 1) {
            moduleName = listener.slice(0, dollar);
            listener = listener.slice(dollar + 1);
        }

        let dot = listener.indexOf(".");
        if (dot >= 1) {
            behaviorName = listener.slice(0, dot);
            listener = listener.slice(dot + 1);
        }

        let behavior = this._behavior;

        if (!moduleName && behavior) {
            moduleName = behavior.module.externalName;
        }

        if (!behaviorName && behavior) {
            behaviorName = behavior.$behaviorName;
        }

        let fullMethodName;
        if (!behaviorName) {
            fullMethodName = listener;
        } else {
            fullMethodName = `${moduleName}${moduleName ? "$" : ""}${behaviorName}${behaviorName ? "." : ""}${listener}`;
        }

        let listenerKey = `${scope}:${eventName}${fullMethodName}`;
        let had = this.scriptListeners && this.scriptListeners.get(listenerKey);
        if (had) {return;}

        // this check is needed when subscribe is called from constructors of superclasses.
        // That is, this.scriptListeners is only initialized after super constructor returns.
        if (this.scriptListeners) {
            this.scriptListeners.set(listenerKey, fullMethodName);
        }
        super.subscribe(scope, eventName, fullMethodName);
    }

    // this method adds an action to the code editor.
    // Probably better be split into a separate mixin.
    // also, in system edit
    codeAccepted(data) {
        let match = /^class[\s]+([\S]+)/.exec(data.text.trim());
        if (!match) {
            console.log("code does not begin with the keyword class and name");
            return;
        }

        let behaviorModule = this._cardData.behaviorModule;
        let [moduleName, behaviorName] = behaviorModule.split(".");
        let name = match[1];
        if (name !== behaviorName) {
            throw new Error("changing the behavior name not supported");
        }

        let current = this.behaviorManager.moduleDefs.get(moduleName);

        if (!current) {
            throw new Error("module no longer exists");
        }

        let copy = {
            name: current.name, systemModule: current.systemModule,
            location: current.location,
            actorBehaviors: new Map([...current.actorBehaviors]),
            pawnBehaviors: new Map([...current.pawnBehaviors]),
        };

        let currentBehavior = copy.actorBehaviors.get(behaviorName);
        if (currentBehavior) {
            if (copy.actorBehaviors.get(behaviorName) === data.text) {
                return;
            }
            copy.actorBehaviors.set(behaviorName, data.text);
        } else {
            currentBehavior = copy.pawnBehaviors.get(behaviorName);
            if (currentBehavior) {
                if (copy.pawnBehaviors.get(behaviorName) === data.text) {
                    return;
                }
                copy.pawnBehaviors.set(behaviorName, data.text);
            }
        }

        console.log("codeAccepted");
        this.behaviorManager.loadLibraries([copy]);
    }

    createCard(options) {
        // this is only here because we don't want to export isProxy Symbol.
        if (options.parent) {
            if (options.parent[isProxy]) {
                options = {...options, parent: options.parent._target};
            }
        }

        // oh, boy
        let rcvr = this[isProxy] ? this._target : this;

        let card = rcvr.constructor.load([{card: options}], this.wellKnownModel("ModelRoot"), "1")[0];
        this.publish(this.sessionId, "triggerPersist");
        return card;
    }

    queryCards(options, requestor) {
        let actorManager = this.service("ActorManager");
        let cards = [...actorManager.actors].filter((a) => a[1].isCard).map(a => a[1]);
        if (!options) {return cards;}
        if (options.moduleName && options.methodName) {
            cards = cards.filter((c) => requestor.call(options.moduleName, options.methodName, c));
        } else if (options.methodName) {
            cards = cards.filter((c) => requestor[options.methodName].call(requestor, c));
        }
        return cards;
    }
}

/* AM_Code: A mixin to support Live programming */

const PM_Code = superclass => class extends superclass {
    constructor(actor) {
        super(actor);
        this.scriptListeners = new Map();
        let behaviorManager = this.actor.behaviorManager;

        this.subscribe(actor.id, "callSetup", "callSetup");
        this.subscribe(actor.id, "callTeardown", "callTeardown");

        if (actor._behaviorModules) {
            actor._behaviorModules.forEach((moduleName) => { /* name: Bar */
                let module = behaviorManager.modules.get(moduleName);
                let {pawnBehaviors} = module || {};
                if (pawnBehaviors) {
                    for (let behavior of pawnBehaviors.values()) {
                        if (behavior) {
                            behavior.ensureBehavior();
                        }
                        // future(0) is used so that setup() is called after
                        // all behaviors specified are installed.
                        if (behavior.$behavior.setup) {
                            this.future(0).callSetup(`${module.externalName}$${behavior.$behaviorName}`);
                        }
                    };
                }
            });
        }
    }

    actorCall(behaviorName, name, ...values) {
        let actor = this.actor;
        let moduleName = this._behavior.module.externalName;
        return actor.call(`${moduleName}$${behaviorName}`, name, ...values);
    }

    // call a behavior method. behaviorName is either ModuleName$BehaviorName or BehaviorName.
    // If former, the current (calling) module's name is used.
    call(behaviorName, name, ...values) {
        let moduleName;
        let split = behaviorName.split("$");
        if (split.length > 1) {
            moduleName = split[0];
            behaviorName = split[1];
        }

        if (!moduleName && this[isProxy]) {
            moduleName = this._behavior.module.externalName;
        }

        let behavior = this.actor.behaviorManager.lookup(moduleName, behaviorName);
        if (!behavior) {
            throw new Error(`behavior named ${behaviorName} not found`);
        }

        return behavior.invoke(this[isProxy] ? this._target : this, name, ...values);
    }

    destroy() {
        // destroy in the super chain requires that the receiver is the original pawn, not a proxy.
        if (this[isProxy]) {
            return this._target.destroy();
        }
        if (this.actor._behaviorModules) {
            this.actor._behaviorModules.forEach((name) => { /* name: Bar */
                let module = this.actor.behaviorManager.modules.get(name);
                if (!module) {
                    console.error(`unknown module ${name} is specified`);
                }
                let {pawnBehaviors} = module;
                if (pawnBehaviors) {
                    for (let behavior of pawnBehaviors.values()) {
                        if (behavior.$behavior.teardown) {
                            this.call(`${behavior.module.externalName}$${behavior.$behaviorName}`, "teardown");
                        }
                    };
                }
            });
        }
        super.destroy();
    }

    callSetup(name) {
        return this.call(name, "setup");
    }

    callTeardown(name) {
        return this.call(name, "teardown");
    }

    scriptListen(subscription, listener) {
        return this.scriptSubscribe(this.actor.id, subscription, listener);
    }

    subscribe(scope, subscription, listener) {
        return this.scriptSubscribe(scope, subscription, listener);
    }

    has(moduleName, maybeMethod) {
        return this.hasBehavior(moduleName, maybeMethod);
    }

    hasBehavior(moduleName, maybeMethod) {
        return this.actor.checkBehavior(this, false, moduleName, maybeMethod);
    }

    // setup() of a behavior, and typically a subscribe call in it, gets called multiple times
    // in its life cycle because of live programming feature. This wrapper for subscribe records
    // the current set of subscription.
    //
    // canonical form of listner is a function.
    // We try to remove and replace the existing subscription if the "same" handler is registered.
    scriptSubscribe(scope, subscription, listener) {
        // listener can be:
        // this.func for a method in the calling behavior
        // name for a base object method
        // name for a behavior method
        // string with "." for this module, a behavior and method name
        // // string with "$" and "." for external name of module, a behavior name, method name

        if (typeof listener === "function" && !this[isProxy]) {
            return super.subscribe(scope, subscription, listener);
        }

        let eventName;
        let handling;
        if (typeof subscription === "string") {
            eventName = subscription;
        } else {
            eventName = subscription.event;
            handling = subscription.handling;
        }

        let behaviorName;
        let moduleName;

        if (typeof listener === "function") {
            listener = listener.name;
        }

        let dollar = listener.indexOf("$");

        if (dollar >= 1) {
            moduleName = listener.slice(0, dollar);
            listener = listener.slice(dollar + 1);
        }

        let dot = listener.indexOf(".");
        if (dot >= 1) {
            behaviorName = listener.slice(0, dot);
            listener = listener.slice(dot + 1);
        }

        let behavior = this._behavior;

        if (!moduleName && behavior) {
            moduleName = behavior.module.externalName;
        }

        if (!behaviorName && behavior) {
            behaviorName = behavior.$behaviorName;
        }

        let fullMethodName;

        if (!behaviorName) {
            fullMethodName = listener;
        } else {
            fullMethodName = `${moduleName}${moduleName ? "$" : ""}${behaviorName}${behaviorName ? "." : ""}${listener}`;
        }

        let listenerKey = `${scope}:${eventName}${fullMethodName}`;

        let had = this.scriptListeners && this.scriptListeners.get(listenerKey);
        if (had) {
            this.unsubscribe(scope, eventName, fullMethodName);
        }

        if (this.scriptListeners) {
            this.scriptListeners.set(listenerKey, fullMethodName);
        }

        if (fullMethodName.indexOf(".") >= 1) {
            let split = fullMethodName.split(".");
            let func = (data) => this.call(split[0], split[1], data);
            return super.subscribe(scope, eventName, func);
        }
        if (handling) {
            super.subscribe(scope, {event: eventName, handling}, fullMethodName);
        } else {
            super.subscribe(scope, eventName, fullMethodName);
        }
    }

    update(time, delta) {
        super.update(time, delta);
        if (this.updateRequests) {
            this.updateRequests.forEach((u) => {
                // [behaviorName, methodName]
                this.call(...u, time, delta);
            });
        }
    }

    addUpdateRequest(array) {
        if (!this.updateRequests) {this.updateRequests = [];}
        let index = this.updateRequests.findIndex((o) => o[0] === array[0] && o[1] === array[1]);

        if (index >= 0) {return;}
        this.updateRequests.push(array);
    }

    removeUpdateRequest(array) {
        if (!this.updateRequests) {return;}
        let index = this.updateRequests.findIndex((o) => o[0] === array[0] && o[1] === array[1]);
        if (index < 0) {return;}
        this.updateRequests.splice(index, 1);
    }
}

// The class that represents a behavior.
// A behavior is like a class, and does not hold any state.
// so there is one instance of ScriptBehavior for each defined behavior.

class ScriptingBehavior extends Model {
    static okayToIgnore() { return [ "$behavior", "$behaviorName" ]; }

    init(options) {
        this.systemBehavior = !!options.systemBehavior;
        this.module = options.module;
        this.name = options.name;
        this.type = options.type;
        this.location = options.location;
    }

    setCode(string) {
        if (!string) {
            console.log("code is empty for ", this);
            return;
        }

        let theSame = this.code === string;

        this.code = string;

        let trimmed = string.trim();
        let source;
        if (trimmed.length === 0) {return;}
        if (/^class[ \t]/.test(trimmed)) {
            source = trimmed;
        }

        let code = `return (${source}) //# sourceURL=${window.location.origin}/behaviors_evaled/${this.location}/${this.name}`;
        let cls;
        try {
            const Microverse = {..._croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__, ..._ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__, ..._physics_js__WEBPACK_IMPORTED_MODULE_2__, ..._frame_js__WEBPACK_IMPORTED_MODULE_3__, RAPIER: _physics_js__WEBPACK_IMPORTED_MODULE_2__.Physics};
            cls = new Function("Worldcore", "Microverse", code)(Microverse, Microverse);
        } catch(error) {
            console.log("error occured while compiling:", source, error);
            try {
                eval(source);
            } finally {
            }
        }

        if (typeof cls !== "function") {
            return;
        }

        this.$behavior = cls.prototype;
        this.$behaviorName = cls.name;

        if (!theSame) {
            this.publish(this.id, "setCode", string);
        }
    }

    ensureBehavior() {
        if (!this.$behavior) {
            let maybeCode = this.code;
            this.setCode(maybeCode);
        }
        return this.$behavior;
    }

    invoke(receiver, name, ...values) {
        this.ensureBehavior();
        let myHandler = this.$behavior;
        let behaviorName = this.$behaviorName;
        let module = this.module;
        let result;

        let proxy = newProxy(receiver, myHandler, module, this);
        try {
            let prop = proxy[name];
            if (typeof prop === "undefined") {
                throw new Error(`a method named ${name} not found in ${behaviorName || this}`);
            }
            if (typeof prop === "function") {
                result = prop.apply(proxy, values);
            } else {
                result = prop;
            }
        } catch (e) {
            console.error(`an error occured in ${behaviorName}.${name}() on`, receiver, e);
        }
        return result;
    }
}

ScriptingBehavior.register("ScriptingBehavior");

// The class that represents a behavior module.
// init sets up those properties but actorBehaviors and pawnBehaviors will be added.

class ScriptingModule extends Model {
    init(options) {
        super.init(options);
        this.name = options.name;
        this.systemModule = options.systemModule;
        this.location = options.location;
    }
}

ScriptingModule.register("ScriptingModule");

// Each code is a Model object whose contents is the text code
// the model's identifier is the id, but you can also refer to it by name
// If there are two classes with the same name, for now we can say that is not allowed.

class BehaviorModelManager extends ModelService {
    init(name) {
        super.init(name || "BehaviorModelManager");

        this.cleanUp();

        this.subscribe(this.id, "loadStart", "loadStart");
        this.subscribe(this.id, "loadOne", "loadOne");
        this.subscribe(this.id, "loadDone", "loadDone");
    }

    cleanUp() {
        this.moduleDefs = new Map(); // <externalName /* Bar1 */, {name /*Bar*/, actorBehaviors: Map<name, codestring>, pawnBehaviors: Map<name, codestring>, systemModule: boolean, location:string?}>

        this.modules = new Map(); // <externalName /* Bar1 */, {name /*Bar*/, actorBehaviors: Map<name, codestring>, pawnBehaviors: Map<name, codestring>, systemModule: boolean, location:string?}>

        this.behaviors = new Map(); // {name: ScriptingBehavior}

        this.modelUses = new Map(); // {ScriptingBehavior, [cardActorId]}
        this.viewUses = new Map();  // {ScriptingBehavior [cardPawnId]}

        this.externalNames = new Map();
        this.loadCache = null;
    }

    createAvailableName(name, location) {
        let current = this.moduleDefs.get(name);
        if (!current) {return name;}

        for (let [n, o] of this.moduleDefs) {
            if (o.location === location && o.name === name) {
                return n;
            }
        }

        if (current.location === location) {
            return name;
        }

        let match = /([^0-9]+)([0-9]*)/.exec(name);
        let stem = match[1];
        let suffix = match[2];

        if (suffix.length === 0) {
            suffix = 0;
        } else {
            suffix = parseInt(suffix, 10);
        }

        while (true) {
            let newName = stem + (++suffix);
            if (!this.moduleDefs.get(newName)) {
                return newName;
            }
        }
    }

    lookup(externalName, behaviorName) {
        if (!externalName) {return null;}
        let module = this.modules.get(externalName);
        if (!module) {return null;}
        let b = module.actorBehaviors.get(behaviorName);
        if (b) {
            b.ensureBehavior();
            return b;
        }
        b = module.pawnBehaviors.get(behaviorName);
        if (b) {
            b.ensureBehavior();
            return b;
        }
        return null;
    }

    hasBehavior(externalName, behaviorName) {
        if (!externalName) {return false;}
        let module = this.modules.get(externalName);
        if (!module) {return false;}
        if (!behaviorName) {return true;}
        let b = module.actorBehaviors.get(behaviorName);
        if (b) {return true;}
        b = module.pawnBehaviors.get(behaviorName);
        if (b) {return true;}
        return false;
    }

    loadStart(key) {
        // last one wins
        this.key = key;
        this.loadCache = [];
    }

    loadOne(obj) {
        if (!this.key) {return;}
        if (obj.key !== this.key) {
            return;
        }
        this.loadCache.push(obj.buf);
    }

    loadDone(key) {
        if (!this.key) {return;}
        if (this.key !== key) {
            return;
        }

        let array = this.loadCache;
        this.loadCache = [];
        this.key = null;
        this.loadAll(array);
    }

    loadAll(array) {
        if (!array) {
            console.log("inconsistent message");
            return;
        }

        let len = array.reduce((acc, cur) => acc + cur.length, 0);
        let all = new Uint8Array(len);
        let ind = 0;
        for (let i = 0; i < array.length; i++) {
            all.set(array[i], ind);
            ind += array[i].length;
        }

        let result = new TextDecoder("utf-8").decode(all);
        let codeArray = JSON.parse(result);

        this.loadLibraries(codeArray);
        this.publish(this.sessionId, "triggerPersist");
    }

    loadLibraries(codeArray) {
        let changed = [];
        let nameMap = new Map();
        let userDir;
        if (Constants.UserBehaviorDirectory) {
            userDir = Constants.UserBehaviorDirectory.slice("behaviors/".length);
        }
        let systemDir;
        if (Constants.SystemBehaviorDirectory) {
            systemDir = Constants.SystemBehaviorDirectory.slice("behaviors/".length);
        }

        codeArray.forEach((moduleDef) => {
            let {action, name, systemModule, location} = moduleDef;
            if (location && !location.startsWith("(detached)")) {
                let index = location.lastIndexOf("/");
                let pathPart = location.slice(0, index);
                if (userDir && !pathPart.startsWith(userDir) && !pathPart.startsWith(systemDir)) {
                    return;
                }
            }

            let internalName = name;
            if (!action || action === "add") {
                let def = {...moduleDef};
                delete def.action;
                if (Array.isArray(def.actorBehaviors)) {
                    def.actorBehaviors = new Map(def.actorBehaviors);
                }
                if (Array.isArray(def.pawnBehaviors)) {
                    def.pawnBehaviors = new Map(def.pawnBehaviors);
                }

                name = this.createAvailableName(internalName, location); // it may be the same name
                nameMap.set(internalName, name);

                this.externalNames.set(`${location}$${moduleDef.name}`, name);
                this.moduleDefs.set(name, def);

                let m = {actorBehaviors: new Map(), pawnBehaviors: new Map()};

                let module = this.modules.get(name);
                if (!module) {
                    module = ScriptingModule.create({name: def.name, systemModule: def.systemModule, location: location});
                }
                module.externalName = name;

                ["actorBehaviors", "pawnBehaviors"].forEach((behaviorType) => {
                    if (moduleDef[behaviorType]) {
                        let map = moduleDef[behaviorType];
                        for (let [behaviorName, codeString] of map) {
                            // so when location is set, and the external name was
                            // synthesized due to a collision, we look up the external name
                            // from file path and module name.
                            // there should not be any other case.

                            // maybe be undefined
                            let externalName = this.externalNames.get(`${location}$${moduleDef.name}`);
                            let behavior = this.lookup(externalName, behaviorName);
                            if (!behavior) {
                                let cookedLocation = location;
                                if (location.startsWith("(detached):")) {
                                    cookedLocation = location.slice("(detached):".length);
                                }
                                behavior = ScriptingBehavior.create({
                                    systemBehavior: systemModule,
                                    module: module,
                                    name: behaviorName,
                                    location: cookedLocation,
                                    type: behaviorType.slice(0, behaviorType.length - 1)
                                });
                                behavior.setCode(codeString);
                                changed.push(behavior);
                            } else if (behavior.code !== codeString) {
                                behavior.setCode(codeString);
                                changed.push(behavior);
                            }
                            m[behaviorType].set(behaviorName, behavior);
                            // this.behaviors.set(behaviorName, behavior);
                        };
                    }
                });
                module.actorBehaviors = m.actorBehaviors;
                module.pawnBehaviors = m.pawnBehaviors;

                this.modules.set(module.externalName, module);
            }

            if (action === "remove") {
                for (let [k, v] of this.modules) {
                    if (v.location === location) {
                        /*for (let behaviorName of v.actorBehaviors.keys()) {
                            this.behaviors.delete(behaviorName);
                        }
                        for (let behaviorName of v.pawnBehaviors.keys()) {
                            this.behaviors.delete(behaviorName);
                            }*/
                        this.externalNameMap.delete(location);
                        this.modules.delete(k);
                        this.moduleDefs.delete(k);
                    }
                }
            }
        });

        let toPublish = [];
        changed.forEach((behavior) => {
            if (!behavior.$behavior.setup) {return;}
            if (behavior.type === "actorBehavior") {
                let modelUsers = this.modelUses.get(behavior);
                let actorManager = this.service("ActorManager");
                if (modelUsers) {
                    modelUsers.forEach((modelId) => {
                        let model = actorManager.get(modelId);
                        if (model) {
                            behavior.future(0).invoke(model, "setup");
                        }
                    });
                }
            } else if (behavior.type === "pawnBehavior") {
                toPublish.push([behavior.module.externalName, behavior.$behaviorName]);
            }
        });
        this.publish(this.id, "callViewSetupAll", toPublish);
        return nameMap;
    }

    save(optModuleNames) {
        let filtered = [...this.moduleDefs].filter(([_key, value]) => !value.systemModule);
        if (optModuleNames) {
            filtered = filtered.filter(([key, _value]) => optModuleNames.includes(key));
            filtered = filtered.map(([key, m]) => {
                let newM = {...m};
                if (newM.location) {
                    function randomString() {
                        return Math.floor(Math.random() * 36 ** 10).toString(36);
                    }
                    newM.location = `(detached):${randomString()}/${randomString()}`;
                }
                return [key, newM];
            });
        }
        return new Map([...filtered]);
    }

    modelUse(model, behavior) {
        let modelId = model.id;
        let array = this.modelUses.get(behavior);
        if (!array) {
            array = [];
            this.modelUses.set(behavior, array);
        }
        if (array.indexOf(modelId) < 0) {
            array.push(modelId);
            behavior.ensureBehavior();
            if (behavior.$behavior.setup) {
                behavior.future(0).invoke(model[isProxy] ? model._target : model, "setup");
            }
        }
    }

    modelUnuse(model, behavior) {
        let modelId = model.id;
        let array = this.modelUses.get(behavior);
        if (!array) {return;}
        let ind = array.indexOf(modelId);
        if (ind < 0) {return;}
        array.splice(ind, 1);
        if (behavior.$behavior && behavior.$behavior.teardown) {
            behavior.future(0).invoke(model[isProxy] ? model._target : model, "teardown");
        }
    }

    viewUse(model, behavior) {
        let modelId = model.id;
        let array = this.viewUses.get(behavior);
        if (!array) {
            array = [];
            this.viewUses.set(behavior, array);
        }
        if (array.indexOf(modelId) < 0) {
            array.push(modelId);
        }

        behavior.ensureBehavior();
        if (behavior.$behavior.setup) {
            model.say("callSetup", `${behavior.module.externalName}$${behavior.$behaviorName}`);
        }
    }

    viewUnuse(model, behavior) {
        let modelId = model.id;
        let array = this.viewUses.get(behavior);
        if (!array) {return;}
        let ind = array.indexOf(modelId);
        if (ind < 0) {return;}
        array.splice(ind, 1);
        if (behavior.$behavior && behavior.$behavior.teardown) {
            model.say("callTeardown", `${behavior.module.externalName}$${behavior.$behaviorName}`);
        }
    }
}

BehaviorModelManager.register("BehaviorModelManager");

class BehaviorViewManager extends ViewService {
    constructor(name) {
        super(name || "BehaviorViewManager");
        this.url = null;
        this.socket = null;
        this.status = false;
        this.model = this.wellKnownModel("BehaviorModelManager");
        this.subscribe(this.model.id, "callViewSetupAll", "callViewSetupAll");
    }

    isConnected() {
        return this.socket && this.socket.readyState === WebSocket.OPEN && this.status === true;
    }

    destroy() {
        if (this.callback) {
            this.callback(false);
        }
        this.setURL(null);
        super.destroy();
    }

    setURL(url, optCallback) {
        this.callback = optCallback;
        if (this.socket) {
            try {
                this.socket.onmessage = null;
                this.socket.close();
            } finally {
                this.socket = null;
            }
        }
        if (!url) {return;}
        this.url = url;
        this.socket = new WebSocket(url);
        this.socket.onmessage = (event) => this.load(event.data);

        this.socket.onopen = (_event) => {
            console.log("connected");
            this.status = true;
            if (this.callback) {
                this.callback(true);
            }
        };

        this.socket.onclose = (_event) => {
            console.log("disconnected");
            this.socket.onmessage = null;
            this.socket = null;
            this.status = false;
            if (this.callback) {
                this.callback(false);
            }
        };
    }

    callViewSetupAll(pairs) {
        pairs.forEach((pair) => {
            let behavior = this.model.lookup(...pair);
            let viewUsers = this.model.viewUses.get(behavior);
            if (viewUsers) {
                viewUsers.forEach((modelId) => {
                    let pawn = GetPawn(modelId);
                    if (pawn) {
                        behavior.invoke(pawn, "setup");
                    }
                });
            }
        });
    }

    // This method receives content of changed behavior files.
    // first it creates a script DOM element with type="module", and sets its innerHTML to be the
    // dataURL of a file. In this way, the browser handles "export" in the behavior file,
    // and gives the exported object. We assign the export object into a global variable.
    // The contents of the global variable is then stored into CodeLibrary and the entire result is sent
    // to the corresponding BehaviorModelManager to update the model data.
    load(string) {
        let array;
        try {
            array = JSON.parse(string);
        } catch(e) {
            console.error(e);
            return;
        }
        if (!array || !Array.isArray(array)) {
            console.log("not an array");
            return;
        }

        let systemModuleMap = new Map();

        let dataURLs = [];
        let promises = [];
        let scripts = [];

        if (!window._allResolvers) {
            window._allResolvers = new Map();
        }

        let key = Date.now() + "_" + Math.random().toString();

        let current = new Map();

        window._allResolvers.set(key, current);

        array.forEach((obj) => {
            // {action, name, content, systemModule} = obj;
            if (obj.action === "add") {
                systemModuleMap.set(obj.name, obj.systemModule);
                let id = Math.random().toString();
                let promise = new Promise((resolve, _reject) => {
                    current.set(id, resolve);
                    let script = document.createElement("script");
                    scripts.push(script);
                    script.type = "module";
                    let dataURL = URL.createObjectURL(new Blob([obj.content], {type: "application/javascript"}));
                    script.innerHTML = `
import * as data from "${dataURL}";
let map = window._allResolvers.get("${key}");
if (map) {map.get("${id}")({data, key: ${key}, name: "${obj.name}"});}
`;
                    document.body.appendChild(script);
                    dataURLs.push(dataURL);
                }).catch((e) => {console.log(e); return null});
                promises.push(promise);
            }
        });

        Promise.all(promises).then(async (allData) => {
            dataURLs.forEach((url) => URL.revokeObjectURL(url));
            scripts.forEach((s) => s.remove());
            allData = allData.filter((o) => o);
            if (allData.length === 0) {return;}

            let keys = [...window._allResolvers.keys()];

            let index = keys.indexOf(key);
            window._allResolvers.delete(key);

            if (index !== keys.length - 1) {
                // if it is not the last element,
                // there was already another call so discard it
            } else {
                let library = new CodeLibrary();
                allData.forEach((obj) => {
                    let dot = obj.name.lastIndexOf(".");
                    let location = obj.name.slice(0, dot);
                    let isSystem = obj.name.startsWith("croquet");

                    if (!obj || checkModule(obj.data)) {
                        throw new Error("a behavior file does not export an array of modules");
                    }

                    library.add(obj.data.default, location, isSystem);
                });

                let sendBuffer = [];
                let key = Math.random();

                for (let [_k, m] of library.modules) {
                    let {actorBehaviors, pawnBehaviors, name, location, systemModule} = m;
                    sendBuffer.push({
                        name, systemModule, location,
                        actorBehaviors: [...actorBehaviors],
                        pawnBehaviors: [...pawnBehaviors]
                    });
                };

                let string = JSON.stringify(sendBuffer);
                let array = new TextEncoder().encode(string);
                let ind = 0;

                this.publish(this.model.id, "loadStart", key);
                let throttle = array.length > 80000;

                while (ind < array.length) {
                    let buf = array.slice(ind, ind + 2880);
                    this.publish(this.model.id, "loadOne", {key, buf});
                    ind += 2880;
                    if (throttle) {
                        await new Promise((resolve) => {
                            setTimeout(resolve, 5);
                        });
                    }
                }

                this.publish(this.model.id, "loadDone", key);
            }
        });
    }
}

class CodeLibrary {
    constructor() {
        this.modules = new Map(); // for behaviors
        // {name /*test/lights$Bar*/, {actorBehaviors: Map<name, codestring>, pawnBehaviors: Map<name, codestring>}, systemModule: boolean>, location:string?}

        this.functions = new Map();
        this.classes = new Map();
    }

    add(library, location, isSystem) {
        if (library.modules) {
            library.modules.forEach(module => {
                let {name, actorBehaviors, pawnBehaviors} = module;
                let actors = new Map();
                let pawns = new Map();
                if (actorBehaviors) {
                    actorBehaviors.forEach((cls) => {
                        actors.set(cls.name, cls.toString());
                    });
                }
                if (pawnBehaviors) {
                    pawnBehaviors.forEach((cls) => {
                        pawns.set(cls.name, cls.toString());
                    });
                }
                let pathName = `${location}$${name}`;
                let already = this.modules.get(pathName);
                if (already) {
                    console.log(`a module ${name} is defined in ${location} and ${already.location}`);
                }
                this.modules.set(pathName, {
                    name,
                    location,
                    actorBehaviors: actors,
                    pawnBehaviors: pawns,
                    systemModule: isSystem
                });
            });
        }

        if (library.functions) {
            library.functions.forEach(f => {
                let key = f.name;
                let str = `return ${f.toString()};`;
                this.functions.set(key, str);
            });
        }

        if (library.classes) {
            library.classes.forEach(cls => {
                let key = cls.name;
                this.classes.set(key, cls);
            });
        }
    }

    addModules(map) {
        if (!map) {return;}
        for (let [k, v] of map) {
            this.modules.set(k, v);
        }
    }

    get(path) {
        return this.modules.get(path);
    }

    delete(path) {
        this.modules.delete(path);
    }
}

function checkModule(module) {
    if (!module || !module.default || !module.default.modules) {
        throw new Error("a behavior file does not export an array of modules");
    }

    let list = module.default.modules;
    if (!Array.isArray(list)) {
        throw new Error("a behavior file does not export an array of modules");
    }
    list.forEach((m) => {
        let valid = true;
        if (!m.name) {valid = false;}
        if (m.actorBehaviors && !Array.isArray(m.actorBehaviors)) {valid = false;}
        if (m.pawnBehaviors && !Array.isArray(m.pawnBehaviors)) {valid = false;}
        let keys = {...m};
        delete keys.name;
        delete keys.actorBehaviors;
        delete keys.pawnBehaviors;
        if (Object.keys(keys).length > 0) {
            valid = false;
        }
        if (!valid) {
            throw new Error("a behavior file exports a malformed behavior module");
        }
    });
}



/***/ }),

/***/ "./src/frame.js":
/*!**********************!*\
  !*** ./src/frame.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addShellListener": () => (/* binding */ addShellListener),
/* harmony export */   "frameId": () => (/* binding */ frameId),
/* harmony export */   "frameName": () => (/* binding */ frameName),
/* harmony export */   "isPrimaryFrame": () => (/* binding */ isPrimaryFrame),
/* harmony export */   "removeShellListener": () => (/* binding */ removeShellListener),
/* harmony export */   "sendToShell": () => (/* binding */ sendToShell),
/* harmony export */   "worldName": () => (/* binding */ worldName)
/* harmony export */ });
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

// if this frame is the primary frame, then this is the current world
let isPrimaryFrame;

// this is the portalId of the current frame
const frameId = new URL(window.location.href).searchParams.get("portal");

// this is the world of the current frame
const worldName = new URL(window.location.href).searchParams.get("world") || "default";

// a name for the frame
function frameName() {
    return `frame["${worldName}",${frameId}${isPrimaryFrame ? ",primary" : ""}]`;
}

// shared prefix for shell messages
const PREFIX = "croquet:microverse:";

// sending to shell
function sendToShell(command, args) {
    window.parent.postMessage({ message: PREFIX+command, ...args }, "*");
}

// registry of callback functions to receive from shell
const shellListeners = new Set();

function addShellListener(fn) {
    shellListeners.add(fn);
}

function removeShellListener(fn) {
    shellListeners.delete(fn);
}

// we register one global event listener for all messages from the shell
// that invokes all callbacks in the registry
// This guaranteees the order in which they will be invoked
window.addEventListener("message", e => {
    if (e.source === window.parent) {
        const { message }  = e.data;
        if (typeof message === "string" && message.startsWith(PREFIX)) {
            const command = message.slice(PREFIX.length);
            shellListeners.forEach(fn => fn(command, e.data));
        };
    }
});

// the first registered listener manages the isPrimaryFrame global
// and toggles CSS etc.
const primaryListener = (command, data) => {
    // console.log(`${frameId} received: ${JSON.stringify(data)}`);
    if (command === "frame-type") {
        const { frameType } = data;
        const primary = frameType === "primary";
        if (isPrimaryFrame !== primary) {
            isPrimaryFrame = primary;
            document.body.style.background = "transparent";
            document.getElementById("hud").classList.toggle("primary-frame", isPrimaryFrame);
            if (isPrimaryFrame) window.focus();
            sendToShell("frame-ready", { frameType });
        }
    }
};

addShellListener(primaryListener);


/***/ }),

/***/ "./src/helpMenu.js":
/*!*************************!*\
  !*** ./src/helpMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startHelpMenu": () => (/* binding */ startHelpMenu)
/* harmony export */ });
/* harmony import */ var _worldMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldMenu.js */ "./src/worldMenu.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io



let helpMenuBody;

function startHelpMenu() {
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.loadCSS)().then(createHelpMenu);
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.hideShellControls)();
}

function createHelpMenu() {
    let help = `
    <div id="helpDialog" class="dialogPanel no-select">
    <button id="close-button" type="button" class="btn btn-danger btn-x topright">x</button>
        <div id="share-container" class="content-container">
            <div id="help-title" class="panel-title">Help</div>
            <div id="table-wrapper">
                <div id="table-scroll" id="scrollbar">
                    <table class="help-table">
                        <tr class="help-row">
                            <td>
                                <p class="table-head">Navigate</p>
                                <p class="table-desc">Move around using the joystick, or WASD keys.</p>
                            </td>
                            <td class="icon-column">
                                <div class="icons">
                                    <div class="help-pane-icon move-icon"></div>
                                    <div class="help-pane-icon wasd-icon"></div>
                                </div>
                            </td>
                        </tr>
                        <tr class="help-row">
                            <td>
                                <p class="table-head">Look</p>
                                <p class="table-desc">Click and drag to change camera look position.</p>
                            </td>
                        <td class="icon-column">
                            <div class="icons"><div class="help-pane-icon look-icon"></div>
                        </td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Manipulate</p>
                            <p class="table-desc">Ctrl + click on an object to open and cycle through the "gizmo" tools. The icon of a multi-pane tool is a button to open the property sheet tool.</p>
                        </td>
                        <td class="icon-column">
                            <div class="icons">
                                <div class="help-pane-icon ctrlclick-icon"></div>
                            </div>
                        </td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Fullscreen</p>
                            <p class="table-desc">Make your browser fullscreen.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-expand icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Home</p>
                            <p class="table-desc">Reset location back to original landing place.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-house-user icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Gather</p>
                            <p class="table-desc">Shows how many users in a world. Click to "gather" all users to you.</p>
                        </td>
                        <td class="icon-column"><i class="fas fa-solid fa-users icons"></i></td>
                    </tr>
                    <tr class="help-row">
                        <td>
                            <p class="table-head">Import</p>
                            <p class="table-desc">Import any of these formats from your desktop directly
                                 into the Microverse World. Either drag and drop, or choose the import menu item.</p>
                        </td>
                        <td class="icon-column">
                            <div class="icons">
                                <div class="help-pane-icon import-icon help-menu-icon"></div>
                            </div>
                        </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Connect</p>
                             <p class="table-desc">Click connect to link your text editor to edit behavior files.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon connect-icon help-menu-icon"</div>
                             </div>
                         </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Share</p>
                             <p class="table-desc">Save your Microverse as a .vrse file to share or use the QR code to share the session with others.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon share-icon help-menu-icon"></div>
                             </div>
                         </td>
                     </tr>
                     <tr class="help-row">
                         <td>
                             <p class="table-head">Settings</p>
                             <p class="table-desc">Update your in-world nickname, select from default avatars or paste a link to your own.</p>
                         </td>
                         <td class="icon-column">
                             <div class="icons">
                                 <div class="help-pane-icon settings-icon help-menu-icon"></div>
                             </div>
                         </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`.trim();

    let div = document.createElement("div");
    div.innerHTML = help;

    let helpMenu = div.querySelector("#helpDialog");
    let closeButton = helpMenu.querySelector("#close-button");
    helpMenuBody = div.querySelector("#joinDialogBody");

    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.filterDomEventsOn)(helpMenu);

    closeButton.onclick = () => (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();

    document.body.appendChild(helpMenu);
}


/***/ }),

/***/ "./src/microverse.js":
/*!***************************!*\
  !*** ./src/microverse.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startMicroverse": () => (/* binding */ startMicroverse)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _physics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics.js */ "./src/physics.js");
/* harmony import */ var _agoraChat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agoraChat.js */ "./src/agoraChat.js");
/* harmony import */ var _text_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text/text.js */ "./src/text/text.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar.js */ "./src/avatar.js");
/* harmony import */ var _walkManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkManager.js */ "./src/walkManager.js");
/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frame.js */ "./src/frame.js");
/* harmony import */ var _code_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code.js */ "./src/code.js");
/* harmony import */ var _portal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portal.js */ "./src/portal.js");
/* harmony import */ var _worldSaver_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./worldSaver.js */ "./src/worldSaver.js");
/* harmony import */ var _settingsMenu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settingsMenu.js */ "./src/settingsMenu.js");
/* harmony import */ var _apps_multiblaster_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../apps/multiblaster.js */ "./apps/multiblaster.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var fflate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! fflate */ "./node_modules/fflate/esm/browser.js");
/* harmony import */ var _wcAssetManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wcAssetManager.js */ "./src/wcAssetManager.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io





/* import { DolbyChatManager } from "./dolbyChat.js"; */












// apps -------------------------------------------





// import {loadThreeJSLib} from "./ThreeJSLibLoader.js";
//import {loadThreeLibs} from "../three/threeLibsLoader.js";

const defaultAvatarNames = [
    "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
];

const defaultSystemBehaviorDirectory = "behaviors/croquet";
const defaultSystemBehaviorModules = [
    "avatarEvents.js", "billboard.js", "elected.js", "menu.js", "pdfview.js", "physics.js", "rapier.js", "scrollableArea.js", "singleUser.js", "stickyNote.js", "halfBodyAvatar.js", "gizmo.js", "propertySheet.js", "dragAndDrop.js"
];

let AA = true;

console.log("%cTHREE.REVISION:", "color: #f00", _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.REVISION);

async function getAntialias() {
    // turn off antialiasing for mobile and safari
    // Safari has exhibited a number of problems when using antialiasing. It is also extremely slow rendering webgl. This is likely on purpose by Apple.
    // Firefox seems to be dissolving in front of our eyes as well. It is also much slower.
    // mobile devices are usually slower, so we don't want to run those with antialias either. Modern iPads are very fast but see the previous line.

    let urlOption = new URL(window.location).searchParams.get("AA");
    if (urlOption) {
        if (urlOption === "true") {
            console.log(`antialias is true, urlOption AA is set`);
            return true;
        } else {
            console.log(`antialias is false, urlOption AA is unset`);
            return false;
        }
    }
    let aa = true;
    const isSafari = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
    if (isSafari) aa = false;
    const isFirefox = navigator.userAgent.includes("Firefox");
    if (isFirefox) aa = false;
    const isMobile = !!("ontouchstart" in window);
    if (isMobile) aa = false;

    try {
        const supported = await navigator.xr.isSessionSupported("immersive-vr");
        if (supported) {aa = supported;}
    } catch (_) { /* ignore */ }

    console.log(`antialias is ${aa}, mobile: ${isMobile}, browser: ${isFirefox ? "Firefox" : isSafari ? "Safari" : "Other Browser"}`);
    return aa;
}

console.log('%cTHREE.REVISION:', 'color: #f00', _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.REVISION);

function loadLoaders() {
    window.JSZip = (jszip__WEBPACK_IMPORTED_MODULE_14___default());
    window.fflate = fflate__WEBPACK_IMPORTED_MODULE_16__;
    window.THREE = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE;
    return Promise.resolve(_ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
}

function basenames() {
    let url = window.location.origin + window.location.pathname;
    let match = /([^/]+)\.html$/.exec(url);
    let basename = new URL(window.location).searchParams.get("world");

    if (!basename) {
        basename = (!match || match[1] === "index") ? "default" : match[1];
    }

    let baseurl;
    if (match) {
        baseurl = url.slice(0, match.index);
    } else {
        let slash = url.lastIndexOf("/");
        baseurl = url.slice(0, slash + 1);
    }

    return {baseurl, basename};
}

function loadInitialBehaviors(paths, directory) {
    let library = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library || new _code_js__WEBPACK_IMPORTED_MODULE_9__.CodeLibrary();
    _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library = library;
    if (!paths || !directory) {return;}
    let {baseurl, _pathname} = basenames();

    if (!directory) {
        throw new Error("directory argument has to be specified. It is a name for a sub directory name under the ./behaviors directory.");
    }
    let isSystem = directory === _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorDirectory;
    let promises = paths.map((path) => {
        if (!isSystem) {
            let code = `import('${baseurl}${directory}/${path}')`;
            return eval(code).then((module) => {
                let rest = directory.slice("behaviors".length);
                if (rest[0] === "/") {rest = rest.slice(1);}
                return [`${rest === "" ? "" : (rest + "/")}${path}`, module];
            })
        } else {
            let modulePath = `${directory.split("/")[1]}/${path}`;
            let code = `import('${baseurl}behaviors/${modulePath}')`;
            return eval(code).then((module) => {
                return [modulePath, module];
            })
        }
    });

    return Promise.all(promises).then((array) => {
        array.forEach((pair) => {
            let [path, module] = pair;
            let dot = path.lastIndexOf(".");
            let fileName = path.slice(0, dot);

            (0,_code_js__WEBPACK_IMPORTED_MODULE_9__.checkModule)(module); // may throw an error
            library.add(module.default, fileName, isSystem);
        });
        return true;
    });
}

class MyPlayerManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.PlayerManager {
    init(name) {
        super.init(name);
        this.avatarCount = 0;

        this.presentationMode = null; // or the viewId of the leader
        this.followers = new Set();

        this.subscribe("playerManager", "create", this.playerCreated);
        this.subscribe("playerManager", "details", this.playerDetails);
        this.subscribe("playerManager", "destroy", this.playerDestroyed);
        this.subscribe("playerManager", "enter", this.playerEnteredWorld);
        this.subscribe("playerManager", "leave", this.playerLeftWorld);
    }

    get presenter() { return this.players.get(this.presentationMode); }

    createPlayer(playerOptions) {
        // invoked by PlayerManager.onJoin.

        // when we have a better user management,
        // options will be compatible with a card spec
        // until then, we check the AvatarNames variable, and if it is a short name
        // (as it is) it'd fall back to use the short string as a stem of the model file name.
        // if it is an object, we use it as the card spec.

        // when an avatar is created to hold the through-portal camera in a secondary
        // world, it is initialised according to the next entry in the rota of default
        // names/shapes (but remains invisible).  if the user comes through into this
        // world, at that point the avatar is updated to the name and shape that the
        // user had in the previous world (see AvatarPawn.frameTypeChanged).

        // this method does not need to call super.createPlayer, which has null
        // behaviour.  once the player is created and returned, onJoin will publish
        // "playerManager:create", which we handle here with playerCreated.

        let index = this.avatarCount % _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.AvatarNames.length;
        this.avatarCount++;
        let avatarSpec = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.AvatarNames[index];
        console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "MyPlayerManager", this.avatarCount);
        let options = {...playerOptions, ...{noSave: true, type: "3d", singleSided: true}};

        if (typeof avatarSpec === "string") {
            options = {...options, ...{
                name: avatarSpec,
                dataScale: [0.3, 0.3, 0.3],
                dataRotation: (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.q_euler)(0, Math.PI, 0),
                dataTranslation: [0, -0.4, 0],
                dataLocation: `./assets/avatars/${avatarSpec}.zip`,
                avatarType: "wonderland",
                type: "initial", // this is "initial" here to not show the avatar that may be changed
            }};
        } else {
            options = {...options , avatarType: "custom", ...avatarSpec};
        }
        return _avatar_js__WEBPACK_IMPORTED_MODULE_6__.AvatarActor.create(options);
    }

    playerDetails({ playerId, details }) {
        // any object can publish a "playerManager:details" event specifying
        // a player id and some new property values for that player.  for example,
        // this is how the AgoraChatManager informs everyone when its local view
        // has joined or left the chat.
        const player = this.players.get(playerId);
        if (!player) return;

        player.setAndPublish(details); // will publish a "playerManager:detailsUpdated" event
    }

    destroyPlayer(player) {
        // although the player itself is about to be removed and doesn't care,
        // setting its inWorld to false will trigger event subscribers that do -
        // for example, this manager's own playerLeftWorld
        if (player.inWorld) player.setAndPublish({ inWorld: false });
        super.destroyPlayer(player);
    }

    playerInWorldChanged(player) {
        // invoked directly from AvatarActor.inWorldSet when someone has toggled
        // the inWorld property of an AvatarActor.  this can happen either directly
        // in the model domain (such as from destroyPlayer above) or from the
        // AvatarPawn, with a say("_set", <props>).
        // this method then publishes a player enter or leave event, based on the
        // value of inWorld.  one subscriber to those events is this MyPlayerManager
        // itself: the playerEnteredWorld and playerLeftWorld methods below do
        // appropriate housekeeping for the change of state.  any view that needs to
        // note arrival and departure of avatars in the world is also free to subscribe.

        // being in or out of world is a distinct layer from the
        // view-join and view-exit events that signal connection and
        // disconnection in a Croquet session.  the latter are subscribed to in
        // the Worldcore PlayerManager - this manager's superclass - and handled
        // by invoking createPlayer and destroyPlayer on the manager. the event
        // "playerManager:create" is published after createPlayer has completed;
        // "playerManager:destroy" is published as part of destroyPlayer, before
        // invocation of player.destroy() - mainly handled in Actor - that does
        // the cleanup.

        // in summary:
        //   to respond to players having been created or about to be destroyed,
        //   subscribe to
        //     playerManager:create
        //     playerManager:destroy
        //   to respond to players having entered or left this world, subscribe to
        //     playerManager:enter
        //     playerManager:leave

        // NB: if a tab goes dormant and is then revived, the model state that will
        // be constructed on that revival depends on the state of the session...
        //   (a) if there are other users in the session:
        //       the model will process the destruction of the tab's previous avatar
        //       and creation of a new one, which means that the avatar pawn's
        //       constructor will find that the actor does not yet have the inWorld
        //       property.  the pawn will publish the dormantAvatarSpec it recorded on
        //       going dormant (see avatar.js), which will transfer all saved properties
        //       (position, nickname, 3d model pointer etc) to the new actor.
        //   (b) if there are no other users in the session:
        //       the model will process the re-creation of the old avatar as if
        //       it has never been seen before (or load it from snapshot, if one was
        //       taken after the avatar's creation).  the avatar pawn's constructor
        //       in the primary frame will find that the actor *does* already have the
        //       inWorld flag.  it will use dormantAvatarSpec to impose the avatar's
        //       saved properties, as above.
        //
        // the avatar pawn constructor is the place where we get to ensure that
        // avatar properties that must *not* be preserved across dormancy - for now,
        // this means inChat - are explicitly reset.

        if (player.inWorld) {
            this.publish("playerManager", "enter", player);
        } else {
            this.publish("playerManager", "leave", player);
        }
    }

    playersInWorld() {
        return [...this.players.values()].filter((player) => player.inWorld);
    }

    startPresentation(playerId, presenterToken = null) {
        // sent by AvatarActor.comeToMe or this.continuePresenting (triggered by a
        // presenter arriving from another world).  in either case it may turn out
        // that some other presenter has beaten them to it. if so, the arriving
        // presenter and their followers will be left to their own devices.
        if (this.presentationMode && this.presentationMode !== playerId) return;

        this.presentationMode = playerId;

        // examining the current inWorld players, decide who will join this
        // presentation.  if a token was provided, only those players carrying the same
        // token are signed up (which will include the presenter, and any follower that
        // showed up here before the presenter).  only the presenter needs to keep
        // that token, to catch potential late followers.
        // if no token, grab everyone (and delete any token they might have, while we're
        // about it).
        for (const player of this.playersInWorld()) {
            if (presenterToken && player.presenterToken !== presenterToken) continue;
            if (!presenterToken || player.playerId !== playerId) delete player.presenterToken;
            this.followers.add(player.playerId);
        }

        this.publish("playerManager", "presentationStarted");
        this.publish("playerManager", "playerCountChanged");
    }

    addFollower(playerId) {
        this.followers.add(playerId);
    }

    stopPresentation() {
        this.presentationMode = null;
        this.publish("playerManager", "presentationStopped");
        this.publish("playerManager", "playerCountChanged");
        this.followers.clear();
    }

    leavePresentation(playerId) {
        if (this.presentationMode === playerId) {return;}
        this.followers.delete(playerId);
        this.publish("playerManager", "playerCountChanged");
    }

    continuePresenting(presenter, presenterToken) {
        // a presenter came into this world through a portal carrying a token.  if there
        // is not already a presentation in progress we make them the presenter, and make
        // all followers carrying the same token follow them.  note that followers may
        // enter before or after the presenter.
        if (!this.presentationMode) {
            console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "continuePresenting", presenter.id, presenterToken);
            presenter.presenterToken = presenterToken; // we keep this for as long as we're presenting
            this.startPresentation(presenter.playerId, presenterToken);
        } else {
            console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "continuePresenting rejected due to presentation in progress");
        }
    }

    continueFollowing(follower, presenterToken) {
        // a follower came into this world through a portal carrying a token, hoping
        // to follow the presenter with the same token.  the follower may be entering
        // before or after the presenter.  if the expected presenter isn't presenting,
        // the follower will just wait; even if someone else is presenting now, it's
        // conceivable - albeit unlikely - that the current presentation will end in
        // time for the expected presenter to take over.
        if (this.presentationMode && this.presenter.presenterToken === presenterToken) {
            console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "continueFollowing", this.presenter.id, presenterToken);
            this.followers.add(follower.playerId);
            follower.presentationStarted();
            this.publish("playerManager", "playerCountChanged");
        } else {
            follower.presenterToken = presenterToken;
            console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "continueFollowing: expected presenter not presenting", presenterToken);
        }
    }

    playerEnteredWorld(player) {
        console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "playerEnteredWorld", player);
        this.publish("playerManager", "playerCountChanged");
    }

    playerLeftWorld(player) {
        console.log((0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.frameName)(), "playerLeftWorld", player);
        if (player.playerId === this.presentationMode) {
            this.stopPresentation();
        }
        delete player.presenterToken;
        this.followers.delete(player.playerId);
        if (player._inChat) player.setAndPublish({ inChat: false });
        this.publish("playerManager", "playerCountChanged");
    }

    playerCreated(_player) {
        // console.log(frameName(), "playerCreated", player);
        this.publish("playerManager", "playerCountChanged");
    }

    playerDestroyed(_player) {
        // console.log(frameName(), "playerDestroyed", player);
        this.publish("playerManager", "playerCountChanged");
    }
}

MyPlayerManager.register("MyPlayerManager");

class MyModelRoot extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ModelRoot {
    static modelServices() {
        return [
            MyPlayerManager,
            _card_js__WEBPACK_IMPORTED_MODULE_5__.MicroverseAppManager,
            _code_js__WEBPACK_IMPORTED_MODULE_9__.BehaviorModelManager,
            _text_text_js__WEBPACK_IMPORTED_MODULE_4__.FontModelManager,
            _physics_js__WEBPACK_IMPORTED_MODULE_2__.PhysicsManager,
        ];
    }

    init(options, persistentData) {
        super.init(options);
        let appManager = this.service("MicroverseAppManager");
        appManager.add(_apps_multiblaster_js__WEBPACK_IMPORTED_MODULE_13__.MultiBlaster);
        appManager.add(_text_text_js__WEBPACK_IMPORTED_MODULE_4__.TextFieldActor);
        appManager.add(_portal_js__WEBPACK_IMPORTED_MODULE_10__.PortalActor);

        this.ensurePersistenceProps();
        this.subscribe(this.sessionId, "triggerPersist", "triggerPersist");
        this.subscribe(this.sessionId, "addBroadcaster", "addBroadcaster");
        this.subscribe(this.id, "loadStart", "loadStart");
        this.subscribe(this.id, "loadOne", "loadOne");
        this.subscribe(this.id, "loadDone", "loadDone");
        this.subscribe(this.id, "removeAll", "removeAll");

        if (persistentData) {
            console.log("loading persistent data");
            this.loadPersistentData(persistentData);
            return;
        }

        this.loadBehaviorModules(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library.modules, "1");
        this.load(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.DefaultCards, "1");
    }

    ensurePersistenceProps() {
        if (!this.persistPeriod) {
            let period = 1 * 60 * 1000;
            this.persistPeriod = period;
        }
        if (this.lastPersistTime === undefined) {
            this.lastPersistTime = 0;
        }

        if (this.persistRequested === undefined) {
            this.persistRequested = false;
        }
    }

    loadPersistentData({ _name, version, data }) {
        try {
            delete this.loadingPersistentDataErrored;
            this.loadingPersistentData = true;

            let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_11__.WorldSaver(_card_js__WEBPACK_IMPORTED_MODULE_5__.CardActor);
            let json = saver.parse(JSON.stringify(data));

            //maybe we need to delete all DefaultUserBehaviors at this point.

            let lib = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library;
            let systemModules = new Map();

            for (let [k, v] of lib.modules) {
                if (v.systemModule) {
                    systemModules.set(k, v);
                }
            }

            this.loadBehaviorModules(systemModules, version);

            this.loadBehaviorModules(json.behaviorModules, version);
            if (json.cards) {
                this.load(json.cards, version);
            }
        } catch (error) {
            console.error("error in loading persistent data", error);
            this.loadingPersistentDataErrored = true;
        } finally {
            delete this.loadingPersistentData;
        }
    }

    savePersistentData() {
        if (this.loadingPersistentData) {return;}
        if (this.loadingPersistentDataErrored) {return;}
        this.lastPersistTime = this.now();
        let func = () => this.saveData();
        this.persistSession(func);
    }

    saveData() {
        let name = this.sessionName || "Unknown";
        let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_11__.WorldSaver(_card_js__WEBPACK_IMPORTED_MODULE_5__.CardActor);
        let json = saver.save(this);
        let string = saver.stringify(json);
        return {name, version: "1", data: JSON.parse(string)};
    }

    loadBehaviorModules(moduleDefs, version) {
        // the persistent data should never contain a system behavior
        if (version === "1") {
            let behaviorManager = this.service("BehaviorModelManager");
            return behaviorManager.loadLibraries([...moduleDefs.values()]);
        }
        return null;
    }

    load(cards, version) {
        if (version === "1") {
            return _card_js__WEBPACK_IMPORTED_MODULE_5__.CardActor.load(cards, this, version);
        }
    }

    triggerPersist() {
        let now = this.now();
        let diff = now - this.lastPersistTime;
        let period = this.persistPeriod;
        if (diff < period) {
            if (!this.persistRequested) {
                this.persistRequested = true;
                this.future(period - diff).triggerPersist();
            }
            //console.log("persist not ready");
            return;
        }
        this.lastPersistTime = now;
        this.persistRequested = false;
        this.savePersistentData();
    }

    addBroadcaster(viewId) {
        let manager = this.service("PlayerManager");
        let player = manager.player(viewId);
        if (player) player.broadcaster = true;
        if (!this.broadcastMode) {
            this.broadcastMode = true;
            this.publish(this.sessionId, "broadcastModeEnabled");
        }
    }

    loadStart(key) {
        this.loadKey = key;
        this.loadBuffer = [];
    }

    loadOne(data) {
        let {key, buf} = data;
        if (key !== this.loadKey) {return;}
        this.loadBuffer.push(buf);
    }

    loadDone(data) {
        let {key, asScene, pose} = data;
        if (key !== this.loadKey) {return;}

        let array = this.loadBuffer;
        this.loadBuffer = [];
        this.loadKey = null;

        if (!array) {
            console.log("inconsistent message");
            return;
        }

        let len = array.reduce((acc, cur) => acc + cur.length, 0);
        let all = new Uint8Array(len);
        let ind = 0;
        for (let i = 0; i < array.length; i++) {
            all.set(array[i], ind);
            ind += array[i].length;
        }

        let result = new TextDecoder("utf-8").decode(all);
        let savedData = JSON.parse(result);
        if (savedData.version === "1") {
            let string = JSON.stringify(savedData.data);
            savedData.data = string;
            this.loadFromFile(savedData, asScene, pose);
        }
    }

    removeAll() {
        /*
        let actors = this.service("ActorManager").actors;
        let avatarBehaviors = new Set();
        for (let [_k, actor] of actors) {
            if (actor.playerId) {
                if (actor.behaviorModules) {
                    avatarBehaviors.add(...actor.behaviorModules);
                }
                continue;
            }
            actor.destroy();
        }

        let manager = this.service("BehaviorModelManager");

        let modules = manager.moduleDefs;

        let newModuleDefs = [];

        for (let [_k, v] of modules) {
            if (avatarBehaviors.has(v.externalName)) {
                newModuleDefs.push(v);
            }
        }

        manager.cleanUp();
        manager.loadLibraries(newModuleDefs);
        */
    }

    loadFromFile({ _name, version, data }, asScene, pose) {
        try {
            let saver = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_11__.WorldSaver(_card_js__WEBPACK_IMPORTED_MODULE_5__.CardActor);
            let json = saver.parse(data);

            let nameMap = this.loadBehaviorModules(json.behaviorModules, version);
            if (json.cards) {
                let result = this.load({array: json.cards, nameMap: asScene ? null : nameMap}, version);
                if (pose) {
                    result.forEach((card) => {
                        if (!card.parent) {
                            card._translation = pose.translation;
                            card._rotation = pose.rotation;
                        }
                    });
                }
            }
        } catch (error) {
            console.error("error in loading persistent data", error);
        }
    }
}

MyModelRoot.register("MyModelRoot");

// Broadcast mode is to support larger audiences. It disables sending
// reflector messages for mere spectators. Broadcasters are still able
// to send reflector messages.
// This should be a method of MyViewRoot but we can't access "this"
// until after the super() call in the constructor.
// We need it this early because otherwise messages would be
// sent during construction of some views
function setupBroadcastMode(model) {
    const searchParams = new URLSearchParams(window.location.search);
    const broadcasting = searchParams.get("broadcastMode") === "true";
    if (model.broadcastMode && !broadcasting) {
        // HACK need a proper way to enable viewOnly mode
        model.__realm.vm.controller.sessionSpec.viewOnly = true;
    }
    return broadcasting;
}

class MyViewRoot extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewRoot {
    static viewServices() {
        const services = [
            _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.InputManager,
            {service: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.ThreeRenderManager, options:{useBVH: true, antialias: AA}},
            _wcAssetManager_js__WEBPACK_IMPORTED_MODULE_15__.AssetManager,
            _text_text_js__WEBPACK_IMPORTED_MODULE_4__.KeyFocusManager,
            _text_text_js__WEBPACK_IMPORTED_MODULE_4__.FontViewManager,
            _text_text_js__WEBPACK_IMPORTED_MODULE_4__.SyncedStateManager,
            _code_js__WEBPACK_IMPORTED_MODULE_9__.BehaviorViewManager,
            _walkManager_js__WEBPACK_IMPORTED_MODULE_7__.WalkManager,
        ];
        if (window.settingsMenuConfiguration?.voice) services.push(_agoraChat_js__WEBPACK_IMPORTED_MODULE_3__.AgoraChatManager);
        return services;
    }

    constructor(model) {
        const broadcasting = setupBroadcastMode(model);
        super(model);
        const threeRenderManager = this.service("ThreeRenderManager");
        const renderer = threeRenderManager.renderer;
        window.scene = threeRenderManager.scene;

        this.service("FontViewManager").setModel(model.service("FontModelManager"));

        renderer.toneMapping = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.5;

        renderer.shadowMap.enabled = true;
        renderer.localClippingEnabled = true;
        this.setAnimationLoop(this.session);
        if (broadcasting) this.publish(this.sessionId, "addBroadcaster", this.viewId);
    }

    detach() {
        console.log("ViewRoot detached");
        super.detach();
    }

    setAnimationLoop(session) {
        // manual stepping management happens here.
        const threeRenderManager = this.service("ThreeRenderManager");
        const renderer = threeRenderManager.renderer;
        let step = (time, xrFrame) => {
            if (xrFrame) {
                session.step(time);
            }
        };
        renderer.setAnimationLoop(step);
        /*
          // we do not need this "backup" ticking (as far as I can tell).
        let basicStep = (time) => {
            console.log("basicStep", time);
            window.requestAnimationFrame(basicStep);
            session.step(time);
        };
        basicStep(Date.now());
        */
    }
}

function deleteParameter(url, key) {
    const urlObj = new URL(url, location.href);
    urlObj.searchParams.delete(key);
    return urlObj.toString();
}

let resolveConfiguration = null;

function startWorld(appParameters, world) {
    // appParameters are loaded from apiKey.js (see index.js)
    // and typically provide apiKey and appId

    let sessionParameters = {
        // microverse defaults
        name: appParameters.name || _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.autoSession(),
        password: appParameters.password || _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.autoPassword(),
        model: MyModelRoot,
        view: MyViewRoot,
        tps: 30,
        eventRateLimit: 60,
        options: {world},
        // developer can override defaults
        ...appParameters,
        // except for the 'microverse' flag
        // which identifies microverse sessions for billing
        flags: ["microverse"],
    };

    // remove portal and broadcast parameters from url for QR code
    _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.sessionURL = deleteParameter(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.sessionURL, "portal");
    _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.sessionURL = deleteParameter(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.App.sessionURL, "broadcastMode");

    return loadLoaders()
        .then(() => {
            return loadInitialBehaviors(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorModules,
                                        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorDirectory);
        }).then(() => {
            return loadInitialBehaviors(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.UserBehaviorModules,
                                        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.UserBehaviorDirectory);
        }).then(() => {
            return (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.StartWorldcore)(sessionParameters);
        }).then((session) => {
            session.view.setAnimationLoop(session);
            let {baseurl} = basenames();
            return fetch(`${baseurl}meta/version.txt`);
        }).then((response) => {
            if (`${response.status}`.startsWith("2")) {
                return response.text();
            }
            return "(version not found)";
        }).then((text) => {
            console.log(`
Croquet Microverse
${text}
https://croquet.io`.trim());
        });
}

function isRunningLocalNetwork() {
    let hostname = window.location.hostname;

    if (/^\[.*\]$/.test(hostname)) {
        hostname = hostname.slice(1, hostname.length - 1);
    }

    let local_patterns = [
        /^localhost$/,
        /^.*\.local$/,
        /^.*\.ngrok.io$/,
        // 10.0.0.0 - 10.255.255.255
        /^(::ffff:)?10(?:\.\d{1,3}){3}$/,
        // 127.0.0.0 - 127.255.255.255
        /^(::ffff:)?127(?:\.\d{1,3}){3}$/,
        // 169.254.1.0 - 169.254.254.255
        /^(::f{4}:)?169\.254\.([1-9]|1?\d\d|2[0-4]\d|25[0-4])\.\d{1,3}$/,
        // 172.16.0.0 - 172.31.255.255
        /^(::ffff:)?(172\.1[6-9]|172\.2\d|172\.3[01])(?:\.\d{1,3}){2}$/,
        // 192.168.0.0 - 192.168.255.255
        /^(::ffff:)?192\.168(?:\.\d{1,3}){2}$/,
        // fc00::/7
        /^f[cd][\da-f]{2}(::1$|:[\da-f]{1,4}){1,7}$/,
        // fe80::/10
        /^fe[89ab][\da-f](::1$|:[\da-f]{1,4}){1,7}$/,
        // ::1
        /^::1$/,
    ];

    for (let i = 0; i < local_patterns.length; i++) {
        if (local_patterns[i].test(hostname)) {return true;}
    }

    return false;
}

function startMicroverse() {
    let setButtons = (display) => {
        ["usersComeHereBtn", "homeBtn", "worldMenuBtn"].forEach((n) => {
            let btn = document.querySelector("#" + n);
            if (btn) {
                btn.style.display = display;
            }
        });
    };

    (0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.sendToShell)("hud", {joystick: false, fullscreen: false});
    setButtons("none");

    const configPromise = new Promise(resolve => resolveConfiguration = resolve)
        .then(localConfig => {
            window.settingsMenuConfiguration = { ...localConfig };
            return !localConfig.showSettings || localConfig.userHasSet
                ? false // as if user has run dialog with no changes
                : new Promise(resolve => (0,_settingsMenu_js__WEBPACK_IMPORTED_MODULE_12__.startSettingsMenu)(true, resolve));
        });
    (0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.sendToShell)("send-configuration");

    return configPromise.then(changed => {
        if (changed) (0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.sendToShell)("update-configuration", { localConfig: window.settingsMenuConfiguration });
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.sendToShell)("hud", {joystick: true, fullscreen: true});
        setButtons("flex");
        return getAntialias();
    }).then((aa) => {
        AA = aa;
        launchMicroverse();
    });
}

async function launchMicroverse() {
    let {baseurl, basename} = basenames();

    if (!basename.endsWith(".vrse")) {
        // eval to hide import from webpack
        const worldModule = await eval(`import("${baseurl}worlds/${basename}.js")`);
        // use bit-identical math for constant initialization
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ModelRoot.evaluate(() => worldModule.init(_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants));
        if (!_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorModules) {
            _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorDirectory = defaultSystemBehaviorDirectory;
            if (!_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.ExcludedSystemBehaviorModules) {
                _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorModules = defaultSystemBehaviorModules;
            } else {
                _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorModules = defaultSystemBehaviorModules.filter((n) => {
                    return !_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.ExcludedSystemBehaviorModules.includes(n);
                });
            }
        }
    } else {
        const response = await fetch(basename);
        if (!response.ok) throw Error(`world not found: ${basename}`);
        const text = await response.text();
        const json = new _worldSaver_js__WEBPACK_IMPORTED_MODULE_11__.WorldSaver().parse(text);
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.AvatarNames = defaultAvatarNames;
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorDirectory = defaultSystemBehaviorDirectory;
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.SystemBehaviorModules = defaultSystemBehaviorModules;
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.BehaviorModules = json.data.behaviormodules;
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.DefaultCards = json.data.cards;
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library = new _code_js__WEBPACK_IMPORTED_MODULE_9__.CodeLibrary();
        _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Constants.Library.addModules(json.data.behaviorModules);
    }

    let apiKeysModule;
    let local = isRunningLocalNetwork();
    let apiKeysFile = local ? "apiKey-dev.js" : "apiKey.js";

    try {
        // use eval to hide import from webpack
        apiKeysModule = await eval(`import('${baseurl}${apiKeysFile}')`);

        const { apiKey, appId } = apiKeysModule.default;
        if (typeof apiKey !== "string") throw Error(`${apiKeysFile}: apiKey must be a string`);
        if (typeof appId !== "string") throw Error(`${apiKeysFile}: appId must be a string`);
        if (!apiKey.match(/^[_a-z0-9]+$/i)) throw Error(`${apiKeysFile}: invalid apiKey: "${apiKey}"`);
        if (!appId.match(/^[-_.a-z0-9]+$/i)) throw Error(`${apiKeysFile}: invalid appId: "${appId}"`);
    } catch (error) {
        if (error.name === "TypeError" && local) {
            // apiKey-dev.js not found, use default dev key
            console.warn(`${apiKeysFile} not found, using default key for local development. Please create a valid apiKey-dev.js for local development, and apiKey.js for deployment (see croquet.io/keys)`);
            apiKeysModule = {
                default: {
                    apiKey: "1kBmNnh69v93i5tOpj7bqqaJxjD3HJEucxd7egi7H",
                    appId: "io.croquet.microverse.localdevdefault",
                }
            };
        } else {
            console.error(error);
            throw Error("Please make sure that you have created a valid apiKey-dev.js for local development, and apiKey.js for deployment (see croquet.io/keys)");
        }
    };
    // Default parameters are filled in the body of startWorld. You can override them.
    startWorld(apiKeysModule.default, basename);
}

const shellListener = (command, data) => {
    // console.log(`${frameId} received: ${JSON.stringify(data)}`);
    if (command === "local-configuration") {
        const { localConfig } = data;
        console.log("microverse received local-configuration", localConfig);
        if (resolveConfiguration) {
            resolveConfiguration(localConfig);
            resolveConfiguration = null;
        }
    }
};
(0,_frame_js__WEBPACK_IMPORTED_MODULE_8__.addShellListener)(shellListener);


/***/ }),

/***/ "./src/physics.js":
/*!************************!*\
  !*** ./src/physics.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Physics": () => (/* binding */ Physics),
/* harmony export */   "PhysicsManager": () => (/* binding */ PhysicsManager),
/* harmony export */   "PhysicsVersion": () => (/* binding */ PhysicsVersion)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io



let Physics;

function PhysicsVersion() {
    return "Rapier: " + Physics.version();
}

class PhysicsWorld extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.Model {
    init(options) {
        if (options.useCollisionEventQueue) {
            this.queue = new Physics.EventQueue(true);
        }

        const gravity = options.gravity || [0.0, -9.8, 0.0];
        const timeStep = options.timeStep || 5; // Gets Converted to Miliseconds (Hz) 5 Approx 200 Hz

        const g = new Physics.Vector3(...gravity);
        this.world = new Physics.World(g);

        this.timeStep = timeStep;
        this.world.timestep = this.timeStep / 1000;
        this.rigidBodies = new Map();
        if (!options.startPaused) {
            this.future(0).tick();
        }
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    tick() {
        if (!this.isPaused) {
            this.world.step(this.queue); // this.queue may be undefined
            this.world.forEachActiveRigidBody(body => {
                let h = body.handle;
                const rb = this.rigidBodies.get(h);
                const t = rb.rigidBody.translation();
                const r = rb.rigidBody.rotation();

                const v = [t.x, t.y, t.z];
                const q = [r.x, r.y, r.z, r.w];

                rb.moveTo(v);
                rb.say("translating", v);
                rb.rotateTo(q);
            });
            if (this.queue) {
                if (this.collisionEventHandler) {
                    this.queue.drainCollisionEvents((handle1, handle2, started) => {
                        let rb1 = this.rigidBodies.get(handle1);
                        let rb2 = this.rigidBodies.get(handle2);
                        this.collisionEventHandler.collision(rb1, rb2, started);
                    });
                }
            }
        }
        this.future(this.timeStep).tick();
    }

    registerCollisionEventHandler(handler) {
        this.collisionEventHandler = handler;
    }

    destroy() {
        this.world.free();
        this.world = null;
        // super.destroy();
    }
}

PhysicsWorld.register("PhysicsWorld");

//------------------------------------------------------------------------------------------
//-- PhysicsManager ------------------------------------------------------------------
//------------------------------------------------------------------------------------------
// Maintains a list of players connected to the session.

class PhysicsManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ModelService {
    static async asyncStart() {
        if (window.RAPIERModule) {
            Physics = window.RAPIERModule;
        } else {
            Physics = await __webpack_require__.e(/*! import() */ "vendors-node_modules_dimforge_rapier3d_rapier_js").then(__webpack_require__.bind(__webpack_require__, /*! @dimforge/rapier3d */ "./node_modules/@dimforge/rapier3d/rapier.js"));
        }
        console.log("Starting physics " + PhysicsVersion());
    }

    static types() {
        if (!Physics) return {};
        return {
            "Physics.World": {
                cls: Physics.World,
                write: world => world.takeSnapshot(),
                read:  snapshot => Physics.World.restoreSnapshot(snapshot)
            },
            "Physics.EventQueue": {
                cls: Physics.EventQueue,
                write: _q => {},
                read:  _q => new Physics.EventQueue(true)
            },
        };
    }

    init() {
        super.init("PhysicsManager");
        this.worlds = new Map();
        // this.globalWorld = this.createWorld({}, this.id);
    }

    createWorld(options, id) {
        let world = PhysicsWorld.create(options);
        this.worlds.set(id, world);
        return world;
    }

    createGlobalWorld(options) {
        if (this.globalWorld) {return;}
        this.globalWorld = this.createWorld(options, this.id);
        return this.globalWorld;
    }

    deleteWorld(id) {
        let world = this.worlds.get(id);
        if (!world) {return;}
        world.destroy();
        this.worlds.delete(id);
    }

    deleteGlobalWorld() {
        this.deleteWorld(this.id);
        delete this.globalWorld;
    }

    destroy() {
        for (let [_k, v] of this.worlds) {
            v.destroy();
        }
        delete this.globalWorld;
        this.worlds = new Map();
        super.destroy();
    }
}

PhysicsManager.register("PhysicsManager");


/***/ }),

/***/ "./src/portal.js":
/*!***********************!*\
  !*** ./src/portal.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalActor": () => (/* binding */ PortalActor),
/* harmony export */   "PortalPawn": () => (/* binding */ PortalPawn)
/* harmony export */ });
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame.js */ "./src/frame.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io







class PortalActor extends _card_js__WEBPACK_IMPORTED_MODULE_1__.CardActor {
    init(options) {
        super.init(options);
        this._isOpen = true;
        this.addLayer("portal");
        this._portalTime = this.now();
        this.listen("isOpenSet", this.setIsOpen);
    }

    get isPortal() { return true; }

    get isOpen() { return this._isOpen; }
    get portalTime() { return this._portalTime; }

    get portalURL() { return this._cardData.portalURL; }

    get sparkle() { return this._cardData.sparkle; }

    get pawn() { return PortalPawn; }

    setIsOpen() {
        if (this.isOpen) this.addLayer("portal");
        else this.removeLayer("portal");
    }
}
PortalActor.register("PortalActor");

class PortalPawn extends _card_js__WEBPACK_IMPORTED_MODULE_1__.CardPawn {
    constructor(actor) {
        super(actor);

        this.createPortalMaterials();

        this.portalId = undefined;
        this.targetMatrix = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Matrix4();
        this.targetMatrixBefore = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Matrix4();
        if (this.actor.isOpen) this.openPortal();

        this.setGhostWorld({ v: this.actor._ghostWorld });
        this.listen("ghostWorldSet", this.setGhostWorld);
        this.listen("isOpenSet", this.setIsOpen);

        this.addEventListener("pointerDown", this.onPointerDown);
        this.addEventListener("keyDown", e => { switch (e.key) {
            case " ": this.enterPortal(); break;
            case "G": case "g": this.say("_set", { ghostWorld: this.actor._ghostWorld === null ? 20 : null}); break;
        }});

        this.shellListener = (command, data) => this.receiveFromShell(command, data);
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.addShellListener)(this.shellListener);

        this.subscribe("avatar", { event: "gatherPortalSpecs", handling: "immediate" }, this.updatePortal);
    }

    destroy() {
        this.closePortal();
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.removeShellListener)(this.shellListener);
        super.destroy();
    }

    get globalPlane() {
        if (!this._globalPlane) {
            this._globalPlane = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Plane();
            this._globalPlane.normal.set(0, 0, 1);
            this._globalPlane.applyMatrix4(this.shape.matrixWorld);
        }
        return this._globalPlane;
    }

    objectCreated(obj, options) {
        super.objectCreated(obj, options);
        this.applyPortalMaterial(obj);
        if (this.actor.sparkle) this.addParticles();
    }

    createPortalMaterials() {
        // "invisible" animated spiral portal
        this.portalMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.ShaderMaterial({
            uniforms: { time: { value: 0 } },
            vertexShader: `
                #include <clipping_planes_pars_vertex>
                varying vec3 vUv;
                void main() {
                    #include <begin_vertex>             // transformed = position
                    #include <project_vertex>           // mvPosition and gl_Position
                    #include <clipping_planes_vertex>   // vClipPosition
                    vUv = transformed;
                }
            `,
            fragmentShader: `
                uniform float time;
                varying vec3 vUv;
                #include <clipping_planes_pars_fragment>
                void main() {
                    #include <clipping_planes_fragment>
                    float r = length(vUv.xy);
                    float angle = atan(vUv.y, vUv.x);
                    float v = sin(time * 30.0 - r * 1.0 + 5.0 * angle) + r - time * 2.0 + 2.0;
                    float alpha = clamp(v, 0.0, 1.0);
                    // gl_FragColor = vec4(0, 0, 0, alpha); // if we only care about alpha
                    gl_FragColor = vec4(alpha*0.3, alpha*0.3, alpha*0.3, alpha); // add some grey
                }
            `,
            clipping: true,
            // transparent: true,
            // blending: THREE.CustomBlending,
            // blendEquation: THREE.AddEquation,
            // blendSrc: THREE.ZeroFactor,
            // blendDst: THREE.OneMinusSrcAlphaFactor,
        });
    }

    applyPortalMaterial(obj) {
        if (!obj) obj = this.shape;
        if (!obj.material) obj = obj.children[0];
        if (!obj) return;

        const { isOpen } = this.actor;
        if (Array.isArray(obj.material)) {
            if (obj.material[0] !== this.portalMaterial) this.originalMaterial = obj.material[0];
            obj.material[0] = isOpen ? this.portalMaterial : this.originalMaterial;
        } else {
            if (obj.material !== this.portalMaterial) this.originalMaterial = obj.material;
            obj.material = isOpen ? this.portalMaterial : this.originalMaterial;
        }
    }

    addParticles() {
        if (this.particleSystem) return;
        const width = this.actor._cardData.width * 0.5 + 0.002;
        const height = this.actor._cardData.height * 0.5 + 0.002;
        const particles = 1000;
        const uniforms = {
            pointTexture: { value: new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.TextureLoader().load( './assets/images/spark.png' ) }
        };
        const shaderMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.ShaderMaterial( {
            uniforms,
            vertexShader: `
                attribute float size;
                #include <clipping_planes_pars_vertex>
                void main() {
                    #include <begin_vertex>
                    #include <project_vertex>
                    mvPosition += vec4( 0.0, 0.0, 0.1, 0.0 ); // offset towards camera to avoid z clipping
                    #include <clipping_planes_vertex>
                    gl_PointSize = size * ( 20.0 / -mvPosition.z );
                }
            `,
            fragmentShader: `
                uniform sampler2D pointTexture;
                #include <clipping_planes_pars_fragment>
                void main() {
                    #include <clipping_planes_fragment>
                    gl_FragColor = texture2D( pointTexture, gl_PointCoord );
                }
            `,
            clipping: true,
            blending: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            vertexColors: true
        } );

        const positions = [];
        const sizes = [];
        for ( let i = 0; i < particles; i ++ ) {
            const edge = Math.random() * 2 - 1;
            const side = Math.random() < 0.5 ? 1 : -1;
            const swap = Math.random() < 0.5;
            positions.push((swap ? edge : side) * width);
            positions.push((swap ? side : edge) * height);
            positions.push(0);
            sizes.push(20);
        }
        const geometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.BufferGeometry();
        geometry.setAttribute( 'position', new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Float32BufferAttribute( positions, 3 ) );
        geometry.setAttribute( 'size', new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Float32BufferAttribute( sizes, 1 ).setUsage( _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.DynamicDrawUsage ) );

        this.particleSystem = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Points( geometry, shaderMaterial );

        this.shape.add(this.particleSystem);
    }

    removeParticles() {
        if (!this.particleSystem) return;
        this.shape.remove(this.particleSystem);
        this.particleSystem = undefined;
    }

    // double-click should move avatar to the front of the portal
    get hitNormal() {
        return [0, 0, -1];
    }

    update(t) {
        super.update(t);
        this.updatePortalMaterial();
        this.updateParticles();
    }

    updatePortal({ callback, force }) {
        // invoked synchronously for message scope avatar:gatherPortalSpecs
        this.updatePortalCamera(callback, force);
    }

    updatePortalCamera(callback, force) {
        // if the portal's position with respect to the camera has changed, tell the
        // embedded world to re-render itself from the suitably adjusted camera angle.
        // while these changes continue, the shell will take over the scheduling of
        // the worlds' rendering with the goal of ensuring that the embedded world has
        // always finished its rendering by the time the outer world (and the portal)
        // is rendered.
        if (!this.portalId) return;

        const { targetMatrix, targetMatrixBefore, portalId } = this;
        const { camera } = this.service("ThreeRenderManager");
        // objects' matrices are not guaranteed to have been updated, because this is
        // decoupled from THREE rendering.
        camera.updateMatrixWorld(true);
        this.renderObject.updateMatrixWorld(true);
        targetMatrix.copy(this.renderObject.matrixWorld);
        targetMatrix.invert();
        targetMatrix.multiply(camera.matrixWorld);
        if (force || !targetMatrixBefore.equals(targetMatrix)) {
            const frustum = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Frustum();
            const matrix = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
            frustum.setFromProjectionMatrix(matrix);
            // if the portal isn't on view (though this is very approximate, based on
            // its bounding sphere), tell the shell there's no need to do synchronised
            // rendering right now - even though the portal is moving
            const remoteMatrix = frustum.intersectsObject(this.renderObject.children[0])
                ? targetMatrix.elements
                : null;
            callback({ portalId, cameraMatrix: remoteMatrix });
            targetMatrixBefore.copy(targetMatrix);
        }
    }

    updatePortalMaterial() {
        let { portalTime } = this.actor;
        const time = (this.extrapolatedNow() - portalTime) / 1000;
        this.portalMaterial.uniforms.time.value = time;
    }

    updateParticles() {
        if (this.actor.sparkle && !this.particleSystem) this.addParticles();
        else if (!this.actor.sparkle && this.particleSystem) this.removeParticles();
        if (!this.particleSystem) return;
        const { geometry} = this.particleSystem;
        const sizes = geometry.attributes.size.array;
        const time = Date.now() / 100;
        for ( let i = 0; i < sizes.length; i ++ ) {
            sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );
        }
        geometry.attributes.size.needsUpdate = true;
    }

    updateShape(options) {
        this.removeParticles();
        super.updateShape(options);
        this.updateParticles(); // rebuild with new shape
    }

    cardDataUpdated(data) {
        super.cardDataUpdated(data);
        // if (this.didPropertyChange(data, "portalURL")) this.openPortal();
        if (this.didPropertyChange(data, "sparkle")) this.updateParticles();
    }

    refreshDrawTransform() {
        super.refreshDrawTransform();
        this._globalPlane = null;
    }

    onPointerDown() {
        // currently toggles open/closed
        this.say("_set", {
            isOpen: !this.actor.isOpen,
            portalTime: this.now(),
        });
    }

    openPortal() {
        const portalURL = this.resolvePortalURL();
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("portal-open", {
            portalURL,
            portalId: this.portalId, // initially undefined
        });
    }

    closePortal() {
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.sendToShell)("portal-close", { portalId: this.portalId });
        this.portalId = null;
        this.targetMatrixBefore.identity();
    }

    resolvePortalURL() {
        // if portalURL does not have a sessionName or password, we need to resolve it
        // we do this by appending our own sessionName and password to the URL
        let portalURL = this.actor.portalURL;
        const portalTempUrl = new URL(portalURL, location.href);
        const portalSearchParams = portalTempUrl.searchParams;
        const portalHashParams = new URLSearchParams(portalTempUrl.hash.slice(1));
        let sessionName = portalSearchParams.get("q");
        let password = portalHashParams.get("pw");
        const worldUrl = new URL(location.href);
        if (!sessionName || !password) {
            if (!sessionName) {
                sessionName = worldUrl.searchParams.get("q");
                password = '';
                portalSearchParams.set("q", sessionName);
            }
            if (!password) {
                const worldHashParams = new URLSearchParams(worldUrl.hash.slice(1));
                password = worldHashParams.get("pw");
                portalHashParams.set("pw", password);
                portalTempUrl.hash = portalHashParams.toString();
            }
        }
        [ "showSettings", "voiceChat" ].forEach(setting => {
            if (worldUrl.searchParams.has(setting)) portalSearchParams.set(setting, "true");
        });
        // remove origin from portalURL if it is the same as the world URL
        // we could also construct an even shorter relative URL, but this is easier
        portalURL = portalTempUrl.toString();
        if (portalTempUrl.origin === location.origin) {
            portalURL = portalURL.slice(location.origin.length);
            if (portalTempUrl.pathname === location.pathname) {
                portalURL = portalURL.slice(location.pathname.length);
            }
        }
        if (this.actor.portalURL !== portalURL) this.say("setCardData", { portalURL });
        // send full URL to shell
        return portalTempUrl.toString();
    }

    setIsOpen({v}) {
        this.applyPortalMaterial();
        if (v) this.openPortal();
        else this.closePortal();
    }

    setGhostWorld({v}) {
        let canvas = document.getElementById("ThreeCanvas");
        let slider = document.getElementById("ghostSlider");
        if (typeof v === "number" && _frame_js__WEBPACK_IMPORTED_MODULE_2__.isPrimaryFrame) {
            // make our own world translucent, blurry, and desaturated so
            // the portal world becames visible
            slider.style.display = "block";
            slider.oninput = () => this.say("_set", { ghostWorld: +slider.value });
            canvas.style.filter = `opacity(${100 - v}%) saturate(${100-v}%) contrast(${80 + v * 0.2}%) blur(4px)`;
            slider.value = v;
        } else {
            slider.style.display = "none";
            canvas.style.filter = "";
        }
    }

    receiveFromShell(command, { portalId }) {
        switch (command) {
            case "portal-opened":
                this.portalId = portalId;
                break;
            case "frame-type":
                this.setGhostWorld({v: this.actor._ghostWorld});
                break;
        }
    }
}


/***/ }),

/***/ "./src/settingsMenu.js":
/*!*****************************!*\
  !*** ./src/settingsMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startSettingsMenu": () => (/* binding */ startSettingsMenu),
/* harmony export */   "startShareMenu": () => (/* binding */ startShareMenu)
/* harmony export */ });
/* harmony import */ var _worldMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldMenu.js */ "./src/worldMenu.js");
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io




let settingsMenu = null;
let nicknameIsValid;
let avatarIsValid;

let configuration = {};
let resolveDialog;

function startSettingsMenu(useEnter, r) {
    // note that even if called when already in session with a default (Alice) avatar,
    // the user must provide an avatar choice to be able to change the name
    resolveDialog = r;
    nicknameIsValid = false;
    avatarIsValid = false;
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.loadCSS)().then(() => createSettingsMenu(useEnter)).then(fillFromPrevious);
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.hideShellControls)();
}

function startShareMenu(avatar) {
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.loadCSS)().then(() => createShareMenu(avatar));
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.hideShellControls)();
}

function createSettingsMenu(useEnter) {
    let settings = `
<div id="joinDialog" class="dialogPanel no-select">
    <button id="close-button" type="button" class="btn btn-danger btn-x topright">x</button>
    <div id="join-container" class="content-container">
        <!--
        <div id="dialogTitle">
            <div id="titleHolder">
                <img id="titleLogo" src="assets/images/microverse-logo.png" />
            </div>
        </div>
        -->
        <div id="joinPrompt">
            <div id="joinPromptTitle">Settings</div>
            <div id="joinPromptBlurb" class="promptBlurb">Specify a nickname, and choose an avatar either
                by selecting from those on display or pasting a valid Ready Player Me URL.
            </div>
        </div>
        <div id="settings-title" class="panel-title">Settings</div>
        <div class="settings-container">
            <div id="nameInput" class="stringInputHolder">
                <div id="namePrompt" class="namePrompt">Nickname<span>*</span></div>
                <div id="nameField" class="nameField allow-select" contenteditable="true"></div>
                <div id="nameExplanation">Enter 1-12 characters (ASCII only).</div>
                <div id="nameFilterWarning"><br /></div>
            </div>
            <div class="namePrompt">Select Avatar</div>
            <div id="dialogAvatarSelections">
                <div id="avatarList"></div>
            </div>
            <div id="avatarURL" class="stringInputHolder">
                <div id="avatarURLPrompt" class="namePrompt">Or, Enter an Avatar URL</div>
                <div id="avatarURLField" class="nameField avatarNameField allow-select" contenteditable="true"></div>
            </div>
            <div id="handednessRow">
                <div id="handednessLabel">Hand:</div>
                <div class="btn-group" id="handedness">
                    <label class="btn btn-radio-button">
                        <input type="radio" name="options" id="right" checked><span class="handedness-label">Right</span>
                    </label>
                    <label class="btn btn-radio-button">
                         <input type="radio" name="options" id="left"><span class="handedness-label">Left</span>
                    </label>
                </div>
            </div>
            <div id="dialogEnterButton" class="dialogButtonsHolder disabled">
                <div id="enterButton">Enter</div>
            </div>
            <div id="dialogAcceptCancelButtons" class="dialogButtonsHolder twoItems">
                <button id="cancel-button" type="button" class="btn btn-danger cancel-button">Cancel</button>
                <button type="button" id="acceptButton" class="btn btn-success">Apply</button>
            </div>
        </div>
    </div>
</div>
`.trim();

    let div = document.createElement("div");
    div.innerHTML = settings;

    settingsMenu = div.querySelector("#joinDialog");

    let closeButton = settingsMenu.querySelector("#close-button");
    let enterButton = settingsMenu.querySelector('#enterButton');
    let acceptButton = settingsMenu.querySelector('#acceptButton');
    let cancelButton = settingsMenu.querySelector('#cancel-button');
    let dialogHandedness = settingsMenu.querySelector("#handedness");
    let dialogTitle = settingsMenu.querySelector("#dialogTitle");
    let joinPrompt = settingsMenu.querySelector("#joinPrompt");
    let settingsTitle = settingsMenu.querySelector("#settings-title");
    let dialogEnterButton = settingsMenu.querySelector("#dialogEnterButton");
    let dialogAcceptCancelButtons = settingsMenu.querySelector("#dialogAcceptCancelButtons");

    let nameField = settingsMenu.querySelector('#nameField');
    nameField.addEventListener('keydown', (evt) => nameFieldKeydown(evt));
    nameField.addEventListener('input', (evt) => nameFieldChanged(evt));
    nameField.addEventListener('paste', (evt) => evt.stopPropagation());

    let avatarURLField = settingsMenu.querySelector('#avatarURLField');
    avatarURLField.addEventListener('input', (evt) => avatarURLFieldChanged(evt));
    avatarURLField.addEventListener('paste', (evt) => evt.stopPropagation());
    avatarURLField.addEventListener('keydown', (evt) => evt.stopPropagation());

    enterButton.onclick = () => dialogCloseEnter();
    acceptButton.onclick = () => accept();
    closeButton.onclick = () => (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();
    cancelButton.onclick = () => (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();

    dialogHandedness.addEventListener("input", () => handednessChanged());

    if (dialogTitle) {
        dialogTitle.classList.toggle("hidden", !useEnter);
    }
    if (joinPrompt) {
        joinPrompt.style.display = useEnter ? "flex" : "none";
    }
    if (settingsTitle) {
        settingsTitle.classList.toggle("hidden", useEnter);
    }
    if (closeButton) {
        closeButton.classList.toggle("hidden", useEnter);
    }

    if (dialogEnterButton) {
        dialogEnterButton.style.display = useEnter ? "flex" : "none";
    }
    if (dialogAcceptCancelButtons) {
        dialogAcceptCancelButtons.style.display = useEnter ? "none" : "flex";
    }

    populateAvatarSelection();

    document.body.appendChild(settingsMenu);
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.filterDomEventsOn)(settingsMenu);

    return Promise.resolve(settingsMenu);
}

function fillFromPrevious() {
    const localSettings = window.settingsMenuConfiguration || {};
    const oldNick = localSettings.nickname;
    const oldAvatarURL = localSettings.avatarURL;
    const oldHandedness = localSettings.handedness;
    if (oldNick) {
        const nameField = settingsMenu.querySelector('#nameField');
        nameField.textContent = oldNick;
        nameFieldChanged();
    }
    if (oldAvatarURL) {
        let predefined = findPredefined(oldAvatarURL);
        if (predefined) {
            avatarSelected(predefined);
        } else {
            const avatarURLField = settingsMenu.querySelector('#avatarURLField');
            avatarURLField.textContent = oldAvatarURL;
            avatarURLFieldChanged();
        }
    }
    if (oldHandedness) {
        if (oldHandedness === "Left") {
            const handedness = settingsMenu.querySelector('#handedness');
            const l = handedness.querySelector("#left");
            l.checked = true;
        }
    }
    updateButtonState();
}

function nameFieldKeydown(evt) {
    evt.stopPropagation();
    if (evt.keyCode === 13 || evt.keyCode === 9) evt.preventDefault();
}

function nameFieldChanged(evt) {
    // first trim start and end whitespace and remove any line feeds that have
    // snuck in.  then replace any non-ascii characters and see if that reduces
    // the length.  if so, show the reduced string
    if (evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    const nameField = document.getElementById('nameField');
    let value = nameField.textContent.trim().replace(/\r?\n|\r/g, '');
    const beforeFilter = value.length;
    // value = value.replace(/[\u0250-\ue007]/g, '').trim().slice(0,12).trim();
    // const unusable = value.replace(/[\x20-\x7F]/g, '');
    value = value.replace(/[^\x20-\x7F]/g, '').trim().slice(0, 12).trim();
    const div = document.getElementById('nameFilterWarning');
    div.innerHTML = value.length === beforeFilter ?
        '<br/>' :
        `Nickname filtered to "${value}"`;

    if (value.length >= 1 && value.length <= 12) {
        configuration.nickname = value;
        nicknameIsValid = true;
    } else {
        nicknameIsValid = false;
    }
    updateButtonState();
}

function avatarURLFieldChanged(evt) {
    if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
    const avatarURLField = settingsMenu.querySelector('#avatarURLField');
    let value = avatarURLField.textContent.trim(); // may be empty
    avatarSelected({
        url: value,
        type: "ReadyPlayerMe"
    });
}

function updateButtonState() {
    const valid = nicknameIsValid && avatarIsValid;
    const dialogEnterButton = settingsMenu.querySelector('#dialogEnterButton');
    dialogEnterButton.classList.toggle('disabled', !valid);
    const dialogAcceptCancelButtons = settingsMenu.querySelector('#dialogAcceptCancelButtons');
    dialogAcceptCancelButtons.classList.toggle('disabled', !valid);
}

function closeDialog(changed) {
    settingsMenu.remove();
    settingsMenu = null;
    if (resolveDialog) {
        resolveDialog(changed);
        resolveDialog = null;
    }
}

function dialogCloseEnter() {
    console.log("enter", configuration);
    updateLocalConfig();
    closeDialog(true);
}

function accept() {
    console.log("accept", configuration);
    updateLocalConfig();
    // if (avatar) {
    //     avatar.setSettings(configuration);
    // }
    closeDialog(true);
    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();
}

function updateLocalConfig() {
    const existing = window.settingsMenuConfiguration || {};
    window.settingsMenuConfiguration = {
        ...existing,
        ...configuration
    };
}

let avatars = [
    {png: "https://croquet.io/microverse/assets/avatar-images/f1.png",
     url: "https://d1a370nemizbjq.cloudfront.net/0725566e-bdc0-40fd-a22f-cc4c333bcb90.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/f2.png",
     url: "https://d1a370nemizbjq.cloudfront.net/50ef7f5f-b401-4b47-a8dc-1c4eda1ba8d2.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/f3.png",
     url: "https://d1a370nemizbjq.cloudfront.net/b5c04bb2-a1df-4ca4-be2e-fb54799e9030.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/f4.png",
     url: "https://d1a370nemizbjq.cloudfront.net/b480f1d0-3a0f-4766-9860-c213e6c50f3d.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/m1.png",
     url: "https://d1a370nemizbjq.cloudfront.net/05d16812-01de-48cc-8e06-c6514ba14a77.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/m2.png",
     url: "https://d1a370nemizbjq.cloudfront.net/2955d824-31a4-47e1-ba58-6c387c63b660.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/m3.png",
     url: "https://d1a370nemizbjq.cloudfront.net/579d4ec8-ade3-49ea-8b52-2ea5fe097f7d.glb",
     type: "ReadyPlayerMe",
    },
    {png: "https://croquet.io/microverse/assets/avatar-images/m4.png",
     url: "https://d1a370nemizbjq.cloudfront.net/535100f3-c58c-4fd8-9fb9-4ee090e844bf.glb",
     type: "ReadyPlayerMe",
    }
];

function avatarSelected(entry) {
    if (entry.url) {
        configuration.avatarURL = entry.url;
        configuration.type = entry.type;
    }

    if (!settingsMenu) {
        return;
    }

    avatarIsValid = false;

    let holder = settingsMenu.querySelector("#avatarList");
    for (let i = 0; i < holder.childNodes.length; i++) {
        let child = holder.childNodes[i];
        if (child.getAttribute("avatarURL") === entry.url) {
            child.setAttribute("selected", true);
            avatarIsValid = true;
        } else {
            child.removeAttribute("selected");
        }
    }

    const avatarURLField = settingsMenu.querySelector('#avatarURLField');
    let value = avatarURLField.textContent.trim();
    if (value && value === entry.url) {
        avatarIsValid = true;
    } else {
        avatarURLField.textContent = "";
    }

    updateButtonState();
}

function handednessChanged() {
    let left = settingsMenu.querySelector("#left");
    configuration.handedness = !left.checked ? "Right" : "Left";
}

function findPredefined(url) {
    return avatars.find((entry) => entry.url === url);
}

function populateAvatarSelection() {
    if (!settingsMenu) {
        return;
    }
    let holder = settingsMenu.querySelector("#avatarList");

    avatars.forEach((entry) => {
        let div = document.createElement("div");
        div.classList.add("avatarThumb");
        div.onclick = () => avatarSelected(entry);
        if (entry.png.indexOf("/") >= 0) {
            div.style.backgroundImage = `url(${entry.png})`;
        } else {
            div.style.backgroundImage = `url(./assets/avatar-images/${entry.png}.png)`;
        }
        div.setAttribute("avatarURL", entry.url);
        holder.appendChild(div);
    });
}

// share dialog

function createShareMenu(avatar) {
    let share = `
    <div id="shareDialog" class="dialogPanel no-select">
        <button id="close-button" type="button" class="btn btn-danger btn-x topright">x</button>
        <div id="share-container" class="content-container">
            <div id="share-title" class="panel-title">Share Session<br></div>
            <div class="promptBlurb">Scan QR code or click to open a new browser tab<br> in the same session.</div>
            <div id="share-qr"></div>

            <div class="share-settings-label">Copy Share Link</div>
            <div class="share-menu-row">
                <div id="copy-link" class="copy-link allow-select">generated link</div>
                <button id="copy-button" type="button" class="btn btn-outline-success">Copy</button>
            </div>
            <div class="share-menu-row">
                <div class="share-settings-label">Save world as VRSE file</div>
                <button id="save-button" type="button" class="btn btn-outline-success">Download</button>
            </div>
        </div>
    </div>`.trim();

    let div = document.createElement("div");
    div.innerHTML = share;

    let shareDialog = div.querySelector("#shareDialog");
    let shareQR = div.querySelector("#share-qr");
    let closeButton = shareDialog.querySelector("#close-button");
    let badgeHolder = document.createElement("div");
    let link = div.querySelector("#copy-link");
    let copyLink = div.querySelector("#copy-button");
    let saveWorld = div.querySelector("#save-button");

    (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.filterDomEventsOn)(shareDialog);

    let badge = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__.App.makeQRCanvas();
    let url = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__.App.sessionURL;
    shareQR.appendChild(badgeHolder);
    badgeHolder.appendChild(badge);
    badgeHolder.classList.add("menu-qr");
    badge.classList.add("share-qr-canvas");
    badge.onclick = () => {
        let div = document.createElement("div");
        div.innerHTML = `<a id="link" target="_blank" rel="noopener noreferrer" href="${url}"></a>`;
        document.getElementById("hud").appendChild(div);
        let a = div.querySelector("#link");
        a.click();
        div.remove();
    };

    closeButton.onclick = () => (0,_worldMenu_js__WEBPACK_IMPORTED_MODULE_0__.closeAllDialogs)();

    link.textContent = url;

    saveWorld.onclick = (_evt) => savePressed(avatar);

    copyLink.onclick = (_evt) => copyPressed(avatar);

    document.body.appendChild(shareDialog);
}

function savePressed(myAvatar) {
    let model = myAvatar.actor.wellKnownModel("ModelRoot");

    let div = document.createElement("a");

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model.saveData(), null, 4));

    div.setAttribute("href", dataStr);
    div.setAttribute("download", "scene.vrse");
    div.click();
}

function copyPressed(_myAvatar) {
    let isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);
    let url = _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__.App.sessionURL;

    let clipboardAPI = () => {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(url).then(() => true, () => false);
        }
        return Promise.resolve(false);
    };

    clipboardAPI().then((result) => {
        if (!result) {
            if (!isiOSDevice) {
                this.copy.value = url;
                this.copy.select();
                this.copy.setSelectionRange(0, 99999);
                document.execCommand("copy");
                return;
            }

            let range = document.createRange();
            range.selectNodeContents(this.copy);
            this.copy.textContent = url;

            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            this.copy.setSelectionRange(0, 100000);
            document.execCommand("copy");
        }
    });
}


/***/ }),

/***/ "./src/text/text-commands.js":
/*!***********************************!*\
  !*** ./src/text/text-commands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canonicalizeKeyboardEvent": () => (/* binding */ canonicalizeKeyboardEvent),
/* harmony export */   "defaultCommands": () => (/* binding */ defaultCommands),
/* harmony export */   "defaultKeyBindings": () => (/* binding */ defaultKeyBindings),
/* harmony export */   "lookup": () => (/* binding */ lookup)
/* harmony export */ });
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// helper

function maybeSelectCommentOrLine(morph) {
  // Dan's famous selection behvior! Here it goes...
  /*   If you click to the right of '//' in the following...
  'wrong' // 'try this'.slice(4)  //should print 'this'
  'http://zork'.slice(7)          //should print 'zork'
  */
  // If click is in comment, just select that part
  var sel = morph.selection,
      {row, column} = sel.lead,
      text = morph.selectionOrLineString();

  if (!sel.isEmpty()) return;

  // text now equals the text of the current line, now look for JS comment
  var idx = text.indexOf('//');
  if (idx === -1                          // Didn't find '//' comment
      || column < idx                 // the click was before the comment
      || (idx>0 && (':"'+"'").indexOf(text[idx-1]) >=0)    // weird cases
      ) { morph.selectLine(row); return }

  // Select and return the text between the comment slashes and end of method
  sel.range = {start: {row, column: idx + 2}, end: {row, column: text.length}};
}

function doEval(morph, range, additionalOpts, code) {
  if (!range)
    range = morph.selection.isEmpty() ? morph.lineRange() : morph.selection.range;
  if (!code)
    code = morph.textInRange(range)
  // eval code here
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// commands

let textCommands = {
    "clipboard copy": {
        doc: "placeholder for native copy",
        exec: text => false
    },

    "clipboard cut": {
        doc: "placeholder for native cut",
        exec: text => false
    },

    "clipboard paste": {
        doc: "placeholder for native paste",
        exec: text => false
    },
};

let jsEditorCommands = {
    "doit": {
        doc: "Evaluates the selected code or the current line and report the result",
        exec: async (text, opts, count = 1) => {
            maybeSelectCommentOrLine(text);
            let result, err;
            try {
                opts = Object.assign({}, opts, {inspect: true, inspectDepth: count});
                result = await doEval(text, undefined, opts);
                err = result.isError ? result.value : null;
            } catch (e) { err = e; }
            if (err) console.log('**' + err);
            return result;
        }
    },

    "printit": {
        doc: "Evaluates selected code or the current line and inserts the result in a printed representation",
        exec: async (text, opts) => {
            // opts = {targetModule}
            maybeSelectCommentOrLine(text);
            let result, err;
            try {
                opts = Object.assign({}, opts, {asString: true});
                result = await doEval(text, undefined, opts);
                err = result.isError ? result.value : null;
            } catch (e) { err = e; }
            text.selection.collapseToEnd();
            text.insertTextAndSelect(err ?
                                     String(err) + (err.stack ? "\n" + err.stack : "") :
                                     String(result.value));
            return result;
        }
    },
};

const defaultCommands = Object.assign({}, textCommands, jsEditorCommands);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// keybindings

const defaultKeyBindings = [
  {keys: {mac: 'Meta-C', win: 'Ctrl-C'}, command: "clipboard copy"},
  {keys: {mac: 'Meta-X', win: 'Ctrl-X'}, command: "clipboard cut"},
  {keys: {mac: 'Meta-V', win: 'Ctrl-V'}, command: "clipboard paste"},

  {keys: {mac: 'Meta-Z', win: 'Ctrl-Z'}, command: "text undo"},
  //{keys: {mac: 'Meta-Shift-Z', win: 'Ctrl-Shift-Z'}, command: "text redo"},

  {keys: {mac: 'Meta-D', win:  'Ctrl-D'}, command: "doit"},
  {keys: {mac: 'Meta-P', win: 'Ctrl-P'}, command: "printit"},
  {keys: {mac: 'Meta-S', win: 'Ctrl-S'}, command: "save"},
];

function lookup(evt, bindings) {
    for (let i = 0; i < bindings.length; i++) {
        let b = bindings[i];
        let keys = b.keys;
        // use bowser for real
        for (let k in keys) {
            if (keys[k] === evt.keyCombo) {
                return b.command;
            }
        }
    }
    return null;
}

let keyMods = [
    [""],
    ["shift"],
    ["alt"],
    ["alt", "shift"],
    ["ctrl"],
    ["ctrl", "shift"],
    ["ctrl", "alt"],
    ["ctrl", "alt", "shift"],
    ["meta"],
    ["meta", "shift"],
    ["meta", "alt"],
    ["meta", "alt", "shift"],
    ["meta", "ctrl"],
    ["meta", "ctrl", "shift"],
    ["meta", "ctrl", "alt"],
    ["meta", "shift", "alt", "shift"]];

let modMap = {"shift": 1,
              "alt":2, "option":2,
              "control":4, "ctrl": 4,
              "super":8,"win":8,"meta":8,"command":8,"cmd":8};

let isNumber = function (key) {
    return /^[0-9]+$/.test(key);
};

function isModifier(key) {
    if (isNumber(key)) return false;
    key = key.replace(/-$/, "").toLowerCase();
    return !!modMap[key];
}

function cap(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function canonicalizeFunctionKey(key) {
    key = key.toLowerCase();
    switch (key) {
    case 'space':
        key = "space";
        break;
    case 'esc':
        key = "escape";
        break;
    case 'return':
        key = "enter";
        break;
    case 'arrowleft':
        key = "left";
        break;
    case 'arrowright':
        key = "right";
        break;
    case 'arrowup':
        key = "up";
        break;
    case 'arrowdown':
        key = "down";
        break;
    default:
        break;
    }

    let function_keys = [
        "backspace", "tab", "enter", "pause", "escape", " ", "pageup", "pagedown", "end", "home", "left", "up", "right", "down", "print", "insert", "delete", "numpad0", "numpad1", "numpad2", "numpad3", "numpad4", "numpad5", "numpad6", "numpad7", "numpad8", "numpad9", "numpadenter", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "numlock", "scrolllock"];

    if (function_keys.includes(key)) {
        return cap(key);
    }
    return "";
}

function decodeKeyIdentifier(identifier, keyCode) {
    // trying to find out what the String representation of the key pressed
    // in key event is.
    // Uses keyIdentifier which can be Unicode like "U+0021"

    let id = identifier,
        unicodeDecodeRe = /u\+?([\d\w]{4})/gi,
        unicodeReplacer = (match, grp) => {
            return String.fromCharCode(parseInt(grp, 16));
        },
    key = id && id.replace(unicodeDecodeRe, unicodeReplacer);

    if (key === 'Command' || key === 'Cmd') key = "Meta";
    if (key === ' ') key = "Space";
    if (keyCode === 8 /*KEY_BACKSPACE*/) key = "Backspace";
    return key;
}

function identifyKeyFromCode(evt) {
    let code = evt.code;

    // works on Chrome and Safari
    // https://developer.mozilla.org/en/docs/Web/API/KeyboardEvent/code
    // For certain inputs evt.key or keyCode will return the inserted char, not
    // the key pressed. For keybindings it is nicer to have the actual key,
    // however

    if (typeof code !== "string") return null;

    if (code.startsWith("Key")) return code.slice(3);
    if (code.startsWith("Numpad")) return code;
    if (code.startsWith("Digit")) return code.slice(5);
    if (code.startsWith("Arrow")) return code.slice(5);
    if (code.match(/^F[0-9]{1-2}$/)) return code;

    switch (code) {
    case "Insert":
    case "Home":
    case "PageUp":
    case "PageDown":
        return code;
    case 'Period':
        return ".";
    case 'Comma':
        return ",";
    case 'Help':
        return "Insert";
    case 'Equal':
        return "=";
    case 'Backslash':
    case 'IntlBackslash':
        return "\\";
    case "Minus":
        return "-";
    case "BracketRight":
        return "]";
    case "BracketLeft":
        return "[";
    case "Quote":
        return "'";
    case 'Backquote':
        return "`";
    case 'Semicolon':
        return ";";
    default:
        return null;
    }
}

function eventToKeyCombo(bitMask, onlyModifiers, evt) {
    let key = evt.key,
        keyIdentifier = evt.keyIdentifier;

    let arrows = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    let controls = [10, 13, 8, 46];

    if (arrows.indexOf(evt.key) >= 0) {
        return evt.key;
    }

    if (controls.indexOf(evt.keyCode) >= 0) {
        return evt.key;
    }

    if (bitMask === 0 || bitMask === 1) {return null;}

    // fallback to keyIdentifier for Safari...
    if (!key && keyIdentifier) {
        key = decodeKeyIdentifier(keyIdentifier, evt.which || evt.keyCode);
        evt.key = key = key[evt.shiftKey ? "toUpperCase" : "toLowerCase"]();
        if (isModifier(key)) {return cap(key[0]);}
    }

    let mods = keyMods[bitMask];

    if (evt.code) {
        key = identifyKeyFromCode(evt) || key;
    }

    let keyCombo = mods.map(cap).join('-');
    if (!onlyModifiers) {
        keyCombo += key ? "-" + key : "";
    }
    return keyCombo;
}

function canonicalizeKeyboardEvent(evt) {
    let bitMask = 0;
    let spec = {
        keyCombo: "",
        key: '',
        shiftKey: false,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        altGraphKey: false,
        isFunctionKey: false,
        isModified: false,
        onlyModifiers: false,
        onlyShiftModifier: null,
        type: evt.type,
        keyCode: evt.keyCode
    };

    Object.keys(modMap).forEach(k => {
        let key = k + "Key";
        if (evt[key]) {
            bitMask |= modMap[k];
            spec[key] = true;
        }
    });

    if (modMap[evt.key.toLowerCase()]) {
        spec.onlyModifiers = true;
    }

    let keyCombo = eventToKeyCombo(bitMask, spec.onlyModifiers, evt);

    if (!keyCombo) {return null;}

    if (bitMask === 0 || bitMask === 1) {
        // 2. Are any modifier keys pressed?
        spec.keyCombo = keyCombo;
        spec.key = evt.key;
        if (bitMask === 1) {
            spec.onlyShiftModifier = true;
            spec.isModified = true;
        }
        return spec;
    }

    if (bitMask > 1) {
        spec.isModified = true;
    }

    if (spec.onlyModifiers) {
        spec.keyCombo = keyCombo;
        spec.key = evt.key;
        spec.onlyModifiers = true;
        return spec;
    }

    // 3. determine the key code and key string of the event.
    let fnKey = canonicalizeFunctionKey(evt.key);
    if (fnKey) {
        spec.isFunctionKey = true;
        spec.key = fnKey;
    } else if (spec.isModified) {
        if (spec.onlyShiftModifier) {
            spec.key = evt.key;
        } else {
            spec.key = evt.key[0].toUpperCase() + evt.key.slice(1);
        }
    } else {
        return null;
        // spec.key = evt.key;
    }

    spec.keyCombo = keyCombo;
    return spec;
}


/***/ }),

/***/ "./src/text/text.js":
/*!**************************!*\
  !*** ./src/text/text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontModelManager": () => (/* binding */ FontModelManager),
/* harmony export */   "FontViewManager": () => (/* binding */ FontViewManager),
/* harmony export */   "KeyFocusManager": () => (/* binding */ KeyFocusManager),
/* harmony export */   "SyncedStateManager": () => (/* binding */ SyncedStateManager),
/* harmony export */   "TextFieldActor": () => (/* binding */ TextFieldActor),
/* harmony export */   "TextFieldPawn": () => (/* binding */ TextFieldPawn)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
/* harmony import */ var _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ThreeRender.js */ "./src/ThreeRender.js");
/* harmony import */ var _croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @croquet/hybrid-msdf-text */ "./node_modules/@croquet/hybrid-msdf-text/index.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card.js */ "./src/card.js");
/* harmony import */ var load_bmfont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! load-bmfont */ "./node_modules/load-bmfont/browser.js");
/* harmony import */ var load_bmfont__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(load_bmfont__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/fonts/Roboto.json */ "./assets/fonts/Roboto.json");
/* harmony import */ var _warota_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warota.js */ "./src/text/warota.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io











// "Text Scale" to reconcile the bitmap font size, which is typically in the range of 50 pixels, and the 3D geometry size, which we tend to think one unit equates to a meter.
const TS = 0.0025;

const defaultModelMeasurer = new ((0,_croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__.getTextLayout)(_ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE))({font: /*#__PURE__*/ (_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5__, 2)))});

class KeyFocusManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "KeyFocusManager");
        this.setKeyboardInput(null);

        this.hiddenInput = document.querySelector("#hiddenInput");
        this.copyElement = document.querySelector("#copyElement");

        if (!this.hiddenInput) {
            this.hiddenInput = document.createElement("input");
            this.hiddenInput.id = "hiddenInput";
            this.hiddenInput.style.setProperty("position", "absolute");

            this.hiddenInput.style.setProperty("left", "-120px"); //-120px
            this.hiddenInput.style.setProperty("top", "-120px");  // -120px
            this.hiddenInput.style.setProperty("transform", "scale(0)"); // to make sure the user never sees a flashing caret, for example on iPad/Safari

            this.hiddenInput.style.setProperty("width", "100px");
            this.hiddenInput.style.setProperty("height", "100px");
            document.body.appendChild(this.hiddenInput);

            this.hiddenInput.addEventListener("input", evt => {
                evt.stopPropagation();
                if (!this.keyboardInput) {return;}
                this.keyboardInput.input(evt);
            }, true);

            this.hiddenInput.addEventListener("keydown", evt => {
                evt.stopPropagation();
                if (!this.keyboardInput) {return;}
                this.keyboardInput.keyDown(evt);
            }, true);

            this.hiddenInput.addEventListener("copy", evt => {
                if (!this.keyboardInput) {return;}
                this.keyboardInput.copy(evt);
            });

            this.hiddenInput.addEventListener("paste", evt => {
                if (!this.keyboardInput) {return;}
                this.keyboardInput.paste(evt);
            });
        }

        if (!this.copyElement) {
            this.copyElement = document.createElement("input");
            this.copyElement.id = "copyElement";
            this.copyElement.style.setProperty("position", "absolute");

            this.copyElement.style.setProperty("left", "-120px"); //-120px
            this.copyElement.style.setProperty("top", "-120px");  // -120px
            this.copyElement.style.setProperty("transform", "scale(0)"); // to make sure the user never sees a flashing caret, for example on iPad/Safari

            this.copyElement.style.setProperty("width", "100px");
            this.copyElement.style.setProperty("height", "100px");
            document.body.appendChild(this.copyElement);
        }
    }

    setKeyboardInput(obj) {
        if (this.hiddenInput && !obj) {
            this.hiddenInput.blur();
        }
        this.keyboardInput = obj;
        if (obj) {
            this.hiddenInput.focus();
        }
    }

    destroy() {
        this.keyboardInput = null;

        this.hiddenInput = document.querySelector("#hiddenInput");

        if (this.hiddenInput) {
            this.hiddenInput.remove();
        }
        super.destroy();
    }
}

class SyncedStateManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "SyncedStateManager");
        this.isSynced = false;
        this.subscribe(this.viewId, "synced", "synced");
    }

    synced(value) {
        console.log("synced manager", value);
        this.isSynced = value;
        // If a view object can handle synced, they can do it directly
        // so there is no need to indirect it from here.
        // this.publish(this.id, "synced", value);
    }
}

class FontModelManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ModelService {
    static defaultFont() {return "Roboto";}
    init(name) {
        super.init(name || "FontModelManager");
        this.fonts = new Map();

        let {chars, common, info, kernings, pages} = /*#__PURE__*/ (_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_assets_fonts_Roboto_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.askFont({name: info.face, font: {chars, common, info, kernings, pages}});
        this.subscribe(this.id, "askFont", this.askFont);

        this.loading = new Map();

        this.subscribe(this.id, "fontLoadStart", "fontLoadStart");
        this.subscribe(this.id, "fontLoadOne", "fontLoadOne");
        this.subscribe(this.id, "fontLoadDone", "fontLoadDone");

    }

    get(name) {
        return this.fonts.get(name);
    }

    keys() {
        return this.fonts.keys();
    }

    askFont(data) {
        if (data.font) {
            this.fonts.set(data.name, data.font);
        }
        this.publish(this.id, "fontAsked", data.name);
    }

    fontLoadStart({key, name}) {
        this.loading.set(key, {name, array: []});
    }

    fontLoadOne({key, buf}) {
        let data = this.loading.get(key);
        if (!data) {
            console.log("inconsistent message");
            return;
        }

        data.array.push(buf);
    }

    fontLoadDone(key) {
        let data = this.loading.get(key);
        if (!data) {
            console.log("inconsistent message");
            return;
        }

        let ary = data.array;

        let len = ary.reduce((acc, cur) => acc + cur.length, 0);

        let all = new Uint8Array(len);

        let ind = 0;

        for (let i = 0; i < ary.length; i++) {
            all.set(ary[i], ind);
            ind += ary[i].length;
        }

        let result = new TextDecoder("utf-8").decode(all);
        let font = JSON.parse(result);
        this.askFont({name: data.name, font});
        this.loading.delete(key);
    }
}

FontModelManager.register("FontModelManager");

class FontViewManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(options, name) {
        super(name || "FontViewManager");
        this.fonts = new Map(); // {texture, _material}
        this.isLoading = {};
        this.fudgeFactors = new Map();
        this.fudgeFactors.set("Roboto", {yoffset: 30});
    }

    setModel(model) {
        this.model = model;
        for (let [name, font] of this.model.fonts.entries()) {
            this.askFont(name, font);
        }
    }

    get(name) {
        return this.fonts.get(name);
    }

    askFont(name, optFont) {
        if (this.fonts.get(name)) {return Promise.resolve(this.fonts.get(name));}
        if (this.isLoading[name]) {return this.isLoading[name];}

        let path = "./assets/fonts";
        let image = `${path}/${name}.png`;

        if (optFont) {
            this.isLoading[name] = Promise.resolve(optFont);
        } else {
            this.isLoading[name] = new Promise((resolve, reject) => {
                load_bmfont__WEBPACK_IMPORTED_MODULE_4___default()(`${path}/${name}.json`, (err, font) => {
                    if (err) reject(err);
                    resolve(font);
                })
            });
        }

        this.isLoading[name] = this.isLoading[name].then((font) => {
            let loader = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.TextureLoader();
            return new Promise((resolve, reject) => {
                loader.load(
                    image,
                    (tex) => {
                        let preprocessor = new _croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__.MSDFFontPreprocessor();
                        let cWidth = font.common ? font.common.scaleW : font.atlas.width;
                        let cHeight = font.common ? font.common.scaleH : font.atlas.height;
                        let img = new Image(cWidth, cHeight);
                        let canvas = document.createElement("canvas");
                        canvas.width = cWidth;
                        canvas.height = cHeight;
                        let ctx = canvas.getContext("2d");
                        ctx.drawImage(tex.image, 0, 0);
                        let inBitmap = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        let outImage = preprocessor.process(font, inBitmap.data);
                        ctx.putImageData(outImage, 0, 0);

                        let processedTexture = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Texture(outImage);
                        processedTexture.minFilter = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.LinearMipMapLinearFilter;
                        processedTexture.magFilter = _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.LinearFilter;
                        processedTexture.generateMipmaps = true;
                        processedTexture.anisotropy = 1; // maxAni

                        img.src = canvas.toDataURL("image/png");
                        img.onload = () => {
                            processedTexture.needsUpdate = true;
                        };

                        this.fonts.set(name, {font, texture: processedTexture});
                        delete this.isLoading[name];

                        let maybeFont = this.model.fonts.get(name) ? null : font;
                        if (maybeFont) {
                            this.sendLargeFont(name, font);
                        } else {
                            this.publish(this.model.id, "askFont", {name});
                        }
                        resolve(this.fonts.get(name));
                    },
                    null,
                    () => {
                        this.isLoading[name] = false;
                        reject(new Error(`failed to load font: ${name}`));
                    });
            });
        });
        return this.isLoading[name];
    }

    sendLargeFont(name, font) {
        let string = JSON.stringify(font);

        let array = new TextEncoder().encode(string);

        let ind = 0;

        let key = Math.random();

        this.publish(this.model.id, "fontLoadStart", {key, name});
        while (ind < array.length) {
            let buf = array.slice(ind, ind + 2880);
            this.publish(this.model.id, "fontLoadOne", {key, buf});
            ind += 2880;
        }

        this.publish(this.model.id, "fontLoadDone", key);
    }

    destroy() {
        this.fonts.forEach((v, _k) => {
            if (v.material) {
                v.material.dispose();
                v.material = null;
            }
        });
    }
}

class TextFieldActor extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardActor {
    init(options) {
        this.fonts = this.service("FontModelManager");
        this.doc = new _warota_js__WEBPACK_IMPORTED_MODULE_6__.Doc({defaultFont: this.fonts.constructor.defaultFont(), defaultSize: 10});
        this.doc.load(options.runs || []);
        // this.doc.load([
        // {text: "ab c ke eke ekeke ekek eke ek eke ke ek eke ek ek ee  ke kee ke", style: {size: 24}},
        // ]);

        this.content = {runs: [], selections: {}, undoStacks: {}, timezone: 0, queue: [], editable: true};

        if (!options.textScale) {
            options.textScale =  TS;
        }

        super.init(options);
        this.subscribe(this.id, "load", "loadAndReset");
        this.subscribe(this.id, "editEvents", "receiveEditEvents");
        this.subscribe(this.id, "accept", "publishAccept");
        this.subscribe(this.id, "undoRequest", "undoRequest");
        this.subscribe(this.id, "setExtent", "setExtent");
        this.subscribe(this.sessionId, "view-exit", "viewExit");

        this.listen("dismiss", "dismiss");

        // the height part of this is optional, in the sense that the view may do something else

        let textWidth = options.width / options.textScale;
        let textHeight = options.height / options.textScale;
        this.setExtent({width: textWidth, height: textHeight});

        this.depth = options.depth || 0;

        if (!options.noDismissButton) {
            // that means that a change in readOnly should trigger this
            this.setupDismissButton();
        }

        if (options.scrollBar) {
            // that means that a change in readOnly should trigger this
            this.setupScrollBar(options);
        }

        if (options.readOnly) {
            let margins = options.margins;
            let marginsLeft = margins && margins.left !== undefined ? margins.left : 0;
            let marginsRight = margins && margins.right !== undefined ? margins.right : 0;

            let hMargin = marginsLeft + marginsRight;

            let measurement = defaultModelMeasurer.measureText(this.value);
            this.measurement = {
                width: (measurement.width + hMargin) * options.textScale,
                height: measurement.height * options.textScale
            };
        }
    }

    get pawn() {return TextFieldPawn;}

    static defaultMeasurement(text) { return defaultModelMeasurer.measureText(text); }

    static types() {
        return {"Warota.Doc": _warota_js__WEBPACK_IMPORTED_MODULE_6__.Doc};
    }

    load(stringOrArray) {
        let runs;
        if (typeof stringOrArray === "string") {
            runs = [{text: stringOrArray}];
        } else {
            runs = stringOrArray;
        }
        this.doc.load(runs);
        this.publishChanged();
        this.needsUpdate();
    }

    save() {
        return {runs: this.doc.runs, defaultFont: this.doc.defaultFont, defaultSize: this.doc.defaultSize};
    }

    setExtent(ext) {
        this.extent = ext;
    }

    loadAndReset(stringOrArray) {
        let runs;
        if (typeof stringOrArray === "string") {
            runs = [{text: stringOrArray}];
        } else {
            runs = stringOrArray;
        }
        this.content = {runs: runs, selections: {}, undoStacks: {}, timezone: 0, queue: [], editable: true};
        this.doc.load(runs);
        this.publishAccept();
        this.needsUpdate();
    }

    receiveEditEvents(events) {
        let [_timezone, hasDone] = this.doc.receiveEditEvents(events, this.content, this.doc);
        if (hasDone) {
            this.publishChanged();
        }

        this.needsUpdate();
    }

    publishAccept() {
        this.publish(this.id, "text", {id: this.id, text: this.doc.plainText()});
    }

    publishChanged() {
        this.publish(this.id, "changed", {id: this.id});
    }

    viewExit(viewId) {
        // we might have to clear the events of Warota in the view?
        delete this.content.selections[viewId];
        this.needsUpdate();
    }

    needsUpdate() {
        this.say("screenUpdate", this.content.timezone);
    }

    undoRequest(user) {
        let event;
        let queue = this.content.queue;
        for (let i = queue.length - 1; i >= 0; i--) {
            let e = queue[i];
            if (e.user.id === user.id && (e.type !== "snapshot" && e.type !== "select")) {
                event = queue[i];
                break;
            }
        }
        if (!event) {return;}

        this.doc.undoEvent(event, this.content, this.doc);
        this.needsUpdate();
    }

    setDefault(font, size) {
        return this.doc.setDefault(font, size);
    }

    styleAt(index) {
        return this.doc.styleAt(index);
    }

    updateOptions(options) {
        super.updateOptions(options);
        let textWidth = options.width / options.textScale;
        let textHeight = options.height / options.textScale;
        this.setExtent({width: textWidth, height: textHeight});
        if (this.dismissButton) {
            this.dismissButton.destroy();
        }
        if (!options.noDismissButton) {
            this.setupDismissButton();
        }
        if (options.scrollBar) {
            this.setupScrollBar(options);
        }
    }

    get value() {
        return this.doc.plainText();
    }

    set value(text) {
        return this.load(text);
    }

    setupDismissButton() {
        this.dismissButton = DismissButtonActor.create({
            type: "object",
            backgroundColor: this._cardData.backgroundColor,
            parent: this,
            translation: this.dismissButtonPosition(),
            noSave: true,
            color: 0x222222});
        this.subscribe(this.dismissButton.id, "dismiss", "dismiss");
    }

    setupScrollBar(options) {
        if (this.scrollBar) {
            this.scrollBar.destroy();
        }
        if (!options.scrollBar) {return;}
        this.scrollBar = TextScrollBarActor.create({
            type: "object",
            name: "scroll bar",
            noSave: true,
            parent: this,
            barColor: options.barColor,
            knobColor: options.knobColor,
            barWidth: options.barWidth,
        });
    }

    dismissButtonPosition() {

        let barWidth = this._cardData.barWidth === undefined ? 0.1 : this._cardData.barWidth;
        let scrollBar = this._cardData.scrollBar ? barWidth : 0;
        return [this._cardData.width / 2 - (0.072) + scrollBar, this._cardData.height / 2 - (0.072), 0.06];
    }

    dismiss() {
        this.destroy();
    }
}

TextFieldActor.register("TextFieldActor");

class TextFieldPawn extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardPawn {
    constructor(actor) {
        super(actor);

        this.addToLayers("pointer");

        this.widgets = {};
        this.setupEditor();
        this.setupMesh();

        this.fonts = this.service("FontViewManager");

        this.listen("fontAsked", "fontAsked");
        this.listen("screenUpdate", "screenUpdate");

        this.setupFonts();
        if (!this.actor._cardData.readOnly) {
            this.addEventListener("pointerDown", "onPointerDown");
            this.addEventListener("pointerMove", "onPointerMove");
            this.addEventListener("pointerUp", "onPointerUp");
            this.addEventListener("keyDown", "keyDown");
        }

        this.subscribe(this.id, "scroll", "scroll");
        this.listen("cardDataSet", "cardDataUpdated");

        this.scrollBarRatio = 0;
    }

    destroy() {
        ["geometry", "material", "textGeometry", "textMaterial"].forEach((n) => {
            if (this[n]) {
                this[n].dispose();
            }
            this[n] = null;
        });
        super.destroy();
    }

    textScale() {
        return this.actor._cardData.textScale;
    }

    test() {
        // this.warota.insert(user, [{text: cEvt.key}]);
    }

    needsUpdate() {
        this.screenUpdate(this.warota.timezone);
    }

    randomColor(viewId) {
        let h = Math.floor(parseInt(viewId, 36) / (36 ** 10 / 360));
        let s = "40%";
        let l = "40%";
        return `hsl(${h}, ${s}, ${l})`;
    }

    cardDataUpdated(data) {
        if (data.o.backgroundColor !== data.v.backgroundColor || data.o.frameColor !== data.v.frameColor || data.o.fullBright !== data.v.fullBright) {
            let {depth, backgroundColor, frameColor, fullBright} = data.v;
            this.material = this.makePlaneMaterial(depth, backgroundColor, frameColor, fullBright);
            this.plane.material = this.material;
        }
    }

    changeMaterial(name, makeNew) {
        // we may still able to share the same material for all text instances
        // when we revive onbeforerender.
        if (this.textMaterial) {
            this.textMaterial.dispose();
        }
        let textMesh;
        if (!this.fonts.get(name)) {return;}
        let texture = this.fonts.get(name).texture;
        this.textMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.RawShaderMaterial((0,_croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__.HybridMSDFShader)({
            map: texture,
            textureSize: texture.image.width,
            side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BackSide,
            transparent: true,
        }, _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE));

        if (makeNew) {
            textMesh = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(this.textGeometry, this.textMaterial);
            textMesh.name = "text";
        }
        return textMesh;
    }

    setupFonts() {
        let fontName = this.actor.doc.defaultFont;
        this.fontAsked(fontName).then(() => {
            let fonts = Array.from(this.actor.fonts.keys());
            let ps = fonts.map((v) => this.fonts.askFont(v));
            return Promise.all(ps);
        }).then(() => {
            this.warota.resetMeasurer();
            this.needsUpdate();
        });
    }

    setupTextMesh(name, font, color) {
        if (!this.textGeometry) {
            let TextGeometry = (0,_croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__.getTextGeometry)(_ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
            this.textGeometry = new TextGeometry({defaultColor: new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Color(color)});

            this.textMesh = this.changeMaterial(name, true);
            // setting a non-zero renderOrder helps prevent clashing with other objects,
            // which can lead to blurred text.  123 is arbitrary.
            this.textMesh.renderOrder = 123;
            this.plane.add(this.textMesh);
        }

        let layout = _warota_js__WEBPACK_IMPORTED_MODULE_6__.fontRegistry.hasLayout(name);
        if (!layout) {
            let TextLayout = (0,_croquet_hybrid_msdf_text__WEBPACK_IMPORTED_MODULE_2__.getTextLayout)(_ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE);
            layout = new TextLayout({font});
            _warota_js__WEBPACK_IMPORTED_MODULE_6__.fontRegistry.addLayout(name, layout);
        }
    }

    updateMesh(stringInfo) {
        let {fontName, drawnStrings} = stringInfo;
        if (!this.fonts.get(fontName)) {return;}
        let font = this.fonts.get(fontName).font;

        let fudgeFactor = this.fonts.fudgeFactors.get(fontName);

        let layout = _warota_js__WEBPACK_IMPORTED_MODULE_6__.fontRegistry.hasLayout(fontName);
        if (!layout) {return;}

        let glyphs = layout.computeGlyphs({font, drawnStrings, fudgeFactor});

        this.textMesh.scale.x = this.textScale();
        this.textMesh.scale.y = -this.textScale();
        this.textGeometry.update({font, glyphs});
    }

    updateShape(options) {
        super.updateShape(options);
        ["geometry", "material", "textGeometry", "textMaterial"].forEach((n) => {
            if (this[n]) {
                this[n].dispose();
            }
            this[n] = null;
        });

        this.setupMesh();
        this.setupFonts();
    }

    setupMesh() {
        let { depth, opacity } = this.actor._cardData;
        if (depth === undefined) {depth = 0.01;}
        let cornerRadius = this.actor._cardData.cornerRadius;
        if (cornerRadius === undefined) {cornerRadius = 0.05;}
        let {backgroundColor, frameColor, fullBright} = this.actor._cardData;

        if (!backgroundColor) {
            backgroundColor = 0xFFFFFF;
        }
        if (!frameColor) {
            frameColor = 0x666666;
        }
        if (fullBright === undefined) {
            fullBright = false;
        }
        if (depth === 0) {
            this.geometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(0, 0);
        } else {
            this.geometry = this.roundedCornerGeometry(0, 0, depth, cornerRadius);
        }

        let material = this.makePlaneMaterial(depth, backgroundColor, frameColor, fullBright);
        if (opacity !== undefined && opacity !== 1) {
            (Array.isArray(material) ? material : [material]).forEach(m => {
                m.transparent = true;
                m.opacity = opacity;
            });
        }
        this.material = material;
        this.plane = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(this.geometry, this.material);
        this.plane.castShadow = true;
        this.plane.name = this.actor.name;
        this.shape.add(this.plane);

        this.clippingPlanes = [
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, 1, 0),  0),
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(0, -1, 0), 0),
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(-1, 0, 0), 0),
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(1, 0, 0), 0)
        ];
    }

    setupEditor() {
        let font = this.actor.doc.defaultFont;
        let fontSize = this.actor.doc.defaultSize;
        let extent = this.actor.extent;
        let autoResize = this.actor._cardData.autoResize;
        let singleLine = this.actor._cardData.singleLine;
        let margins =  this.actor._cardData.margins;
        let options = {width: extent.width, height: extent.height, font, fontSize, autoResize, singleLine, margins};

        this.warota = new _warota_js__WEBPACK_IMPORTED_MODULE_6__.Warota(options, this.actor.doc);
        this.warota.width(extent.width);
        this.options = options;

        this.user = {id: this.viewId, color: this.randomColor(this.viewId)};
        this.selections = {}; // {user: {bar: mesh, boxes: [mesh]}}

        this.subscribe(this.viewId, "synced", "synced");
    }

    fontAsked(fontName) {
        return this.fonts.askFont(fontName).then((font) => {
            return this.setupTextMesh(fontName, font.font, this.actor._cardData.color || 0x000000);
        }).then(() => {
            this.warota.resetMeasurer();
            return this.screenUpdate(this.warota.timezone);
        });
    }

    computeClippingPlanes() {
        let height = this.plane.geometry.parameters.height;
        let width = this.plane.geometry.parameters.width;
        let planes = [];
        let text = this.plane;
        if (Number.isNaN(text.matrixWorld.elements[0])) return [];
        for (let i = 0; i < 4; i++) {
            planes[i] = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane();
            planes[i].copy(this.clippingPlanes[i]);
            planes[i].constant = i < 2 ? height / 2 : width / 2;
            planes[i].applyMatrix4(text.matrixWorld);
        }
        planes._width = width;
        planes._height = height;
        return planes;
    }

    setWidth(pixels) {
        this.publish(this.actor.id, "setWidth", pixels);
        this.width(pixels);
    }

    width(pixels) {
        this.warota.width(pixels);
        this.screenUpdate(this.warota.timezone);
    }

    synced(value) {
        this.isSynced = value;
        if (!this.isSynced) {return;}
        this.warota.resetMeasurer();
        this.screenUpdate(this.warota.timezone);
    }

    getSynced() {
        let sm = this.service("SyncedStateManager");
        if (sm) {
            return sm.isSynced;
        }

        return this.isSynced;
    }

    accept() {
        this.publish(this.actor.id, "accept");
    }

    cookEvent(evt) {
        if (!evt.xyz) {return;}
        let vec = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...evt.xyz);
        let inv = this.renderObject.matrixWorld.clone().invert();
        let vec2 = vec.applyMatrix4(inv);

        let width = this.plane.geometry.parameters.width;
        let height = this.plane.geometry.parameters.height;

        let x = ((width / 2) + vec2.x) / this.textScale();
        let y = ((height / 2) - vec2.y + this.getScrollTop(height)) / this.textScale();

        return {x, y};
    }

    onPointerDown(evt) {
        if (this.actor._cardData.readOnly) {return;}
        let fm = this.service("KeyFocusManager");
        fm.setKeyboardInput(this);

        let cooked = this.cookEvent(evt);
        if (!cooked) {return;}
        this.warota.mouseDown(cooked.x, cooked.y, cooked.y, this.user);
    }

    onPointerMove(evt) {
        if (this.actor._cardData.readOnly) {return;}
        let cooked = this.cookEvent(evt);
        if (!cooked) {return;}
        this.warota.mouseMove(Math.max(cooked.x, 0), cooked.y, cooked.y, this.user);
        this.changed();
    }

    onPointerUp(evt) {
        if (this.actor._cardData.readOnly) {return;}
        let cooked = this.cookEvent(evt);
        if (!cooked) {return;}
        this.warota.mouseUp(cooked.x, cooked.y, cooked.y, this.user);
        this.changed();
    }

    newCanonicalizeEvent(evt) {
        if (evt.type === "input" && evt.inputType === "insertText" && !evt.isComposing) {
            let fm = this.service("KeyFocusManager");
            let key = fm.hiddenInput.value;
            fm.hiddenInput.value = "";
            let spec = {
                keyCombo: "",
                key: key,
                shiftKey: false,
                altKey: false,
                ctrlKey: false,
                metaKey: false,
                altGraphKey: false,
                isFunctionKey: false,
                isModified: false,
                onlyModifiers: false,
                onlyShiftModifier: null,
                type: evt.type,
                keyCode: evt.keyCode
            };
            return spec;
        }
        return null;
    }

    eventFromField() {
        let fm = this.service("KeyFocusManager");
        let key = fm.hiddenInput.value;
        fm.hiddenInput.value = "";
        let spec = {
            keyCombo: "",
            key: key,
            shiftKey: false,
            altKey: false,
            ctrlKey: false,
            metaKey: false,
            altGraphKey: false,
            isFunctionKey: false,
            isModified: false,
            onlyModifiers: false,
            onlyShiftModifier: null,
            type: "",
            keyCode: 0
        };
        return spec;
    }

    simpleInput(text, evt) {
        let user = this.user;
        let selection = this.actor.content.selections[this.viewId];
        let style = this.actor.styleAt(Math.max(selection ? selection.start - 1 : 0, 0));

        this.warota.insert(user, [{text, style}]);
        this.changed(true);
        evt.preventDefault();
        return true;
    }

    input(evt) {
        if (this.actor._cardData.readOnly) {return;}
        let cEvt = this.newCanonicalizeEvent(evt);
        if (!cEvt) {return false;}
        let user = this.user;
        let selection = this.actor.content.selections[this.viewId];
        let style = this.actor.styleAt(Math.max(selection ? selection.start - 1 : 0, 0));
        this.warota.insert(user, [{text: cEvt.key, style: style}]);
        this.changed(true);
        evt.preventDefault();
        return true;
    }

    keyDown(evt) {
        let cEvt;
        if (evt.key === "Enter") {
            let hiddenInput = this.service("KeyFocusManager").hiddenInput;
            if (hiddenInput.value !== "") {
                hiddenInput.value = "";
                cEvt = this.eventFromField();
            } else {
                cEvt = (0,_warota_js__WEBPACK_IMPORTED_MODULE_6__.canonicalizeKeyboardEvent)(evt);
            }
        } else {
            cEvt = (0,_warota_js__WEBPACK_IMPORTED_MODULE_6__.canonicalizeKeyboardEvent)(evt);
        }

        let user = this.user;
        if (!cEvt) {return true;}

        if (cEvt.onlyModifiers) {return true;}

        // what has to happen here is that the kinds of keycombo that browser need to pass
        // through, and the kinds that the editor handles are different.
        // We need to separated them, and for the latter, the text commands list has
        // to be tested here.
        if (["Meta-S", "Ctrl-S", "Alt-S"].includes(cEvt.keyCombo)) {
            this.accept();
            evt.preventDefault();
            return true;
        }

        if (["Meta-Z", "Ctrl-Z", "Alt-Z"].includes(cEvt.keyCombo)) {
            this.undo();
            evt.preventDefault();
            return true;
        }

        if (["Meta-C", "Ctrl-C", "Alt-C"].includes(cEvt.keyCombo)) {
            this.copy();
            evt.preventDefault();
            return true;
        }

        if (["Meta-X", "Ctrl-X", "Alt-X"].includes(cEvt.keyCombo)) {
            this.cut();
            evt.preventDefault();
            return true;
        }

        if (["Meta-V", "Ctrl-V", "Alt-V"].includes(cEvt.keyCombo)) {
            this.paste();
            evt.preventDefault();
            return true;
        }

        if (cEvt.keyCode === 13) {
            if (this.actor["enterToAccept"]) {
                evt.preventDefault();
                this.accept();
                return true;
            }
            return this.simpleInput("\n", evt);
        }
        if (cEvt.keyCode === 32) {
            return this.simpleInput(" ", evt);
        }
        if (cEvt.keyCode === 9) {
            return this.simpleInput("\t", evt);
        }

        const handled = this.warota.handleKey(user, cEvt.keyCode, cEvt.shiftKey, cEvt.ctrlKey || cEvt.metaKey);

        if (!handled && !(cEvt.ctrlKey || cEvt.metaKey)) {
            this.warota.insert(user, [{text: cEvt.key}]);
            this.changed(true);
            evt.preventDefault();
            return true;
        }
        if (handled) {
            evt.preventDefault();
            this.changed(true);
        }
        return false;
    }

    copy(_evt) {
        let isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);
        let text = this.warota.selectionText(this.user);

        let clipboardAPI = () => {
            if (navigator.clipboard) {
                return navigator.clipboard.writeText(text).then(() => true, () => false);
            }
            return Promise.resolve(false);
        };

        clipboardAPI().then((result) => {
            if (!result) {
                let { copyElement } = this.service("KeyFocusManager");

                if (!isiOSDevice) {
                    copyElement.value = text;
                    copyElement.select();
                    copyElement.setSelectionRange(0, 99999);
                    document.execCommand("copy");
                    return;
                }

                let range = document.createRange();
                range.selectNodeContents(copyElement);
                copyElement.textContent = text;

                let selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                copyElement.setSelectionRange(0, 100000);
                document.execCommand('copy');
            }
        });
    }

    cut(evt) {
        this.copy(evt);
        this.warota.insert(this.user, [{text: ""}]);//or something else to keep undo sane?
        this.changed(true);
        return true;
    }

    paste(_evt) {
        //let isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

        let clipboardAPI = () => {
            if (navigator.clipboard) {
                return navigator.clipboard.readText().then((text) => text, () => null);
            }
            return Promise.resolve(null);
        };

        return clipboardAPI().then((result) => {
            if (result === null) {
                let { copyElement } = this.service("KeyFocusManager");
                copyElement.focus();
                copyElement.textContent = "";
                document.execCommand("paste");
                return copyElement.textContent;
            }
            return result;
        }).then((text) => {
            this.warota.insert(this.user, [{text: text}]);
            // evtxo.preventDefault();
            this.changed(true);
        });
    }

    undo() {
        this.publish(this.actor.id, "undoRequest", this.user);
    }

    changed(toScroll) {
        let events = this.warota.events;
        this.warota.resetEvents();
        if (events.length > 0) {
            this.scrollNeeded = !this.singleLine && toScroll;
            this.publish(this.actor.id, "editEvents", events);
        }
    }

    screenUpdate(timezone) {
        this.warota.timezone = timezone;
        if (!this.getSynced()) {return;}
        this.warota.layout();
        this.showText();
        this.setExtent();
        this.showSelections();
        if (this.scrollNeeded) {
            this.scrollNeeded = false;
            // this.scrollSelectionToView();
        }
    }

    showText() {
        let drawnStrings = [];
        for (let i = 0; i < this.warota.words.length - 1; i++) {
            let word = this.warota.words[i];
            let str = {
                x: word.left,
                y: word.top,
                string: word.text,
                style: word.style && word.style.color
            };
            drawnStrings.push(str);
        }

        let extent = this.actor.extent;

        this.updateMesh({fontName: this.warota.doc.defaultFont, extent, drawnStrings});
    }

    setStyle(style) {
        this.warota.setStyle(this.user, style, false);
        this.changed();
    }

    mergeStyle(style) {
        this.warota.setStyle(this.user, style, true);
        this.changed();
    }

    getScrollTop(height) {
        // scrollTop is in meters, telling how far above the top y goes outside of the original location.
        // barRatio = 0 -> 0 meters
        // barRatio = 1 -> text's doc height - height of visible area + a line worth height.

        let docHeight = this.warota.docHeight * this.textScale();
        let maxOffset = docHeight - height + 0.1;
        if (docHeight <= height) {return 0;}
        return maxOffset * this.scrollBarRatio;
    }

    setExtent() {
        let extent = this.actor.extent;
        let depth = this.actor.depth;
        let cornerRadius = this.actor._cardData.cornerRadius || 0.05;
        let autoResize = this.actor._cardData.autoResize;
        if (!this.textMesh) {return;}
        let newWidth = (autoResize ? this.warota.newWidth : extent.width) * this.textScale();
        let newHeight = (autoResize ? this.warota.docHeight : extent.height) * this.textScale();
        if (newWidth !== this.plane.geometry.parameters.width ||
            newHeight !== this.plane.geometry.parameters.height ||
            depth !== this.plane.geometry.parameters.depth) {
            let geometry = depth === 0 ? new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(newWidth, newHeight) : this.roundedCornerGeometry(newWidth, newHeight, depth, cornerRadius);
            this.plane.geometry = geometry;
            if (this.geometry) {
                this.geometry.dispose();
                this.geometry = null;
            }
            this.geometry = geometry;
        }

        let scrollTop = this.getScrollTop(newHeight);

        this.textMesh.position.x = -newWidth / 2;
        this.textMesh.position.y = newHeight / 2 + scrollTop;
        this.textMesh.position.z = depth + 0.005;

        this.setScrollBarExtent(extent, {width: newWidth, height: newHeight});

        let bounds = {left: 0, top: scrollTop / this.textScale(), bottom: (newHeight + scrollTop) / this.textScale(), right: newWidth / this.textScale()};
        this.textMesh.material.uniforms.corners.value = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector4(bounds.left, bounds.top, bounds.right, bounds.bottom);
    }

    setTextRenderingBounds(bounds) {
        if (this.textMesh?.material?.uniforms?.corners) {
            this.textMesh.material.uniforms.corners.value = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector4(bounds.left, bounds.top, bounds.right, bounds.bottom);
        }
    }

    setScrollBarExtent(pixels, extent) {
        let scrollBar = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.GetPawn)(this.actor.scrollBar?.id);
        if (scrollBar) {
            let height = this.plane.geometry.parameters.height;
            let docHeight = this.warota.docHeight * this.textScale();
            let scrollTop = this.getScrollTop(height);

            let minRatio = 0.1 / height;

            if (docHeight > height) {
                height -= 0.1;
            }

            let pos = scrollTop / docHeight;
            let ratio = Math.min(height / docHeight, 1);
            ratio = Math.max(minRatio, ratio);
            scrollBar.setExtent(extent, pos, ratio);
        }
    }

    scroll(scrollBarRatio) {
        this.scrollBarRatio = scrollBarRatio;
        this.needsUpdate();
    }

    ensureSelection(id) {
        let sel = this.selections[id];
        let modelSel = this.actor.content.selections[id];
        let color = modelSel.color;
        if (!color) {
            color = "blue";
        }

        if (!sel) {
            let bar = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneBufferGeometry(0.1, 0.1), new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshBasicMaterial({color}));
            bar.visible = false;
            this.plane.add(bar);
            bar.name = "caret";
            bar.onBeforeRender = () => this.selectionBeforeRender(bar);

            let boxes = [];
            for (let i = 0; i < 3; i++) {
                let box = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneBufferGeometry(0, 0), new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshBasicMaterial({color}));
                box.visible = false;
                box.name = `box${i}`;
                box.onBeforeRender = () => this.selectionBeforeRender(box);

                this.plane.add(box);
                boxes.push(box);
            }
            sel = {bar, boxes};
        }
        this.selections[id] = sel;
        return sel;
    }

    selectionBeforeRender(obj) {
        obj.material.clippingPlanes = this.computeClippingPlanes();
    }

    showSelections() {
        let depth = this.actor.depth || 0;
        let unused = {};
        for (let k in this.selections) {
            unused[k] = this.selections[k];
        }

        let ts = this.textScale();
        let width = this.plane.geometry.parameters.width;
        let height = this.plane.geometry.parameters.height;
        let scrollTop = this.getScrollTop(height);

        for (let k in this.actor.content.selections) {
            delete unused[k];
            let thisSelection = this.ensureSelection(k);
            thisSelection.boxes.forEach(box => box.visible = false);
            let selection = this.actor.content.selections[k];

            if (selection.end === selection.start) {
                let caret = thisSelection.bar;
                caret.visible = true;
                let caretRect = this.warota.barRect(selection);
                caretRect.width = ts <= 0.001 ? 5 : 2;
                let geom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneBufferGeometry(caretRect.width * ts, caretRect.height * ts);
                let old = caret.geometry;
                caret.geometry = geom;
                if (old) {
                    old.dispose();
                }

                /*
                if (!caret.material.clippingPlanes ||
                    caret.material.clippingPlanes._width !== width ||
                    caret.material.clippingPlanes._height !== height) {
                    caret.material.clippingPlanes = this.computeClippingPlanes();
                }
                */

                let left = (-width / 2) + (caretRect.left + 6) * ts; // ?
                let top = (height / 2) - (caretRect.top + caretRect.height / 2 + 4) * ts + scrollTop;
                caret.position.set(left, top, depth + 0.001);
            } else {
                let rects = this.warota.selectionRects(selection);
                let boxes = thisSelection.boxes;
                for (let i = 0; i < 3; i++) {
                    let box = boxes[i];
                    let rect = rects[i];
                    box.visible = false;

                    if (rect) {
                        let left = (-width / 2) + ((rect.width / 2) + rect.left + 8) * ts; // ?
                        let top = (height / 2) - (rect.top + rect.height / 2 + 4) * ts + scrollTop;
                        let rWidth = rect.width * ts; // ?
                        let rHeight = rect.height * ts;

                        let geom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneBufferGeometry(rWidth, rHeight, 2, 2);
                        box.geometry = geom;
                        box.position.set(left, top, depth + 0.001);
                        box.visible = true;

                        /*
                        if (!box.material.clippingPlanes ||
                            box.material.clippingPlanes._width !== width ||
                            box.material.clippingPlanes._height !== height) {
                            console.log("box compute clipping planes");
                            box.material.clippingPlanes = this.computeClippingPlanes();
                        }
                        */
                    }
                }
            }
        }
        for (let k in unused) {
            this.selections[k].bar.removeFromParent();
            this.selections[k].boxes.forEach((box) => box.removeFromParent());
            delete this.selections[k];
        }
        this.publish(this.id, "selectionUpdated");
    }

    addWidget(name, dom) {
        if (this.widgets[name]) {
            this.removeWidget(name, dom);
        }
        this.widgets[name] = dom;
        this.selectionPane.appendChild(dom);
    }

    removeWidget(name, dom) {
        delete this.widgets[name];
        dom.remove();
    }

    get hitNormal() {
        return [0, 0, 1];
    }
}

class DismissButtonActor extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardActor {
    get pawn() {return DismissButtonPawn;}
}

DismissButtonActor.register("DismissButtonActor");

class DismissButtonPawn extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardPawn {
    constructor(actor) {
        super(actor);
        this.addToLayers("pointer");

        if (this.back) {
            this.shape.remove(this.back);
            this.shape.children = [];
        }

        let backgroundColor = (this.actor._cardData.backgroundColor !== undefined)
            ? this.actor._cardData.backgroundColor
            : 0xcccccc;

        let color = (this.actor._cardData.color !== undefined)
            ? this.actor._cardData.color
            : 0x222222;

        let backGeometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BoxGeometry(0.08, 0.08, 0.00001);
        let backMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshStandardMaterial({
            color: backgroundColor,
            side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide
        });

        this.back = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(backGeometry, backMaterial);

        let dismissGeometry = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.BoxGeometry(0.07, 0.02, 0.001);
        let dismissMaterial = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshStandardMaterial({
            color: color,
            side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide
        });

        let button = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(dismissGeometry, dismissMaterial);
        button.position.set(0, 0, 0.00001);

        this.back.add(button)

        this.shape.add(this.back);

        this.addEventListener("pointerDown", "dismiss");
    }

    dismiss(_evt) {
        this.publish(this.actor.id, "dismiss");
    }
}

class TextScrollBarActor extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardActor {
    get pawn() {return TextScrollBarPawn;}
}

TextScrollBarActor.register("TextScrollBarActor");

class TextScrollBarPawn extends _card_js__WEBPACK_IMPORTED_MODULE_3__.CardPawn {
    constructor(actor) {
        super(actor);
        let barColor = actor._cardData.barColor === undefined ? 0x666666 : actor._cardData.barColor;
        let knobColor = actor._cardData.knobColor === undefined ? 0xcccccc : actor._cardData.knobColor;
        let barWidth = actor._cardData.barWidth === undefined ? 0.1 : actor._cardData.barWidth;
        let geom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(barWidth, 0);
        let mat = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshBasicMaterial({color: barColor, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide});
        this.scrollMesh = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(geom, mat);
        this.scrollMesh.name = "scroll";

        let knobGeom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(barWidth, 0);
        let knobMat = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.MeshBasicMaterial({color: knobColor, side: _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.DoubleSide});
        this.scrollKnobMesh = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Mesh(knobGeom, knobMat);
        this.scrollKnobMesh.name = "scrollKnob";

        this.scrollKnobMesh.position.set(0, 0, 0.001);
        this.scrollMesh.add(this.scrollKnobMesh);
        this.shape.add(this.scrollMesh);

        this.addEventListener("pointerDown", "pointerDown");
        this.addEventListener("pointerMove", "pointerMove");
        this.addEventListener("pointerUp", "pointerUp");
    }

    pointerDown(evt) {
        this.interactionPlane = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Plane();
        let normal = (0,_croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.v3_transform)([0, 0, 1], this.global);
        this.interactionPlane.setFromNormalAndCoplanarPoint(
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...normal),
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...evt.xyz));
        let avatar = this.getMyAvatar();
        avatar.addFirstResponder("pointerMove", {}, this);
    }

    pointerMove(evt) {
        let origin = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...evt.ray.origin);
        let direction = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...evt.ray.direction);
        let ray = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Ray(origin, direction);
        let dragPoint = ray.intersectPlane(
            this.interactionPlane,
            new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3()
        );

        let y = this.cookEvent(dragPoint.toArray());
        if (this.parent) {
            this.publish(this.parent.id, "scroll", y);
        }
    }

    pointerUp(_evt) {
        let avatar = this.getMyAvatar();
        avatar.removeFirstResponder("pointerMove", {}, this);
    }

    cookEvent(xyz) {
        if (!xyz) {return;}
        let vec = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.Vector3(...xyz);
        let inv = this.shape.matrixWorld.clone().invert();
        let vec2 = vec.applyMatrix4(inv);

        let height = this.scrollMesh.geometry.parameters.height;

        let y = ((height / 2) - vec2.y);
        return Math.max(Math.min(y / height, 1), 0);
    }

    setExtent(extent, scrollRatio, knobRatio) {
        let barWidth = this.actor._cardData.barWidth === undefined ? 0.1 : this.actor._cardData.barWidth;
        if (this.scrollMesh.geometry.parameters.height !== extent.height) {
            let geom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(barWidth, extent.height);
            this.scrollMesh.geometry.dispose();
            this.scrollMesh.geometry = geom;
        }

        let knobHeight = extent.height * knobRatio;
        if (this.scrollKnobMesh.geometry.parameters.height !== knobHeight) {
            let knobGeom = new _ThreeRender_js__WEBPACK_IMPORTED_MODULE_1__.THREE.PlaneGeometry(barWidth, knobHeight);
            this.scrollKnobMesh.geometry.dispose();
            this.scrollKnobMesh.geometry = knobGeom;
        }

        let top = extent.height / 2 - extent.height * scrollRatio;
        top -= knobHeight / 2;

        this.scrollKnobMesh.position.set(0, top, 0.0015);
        this.set({translation: [extent.width / 2 + barWidth / 2, 0, 0.001]});
    }
}


/***/ }),

/***/ "./src/text/warota.js":
/*!****************************!*\
  !*** ./src/text/warota.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Doc": () => (/* binding */ Doc),
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "Measurer": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.Measurer),
/* harmony export */   "Warota": () => (/* binding */ Warota),
/* harmony export */   "Wrap": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.Wrap),
/* harmony export */   "canonicalizeKeyboardEvent": () => (/* reexport safe */ _text_commands_js__WEBPACK_IMPORTED_MODULE_1__.canonicalizeKeyboardEvent),
/* harmony export */   "eof": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof),
/* harmony export */   "equalStyle": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.equalStyle),
/* harmony export */   "fontRegistry": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.fontRegistry),
/* harmony export */   "isNewline": () => (/* reexport safe */ _wrap_js__WEBPACK_IMPORTED_MODULE_0__.isNewline),
/* harmony export */   "setLastFontLoadedTime": () => (/* binding */ setLastFontLoadedTime)
/* harmony export */ });
/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap.js */ "./src/text/wrap.js");
/* harmony import */ var _text_commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-commands.js */ "./src/text/text-commands.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io






// import MockContext from "./MockContext.js";

let lastFontLoadedTime = 0;
function setLastFontLoadedTime(ms) {
    lastFontLoadedTime = ms;
}

function runLength(ary) {
    return ary.map(c => c.text).reduce((s, x) => x.length + s, 0);
}

class Doc {
    constructor(options) {
        this.runs = []; // [{text: str, (opt)style: {(opt)font: str, (opt)size: num, (opt)color: str, (opt)bold: boolean, (opt)italic: boolean}}]
        this.intervals = []; // [{start: num, end: num}]
        this.selections = {}; // {user: {start: num, end: num, isBol: boolean, color: string}}

        this.defaultFont = options.defaultFont || "Roboto";
        this.defaultSize = options.defaultSize || 10;
        // After the canonicalization step, the intervals and runs at least has one element
        // that denotes the end of file
    }

    load(runs) {
        // runs does not have start and end (human would not want to add them by hand).
        // The canonicalize method adds them. save() strip them out.
        this.canonicalize(runs);
    }

    setDefault(font, size) {
        this.defaultFont = font || this.defaultFont;
        this.defaultSize = size || this.defaultSize;
    }

    doEvent(evt) {
        if (evt.type === "insert") {
            this.doInsert(evt.user, evt.runs);
        } else if (evt.type === "delete") {
            this.doDelete(evt.user, evt.backspace);
        } else if (evt.type === "select") {
            this.doSelect(evt.user, evt.start, evt.end, evt.isBol);
        } else if (evt.type === "setStyle") {
            this.doSetStyle(evt.user, evt.style, evt.merge);
        }
    }

    doInsert(user, runs) {
        // runs: [{text: <string>, (opt)style: {}}]
        let selection = this.ensureSelection(user);
        let enter = runs.length > 0 && runs[runs.length - 1].text === "\n";
        if (selection.start === selection.end) {
            let [_run, runIndex] = this.findRun(selection.start);
            let interval = this.intervals[runIndex];
            if (interval.end !== selection.start && interval.start !== selection.start) {
                // that is, pos is within the run
                this.splitRunAt(runIndex, selection.start - interval.start);
                runIndex += 1;
            } else if (interval.end === selection.start) {
                runIndex += 1;
            }
            this.runs.splice(runIndex, 0, ...runs);
            this.canonicalize(this.runs, interval.start);
            this.updateSelectionsInsert(user, selection.start, runLength(runs), enter);
        } else {
            this.doDelete(user, true);
            this.doInsert(user, runs);
        }
    }

    doDelete(user, isBackspace) {
        let selection = this.ensureSelection(user);
        let start, end;
        let length = this.length();

        if (selection.start === selection.end) {
            if ((!isBackspace && selection.start === length)
               || (isBackspace && selection.start === 0)) {
                return;
            }

            if (isBackspace) {
                start = selection.start - 1;
                end = selection.end;
            } else {
                start = selection.start;
                end = selection.end + 1;
            }
        } else {
            start = selection.start;
            end = selection.end;
        }

        let [_run, runIndex] = this.findRun(start);
        let interval = this.intervals[runIndex];

        if (interval.end !== start) { // that is, pos is within the run
            this.splitRunAt(runIndex, start - interval.start);
            // here, previous run ends at pos. and next one starts at pos.
            runIndex += 1;
        }

        let [_endRun, endRunIndex] = this.findRun(end);
        let endRunInterval = this.intervals[endRunIndex];

        let reminder = end - endRunInterval.start;
        if (end !== endRunInterval.end && reminder !== 0) {
            this.splitRunAt(endRunIndex, reminder);
            endRunIndex += 1;
        } else if (end === endRunInterval.end) {
            endRunIndex += 1;
        }

        this.runs.splice(runIndex, endRunIndex - runIndex);
        this.canonicalize(this.runs);
        this.updateSelectionsDelete(user, start, end);
    }

    doSelect(user, start, end, isBol) {
        this.selections[user.id] = {start, end, isBol, color: user.color};
    }

    doSetStyle(user, style, merge) {
        let selection = this.selections[user.id];
        if (selection.start === selection.end) {return;}

        let start = selection.start;
        let end = selection.end;

        // first
        let [run, runIndex] = this.findRun(start);
        let interval = this.intervals[runIndex];

        if (interval.start !== start) {
            this.splitRunAt(runIndex, start - interval.start);
        }

        // end
        [run, runIndex] = this.findRun(end);
        interval = this.intervals[runIndex];
        if (interval.end !== end) {
            this.splitRunAt(runIndex, end - interval.start);
        }

        let s = start;
        let count = 0;
        while (s < end && count < 10000) {
            count++;
            [run, runIndex] = this.findRun(s);
            interval = this.intervals[runIndex];
            if (interval.end <= end) {
                let newStyle = merge ? {...run.style, ...style} : {...style};
                run.style = newStyle;
                s = interval.end;
            }
        }
        this.canonicalize(this.runs);
    }

    length() {
        // excludes eof
        return this.intervals[this.intervals.length - 1].end - 1;
    }

    copyRun(run) {
        if (!run) {return run;}
        let obj = {};
        obj.text = run.text;
        if (run.style) {
            obj.style = run.style;
        }
        return obj;
    }

    canonicalize(runs) {
        // there are two cases: whether the runs has eof or not
        let result = [];
        let newIntervals = [];

        let start = 0;

        let addEOF = () => {
            result.push({text: _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof});
            newIntervals.push({start: start, end: start + 1});
        };

        if (runs.length === 0) {
            addEOF();
            this.runs = result;
            this.intervals = newIntervals;
            return;
        }

        let lastRun = this.copyRun(runs[0]);

        let i = 1;
        let run = this.copyRun(runs[i]);
        while (run && run.text !== _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {
            if ((0,_wrap_js__WEBPACK_IMPORTED_MODULE_0__.equalStyle)(lastRun.style, run.style)) {
                lastRun.text += run.text;
            } else {
                let end = start + lastRun.text.length;
                let interval = {start, end};
                start = end;
                result.push(lastRun);
                newIntervals.push(interval);
                lastRun = run;
            }
            i++;
            run = this.copyRun(runs[i]);
        }
        let end = start + lastRun.text.length;
        let interval = {start, end};
        result.push(lastRun);
        newIntervals.push(interval);
        start = end;

        if (result[result.length - 1].text !== _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {
            addEOF();
        }
        this.runs = result;
        this.intervals = newIntervals;
    }

    styleAt(index) {
        let [startRun, _startRunIndex] = this.findRun(index);
        return startRun.style;
    }

    save(optStart, optEnd) {
        // intervals is dropped as an external form
        let runs = this.runs;
        let intervals = this.intervals;
        let start = optStart !== undefined ? optStart : 0;
        let end = optEnd !== undefined ? optEnd : this.length();
        let startRun, startRunIndex;
        let endRun, endRunIndex;
        let run, obj, interval;
        [startRun, startRunIndex] = this.findRun(start);
        [endRun, endRunIndex] = this.findRun(end);

        if (startRunIndex === endRunIndex) {
            interval = intervals[startRunIndex];
            obj = this.copyRun({text: startRun.text.slice(start - interval.start, end - interval.start)});
            return [obj];
        }

        let result = [];
        run = startRun;
        interval = intervals[startRunIndex];

        obj = this.copyRun({text: run.text.slice(start - interval.start)}, true);
        result.push(obj);

        for (let i = startRunIndex + 1; i <= endRunIndex - 1; i++) {
            obj = this.copyRun(runs[i]);
            result.push(obj);
        }

        interval = intervals[endRunIndex];

        obj = this.copyRun({text: endRun.text.slice(0, end - interval.start)});
        if (obj.text !== _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {
            result.push(obj);
        }
        return result;
    }

    plainText(optStart, optEnd) {
        return this.save(optStart, optEnd).map(c => c.text).join('');
    }

    splitRunAt(runIndex, sizeInRun) {
        let run = this.runs[runIndex];
        let interval = this.intervals[runIndex];

        let one = this.copyRun({text: run.text.slice(0, sizeInRun),
                                style: run.style});
        let two = this.copyRun({text: run.text.slice(sizeInRun, run.text.length),
                                style: run.style});
        this.runs.splice(runIndex, 1, one, two);

        one = {start: interval.start, end: interval.start + sizeInRun};
        two = {start: interval.start + sizeInRun, end: interval.end};
        this.intervals.splice(runIndex, 1, one, two);
    }

    findRun(pos) {
        let runs = this.runs;
        let intervals = this.intervals;
        let interval;
        for (let ind = 0; ind < runs.length; ind++) {
            interval = intervals[ind];
            if (interval.start <= pos && pos < interval.end) {
                return [runs[ind], ind];
            }
        }
        if (pos === interval.end) {
            return [runs[runs.length - 1], runs.length - 1];
        }
        return [null, null];
    }

    updateSelectionsInsert(user, pos, length, wasEnter) {
        for (let k in this.selections) {
            let sel = this.selections[k];
            if (k === user.id) {
                this.selections[k] = {start: pos + length, end: pos + length, isBol: wasEnter, color: user.color};
            } else {
                if (pos < sel.start) {
                    this.selections[k] = {start: sel.start + length, end: sel.end + length, isBol: wasEnter, color: sel.color};
                } else if (sel.start < pos && pos < sel.end) {
                    this.selections[k] = {start: sel.start, end: sel.end + length, isBol: wasEnter, color: sel.color};
                } /*else if (sel.end <= pos) {}*/
            }
        }
    }

    updateSelectionsDelete(user, start, end) {
        let len = end - start;
        for (let k in this.selections) {
            let sel = this.selections[k];
            if (k === user.id) {
                this.selections[k] = {start, end: start, color: user.color};
            } else {
                if (end <= sel.start) {
                    this.selections[k] = {start: sel.start - len, end: sel.end - len, color: sel.color};
                } else if (sel.end <= start) {
                } else if (start <= sel.start && sel.end <= end) {
                    this.selections[k] = {start, end: start, color: sel.color};
                } else if (start < sel.start && end < sel.end) {
                    this.selections[k] = {start, end: sel.end - len, color: sel.color};
                } else if (sel.start <= start && end < sel.end) {
                    this.selections[k] = {start: sel.start, end: sel.end - len, color: sel.color};
                } else if (sel.start <= start && start < sel.end) {
                    this.selections[k] = {start: sel.start, end: start, color: sel.color};
                }
            }
            let [run, _runIndex] = this.findRun(this.selections[k].start - 1);
            this.selections[k].isBol = run && (0,_wrap_js__WEBPACK_IMPORTED_MODULE_0__.isNewline)(run.text[run.text.length - 1]);
        }
    }

    setSelections(selections) {
        this.selections = JSON.parse(JSON.stringify(selections));
    }

    getSelections() {
        return JSON.parse(JSON.stringify(this.selections));
    }

    ensureSelection(user) {
        let sel = this.selections[user.id];
        if (!sel) {
            sel = {start: 0, end: 0, color: user.id};
            this.selections[user.id] = sel;
        }
        return sel;
    }

    snapshotFrom(content, user, timezone) {
        return {type: "snapshot",
                user,
                content: {runs: content.runs,
                          selections: JSON.parse(JSON.stringify(content.selections))},
                timezone};
    }

    undoEvent(evt, content, doc) {
        let queue = content.queue;
        let user = evt.user; // {id, color}

        function findLast(q, event) {
            for (let i = q.length - 1; i >= 0; i--) {
                if (q[i].user.id === event.user.id && q[i].timezone === evt.timezone && q[i].type !== "snapshot") {
                    return i;
                }
            }
            return -1;
        }

        function findSnapshot(q, i) {
            for (; i >= 0; i--) {
                if (q[i].type === "snapshot") {
                    return i;
                }
            }
            return -1;
        }

        let undoIndex = findLast(queue, evt);
        if (undoIndex < 0) {return content.timezone;}

        let undoEvent = queue[undoIndex];
        let snapshotIndex = findSnapshot(queue, undoIndex);
        if (snapshotIndex < 0) {return content.timezone;}

        let snapshot = queue[snapshotIndex];
        let c = snapshot.content;
        doc.load(c.runs);
        doc.setSelections(c.selections);

        let newQueue = [];
        for (let i = 0; i <= snapshotIndex; i++) {
            newQueue.push(queue[i]);
        }

        for (let i = snapshotIndex + 1; i < undoIndex; i++) {
            doc.doEvent(queue[i]);
            newQueue.push(queue[i]);
        }

        for (let i = undoIndex + 1; i < queue.length; i++) {
            if (queue[i].type !== "snapshot") {
                doc.doEvent(queue[i]);
                newQueue.push(queue[i]);
            }
        }

        content.timezone++;
        undoEvent.timezone = content.timezone;
        if (!content.undoStacks[user.id]) {
            content.undoStacks[user.id] = [];
        }

        content.undoStacks[user.id].push(undoEvent);
        content.selections = doc.getSelections();
        content.runs = doc.save();
        content.queue = newQueue;
        return content.timezone;
    }

    receiveEditEvents(events, content, doc) {
        // What this method assumes, and what this method does are:
        // - edit events from a client who lagged badly won't be processed.
        // - The model maintains the timezone counter, which is incremented once for a series
        //   of edit commands from a client (effectively, once in the invocation of
        //   this method).
        // - An event sent to the model (to this method) has a timezone value,
        //   which is the value the model sent to the view as the last view update. That is,
        //   the view commands are considered to be generated in that logical timezone.
        // - When an event arrives, first the timezone of the event is checcked to see
        //   if it is still considered recent enough.
        //   -- insert and delete events use the selection value in the model;
        //      so they don't have to be transformed.  They are puhsed into the list.
        //   -- a select event may be off as there are edit events already processed;
        //      so it has to be transformed against the events in the list with the same
        //      logical time or after but already in the list.
        // - The model executes new events, and update its data structure.
        // - Then, the early elements in the list are dropped as they are deemed to be
        //   past their life.
        // - The list is a part of the saved model. It will be saved with the string content.
        // Things are all destructively updated in content,

        let CUTOFF = 60;
        let queue = content.queue;
        let user = events[0].user; // {id, color}

        if (content.timezone % (CUTOFF / 6) === 0) {
            queue.push(this.snapshotFrom(content, user, content.timezone));
        }

        content.timezone++;

        if (queue.length > 0
            && (queue[queue.length - 1].timezone > events[0].timezone + CUTOFF)) {
            return [content.timezone, false];
        }

        function findFirst(q, event) {
            if (q.length === 0) {
                return 0;
            }
            if (q[queue.length - 1].timezone < event.timezone) {
                return q.length;
            }
            for (let i = q.length - 1; i >= 0; i--) {
                if (q[i].timezone < event.timezone) {
                    return i + 1;
                }
            }
            return 0;
        }

        function transform(n, o) {
            // it already assumes that n (for new) is newer than o (for old)
            // the first empty obj in assign is not necessary; but make it easier to debug
            if (n.type === "select") {
                if (o.type === "insert") {
                    if (o.pos <= n.start) {
                        return {...n, ...{start: n.start + o.length,
                                          end: n.end + o.length}};
                    }
                    if (n.start <= o.pos && o.pos <= n.end) {
                        return {...n, ...{end: n.end + o.length}};
                    }
                    return n;
                }
                if (o.type === "delete") {
                    if (n.end <= o.start) {
                        return n;
                    }
                    if (o.start <= n.start && n.end <= o.end) {
                        // subsume
                        return {...n, ...{start: o.start, end: o.start}};
                    }
                    if (o.end <= n.start) {
                        return n;
                    }
                    if (n.start <= o.start && n.end < o.end) {
                        return {...n, ...{end: o.start}};
                    }
                    if (o.start <= n.start && o.end < n.end) {
                        return {...n, ...{start: o.start, end: n.end - o.end}};
                    }
                }
                if (o.type === "select") {
                    return n;
                }
            }
            return n;
        }

        let thisQueue = [];
        let unseenIDs = {...content.selections};

        // all events in the variable 'events' should be in the same timezone;
        // so pick the zero-th one
        let ind = findFirst(queue, events[0]);

        events.forEach(event => {
            let t = event;
            if (ind >= 0) {
                for (let i = ind; i < queue.length; i++) {
                    t = transform(t, queue[i]);
                }
            }
            t.timezone = content.timezone;
            thisQueue.push(t);
        });

        queue.push(...thisQueue);

        // finish up by dropping old events
        ind = queue.findIndex(e => e.timezone > content.timezone - CUTOFF);
        for (let i = queue.length - 1; i >= 0; i--) {
            let e = queue[i];
            delete unseenIDs[e.user.id];
        }
        for (let k in unseenIDs) {
            delete content.selections[k];
            delete content.undoStacks[k];
        }
        queue.splice(0, ind);

        doc.setSelections(content.selections);
        let hasDone = false;
        thisQueue.forEach(e => {
            hasDone = hasDone || (e.type === "insert" || e.type === "delete");
            doc.doEvent(e);
        });

        content.runs = doc.save();
        content.selections = doc.getSelections();
        return [content.timezone, hasDone];
    }
}

class Warota {
    constructor(options, optDoc) {
        this.doc = optDoc || new Doc();

        this._width = 0;
        if (options.margins) {
            this.margins = options.margins;
        } else {
            this.margins = options.margins = {left: 0, top: 0, right: 0, bottom: 0};
        }

        this.options = options;

        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.relativeScrollBarWidth = 0.02;
        this.showsScrollbar = options.showScrollBar;
        this.isScrollable = true;

        this.resize(options.width, options.height);
        this.resizeToNumLinesOrFontSize(options);

        this.events = [];
        this.timezone = 0;
    }

    resetEvents() {
        this.events = [];
    }

    width(width) {
        if (width === undefined) {
            return this._width;
        }
        this._width = width;
        return null;
    }

    setTimezone(num) {
        this.timezone = num;
    }

    resize(width, height) {
        this.screenWidth = width;
        this.screenHeight = height;
    }

    resizeToNumLinesOrFontSize(options) {
        this.defaultMeasurer = new _wrap_js__WEBPACK_IMPORTED_MODULE_0__.Measurer();
        let lineHeight = this.defaultMeasurer.lineHeight(options.font, options.fontSize);
        let marginHeight = (options.margins.top + options.margins.bottom);
        let textScreenHeight = options.height - marginHeight;
        if (options.fontSize) {
            options.numLines = textScreenHeight / options.fontSize;
        } else {
            if (options.numLines) {
                options.fontSize = textScreenHeight / options.numLines;
            } else {
                options.numLines = 10;
                options.fontSize = textScreenHeight / options.numLines;
            }
        }

        let textScreenPixels = options.numLines * lineHeight;
        let heightInPixel = options.fontSize / lineHeight;
        let neededPixels = textScreenPixels + marginHeight * heightInPixel;

        this.pixelY = neededPixels;
        let scale = neededPixels / this.screenHeight;
        this.pixelX = this.screenWidth * scale;

        if (this.pixelX * this.relativeScrollBarWidth <= 30) {
            this.relativeScrollBarWidth = 30 / this.pixelX;
        }

        this.width(this.pixelX * (1.0 - (this.showsScrollbar ? this.relativeScrollBarWidth : 0)));
        this.lineHeight = lineHeight;
    }

    resetMeasurer() {
        this.defaultMeasurer = new _wrap_js__WEBPACK_IMPORTED_MODULE_0__.Measurer();
    }

    layout() {
        if (this.lastFontLoadedTimeChecked === undefined ||
            this.lastFontLoadedTimeChecked < lastFontLoadedTime) {
            this.resetMeasurer();
            this.lastFontLoadedTimeChecked = lastFontLoadedTime;
        }
        let options = this.options || {};
        let layoutWidth = options.singleLine ? Number.MAX_VALUE : this._width;
        let hMargin = this.margins.left + this.margins.right;
        let vMargin = this.margins.top + this.margins.bottom;
        let [lines, words] = new _wrap_js__WEBPACK_IMPORTED_MODULE_0__.Wrap().wrap(this.doc.runs, layoutWidth, this.defaultMeasurer, this.doc.defaultFont, this.doc.defaultSize, this.options.margins);
        this.lines = lines;
        this.words = words;

        this.hasLastEnter = false;
        if (this.lines.length - 2 >= 0) {
            let lastRealLine = this.lines[this.lines.length - 2];
            let penultimateWord = lastRealLine[lastRealLine.length - 1];
            this.hasLastEnter = (0,_wrap_js__WEBPACK_IMPORTED_MODULE_0__.isNewline)(penultimateWord.text);
        }

        let lastWord; // there should be always one
        if (options.singleLine) {
            lastWord = lines[0][lines[0].length - 1];
        } else {
            lastWord = lines[lines.length - 1][0];
        }
        if (options.autoResize) {
            this.newWidth = (lastWord.left + lastWord.width + hMargin);
            this.newHeight = (lastWord.top + lastWord.height + vMargin);
            this.docHeight = lastWord.top + lastWord.height;
        } else {
            this.docHeight = lastWord.top + lastWord.height;
        }
    }

    /*
    paint() {
        let ctx = new MockContext();
        let canvas = {width: this.pixelX, height: this.pixelY};
        let docHeight = this.docHeight;
        let absScrollTop = this.scrollTop * docHeight;
        let absScrollLeft = this.scrollLeft * this.pixelX;

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(0, -absScrollTop);

        this.draw(ctx, {left: absScrollLeft, top: absScrollTop, width: this.pixelX, height: this.pixelY});
        this.drawSelections(ctx);

        if (this.showsScrollbar) this.drawScrollbar(ctx);

        ctx.restore();
        if (this.mockCallback) {
            this.mockCallback(ctx);
        }
        return ctx;
    }
    */

    visibleBounds() {
        let docH = this.docHeight;
        return {left: this.scrollLeft * this.pixelX, top: this.scrollTop * docH,
                width: this.pixelX, height: this.pixelY};
    }

    visibleTextBounds() {
        let r = this.visibleBounds();
        let w = r.width * (1.0 - (this.showsScrollbar ? this.relativeScrollBarWidth : 0));
        let h = r.height;
        return {l: r.left, t: r.top, w: w, h: r.height, b: r.top + h, r: r.left + w};
    }

    draw(ctx, rect) {
        let {left, top, width, height} = rect;
        this.words.forEach(word => {
            if (word.left + word.width < left || word.top > top + height
                || word.top + word.height < top || word.left > left + width) {return;}
            if (word.styles) {
                let wLeft = word.left;
                word.styles.forEach(partialStyle => {
                    ctx.fillStyle = partialStyle.style ? partialStyle.style : {color: 'black'};
                    ctx.fillText(word.text.slice(partialStyle.start, partialStyle.end), wLeft, word.top + word.ascent);
                    wLeft += partialStyle.width;
                });
            } else {
                ctx.fillStyle = word.style || 'black';
                ctx.fillText(word.text, word.left, word.top + word.ascent);
            }
        });
    }

    drawSelections(ctx) {
        ctx.save();
        for (let k in this.doc.selections) {
            let selection = this.doc.selections[k];
            if (selection.end === selection.start) {
                ctx.fillStyle = 'barSelection ' + selection.color;
                let caretRect = this.barRect(selection);
                ctx.fillRect(caretRect.left, caretRect.top, caretRect.width, caretRect.height);
            } else {
                ctx.fillStyle = 'boxSelection ' + selection.color;
                let rects = this.selectionRects(selection);
                rects.forEach(box => {
                    ctx.fillRect(box.left, box.top, box.width, box.height);
                });
            }
        }
        ctx.restore();
    }

    drawScrollbar(ctx) {
        let {l, t, h, w} = this.scrollbarBounds();
        ctx.save();
        ctx.fillStyle = "scrollBar";
        ctx.fillRect(l, 0, w, this.pixelY);

        ctx.fillStyle = "scrollKnob";
        ctx.fillRect(l + 3, t, w - 6, h);
        ctx.restore();
    }

    scrollbarBounds() {
        let {
            pixelX,
            pixelY,
            scrollTop: scrollT, // ratio into area
            relativeScrollBarWidth: relWidth,
        } = this;
        let docH = this.docHeight;
        let scrollVRatio = pixelY / docH;
        let barW = pixelX * (this.showsScrollbar ? relWidth : 0);
        let barLeft = pixelX - barW;
        let barTop = scrollT * pixelY;
        let minHeight = pixelY / 100 * 5;
        let barH = scrollVRatio > 1.0 ? pixelY - 3 : Math.max(minHeight, pixelY * scrollVRatio - 6);
        return {l: barLeft, t: barTop, w: barW, h: barH};
    }

    scrollBy(deltaX, deltaY) {
        this.setScroll(this.scrollLeft = deltaX, this.scrollTop + deltaY);
    }

    setScroll(scrollLeft, scrollTop) {
        let {pixelY, docHeight} = this;
        let max = 1.0 - pixelY / docHeight;
        this.scrollTop = Math.max(0, Math.min(max, scrollTop));
    }

    findLine(pos, x, y) {
        // a smarty way would be to do a binary search
        let lines = this.lines;
        if (x !== undefined && y !== undefined) {
            let lineIndex = lines.findIndex(line => {
                let max = line.reduce((acc, cur) => Math.max(acc, cur.height), 0);
                let w = line[0]; // should be always one
                return w.top <= y && y < w.top + max;
            });
            if (lineIndex < 0) { // should always be the past end of line.
                lineIndex = lines.length - 1;
            }
            return [lines[lineIndex], lineIndex];
        }

        let lineIndex = lines.findIndex(line => {
            let start = line[0];
            let end = line[line.length - 1];
            return start.start <= pos && pos < end.end;
        });

        if (lineIndex < 0) { // falls back on the last eof line
            lineIndex = lines.length - 1;
        }
        return [lines[lineIndex], lineIndex];
    }

    findWord(pos, x, y) {
        if (x !== undefined && y !== undefined) {
            let [line, _lineIndex] = this.findLine(pos, x, y);
            let wordIndex = line.findIndex(w => w.left <= x && x < w.left + w.width);
            if (wordIndex < 0) {
                if (x < line[0].left) {
                    wordIndex = 0;
                } else {
                    wordIndex = line.length - 1;
                }
            }
            return line[wordIndex];
        }

        let [line, _lineIndex] = this.findLine(pos, x, y);

        let wordIndex = line.findIndex(w => w.start <= pos && pos < w.end);
        if (wordIndex < 0) {
            if (x < line[0].left) {
                wordIndex = 0;
            } else {
                wordIndex = line.length - 1;
            }
        }
        return line[wordIndex];
    }

    insert(user, runs) {
        let evt = Event.insert(user, runs, this.timezone);
        this.events.push(evt);
    }

    delete(user, backspace) {
        let evt = Event.delete(user, backspace, this.timezone);
        this.events.push(evt);
    }

    select(user, start, end, isBol) {
        let evt = Event.select(user, start, end, isBol, this.timezone);
        this.lastSelect = {start, end};
        this.events.push(evt);
    }

    setStyle(user, style, merge) {
        let evt = Event.setStyle(user, style, merge);
        this.events.push(evt);
    }

    doEvent(evt) {
        this.doc.doEvent(evt);
        this.layout();
    }

    positionFromIndex(pos) {
        let word = this.findWord(pos);
        if (pos === 0 && word.text === _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {
            let margins = this.margins || {};
            return {
                left: 0 + (margins.left || 0),
                top: 0 + (margins.top || 0),
                width: 0,
                height: word.height
            };
        }

        let localPos = pos - word.start;
        let tmpWord = {...word};
        tmpWord.text = word.text.slice(0, localPos);
        let measure0 = this.defaultMeasurer.measureText(tmpWord, this.doc.defaultFont, this.doc.defaultSize);
        tmpWord.text = word.text.slice(0, localPos + 1);
        let measure1 = this.defaultMeasurer.measureText(tmpWord, this.doc.defaultFont, this.doc.defaultSize);
        return {left: word.left + measure0.width, top: word.top, width: measure1.width - measure0.width, height: word.height};
    }

    indexFromPosition(x, y) {
        let word = this.findWord(null, x, y);
        let last = 0;
        let lx = x - word.left;
        if (lx < 0) {return word.start;}
        if (word.text === _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {return word.start;}
        if ((0,_wrap_js__WEBPACK_IMPORTED_MODULE_0__.isNewline)(word.text)) {return word.start;}
        let tmpWord = {...word};
        for (let i = 0; i <= word.text.length; i++) {
            let measure;
            tmpWord.text = word.text.slice(0, i !== 0 ? i : 1);
            measure = this.defaultMeasurer.measureText(tmpWord, this.doc.defaultFont, this.doc.defaultSize);
            let half = (measure.width - last) / 2;
            if (last <= lx && lx < last + half) {
                return word.start + (i === 0 ? 0 : i - 1);
            }
            if (last + half <= lx && lx < measure.width) {
                return word.start + i;
            }
            last = measure.width;
        }
        return word.end;
    }

    isBol(x, y) {
        let [line, _lineIndex] = this.findLine(null, x, y);
        let word = line[0];
        if (x < word.left) {return true;}
        if (word.text === _wrap_js__WEBPACK_IMPORTED_MODULE_0__.eof) {return this.hasLastEnter;}
        let tmpWord = {...word};
        tmpWord.text = word.text.slice(0, 1);
        let measure = this.defaultMeasurer.measureText(tmpWord, this.doc.defaultFont, this.doc.defaultSize);
        let half = measure.width / 2;
        return x - word.left < half;
    }

    changeLine(user, pos, dir) {
        let [_line, lineIndex] = this.findLine(pos);
        if (dir > 0 && lineIndex === this.lines.length - 2) {
            if (this.hasLastEnter) {
                return this.lines[this.lines.length - 1][0].start;
            }
            return pos;
        }
        let rect = this.positionFromIndex(pos);
        let newLineIndex = lineIndex + dir;
        if (newLineIndex < 0) {return 0;}
        if (newLineIndex >= this.lines.length) {
            return this.lines[this.lines.length - 1][0].start;
        }
        let newLine = this.lines[newLineIndex];
        if (newLine.length === 1 && newLine[0].text.length === 1 &&
            (newLine[0].text === "\n" || newLine[0].text === "\r")) {
            return newLine[0].start;
        }
        return this.indexFromPosition(rect.left, newLine[0].top);
    }

    lineHeightAt(index) {
        if (this.doc.length() === 0) {
            return this.defaultMeasurer.measureText({text: 'x'}, this.doc.defaultFont, this.doc.defaultSize).height;
        }
        let [line, _lineIndex] = this.findLine(index);
        return line.reduce((acc, cur) => Math.max(cur.height, acc), 0);
    }

    barRect(selection) {
        let pos = selection.start;
        if (pos === 0) {
            let rect = this.positionFromIndex(pos);
            let height = this.lineHeightAt(pos);
            return {left: rect.left - 1, top: rect.top, width: 2, height};
        }

        if (pos === this.doc.length()) {
            if (selection.isBol) {
                let rect = this.positionFromIndex(pos);
                let height = this.lineHeightAt(pos);
                return {left: rect.left - 1, top: rect.top, width: 2, height};
            }
            let [prevLine, _prevLineIndex] = this.findLine(pos - 1);
            pos = prevLine[prevLine.length - 1].end - 1;
            let rect = this.positionFromIndex(pos);
            let height = this.lineHeightAt(pos);
            return {left: rect.left + rect.width - 1, top: rect.top, width: 2, height};
        }

        let rect = this.positionFromIndex(pos);
        let height = this.lineHeightAt(pos);
        if (selection.isBol) {
            return {left: rect.left - 1, top: rect.top, width: 2, height};
        }
        return {left: rect.left - 1, top: rect.top, width: 2, height};
    }

    selectionRects(selection) {
        let {start, end} = selection;

        let [line0, line0Index] = this.findLine(start);
        let [line1, line1Index] = this.findLine(end);

        if (line0 === undefined || line1 === undefined) {return [];}

        if (line0Index === line1Index) {
            // one rectangle
            let pos1 = this.positionFromIndex(start);
            let pos2 = this.positionFromIndex(end);
            let height = this.lineHeightAt(start);
            return [{left: pos1.left, top: pos1.top,
                     width: pos2.left - pos1.left,
                     height: height}];
        }

        let rects = [];
        let pos1 = this.positionFromIndex(start);
        let height1 = this.lineHeightAt(start);
        let pos2;
        let height2;
        if (end === this.doc.length()) {
            let lastWord = this.findWord(end - 1);
            if ((0,_wrap_js__WEBPACK_IMPORTED_MODULE_0__.isNewline)(lastWord.text[lastWord.length - 1])) {
                end--;
                let [newLine1, newLine1Index] = this.findLine(end);
                line1 = newLine1;
                line1Index = newLine1Index;
            }
        }

        let hMargin = this.options.margins.right + this.options.margins.left;

        pos2 = this.positionFromIndex(end);
        height2 = this.lineHeightAt(end);

        rects.push({left: pos1.left, top: pos1.top,
                    width: this.width() - pos1.left - hMargin,
                    height: height1});
        if (line1Index - line0Index >= 2) {
            pos1 = this.lines[line0Index + 1][0];
            rects.push({left: this.options.margins.left, top: pos1.top,
                        width: this.width() - hMargin,
                        height: pos2.top - pos1.top});
        }

        pos1 = this.lines[line1Index][0];
        height2 = this.lineHeightAt(end);
        rects.push({left: this.options.margins.left, top: pos2.top,
                    width: pos2.left - this.options.margins.left,
                    height: height2});
        return rects;
    }

    isScrollbarClick(x, _y) {
        if (!this.showsScrollbar) {return false;}
        let scrollBarWidth = this.relativeScrollBarWidth * this.pixelX,
            scrollBarLeft = this.pixelX - scrollBarWidth - 3;
        return x >= scrollBarLeft;
    }

    mouseDown(x, y, realY, user) {
        if (this.isScrollbarClick(x, y)) {
            this.scrollBarClick = {
                type: "clicked",
                scrollBarVOffset: y - this.scrollbarBounds().t,
                scrollBarTopOnDown: this.scrollTop,
                realStartY: realY,
                startX: x, startY: y
            };
        } else {
            let index = this.indexFromPosition(x, y);
            let isBol = this.isBol(x, y);
            this.extendingSelection = null;
            this.selectDragStart = index;
            this.select(user, index, index, isBol);
        }
        this.keyboardX = null;
    }

    mouseMove(x, y, realY, user) {
        if (this.selectDragStart !== null) {
            let other = this.indexFromPosition(x, y);
            let start, end;
            if (other || other === 0) {
                this.focusChar = other;
                if (this.selectDragStart > other) {
                    this.extendingSelection = 'top';
                    start = other;
                    end = this.selectDragStart;
                } else {
                    this.extendingSelection = 'bottom';
                    start = this.selectDragStart;
                    end = other;
                }
                let last = this.lastSelect;
                if (last && (last.start !== start || last.end !== end)) {
                    this.select(user, start, end);
                    return 'selectionChanged';
                }
            }
            return null;
        }

        if (this.scrollBarClick) {
            let {realStartY, scrollBarTopOnDown} = this.scrollBarClick;
            let docHeight = this.docHeight;
            let newPos = (realY - realStartY) // movement
                          * Math.max(1, docHeight / this.pixelY) // how many pixels it means relative to doc height
                          / docHeight   // ratio in doc height
                          + scrollBarTopOnDown;  // make it the new value
            this.scrollBarClick.type = "move";
            this.setScroll(0, newPos);
            return 'scrollChanged';
        }
        return null;
    }

    mouseUp(_x, _y, _realY, _user) {
        if (this.scrollBarClick) {
            if (this.scrollBarClick.type === "clicked") {
                // click to scroll behavior
            }
            this.scrollBarClick = null;
            this.wasScrollBarClick = true;
        } else {
            this.wasScrollBarClick = false;
        }
        this.selectDragStart = null;
        this.keyboardX = null;
        this.lastSelect = null;
    }

    backspace(user) {
        this.delete(user, true);
    }

    handleKey(user, key, selecting, ctrlKey) {
        let selection = this.doc.selections[user.id] || {start: 0, end: 0, color: user.color};
        let {start, end, isBol} = selection;
        let length = this.doc.length();
        let handled = false;

        let wasLine;
        let wasLineIndex;

        if (!selecting) {
            this.keyboardSelect = 0;
        } else if (!this.keyboardSelect) {
            switch (key) {
                case 37: // left arrow
                case 38: // up - find character above
                case 36: // start of line
                case 33: // page up
                    this.keyboardSelect = -1;
                    break;
                case 39: // right arrow
                case 40: // down arrow - find character below
                case 35: // end of line
                case 34: // page down
                    this.keyboardSelect = 1;
                    break;
                default:
                    break;
            }
        }

        let pos = this.keyboardSelect === 1 ? end : start;
        let oldPos = pos;
        let downEnd;
        let changingCaret = false;
        switch (key) {
            case 37: // left arrow
                if (!selecting && start !== end) {
                    pos = start;
                } else {
                    if (pos > 0) {
                        pos--;
                    }
                }
                isBol = false;
                changingCaret = true;
                break;
            case 39: // right arrow
                if (!selecting && start !== end) {
                    pos = end;
                } else {
                    if (pos < length) {
                        let [line, lineIndex] = this.findLine(pos);
                        wasLine = line;
                        wasLineIndex = lineIndex;
                        pos++;
                    }
                }
                changingCaret = true;
                break;

            case 40: // down arrow - find character below
                {
                    let [line, lineIndex] = this.findLine(pos);
                    wasLine = line;
                    wasLineIndex = lineIndex;
                    pos = this.changeLine(user, pos, 1);
                    downEnd = oldPos === pos;
                    changingCaret = true;
                }
                break;
            case 38: // up - find character above
                pos = this.changeLine(user, pos, -1);
                isBol = false;
                changingCaret = true;
                break;

            case 8: // backspace
            case 46: // delete
                this.backspace(user);
                handled = true;
                break;
            default:
                break;
        }

        if (changingCaret) {
            switch (this.keyboardSelect) {
                case 0:
                    start = end = pos;
                    break;
                case -1:
                    start = pos;
                    break;
                case 1:
                    end = pos;
                    break;
                default:
                    break;
            }

            if (start === end) {
                this.keyboardSelect = 0;
            }
            if (start > end) {
                this.keyboardSelect = -this.keyboardSelect;
                let t = end;
                end = start;
                start = t;
            }

            let nowIndex;
            if (wasLine) {
                let [_line, lineIndex] = this.findLine(pos);
                nowIndex = lineIndex;
                isBol = (wasLineIndex !== nowIndex && this.hasLastEnter) || downEnd;
            }

            this.select(user, start, end, isBol);
            handled = true;
        }

        if (ctrlKey) {
            switch (key) {
                case 65:
                    this.select(user, 0, length);
                    window.editor = this;
                    handled = true;
                    break;
                default:
                    break;
            }
        }

        return handled;
    }

    selectionText(user) {
        let sel = this.doc.selections[user.id];
        if (!sel) {
            return "";
        }
        return this.doc.plainText(sel.start, sel.end);
    }
}

class Event {
    static insert(user, runs, timezone) {
        return {type: "insert", user, runs, length: runLength(runs), timezone};
    }

    static delete(user, backspace, timezone) {
        return {type: "delete", backspace, user, timezone};
    }

    static select(user, start, end, isBol, timezone) {
        return {type: "select", user, start, end, isBol, timezone};
    }

    static setStyle(user, style, merge) {
        return {type: "setStyle", user, style, merge};
    }
}


/***/ }),

/***/ "./src/text/wrap.js":
/*!**************************!*\
  !*** ./src/text/wrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Measurer": () => (/* binding */ Measurer),
/* harmony export */   "Wrap": () => (/* binding */ Wrap),
/* harmony export */   "eof": () => (/* binding */ eof),
/* harmony export */   "equalStyle": () => (/* binding */ equalStyle),
/* harmony export */   "fontRegistry": () => (/* binding */ fontRegistry),
/* harmony export */   "isNewline": () => (/* binding */ isNewline)
/* harmony export */ });
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

const eof = String.fromCharCode(26); // "^Z"

function isNewline(str) {
    return  !!/[\n\r]/.test(str);
}

function equalStyle(prev, next, defaultFont, defaultSize) {
    if (!prev && !next) {return true;}

    if (!prev) {
        return next.font === defaultFont && next.size === defaultSize
            && !next.color && !next.bold && !next.italic;
    }
    if (!next) {
        return prev.font === defaultFont && prev.size === defaultSize
            && !prev.color && !prev.bold && !prev.italic;
    }

    return (prev.font || defaultFont) === (next.font || defaultFont)
        && (prev.size || defaultSize) === (next.size || defaultSize)
        && (prev.color === next.color)
        && (!!prev.bold === !!next.bold)
        && (!!prev.italic === !!next.italic);
}

class MetricCache {
    constructor() {
        this.cache = [new Map()]; // [Map]
        this.maxMaps = 4;
        this.limit = 256;
    }

    makeKey(word, font, size) {
        let obj = {font, size, style: word.style, styles: word.styles, text: word.text};
        // JSONifying it still may not be stable, but it is okay to have multiple entries
        // for the "same" word
        return JSON.stringify(obj);
    }

    lookup(key) {
        for (let i = 0; i < this.cache.length; i++) {
            let v = this.cache[i].get(key);
            if (v) {return {...v};}
        }
        return null;
    }

    update(key, entry) {
        // assumes that lookup returned null previously
        let m = this.cache[this.cache.length - 1];
        m.set(key, entry);
        if (m.size >= this.limit) {
            if (this.cache.length === this.maxMaps) {
                let r = Math.floor(Math.random() * this.cache.length);
                this.cache.splice(r, 1);
            }
            this.cache.push(new Map());
        }
    }
}

class MSDFFontRegistry {
    constructor() {
        this.layouts = new Map();
    }

    hasLayout(name) {
        return this.layouts.get(name);
    }

    addLayout(name, layout) {
        this.layouts.set(name, layout);
        return layout;
    }

    measureText(word, font, _size) {
        let layout = this.layouts.get(font);
        if (layout) {
            return layout.measureText(word.text);
        }

        return {ascent: 36, height: 50, descent: 14, width: word.text.length * 20};
    }

    getInfo(name, fontSize) {
        let layout = this.layouts.get(name);
        let font;
        if (layout) {
            font = layout._opt.font;
        }
        if (font) {return font;}
        return {common: {lineHeight: fontSize}};
    }
}

const fontRegistry = new MSDFFontRegistry();

class Measurer {
    constructor() {
        this.cache = new MetricCache();
    }

    measureText(word, font, size) {
        let key = this.cache.makeKey(word, font, size);
        let m = this.cache.lookup(key);
        if (m) {return m;}
        m = fontRegistry.measureText(word, font, size);
        this.cache.update(key, m);
        return m;
    }

    lineHeight(font, fontSize) {
        let info = fontRegistry.getInfo(font, fontSize);
        return info.common ? info.common.lineHeight : info.atlas.size;
    }
}

class Wrap {
    splitWords(runs, defaultFont, defaultSize) {
        // returns words and lines.

        const isSpace = str => !!(/[ \f\n\r\t\v\u00A0\u2028\u2029]/.test(str));

        let push = (obj, style, ss) => {
            if (ss && ss.length > 1) {
                words.push(Object.assign(obj, {styles: ss}));
            } else if (ss && ss.length === 1) {
                words.push(Object.assign(obj, {style: ss[0].style}));
            } else if (style) {
                words.push(Object.assign(obj, {style}));
            } else {
                words.push(obj);
            }
        };

        let stylePush = (ss, newOne) => {
            if (!ss) {
                return [newOne];
            }
            let last = ss[ss.length - 1];
            if (!equalStyle(last.style, newOne.style, defaultFont, defaultSize)) {
                ss.push(newOne);
                return ss;
            }
            last.end = newOne.end;
            return ss;
        };

        let words = [];

        let isInWord;
        let start = 0;
        let leftOver = "";
        let styles = null;
        let style;
        let thisWord;

        for (let i = 0; i < runs.length - 1; i++) { // eof is at the end
            if (isInWord === undefined) {isInWord = !isSpace(runs[0].text[0]);}
            let run = runs[i];
            let text = run.text;
            style = run.style;

            if (!isInWord) {
                isInWord = !isSpace(text[0]);
            }

            let wordStart = 0;
            for (let j = 0; j < text.length; j++) {
                if (start === 0 && i === 0 && j === 0) {continue;}
                if (isInWord) {
                    if (isSpace(text[j])) {
                        thisWord = text.slice(wordStart, j);
                        let spaceAtHead = leftOver.length > 0 && thisWord.length === 0;
                        if (leftOver.length > 0) {
                            if (thisWord.length > 0) {
                                let newOne = {start: leftOver.length, end: leftOver.length + thisWord.length, style};
                                styles = stylePush(styles, newOne);
                            }
                            thisWord = leftOver + thisWord;
                            leftOver = "";
                        }
                        push({start, end: start + thisWord.length, text: thisWord}, spaceAtHead ? null : style, styles);
                        start += thisWord.length;
                        wordStart = j;
                        isInWord = false;
                        styles = null;
                    }
                } else {
                    if (j > 0) {
                        push({start, end: start + 1, text: text[j - 1], style, styles});
                        start += 1;
                        wordStart += 1;
                    }
                    if (!isSpace(text[j])) {
                        isInWord = true;
                    }
                }
            }
            // end of a run. the style ends here, but a word may continue
            // when a partial word has a different style
            thisWord = text.slice(wordStart, text.length);

            // but then, this word may be just a whitespace
            if (thisWord.length === 1 && isSpace(thisWord)) {
                push({start, end: start + 1, text: thisWord, style, styles});
                start += 1;
            } else {
                let fragment = {start: leftOver.length, end: leftOver.length + thisWord.length, style};
                styles = stylePush(styles, fragment);
                leftOver += thisWord;
            }
        }
        // the last word in the entire text.
        // the special case here is that the style for left over,
        // and the 'fragment' may just be the same as style.  If that is the case,
        // it simply creates a run with one style
        let eofPos = start;
        if (leftOver.length > 0) {
            eofPos = start + leftOver.length;
            let word = {start, end: eofPos, text: leftOver};
            if (styles && styles.length === 1 && equalStyle(style, styles[0].style, defaultFont, defaultSize)) {
                push(word, style);
            } else {
                push(word, null, styles);
            }
        }
        push({start: eofPos, end: eofPos + 1, text: eof});
        return words;
    }

    mergeRect(m1, m2) {
        if (!m1) {return m2;}
        if (!m2) {return m1;}
        return {
            width: m1.width + m2.width,
            height: Math.max(m1.height, m2.height),
            ascent: Math.max(m1.ascent, m2.ascent),
        };
    }

    wrap(runs, textWidth, measurer, defaultFont, defaultSize, margins) {
        // returns words and lines.

        if (!margins) {
            margins = {left: 0, top: 0, right: 0, bottom: 0};
        }

        const width = textWidth - margins.left - margins.right;

        let currentLine = [];
        let currentHeight = 0;
        let currentAscent = 0;
        let lines = []; // list of list of words

        let left = margins.left;
        let top = margins.top;

        let words = this.splitWords(runs, defaultFont, defaultSize);

        let pushLine = () => {
            if (currentLine.length === 0) {return;}
            currentLine.forEach(c => {
                c.ascent = currentAscent;
            });
            lines.push(currentLine);
            currentLine = [];
            left = margins.left;
            top += currentHeight;
            currentHeight = 0;
            currentAscent = 0;
        };

        for (let w = 0; w < words.length - 1; w++) {
            let word = words[w];
            let rect;

            if (isNewline(word.text)) {
                rect = measurer.measureText(word, defaultFont, defaultSize);
                if (w === words.length - 1) {
                    pushLine();
                } else {
                    currentHeight = Math.max(currentHeight, rect.height);
                    currentAscent = Math.max(currentAscent, rect.ascent);
                }
                rect.left = left;
                rect.top = top;
                Object.assign(word, rect);
                currentLine.push(word);
                pushLine();
                currentHeight = 0;
                currentAscent = 0;
                continue;
            }

            rect = measurer.measureText(word, defaultFont, defaultSize);
            currentHeight = Math.max(currentHeight, rect.height);
            currentAscent = Math.max(currentAscent, rect.ascent);

            if (rect.width + left > width) {
                pushLine();
            }
            rect.left = left;
            rect.top = top;
            Object.assign(word, rect);
            left += rect.width;
            currentLine.push(word);
        }

        pushLine();

        let word = words[words.length - 1];
        let rect = measurer.measureText(word, defaultFont, defaultSize);
        currentHeight = Math.max(currentHeight, rect.height);
        currentAscent = Math.max(currentAscent, rect.ascent);
        rect.left = margins.left;
        rect.top = top;
        Object.assign(word, rect);
        currentLine.push(word);
        pushLine();
        return [lines, words];
    }
}


/***/ }),

/***/ "./src/walkManager.js":
/*!****************************!*\
  !*** ./src/walkManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkManager": () => (/* binding */ WalkManager)
/* harmony export */ });
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");


class WalkManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_0__.ViewService {
    constructor(name) {
        super(name || "WalkManager");
        this.walkers = [];
    }

    setupDefaultWalkers() {
        [
            ["BuiltinWalker", "WalkerPawn", "checkPortal"],
            ["BuiltinWalker", "WalkerPawn", "backoutFromFall"],
            ["BuiltinWalker", "WalkerPawn", "bvh"]
        ].forEach((spec) => this.append(spec));
    }

    append(walkerSpec) {
        // [ModuleName, BehaviorName, methodName]

        if (walkerSpec.length !== 3) {
            throw new Error(`walker spec should be in the form of "[ModuleName, BehaviorName, methodName]"`);
        }
        this.walkers.push(walkerSpec);
    }

    insertBefore(walkerSpec, prevSpec) {
        if (!prevSpec) {
            return this.append(walkerSpec);
        }

        let index = this.findIndex(prevSpec);
        if (index >= 0) {
            if (walkerSpec.length !== 3) {
                throw new Error(`walker spec should be in the form of "[ModuleName, BehaviorName, methodName]"`);
            }
            this.walkers.splice(index, 0, walkerSpec);
        }
    }

    remove(walkerSpec) {
        let index = this.findIndex(walkerSpec);
        if (index >= 0) {
            this.walkers.splice(index, 1);
        }
    }

    findIndex(walkerSpec) {
        return this.walkers.findIndex((a) => a[0] == `${walkerSpec[0]}$${walkerSpec[1]}` && a[2] === walkerSpec[2]);
    }

    removeAll() {
        this.walkers = [];
    }

    walk(avatar, vq, time, delta) {
        for (let i = 0; i < this.walkers.length; i++) {
            let walker = this.walkers[i];
            let behavior = avatar.actor.behaviorManager.lookup(walker[0], walker[1]);
            let [newVq, isFinal] = behavior.invoke(avatar, walker[2], vq, time, delta);
            if (isFinal) {
                return newVq;
            }
            vq = newVq;
        }
        return vq;
    }
}


/***/ }),

/***/ "./src/wcAssetManager.js":
/*!*******************************!*\
  !*** ./src/wcAssetManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetManager": () => (/* binding */ AssetManager)
/* harmony export */ });
/* harmony import */ var _assetManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetManager.js */ "./src/assetManager.js");
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io





class AssetManager extends _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__.ViewService {
    constructor(name) {
        super(name || "AssetManager");
        this.assetManager = new _assetManager_js__WEBPACK_IMPORTED_MODULE_0__.AssetManager();
    }
}



/***/ }),

/***/ "./src/worldMenu.js":
/*!**************************!*\
  !*** ./src/worldMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeAllDialogs": () => (/* binding */ closeAllDialogs),
/* harmony export */   "connectFeedback": () => (/* binding */ connectFeedback),
/* harmony export */   "filterDomEventsOn": () => (/* binding */ filterDomEventsOn),
/* harmony export */   "hideShellControls": () => (/* binding */ hideShellControls),
/* harmony export */   "loadCSS": () => (/* binding */ loadCSS),
/* harmony export */   "setupWorldMenuButton": () => (/* binding */ setupWorldMenuButton),
/* harmony export */   "updateWorldMenu": () => (/* binding */ updateWorldMenu)
/* harmony export */ });
/* harmony import */ var _helpMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpMenu.js */ "./src/helpMenu.js");
/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame.js */ "./src/frame.js");



let worldMenu = null;
let worldMenuVisible = false;
let imageInput = null;

let isMobile = !!("ontouchstart" in window);

function qrPressed(_myAvatar, url) {
    let div = document.createElement("div");
    div.innerHTML = `<a id="link" target="_blank" rel="noopener noreferrer" href="${url}"></a>`;
    document.getElementById("hud").appendChild(div);
    let a = div.querySelector("#link");
    a.click();
    div.remove();
}

function loadPressed(myAvatar) {
    if (!imageInput) {
        let input = document.createElement("div");
        input.innerHTML = `<input id="imageinput" type="file" accept="application/json,image/*,.glb,.obj..fbx,.zip,.svg,.vrse,.exr,.pdf,.mp3,.wav">`;
        imageInput = input.firstChild;

        let getFileType = (fileName) => {
            let index = fileName.lastIndexOf(".");
            if (index >= 0) {
                return fileName.slice(index + 1).toLowerCase();
            }
            return null;
        };

        imageInput.onchange = () => {
            for (const file of imageInput.files) {
                let type = getFileType(file.name);

                new Promise(resolve => {
                    let reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.readAsArrayBuffer(file);
                }).then((data) => {
                    if (type === "vrse") {
                        myAvatar.loadvrse(data);
                    } else {
                        myAvatar.analyzeAndUploadFile(data, file.name, type);
                    }
                });
            }
            imageInput.value = "";
        };
    }

    document.getElementById("hud").appendChild(imageInput);

    imageInput.click();
    if (worldMenuVisible) {
        toggleMenu();
    }
}

function connectFeedback(flag) {
    let connectButton = document.getElementById('connectBtn');
    let connectIcon = document.getElementById('connectIcon')

    if (flag) {
        connectButton.textContent = 'Connected';
        connectButton.classList.add('connected');
        connectIcon.classList.remove('connect-icon');
        connectIcon.classList.add('connected-icon');
    } else {
        connectButton.textContent = 'Connect';
        connectButton.classList.remove('connected');
        connectIcon.classList.add('connect-icon');
        connectIcon.classList.remove('connected-icon');
    }
}

function connectPressed(myAvatar) {
    let manager = myAvatar.service("BehaviorViewManager");

    if (manager) {
        manager.setURL("ws://localhost:9011", connectFeedback);
    }
}

function settingsPressed(myAvatar) {
    if (myAvatar) {
        myAvatar.showSettingsMenu();
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_1__.sendToShell)("hud", {joystick: false, fullscreen: false});
    }
    toggleMenu();
}

function sharePressed(myAvatar) {
    if (myAvatar) {
        myAvatar.showShareMenu();
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_1__.sendToShell)("hud", {joystick: false, fullscreen: false});
    }
    toggleMenu();
}

function helpPressed(myAvatar) {
    if (myAvatar) {
        (0,_helpMenu_js__WEBPACK_IMPORTED_MODULE_0__.startHelpMenu)();
        (0,_frame_js__WEBPACK_IMPORTED_MODULE_1__.sendToShell)("hud", {joystick: false, fullscreen: false});
    }
    toggleMenu();
}

function switchQRView(_myAvatar) {
    let qrDiv = worldMenu.querySelector("#qrDiv");
    let statsDiv = worldMenu.querySelector("#statsDiv");
    let innerDiv = statsDiv.querySelector("#innerDiv");
    let innderDivSecond = innerDiv.childNodes[1];

    let cls = "statsHidden";

    if (innderDivSecond) {innderDivSecond.classList.add(cls);}

    // workaround until I understand it more
    statsDiv.style.height = "176px";

    if (qrDiv.classList.contains(cls)) {
        qrDiv.classList.toggle(cls, false);
        statsDiv.classList.toggle(cls, true);
    } else {
        qrDiv.classList.toggle(cls, true);
        statsDiv.classList.toggle(cls, false);
    }
}

function forceStop(myAvatar) {
    myAvatar.say("stopPresentation");
    if (worldMenuVisible) {
        // toggleMenu();
    }
}

function initWorldMenu(badge) {
    let html = document.createElement("div");
    html.id = "worldMenu";
    html.classList.add("worldMenu");

    let buttons = `
<div id="worldMenu-load" class="menu-label menu-item">
    <div class="menu-icon import-icon"></div>
    <span class="menu-label-text">Import</span>
</div>
<div id="worldMenu-connect" class="menu-label menu-item">
    <div class="menu-icon connect-icon" id="connectIcon"></div>
    <span class="menu-label-text" id="connectBtn">Connect</span>
</div>
<div id="worldMenu-gather" class="menu-label menu-item">
    <div class="menu-icon presentationMode-icon"></div>
    <span class="menu-label-text">Gather</span>
</div>
<div id="worldMenu-shareButton" class="menu-label menu-item">
    <div class="menu-icon share-icon"></div>
    <span class="menu-label-text">Share</span>
</div>
<div id="worldMenu-settings" class="menu-label menu-item">
    <div class="menu-icon settings-icon"></div>
    <span class="menu-label-text">Settings</span>
</div>
<div id="worldMenu-helpButton" class="menu-label menu-item">
    <div class="menu-icon help-icon"></div>
    <span class="menu-label-text">Help</span>
</div>
`.trim();

    let div = document.createElement("div");
    div.innerHTML = buttons;

    let load = div.querySelector("#worldMenu-load");
    let connect = div.querySelector("#worldMenu-connect");
    let settings = div.querySelector("#worldMenu-settings");
    let share = div.querySelector("#worldMenu-shareButton");
    let help = div.querySelector("#worldMenu-helpButton");
    let presentationMode = div.querySelector("#worldMenu-gather");

    html.appendChild(badge);
    badge.id = "worldMenu-qr";
    badge.classList.add("menu-qr", "menu-item");

    html.appendChild(load);
    html.appendChild(connect);
    html.appendChild(presentationMode);
    html.appendChild(share);
    html.appendChild(settings);
    html.appendChild(help);

    worldMenu = html;

    filterDomEventsOn(worldMenu);
    worldMenuVisible = false;
    document.getElementById("hud").appendChild(worldMenu);
}

function setMenuItems(myAvatar) {
    let gatherItem = worldMenu.querySelector("#worldMenu-gather");
    let label = gatherItem.querySelector("span");

    if (myAvatar.actor.service("PlayerManager").presentationMode) {
        label.textContent = "Stop Gathering";
    } else {
        label.textContent = "Gather";
    }

    let div;

    div = worldMenu.querySelector("#worldMenu-qr");
    div.onclick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if (evt.shiftKey || isMobile) {
            switchQRView(myAvatar);
            return;
        }
        qrPressed(myAvatar, window.location);
    }

    div = worldMenu.querySelector("#worldMenu-load");
    div.onclick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        loadPressed(myAvatar);
    }

    div = worldMenu.querySelector("#worldMenu-connect");
    div.onclick = () => connectPressed(myAvatar);

    div = worldMenu.querySelector("#worldMenu-settings");
    if (div) div.onclick = () => settingsPressed(myAvatar);

    div = worldMenu.querySelector("#worldMenu-shareButton");
    if (div) div.onclick = () => {sharePressed(myAvatar)};

    div = worldMenu.querySelector("#worldMenu-helpButton");
    if (div) div.onclick = () => helpPressed(myAvatar);

    div = gatherItem;
    if (div) {
        div.onclick = () => {
            // toggleMenu();
            if (myAvatar.actor.service("PlayerManager").presentationMode) {
                forceStop(myAvatar);
            } else {
                myAvatar.comeToMe();
            }
        };
    }
}

function toggleMenu(myAvatar) {
    if (worldMenuVisible) {
        worldMenu.classList.remove("menuVisible");
        worldMenuVisible = false;
        return;
    }

    setMenuItems(myAvatar);

    worldMenuVisible = true;
    worldMenu.classList.add("menuVisible");
}

function updateWorldMenu(myAvatar) {
    if (!worldMenuVisible) {return;}
    setMenuItems(myAvatar);
}

function setupWorldMenuButton(myAvatar, App, sessionId) {
    if (!worldMenu) {
        let badge = document.createElement("div");
        let statsDiv = document.createElement("div");
        statsDiv.id = "statsDiv";
        let qrDiv = document.createElement("div");
        qrDiv.id = "qrDiv";

        statsDiv.classList.add("statsHidden");

        badge.appendChild(qrDiv);
        badge.appendChild(statsDiv);

        App.root = badge;
        App.badge = false;
        App.qrcode = qrDiv;
        App.stats = statsDiv;
        App.makeSessionWidgets(sessionId);
        qrDiv.onclick = null;

        initWorldMenu(badge);
    }
    let worldMenuBtn = document.querySelector("#worldMenuBtn");

    worldMenuBtn.onclick = () => toggleMenu(myAvatar);
    filterDomEventsOn(worldMenuBtn);
}

function filterDomEventsOn(elem) {
    elem.onpointerdown = (evt) => evt.stopPropagation();
    elem.onpointerup = (evt) => evt.stopPropagation();
    elem.onpointermove = (evt) => evt.stopPropagation();
    elem.onwheel = (evt) => evt.stopPropagation();
}

function closeAllDialogs() {
    let panels = document.querySelectorAll(".dialogPanel");
    panels.forEach((p) => p.remove());
    (0,_frame_js__WEBPACK_IMPORTED_MODULE_1__.sendToShell)("hud", {joystick: true, fullscreen: true});

    let homeBtn = document.querySelector("#homeBtn");
    if (homeBtn) {
        homeBtn.style.display = "flex";
    }
}

function hideShellControls() {
    (0,_frame_js__WEBPACK_IMPORTED_MODULE_1__.sendToShell)("hud", {joystick: false, fullscreen: false});
    let homeBtn = document.querySelector("#homeBtn");
    if (homeBtn) {
        homeBtn.style.display = "none";
    }
}

function loadCSS() {
    if (!document.head.querySelector("#settings-css")) {
        return new Promise((resolve, reject) => {
            let css = document.createElement("link");
            css.rel = "stylesheet";
            css.type = "text/css";
            css.id = "settings-css";
            css.href = "./assets/css/settings.css";
            css.onload = resolve;
            css.onerror = reject;
            document.head.appendChild(css);
        });
    }
    return Promise.resolve(true);
}


/***/ }),

/***/ "./src/worldSaver.js":
/*!***************************!*\
  !*** ./src/worldSaver.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldSaver": () => (/* binding */ WorldSaver)
/* harmony export */ });
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _croquet_worldcore_kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @croquet/worldcore-kernel */ "./node_modules/@croquet/worldcore-kernel/index.js");
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io
//
// enumerate all cards, including the ones that are embedded into others (that is, their parents are *not* model root.
// save the json that would be used for create, but along with the class name (hopefully we can retire this field, but may not be true.
//
// loading time: in general, the parent needs to be created before a child




class WorldSaver {
    constructor(defaultClass) {
        this.map = new Map();
        this.id = 0;
        this.defaultClass = defaultClass;
    }

    newId() {
        return (++this.id).toString().padStart(4, '0');
    }

    save(model) {
        let cards = [];
        for (let [_id, actor] of model.service("ActorManager").actors) {
            if (actor.isCard && !actor.noSave) {
                cards.push(actor);
            }
        }
        let sortedMap = this.topologicalSort(cards);
        let resultArray = this.collectData(sortedMap);

        let behaviorModules = model.service("BehaviorModelManager").save();

        let result = {behaviorModules, cards: resultArray};

        return result;
    }

    topologicalSort(cards) {
        let result = new Map();
        let toSort = [...cards];
        let checked = new Map();

        while (toSort.length > 0) {
            let n = toSort.shift();
            if (!n._parent || result.get(n._parent.id)) {
                // it is a root child, or its parent is already in result
                result.set(n.id, n);
            } else {
                // Its parent may be still in the toSort array
                if (checked.get(n)) {throw new Error("actors make a cycle");}
                toSort.push(n);
                checked.set(n, true);
            }
        }
        return result;
    }

    collectData(cardsMap) {
        let result = [];
        for (let [_id, actor] of cardsMap) {
            let obj = {id: this.newId()};
            this.map.set(actor, obj);
            let data = this.collectCardData(actor);
            obj.card = data;
            result.push(obj);
        };
        return result;
    }

    collectCardData(card, useRealId) {
        let result = {};
        if (card.constructor !== this.defaultClass) {
            result.className = card.constructor.name;
        }
        _card_js__WEBPACK_IMPORTED_MODULE_0__.intrinsicProperties.forEach((prop) => {
            if (card[`_${prop}`]) {
                if (prop === "parent") {
                    if (!useRealId) {
                        let entry = this.map.get(card[prop]);
                        if (!entry) {throw new Error("undefined parent used");}
                        result[prop] = entry.id;
                    } else {
                        let entry = card[prop];
                        if (!entry) {throw new Error("undefined parent used");}
                        result[prop] = entry.id;
                    }
                } else {
                    result[prop] = card[`_${prop}`];
                }
            }
        });

        if (card._cardData) {
            let keys = Object.keys(card._cardData);
            keys.sort();
            keys.forEach((k) => {
                result[k] = card._cardData[k];
            });
        }
        return result;
    }

    stringifyInner(node, seen) {
        if (node === undefined) return undefined;
        if (typeof node === 'number') return Number.isFinite(node) ? `${node}` : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        let out;
        if (Array.isArray(node)) {
            out = '[';
            for (let i = 0; i < node.length; i++) {
                if (i > 0) out += ',';
                out += this.stringifyInner(node[i], seen) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.has(node)) {
            throw new TypeError('Converting circular structure to JSON');
        }

        seen.add(node);

        if (node.constructor === window.Map) {
            let replacement = {__map: true, values: [...node]};
            return this.stringifyInner(replacement, seen);
        }

        let keys = Object.keys(node).sort();
        out = '';
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = this.stringifyInner(node[key], seen, out);
            if (!value) continue;
            if (out !== '') out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.delete(node);
        return '{' + out + '}';
    }

    stringify(obj) {
        let seen = new Set();
        return this.stringifyInner(obj, seen);
    }

    parse(string) {
        return JSON.parse(string, (_key, value) => {
            if (typeof value === "object" && value !== null && value.__map) {
                return new Map(value.values);
            }
            return value;
        });
    }
}


/***/ }),

/***/ "?985c":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./assets/fonts/Roboto.json":
/*!**********************************!*\
  !*** ./assets/fonts/Roboto.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"pages":["Roboto-msdf.png"],"chars":[{"id":41,"width":22,"height":53,"xoffset":0,"yoffset":-33.6943359375,"xadvance":14.6015625,"chnl":15,"x":0,"y":0,"page":0},{"id":40,"width":24,"height":53,"xoffset":0,"yoffset":-33.6943359375,"xadvance":14.35546875,"chnl":15,"x":0,"y":55,"page":0},{"id":93,"width":18,"height":51,"xoffset":0,"yoffset":-34.125,"xadvance":11.1357421875,"chnl":15,"x":0,"y":110,"page":0},{"id":91,"width":21,"height":51,"xoffset":0,"yoffset":-34.125,"xadvance":11.1357421875,"chnl":15,"x":0,"y":163,"page":0},{"id":125,"width":23,"height":50,"xoffset":0,"yoffset":-32.7509765625,"xadvance":14.2119140625,"chnl":15,"x":0,"y":216,"page":0},{"id":123,"width":24,"height":50,"xoffset":0,"yoffset":-32.7509765625,"xadvance":14.2119140625,"chnl":15,"x":0,"y":268,"page":0},{"id":106,"width":18,"height":49,"xoffset":0,"yoffset":-30.26953125,"xadvance":10.0283203125,"chnl":15,"x":0,"y":320,"page":0},{"id":36,"width":31,"height":49,"xoffset":0,"yoffset":-34.69921875,"xadvance":23.583984375,"chnl":15,"x":0,"y":371,"page":0},{"id":64,"width":46,"height":49,"xoffset":0,"yoffset":-29.3466796875,"xadvance":37.7138671875,"chnl":15,"x":0,"y":422,"page":0},{"id":87,"width":46,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":37.2626953125,"chnl":15,"x":48,"y":422,"page":0},{"id":124,"width":17,"height":45,"xoffset":0,"yoffset":-29.859375,"xadvance":10.2333984375,"chnl":15,"x":33,"y":371,"page":0},{"id":81,"width":36,"height":45,"xoffset":0,"yoffset":-30.26953125,"xadvance":28.875,"chnl":15,"x":52,"y":371,"page":0},{"id":109,"width":44,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":36.8115234375,"chnl":15,"x":0,"y":473,"page":0},{"id":77,"width":43,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":36.66796875,"chnl":15,"x":96,"y":422,"page":0},{"id":39,"width":15,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":7.3212890625,"chnl":15,"x":90,"y":371,"page":0},{"id":34,"width":21,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":13.4326171875,"chnl":15,"x":107,"y":371,"page":0},{"id":92,"width":27,"height":42,"xoffset":0,"yoffset":-29.859375,"xadvance":17.2265625,"chnl":15,"x":130,"y":371,"page":0},{"id":104,"width":30,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":23.1328125,"chnl":15,"x":159,"y":371,"page":0},{"id":47,"width":26,"height":42,"xoffset":0,"yoffset":-29.859375,"xadvance":17.30859375,"chnl":15,"x":191,"y":371,"page":0},{"id":108,"width":17,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":10.1923828125,"chnl":15,"x":219,"y":371,"page":0},{"id":98,"width":32,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":23.5634765625,"chnl":15,"x":238,"y":371,"page":0},{"id":107,"width":31,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":21.287109375,"chnl":15,"x":272,"y":371,"page":0},{"id":100,"width":31,"height":42,"xoffset":0,"yoffset":-31.5,"xadvance":23.6865234375,"chnl":15,"x":305,"y":371,"page":0},{"id":102,"width":25,"height":42,"xoffset":0,"yoffset":-31.9306640625,"xadvance":14.5810546875,"chnl":15,"x":338,"y":371,"page":0},{"id":48,"width":31,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":23.583984375,"chnl":15,"x":365,"y":371,"page":0},{"id":51,"width":31,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":23.583984375,"chnl":15,"x":398,"y":371,"page":0},{"id":83,"width":33,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":24.9169921875,"chnl":15,"x":431,"y":371,"page":0},{"id":56,"width":31,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":23.583984375,"chnl":15,"x":466,"y":371,"page":0},{"id":119,"width":41,"height":32,"xoffset":0,"yoffset":-22.189453125,"xadvance":31.5615234375,"chnl":15,"x":46,"y":473,"page":0},{"id":37,"width":39,"height":41,"xoffset":0,"yoffset":-30.2900390625,"xadvance":30.76171875,"chnl":15,"x":20,"y":320,"page":0},{"id":103,"width":31,"height":41,"xoffset":0,"yoffset":-22.599609375,"xadvance":23.5634765625,"chnl":15,"x":61,"y":320,"page":0},{"id":113,"width":31,"height":41,"xoffset":0,"yoffset":-22.599609375,"xadvance":23.87109375,"chnl":15,"x":94,"y":320,"page":0},{"id":96,"width":20,"height":41,"xoffset":0,"yoffset":-31.458984375,"xadvance":12.9814453125,"chnl":15,"x":127,"y":320,"page":0},{"id":38,"width":36,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":26.1064453125,"chnl":15,"x":149,"y":320,"page":0},{"id":121,"width":29,"height":41,"xoffset":0,"yoffset":-22.189453125,"xadvance":19.8720703125,"chnl":15,"x":187,"y":320,"page":0},{"id":67,"width":35,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":27.3369140625,"chnl":15,"x":218,"y":320,"page":0},{"id":79,"width":36,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":28.875,"chnl":15,"x":255,"y":320,"page":0},{"id":71,"width":36,"height":41,"xoffset":0,"yoffset":-30.26953125,"xadvance":28.6083984375,"chnl":15,"x":293,"y":320,"page":0},{"id":112,"width":32,"height":41,"xoffset":0,"yoffset":-22.599609375,"xadvance":23.5634765625,"chnl":15,"x":331,"y":320,"page":0},{"id":72,"width":36,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":29.94140625,"chnl":15,"x":141,"y":422,"page":0},{"id":73,"width":18,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":11.4228515625,"chnl":15,"x":179,"y":422,"page":0},{"id":74,"width":30,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.173828125,"chnl":15,"x":199,"y":422,"page":0},{"id":75,"width":36,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":26.33203125,"chnl":15,"x":231,"y":422,"page":0},{"id":76,"width":32,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":22.599609375,"chnl":15,"x":269,"y":422,"page":0},{"id":57,"width":31,"height":40,"xoffset":0,"yoffset":-30.26953125,"xadvance":23.583984375,"chnl":15,"x":303,"y":422,"page":0},{"id":78,"width":36,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":29.94140625,"chnl":15,"x":336,"y":422,"page":0},{"id":33,"width":18,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":10.8076171875,"chnl":15,"x":374,"y":422,"page":0},{"id":80,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":26.49609375,"chnl":15,"x":394,"y":422,"page":0},{"id":42,"width":27,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":18.087890625,"chnl":15,"x":431,"y":422,"page":0},{"id":82,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":25.8603515625,"chnl":15,"x":460,"y":422,"page":0},{"id":49,"width":25,"height":40,"xoffset":0,"yoffset":-30.0029296875,"xadvance":23.583984375,"chnl":15,"x":365,"y":320,"page":0},{"id":84,"width":34,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":25.060546875,"chnl":15,"x":392,"y":320,"page":0},{"id":85,"width":34,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":27.234375,"chnl":15,"x":428,"y":320,"page":0},{"id":86,"width":36,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":26.7216796875,"chnl":15,"x":464,"y":320,"page":0},{"id":50,"width":32,"height":40,"xoffset":0,"yoffset":-30.26953125,"xadvance":23.583984375,"chnl":15,"x":26,"y":268,"page":0},{"id":88,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":26.33203125,"chnl":15,"x":60,"y":268,"page":0},{"id":89,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":25.224609375,"chnl":15,"x":97,"y":268,"page":0},{"id":90,"width":34,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":25.142578125,"chnl":15,"x":134,"y":268,"page":0},{"id":105,"width":17,"height":40,"xoffset":0,"yoffset":-30.26953125,"xadvance":10.1923828125,"chnl":15,"x":170,"y":268,"page":0},{"id":52,"width":33,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.583984375,"chnl":15,"x":189,"y":268,"page":0},{"id":63,"width":28,"height":40,"xoffset":0,"yoffset":-30.26953125,"xadvance":19.8310546875,"chnl":15,"x":224,"y":268,"page":0},{"id":94,"width":26,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":17.5546875,"chnl":15,"x":254,"y":268,"page":0},{"id":53,"width":32,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.583984375,"chnl":15,"x":282,"y":268,"page":0},{"id":65,"width":37,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":27.3984375,"chnl":15,"x":316,"y":268,"page":0},{"id":66,"width":34,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":26.1474609375,"chnl":15,"x":355,"y":268,"page":0},{"id":54,"width":32,"height":40,"xoffset":0,"yoffset":-29.8798828125,"xadvance":23.583984375,"chnl":15,"x":391,"y":268,"page":0},{"id":68,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":27.5419921875,"chnl":15,"x":425,"y":268,"page":0},{"id":55,"width":32,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.583984375,"chnl":15,"x":462,"y":268,"page":0},{"id":70,"width":32,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.21484375,"chnl":15,"x":25,"y":216,"page":0},{"id":35,"width":35,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":25.8603515625,"chnl":15,"x":59,"y":216,"page":0},{"id":69,"width":32,"height":40,"xoffset":0,"yoffset":-29.859375,"xadvance":23.87109375,"chnl":15,"x":96,"y":216,"page":0},{"id":116,"width":22,"height":38,"xoffset":0,"yoffset":-27.5625,"xadvance":13.7197265625,"chnl":15,"x":130,"y":216,"page":0},{"id":59,"width":17,"height":38,"xoffset":0,"yoffset":-22.39453125,"xadvance":8.8798828125,"chnl":15,"x":154,"y":216,"page":0},{"id":126,"width":36,"height":26,"xoffset":0,"yoffset":-16.447265625,"xadvance":28.5673828125,"chnl":15,"x":89,"y":473,"page":0},{"id":43,"width":32,"height":35,"xoffset":0,"yoffset":-24.732421875,"xadvance":23.8095703125,"chnl":15,"x":173,"y":216,"page":0},{"id":60,"width":28,"height":33,"xoffset":0,"yoffset":-22.517578125,"xadvance":21.3486328125,"chnl":15,"x":207,"y":216,"page":0},{"id":97,"width":31,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":22.845703125,"chnl":15,"x":237,"y":216,"page":0},{"id":101,"width":31,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":22.2509765625,"chnl":15,"x":270,"y":216,"page":0},{"id":110,"width":30,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":23.173828125,"chnl":15,"x":303,"y":216,"page":0},{"id":111,"width":32,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":23.953125,"chnl":15,"x":335,"y":216,"page":0},{"id":62,"width":30,"height":33,"xoffset":0,"yoffset":-22.5380859375,"xadvance":21.943359375,"chnl":15,"x":369,"y":216,"page":0},{"id":58,"width":17,"height":33,"xoffset":0,"yoffset":-22.39453125,"xadvance":10.171875,"chnl":15,"x":401,"y":216,"page":0},{"id":114,"width":24,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":14.2119140625,"chnl":15,"x":420,"y":216,"page":0},{"id":115,"width":30,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":21.65625,"chnl":15,"x":446,"y":216,"page":0},{"id":99,"width":31,"height":33,"xoffset":0,"yoffset":-22.599609375,"xadvance":21.984375,"chnl":15,"x":478,"y":216,"page":0},{"id":117,"width":30,"height":33,"xoffset":0,"yoffset":-22.189453125,"xadvance":23.1533203125,"chnl":15,"x":23,"y":163,"page":0},{"id":118,"width":30,"height":32,"xoffset":0,"yoffset":-22.189453125,"xadvance":20.34375,"chnl":15,"x":55,"y":163,"page":0},{"id":120,"width":30,"height":32,"xoffset":0,"yoffset":-22.189453125,"xadvance":20.8154296875,"chnl":15,"x":87,"y":163,"page":0},{"id":122,"width":29,"height":32,"xoffset":0,"yoffset":-22.189453125,"xadvance":20.8154296875,"chnl":15,"x":119,"y":163,"page":0},{"id":61,"width":30,"height":30,"xoffset":0,"yoffset":-19.9951171875,"xadvance":23.05078125,"chnl":15,"x":150,"y":163,"page":0},{"id":95,"width":29,"height":13,"xoffset":0,"yoffset":0,"xadvance":18.94921875,"chnl":15,"x":127,"y":473,"page":0},{"id":45,"width":21,"height":24,"xoffset":0,"yoffset":-14.232421875,"xadvance":11.5869140625,"chnl":15,"x":182,"y":163,"page":0},{"id":44,"width":16,"height":20,"xoffset":0,"yoffset":-4.4912109375,"xadvance":8.244140625,"chnl":15,"x":496,"y":268,"page":0},{"id":46,"width":18,"height":15,"xoffset":0,"yoffset":-4.2861328125,"xadvance":11.0537109375,"chnl":15,"x":23,"y":198,"page":0},{"id":32,"width":0,"height":0,"xoffset":0,"yoffset":0,"xadvance":10.3974609375,"chnl":15,"x":0,"y":508,"page":0}],"info":{"face":"Roboto","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[0,0,0,0],"spacing":[2,2]},"common":{"lineHeight":44.091796875,"base":38.96484375,"scaleW":512,"scaleH":512,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"kernings":[{"first":32,"second":84,"amount":-0.8203125},{"first":34,"second":34,"amount":-2.1943359375},{"first":34,"second":39,"amount":-2.1943359375},{"first":34,"second":65,"amount":-2.4609375},{"first":34,"second":97,"amount":-1.025390625},{"first":34,"second":99,"amount":-1.2099609375},{"first":34,"second":100,"amount":-1.2099609375},{"first":34,"second":101,"amount":-1.2099609375},{"first":34,"second":103,"amount":-1.2099609375},{"first":34,"second":109,"amount":-0.41015625},{"first":34,"second":110,"amount":-0.41015625},{"first":34,"second":111,"amount":-1.2509765625},{"first":34,"second":112,"amount":-0.41015625},{"first":34,"second":113,"amount":-1.2099609375},{"first":34,"second":115,"amount":-1.640625},{"first":39,"second":34,"amount":-2.1943359375},{"first":39,"second":39,"amount":-2.1943359375},{"first":39,"second":65,"amount":-2.4609375},{"first":39,"second":97,"amount":-1.025390625},{"first":39,"second":99,"amount":-1.2099609375},{"first":39,"second":100,"amount":-1.2099609375},{"first":39,"second":101,"amount":-1.2099609375},{"first":39,"second":103,"amount":-1.2099609375},{"first":39,"second":109,"amount":-0.41015625},{"first":39,"second":110,"amount":-0.41015625},{"first":39,"second":111,"amount":-1.2509765625},{"first":39,"second":112,"amount":-0.41015625},{"first":39,"second":113,"amount":-1.2099609375},{"first":39,"second":115,"amount":-1.640625},{"first":40,"second":86,"amount":0.41015625},{"first":40,"second":87,"amount":0.369140625},{"first":40,"second":89,"amount":0.451171875},{"first":44,"second":34,"amount":-3.486328125},{"first":44,"second":39,"amount":-3.486328125},{"first":46,"second":34,"amount":-3.486328125},{"first":46,"second":39,"amount":-3.486328125},{"first":47,"second":47,"amount":-4.59375},{"first":65,"second":34,"amount":-2.4609375},{"first":65,"second":39,"amount":-2.4609375},{"first":65,"second":67,"amount":-0.2255859375},{"first":65,"second":71,"amount":-0.2255859375},{"first":65,"second":79,"amount":-0.2255859375},{"first":65,"second":81,"amount":-0.2255859375},{"first":65,"second":84,"amount":-2.6455078125},{"first":65,"second":85,"amount":-0.3486328125},{"first":65,"second":86,"amount":-1.7841796875},{"first":65,"second":87,"amount":-1.4150390625},{"first":65,"second":89,"amount":-1.927734375},{"first":65,"second":111,"amount":-0.24609375},{"first":65,"second":117,"amount":-0.2255859375},{"first":65,"second":118,"amount":-1.025390625},{"first":65,"second":121,"amount":-1.025390625},{"first":65,"second":122,"amount":0.24609375},{"first":66,"second":84,"amount":-0.5537109375},{"first":66,"second":86,"amount":-0.4921875},{"first":66,"second":89,"amount":-1.1279296875},{"first":67,"second":84,"amount":-0.5947265625},{"first":68,"second":44,"amount":-2.091796875},{"first":68,"second":46,"amount":-2.091796875},{"first":68,"second":65,"amount":-0.4306640625},{"first":68,"second":84,"amount":-0.5537109375},{"first":68,"second":86,"amount":-0.451171875},{"first":68,"second":88,"amount":-0.451171875},{"first":68,"second":89,"amount":-0.8818359375},{"first":68,"second":90,"amount":-0.4716796875},{"first":69,"second":84,"amount":0.41015625},{"first":69,"second":99,"amount":-0.3896484375},{"first":69,"second":100,"amount":-0.3896484375},{"first":69,"second":101,"amount":-0.3896484375},{"first":69,"second":103,"amount":-0.3896484375},{"first":69,"second":111,"amount":-0.3896484375},{"first":69,"second":113,"amount":-0.3896484375},{"first":69,"second":117,"amount":-0.3486328125},{"first":69,"second":118,"amount":-0.533203125},{"first":69,"second":121,"amount":-0.533203125},{"first":70,"second":44,"amount":-4.798828125},{"first":70,"second":46,"amount":-4.798828125},{"first":70,"second":65,"amount":-3.486328125},{"first":70,"second":74,"amount":-5.4140625},{"first":70,"second":84,"amount":0.41015625},{"first":70,"second":97,"amount":-0.697265625},{"first":70,"second":99,"amount":-0.4306640625},{"first":70,"second":100,"amount":-0.4306640625},{"first":70,"second":101,"amount":-0.4306640625},{"first":70,"second":103,"amount":-0.4306640625},{"first":70,"second":111,"amount":-0.4306640625},{"first":70,"second":113,"amount":-0.4306640625},{"first":70,"second":114,"amount":-0.533203125},{"first":70,"second":117,"amount":-0.451171875},{"first":70,"second":118,"amount":-0.4921875},{"first":70,"second":121,"amount":-0.4921875},{"first":72,"second":65,"amount":0.369140625},{"first":72,"second":84,"amount":-0.5947265625},{"first":72,"second":88,"amount":0.3486328125},{"first":72,"second":89,"amount":-0.57421875},{"first":73,"second":65,"amount":0.369140625},{"first":73,"second":84,"amount":-0.5947265625},{"first":73,"second":88,"amount":0.3486328125},{"first":73,"second":89,"amount":-0.57421875},{"first":74,"second":65,"amount":-0.451171875},{"first":75,"second":45,"amount":-1.3125},{"first":75,"second":67,"amount":-0.6357421875},{"first":75,"second":71,"amount":-0.6357421875},{"first":75,"second":79,"amount":-0.6357421875},{"first":75,"second":81,"amount":-0.6357421875},{"first":75,"second":99,"amount":-0.533203125},{"first":75,"second":100,"amount":-0.533203125},{"first":75,"second":101,"amount":-0.533203125},{"first":75,"second":103,"amount":-0.533203125},{"first":75,"second":109,"amount":-0.4716796875},{"first":75,"second":110,"amount":-0.4716796875},{"first":75,"second":111,"amount":-0.5537109375},{"first":75,"second":112,"amount":-0.4716796875},{"first":75,"second":113,"amount":-0.533203125},{"first":75,"second":117,"amount":-0.4716796875},{"first":75,"second":118,"amount":-0.8203125},{"first":75,"second":121,"amount":-0.8203125},{"first":76,"second":34,"amount":-6.890625},{"first":76,"second":39,"amount":-6.890625},{"first":76,"second":65,"amount":0.3896484375},{"first":76,"second":67,"amount":-1.3330078125},{"first":76,"second":71,"amount":-1.3330078125},{"first":76,"second":79,"amount":-1.3330078125},{"first":76,"second":81,"amount":-1.3330078125},{"first":76,"second":84,"amount":-5.6396484375},{"first":76,"second":85,"amount":-1.107421875},{"first":76,"second":86,"amount":-3.5888671875},{"first":76,"second":87,"amount":-2.9326171875},{"first":76,"second":89,"amount":-4.9013671875},{"first":76,"second":117,"amount":-0.90234375},{"first":76,"second":118,"amount":-2.7275390625},{"first":76,"second":121,"amount":-2.7275390625},{"first":77,"second":65,"amount":0.369140625},{"first":77,"second":84,"amount":-0.5947265625},{"first":77,"second":88,"amount":0.3486328125},{"first":77,"second":89,"amount":-0.57421875},{"first":78,"second":65,"amount":0.369140625},{"first":78,"second":84,"amount":-0.5947265625},{"first":78,"second":88,"amount":0.3486328125},{"first":78,"second":89,"amount":-0.57421875},{"first":79,"second":44,"amount":-2.091796875},{"first":79,"second":46,"amount":-2.091796875},{"first":79,"second":65,"amount":-0.4306640625},{"first":79,"second":84,"amount":-0.5537109375},{"first":79,"second":86,"amount":-0.451171875},{"first":79,"second":88,"amount":-0.451171875},{"first":79,"second":89,"amount":-0.8818359375},{"first":79,"second":90,"amount":-0.4716796875},{"first":80,"second":44,"amount":-6.64453125},{"first":80,"second":46,"amount":-6.64453125},{"first":80,"second":65,"amount":-2.830078125},{"first":80,"second":74,"amount":-4.1015625},{"first":80,"second":88,"amount":-0.6357421875},{"first":80,"second":90,"amount":-0.533203125},{"first":80,"second":97,"amount":-0.2255859375},{"first":80,"second":99,"amount":-0.2666015625},{"first":80,"second":100,"amount":-0.2666015625},{"first":80,"second":101,"amount":-0.2666015625},{"first":80,"second":103,"amount":-0.2666015625},{"first":80,"second":111,"amount":-0.2666015625},{"first":80,"second":113,"amount":-0.2666015625},{"first":80,"second":118,"amount":0.3076171875},{"first":80,"second":121,"amount":0.3076171875},{"first":81,"second":84,"amount":-0.8818359375},{"first":81,"second":86,"amount":-0.57421875},{"first":81,"second":87,"amount":-0.41015625},{"first":81,"second":89,"amount":-0.7177734375},{"first":82,"second":84,"amount":-1.640625},{"first":82,"second":86,"amount":-0.3896484375},{"first":82,"second":89,"amount":-0.984375},{"first":84,"second":44,"amount":-4.470703125},{"first":84,"second":45,"amount":-4.7578125},{"first":84,"second":46,"amount":-4.470703125},{"first":84,"second":65,"amount":-1.6201171875},{"first":84,"second":67,"amount":-0.57421875},{"first":84,"second":71,"amount":-0.57421875},{"first":84,"second":74,"amount":-4.921875},{"first":84,"second":79,"amount":-0.57421875},{"first":84,"second":81,"amount":-0.57421875},{"first":84,"second":83,"amount":-0.328125},{"first":84,"second":84,"amount":0.328125},{"first":84,"second":86,"amount":0.328125},{"first":84,"second":87,"amount":0.3076171875},{"first":84,"second":89,"amount":0.328125},{"first":84,"second":97,"amount":-2.3173828125},{"first":84,"second":99,"amount":-2.0302734375},{"first":84,"second":100,"amount":-2.0302734375},{"first":84,"second":101,"amount":-2.0302734375},{"first":84,"second":103,"amount":-2.0302734375},{"first":84,"second":109,"amount":-2.2353515625},{"first":84,"second":110,"amount":-2.2353515625},{"first":84,"second":111,"amount":-2.0302734375},{"first":84,"second":112,"amount":-2.2353515625},{"first":84,"second":113,"amount":-2.0302734375},{"first":84,"second":115,"amount":-2.37890625},{"first":84,"second":117,"amount":-1.9482421875},{"first":84,"second":118,"amount":-1.4765625},{"first":84,"second":120,"amount":-1.5791015625},{"first":84,"second":121,"amount":-1.4765625},{"first":84,"second":122,"amount":-1.23046875},{"first":85,"second":65,"amount":-0.451171875},{"first":86,"second":44,"amount":-4.6142578125},{"first":86,"second":45,"amount":-0.7587890625},{"first":86,"second":46,"amount":-4.6142578125},{"first":86,"second":65,"amount":-1.5380859375},{"first":86,"second":67,"amount":-0.2666015625},{"first":86,"second":71,"amount":-0.2666015625},{"first":86,"second":79,"amount":-0.2666015625},{"first":86,"second":81,"amount":-0.2666015625},{"first":86,"second":97,"amount":-0.943359375},{"first":86,"second":99,"amount":-0.90234375},{"first":86,"second":100,"amount":-0.90234375},{"first":86,"second":101,"amount":-0.90234375},{"first":86,"second":103,"amount":-0.90234375},{"first":86,"second":111,"amount":-0.943359375},{"first":86,"second":113,"amount":-0.90234375},{"first":86,"second":117,"amount":-0.57421875},{"first":86,"second":118,"amount":-0.2255859375},{"first":86,"second":121,"amount":-0.2255859375},{"first":87,"second":44,"amount":-2.5224609375},{"first":87,"second":45,"amount":-1.23046875},{"first":87,"second":46,"amount":-2.5224609375},{"first":87,"second":65,"amount":-0.8818359375},{"first":87,"second":84,"amount":0.287109375},{"first":87,"second":97,"amount":-0.6767578125},{"first":87,"second":99,"amount":-0.6357421875},{"first":87,"second":100,"amount":-0.6357421875},{"first":87,"second":101,"amount":-0.6357421875},{"first":87,"second":103,"amount":-0.6357421875},{"first":87,"second":111,"amount":-0.6357421875},{"first":87,"second":113,"amount":-0.6357421875},{"first":87,"second":117,"amount":-0.3896484375},{"first":88,"second":45,"amount":-0.943359375},{"first":88,"second":67,"amount":-0.5126953125},{"first":88,"second":71,"amount":-0.5126953125},{"first":88,"second":79,"amount":-0.5126953125},{"first":88,"second":81,"amount":-0.5126953125},{"first":88,"second":86,"amount":0.287109375},{"first":88,"second":99,"amount":-0.533203125},{"first":88,"second":100,"amount":-0.533203125},{"first":88,"second":101,"amount":-0.533203125},{"first":88,"second":103,"amount":-0.533203125},{"first":88,"second":111,"amount":-0.4306640625},{"first":88,"second":113,"amount":-0.533203125},{"first":88,"second":117,"amount":-0.4306640625},{"first":88,"second":118,"amount":-0.6357421875},{"first":88,"second":121,"amount":-0.6357421875},{"first":89,"second":44,"amount":-4.3271484375},{"first":89,"second":45,"amount":-1.06640625},{"first":89,"second":46,"amount":-4.3271484375},{"first":89,"second":65,"amount":-1.927734375},{"first":89,"second":67,"amount":-0.5947265625},{"first":89,"second":71,"amount":-0.5947265625},{"first":89,"second":74,"amount":-1.96875},{"first":89,"second":79,"amount":-0.5947265625},{"first":89,"second":81,"amount":-0.5947265625},{"first":89,"second":83,"amount":-0.328125},{"first":89,"second":84,"amount":0.3486328125},{"first":89,"second":85,"amount":-1.96875},{"first":89,"second":86,"amount":0.369140625},{"first":89,"second":87,"amount":0.3486328125},{"first":89,"second":88,"amount":0.2666015625},{"first":89,"second":89,"amount":0.369140625},{"first":89,"second":97,"amount":-1.4970703125},{"first":89,"second":99,"amount":-1.3330078125},{"first":89,"second":100,"amount":-1.3330078125},{"first":89,"second":101,"amount":-1.3330078125},{"first":89,"second":103,"amount":-1.3330078125},{"first":89,"second":109,"amount":-0.8203125},{"first":89,"second":110,"amount":-0.8203125},{"first":89,"second":111,"amount":-1.3330078125},{"first":89,"second":112,"amount":-0.8203125},{"first":89,"second":113,"amount":-1.3330078125},{"first":89,"second":115,"amount":-1.189453125},{"first":89,"second":117,"amount":-0.7998046875},{"first":89,"second":118,"amount":-0.41015625},{"first":89,"second":120,"amount":-0.4716796875},{"first":89,"second":121,"amount":-0.41015625},{"first":89,"second":122,"amount":-0.615234375},{"first":90,"second":65,"amount":0.2666015625},{"first":90,"second":67,"amount":-0.533203125},{"first":90,"second":71,"amount":-0.533203125},{"first":90,"second":79,"amount":-0.533203125},{"first":90,"second":81,"amount":-0.533203125},{"first":90,"second":99,"amount":-0.4306640625},{"first":90,"second":100,"amount":-0.4306640625},{"first":90,"second":101,"amount":-0.4306640625},{"first":90,"second":103,"amount":-0.4306640625},{"first":90,"second":111,"amount":-0.4306640625},{"first":90,"second":113,"amount":-0.4306640625},{"first":90,"second":117,"amount":-0.3896484375},{"first":90,"second":118,"amount":-0.5537109375},{"first":90,"second":121,"amount":-0.5537109375},{"first":91,"second":74,"amount":-0.369140625},{"first":91,"second":85,"amount":-0.369140625},{"first":97,"second":34,"amount":-1.3740234375},{"first":97,"second":39,"amount":-1.3740234375},{"first":97,"second":118,"amount":-0.3076171875},{"first":97,"second":121,"amount":-0.3076171875},{"first":98,"second":34,"amount":-0.5947265625},{"first":98,"second":39,"amount":-0.5947265625},{"first":98,"second":118,"amount":-0.2255859375},{"first":98,"second":120,"amount":-0.3076171875},{"first":98,"second":121,"amount":-0.2255859375},{"first":98,"second":122,"amount":-0.3076171875},{"first":99,"second":34,"amount":-0.2255859375},{"first":99,"second":39,"amount":-0.2255859375},{"first":101,"second":34,"amount":-0.287109375},{"first":101,"second":39,"amount":-0.287109375},{"first":101,"second":118,"amount":-0.2666015625},{"first":101,"second":121,"amount":-0.2666015625},{"first":102,"second":34,"amount":0.328125},{"first":102,"second":39,"amount":0.328125},{"first":102,"second":41,"amount":0.41015625},{"first":102,"second":93,"amount":0.369140625},{"first":102,"second":99,"amount":-0.4921875},{"first":102,"second":100,"amount":-0.4921875},{"first":102,"second":101,"amount":-0.4921875},{"first":102,"second":103,"amount":-0.4921875},{"first":102,"second":113,"amount":-0.4921875},{"first":102,"second":125,"amount":0.3896484375},{"first":104,"second":34,"amount":-2.1328125},{"first":104,"second":39,"amount":-2.1328125},{"first":107,"second":99,"amount":-0.41015625},{"first":107,"second":100,"amount":-0.41015625},{"first":107,"second":101,"amount":-0.41015625},{"first":107,"second":103,"amount":-0.41015625},{"first":107,"second":113,"amount":-0.41015625},{"first":109,"second":34,"amount":-2.1328125},{"first":109,"second":39,"amount":-2.1328125},{"first":110,"second":34,"amount":-2.1328125},{"first":110,"second":39,"amount":-2.1328125},{"first":111,"second":34,"amount":-2.7890625},{"first":111,"second":39,"amount":-2.7890625},{"first":111,"second":118,"amount":-0.3076171875},{"first":111,"second":120,"amount":-0.4306640625},{"first":111,"second":121,"amount":-0.3076171875},{"first":111,"second":122,"amount":-0.328125},{"first":112,"second":34,"amount":-0.5947265625},{"first":112,"second":39,"amount":-0.5947265625},{"first":112,"second":118,"amount":-0.2255859375},{"first":112,"second":120,"amount":-0.3076171875},{"first":112,"second":121,"amount":-0.2255859375},{"first":112,"second":122,"amount":-0.3076171875},{"first":114,"second":34,"amount":0.328125},{"first":114,"second":39,"amount":0.328125},{"first":114,"second":44,"amount":-2.5224609375},{"first":114,"second":46,"amount":-2.5224609375},{"first":114,"second":97,"amount":-0.8203125},{"first":114,"second":99,"amount":-0.3896484375},{"first":114,"second":100,"amount":-0.3896484375},{"first":114,"second":101,"amount":-0.3896484375},{"first":114,"second":103,"amount":-0.3896484375},{"first":114,"second":111,"amount":-0.41015625},{"first":114,"second":113,"amount":-0.3896484375},{"first":114,"second":118,"amount":0.369140625},{"first":114,"second":121,"amount":0.369140625},{"first":116,"second":111,"amount":-0.41015625},{"first":118,"second":34,"amount":0.3076171875},{"first":118,"second":39,"amount":0.3076171875},{"first":118,"second":44,"amount":-2.1943359375},{"first":118,"second":46,"amount":-2.1943359375},{"first":118,"second":97,"amount":-0.3076171875},{"first":118,"second":99,"amount":-0.2666015625},{"first":118,"second":100,"amount":-0.2666015625},{"first":118,"second":101,"amount":-0.2666015625},{"first":118,"second":103,"amount":-0.2666015625},{"first":118,"second":111,"amount":-0.3076171875},{"first":118,"second":113,"amount":-0.2666015625},{"first":119,"second":44,"amount":-2.54296875},{"first":119,"second":46,"amount":-2.54296875},{"first":120,"second":99,"amount":-0.41015625},{"first":120,"second":100,"amount":-0.41015625},{"first":120,"second":101,"amount":-0.41015625},{"first":120,"second":103,"amount":-0.41015625},{"first":120,"second":111,"amount":-0.41015625},{"first":120,"second":113,"amount":-0.41015625},{"first":121,"second":34,"amount":0.3076171875},{"first":121,"second":39,"amount":0.3076171875},{"first":121,"second":44,"amount":-2.1943359375},{"first":121,"second":46,"amount":-2.1943359375},{"first":121,"second":97,"amount":-0.3076171875},{"first":121,"second":99,"amount":-0.2666015625},{"first":121,"second":100,"amount":-0.2666015625},{"first":121,"second":101,"amount":-0.2666015625},{"first":121,"second":103,"amount":-0.2666015625},{"first":121,"second":111,"amount":-0.3076171875},{"first":121,"second":113,"amount":-0.2666015625},{"first":122,"second":99,"amount":-0.328125},{"first":122,"second":100,"amount":-0.328125},{"first":122,"second":101,"amount":-0.328125},{"first":122,"second":103,"amount":-0.328125},{"first":122,"second":111,"amount":-0.328125},{"first":122,"second":113,"amount":-0.328125},{"first":123,"second":74,"amount":-0.41015625},{"first":123,"second":85,"amount":-0.41015625}]}');

/***/ })

}]);