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
                        <div class="catalog-item-img"></div>
                        <h3>იორკ თაუერსი</h3>
                        <h4>10%-იანი ფასდაკლება York Town-ისგან</h4>
                        <h5></h5>
                        <div class="catalog-item-details"> გაიგეთ მეტი</div>
                    </div>`;
        });
        return list.join(" ");
    }
    rander() {
        setContent("selects", this._getDevObjects());
    }
}
