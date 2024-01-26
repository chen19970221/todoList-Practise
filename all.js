let data = []
const todo = document.querySelector(".todo")
const save = document.querySelector(".save")
const list = document.querySelector(".list")


function render(){
  let str = ""
  data.forEach(function(item,index){
    str += `<li>${item.content}<input type="button" data-num="${index}" class="delete" value="刪除事項"></li>`
  })
  list.innerHTML = str
}
render()

save.addEventListener("click", function(e){
  if (todo.value == ""){
    alert("請輸入待辦內容")
    return
  }
  let obj = {}
  obj.content = todo.value
  data.push(obj)
  todo.value = ""
  render()
})

list.addEventListener("click", function(e){
  if (e.target.nodeName !== "INPUT"){
    return
  }
  let num =  e.target.getAttribute("data-num")
  data.splice(num,1)
  // 也可以用 delete data[num]
  render()

})

