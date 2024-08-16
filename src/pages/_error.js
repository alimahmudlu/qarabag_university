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
				header='Xəta baş verdi'
				mainHeader='500'
				description={`Üzr istəyirik, gözlənilməz xəta baş verdi. <a href='/'>Əsas səhifəyə</a> geri dönün.`}
			/>
		</>
	)
}

Index.getLayout = function getLayout(page, menus, languages, settings, locale, staticContent) {
	return (
		<SiteLayout menus={menus} languages={languages} settings={settings} locale={locale} staticContent={staticContent}>
			{page}
		</SiteLayout>
	)
}
