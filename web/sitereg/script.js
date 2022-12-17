function checker() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let who = document.getElementById("selection").value;

    if (name == null || name.length < 3) {
        console.log("Ваше имя должно состоять не менее 3 символов");
    }

    else if (age < 14 || age > 30) {
        console.log("Ваш возраст должен быть не менее 14 или не более 30");
    }

    else if (who != "student") {
        console.log("Вход только для студентов");
    }
    else {
        alert("Молодец!")
        window.location = "http://127.0.0.1:5500"
    }
}

