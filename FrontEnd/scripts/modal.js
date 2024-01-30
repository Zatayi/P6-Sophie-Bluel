import { backarrow, modal, iconCloseModal, modifier, ModalListGallery, formAddPhoto, btnNewPhoto, modalHr, image, categoryId, title} from "./domLinker.js"

const Modal = () => {
  const closeModal = () => {
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', true)
  }
  const openModal = () => {
    modal.style.display = 'flex'
    modal.setAttribute('aria-hidden', false)
    ModalListGallery.style.display = 'flex';
    formAddPhoto.style.display = 'none'
    backarrow.style.display = 'none'
    btnNewPhoto.style.display = 'flex'
    modalHr.style.display = 'flex'
  }

  /*** event listerner modal ***/
  iconCloseModal.addEventListener('click', () => closeModal())

  modifier.addEventListener('click', () => openModal())

  btnNewPhoto.addEventListener('click', () => {
    ModalListGallery.style.display = 'none';
    formAddPhoto.style.display = 'flex'
    backarrow.style.display = 'block'
    btnNewPhoto.style.display = 'none'
    modalHr.style.display = 'none'
  })

  //arrow return//
  backarrow.addEventListener('click', function () {
    ModalListGallery.style.display = 'flex';
    formAddPhoto.style.display = 'none'
    backarrow.style.display = 'none'
    btnNewPhoto.style.display = 'flex'
    modalHr.style.display = 'flex'
  })
}
export default Modal



// //bouton > photomodal//
// newphotobtn.addEventListener('click', function () {
//   photoModal.style.display = 'flex';
//   modal.style.display = 'none';
// })



//Delete work//
// function deleteWork(workId) {
//   const token = sessionStorage.getItem("Token");
//   const acceptsuppr = confirm("Êtes-vous sûr de vouloir supprimer?");
//   if (acceptsuppr) {
//     fetch(`http://localhost:5678/api/works/${workId}`, {
//       method: 'DELETE',
//       headers: {
//         "Accept": 'application/json',
//         "Authorization": `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new error("La supression n'a pas abouti");
//         }
//         const WorkRemove = document.querySelector(`figure[data-id="${workId}"]`);
//         if (WorkRemove) {
//           WorkRemove.remove();
//         }
//       })
//   }
// }
// deleteWork()

const btnAjouterProjet = document.querySelector(".js-add-work");
btnAjouterProjet.addEventListener("click", addWork);

// Ajouter un projet
async function addWork(event) {
    event.preventDefault();

    if (title === "" || categoryId === "" || image === undefined) {
        alert("Les champs ne sont pas tous remplis");
        return;
    } else if (categoryId !== "1" && categoryId !== "2" && categoryId !== "3") {
        alert("Cette catégorie n'est pas valide");
        return;
        } else {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", categoryId);
        formData.append("image", image);

        const response = await fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (response.status === 201) {
            alert("Le projet est ajouté");
            backarrow()
            
        } else if (response.status === 400) {
            alert("Les champs ne sont pas tous remplis");
        } else if (response.status === 500) {
            alert("Error");
        } else if (response.status === 401) {
            alert("Autorisation non valide");
            window.location.href = "login.html";
    }}

    catch (error) {
        console.log(error);
}}}

const token = localStorage.getItem("token");

