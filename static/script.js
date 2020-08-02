console.log("Heyyy")
const encodeButton = document.getElementById('encode')
const decodeButton = document.getElementById('decode')
const main = document.getElementById('main')
const verLine = document.getElementById('verLine')
const details = document.getElementById('details')


encodeButton.addEventListener('click', () =>{
    console.log("Encode clicked")
    main.classList.remove('buttonContainer')
    main.classList.add('newButtonContainer')
    verLine.style.display='inline-block'
    details.style.display = 'flex'
})

decodeButton.addEventListener('click', () =>{console.log("decode clicked")})
