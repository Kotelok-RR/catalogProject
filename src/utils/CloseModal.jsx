import { CloseModalWithEsc } from '@utils/CloseModalAdvanced.jsx'
import { CloseModalOnOverlay } from '@utils/CloseModalAdvanced.jsx'

import modalDefaultStyles from '@defaultStyles/defaultModal.module.css'

const closeModal = () => {
    const modalElement = document.querySelector(`.${modalDefaultStyles['modal_is-opened']}`);

    if (modalElement) {
        modalElement.querySelector(`.${modalDefaultStyles.modal__form}`).reset()
        
        modalElement.classList.remove(modalDefaultStyles['modal_is-opened']);
        document.removeEventListener('keydown', CloseModalWithEsc);
        modalElement.removeEventListener('click', CloseModalOnOverlay);
    }
};

export default closeModal;