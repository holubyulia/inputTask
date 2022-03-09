/*
При потере фокуса инпутом валидировать его значение - если оно правильное, то сделать рамочку инпута зеленой, в противном случае - красной.
Принцип валидации:
1. Email должен содержать '@' и '.' (Если можете проверить последовательность одного за другим - хорошо, 
   если не можете - проверьте просто на содержание и того, и другого)
2. Пароль должен быть не меньше 5 символов и содежать что-либо из спец-символов:
[`, !, @, #, $, %, ^, &, *, (, )]
*/

const [input1, input2] = document.querySelectorAll('input');
// const symbols =['`','!','@','#', '$', '%','^', '&', '*', '(', ')',';']
const regexPassword = new RegExp(/\b\w{5,}[!-\/,:-?,\[-`]{1,}\w{1,}\b/)

input1.addEventListener('blur', validateEmail);
input2.addEventListener('blur', validatePassword);


function validatePassword({ target, target: { value: password } }) {
    if (password.search(/\b\w{5,}[!-\/,:-?,\[-`]{1,}\w{1,}\b/))  {
      target.classList.add('valid')
    } else{
      target.classList.add('invalid');
    }
}


function validateEmail({target, target: {value: email}}) {
    if (email.search(/\w{4-14}\b@[a-z]{2,7}\.[a-z]{1,3}/)) {
        target.classList.add('valid')
    } else{
         target.classList.add('invalid');
    }
}
