import styles from '@/admin/components/ui/WidgetItem/WidgetItem.module.scss';
import Image from "next/image";
import {SgCheckbox, SgFile, SgFormGroup, SgInput} from "@/admin/components/ui/Form";
import SgIcon from "@/admin/components/ui/Icon";
import { sortableHandle } from "react-sortable-hoc";
import {useState} from "react";
import {SgButton} from "@/components/ui/Button";
import SgButtonGroup from "@/admin/components/ui/ButtonGroup/ButtonGroup";

const DragHandle = sortableHandle(({index, handleRemove}) => (
	<div className={[styles['sg--widgetItem--key']].join(' ').trim()}>
		<SgIcon icon='menu' size={20} />
		{index + 1}
		<SgButton
			className='ms-auto'
			size='sm'
			color='error-outline'
			onClick={() => handleRemove(index)}
			withOutBlock={true}
		>
			DELETE
		</SgButton>
	</div>
));

export default function SgWidgetItem(props) {
	const {id, index, data = {}, values = {}, errors = {}, handleChange, statusOptions, dataTypesOptions, handleRemove,
		Fdata,
		FsetData,
		FvalueErrors,
		FsetValueErrors,

		toggleWidgetDataTypeModal,
		widgetDataTypeModal
	} = props;
	const { image, name, description, page_type_id } = data;
	const { widget_id, pagination_limit, data_type_id, row, status, page_widget_values } = values

	return (
		<>
			<div className={[styles['sg--widgetItem']].join(' ').trim()}>
				<DragHandle
					handleRemove={handleRemove}
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
									disabled={Number(page_type_id) === 2}
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
							<div className='row'>
								<div className='col-lg'>
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
											disabled={Number(page_type_id) === 2}
										/>
									</SgFormGroup>
								</div>

									<div className='col-lg-auto mt-auto'>
										<SgFormGroup>
											{data_type_id ?
												<SgButtonGroup>
													<SgButton
														size='sm'
														className='px-2'
														color='primary'
														onClick={(e) => toggleWidgetDataTypeModal(e, {id: data_type_id})}
													>
														Main Page
													</SgButton>
													{Number(page_type_id) === 1 ?
														<SgButton
															size='sm'
															className='px-2'
															color='primary-outline'
															type='link'
															target='_blank'
															to={`/content/idareedici/posts/${data_type_id}`}
														>
															Posts
														</SgButton>
														: null
													}
												</SgButtonGroup>
												: ''
											}
										</SgFormGroup>
									</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<SgFormGroup>
								<SgInput
									id='widgetTitle'
									name='title'
									value={values?.title}
									isInvalid={errors.title}
									label='Title'
									onChange={handleChange}
									data_key={`page_widgets.${index}`}
								/>
							</SgFormGroup>
						</div>
						<div className='col-lg-12'>
							<SgFormGroup>
								<SgInput
									id='widgetContent'
									name='content'
									value={values?.content}
									isInvalid={errors.content}
									label='Content'
									onChange={handleChange}
									data_key={`page_widgets.${index}`}
									variant='editor'
								/>
							</SgFormGroup>
						</div>
						<div className='col-lg-12'>
							<SgFormGroup>
								<SgFile
									id='widgetImage'
									name='image'
									value={values?.image || ''}
									label='Image'
									data_key={`page_widgets.${index}`}

									fileManager={{
										multiple: false,
										data: Fdata,
										setData: FsetData,
										errors: FvalueErrors,
										setErrors: FsetValueErrors,
									}}
								/>
							</SgFormGroup>
						</div>
					</div>
					<hr />
					<hr />
					<hr />
					<div className='row pt-5'>
						{(page_widget_values || []).map((item, i) => {
							switch (item?.meta_key?.input_type?.alias) {
								case 'file':
									return (
										<div key={i} className='col-lg-12'>
											<SgFormGroup>
												<SgFile
													id={`value--${index}--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														multiple: !!item?.meta_key?.input_type?.alias === 'multi_image',
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
													id={`value--${index}--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														type: 'png',
														multiple: false,
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
													id={`value--${index}--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item.meta_key.title}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item.meta_key.input_type.alias}
													variant={item.meta_key.input_type.alias}

													fileManager={{
														type: 'png',
														multiple: true,
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
													id={`value--${index}--${i}`}
													name='value'
													checked={item.value && Number(item.value) && !!Number(item.value)}
													value={''}
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
													id={`value--${index}--${i}`}
													name='value'
													value={item.value || ''}
													// isInvalid={errors.data_type_id}
													label={item?.meta_key?.title}
													onChange={handleChange}
													options={dataTypesOptions}
													data_key={`page_widgets.${index}.page_widget_values.${i}`}
													type={item?.meta_key?.input_type?.alias}
													variant={item?.meta_key?.input_type?.alias}
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