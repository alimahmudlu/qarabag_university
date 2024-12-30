import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageNewsInner from "@/components/pages/NewsInner";
import SgPageEventsInner from "@/components/pages/EventsInner";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import SgSectionNewsContent from "@/components/sections/NewsContent";
import SgSectionEventsContent from "@/components/sections/EventsContent";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";
import SgPageCollaboratorsInner from "@/components/pages/CollaboratorsInner";
import SgPageCareerInner from "@/components/pages/CareerInner/CareerInner";
import SgHelperTranslate from "@/components/helper/Translate";


export default function Index(props) {
	const {pageData, page_id, staticContent} = props;
	const {post = {}, page = {}} = pageData || {};
	const {title, short_description, data_type = {}} = post || {};
	const {inner_layout} = data_type || {};

	const renderInner = (type, data) => {
		switch (type) {
			case '1':
				return (
					<>
						<SgPageNewsInner
							data={data}
							staticContent={staticContent}
						/>
					</>
				)

			case '5':
				return (
					<>
						<SgPageNewsInner
							data={data}
							staticContent={staticContent}
						/>

						<SgSectionNewsContent
							key={0}
							id={`contentBanner__${1}`}
							mainData={{data_type_id: data_type?.id}}
							page_id={page_id}
							data={{
								image: '',
								title: `Daha çox ${page?.title}`,
								description: '',
								filter: false,
								morePath: `/page/${page?.id}`,
								list: []
							}}
							staticContent={staticContent}
						/>
					</>
				)

			case '2':
				return (
					<>
						<SgPageEventsInner
							data={data}
							staticContent={staticContent}
						/>
					</>
				)

			case '6':
				return (
					<>
						<SgPageEventsInner
							data={data}
							staticContent={staticContent}
						/>

						<SgSectionEventsContent
							key={0}
							id={`contentBanner__${1}`}
							mainData={{data_type_id: data_type?.id}}
							page_id={page_id}
							data={{
								image: '',
								title: `Daha çox ${page?.title}`,
								description: '',
								filter: false,
								morePath: `/page/${page?.id}`,
								list: []
							}}
							staticContent={staticContent}
						/>
					</>
				)

			case '3':
				return (
					<>
						<SgPageCollaboratorsInner
							data={data}
							staticContent={staticContent}
						/>
					</>
				)

			case '4':
				return (
					<>
						<SgPageCareerInner
							data={data}
							staticContent={staticContent}
						/>
					</>
				)

			default:
				return (
					<>
						<SgPageNewsInner
							data={data}
						/>

						<SgSectionNewsContent
							key={0}
							id={`contentBanner__${1}`}
							mainData={{data_type_id: data_type?.id}}
							page_id={page_id}
							data={{
								image: '',
								title: `Daha çox ${page?.title}`,
								description: '',
								filter: false,
								morePath: `/page/${page?.id}`,
								list: []
							}}
							staticContent={staticContent}
						/>
					</>
				)
		}
	}

	return (
		<>
			<GetGenerateMetadata
				meta={{
					title: title,
					description: short_description,
				}}
			/>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={page?.title || title || ''}
				breadcrumb={[
					{
						name: <SgHelperTranslate
							defaultText={'Ana səhifə'}
							translatedText={staticContent?.heroBreadcrumb__mainPage__text}
						/>,
						to: '/'
					},
					{
						name: page?.title,
						to: `/page/${page_id}`
					},
					{
						name: title,
						to: `/page/${page_id}`
					},
				]}
			/>


			{renderInner(inner_layout, post)}
		</>
	);
}

export const getServerSideProps = async (context) => {
	const {query} = context;
	const {post_id, page_id} = query;

	try {
		const data = await ApiService.get(`${SITE_POST_LIST_ROUTE}/${post_id}?page_id=${page_id}`, {headers: {
				"Content-Language": context.locale || 'az'
			}});

		return {
			props: {
				pageData: data.data.data,
				page_id: page_id
			}
		}
	}
	catch (error) {
		return {
			redirect: {
			    permanent: false,
			    destination: "/404",
			},
			props: {
				pageData: {}
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
