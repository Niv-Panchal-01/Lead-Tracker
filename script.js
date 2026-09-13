const buttonEle = document.querySelector("#input-btn");
const inputEle = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLeads = [];
let storedLeads = null;

buttonEle.addEventListener("click", () => {
    myLeads.push(inputEle.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLead();
    inputEle.value = "";
});

storedLeads = JSON.parse(localStorage.getItem("myLeads"));
if(storedLeads){
    myLeads = storedLeads;    
    renderLead();
}

// const viewButtonEle = document.querySelector("#view-btn");
// const leadsParaEle = document.querySelector("#leads");

// viewButtonEle.addEventListener("click", () => {
//     leadsParaEle.textContent = "";
//     for(let i = 0; i < myLeads.length; i++){
//         leadsParaEle.textContent += myLeads[i] + "\n";
//     }
// })


function renderLead() {
    let listItem = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItem += `<li> 
                        <a href="${myLeads[i]}" target="_blank" > 
                            ${myLeads[i]} 
                        </a>
                    </li>`;
    }
    ulEl.innerHTML = listItem;    
}