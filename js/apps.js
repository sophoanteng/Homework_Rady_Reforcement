
const dateOfDay = document.querySelector('#date');
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

let time = new Date();
dateOfDay.innerHTML = time.toLocaleString("en-US", options);

const list = document.querySelector('#addlist');
const inputItem = document.querySelector('#input');


document.addEventListener('keyup', events => {
    if (events.key === "Enter") {
       const todo = inputItem.value;
       if(todo){
           addToDo(todo)
       }
       clearOFInput(todo);
    }
});


function addToDo(todo) {
    const item = `  
        <li class="item"> 
        <i class="fa fa-pencil" aria-hidden="true"></i>
            <p class="text"> ${todo} </p>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", item);

}

function clearOFInput(){
    inputItem.value = "";
}