function Item(Id){
        const Item = document.getElementById(Id);
        const ItemText = Item.value;
        const ItemTextNum = parseFloat(ItemText);       
        return ItemTextNum;        
};

function itemsTotal(){
    const Food = Item('food');
    const Rent = Item('rent');
    const Clothes = Item('clothes');
    const total = Food + Rent + Clothes;
    return total;
}

function Balance(){
    const Balance = document.getElementById('balance');
    const BalanceText = parseFloat(Balance.innerText);
    Balance.innerText = Item('income') - itemsTotal();
    return Balance.innerText;
};
    // Calculate started 

document.getElementById('Calculate').addEventListener('click', function(event){



    // Total Expenses

    const totalAmount = document.getElementById('total-expenses');
    const totalAmountText = totalAmount.innerText;
    totalAmount.innerText = itemsTotal();

    // Balance update 

    Balance();
    
});
function saveAmount(){

    // Save Amount persentence

const saveAmount = document.getElementById('save-input');
const saveAmountInput = saveAmount.value;
const saveAmountDevided  = Item('income') / parseFloat(100);
const saveAmountMultiplay = saveAmountDevided * saveAmountInput;

    // Save amount output

const saveAmountOutput = document.getElementById('save-amount');
    const saveAmountOutputText = saveAmountOutput.innerText;
    saveAmountOutput.innerText = saveAmountMultiplay;

    // Remaining Balance

    const RemainingAmount = document.getElementById('remaining-balance');
    const RemainingAmountText = RemainingAmount.innerText;
    RemainingAmount.innerText = Balance() -  saveAmountOutput.innerText;
}