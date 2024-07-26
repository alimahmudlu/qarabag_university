import {SiteLayout} from "@/components/layouts";
import Link from "next/link";

export default function Index() {
	return (
		<>
			<div className='p-[150px]'>
				<Link href='/'>40aasasas4 - Page Not Found</Link>
			</div>
		</>
	)
}

Index.getLayout = function getLayout(page) {
	return (
		<>
			<SiteLayout>
				{page}
			</SiteLayout>
		</>
	)
}
