import styles from '@/admin/components/ui/WidgetItem/WidgetItem.module.scss';
import Image from "next/image";
import {SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import SgIcon from "@/admin/components/ui/Icon";
import { sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(({index}) => (
	<div className={[styles['sg--widgetItem--key']].join(' ').trim()}>
		<SgIcon icon='menu' size={20} />
		{index + 1}
	</div>
));

export default function SgWidgetItem(props) {
	const {id, index, data = {}, values = {}, errors = {}, handleChange, statusOptions, dataTypesOptions} = props;
	const { image, name, description } = data;
	const { widget_id, pagination_limit, data_type_id, row, status } = values

	return (
		<>
			<div className={[styles['sg--widgetItem']].join(' ').trim()}>
				<DragHandle
					index={index}
				/>
				<div className={[styles['sg--widgetItem-head']].join(' ').trim()}>
					<div className={[styles['sg--widgetItem-head-image']].join(' ').trim()}>
						<Image width='1000' height='1000'
							className={[styles['sg--widgetItem-head-image--img']].join(' ').trim()}
							src={encodeURI(image)}
							alt={name}
						/>
					</div>
					<div className={[styles['sg--widgetItem-head-body']].join(' ').trim()}>
						<h6 className={[styles['sg--widgetItem-head-body--header']].join(' ').trim()}>
							{name}
						</h6>
						<p className={[styles['sg--widgetItem-head-body--description']].join(' ').trim()}>
							{description}
						</p>
					</div>
				</div>
				<div className={[styles['sg--widgetItem-body']].join(' ').trim()}>
					<div className='row'>
						<div className='col-lg-6'>
							<SgFormGroup>
								<SgInput
									id='pagination_limit'
									name='pagination_limit'
									type='number'
									value={pagination_limit}
									isInvalid={errors.pagination_limit}
									label='Pagination Limit'
									onChange={handleChange}
									data_key={`page_widgets.${index}`}
								/>
							</SgFormGroup>
						</div>
						<div className='col-lg-6'>
							<SgFormGroup>
								<SgInput
									id='status'
									name='status'
									value={status}
									isInvalid={errors.status}
									label='Status'
									onChange={handleChange}
									options={statusOptions}
									variant='select'
									data_key={`page_widgets.${index}`}
								/>
							</SgFormGroup>
						</div>
						<div className='col-lg-6'>
							<SgFormGroup>
								<SgInput
									id='data_type_id'
									name='data_type_id'
									value={data_type_id}
									isInvalid={errors.data_type_id}
									label='Data Type'
									onChange={handleChange}
									options={dataTypesOptions}
									variant='select'
									data_key={`page_widgets.${index}`}
								/>
							</SgFormGroup>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}