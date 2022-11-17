let div = document.createElement("div")
let ul = document.createElement("ul")
let li1 = document.createElement("li")
let a1 = document.createElement("a")
a1.href = "https://instagram.com/intocode"
a1.textContent = "наш инстаграм"
let li2 = document.createElement("li")
let a2 = document.createElement("a")
a2.href = "https://intocode.ru"
a2.textContent = "наш сайт"

li2.append(a2)
li1.prepend(a1)
ul.append(li1, li2)
div.append(ul)
document.body.after(div)