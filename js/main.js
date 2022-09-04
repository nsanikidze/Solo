import { devCatalog } from "./common/devCatalogObj.js";
import { Filter } from "./modules/developers.js";
import { Radiobutton } from "./modules/developers.js";
import { Checkbox } from "./modules/developers.js";   
import { getService } from "./modules/developers.js";   


let filters = new Filter(devCatalog.filter);
filters.rander();


getService();

  