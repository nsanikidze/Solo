import { app } from "./common/common.js";
import { Filter } from "./modules/developer.js";
import { Radiobutton } from "./modules/developer.js";
import { Checkbox } from "./modules/developer.js";

let cities = new Checkbox(app.cities);
app.filter[0].content = cities.rander();

let priceList = new Radiobutton(app.priceList);
app.filter[1].content = priceList.rander();

let developingStatus = new Checkbox(app.developingStatus);
app.filter[2].content = developingStatus.rander();


let filters = new Filter(app.filter);
filters.rander();




let filtersHeadersBtn = document.querySelectorAll('.filter-hearder');
let filtersHeadersContent = document.querySelectorAll('.filter-body');
for(let i=0; i< filtersHeadersBtn.length;i++){
    filtersHeadersBtn[i].addEventListener('click', () =>  {
        filtersHeadersBtn[i].children[1].classList.toggle("active");
        filtersHeadersBtn[i].children[2].classList.toggle("active");
        
        filtersHeadersBtn[i].children[1].classList.toggle("hidden");
        filtersHeadersBtn[i].children[2].classList.toggle("hidden");

        filtersHeadersBtn[i].classList.toggle("filter-hearder-gray");
        filtersHeadersBtn[i].classList.toggle("filter-hearder-white");
        
        filtersHeadersContent[i].classList.toggle("active");
        filtersHeadersContent[i].classList.toggle("hidden");
    });
  }