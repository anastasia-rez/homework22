function IMT(){
    let height = +heightUser.value;
    let mass = +massUser.value;
    
    if(height > 3){
        height = height / 100;
    }
    
    let index = mass / height ** 2;

    index = Math.round(index * 100) / 100;

    resultPlace.innerHTML = index;

    if(index < 16){
        resultText.innerHTML = 'Выраженный дефицит массы тела';
    } else if(index < 18.5){
        resultText.innerHTML = 'Недостаточная (дефицит) масса тела';
    } else if(index < 25){
        resultText.innerHTML = 'Норма';
    } else if(index < 30){
        resultText.innerHTML = 'Избыточная масса тела (предожирение)';
    } else if(index < 35){
        resultText.innerHTML = 'Ожирение 1 степени';
    } else if(index < 40){
        resultText.innerHTML = 'Ожирение 2 степени';
    } else if(index > 40){
        resultText.innerHTML = 'Ожирение 3 степени';
    }
}

