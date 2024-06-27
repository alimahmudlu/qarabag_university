import styles from "@/components/ui/Section/Section.module.scss";

export default function SectionBlock(props) {
    const { children, blockStyle, blockClassName } = props;

    return (
        <div style={blockStyle} className={[styles['sg--sections--block'], blockClassName].join(' ').trim()}>
            {children}
        </div>
    )
}