document.getElementById("btn").onclick = function () {
    let text = document.getElementById("text").value
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value

    if (text == "" || date == "" || time == "") {
        alert("field cannot be empty")

    } else {

        let data = {
            thetext: text,
            thedate: date,
            thetime: time
        }

       

        let check = localStorage.getItem("tasks")

        if(check == null){
             localStorage.setItem("tasks", JSON.stringify([data]) );
             location.reload()

        }else{
            let originalForm = JSON.parse(check)
            originalForm.unshift(data)

            localStorage.setItem("tasks", JSON.stringify(originalForm))
            location.reload()
        }

    
    }


}

let storeData = localStorage.getItem("tasks")

let convertedData = JSON.parse(storeData)


for (each of convertedData){
    let div = document.createElement("div") //<div></div>
    div.setAttribute("class", "task") // <div class= "tasks"></div>

    let p = document.createElement("p") // <p></p>
    p.innerText = each.thetext  // <p>hhjs</p>

    let small = document.createElement("small")  // <small></small>
    small.innerText = each.thedate + " " + each.thetime  // <small>hbdcj</small>

    div.appendChild(p)  // <div class= "tasks"><p>hhjs</p> <small>hbdcj</small> </div>
    div.appendChild(small)

    document.querySelector(".tasks").append(div)

    div.onclick = function(){
        let ask = confirm("are you sure you want to delete?")

        if(ask == true){
            
        let newTasks = convertedData.filter(function(each){ return each.thetext != p.innerText})

        localStorage.setItem("tasks", JSON.stringify(newTasks))
        location.reload()

        }

        
    }
}