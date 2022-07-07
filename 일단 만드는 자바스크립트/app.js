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
    lottoArea.innerHTML += `<div class="lotto lotto${i}">${lotto[i]}</div>`;    
}

for(var i=0; i<lotto.length; i++){
    const colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16)
    // 출처: https://tranquilotter.tistory.com/5 [평온한수달의 평온한이야기:티스토리] 랜덤 색상
     document.querySelector(`.lotto${i}`).style.backgroundColor = colorCode;
}