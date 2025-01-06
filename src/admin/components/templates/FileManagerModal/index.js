import React, {useRef, useState} from "react";
import {FILE_MANAGER_ROUTE, FILE_MANAGER_UPLOAD_ROUTE} from "@/admin/configs/apiRoutes";
import {changeData} from "@/admin/utils/changeData";
import {useSession} from "next-auth/react";
import {Jodit} from "jodit-pro-react";
import styles from "@/admin/components/ui/Form/Form.module.scss";
import {SgRatio} from "@/admin/components/ui/Ratio";
import {SgButton} from "@/admin/components/ui/Button";


export default function SgTemplateFileManagerModal(props) {
	const {id, name, config = {}, multiple=false, data, setData, errors, setErrors, data_key = null, fileManager, value, label, handleChange, readonly, isInvalid, externalRef, disabled, required} = props;
	const REQUEST_BASE_URL = process.env.NEXT_PUBLIC_REQUEST_ADMIN_BASE_URL;
	const REQUEST_HEADER_AUTH_KEY = process.env.NEXT_PUBLIC_REQUEST_HEADER_AUTH_KEY;
	const {data: session} = useSession();

	const containerRef = useRef(null);
	const defaultConfig = {
		ajax: {
			url: `${REQUEST_BASE_URL}${FILE_MANAGER_ROUTE}`,
			headers: {
				"Content-Language": "az",
				"Signature": "KarabakhIsAzerbaijan",
				[REQUEST_HEADER_AUTH_KEY]: `${session?.user?.token?.token_type} ${session?.user?.token?.access_token}`
			}
		},
		uploader: {
			url: `${REQUEST_BASE_URL}${FILE_MANAGER_UPLOAD_ROUTE}?action=fileUpload`,
			headers: {
				"Content-Language": "az",
				"Signature": "KarabakhIsAzerbaijan",
				[REQUEST_HEADER_AUTH_KEY]: `${session?.user?.token?.token_type} ${session?.user?.token?.access_token}`
			}
		},
		selectMode: 'single',
		events: {
			afterSelect: (selectedFiles) => {
				if (fileSubmit && selectedFiles.files.length > 0) {
					fileSubmit(selectedFiles.files);
				}
			},
		},
		license: "5AA22-12GF1-B2L6J-28ANZ",
	};

	function fileSubmit(selectedFiles) {
		if (multiple) {
			changeData({
				target: {
					id: id,
					name: name,
					value: selectedFiles?.join(','),
					validity: {},
					dataset: {
						key: data_key,
						id: null
					}
				}
			}, data, setData, errors, setErrors)
		}
		else {
			changeData({
				target: {
					id: id,
					name: name,
					value: selectedFiles?.[0],
					validity: {},
					dataset: {
						key: data_key,
						id: null
					}
				}
			}, data, setData, errors, setErrors)
		}
	}

	const fileBrowser = new Jodit.modules.FileBrowserPro({
		container: containerRef.current,
		...defaultConfig,
	});

	function toggleFileManagerModal(e) {
		fileBrowser.open((files) => {
			fileSubmit(files.files);
		}, true);
	}

	function removeItem(e, index) {
		e.preventDefault();
		const _files = value;

		if (_files && (_files.split(',') && Array.isArray(_files.split(',')))) {
			const _newFiles = _files.split(',');
			(_newFiles || []).splice(index, 1)
			fileSubmit(_newFiles);
		}
		else {
			fileSubmit([]);
		}
	}


	return (
		<>
			<>

				<div ref={containerRef} style={{width: '100%', height: '100%'}}/>
				<div className={[styles['input-container'], 'mb-1'].join(' ').trim()}>
					<label className={styles["label"]} htmlFor={fileManager ? '' : id}>{label}</label>
					<div
						className={[styles["input-wrapper"], styles["input-wrapper--file"], isInvalid && styles['input-wrapper--error'], fileManager && styles['input-wrapper--fakeFiles']].join(' ').trim()}>
						<input className={styles["file"]} type="file" name={name} ref={externalRef} data-key={data_key}
							   id={id} onChange={handleChange} disabled={disabled} multiple={multiple}
							   readOnly={readonly} required={required}/>
						<label className={[styles["label"], styles["label--file"]].join(' ').trim()}
							   htmlFor={fileManager ? '' : id}
							   onClick={fileManager ? toggleFileManagerModal : undefined}>
							Fayl seçin
						</label>
					</div>
					<div className={['input--fileList'].join(' ').trim()}>
						<div className='row'>
							{value ?
								(value.split(',') && Array.isArray(value.split(','))) ?
									(value.split(',') || []).map((file, index) => (
										<div key={index} className='col-lg-2'>
											<div className={['input--fileList-item'].join(' ').trim()}>
												<SgRatio>
													{['mp4'].includes(file.split('.')[file.split('.').length - 1]) ?
														<>
															<video className='fm_item_image--img'>
																<source src={file} type="video/mp4"/>
															</video>
														</>
														:
														(
															['png', 'jpg', 'jpeg', 'svg', 'gif'].includes(file.split('.')[file.split('.').length - 1]) ?
																<img src={file} className='fm_item_image--img'
																	 alt={file}/>
																:
																<span>{file}</span>
														)
													}
												</SgRatio>
												<SgButton
													color='error-outline'
													size='sm'
													onClick={(e) => removeItem(e, index)}
												>
													Sil
												</SgButton>
											</div>
										</div>
									))
									:
									<div className='col-lg-3'>
										<div className={['input--fileList-item'].join(' ').trim()}>
											<SgRatio>
												{['mp4'].includes(value.split('.')[value.split('.').length - 1]) ?
													<>
														<video className='fm_item_image--img'>
															<source src={value} type="video/mp4"/>
														</video>
													</>
													:
													(
														['png', 'jpg', 'jpeg', 'svg', 'gif'].includes(value.split('.')[value.split('.').length - 1]) ?
															<img src={value} className='fm_item_image--img'
																 alt={value}/>
															:
															<span>{value}</span>
													)
												}
											</SgRatio>
											<SgButton
												color='error-outline'
												size='sm'
												onClick={(e) => removeItem(e)}
											>
												Sil
											</SgButton>
										</div>
									</div>
								: ''
							}
						</div>
					</div>
				</div>
			</>
		</>
	)
}
