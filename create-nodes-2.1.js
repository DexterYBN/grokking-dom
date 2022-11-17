let ul = document.createElement("ul")

let arr = ["html", "css", "js"]

for (i = 0; i < arr.length; i++) {
    let li = document.createElement("li")
    li.append(arr[i])
    ul.append(li)
}

document.body.prepend(ul)