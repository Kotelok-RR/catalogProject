import { CloseModalWithEsc } from '@utils/CloseModalAdvanced.jsx';

import modalDefaultStyles from '@defaultStyles/defaultModal.module.css'



const closeModal = (modalSelector) => {
    const modalElement = document.querySelector(`.${modalSelector}`).parentElement;

    if (modalElement) {
        modalElement.classList.remove(modalDefaultStyles['modal_is-opened']);
        document.removeEventListener('keydown', CloseModalWithEsc)
    }
};

export default closeModal;