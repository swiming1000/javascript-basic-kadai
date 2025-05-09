const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text2 ='ボタンをクリックしました'
btn.addEventListener('click',()=>{
    text.textContent=text2

})