
const closedFace = document.querySelector('.closed-face')
const openFace = document.querySelector('.open-face')

closedFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open-face'))
   openFace.classList.add('active')
    closedFace.classList.remove('active')
})

openFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed-face'))
    closedFace.classList.add('active')
    openFace.classList.remove('active')
})





























// const closedFace = document.querySelector('.closed-face')
// const openFace = document.querySelector('.open-face')

// //add event listener

// closedFace.addEventListener('click',()=>{
//     if(openFace.classList.contains('open-face')){
//         openFace.classList.add('active')
//    closedFace.classList.remove('active')
//     }
// })
// openFace.addEventListener('click',()=>{
//     if(closedFace.classList.contains('closed-face')){
//         closedFace.classList.add('active')
//         openFace.classList.remove('active')


//     }
// })

