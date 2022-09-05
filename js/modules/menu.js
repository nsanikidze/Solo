import { setContent } from "../common/common.js";


class TopMenu{
    constructor(topMenuItems){
       this.topMenuItems = topMenuItems;
    }
     
    _getTopMenuItems() {
        let list = this.topMenuItems.map((obj) => {
            return `<li ${obj.class}><a>
                       ${obj.text}
                    </a></li>`;
        });
        return list.join(" ");
    }

    rander(){
        setContent("top-menu-id", this._getTopMenuItems());

    }

}


class TopMenuIcon{
    constructor(topMenuIcons){
       this.topMenuIcons = topMenuIcons;
    }
     
    _getTopMenuIcons() {
        let list = this.topMenuIcons.map((obj) => {
            return `<div class="${obj.class}">
                      ${obj.svg}
                   </div>`;
        });
        return list.join(" ");
    }

    rander(){
        setContent("top-menu-icons-id", this._getTopMenuIcons());

    }

}

class BottomMenu{
    constructor(menuItems){
       this.menuItems = menuItems;
    }
     
    _getMenuItems() {
        let list = this.menuItems.map((obj) => {
            return `<li><a>
                        ${obj.text}
                    </a></li>`;
        });
        return list.join(" ");
    }

    rander(){
        setContent("menu-id", this._getMenuItems());

    }

}

export class Menu{
    constructor(menu){
       this.menu = menu;

    }
    rander(){
        let topMenuItems = new TopMenu(this.menu.topMenu);
        topMenuItems.rander();

        let topMenuIcons = new TopMenuIcon(this.menu.icon);
        topMenuIcons.rander();

        let menuItems = new BottomMenu(this.menu.menuItems);
        menuItems.rander();
    }

}