export const app = {
    filter: [
        {
            headertext: "აირჩიე ქალაქი",
            content: "test test test test testtest test test test test test test test test test test test testtest",
        },
        {
            headertext: "კვადრატულის ფასი",
            content: "test",
        },
        {
            headertext: "მშენებლობის სტატუსი",
            content: "test",
        },
    ]
}

export let setContent = (id, value) => { 
    let element = document.getElementById(id);
    console.log(element);
    element.innerHTML = value;
  };