function calculateAndDisplay() {
    // Get total bill and number of people - return an error if not a number
    let bill = parseFloat(document.getElementById('totalBill').value)
    if(isNaN(bill)) {
        alert('Error: Please enter a valid bill amount- only numbers')
        return
    }
    let numOfPpl = parseInt(document.getElementById('numOfPpl').value)
    if(isNaN(numOfPpl)) {
        alert('Error: Please enter a valid number of people- only numbers')
        return
    }
    // Recognize how much user wants to tip
    let service = document.getElementById('serviceQuality').value
    if(service === 'Great') {
        tipPercent = 0.2
    } else if(service === 'Good') {
        tipPercent = 0.15
    } else if(service === 'Poor') {
        tipPercent = 0.1
    } else if(service === 'Default') {
        alert('Error: Please enter a valid service quality')
        return
    }
    // Calculations for total bill, tips, and amount per person
    let tipTotal = tipPercent * bill
    let totalBill = tipTotal + bill
    let amountPerPerson = totalBill / numOfPpl
    // Display these numbers
    document.getElementById('tipResult').innerText = 'Tip: $' + tipTotal.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amountPerPerson.toFixed(2)
}