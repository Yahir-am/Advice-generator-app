const numberOfAdvice = document.getElementById("number-of-advice");
const advice = document.getElementById("advice");
const dice = document.getElementById("dice");

async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    numberOfAdvice.innerHTML = `#${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`;
}
dice.addEventListener('click',getAdvice);