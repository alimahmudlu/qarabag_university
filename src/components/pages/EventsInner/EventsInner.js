import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/EventsInner/EventsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";
import {SgIcon} from "@/components/ui/Icon";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import SgHelperTranslate from "@/components/helper/Translate";

export default function SgPageEventsInner(props) {
	const { data, staticContent } = props;
	const { title, date, content, location, post_values } = data;
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});
	const router = useRouter();
	const {locale} = router

	const [thisLocation, setThisLocation] = useState(null);
	useEffect(() => {
		setThisLocation((typeof window !== "undefined" && window && window.location) ? window.location : '')
	}, []);

	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className={[styles['sg--page--eventsInner']].join(' ').trim()}>
							<div className={[styles['sg--page--eventsInner-social']].join(' ').trim()}>
								<div className={[styles['sg--page--eventsInner-social--container']].join(' ').trim()}>
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

										direction='column'
									/> : ''}
								</div>
							</div>

							<div className={[styles['sg--page--eventsInner-content']].join(' ').trim()}>
								<div className={[styles['sg--page--eventsInner-details']].join(' ').trim()}>
									{itemContent?.date?.value ?
										<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
											<div
												className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
												<SgIcon
													icon='calendar'
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>
												<SgHelperTranslate
													defaultText={'Tarix'}
													translatedText={staticContent?.eventInner__detailsDate__text}
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
												{moment(itemContent?.date?.value).locale(locale).format('MMMM DD, YYYY')}
											</div>
										</div>
										: null
									}
									{/*{itemContent?.time?.value ?
										<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
											<div
												className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
												<SgIcon
													icon='clock'
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>

												<SgHelperTranslate
													defaultText={'Vaxt'}
													translatedText={staticContent?.eventInner__detailsTime__text}
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
												{itemContent?.time?.value}
											</div>
										</div>
										: null
									}*/}
									{itemContent?.location?.value ?
										<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
											<div
												className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
												<SgIcon
													icon='location'
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>

												<SgHelperTranslate
													defaultText={'Yer'}
													translatedText={staticContent?.eventInner__detailsLocation__text}
												/>
											</div>
											<div
												className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
												{itemContent?.location?.value}
											</div>
										</div>
										: null
									}
								</div>
								<div className={[styles['sg--page--eventsInner-head']].join(' ').trim()}>
									<h2 className={[styles['sg--page--eventsInner-head--header']].join(' ').trim()}>
										{title}
									</h2>
								</div>
								<div className={[styles['sg--page--eventsInner-body']].join(' ').trim()}
									 dangerouslySetInnerHTML={{__html: content}}
								/>
							</div>
						</div>
					</SectionBody>
				</SectionBlock>
			</Section>
		</>
	)
}