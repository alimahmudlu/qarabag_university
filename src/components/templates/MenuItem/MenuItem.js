import {SgDropdown} from "@/components/ui/Dropdown";
import styles from "@/components/templates/Header/Header.module.scss";
import Link from "next/link";
import {SgCollapse} from "@/components/ui/Collapse";
import makeID from "@/utils/makeID";

export default function SgMenuItem(props) {
    const {item, className, index} = props;


    return (
        item?.children ?
            <>
                <SgDropdown
                    key={index}
                    className={[styles[`${className}`], 'd-none', 'd-lg-block'].join(' ').trim()}
                    itemClassName={[styles[`${className}-subMenu-item`]].join(' ').trim()}
                    toggleClassName={[styles[`${className}--link`]].join(' ').trim()}
                    caret={true}
                    toggleHeader={item.name}
                    list={(item?.children || []).sort((a, b) => a.row - b.row).map((el, i) => {
                        return {
                            name: <Link href={`/${el?.menu_item_type === 'page' ? 'page' : 'content'}/${el?.url_id}` || '/'}
                                        key={`main_${index}_${i}`}
                                        className={[styles[`${className}--link`]].join(' ').trim()}>{el?.name}</Link>,
                            disabled: false
                        }
                    })}
                />

                <SgCollapse
                    toggleHeader={item.name}
                    id={item.id}
                    className={[styles[`${className}`], 'd-lg-none', 'd-block'].join(' ').trim()}
                    toggleClassName={[styles[`${className}--link`]].join(' ').trim()}
                    menuClassName={[styles[`${className}-subMenu`]].join(' ').trim()}
                >
                    {(item?.children || []).sort((a, b) => a.row - b.row).map((el, i) => {
                        return (
                            <SgMenuItem
                                key={`main_c_${index}_${i}`}
                                index={index}
                                item={el}
                                className='sg--template--header-block-body-main-menu-item'
                            />
                        )
                    })}
                </SgCollapse>
            </>
            :
            <div key={`main_${index}`}
                 className={[styles[`${className}`]].join(' ').trim()}
            >
                <Link href={`/page/${item.url_id}`}
                      className={[styles[`${className}--link`]].join(' ').trim()}
                >
                    {item.name}
                </Link>
            </div>

    )
}