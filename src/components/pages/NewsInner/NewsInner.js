import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/NewsInner/NewsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";

export default function SgPageNewsInner(props) {
	const { data } = props;
	const { title, date, description } = data;

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
									{moment(date).format('MMMM DD, YYYY')}
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
								 dangerouslySetInnerHTML={{__html: description}}
							/>
						</div>
					</SectionBody>
				</SectionBlock>
			</Section>
		</>
	)
}