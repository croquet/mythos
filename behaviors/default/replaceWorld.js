// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

class ReplaceWorldPawn {

    get targetURL() { return this.actor._cardData.targetURL; }

    setup() {
        this.addEventListener("pointerDown", "onPointerDown");
    }

    onPointerDown() {
        document.body.style.background = "black";
        const canvas = document.getElementById("ThreeCanvas");
        canvas.style.transition = "opacity 1s";
        canvas.style.opacity = 0;
        const targetURL = this.resolveTargetURL();
        setTimeout(() => Microverse.sendToShell("world-replace", { targetURL}), 1000);
    }

    resolveTargetURL() {
        // if targetURL does not have a sessionName or password, we need to resolve it
        // we do this by appending our own sessionName and password to the URL
        const target = new URL(this.targetURL, location.href);
        const targetSearchParams = target.searchParams;
        const targetHashParams = new URLSearchParams(target.hash.slice(1));
        let sessionName = targetSearchParams.get("q");
        let password = targetHashParams.get("pw");
        const our = new URL(location.href);
        if (!sessionName || !password) {
            if (!sessionName) {
                sessionName = our.searchParams.get("q");
                password = '';
                targetSearchParams.set("q", sessionName);
            }
            if (!password) {
                const ourHashParams = new URLSearchParams(our.hash.slice(1));
                password = ourHashParams.get("pw");
                targetHashParams.set("pw", password);
                target.hash = targetHashParams.toString();
            }
        }
        for (const setting of [ "showSettings", "voiceChat" ]) {
            if (our.searchParams.has(setting)) targetSearchParams.set(setting, "true");
        }
        // remove origin from targetURL if it is the same as the target URL
        // we could also construct an even shorter relative URL, but this is easier
        let targetURL = target.toString();
        if (target.origin === location.origin) {
            targetURL = targetURL.slice(location.origin.length);
            if (target.pathname === location.pathname) {
                targetURL = targetURL.slice(location.pathname.length);
            }
        }
        if (this.actor.targetURL !== targetURL) this.say("setCardData", { targetURL });
        // send full URL to shell
        return target.toString();
    }

}

export default {
    modules: [
        {
            name: "ReplaceWorld",
            actorBehaviors: [],
            pawnBehaviors: [ReplaceWorldPawn],
        },
    ]
}
