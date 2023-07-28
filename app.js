const input = document.querySelector('input')
const label = document.querySelector('label')
const pass = document.querySelector('.pass')
const wrapper = document.querySelector('.wrapper')
const register = document.querySelector('.register')
const rapper = document.querySelector('.rapper')
const button = document.querySelector('.logins')
const login = document.getElementById('login')
const error = document.querySelector('.error')
const errors = document.querySelector('.errors')
const calm = document.querySelector('.calm')
const calmer = document.querySelector('.calmer')
const form = document.querySelector('form')
const click = document.getElementById('click')
const check = document.querySelector('.check')
const names = document.querySelector('.names')
const passwords = document.querySelector('.passwords')
const emails = document.querySelector('.emails')
const passes = document.querySelector('.passes')
window.addEventListener('load', ()=>{
wrapper.classList.add('wraper')
rapper.classList.remove('raper')
})
button.addEventListener('click', ()=>{
    wrapper.classList.remove('wraper')
    rapper.classList.add('raper')
})
login.addEventListener('click', ()=>{
    wrapper.classList.add('wraper')
    rapper.classList.remove('raper')
})
click.addEventListener('click', (e)=>{
    e.preventDefault();
})

function message(){
    const email = document.getElementById('email');
    const email2 = document.getElementById('email2');
    const username = document.getElementById('name');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const confirmpassword = document.getElementById('confirm password');
    const pop = document.querySelector('.popup')
    const popup = document.querySelector('.pop')
    if(email.value === '') {
      error.style.display = 'block'
    }else if (email.value && password.value != ''){
        pop.classList.add('showpop')
    }
    if (password.value === ''){
        errors.style.display = 'block'
    }
    if (email2.value === '') {
        emails.style.display = 'block'
    }
    if(confirmpassword.value === ''){
        passes.style.display = 'block'
    }
    if(password2.value === ''){
        passwords.style.display = 'block'
    }
    if(username.value === ''){
        names.style.display = 'block'
    }else if (email2.value && confirmpassword.value && password2.value && username.value != '') {
        popup.classList.add('showpop')
        pop.classList.remove('showpop')
    }
setTimeout(function (){
pop.classList.remove('showpop')
popup.classList.remove('showpop')
email.value = ''
password.value = ''
email2.value = ''
confirmpassword.value = ''
password2.value = ''
username.value = ''
},5000)
    setTimeout(function (){
        emails.style.display = 'none'
        passes.style.display = 'none'
        passwords.style.display = 'none'
        names.style.display = 'none'
        emails.style.display = 'none'
       calm.style.display = 'none'
       error.style.display = 'none'
       errors.style.display = 'none'
       check.style.display = 'none'
       calmer.style.display = 'none'
    },1000)
}


