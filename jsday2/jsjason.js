fetch("https://jsonplaceholder.typicode.com/comments")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    const newcomment=data;
// console.log(newcomment);
    let rows="";
    newcomment.forEach((comments)=>{
        rows+=`<tr>
            <td>${comments.postId}<td>
                <td>${comments.id}</td>
                <td>${comments.name}</td>
                <td>${comments.email}</td>
                <td>${comments.body}</td>
            </tr>`
    })

})