import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageNewsInner from "@/components/pages/NewsInner";
import SgPageEventsInner from "@/components/pages/EventsInner";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import SgSectionNewsContentBanner from "@/components/sections/NewsContentBanner";
import SgSectionNewsContent from "@/components/sections/NewsContent";
import SgSectionEventsBanner from "@/components/sections/EventsBanner";
import SgSectionEventsContent from "@/components/sections/EventsContent";
import GetGenerateMetadata from "@/utils/getGenerateMetadata";


export default function Index(props) {
	const {pageData, page_id} = props;
	const {post = {}, page = {}} = pageData || {};
	const {title, data_type = {}} = post || {};
	const {inner_layout} = data_type || {};

	const renderInner = (type, data) => {
		switch (type) {
			case '1':
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
						/>
					</>
				)

			case '2':
				return (
					<>
						<SgPageEventsInner
							data={data}
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
					description: '',
				}}
			/>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={page?.title || title || ''}
				breadcrumb={[
					{
						name: 'Ana səhifə',
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
		const data = await ApiService.get(`${SITE_POST_LIST_ROUTE}/${post_id}?page_id=${page_id}`)

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

Index.getLayout = function getLayout(page, menus) {
	return (
		<>
			<SiteLayout menus={menus}>
				{page}
			</SiteLayout>
		</>
	)
}
