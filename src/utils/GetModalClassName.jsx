import modalDefaultStyles from '@defaultStyles/defaultModal.module.css' ;
import classNames from 'classnames';

const GetModalClassName = (ModalActive) => {
    return classNames(
        modalDefaultStyles.modal,
        {
            [modalDefaultStyles.modal_is_opened]: ModalActive
        }
    );
};

export default GetModalClassName