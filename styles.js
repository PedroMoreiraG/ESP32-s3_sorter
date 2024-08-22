document.getElementById('myButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    const body = document.body;
    
    // Genera un valor aleatorio para decidir entre "Analisis" y "Pase"
    
    const app = document.getElementById('app');
    const numberProb = document.getElementById('prob');
    const numberDecimal = numberProb.value / 100;
     
    const isAnalysis = Math.random() < numberDecimal;
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

function calcProb(){

    const number = document.createElement('p');
    number.textContent = numberDecimal;
    app.appendChild(number);
    
}