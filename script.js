function calculate() {


    //Declaring variables for each ID on output elements
    let monthlyPayment = document.getElementById('monthlypayment');
    let totalPayment = document.getElementById('totalpayment');
    let totalInterest = document.getElementById('totalinterest');


    //Declaring variables for each ID on input elements
    let loanAmount = parseFloat(amount.value);
    let interest = parseFloat(annual.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

    // Calculate Interest
    var x = Math.pow(1 + interest, payments);
    var monthly = (loanAmount * x * interest) / (x - 1);


    // Fill in the output fields, rounding to 2 decimal places
    monthlyPayment.innerHTML = monthly.toFixed(2);
    totalPayment.innerHTML = (monthly * payments).toFixed(2);
    totalInterest.innerHTML = ((monthly * payments) - loanAmount).toFixed(2);



}
