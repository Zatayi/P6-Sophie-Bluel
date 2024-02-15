import { photoModal, iconCloseModalphoto, Hrform } from "./domLinker.js"

const Addphotomodal = () => {
    const closeModalphoto = () => {
        photoModal.style.display = "none"
        photoModal.setAttribute('aria-hidden', true)
        
    }
    const openModal = () => {
        photoModal.style.display = 'flex'
        photoModal.setAttribute('aria-hidden', false)
        Hrform.style.display = 'none'
    }

    /*** event listerner modal ***/
    iconCloseModalphoto.addEventListener('click', () => closeModalphoto())
}

export default Addphotomodal