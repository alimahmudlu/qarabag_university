/**
 * @names "SG-ICON" Component;
 * @project video.edu.az
 * @company Edumedia LLC
 * @repository https://github.com/alimahmudlu/video.edu.az-nextjs
 * @lead Ali Mahmudlu;
 * @author Ali Mahmudlu;
 * @email alimahmudlu@gmail.com
 *
 * @props {string} icon.
 * @props {string} size.
 *
 * @import import { SgIcon } from "@/components/ui/Icon";
 * @component <SgIcon
 *                 icon="arrow-right"
 *                 size="26"
 *             />
 */

import styles from '@/components/ui/Icon/Icon.module.scss'

export default function SgIcon(props) {
    const { icon, size, name, color } = props;

    const getIcon = () => {
        return `sg-icon-${icon}`
    }

    return (
        <>
            {icon ?
                <i>
                    <i style={{fontSize: size ?? '', color: color ?? ''}} className={['sg-icons', getIcon()].join(' ').trim()}></i>
                    <span className={styles['sg--icon--accessibility']}>{name ? name : icon} icon</span>
                </i>
                : ''
            }
        </>
    )
}