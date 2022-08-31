export const app = {
    filter: [
        {
            headertext: "აირჩიე ქალაქი",
            content: "",
        },
        {
            headertext: "კვადრატულის ფასი",
            content: "test",
        },
        {
            headertext: "მშენებლობის სტატუსი",
            content: "test",
        },
    ],
    cities: [
        { name: "ყველა",},
        { name: "თბილისი",},
        { name: "ქუთაისი",},
        { name: "ბათუმი",},
        { name: "ბაკურიანი",},
        { name: "გუდაური",},
        { name: "აბასთუმანი",},
        { name: "მანგლისი",},
    ],
    developingStatus: [
        { name: "ყველა",},
        { name: "მწვანე კარკასი",},
        { name: "თეთრი კარკასი",},
        { name: "შავი კარკასი",},
        { name: "გარემონტებული",},
        { name: "ლურჯი კარკასი",},
        { name: "ჭკვიანი კარკასი",},
    ]
}

export let setContent = (id, value) => { 
    let element = document.getElementById(id);
    console.log(element);
    element.innerHTML = value;
  };