import defaultModalStyles from '@defaultStyles/defaultModal.module.css'

const CloseModalWithEsc = (e) => {
    if (e.key === 'Escape') {
        const selector = `${defaultModalStyles['modal_is-opened']}`
        const modal = document.querySelector(`.${selector}`);
        if (modal) {
            modal.classList.remove(selector)
        }
    }
}

const CloseModalOnOverlay = (e) => {
    if (e.target.classList.contains(defaultModalStyles.modal)) {
        e.target.classList.remove(defaultModalStyles['modal_is-opened'])
    }
}


export { CloseModalWithEsc, CloseModalOnOverlay }