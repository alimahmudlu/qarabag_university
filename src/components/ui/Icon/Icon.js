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


export default function SgIcon(props) {
    const { icon, size } = props;

    const getIcon = () => {
        return `sg-${icon}`
    }

    return (
        <>
            {icon ? <i style={{fontSize: size ?? ''}} className={['sg-icon', getIcon()].join(' ').trim()}></i> : ''}
        </>
    )
}