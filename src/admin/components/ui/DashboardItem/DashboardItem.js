import Link from "next/link";
import styles from "@/admin/components/ui/DashboardItem/DashboardItem.module.scss";

export default function SgDashboardItem(props) {
	const {header, description, path, length} = props;
	return (
		<div className={[styles["sg--dashboardItem"]].join(' ').trim()}>
			<div className={[styles["sg--dashboardItem-head"]].join(' ').trim()}>
				<h6 className={[styles["sg--dashboardItem-head--header"]].join(' ').trim()}>
					{header}
				</h6>
			</div>
			<div className={[styles["sg--dashboardItem-head"]].join(' ').trim()}>

			</div>
		</div>
	)
}