export default function SgHelperTranslate(props) {
    const { translatedText, defaultText } = props;

    return (
        translatedText ?? defaultText
    )
}