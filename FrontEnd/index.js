const gallery = document.querySelector("#portfolio")


async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}
getWorks()

async function vieWorks() {
    const arrayWorks = await getWorks()
    arrayWorks.forEach(element => {
    const img = document.createElement("img")
    const figure = document.createElement("figure")
    const figcaption = document.createElement("figcaption")
    img.src = element.imageUrl
    figcaption.textContent = element.title
    figure.appendChild(img)
    figure.appendChild(figcaption)
    gallery.appendChild(figure)
    figure.classList.add("gallery")
    });
}


vieWorks()

//*************catégories****************//

async function getCategories() {
    const response = await fetch("http://localhost:5678/api/categories")
    return await response.json()
}
getCategories

async function displayCategoriesButtons() {
    const categories = await getCategories()
    console.log(categories)
    categories.forEach((category) => {
        const btn = document.createElement("button")
        btn.textContent = category.name
        btn.id = category.id

    })
}
displayCategoriesButtons()