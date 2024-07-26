import styles from '@/components/ui/PrincipleList/PrincipleList.module.scss';

export default function SgPrincipleList(props) {
	const {data} = props;

	return (
		<>
			<div className={[styles["sg--principleList"]].join(' ').trim()}>
				{(data || []).map((item, index) => {
					const {key, title, description} = item;

					return (
						<div key={index} className={[styles['sg--principleList-item']].join(' ').trim()}>
							<div className={[styles["sg--principleList-item--key"]].join(' ').trim()}>
								{key}
							</div>
							<div className={[styles["sg--principleList-item--header"]].join(' ').trim()}>
								{title}
							</div>
							<div className={[styles["sg--principleList-item--description"]].join(' ').trim()}>
								{description}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}