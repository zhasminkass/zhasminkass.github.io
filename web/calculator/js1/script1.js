
let a = document.querySelector('#bttn')
let b = document.querySelector('#age')

a.addEventListener('click', asr)

function asr(){
    
    let userName = document.querySelector('#name').value
    let user = document.querySelector('#age').value
    let pass = document.querySelector('#apassword').value
    let select = document.querySelector('#select').value
    let nestud= document.querySelector('#nestud').value
    
    if(userName.length < 4) {
        alert("Вы некорректно ввели имя. Должно быть от 4 символов")
        return
    }

    if (user <= 14 || user > 30){
        alert("Некорректно введен возраст")
        return
        }
    else () {

        return
    }
    switch (select){
        
       case nestud: alert("Вход только для студентов")
       return
    }
    window.location.href = 'http://127.0.0.1:5500/project1.html/calculator/js.html'
}