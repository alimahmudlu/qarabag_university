import Link from "next/link";
import styles from "@/admin/components/ui/DashboardItem/DashboardItem.module.scss";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";
import {SgButton} from "@/admin/components/ui/Button";

export default function SgDashboardItem(props) {
	const {header, description, path, list, length} = props;
	return (
		<div className={[styles["sg--dashboardItem"]].join(' ').trim()}>
			<div className={[styles["sg--dashboardItem-head"]].join(' ').trim()}>
				<Link href={path} className={[styles["sg--dashboardItem-head--header"]].join(' ').trim()}>
					{header}
				</Link>
				<p className={[styles["sg--dashboardItem-head--description"]].join(' ').trim()}>
					{description}
				</p>
			</div>
			<div className={[styles["sg--dashboardItem-body"]].join(' ').trim()}>
				<SgButtonGroup>
					{(list || []).map((item, index) => {
						return (
							<SgButton
								key={index}
								color=''
								size='sm'
								type='link'
								to={item?.path}
							>
								{item?.name}
							</SgButton>
						)
					})}
				</SgButtonGroup>
			</div>
		</div>
	)
}