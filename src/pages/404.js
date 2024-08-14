import {SiteLayout} from "@/components/layouts";
import Link from "next/link";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";
import SgSectionMainHero from "@/components/sections/MainHero";

export default function Index() {
	return (
		<>
			<GetGenerateMetadata
				meta={{
					title: '',
					description: 'asas',
				}}
			/>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={''}
				breadcrumb={[]}
			/>
			<div className='p-[150px]'>
				<Link href='/'>lol ferid - Page Not Found</Link>
			</div>
		</>
	)
}

Index.getLayout = function getLayout(page, menus, languages) {
	return (
		<>
			<SiteLayout menus={menus} languages={languages}>
				{page}
			</SiteLayout>
		</>
	)
}
