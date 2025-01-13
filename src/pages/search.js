import {SiteLayout} from "@/components/layouts";
import SgSectionMainHero from "@/components/sections/MainHero";
import SgPageError from "@/components/pages/ErrorPage";
import SgSectionSearchSection from "@/components/sections/SearchSection";
import ApiService from "@/services/ApiService";
import {SEARCH_CONTENTS_ROUTE} from "@/configs/apiRoutes";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {changeData} from "@/utils/changeData";

export default function Index(props) {
	const { searchData } = props;
	const router = useRouter()
	const { query } = useRouter()
	const [ userFilters, setUserFilters ] = useState({})
	const [ errors, setErrors ] = useState({})
	// const [ searchData, setSearchData ] = useState([])

	function handleChange(e) {
		changeData(e, userFilters, setUserFilters, errors, setErrors)
	}

	useEffect(() => {
		if (Object.keys(userFilters).length > 0 && JSON.stringify(userFilters) !== JSON.stringify(router.query)) {
			Object.keys(userFilters).map(el => {
                router.query[el] = userFilters[el]
            })

            router.push({
                query: { ...router.query },
            }, undefined, { scroll: false });

			// ApiService.get(`${SEARCH_CONTENTS_ROUTE}`, {
			// 	params: {...userFilters}
			// }).then((response) => {
			// 	setSearchData(response.data.data)
			// })
		}
	}, [userFilters]);

	function getModifiedQuery(name, value) {
	    if (!name.includes('[]')) {
	        return value
	    }

	    if (typeof value === 'string') {
	        return [value]
	    } else if (Array.isArray(value)) {
	        return value
	    }

	    return []
	}

	useEffect(() => {
	    const newQuery = {...query}

	    let modifiedQuery = {}
	    for (const [name, value] of Object.entries(newQuery)) {
	        modifiedQuery[name] = getModifiedQuery(name, value)
	    }

	    setUserFilters({...userFilters, ...modifiedQuery})
	}, []);


	function removeFilter(key) {
		if (key === 'all') {
			setUserFilters({
				...userFilters,
				'categories[]': [],
				search: ''
			})
		}
		else {
			changeData({
				target: {
					id: 'search',
					name: 'search',
					type: 'text',
					checked: false,
					value: '',
					dataset: {}
				}
			}, userFilters, setUserFilters, errors, setErrors)
		}
	}


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
				userFilters={userFilters}
				removeFilter={removeFilter}
				handleChange={handleChange}
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
