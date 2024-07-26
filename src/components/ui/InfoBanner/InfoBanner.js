/*
* <SgInfoBanner
                list={[
                    {
                        id: 1,
                        header: '23',
                        description: 'Lorem ipsum dolor sit'
                    },
                    {
                        id: 2,
                        header: '123',
                        description: 'Lorem ipsum dolor sit'
                    },
                    {
                        id: 3,
                        header: '315',
                        description: 'Lorem ipsum dolor sit'
                    },
                ]}
            />
* */

import styles from '@/components/ui/InfoBanner/InfoBanner.module.css'

export default function SgInfoBanner(props) {
    const {list} = props;

    return(
        <>
            <div className={[styles['sg--infoBanner']].join(' ').trim()}>
                <div className='container-lg'>
                    <div className={[styles['sg--infoBanner-content']].join(' ').trim()}>
                        {
                            (list || []).map((item, index) => {
                                return (
                                    <>
                                        <div key={index}
                                             className={[styles['sg--infoBanner-content-item']].join(' ').trim()}>
                                            <h3 className={[styles['sg--infoBanner-content-item--header']].join(' ').trim()}>
                                                {item.header}
                                            </h3>
                                            <p className={[styles['sg--infoBanner-content-item--description']].join(' ').trim()}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}