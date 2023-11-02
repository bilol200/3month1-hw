function validateInput() {
  const inputText = document.getElementById('textInput').value;

     const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/;
     const isURL = urlPattern.test(inputText);

     const emailPattern = /^[\w.-]+@[a-z]+\.[a-z]{2,}$/;
     const isEmail = emailPattern.test(inputText);

     if (isURL) {
         document.getElementById('urlResult').innerHTML = 'Ссылка: Верно';
         document.getElementById('urlResult').className = 'valid';
     } else {
         document.getElementById('urlResult').innerHTML = 'Ссылка: Неверно';
         document.getElementById('urlResult').className = 'invalid';
     }

     if (isEmail) {
         document.getElementById('emailResult').innerHTML = 'Email: Верно';
         document.getElementById('emailResult').className = 'valid';
     } else {
         document.getElementById('emailResult').innerHTML = 'Email: Неверно';
         document.getElementById('emailResult').className = 'invalid';
     }
 }