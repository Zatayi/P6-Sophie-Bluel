import { gallery, filters, btnFilterAll } from "./domLinker.js";
import { getWorks, getCategories, getWorksByCategoryId } from "./api.js";

// console.log(gallery)
// console.log(filters)
// async function getWorks() {
//     const response = await fetch("http://localhost:5678/api/works");
//     return await response.json();
// }


const creatework = data => {
    gallery.innerHTML = ''

    data.forEach(element => {
        const img = document.createElement("img");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        img.src = element.imageUrl;
        figcaption.textContent = element.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
}

getWorks().then(data => creatework(data))

//*************catégories****************//

// async function getCategories() {
//     const response = await fetch("http://localhost:5678/api/categories");
//     return await response.json();
// };


const displayCategoriesButtons = data => {
    data.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category.name;
        btn.id = category.id;
        filters.appendChild(btn);

        btn.addEventListener('click', () => {
            getWorksByCategoryId(category.id).then(data => creatework(data))
        })
    });
}

btnFilterAll.addEventListener('click', () => {
    getWorks().then(data => creatework(data))
})

getCategories().then(data => displayCategoriesButtons(data))

//filters categories click//

// async function categoriesFilterClick() {
//     const book = await getWorks();
//     const buttons = document.querySelectorAll(".filters button");
//     console.log(buttons)
//     buttons.forEach((button) => {
//         button.addEventListener("click", (e) => {
//             ClickId = e.target.id;
//             console.log(btnId);
//             gallery.innerHTML = "";
//             if (ClickId !== "0") {
//                 const bookCategoryFilter = book.filter((work) => {
//                     return work.categoryId == ClickId;
//                 })
//                 bookCategoryFilter.forEach((work) => {
//                     creatework(work);
//                 });
//             }
//         });
//     });

// }
// categoriesFilterClick()