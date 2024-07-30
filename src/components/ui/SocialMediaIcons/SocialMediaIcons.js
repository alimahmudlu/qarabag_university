/*
* <SgSocialMediaIcons
                icons={[
                    {
                        id: 1,
                        icon: 'facebook',
                        path: '/'
                    },
                    {
                        id: 2,
                        icon: 'instagram',
                        path: '/'
                    },
                    {
                        id: 3,
                        icon: 'linkedin',
                        path: '/'
                    },
                    {
                        id: 4,
                        icon: 'send',
                        path: '/'
                    },
                    {
                        id: 5,
                        icon: 'phone',
                        path: '/'
                    },
                    {
                        id: 6,
                        icon: 'link',
                        path: '/'
                    },
                    {
                        id: 7,
                        icon: 'twitter',
                        path: '/'
                    },
                ]}
            />
* */

import styles from '@/components/ui/SocialMediaIcons/SocialMediaIcons.module.css'
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";

export default  function SgSocialMediaIcons(props){
    const {icons} = props;

    return(
        <>
            <div className={[styles['sg--socialMediaIcons']].join(' ').trim()}>
                {
                    (icons || []).map((item, index) => {
                        return(
                            <Link key={index} href={item.path} className={[styles['sg--socialMediaIcons-item']].join(' ').trim()}>
                                <SgIcon
                                    icon={item.icon}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}