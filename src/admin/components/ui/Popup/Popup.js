import { Modal } from "reactstrap";
import makeID from "@/admin/utils/makeID";
import styles from "@/admin/components/ui/Popup/Popup.module.scss"
import SgIcon from "@/admin/components/ui/Icon";

export default function SgPopup(props) {
    const {className, modalClassName = '', children, header, description, id = makeID(7), setToggleModal, toggleModal = false, size, variant} = props;

    function toggleModalFN() {
        setToggleModal(!toggleModal)
    }



    const getModalSize = () => {
        let classes = '';

        switch (size) {
            case 'xs':
                classes = 'xs'
                break

            case 'md':
                classes = 'md'
                break

            case 'lg':
                classes = 'lg'
                break

            case 'xl':
                classes = 'xl'
                break

            default:
                classes = ''
                break
        }

        return classes
    }

    return (
        <>
            <Modal isOpen={toggleModal}
                   size={getModalSize()}
                   toggle={toggleModalFN}
                   modalClassName={[modalClassName].join(' ').trim()}
                   centered={true}
                   className={className}
                   id={id}
            >
                <div className={styles['modal-header']}>
                    <h1 className={styles['modal-title']} id={[id, 'Label'].join('')}>{header}</h1>
                    {description && <p className={styles['modal-description']}>{description}</p>}
                    <button type="button"
                            className='btn-close'
                            onClick={() => toggleModalFN()}
                            data-bs-dismiss="modal"
                            aria-label="Close"
                    >
                        <SgIcon icon='x' />
                    </button>
                </div>
                <div className={styles['modal-body']}>
                    {children}
                </div>
            </Modal>
        </>
    )
}