let div1 = document.createElement("div")
div1.className = ("red")
let div2 = document.createElement("div")
div2.className = ("green")
let div3 = document.createElement("div")
div3.className = ("blue")
div3.textContent = ("я вложен")

div1.append(div2)
div2.append(div3)

document.body.prepend(div1)