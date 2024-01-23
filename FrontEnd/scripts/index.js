import { gallery, filters, btnFilterAll, ModalListGallery, modifier, aLogin } from "./domLinker.js";
import { getWorks, getCategories, getWorksByCategoryId } from "./api.js";
import Modal from "./modal.js";


const createWorks = data => {
    gallery.innerHTML = ''
    ModalListGallery.innerHTML = ''

    data.forEach(element => {
        createWorkmodal(element)
        creatework(element)
    })
}

// home page
const creatework = data => {
    const img = document.createElement("img");
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    img.src = data.imageUrl;
    figcaption.textContent = data.title;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
}

// modal
const createWorkmodal = data => {
    const img = document.createElement("img");
    const figure = document.createElement("figure");
    const span = document.createElement("span")
    const trash = document.createElement("i")
    trash.classList.add("fa-solid", "fa-trash-can")
    img.src = data.imageUrl;
    span.appendChild(trash)
    figure.appendChild(img);
    figure.appendChild(span);
    ModalListGallery.appendChild(figure);
}

getWorks().then(data => createWorks(data))

const displayCategoriesButtons = data => {
    data.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category.name;
        btn.id = category.id;
        filters.appendChild(btn);

        btn.addEventListener('click', () => {
            getWorksByCategoryId(category.id)
                .then(data => {
                    gallery.innerHTML = ''
                    data.forEach(element => creatework(element))
                })
        })
    });
}

btnFilterAll.addEventListener('click', () => {
    getWorks().then(data => {
        gallery.innerHTML = ''
        data.forEach(element => creatework(element))
    })
})

getCategories().then(data => displayCategoriesButtons(data))


if (localStorage.token) {
    modifier.style.display = "flex"
    filters.style.display = 'none'
    aLogin.innerHTML = 'Logout'
}

aLogin.addEventListener('click', () => localStorage.removeItem('token'))

Modal()

function deleteWorks() {
    const TrashAll = document.querySelectorAll(".fa-trash-can")
    console.log(TrashAll)
}
deleteWorks