// Menus
// Croquet Microverse

class MenuActor {
    setup() {
    }
}

class MenuPawn {
    setup(){
        if(this.menuItems)this.teardown();
        this.menuItems = [];
        this.installMenu("+100 bots", "./assets/images/masks-theater.png", ()=>this.publish("menu", "addBots"));
        this.installMenu("Remove bots", "./assets/images/masks-theater-off.png", ()=>this.publish("menu", "killBots"));
        this.installMenu("Toggle Sound", "./assets/images/speaker-icon.png", ()=>this.publish("menu", "startStopWind"));
        this.installMenu("Toggle Fireball", "./assets/images/fireball.png", ()=>this.publish("menu","FireballToggle"));
    }

    installMenu(menuText, menuImage, callback){
        let menu = document.body.querySelector("#worldMenu");
        if (menu) {
            let menuItemDiv = document.createElement("div");
            menuItemDiv.innerHTML = 
                `<div id="worldMenu-foo" class="menu-label menu-item">
                <span class="menu-label-text">${menuText}</span>
                <div class="menu-icon"></div>
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
