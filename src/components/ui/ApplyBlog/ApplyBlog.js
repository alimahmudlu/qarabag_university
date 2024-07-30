/*
* <SgApplyBlog
                description='Lorem ipsum dolor sit amet consectetur. Platea vitae est arcu id ac duis massa. Tellus elementum facilisis libero consectetur vulputate rhoncus. '
            />
* */

import styles from "@/components/ui/ApplyBlog/ApplyBlog.module.css";
// import Link from "next/link";

import {SgButton} from "@/components/ui/Button";

export default function SgApplyBlog(props){
    const {description} = props

    return(
        <>
            <div className={[styles['sg--applyBLog']].join(' ').trim()}>
                <div className={[styles['sg--applyBLog--description']].join(' ').trim()}>
                    {description}
                </div>
                <SgButton
                    color='black'
                >
                    Müraciət et
                </SgButton>
            </div>
        </>
    )
}