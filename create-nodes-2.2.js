function render(array) {
    let ul = document.createElement("ul")
    for (i = 0; i < array.length; i++) {
        let li = document.createElement("li")
        li.append(array[i])
        ul.append(li)

        document.body.prepend(ul)
    } return ul
}

console.log(render(["first", "second", "third"]))