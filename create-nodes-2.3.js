let arr = [
    {
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
]

function render(arr) {

    let ul = document.createElement("ul")

    for (i = 0; i < arr.length; i++) {

        let li = document.createElement("li")
        let a = document.createElement("a")
        a.textContent = arr[i].name
        a.href = arr[i].url
        li.append(a)
        ul.append(li)

        document.body.prepend(ul)
    } return ul
}

render(arr)