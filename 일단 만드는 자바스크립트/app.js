// 로또 번호 추첨기

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

//자기소개서 글자 수 세기

const countTextValue = () => {
    let content = document.querySelector("#jasoseol").value;  //const로 하면 글자수 제한이 먹히지 않음 const는 재할당 재선언이 불가능. let과 var는 가능. 
    const contentLength = document.querySelector(".countText");
    if(content.length > 200) {
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    contentLength.innerHTML = `(${content.length}/200)`;
}
countTextValue();
