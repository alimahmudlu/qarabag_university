import Link from "next/link";
import {SgIcon} from "@/components/ui/Icon";
import styles from "@/components/ui/ShareSocialMedia/ShareSocialMedia.module.scss";

export default function SgShareSocialMedia(props) {
	const { list, direction } = props;

	const getDirection = () => {
		switch (direction) {
			case 'column':
				return styles['sg--shareSocialMedia--column']
		}
	}

	return (
		<>
			<div className={[styles['sg--shareSocialMedia'], getDirection()].join(' ').trim()}>
				{(list || []).map((item, index) => {
					return (
						<div key={index} className={[styles['sg--shareSocialMedia-item']].join(' ').trim()}>
							<Link href='#' className={[styles['sg--shareSocialMedia-item--link']].join(' ').trim()}>
								<SgIcon
									icon={item.icon}
									name={item.name}
								/>
							</Link>
						</div>
					)
				})}
			</div>
		</>
	)
}