import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/CollaboratorsInner/Collaborators.module.scss"
import SgCollaboratorsItem from "@/components/ui/CollaboratorsItem";
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";

export default function SgPageCollaboratorsInner(props) {
	const { data = {}} = props;
	const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});

	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className='row g-5'>
							<div className='col-lg-4'>
								<SgCollaboratorsItem
									image={itemContent?.image?.value}
									email={itemContent?.email?.value}
									phone={itemContent?.phone?.value}
									social={[
										{
											title: 'Facebook',
											path: itemContent?.facebook_url?.value,
											icon: 'fb_fill_n'
										},
										{
											title: 'Instagram',
											path: itemContent?.instagram_url?.value,
											icon: 'insta_fill_n'
										},
										{
											title: 'Telegram',
											path: itemContent?.telegram_url?.value,
											icon: 'tg'
										},
										{
											title: 'Linkedin',
											path: itemContent?.linkedin_url?.value,
											icon: 'linkedin'
										},
									]}
								/>
							</div>
							<div className={'col-lg-8'}>
								<div className={[styles['sg--page--collaboratorsInner-head']].join(' ').trim()}>
									<h2 className={[styles['sg--page--collaboratorsInner-head--header']].join(' ').trim()}>
										{itemContent?.fullName?.value}
									</h2>
								</div>
								<div className={[styles['sg--page--collaboratorsInner-body']].join(' ').trim()}
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