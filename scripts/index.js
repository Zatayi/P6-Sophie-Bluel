const gallery = document.querySelector(".gallery")
const filters = document.querySelector(".filters")

async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}


async function creatework() {
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
    });
}


creatework()

//*************catégories****************//

async function getCategories() {
    const response = await fetch("http://localhost:5678/api/categories")
    return await response.json()
}


async function displayCategoriesButtons() {
    const categories = await getCategories()
    console.log(categories)
    categories.forEach((category) => {
        const btn = document.createElement("button")
        btn.textContent = category.name
        btn.id = category.id
        filters.appendChild(btn)
    })
}
displayCategoriesButtons()

//filters categories click//

async function categoriesFilterClick(){
    const book = await getWorks()
    console.log(book)
    const buttons = document.querySelectorAll(".filters button")
    buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        btnId = e.target.id
        gallery.innerHTML = ""
        if (btnId !== "0") {
            const bookCategoryFilter = book.filter((work) => {
                return work.categoryId == btnId
            })
            bookCategoryFilter.forEach(work => {
                creatework()
            });
        }
        console.log(btnId)
    })
})

}
categoriesFilterClick()