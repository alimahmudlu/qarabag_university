import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageNewsInner from "@/components/pages/NewsInner";
import SgPageEventsInner from "@/components/pages/EventsInner";
import {SITE_POST_LIST_ROUTE} from "@/configs/apiRoutes";
import SgSectionNewsContentBanner from "@/components/sections/NewsContentBanner";
import SgSectionNewsContent from "@/components/sections/NewsContent";


export default function Index(props) {
	const {pageData, page_id} = props;
	const {post = {}, page = {}} = pageData || {};
	const {title, data_type = {}} = post || {};
	const {inner_layout} = data_type || {};
	const {id} = page || {};

	const renderInner = (type, data) => {
		switch (type) {
			case '1':
				return (
					<>
						<SgPageNewsInner
							data={data}
						/>
					</>
				)

			case '2':
				return (
					<>
						<SgPageEventsInner
							data={data}
						/>
					</>
				)

			default:
				return (
					<>
						<SgPageNewsInner
							data={data}
						/>
					</>
				)
		}
	}

	return (
		<>
			<SgSectionMainHero
				id='mainHero'
				inner={true}
				header={title || ''}
				breadcrumb={[
					{
						name: 'Ana səhifə',
						to: '/'
					},
					{
						name: 'Ana səhifə',
						to: '/'
					},
					{
						name: 'Ana səhifə',
						to: '/'
					},
				]}
			/>


			{renderInner(inner_layout, post)}


			<SgSectionNewsContent
				key={0}
				id={`contentBanner__${1}`}
				mainData={{data_type_id: data_type?.id}}
				page_id={page_id}
				data={{
					image: '',
					title: 'Daha çox',
					description: '',
					filter: false,
					morePath: `/page/${id}`,
					list: []
				}}
			/>
		</>
	);
}

export const getServerSideProps = async (context) => {

	const {query} = context;
	const {post_id, page_id} = query;

	console.log(post_id)

	const data = await ApiService.get(`${SITE_POST_LIST_ROUTE}/${post_id}`)

	if(data.status !== 200) {
		return {
			// redirect: {
			//     permanent: false,
			//     destination: "/404",
			// },
			props: {
				pageData: {},
				page_id: page_id
			}
		};
	}

	return {
		props: {
			pageData: data.data.data,
			page_id: page_id
		}
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
