const buttonEle = document.querySelector("#input-btn");
const inputEle = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtnEle = document.querySelector("#delete-btn");
const tabBtnEle = document.querySelector("#tab-btn");
let myLeads = [];
let tabLeads = [];
let storedLeads = null;

storedLeads = JSON.parse(localStorage.getItem("myLeads"));
if (storedLeads) {
    myLeads = storedLeads;
    render(myLeads);
}



function render(leads) {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {
        listItem += `<li> 
                        <a href="${leads[i]}" target="_blank" > 
                            ${leads[i]} 
                        </a>
                    </li>`;
    }
    ulEl.innerHTML = listItem;
}


buttonEle.addEventListener("click", () => {
    myLeads.push(inputEle.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEle.value = "";
});


deleteBtnEle.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

tabBtnEle.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
})
// const viewButtonEle = document.querySelector("#view-btn");
// const leadsParaEle = document.querySelector("#leads");

// viewButtonEle.addEventListener("click", () => {
//     leadsParaEle.textContent = "";
//     for(let i = 0; i < myLeads.length; i++){
//         leadsParaEle.textContent += myLeads[i] + "\n";
//     }
// })

