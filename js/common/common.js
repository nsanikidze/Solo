export const app = {
    filter: [
        {
            headertext: "აირჩიე ქალაქი",
            content: "",
        },
        {
            headertext: "კვადრატულის ფასი",
            content: "",
        },
        {
            headertext: "მშენებლობის სტატუსი",
            content: "",
        },
    ],
    cities: [
        { value: "ყველა", },
        { value: "თბილისი", },
        { value: "ქუთაისი", },
        { value: "ბათუმი", },
        { value: "ბაკურიანი", },
        { value: "გუდაური", },
        { value: "აბასთუმანი", },
        { value: "მანგლისი", },
    ],
    priceList: [
        {
            from: 1000,
            to: 1500,
        },
        {
            from: 1500,
            to: 2000,
        },
        {
            from: 2000,
            to: 2500,
        },
        {
            from: 2500,
            to: 3000,
        },
        {
            from: 3000,
            to: 3500,
        },
        {
            from: 3500,
            to: 4000,
        },
        {
            from: 4000,
            to: 4500,
        },
        {
            from: 4500,
            to: 5000,
        },
        {
            from: 5000,
            to: 10000,
        },
    ],
    developingStatus: [
        { value: "ყველა", },
        { value: "მწვანე კარკასი", },
        { value: "თეთრი კარკასი", },
        { value: "შავი კარკასი", },
        { value: "გარემონტებული", },
        { value: "ლურჯი კარკასი", },
        { value: "ჭკვიანი კარკასი", },
    ]
}

export let setContent = (id, value) => {
    let element = document.getElementById(id);
    console.log(element);
    element.innerHTML = value;
};