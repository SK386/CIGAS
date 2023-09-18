function post(){
    /*recovery form data*/
    let formValue ={
            title:document.getElementById("titlePost").value,
            content:document.getElementById("contentPost").value
         }
    
         let idNumber = 0;

    /* set data in post*/
    let id = "post" + idNumber
    let implement = document.createElement("div");
    let body = document.body;
    let createP = document.createElement("p");
    let createH = document.createElement("h3");
    /*implement in post */
    createP.innerText = formValue.content;
    createH.innerText = formValue.title;
    implement.appendChild(createH);
    implement.appendChild(createP);
    implement.setAttribute("class", "post");
    implement.setAttribute("id", id);
    body.appendChild(implement);
}
