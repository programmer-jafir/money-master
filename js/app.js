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

    const totalAmount1 = document.getElementById('balance');
    const totalAmountText1 = totalAmount1.innerText;
    totalAmount1.innerText = Income - total;
 
});
