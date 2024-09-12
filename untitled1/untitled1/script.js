// const btn = document.getElementById("btnCreate")
// const listEl=document.getElementById("task")
// const inputCreate = document.getElementById("inputCreate")
// const listArr=[]
//
//
// btn.onclick= function (){
//     const newList={
//         title: inputCreate.value,
//         isCompleted:false
//     }
//     if(inputCreate.value===""){
//         return
//     }
//     listArr.push(newList)
//     listEl.insertAdjacentHTML("beforeend",getList(listArr) )
//     render()
//     inputCreate.value=""
// }
//
//
// function render(){
//     listEl.innerHTML=""
//     for (let i=0;i< listArr.length;i++){
//         listEl.insertAdjacentHTML("beforeend",getList(listArr[i],i) )
//     }
// }
// listEl.onclick=function (event){
//     if(event.target.dataset.i){
//         const index=Number(event.target.dataset.i)
//         const type=event.target.dataset.type
//         if (type === "confirmbtn"){
//             listArr[index].isCompleted=!listArr[index].isCompleted
//         } else if (type === "remove"){
//             listArr.splice(index,1)
//         }
//         render()
//     }
//
// }
// function getList(list,i){
//     return `<li class = "${list.isCompleted ? "completed-li":""}" style="margin-top:10px ">
//                     <span>${list.title}</span>
//                     <span class="buttons">
//                         <button class = "${list.isCompleted ? "completed":"uncompleted"}" data-type="confirmbtn"  data-i="${i}" id ="confirm">
// <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
//   <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
// </svg>
//                       </button>
//                         <button data-i="${i}" id = "del" data-type="remove" >
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
// </svg>
//                         </button>
//                     </span>
//                 </li>`
// }

class TodoList{
    constructor() {
        this.container = document.getElementById("container");
        this.listArr = [];
        this.#renderContainer();
        this.btn = document.getElementById("todo-list__btn-create");
        this.listEl = document.getElementById("todo-list__tasks");
        this.inputCreate = document.getElementById("todo-list__input-create");
        this.btn.onclick = () => this.#addList();
        this.listEl.onclick = (event) => this.#updateList(event);
    }
    #renderContainer() {
        this.container.insertAdjacentHTML("beforeend",`
            <div class = "todo-list__list">
                <div class="todo-list__header">
                    <h1 id="todo-list__title"> To Do List</h1>
                </div>
                <div class ="todo-list__add">
                    <input id="todo-list__input-create" placeholder="WRITE A TASK" type="text">
                    <button id = "todo-list__btn-create">ADD</button>
                </div>
                <hr class="todo-list__hr">
                <div>
                    <ul id ="todo-list__tasks" class = "todo-list__tasks-list"></ul>
                </div>
            </div>
        ` )
    }

    #addList() {
        const newList = {
            title: this.inputCreate.value,
            isCompleted: false
        }
        if (this.inputCreate.value === "") {
            return;
        }
        this.listArr.push(newList);
        this.#render();
        this.inputCreate.value = "";
    }

    #updateList(event) {
        if (event.target.dataset.i) {
            const index = Number(event.target.dataset.i);
            const type = event.target.dataset.type;
            if (type === "todo-list__confirm-btn") {
                this.listArr[index].isCompleted = !this.listArr[index].isCompleted;
            } else if (type === "todo-list__remove") {
                this.listArr.splice(index, 1);
            }
            this.#render();
        }
    }

    #render() {
        this.listEl.innerHTML = "";
        for (let i = 0; i < this.listArr.length; i++) {
            this.listEl.insertAdjacentHTML("beforeend", this.#getList(this.listArr[i], i));
        }
    }

    #getList(list, i) {
        return `<li class = "${list.isCompleted ? "todo-list__completed-li" : ""}" style="margin-top:10px ">
                    <span>${list.title}</span>
                    <span class="todo-list__buttons">
                        <button class = "${list.isCompleted ? "todo-list__completed" : "todo-list__uncompleted"}" data-type="todo-list__confirm-btn"  data-i="${i}" id ="confirm">
<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
                        </button>
                        <button data-i="${i}" id = "del" data-type="todo-list__remove" >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                        </button>
                    </span>
                </li>`;
    }
}
const todoList=new TodoList("container");

