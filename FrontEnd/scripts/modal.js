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

newphotobtn.addEventListener('click', function(){
    photoModal.style.display = 'flex';
    modal.style.display = 'none';
})

backarrow.addEventListener('click', function(){
    modal.style.display = 'flex';
    photoModal.style.display = 'none';
})



