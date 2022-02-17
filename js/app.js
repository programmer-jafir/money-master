function Item(Id){
        const Item = document.getElementById(Id);
        const ItemText = Item.value;
        const ItemTextNum = parseFloat(ItemText);
        return ItemTextNum;
};

    // Calculate started 

document.getElementById('Calculate').addEventListener('click', function(event){

    const Income = Item('income');
    const Food = Item('food');
    const Rent = Item('rent');
    const Clothes = Item('clothes');
    const total = Food + Rent + Clothes;

    // Total Expenses

    const totalAmount = document.getElementById('total-expenses');
    const totalAmountText = totalAmount.innerText;
    totalAmount.innerText = total;

    // Balance update 

    const Balance = document.getElementById('balance');
    const BalanceText = Balance.innerText;
    Balance.innerText = Income - total;

    
});
function saveAmount(){
const saveAmount = document.getElementById('save-input');
const saveAmountInput = saveAmount.value;
const saveAmountDevided  = Item('income') / parseFloat(100);
const saveAmountMultiplay = saveAmountDevided * saveAmountInput;
console.log(saveAmountMultiplay);

const saveAmountOutput = document.getElementById('save-amount');
    const saveAmountOutputText = saveAmountOutput.innerText;
    saveAmountOutput.innerText = saveAmountMultiplay;
};