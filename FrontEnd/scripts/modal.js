import {
  backarrow, modal, iconCloseModal, modifier, ModalListGallery, formAddPhoto, btnNewPhoto,
  modalHr, filePhoto, preview, title, categoryId, btnValidateAddPhoto
} from "./domLinker.js"
import { postWork } from "./api.js"

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
  iconCloseModal.addEventListener('click', () => {
    preview.remove()
    closeModal()
  })
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
    preview.remove()
  })
  
  filePhoto.addEventListener('change', () => {
    const [file] = filePhoto.files
    
    preview.src = URL.createObjectURL(file)
    

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

// const btnAjouterProjet = document.querySelector(".js-add-work");
// btnAjouterProjet.addEventListener("click", addWork);

const submitButton = document.querySelector('js-add-work')


formAddPhoto.addEventListener('submit', e => addWork(e))

// Ajouter un projet
const addWork = event => {
  event.preventDefault();

  const image = filePhoto.files[0];

  if (title.value === "" || categoryId.value === "" || image === undefined) {
    alert("Les champs ne sont pas tous remplis");
    return;
  } else if (categoryId.value !== "1" && categoryId.value !== "2" && categoryId.value !== "3") {
    alert("Cette catégorie n'est pas valide");
    return;
  } else if (image.size > 4 * 1024 * 1024) {
    alert("Taille maximum 4mo");
    return;
  } else {
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("category", categoryId.value);
    formData.append("image", image);

    postWork(formData)
      .then(response => {
        window.location.reload();
      })
  }
}

function disableForm() {
  if (title.value === "" && categoryId.value === "" && image === undefined) {
    btnValidateAddPhoto.style.backgroundColor = '#CBD6DC';
    btnValidateAddPhoto.disabled = "true";
  } else {
    btnValidateAddPhoto.disabled = "false";
    btnValidateAddPhoto.style.backgroundColor = '';
    }
  }
//disableForm()  




