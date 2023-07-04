const img=["0.jpg","1.jpg","2.jpg","3.jpg"];
const todaysImg= img[Math.floor(Math.random()*img.length)];

const bgImg=document.createElement("img");
bgImg.src=`img/${todaysImg}`;
document.body.appendChild(bgImg);
//const backImg=document.querySelector("img")
//console.log(backImg)
//backImg.innerHtml=`img/${todaysImg}` 
//<img src="" alt="none">
