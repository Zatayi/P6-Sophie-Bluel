import {
  backarrow, modal, iconCloseModal, modifier, ModalListGallery, formAddPhoto, btnNewPhoto,
  modalHr, filePhoto, preview, title, categoryId, btnValidateAddPhoto
} from "./domLinker.js"
import { postWork, getWorks } from "./api.js"
import { createWorks } from "./index.js"

const closeModal = () => {
  modal.style.display = "none"
  modal.setAttribute('aria-hidden', true)

}

const Modal = () => {

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
    preview.style.display = "none"

    closeModal()
  })
  modifier.addEventListener('click', () => openModal())

  btnNewPhoto.addEventListener('click', () => {
    ModalListGallery.style.display = 'none';
    formAddPhoto.style.display = 'flex'
    backarrow.style.display = 'block'
    btnNewPhoto.style.display = 'none'
    modalHr.style.display = 'none'
    preview.style.display = "block"
    preview.style.height = "0px"
  })

  //arrow return//
  backarrow.addEventListener('click', function () {
    ModalListGallery.style.display = 'flex';
    formAddPhoto.style.display = 'none'
    backarrow.style.display = 'none'
    btnNewPhoto.style.display = 'flex'
    modalHr.style.display = 'flex'
    preview.style.display = "none"
    formAddPhoto.reset();
  })

  filePhoto.addEventListener('change', () => {
    const [file] = filePhoto.files
    fileUpload = file

    if (fileUploadIsValid()) {
      preview.src = URL.createObjectURL(file)
      preview.style.height = "176px"
    } else {
      alert("Le format de fichier est invalide ou l'image est trop volumineuse")
    }

    console.log(file)
    // checkFormIsValid()
    formIsValid()

  })

  title.addEventListener('input', () => {
    titleIsValid()
    formIsValid()
  })

}
export default Modal

let fileUpload, titleInput, categoryIdSelect


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
      .then(() => getWorks())
      .then(data => {
        createWorks(data)
        closeModal()
      })
  }
}

function disableForm() {
  if (title.value === "" && categoryId.value === "" && image === undefined) {
    btnValidateAddPhoto.style.backgroundColor = '#CBD6DC';

  } else {
    btnValidateAddPhoto.disabled = "false";
    btnValidateAddPhoto.style.backgroundColor = '#1D6154';
  }
}

const fileUploadIsValid = () => fileUpload.size <= 4 * 1024 * 1024 && ["image/jpeg", "image/png"].includes(fileUpload.type)

const titleIsValid = () => {
  titleInput = title.value
  return titleInput.length > 0
}

const formIsValid = () => {
  if (fileUploadIsValid() && titleIsValid()) {
    btnValidateAddPhoto.removeAttribute('disabled')
    btnValidateAddPhoto.style.backgroundColor = '#1D6154';
  } else {
    btnValidateAddPhoto.setAttribute('disabled', true)
    btnValidateAddPhoto.style.backgroundColor = '#CBD6DC';
  }
}

  




