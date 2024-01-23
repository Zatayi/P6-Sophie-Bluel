import { backarrow, modal, iconCloseModal, modifier, photoModal } from "./domLinker.js"

const Modal = () => {
    const closeModal = () => {
        modal.style.display = "none"
        modal.setAttribute('aria-hidden', true)
    }
    const openModal = () => {
        modal.style.display = 'flex'
        modal.setAttribute('aria-hidden', false)
    }

    /*** event listerner modal ***/
    iconCloseModal.addEventListener('click', () => closeModal())

    modifier.addEventListener('click', () => openModal())
}
export default Modal

//bouton > photomodal//
newphotobtn.addEventListener('click', function(){
    photoModal.style.display = 'flex';
    modal.style.display = 'none';
})

//arrow return//
backarrow.addEventListener('click', function(){
    modal.style.display = 'flex';
    photoModal.style.display = 'none';
})

//Delete work//
function deleteWork(workId) {
    const token = sessionStorage.getItem("Token");
    const acceptsuppr = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (acceptsuppr) {
      fetch(`http://localhost:5678/api/works/${workId}`, {
        method: 'DELETE',
        headers: {
          "Accept" : 'application/json',
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok){
        throw new error ("La supression n'a pas abouti");
      }
      const WorkRemove = document.querySelector(`figure[data-id="${workId}"]`);
      if (WorkRemove) {
        WorkRemove.remove();
        }
    })
    }    
  }  
deleteWork()