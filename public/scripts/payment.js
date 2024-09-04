document.getElementById('paymentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const playerId = document.getElementById("playerId").value;
    const totalAmount = document.getElementById("totalAmount").value; // Забираем итоговую сумму непосредственно из формы

    const paymentData = {
        playerId: playerId,
        totalAmount: totalAmount  // Отправляем итоговую сумму
    };

    try {
        const response = await fetch('/api/process-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData)
        });

        if (!response.ok) throw new Error('Ошибка платежа');

        const responseData = await response.json();
        window.location.href = responseData.paymentUrl; // Переадресация на страницу платежа
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("errorMessage").textContent = 'Ошибка при обработке платежа';
    }
});

function updateTotalAmount() {
    const currencySelector = document.getElementById("donationCurrency");
    const exchangeRate = {
        Rubles: 0.33, // 1 рубль = 3 CampoCoins
        Hryvnia: 7, // 1 гривна = 7 CampoCoins
    };

    const selectedCurrency = currencySelector.value;
    const campoCoinsInput = document.getElementById("campoCoins").value;
    const totalAmountInput = campoCoinsInput * exchangeRate[selectedCurrency];
    const roundedTotalAmount = Math.round(totalAmountInput);
    document.getElementById("totalAmount").value = roundedTotalAmount;
}