const bill = document.querySelector(".bill-input");
const num = document.querySelector(".num-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const tipCustom = document.querySelector(".custom");
const tipPer = document.querySelector(".tip-num");
const totalPer = document.querySelector(".total-num");
const reset = document.querySelector(".resetBtn");
const messageBill = document.querySelector(".message-bill");
const messageNum = document.querySelector(".message-num");

bill.addEventListener("input", () => {
    reset.style.filter = "none";
    if(!bill.value || bill.value == "0") {
        messageBill.textContent = "Can't be zero";
    } else {
        messageBill.textContent = "";
    }
});
num.addEventListener("input", () => {
    reset.style.filter = "none";
    if(!num.value || num.value == "0") {
        messageNum.textContent = "Can't be zero";
    } else {
        messageNum.textContent = "";
    }
});
reset.addEventListener("click", () => {
    window.location.reload();
})
// Get access to one of the elements having the same class
var runWhenClicked = (e) => {
    e.preventDefault();
    if(!bill.value) {
        messageBill.textContent = "Can't be zero";
    }
    if(!num.value) {
        messageNum.textContent = "Can't be zero";
    }
    tipPer.textContent = `$${((bill.value * Number(e.target.value))/num.value).toFixed(2)}`;
    totalPer.textContent = `$${((bill.value * (1 + Number(e.target.value)))/num.value).toFixed(2)}`;
}
for(var i = 0; i < tipBtns.length; i++) {
    tipBtns[i].addEventListener("click", runWhenClicked, false);
}
for (button in tipBtns) {
    tipBtns[button].onclick = function() {
        tipBtns.forEach(function(btn){
          btn.classList.remove('active');
        })
        this.classList.add('active');
    }
    tipCustom.addEventListener("input", (e) => {
        tipBtns.forEach(btn => {
            btn.classList.remove('active');
        })
        if(!bill.value || bill.value == "0") {messageBill.textContent = "Can't be zero";}
        if(!num.value || num.value == "0") {messageNum.textContent = "Can't be zero";}
        tipPer.textContent = `$${((bill.value * Number(tipCustom.value) * 0.01)/num.value).toFixed(2)}`;
        totalPer.textContent = `$${((bill.value * (1 + Number(tipCustom.value) * 0.01))/num.value).toFixed(2)}`;
        
    })
}
// Prevent input letters
tipCustom.addEventListener("keypress", (e) => {
    if((e.which < 48 || e.which > 57) && e.key != ".") {
        e.preventDefault();
    } 
})
bill.addEventListener("keypress", (e) => {
    if((e.which < 48 || e.which > 57) && e.key != ".") {
        e.preventDefault();
    } 
})
num.addEventListener("keypress", (e) => {
    if((e.which < 48 || e.which > 57) && e.key != ".") {
        e.preventDefault();
    } 
})

