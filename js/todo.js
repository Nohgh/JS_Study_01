
/** todo를 받기 위해 만든 form */
const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");//ul
const button=document.querySelector("li button");
/**todolist가 입력될때 로컬스토리지에 저장하기 위해 일단 배열만들고 push*/
const toDos=[]; 

/**todos배열의 내용을 localStorage에 넣음.*/
function saveTodos(){
    //localStorage.setItem("todos",toDos);
    /*문제점:중복된 문자 입력시 초기화 됨, 새로고침 시 화면상 없어짐
    =>이 문제점을 해결하려면 지금은 문자로 저장되지만 배열로 저장할 수 있게 해야함
    ===> JSON.stringify 사용 ==> 배열로 저장 및 중복 가능*/
    //js object나 array나 어떤것이든 String으로 바꿔주는 기능
    localStorage.setItem("todos",JSON.stringify(toDos));

}


/**X버튼 클릭시 해당 요소의 부모 li삭제 */
function deletetoDo(event){
    const li= event.target.parentElement; //버튼 클릭시 삭제할 부모요소
    li.remove();
    //console.log(event.target.parentElement.innerText);
    //console.log event확인,target으로 어떤 프로퍼티 있는지 확인, 
    //부모요소 확인 부모요소li의 innerText확인
}

/**to Do List를 그려준다(ul밑의 li요소로 추가).*/
function paintTodo(newTodo){
    const li=document.createElement("li");
    //li에 그냥 넣는게 아니라 li밑에 span을 주고 거기에 넣음 나중에 button추가
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deletetoDo)
    li.append(span);
    li.append(button);
    toDoList.appendChild(li); //ul요소 밑에 추가
    
    //createElement로 요소 생성
    //append로 요소 밑에 붙이기 
    //innertext로 글자추가
}

/**form에서 sumbit을 했을때 생기는 이벤트 처리  */
function handleTodoSubmit(event){//첫번쨰 인자로 자바스크립트가 방금 발생한 이벤트를 받아온다.
    event.preventDefault();//preventDefault를 하게 되면 이벤트가 발생했을때 웹상에서 자동으로 실행되는 동작을 막아준다(ex. 새로고침)
    const newTodo=toDoInput.value;//newTodo 변수에 입력한 value값을 저장 ->그 이후 value값을 초기화(입력칸에 입력한 값을 없애줌)
    //enter입력시 form에 입력한 문자 없애기 
    toDoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);//input에 넣은 value값 담은 변수 newTodo
    saveTodos();
    
}

toDoForm.addEventListener("submit",handleTodoSubmit);


//button.addEventListener("click",deletetoDo);






/*
1주 자바스크립트 끝내기 css프레임 워크 ,리액트 
2주 리액트
3주
4주 프로젝트
08~10 기상,아침식사
10~17 워크샵
17~18저녁식사
18~20공부
20~22운동
22~24공부
 */