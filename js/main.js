import { devCatalog } from "./common/devCatalogObj.js";
import { menu } from "./common/menuObj.js";
import { Filter } from "./modules/developers.js";
import { getService } from "./modules/developers.js"; 
import { Menu } from "./modules/menu.js"; 


let menuItems = new Menu(menu);
menuItems.rander();

let filters = new Filter(devCatalog.filter);
filters.rander();

getService();

  