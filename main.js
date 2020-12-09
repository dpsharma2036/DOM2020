console.log("DOM Practice");

const body = document.querySelector("body")


let button = document.createElement("button")
button.append("Remove")

let main = document.createElement("main")

let img = document.createElement("img")
img.className = "image"
img.src = "./images/Kanyam.jpg"

let a = document.createElement("a")
a.append("Kanyam Tea Estate")
a.className = "link"
a.href = "https://en.wikipedia.org/wiki/Kanyam"

main.appendChild(img)
main.appendChild(a)

document.body.prepend(main)
document.body.prepend(button)

button.addEventListener("click", () => {
    main.remove()
})