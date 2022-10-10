const oppoStatus = [{ 
    K_OPPO_STATUS: 1, STATUS: "1. Initial Contact", SUCCESS: 0, }, 
    { K_OPPO_STATUS: 2, STATUS: "2. Demonstration", SUCCESS: 25, }, 
    { K_OPPO_STATUS: 3, STATUS: "3. Proposal", SUCCESS: 50, }, 
    { K_OPPO_STATUS: 4, STATUS: "4. Negotiation", SUCCESS: 75, }, 
    { K_OPPO_STATUS: 5, STATUS: "5. Order", SUCCESS: 100, }, ];
     let select = document.querySelector("select");
     console.log("select");
     let input = document.querySelector("input"); 
     let output = document.querySelector(".output"); 
     let button = document.querySelector("button"); 
     //console.log(button) 
     function renderingContent() 
     { for (let i = 0; i < oppoStatus.length; i++) 
        { let status = oppoStatus[i].STATUS; 
            let success = oppoStatus[i].SUCCESS;
             let opt = document.createElement("option"); 
             select.appendChild(opt); opt.value = success; 
             opt.innerHTML = status; 
        } 
        select.addEventListener("change", function() 
        { 
            let optValue = select.value; 
            input.value = optValue; 
        }); 
        button.addEventListener("click", function() 
        { 
            output.textContent = select.value; 
        }
        ); 
    } 
    renderingContent();
