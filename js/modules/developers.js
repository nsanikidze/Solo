import { setContent } from "../common/common.js";
export class Developer {
    constructor(devObjects) {
        console.log(this.devObjects);
        this.devObjects = devObjects;
    }

    _getDevObjects() {
        console.log(this.devObjects);
        let list = this.devObjects.map((obj) => {
            return ` <div class="catalog-item-container">
                        <div class="catalog-item-img" style="background: url('.${obj.image.url}'); background-size: 100%"></div>
                        <h3>${obj.projectName}</h3>
                        <h4>${obj.priceLabel}</h4>
                        <h5>${obj.address}</h5>
                        <div class="catalog-item-details"> გაიგეთ მეტი</div>
                    </div>`;
        });
        return list.join(" ");
    }
    rander() {
        setContent("catalog-items-id", this._getDevObjects());
    }
}
