import {Section, SectionBlock, SectionBody} from "@/components/ui/Section";
import styles from "@/components/pages/NewsInner/NewsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";
import {useEffect, useState} from "react";
import readingTime from "reading-time";
import {useRouter} from "next/router";


export default function SgPageNewsInner(props) {
	const { data = {}} = props;
	// const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const { title, content, post_values = [] } = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});
	const [thisLocation, setThisLocation] = useState(null);
	const router = useRouter();
	const {locale} = router

	useEffect(() => {
		setThisLocation((typeof window !== "undefined" && window && location) ? location : '')
	}, []);


	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className={[styles['sg--page--newsInner']].join(' ').trim()}>
							<div className={[styles['sg--page--newsInner-head']].join(' ').trim()}>
								<h2 className={[styles['sg--page--newsInner-head--header']].join(' ').trim()}>
									{title}
								</h2>
							</div>
							<div className={[styles['sg--page--newsInner-details']].join(' ').trim()}>
								{(itemContent?.date?.value || itemContent?.announcementDate?.value ) ?
									<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
										{moment(itemContent?.date?.value || itemContent?.announcementDate?.value).locale(locale).format('MMMM DD, YYYY')}
									</div>
									: ''
								}
								<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									{thisLocation ? <SgShareSocialMedia
										list={[
											{
												path: `https://www.facebook.com/sharer/sharer.php?u=${thisLocation}`,
												icon: 'facebook_fill',
												name: 'Facebook'
											},
											{
												path: `https://www.instagram.com/?url=${thisLocation}`,
												icon: 'instagram',
												name: 'Instagram'
											},
											{
												path: `http://www.linkedin.com/shareArticle?mini=true&url=${thisLocation}&title=${title}&summary=`,
												icon: 'linkedin',
												name: 'Linkedin'
											},
											{
												path: `https://telegram.me/share/url?url=${thisLocation}&text=${title}`,
												icon: 'telegram-solid',
												name: 'Telegram'
											},
											{
												path: `https://wa.me/+994/?text=${thisLocation}`,
												icon: 'whatsapp-solid',
												name: 'Whatsapp'
											},
											{
												path: `${thisLocation}`,
												onClick: (e) => {
													e.preventDefault();
													navigator.clipboard.writeText(thisLocation)
												},
												icon: 'link1',
												name: 'Copy Link'
											},
											{
												path: `http://twitter.com/share?text=${title}&url=${thisLocation}&hashtags=karabakh,azerbaijan,university,karabakhisazerbaijan`,
												icon: 'twitter-solid',
												name: 'Twitter'
											}
										]}
									/> : ''}
								</div>
								{/*<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									{Math.ceil(readingTime(content)?.minutes)} dəq
								</div>*/}
							</div>
							<div className={[styles['sg--page--newsInner-body']].join(' ').trim()}
								 dangerouslySetInnerHTML={{__html: content}}
							/>
						</div>
					</SectionBody>
				</SectionBlock>
			</Section>
		</>
	)
}