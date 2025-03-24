import { CloseModalWithEsc } from '@utils/CloseModalAdvanced.jsx'
import { CloseModalOnOverlay } from '@utils/CloseModalAdvanced.jsx'

import defaultModalStyles from '@defaultStyles/defaultModal.module.css'

const waitForModalRender = (selector) => {
    return new Promise((resolve) => {
        const observer = new MutationObserver(() => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        const element = document.querySelector(selector);
        if (element) {
            resolve(element);
            observer.disconnect();
        }
    });
};

const openModal = (modalSelector) => {
    const selector = `.${modalSelector}`;

    waitForModalRender(selector).then(e => {
        if (e.parentElement) {
            e.parentElement.classList.add(defaultModalStyles['modal_is-opened']);
            document.addEventListener('keydown', CloseModalWithEsc);
            e.parentElement.addEventListener('click', CloseModalOnOverlay)
        }
    });
};

export default openModal
