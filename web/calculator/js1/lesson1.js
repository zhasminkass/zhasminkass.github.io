let a = prompt("первое число") 
a = Number(a) 
function inputnumber(){
    let n = Number(prompt("Введите число:"));
    if (!Number.isInteger(n))
    {
        alert("Вы ввели не тот формат!")
        return inputnumber();
    }
} 
else{ 
    function inputnumber(){
        let n = Number(prompt("Введите второе число:"));
        if (!Number.isInteger(n))
        {
            alert("Вы ввели не тот формат!")
            return inputnumber();
        }
    }
}
    function uslovie () {
        let zn = prompt("введите знак: ");  
    
        if (zn == '+') {
            res = n1 + n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '-') {
            res = n1 - n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '*') {
            res = n1 * n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(zn == '/') {
            res = n1 / n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else {
            return uslovie()
            let zn = prompt("введите знак заново: "); 
        }
    }
    uslovie()

