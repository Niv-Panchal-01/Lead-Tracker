const buttonEle = document.querySelector("#input-btn");
const inputEle = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");


buttonEle.addEventListener("click", () => {
    renderLead();
    inputEle.value = "";
});

// const viewButtonEle = document.querySelector("#view-btn");
// const leadsParaEle = document.querySelector("#leads");

// viewButtonEle.addEventListener("click", () => {
//     leadsParaEle.textContent = "";
//     for(let i = 0; i < myLeads.length; i++){
//         leadsParaEle.textContent += myLeads[i] + "\n";
//     }
// })

function renderLead() {
    let listItem = `<li> 
                        <a href="${inputEle.value}" target="_blank" > 
                            ${inputEle.value} 
                        </a>
                    </li>`;
    ulEl.innerHTML += listItem;
}
