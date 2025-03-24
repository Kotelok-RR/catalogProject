import closeModal from '@utils/CloseModal';

import defaultModalStyles from '@defaultStyles/defaultModal.module.css'

const CloseModalWithEsc = (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
}

const CloseModalOnOverlay = (e) => {
    if (e.target.classList.contains(defaultModalStyles.modal)) {
        closeModal();
    }
}

export { CloseModalWithEsc, CloseModalOnOverlay }