let inputbox = document.getElementById("inputbox");
let addBtn = document.getElementById("btn");
let contentWrapper = document.getElementById("contentWrapper");
//saveFunction
function saveTask(){
  let alltask=[];
  let tasks=document.querySelectorAll(".contentDiv .content");
  tasks.forEach(task=>{
    alltask.push(task.innerHTML);
  })
  localStorage.setItem("tasks",JSON.stringify(alltask));
  if(alltask.length==0){
    localStorage.removeItem("tasks");
  }
}

//create task function
function crateTask(data) {
  let div = document.createElement("div");
  div.classList.add("contentDiv");
  div.innerHTML = `
      <div id="checkbox"><input type="checkbox" class="radiobtn"><p class="content">${data}</p></div>
      <button class="edit">Edit</button>
      <button class="del">Delete</button>
  `;
  div.querySelector(".radiobtn").onclick = function () {
    div.querySelector(".content").classList.toggle("checked");
  };

  //delete function
  div.querySelector(".del").onclick=function(){
    div.remove();
    saveTask();
  }
  //edit function
  div.querySelector(".edit").onclick=function(){
    div.remove();
    saveTask();
    let text=div.querySelector(".content").innerHTML;
    inputbox.value = text;  
  }

  contentWrapper.append(div);
  inputbox.value = "";
  saveTask();
}
// console.log(localStoragedata)

(function () {
  let localStoragedata = localStorage.getItem("tasks");
  localStoragedata=JSON.parse(localStoragedata);
  if (localStoragedata != null) {
    localStoragedata.forEach((element) => {
      crateTask(element);
    });
  }
})();


addBtn.onclick = function () {
  if (inputbox.value != "") {
    crateTask(inputbox.value);
  }
};
