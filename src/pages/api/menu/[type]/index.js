import {menus, pages} from "@/data";

export default function handler(req, res) {
    const type = req.query.type

    const menuList = {...menus};
    const pageList = pages;
    let newMenuList = {

    }

    const mergeFn = (item, list) => {
        let obj = list.find(el => el.id === item.pageId) || {};

        if (item.children) {
            obj.children = item.children.map((el) => {
                return mergeFn(el, list)
            })
        }

        return obj
    }

    Object.entries(menuList).forEach(([key, value], index) => {
        value.map((el, i) => {
            newMenuList[key] = [
                ...newMenuList[key] || [],
                mergeFn(el, pageList)
            ]
        })
    })

    res.status('200').json({
        menus: newMenuList[type] ? newMenuList[type] : newMenuList,
    })

}