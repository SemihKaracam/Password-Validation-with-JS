// DOM elementlerini seçme
const eyeSlashIcon = document.querySelector(".fa-eye-slash")
const eyeIcon = document.querySelector(".fa-eye")
const eyeIcons = document.querySelectorAll(".eye-icon")
const passwordInput = document.querySelector("[type='password']")
const passwordValidationContainer = document.querySelector(".password-validation")
const validationListItems = document.querySelectorAll(".validation-list-item")


// göz ikonu açılıp kapandığında password'un görünürlüğünü değiştir
for(let i = 0;i<eyeIcons.length;i++){
    console.log(eyeIcons[i])
    eyeIcons[i].addEventListener("click",()=>{
        if(eyeIcons[i].classList.contains('fa-eye')){
            eyeIcon.style.setProperty("display","none")
            eyeSlashIcon.style.setProperty("display","block")
            passwordInput.setAttribute("type","text")
        }else{
            eyeIcon.style.setProperty("display","block")
            eyeSlashIcon.style.setProperty("display","none")
            passwordInput.setAttribute("type","password")
        }
    })
}




// Password'un validasyon kurallarını sağlayıp sağlamadığını kontrol eden fonksiyonlar

function hasUpperCase(string){
    return string !== string.toLowerCase()
}

function hasLowerCase(string){
    return string !== string.toUpperCase()
}

function hasNumber(string) {
    return /\d/.test(string);
}



//Password inputu her değiştiğinde tetiklenen validasyon kontrolleri, eğer koşul sağlanıyorsa renk yeşile dönücek,sağlanmıyorsa griye dönücek

passwordInput.addEventListener('input',()=>{
    validationListItems.forEach((el)=>{
        // console.log(el.children[1].textContent)
        if(el.children[1].textContent.includes("Lowercase")){
            if(hasLowerCase(passwordInput.value)){
                el.style.setProperty("color","#7E9D43")
            }
            else{
                el.style.setProperty("color","gray")
            }
        }else if(el.children[1].textContent.includes("Uppercase")){
            if(hasUpperCase(passwordInput.value)){
                el.style.setProperty("color","#7E9D43")
            }
            else{
                el.style.setProperty("color","gray")
            }
        }else if(el.children[1].textContent.includes("A Number")){
            if(hasNumber(passwordInput.value)){
                el.style.setProperty("color","#7E9D43")
            }
            else{
                el.style.setProperty("color","gray")
            }
        }else if(el.children[1].textContent.includes("Atleast 8 Characters")){
            if(passwordInput.value.length >= 8){
                el.style.setProperty("color","#7E9D43")
            }
            else{
                el.style.setProperty("color","gray")
            }
        }
    })
})




// password input'u focus haldeyken password validation durumunu göster, focus değilse gösterme
document.addEventListener("click",()=>{
    if(passwordInput === document.activeElement){
        passwordValidationContainer.style.setProperty("display",'block')
    }else{
        passwordValidationContainer.style.setProperty("display",'none')
        console.log(document.activeElement)
    }
})



