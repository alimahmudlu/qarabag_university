import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/NewsInner/NewsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";

export default function SgPageNewsInner(props) {
	const { data = {}} = props;
	const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});

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
								<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									{moment(itemContent?.Date?.value).format('MMMM DD, YYYY')}
								</div>
								<div className={[styles['sg--page--newsInner-details-item']].join(' ').trim()}>
									<SgShareSocialMedia
										list={[
											{
												icon: 'facebook',
												name: 'Facebook'
											},
											{
												icon: 'instagram',
												name: 'Instagram'
											},
											{
												icon: 'linkedin',
												name: 'Linkedin'
											},
											{
												icon: 'telegram',
												name: 'Telegram'
											},
											{
												icon: 'whatsapp',
												name: 'Whatsapp'
											},
											{
												icon: 'twitter',
												name: 'Twitter'
											}
										]}
									/>
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