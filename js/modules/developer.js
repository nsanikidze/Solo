import { setContent } from "../common/common.js";
export class Filter {
    constructor(filterObjects) {
        console.log(this.filterObjects);
        this.filterObjects = filterObjects;
    }

    _getFilterObjects() {
        console.log(this.filterObjects);
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
    rander() {
        setContent("selects", this._getFilterObjects());
    }
}



export class Checkbox {
    constructor(checkboxObjects) {
        this.checkboxObjects = checkboxObjects;
    }

    _getCheckboxList() {
        let list = this.checkboxObjects.map((obj) => {
            return ` <label class="checkbox-container">${obj.value}
                        <input type="checkbox"  value="${obj.value}">
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

    _getInputs(){
        return `<div class="price-filter-inputs">
                        <input type="text" value="დან"  class="price-input" id="input-price-from">
                        <div> - </div>
                        <input type="text" value="მდე" class="price-input" id="input-price-to">
                        <input type="submit" value=">" class="price-input-button" >
                </div>`;
    }

    _getRadiobuttonList() {
        let list = this.radiobuttonObjects.map((obj) => {
            return ` <label class="radio-button-container">${obj.from} - ${obj.to}
            <input type="radio" checked="checked" name="radio">
            <span class="radio-button-checkmark"></span>
          </label>`;
        });
        return list.join(" ");
    }
    rander() {
        return this._getInputs() + this._getRadiobuttonList();
    }
}