import { addphotomodal, iconCloseModalphoto, } from "./domLinker.js"

const Addphotomodal = () => {
    const closeModalphoto = () => {
        photoModal.style.display = "none"
        photoModal.setAttribute('aria-hidden', true)
    }
    const openModal = () => {
        photoModal.style.display = 'flex'
        photoModal.setAttribute('aria-hidden', false)
    }

    /*** event listerner modal ***/
    iconCloseModal.addEventListener('click', () => closeModalphoto())
}

export default Addphotomodal