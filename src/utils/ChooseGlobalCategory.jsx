import buttonStyles from '@/components/GlobalCategoryElement/GlobalCategoryElement.module.css'

const ChangeButtonsStates = (clickedCategoryButton) => {
    const currentCategoryButton = document.querySelector(`.${buttonStyles['button-is-active']}`);

    if (clickedCategoryButton !== currentCategoryButton) {
        currentCategoryButton.classList.remove(buttonStyles['button-is-active']);
        clickedCategoryButton.classList.toggle((buttonStyles['button-is-active']));
    }
}



export default ChangeButtonsStates;