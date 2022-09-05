import { setContent } from "../common/common.js";
import { devApiURL } from "../common/config.js";
import { devCatalog } from "../common/devCatalogObj.js";

let cityParam = "";
let devStatusParam = "";
let fromParam = "";
let toParam = "";
let sortBy = "";
let searchStr = "";

export class Filter {
    constructor(filterObjects) {
        this.filterObjects = filterObjects;
    }
    _getFilterObjects() {
        let list = this.filterObjects.map((obj) => {
            return ` <div class="filter">
                        <div class="filter-hearder filter-hearder-gray">
                            <h5>${obj.headertext}</h5>
                            <div class="filter-up-icon  filter-icon active" >
                                <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" focusable="false" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" class=""></path></svg>
                            </div>
                            <div class="filter-down-icon filter-icon hidden">
                                <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" focusable="false" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""></path></svg>
                            </div>

                        </div>
                        <div class="filter-body active"> 
                           ${obj.content}
                        </div>
                        
                    </div>`;
        });
        return list.join(" ");
    }

    _getRadioButtonAction() {
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
    }

    rander() {

        let cities = new Checkbox(devCatalog.cities, "city");
        devCatalog.filter[0].content = cities.rander();


        let priceList = new Radiobutton(devCatalog.priceList);
        devCatalog.filter[1].content = priceList.rander();

        let developingStatus = new Checkbox(devCatalog.developingStatus, "devStatus");
        devCatalog.filter[2].content = developingStatus.rander();

        setContent("selects", this._getFilterObjects());
        this._getRadioButtonAction();

        //cityParam = getCityParams();
        //devStatusParam = getDevStatusParams();
        console.log(1);
        getParamList('city', 'cityParam');
        console.log(2);
        getParamList('devStatus', 'typeParam');
        priceList.fillPriceInputs();
        priceList.clickSubmit();
    }
}



export class Checkbox {
    constructor(checkboxObjects, checkboxClass) {
        this.checkboxObjects = checkboxObjects;
        this.checkboxClass = checkboxClass;
    }

    _getCheckboxList() {
        let list = this.checkboxObjects.map((obj) => {
            return ` <label class="checkbox-container ">${obj.value}
                        <input type="checkbox" name="${this.checkboxClass}"  value="${obj.value}">
                        <span class="checkmark"></span>
                    </label>`;
        });
        return list.join(" ");
    }
    rander() {
        return this._getCheckboxList();
    }
}

export class Radiobutton {
    constructor(radiobuttonObjects) {
        this.radiobuttonObjects = radiobuttonObjects;
    }

    _getInputs() {
        return `<div class="price-filter-inputs">
                        <input type="text" value="დან"  class="price-input" id="input-price-from">
                        <div class="price-input-line"> - </div>
                        <input type="text" value="მდე" class="price-input" id="input-price-to">
                        <input type="submit" value=">" class="price-input-button" >
                </div>`;
    }

    _getRadiobuttonList() {
        let list = this.radiobuttonObjects.map((obj) => {
            let text;
            let checked;
            if (obj.value === undefined) {
                text = ` ${obj.from} - ${obj.to}`;
                checked = ""
            } else {
                text = obj.value;
                checked = 'checked="checked"';
            }
            return ` <label class="radio-button-container"> 
            ${text}
            <input type="radio"  ${checked} name="radio" value="${obj.index}">
            <span class="radio-button-checkmark"></span>
          </label>`;
        });
        return list.join(" ");
    }
    fillPriceInputs() {
        let priceItems = document.querySelectorAll('input[type=radio][name=radio]');
        for (let priceItem of priceItems) {
            priceItem.addEventListener("change", () => {
                for (let i = 0; i < priceItems.length; i++) {
                    if (priceItems[i].checked) {
                        let from = document.getElementById("input-price-from");
                        let to = document.getElementById("input-price-to");
                        if (i === 0) {
                            from.value = "დან";
                            to.value = "მდე";
                            fromParam = "";
                            toParam = "";
                        } else {
                            from.value = devCatalog.priceList[i].from;
                            to.value = devCatalog.priceList[i].to;
                            fromParam = `&fromParam=${from.value}`;
                            toParam = `&toParam=${to.value}`;
                        }
                        getService();
                    }
                }
            })
        };
    }

    clickSubmit() {
        let submit = document.querySelector('.price-input-button');
        submit.addEventListener('click', () => {
            let from = document.getElementById("input-price-from").value;
            let to = document.getElementById("input-price-to").value;
            if (from >= 0) {
                fromParam = `&fromParam=${from}`;
            } else {
                fromParam = "";
            }
            if (to >= 0) {
                toParam = `&toParam=${to}`;
            } else {
                toParam = "";
            }
            getService();
        })
    }

    rander() {
        return this._getInputs() + this._getRadiobuttonList();
    }
}

export class Developer {
    constructor(devObjects) {
        this.devObjects = devObjects;
    }

    _getDevObjects() {
        let list = this.devObjects.map((obj) => {
            return ` <div class="catalog-item-container">
                        <div class="catalog-item-img" style="background: url('.${obj.image.url}'); background-size: 100%"></div>
                        <div class="catalog-item-text">
                        <h3>${obj.projectName}</h3>
                        <h4>${obj.priceLabel}</h4>
                        <h5>${obj.address}</h5>
                        </div>
                        <div class="catalog-item-details"> გაიგეთ მეტი</div>
                    </div>`;
        });
        if (list.join(" ") === "") {
            return `<div class="emplty-catalog-container">
                        <div class="no-items">
                            <img src="undefined">
                            <h4><!---->კატეგორია ცარიელია<!----></h4>
                            <p><!---->მონიშნულ კატეგორიაში ვერ მოიძებნა მონაცემები, გთხოვთ მონიშნოთ სხვა კატეგორია<!----></p>
                        </div>
                    </div>`;

        } else {
            return ` <div id="catalog-items-id">
                        ${list.join(" ")} 
                    </div>`;
        }
    }
    rander() {
        setContent("catalog-id", this._getDevObjects());
        sortCatalogItems();
        search();
    }
}




export let getService = () => {
    fetch(
        `${devApiURL.baseURL}${cityParam}${devStatusParam}${fromParam}${toParam}${sortBy}${searchStr}&limit=${devApiURL.queryLimit}`
    ).then((res) => {
        return res.json();
    })
        .then((res) => {
            let resObj = new Developer(res.data.items);
            console.log(`${devApiURL.baseURL}${cityParam}${devStatusParam}${fromParam}${toParam}${sortBy}${searchStr}&limit=${devApiURL.queryLimit}`);
            resObj.rander();
        });
};




let sortCatalogItems = () => {
    let sortItems = document.querySelectorAll('select[name=sort]');
    for (let item of sortItems) {
        item.addEventListener('change', () => {
            if (item.value === "") {
                sortBy = "";
            } else {
                sortBy = `&sortBy=${item.value}`;
            }
            getService();
        })
    }

}

let search = () => {
    let searchItem = document.querySelector('#search-input');
    searchItem.addEventListener('input', () => {
        if (searchItem.value === "") {
            searchStr = "";
        } else {
            searchStr = `&searchStr=${searchItem.value}`;
        }
        getService();
    })

}


let getParamList = (checkboxName, paramName) => {
    let checkboxItems = document.querySelectorAll(`input[type=checkbox][name=${checkboxName}]`);
    for (let checkboxItem of checkboxItems) {
        checkboxItem.addEventListener('change', () => {
            let paramStr = `&${paramName}=`;
            let checkedItems = Array.from(checkboxItems).filter(i => i.checked).map(i => i.value);
            if (checkedItems.length == 0) {
                paramStr = "";
            } else {
                for (let checkedItem of checkedItems) {
                    if (checkedItem === "ყველა") {
                        paramStr = "";
                        break;
                    } else {
                        paramStr += '%2C' + checkedItem.replace(" ", "+");
                    }
                }
            }
            if (checkboxName === "city") {
                cityParam = paramStr;
            } else {
                devStatusParam = paramStr;
            }
            getService();
        })
    }
}