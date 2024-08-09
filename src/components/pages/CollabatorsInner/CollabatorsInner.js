import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/NewsInner/NewsInner.module.scss"
import SgShareSocialMedia from "@/components/ui/ShareSocialMedia/ShareSocialMedia";
import moment from "moment";
import SgCollaboratorsItem from "@/components/ui/CollaboratorsItem";

export default function SgPageCollabatorsInner(props) {
	const { data = {}} = props;
	const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});

	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className='col-lg-3'>
							<SgCollaboratorsItem
								image=''
								header='Azər Bayramov'
								position='Köməkçi müəllim'
							/>
						</div>
						<div className={[styles['sg--page--newsInner']].join(' ').trim()}>
							<div className={[styles['sg--page--newsInner-head']].join(' ').trim()}>
								<h2 className={[styles['sg--page--newsInner-head--header']].join(' ').trim()}>
									{title}
								</h2>
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