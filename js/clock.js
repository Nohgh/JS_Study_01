const clock =document.querySelector("h2#clock");
clock.innerHTML="dd";

function getClock(){
    const date=new Date();
    //console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
    //이 함수를 2초마다 실행 -> 인터벌 함수사용하기 
    const hour=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    /*
    new Date().getHours() ->19 정수
    String(new Date().getHours()) ->"19" 문자열 
    */ 



    clock.innerText=`${hour} : ${minutes} : ${seconds}`;//innerHtml도 가능
    //console.log(typeof(clock.innerText))//string
    // "1".padStart(2,"0"); --> 1이라는 문자의 길이가 2가 안되면 0(문자)를 추가한다.
}
//setInterval(sayHello,5000);//2개의 인수를 받고 첫번째는 함수 , 두번째는 초를 입력 
//setTimeout: 함수와 얼마나 기다리는지 시간 입력 
getClock()//WebPage기 로드되자마자 getClock을 실행하고 또 매초마다 다시 실행되도록
setInterval(getClock,1000);
//1 01