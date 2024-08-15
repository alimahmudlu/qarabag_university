import {SiteLayout} from "@/components/layouts";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageError from "@/components/pages/ErrorPage";

export default function Index() {
	return (
		<>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={''}
				breadcrumb={[]}
			/>

			<SgPageError
				header='Səhifə tapılmadı'
				mainHeader='404'
				description={`Üzr istəyirik, bu səhifə mövcud deyil. <a href='/'>Əsas səhifəyə</a> geri dönün.`}
			/>
		</>
	)
}

Index.getLayout = function getLayout(page, menus, languages, settings) {
	return (
		<>
			<SiteLayout menus={menus} languages={languages} settings={settings}>
				{page}
			</SiteLayout>
		</>
	)
}
