var todoList = [];
var finishedTodo = [];
//--------------------------------------------
//事件繫結
document.getElementById("CtodoB").addEventListener("click",function(){
    addTodo();
    render();

});

document.getElementById("clearAll").addEventListener("click",function(){
    clearAll();
    render();
});

document.getElementById("list").addEventListener("click",function(e){
    doSomething(e);
    render();
})

//--------------------------------------------
//處理資料
//新增資料
function addTodo(){
    var todoData = document.getElementById("CtodoI").value;
    var timeStamp = Math.floor(Date.now());
    todoList.push(
        {
            id : timeStamp,
            title: todoData,
            finished: false
        }
    );
};

//清除資料
function clearAll(){
    todoList = [];
};

function doSomething(e){
    var action = e.target.dataset.action;
    var id = e.target.dataset.id;
    if( action == 'finished')
    {
        finished(id);
    }
    else if( action == 'remove')
    {
        remove(id);
    }

}

function finished(id){
    todoList.forEach(function(item,index){
        if(item.id == id)
        {
            item.finished = true;
        }
    });

};


function remove(id){
    var targetIndex = 0;
    todoList.forEach(function(item,index){
        if(item.id == id){
            targetIndex = index;
            
        }
    });
    todoList.splice(targetIndex,1);
};

//--------------------------------------------
//處理畫面
function render(){
    var str = "";
    todoList.forEach(function(item,index){
        str += `<li>
                    <input type="checkbox" data-id="${item.id}" data-action="finished" ${item.finished ? 'checked' : ''} />
                    <label class="${item.finished ? 'finished' : ''}">${item.title}</label>
                    <button data-id=${item.id} data-action="remove">刪除</button>
                </li>`;
    });

    if(document.getElementById("list") != null){
        document.getElementById("list").innerHTML = str;
    }   

    document.getElementById("count").innerHTML = todoList.length;
    document.getElementById("CtodoI").value = "";
}

