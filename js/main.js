import { app } from "./common/common.js";
import { Filter } from "./modules/developer.js";

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