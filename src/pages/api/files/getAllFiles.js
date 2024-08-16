import ApiService from "@/admin/services/ApiService";
import {FILE_LIST_ROUTE} from "@/admin/configs/apiRoutes";

export default async function handler(req, res) {
	const files = await ApiService(FILE_LIST_ROUTE)

	console.log(files, 'files')
	res.status('200').json(
		{
			"success": true,
			"time": "2024-08-06 16:18:02",
			"data": {
				"sources": [
					{
						"name": "default",
						"baseurl": "https://apikarabagh.testedumedia.com/",
						"path": "/uploads/",
						"files": files.data.data.map(el => ({
							"file": `${el.name}.${el.extension}`,
							"name": `${el.name}.${el.extension}`,
							"type": "image",
							"thumb": `${el.name}.${el.extension}`,
							"changed": "08/06/2024 4:07 PM",
							"size": "68.51kB",
							"isImage": true
						}))

					}
				],
				"code": 220
			},
			"elapsedTime": 0
		}
	)

}