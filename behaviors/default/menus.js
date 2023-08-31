// Menus
// Croquet Microverse

// the following import statement is solely for the type checking and
// autocompletion features in IDE.  A Behavior cannot inherit from
// another behavior or a base class but can use the methods and
// properties of the card to which it is installed.
// The prototype classes ActorBehavior and PawnBehavior provide
// the features defined at the card object.

import {ActorBehavior, PawnBehavior} from "../PrototypeBehavior";

class MenuActor extends ActorBehavior {
    setup() {
    }
}

class MenuPawn extends PawnBehavior {
    setup(){
        if(this.menuItems)this.teardown();
        this.menuItems = [];
        this.installMenu("+100 bots", "./assets/images/masks-theater.png", ()=>this.publish("menu", "addBots"));
        this.installMenu("Remove bots", "./assets/images/masks-theater-off.png", ()=>this.publish("menu", "killBots"));
        this.installMenu("Toggle Fireball", "./assets/images/fireball.png", ()=>this.publish("menu","FireballToggle"));
        this.installMenu("Toggle Sound", "./assets/images/speaker-icon.png", ()=>this.publish("menu", "startStopWind"));
        this.installMenu("Code on Github", "./assets/images/github.png", ()=>this.linkTo("https://github.com/croquet/mythos"));
    
    }

    linkTo(url) {
        let div = document.createElement("div");
        url = url || "https://croquet.io"; // default to Croquet
        div.innerHTML = `<a id="link" target="_blank" rel="noopener noreferrer" href="${url}"></a>`;
        let a = div.querySelector("#link");
        a.click();
        div.remove();
    }

    installMenu(menuText, menuImage, callback){
        let menu = document.body.querySelector("#worldMenu");
        if (menu) {
            let menuItemDiv = document.createElement("div");
            menuItemDiv.innerHTML = 
                `<div id="worldMenu-foo" class="menu-label menu-item">
                <div class="menu-icon"></div>
                <span class="menu-label-text">${menuText}</span>
                </div>`;
            let menuItem = menuItemDiv.firstChild;
            if (menuImage) {
                let menuIcon = menuItem.querySelector(".menu-icon");
                menuIcon.style.setProperty("background-image", `url(${menuImage})`);
                menuIcon.style.setProperty("background-size", "contain");
            }
            menuItem.addEventListener("click", callback);
            menu.appendChild(menuItem);

            this.menuItems.push(menuItem); // needs to be an array
        }   
    }

    teardown() {
        this.menuItems.forEach( m=>m.remove());
        this.menuItems = [];
    }
}


export default {
    modules: [
        {
            name: "Menus",
            actorBehaviors: [MenuActor],
            pawnBehaviors: [MenuPawn],
        }
    ]
}
