import {useState} from "react";
import {Collapse} from "reactstrap";
import styles from "@/components/ui/Collapse/Collapse.module.scss";

export default function SgCollapse(props) {
    const {toggleHeader, id, className, openClassName, toggleClassName, menuClassName, children, ...args} = props;

    const [collapseOpen, setCollapseOpen] = useState(false);
    const toggle = () => setCollapseOpen((prevState) => !prevState);

    return (
        <>
            <div className={[styles['sg--collapse'], collapseOpen ? openClassName : '', className].join(' ').trim()}>
                <div
                    className={[styles['sg--collapse-toggle'], toggleClassName].join(' ').trim()}
                    id={id}
                    onClick={toggle}
                >
                    {toggleHeader}
                </div>
                <Collapse
                    className={[styles['sg--collapse-body'], menuClassName].join(' ').trim()}
                    toggler={id}
                    isOpen={collapseOpen}
                    {...args}
                >
                    {children}
                </Collapse>
            </div>
        </>
    )
}