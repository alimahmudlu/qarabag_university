import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/NewsInner/NewsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function SgPageNewsInner(props) {
	const { data = {}} = props;
	const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});

	console.log(itemContent);

	const [thisLocation, setThisLocation] = useState(null);
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
										{moment(itemContent?.date?.value || itemContent?.announcementDate?.value).format('MMMM DD, YYYY')}
									</div>
									: ''
								}
								<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									{thisLocation ? <SgShareSocialMedia
										list={[
											{
												path: `https://www.facebook.com/sharer/sharer.php?u=${thisLocation}`,
												icon: 'facebook',
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
												icon: 'tg',
												name: 'Telegram'
											},
											{
												path: `https://wa.me/+994/?text=${thisLocation}`,
												icon: 'wp',
												name: 'Whatsapp'
											},
											{
												path: `http://twitter.com/share?text=${title}&url=${thisLocation}&hashtags=karabakh,azerbaijan,university,karabakhisazerbaijan`,
												icon: 'twitter',
												name: 'Twitter'
											}
										]}
									/> : ''}
								</div>
								<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									5 dəq
								</div>
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