/*
При потере фокуса инпутом валидировать его значение - если оно правильное, то сделать рамочку инпута зеленой, в противном случае - красной.
Принцип валидации:
1. Email должен содержать '@' и '.' (Если можете проверить последовательность одного за другим - хорошо, 
   если не можете - проверьте просто на содержание и того, и другого)
2. Пароль должен быть не меньше 5 символов и содежать что-либо из спец-символов:
[`, !, @, #, $, %, ^, &, *, (, )]
*/

const [input1, input2] = document.querySelectorAll('input');
const symbols =['`','!','@','#', '$', '%','^', '&', '*', '(', ')',';']

input1.addEventListener('blur', validateEmail);
input2.addEventListener('blur', validatePassword);


function validatePassword(event){
    
    const inputValue = event.target.value.split('');
    // console.log(inputValue)
    if(inputValue.length >= 5){
        inputValue.some(
            (element) => {
                for(const item of symbols){
                    if(element === item){
                       return event.target.classList.add('valid');
                    }
                }
                return event.target.classList.add('invalid')
            }
        )
    } else{
        event.target.classList.add('invalid');
    }
    
};

function validateEmail(event){
    const emailArray = event.target.value.split('');
    if(emailArray.includes('@' && '.')){
        event.target.classList.add('valid');
    } else{
        event.target.classList.add('invalid');
    }
    
}
