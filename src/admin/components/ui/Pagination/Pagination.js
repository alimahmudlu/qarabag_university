import SgIcon from "@/admin/components/ui/Icon";
import styles from "@/admin/components/ui/Pagination/Pagination.module.scss";

export default function SgPagination(props) {
    const { pageCount, page, arrow = true, center = false, onClick } = props;

    function handlePageChange(i) {
        onClick?.(i)
    }
    return (
        <>
            <div className={[styles['sg--pagination'], center ? styles['sg--pagination--center'] : ''].join(' ').trim()}>
                {arrow ?
                    <>
                        <div
                            className={[styles['sg--pagination-item'], styles['sg--pagination-item--controller']].join(' ').trim()}
                            onClick={() => handlePageChange(1)}>
                            <div className={[styles['sg--pagination-item--link']].join(' ').trim()}>
                                <SgIcon icon='chevrons-left'/>
                            </div>
                        </div>
                        <div
                            className={[styles['sg--pagination-item'], styles['sg--pagination-item--controller']].join(' ').trim()}
                            onClick={() => handlePageChange('prev')}>
                            <div className={[styles['sg--pagination-item--link']].join(' ').trim()}>
                                <SgIcon icon='chevron-left'/>
                            </div>
                        </div>
                    </>
                    : ''
                }

                {Array(pageCount).fill().map((el, index) =>
                    <div key={index}
                         className={[styles['sg--pagination-item'], index + 1 === page ? styles['active'] : ''].join(' ').trim()}
                         onClick={() => handlePageChange(index + 1)}>
                        <div className={[styles['sg--pagination-item--link']].join(' ').trim()}>
                            {index + 1}
                        </div>
                    </div>
                )}

                {arrow ?
                    <>
                        <div
                            className={[styles['sg--pagination-item'], styles['sg--pagination-item--controller']].join(' ').trim()}
                            onClick={() => handlePageChange('next')}>
                            <div className={[styles['sg--pagination-item--link']].join(' ').trim()}>
                                <SgIcon icon='chevron-right'/>
                            </div>
                        </div>
                        <div
                            className={[styles['sg--pagination-item'], styles['sg--pagination-item--controller']].join(' ').trim()}
                            onClick={() => handlePageChange(pageCount)}>
                            <div className={[styles['sg--pagination-item--link']].join(' ').trim()}>
                                <SgIcon icon='chevrons-right'/>
                            </div>
                        </div>
                    </>
                    : ''
                }
            </div>
        </>
    )
}