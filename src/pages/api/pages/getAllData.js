import {contentBoxes, pages} from "@/data";

export default function handler(req, res) {
	const pageList = pages;

	res.status('200').json({
		page: pageList
	})

}