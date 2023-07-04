
const loginForm =document.querySelector('#login-form');
const loginInput =document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting")


const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username";

//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을떄 사용한다.

function onLoginSubmit(event){
    event.preventDefault();//브라우저에서 기본적으로 submit or enter을 하면 새로고침 되는것을 막기위한 코드
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)//key:"username",value:username
     //니코짱 코드
    paintGreeting();

    


}
    //loginForm.classList.add(HIDDEN_CLASSNAME);//hidden이라는 클래스 선택자를 먼저 만들고 display none을 줌 
    //그 후 로그인 form전체를 클릭 시 클래스이름을 hidden으로 주고 display변경해준다.
    //console.log(event);//event로 정보가 넘어온다.
    //console.log(username);

    //user에게 매번 물어보는것이 아닌 이름을 저장
    //local storage:사용자의 정보를 저장하게 해주는 api


function paintGreeting(){
    //이 코드들을 중복으로 사용하기 때문에 함수로 만드는것이 더 좋다고 판단

    const username=localStorage.getItem(USERNAME_KEY);
    //localStorage에 저장된 값이 있기때문에 인자로 받아오지 않아도 된다.
    greeting.innerHTML=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//loginForm.addEventListener("submit",onLoginSubmit)//submit은 엔터나 버튼 클릭

const savedUsername =localStorage.getItem(USERNAME_KEY);//첫단계 

if(savedUsername === null){
    //local storage에 저장된 값이 없으면 show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit)//submit은 엔터나 버튼 클릭

}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //null이 아니면 greeting show
    paintGreeting();
}
//console.log(savedUsername);
