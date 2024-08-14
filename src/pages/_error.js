import {SiteLayout} from "@/components/layouts";
import Link from "next/link";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageError from "@/components/pages/ErrorPage";

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


			<SgPageError
				header='Xəta baş verdi'
				mainHeader='500'
				description={`Üzr istəyirik, gözlənilməz xəta baş verdi. <a href='/'>Əsas səhifəyə</a> geri dönün.`}
			/>
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
