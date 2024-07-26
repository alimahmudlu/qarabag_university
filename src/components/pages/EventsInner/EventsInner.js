import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/EventsInner/EventsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";
import {SgIcon} from "@/components/ui/Icon";

export default function SgPageEventsInner(props) {
	const { data } = props;
	const { title, date, description, location } = data;

	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className={[styles['sg--page--eventsInner']].join(' ').trim()}>

							<div className={[styles['sg--page--eventsInner-social']].join(' ').trim()}>
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
									direction='column'
								/>
							</div>

							<div className={[styles['sg--page--eventsInner-details']].join(' ').trim()}>
								<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
									<div className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
										<SgIcon
											icon='calendar'
										/>
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>
										Tarix
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
										{moment(date).format('MMMM DD, YYYY')}
									</div>
								</div>
								<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
									<div className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
										<SgIcon
											icon='clock'
										/>
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>
										Vaxt
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
										{moment(date).format('HH:mm')}
									</div>
								</div>
								<div className={[styles['sg--page--eventsInner-details-item']].join(' ').trim()}>
									<div className={[styles['sg--page--eventsInner-details-item--icon']].join(' ').trim()}>
										<SgIcon
											icon='location'
										/>
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--title']].join(' ').trim()}>
										Yer
									</div>
									<div className={[styles['sg--page--eventsInner-details-item--description']].join(' ').trim()}>
										{location}
									</div>
								</div>
							</div>
							<div className={[styles['sg--page--eventsInner-head']].join(' ').trim()}>
								<h2 className={[styles['sg--page--eventsInner-head--header']].join(' ').trim()}>
									{title}
								</h2>
							</div>
							<div className={[styles['sg--page--eventsInner-body']].join(' ').trim()}
								 dangerouslySetInnerHTML={{__html: description}}
							/>
						</div>
					</SectionBody>
				</SectionBlock>
			</Section>
		</>
	)
}