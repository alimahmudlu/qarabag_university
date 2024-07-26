import {SiteLayout} from "@/components/layouts";
import ApiService from "@/services/ApiService";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageNewsInner from "@/components/pages/NewsInner";
import SgPageEventsInner from "@/components/pages/EventsInner";


export default function Index(props) {
	const {pageData} = props;
	const {pageDetails, content} = pageData || {};
	const {title, id, innerPageType} = pageDetails || {};

	const renderInner = (type, data) => {
		switch (type) {
			case 'newsInner':
				return (
					<>
						<SgPageNewsInner
							data={data}
						/>
					</>
				)

			case 'eventsInner':
				return (
					<>
						<SgPageEventsInner
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


			{renderInner(innerPageType, content)}
		</>
	);
}

export const getServerSideProps = async (context) => {

	const {query} = context;
	const {post_id} = query;

	const pageData = await ApiService.get(`http://localhost:3000/api/post/${post_id}`)

	if(pageData.status !== 200) {
		return {
			// redirect: {
			//     permanent: false,
			//     destination: "/404",
			// },
			props: {
				pageData: {}
			}
		};
	}

	return {
		props: {
			pageData: pageData.data.data
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
