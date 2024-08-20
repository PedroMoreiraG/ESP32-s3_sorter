document.getElementById('myButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    const body = document.body;
    
    // Genera un valor aleatorio para decidir entre "Analisis" y "Pase"
    const isAnalysis = Math.random() < 0.2;
    const counterAnalisis =+1;
    if (isAnalysis) {
        messageElement.textContent = 'Analisis';
        body.style.backgroundColor = 'red';
        body.classList.add('blink');
    } else {
        messageElement.textContent = 'Pase';
        body.style.backgroundColor = 'green';
        body.classList.remove('blink');
    }
});
console.log(counterAnalisis);