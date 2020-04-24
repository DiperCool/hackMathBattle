function suka(){
    let one=Number(document.getElementById("task_x").innerHTML)
    let op= document.getElementById("task_op").innerHTML
    let two = Number(document.getElementById("task_y").innerHTML)
    let res= Number(document.getElementById("task_res").innerHTML)
    op= op=="–"? "-": op;
    op= op=="×"? "*": op;
    let result = eval(`${one} ${op} ${two}==${res}`)
    if(result){
      document.getElementById("button_correct").click()
    }
    else{
      document.getElementById("button_wrong").click()
    }
}

function start(s, t){
    let i=0
    let interval=setInterval(()=>{
        suka()
        i++
        if(i==s) clearInterval(interval)
    }, t)
}
