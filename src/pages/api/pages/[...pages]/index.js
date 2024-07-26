import {contentBoxes, pages} from "@/data";

export default function handler(req, res) {
    const pageQuery = req.query.pages
    const pageList = pages;
    const contentList = contentBoxes;
    let resp_page = {};

    const page = pageList.find(el => el.key === pageQuery[pageQuery.length - 1])

    resp_page = {
        pageDetails: page,
        content: contentList.filter(el => el.pageId === page?.id)
    }

    console.log(page)

    if (page) {
        res.status('200').json({
            page: resp_page
        })
    }
    else {
        res.status('204').json({})
    }

}