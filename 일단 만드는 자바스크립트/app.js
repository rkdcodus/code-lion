const lotto = [];
const lottoArea = document.querySelector(".lottoArea");

while(lotto.length < 6 ){
    const num = parseInt(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1 ){
        lotto.push(num);
    }
}

lotto.sort((a,b) => a-b);

for(var i=0;i<lotto.length;i++){
    lottoArea.innerHTML += `<div class="lotto">${lotto[i]}</div>`;
}
