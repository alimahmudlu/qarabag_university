import {SiteLayout} from "@/components/layouts";
import {SgTemplateFooter} from "@/components/templates";

export default function Index() {
    return (
        <>
            INDEX _TEST
        </>
    );
}


Index.getLayout = function getLayout(page) {
    return (
        <>
        	{page}
        </>
    )
}
