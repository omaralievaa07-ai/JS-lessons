
// условия оператора if/else swich/case

// let email = prompt('Введите ваш email');
// let password = prompt('Введите ваш пароль');
// let uzerEmail = 'admin'
// let uzerPassword='admin123'

// if (email=== uzerEmail && password === uzerPassword){
//     alert("вы успешно вошли в систему")
// }else{
//     alert("Неверный логин или пароль")
// }




// let number = prompt ("Введите число");
// if (number > 0) {
//     alert("отрицаельное");
// } else if (number < 0) {
//     alert("неотрицательное");
// } else {
//     alert("Ноль");
// }

let month=prompt ('Введите любой месяц');
switch(month){
  case'январь':
  case 'февраль':
  case 'март':   
    alert('Зима');
     break;
       case'апрел':
       case 'май':
       case 'март':   
    alert('весна');
    break;
       case'июнь':
       case 'июль':
       case 'август':   
    alert('лето');
    default:
        alert('Такого месяца не существует')
}