import { app } from "./common/common.js";
import { Developer } from "./modules/developers.js";
import { Filter } from "./modules/filter.js";
import { Radiobutton } from "./modules/filter.js";
import { Checkbox } from "./modules/filter.js";
import { devApiURL } from "./common/config.js";

let cities = new Checkbox(app.cities, "city");
app.filter[0].content = cities.rander();

let priceList = new Radiobutton(app.priceList);
app.filter[1].content = priceList.rander();

let developingStatus = new Checkbox(app.developingStatus, "devStatus");
app.filter[2].content = developingStatus.rander();


let filters = new Filter(app.filter);
filters.rander();




let filtersHeadersBtn = document.querySelectorAll('.filter-hearder');
let filtersHeadersContent = document.querySelectorAll('.filter-body');
for (let i = 0; i < filtersHeadersBtn.length; i++) {
    filtersHeadersBtn[i].addEventListener('click', () => {
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


fetch(
    `${devApiURL.baseURL}&limit=${devApiURL.queryLimit}`
).then((res) => {
    return res.json();
})
    .then((res) => {
        console.log(res);
        let resObj = new Developer(res.data.items);
        resObj.rander();
    });

    

//https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?fromParam=3500&toParam=4000&cityParam=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98%2C%E1%83%90%E1%83%91%E1%83%90%E1%83%A1%E1%83%97%E1%83%A3%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98&typeParam=%E1%83%9B%E1%83%AC%E1%83%95%E1%83%90%E1%83%9C%E1%83%94+%E1%83%99%E1%83%90%E1%83%A0%E1%83%99%E1%83%90%E1%83%A1%E1%83%98&skip=0&limit=9

let cityParam ="&cityParam=";

let devStatusParam ="&typeParam=";
let fromParam = "&fromParam=";
let toParam = "&toParam=";


let checkboxCities = document.querySelectorAll('input[type=checkbox][name=city]');
console.log(checkboxCities);

for (let city of checkboxCities) {
    city.addEventListener('change', () => {
        let cityParams = Array.from(checkboxCities) // Convert checkboxes to an array to use filter and map.
            .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

        console.log(cityParams);
        for (let cCu of cityParams){
            if(cCu ==="ყველა"){
               cityParam = "";
               break;
            } else{
            cityParam += '%2C'+cCu;
            }
        }
        console.log(cityParam);
        fetch(
            `${devApiURL.baseURL}&limit=${devApiURL.queryLimit}${devStatusParam}${cityParam}`
        ).then((res) => {
            return res.json();
        })
            .then((res) => {
                console.log(res);
                let resObj = new Developer(res.data.items);
                resObj.rander();
            });

    })
}




let checkboxStatus = document.querySelectorAll('input[type=checkbox][name=devStatus]');
console.log(checkboxStatus);

for (let devStatus of checkboxStatus) {
    devStatus.addEventListener('change', () => {
        let devStatusParams = Array.from(checkboxStatus) // Convert checkboxes to an array to use filter and map.
            .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

        console.log(devStatusParams);
        for (let cCu of devStatusParams){
            if(cCu ==="ყველა"){
                devStatusParam = "";
               break;
            } else{
                devStatusParam += '%2C'+cCu.replace(" ", "+");
            }
        }
        console.log(devStatusParam.replace(" ", "+"));
        fetch(
            `${devApiURL.baseURL}&limit=${devApiURL.queryLimit}${devStatusParam}${cityParam}`
        ).then((res) => {
            return res.json();
        })
            .then((res) => {    
                console.log(res);
                let resObj = new Developer(res.data.items);
                resObj.rander();
            });

    })
}





let radio = document.querySelectorAll('input[type=radio][name=radio]');
        for( let rd of radio){
        rd.addEventListener("change", () => {
            let selectedSize;
            console.log(1);
            for (let radioButton of radio) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
            console.log(selectedSize);
            let i = selectedSize.indexOf("@");
            let from = document.getElementById("input-price-from");
            let to = document.getElementById("input-price-to");
            from.value = selectedSize.substr(0,i);
            to.value = selectedSize.substr(i+1, selectedSize.length-1);           
        })
        };
    