import {Section, SectionBlock, SectionBody, SectionHead} from "@/components/ui/Section";
import styles from "@/components/pages/CollaboratorsInner/CareerInner.module.scss"
import SgCollaboratorsItem from "@/components/ui/CollaboratorsItem";
import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";
import {SgDetailsBlog} from "@/components/ui/DetailsBlog";

export default function SgPageCareerInner(props) {
	const { data = {}} = props;
	const {id, image, title, status, data_type = {}, content, post_values = []} = data || {};
	const itemContent = post_values.reduce((a, v) => ({ ...a, [v.meta_key?.alias]: v}), {});

	return (
		<>
			<Section>
				<SectionBlock>
					<SectionBody>
						<div className='row g-5'>
							<h2 className={[styles['sg--page--careerInner-head']].join(' ').trim()}>{title}</h2>
							<div className='col-lg-8'>
								<div className={[styles['sg--page--careerInner-body']].join(' ').trim()}>{content}</div>
							</div>
							<div className={'col-lg-4'}>
								<SgDetailsBlog
									header={'Müraciət detalları'}
									list={[
										{
										id: 1,
										icon: 'mail',
										title: 'Email',
										name: itemContent?.email1?.value,
										type: 'mail'
									},
									{
										id: 2,
										icon: 'phone',
										title: 'Telefon',
										name: itemContent?.phone1?.value,
										type: 'tel'
									},
									{
										id: 3,
										icon: 'phone',
										title: 'Telefon',
										name: itemContent?.phone2?.value,
										type: 'tel'
									},
								]}
							/>

								<SgDetailsBlog
									header={'İş detalları'}
									list={[
										{
											id: 1,
											icon: 'map-pin',
											title: 'Yer',
											name: itemContent?.location?.value,
										},
										{
											id: 2,
											icon: 'work',
											title: 'Məşğulluq növü',
											name: itemContent?.jobType?.value,

										},
										{
											id: 3,
											icon: 'phone',
											title: 'Təhsil',
											name: itemContent?.educationDegree?.value,
										},
										{
											id: 4,
											icon: 'person',
											title: 'Yaş',
											name: itemContent?.age?.value,
										},
										{
											id: 5,
											icon: 'euro',
											title: 'Maaş',
											name: itemContent?.salary?.value,
										},
										{
											id: 5,
											icon: 'calendar_2',
											title: 'Elanın qoyulma tarixi',
											name: itemContent?.announcementDate?.value,
										},
										{
											id: 5,
											icon: 'calendar_2',
											title: 'Son müraciət tarixi',
											name: itemContent?.lastApplication?.value,
										},
									]}
								/>
							</div>
						</div>
					</SectionBody>
				</SectionBlock>
			</Section>
		</>
	)
}