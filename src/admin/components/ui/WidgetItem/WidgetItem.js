import styles from '@/admin/components/ui/WidgetItem/WidgetItem.module.scss';
import Image from "next/image";
import {SgCheckbox, SgFile, SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import SgIcon from "@/admin/components/ui/Icon";
import { sortableHandle } from "react-sortable-hoc";
import {useState} from "react";

const DragHandle = sortableHandle(({index}) => (
	<div className={[styles['sg--widgetItem--key']].join(' ').trim()}>
		<SgIcon icon='menu' size={20} />
		{index + 1}
	</div>
));

export default function SgWidgetItem(props) {
	const {id, index, data = {}, values = {}, errors = {}, handleChange, statusOptions, dataTypesOptions,
		Fdata,
		FsetData,
		FvalueErrors,
		FsetValueErrors
	} = props;
	const { image, name, description, page_type_id } = data;
	const { widget_id, pagination_limit, data_type_id, row, status, page_widget_values } = values
	const [fileManagerModal, setFileManagerModal] = useState(false);

	function toggleFileManagerModal(e) {
		setFileManagerModal(!fileManagerModal)
	}

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
									disabled={Number(page_type_id) === 1}
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
									disabled={Number(page_type_id) === 1}
								/>
							</SgFormGroup>
						</div>
					</div>
					<hr />
					<div className='row pt-3'>
						{(page_widget_values || []).map((item, i) => {
							switch (item.meta_key.input_type.alias) {
								case 'file':
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgFile
													id={`value--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													onChange={toggleFileManagerModal}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														multiple: false,
														toggleFileManagerModal: toggleFileManagerModal,
														fileManagerModal: fileManagerModal,
														data: Fdata,
														setData: FsetData,
														errors: FvalueErrors,
														setErrors: FsetValueErrors,
													}}
												/>
											</SgFormGroup>
										</div>
									)
								case 'image':
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgFile
													id={`value--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													onChange={toggleFileManagerModal}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														type: 'png',
														multiple: false,
														toggleFileManagerModal: toggleFileManagerModal,
														fileManagerModal: fileManagerModal,
														data: Fdata,
														setData: FsetData,
														errors: FvalueErrors,
														setErrors: FsetValueErrors,
													}}
												/>
											</SgFormGroup>
										</div>
									)
								case 'multi_image':
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgFile
													id={`value--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													onChange={toggleFileManagerModal}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														type: 'png',
														multiple: true,
														toggleFileManagerModal: toggleFileManagerModal,
														fileManagerModal: fileManagerModal,
														data: Fdata,
														setData: FsetData,
														errors: FvalueErrors,
														setErrors: FsetValueErrors,
													}}
												/>
											</SgFormGroup>
										</div>
									)
								case 'checkbox':
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgCheckbox
													id={`value--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													onChange={handleChange}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}
												/>
											</SgFormGroup>
										</div>
									)
								default:
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgInput
													id={`value--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													onChange={handleChange}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}
												/>
											</SgFormGroup>
										</div>
									)
							}

						})}
					</div>
				</div>

			</div>
		</>
	)
}