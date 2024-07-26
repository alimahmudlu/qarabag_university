import {pages, posts} from "@/data";

export default function handler(req, res) {
    const post_id = req.query.post_id;
    const post = posts.find(el => el.id === Number(post_id)) || {};
    const page = pages.find(el => el.id === post?.pageId);
    const resp_page = {
        pageDetails: page,
        content: post
    }

    res.status('200').json({
        data: resp_page
    })

}