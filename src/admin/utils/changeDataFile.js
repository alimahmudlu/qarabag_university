// HELPERS
import {getBase64} from "@/admin/utils/getBase64";
import ApiService from "@/admin/services/ApiService";
import {changeData} from "@/admin/utils/changeData";
import {FILE_UPLOAD_ROUTE} from "@/admin/configs/apiRoutes";

/**
 * @functionName CALL BACK CHANGE FORM DATA FILE
 * @functionDescription
 */
export const callBackChangeDataFile = (e, _formData, setFormData, _valueErrors, setValueErrors, extraKey, progress = null, setProgress, url = FILE_UPLOAD_ROUTE) => {
	let formData = _formData;
	let valueErrors = _valueErrors;
	let count = 0

	if (e.target.files.length > 0) {
		let file = e.target.files[0];
		if (progress) {
			progress(1);
		}
		if (e.target.files.length > 1) {
			file = e.target.files;
			for (const newFile of file) {
				getBase64(newFile, (result64) => {
					const exts = newFile.name.split('.');
					const ext = exts[exts.length - 1];
					delete exts[exts.length - 1];
					const fname = exts.join('').trim();
					ApiService({
						url: url,
						method: 'POST',
						data: {
							extension: ext,
							name: fname,
							file: result64.result
						}
					}).then(result => {
						count += 1
						if (count === e.target.files.length) {
							changeData(e, formData, setFormData, valueErrors, setValueErrors)
						}
					}).catch(() => {
						console.log('salam')
					});
				});
			}

		}
		else {
			file = e.target.files[0];
			getBase64(file, (result64) => {
				const exts = file.name.split('.');
				const ext = exts[exts.length - 1];
				delete exts[exts.length - 1];
				const fname = exts.join('').trim();
				ApiService({
					url: url,
					method: 'POST',
					data: {
						extension: ext,
						name: fname,
						file: result64.result
					}
				}).then(result => {
					changeData(e, formData, setFormData, valueErrors, setValueErrors, result.data, extraKey)
				}).catch(error => {
					console.log(error)
				});
			});
		}

	}
	else {
		console.log('salam 3')
	}
}

/**
 * @functionName CHANGE FORM DATA FILE
 * @functionDescription Fayl yükləmə zamanı işə düşür və callback funksiyasından aldığı məlumata uyğun state-ə value yazır.
 */
export function changeDataFile(e, datas, setDatas, errors, setErrors, filesProgress, setFilesProgress) {
	const id = e.target.id;
	callBackChangeDataFile(e, datas, setDatas, errors, setErrors, (data) => {
		if (data) {
			const { errors, dataForm } = data;
			setDatas((datas) => ({
				...datas,
				...dataForm
			}))
			setErrors((error) => ({
				...error,
				...errors
			}))
		}
	}, (progress) => {
		const fileProgress = filesProgress || {};
		if (Number(fileProgress[id]) !== Math.round(progress)) {
			fileProgress[id] = progress;
			setFilesProgress((filesProgress) => ({
				...filesProgress,
				...fileProgress
			}));
		}
	});
}
