const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 let passOne = document.getElementById("pass-one")
 let passTwo = document.getElementById("pass-two")
 let generatebtn = document.getElementById('generate-btn')
 let icon = document.getElementById("icon")


 let passwordCharacters = 15

function getCharacter(){
    let randomPassOne = Math.floor(Math.random() * characters.length)
     return characters[randomPassOne]
}

function generate(){
    let password = ''
    for (let i=0; i<passwordCharacters; i++) {
        password += getCharacter()
    }
   return password
}

generatebtn.addEventListener('click', function(){
    const generatePasswordOne = generate()
    const generatePasswordTow = generate()
    passOne.textContent = generatePasswordOne
    passTwo.textContent = generatePasswordTow
})

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon")
    document.body.classList.toggle('dark-theme');
})
