import {SiteLayout} from "@/components/layouts";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageError from "@/components/pages/ErrorPage";
import SgSectionSearchSection from "@/components/sections/SearchSection";
import ApiService from "@/services/ApiService";
import {SEARCH_CONTENTS_ROUTE} from "@/configs/apiRoutes";

export default function Index(props) {
	const { searchData } = props;

	return (
		<>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={''}
				breadcrumb={[]}
			/>

			<SgSectionSearchSection
				searchData={searchData}
			/>
		</>
	)
}

export const getServerSideProps = async (context) => {
	const {query} = context;
	let newQuery = {...query};
	delete newQuery.page

	try {
		const searchData = await ApiService.get(`${SEARCH_CONTENTS_ROUTE}`, {
			headers: {
				"Content-Language": context.locale || 'az'
			},
			params: {...newQuery}
		});

		return {
			props: {
				searchData: searchData.data.data || [],
				locale: context?.locale,
			}
		}
	}
	catch (error) {
		return {
			props: {
				searchData: [],
				locale: context?.locale,
			}
		};
	}
}

Index.getLayout = function getLayout(page, menus, languages, settings, locale, staticContent) {
	return (
		<SiteLayout menus={menus} languages={languages} settings={settings} locale={locale} staticContent={staticContent}>
			{page}
		</SiteLayout>
	)
}
