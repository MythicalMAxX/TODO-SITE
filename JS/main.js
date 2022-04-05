function list() {
    var id = "id" + Math.random().toString(16).slice(2)
    var ids = id+1
    var x = document.getElementById("text").value;
    node = document.getElementById('add');
    node.insertAdjacentHTML('afterend', '<div class="card" id="'+ids+'" style="background-color:rgb(255, 0, 0);"><h1 id="updated">'+x+'</h1><div class="btncenter"><button class="button" id="'+id+'" onclick="rem(this.id);">&#10004;</button><button class="button" id="'+id+'" onclick="rem(this.id);">&#9747;</button></div></div>');
}

function rem(eleid){
    eleid = eleid+1
    const element = document.getElementById(eleid);

    element.parentNode.removeChild(element);
}
