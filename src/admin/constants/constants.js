const LanguageCreateFormValidation = {
    status: {
        presence: true
    },
    name: {
        presence: true,
        length: { minimum: 2 }
    },
    locale: {
        presence: true,
        length: { minimum: 2, maximum: 4 }
    },
    row: {
        presence: true
    },
    main: {
        presence: true
    },
}

const WidgetCreateFormValidation = {
    status: {
        presence: true
    },
    name: {
        presence: true,
        length: { minimum: 2 }
    },
    row: {
        presence: true
    }
}

const MenuItemAddFormValidation = {
    menu_item_type: {
        presence: true,
        length: { minimum: 1 }
    },
    url_id: {
        custom: function custom(url_id, data) {
            if (data.menu_item_type !== 'external' && (!url_id || url_id === 'null')) {
                return {errors: {url_id: 'blank'}}
            }
            else {
                return null
            }
        }
    },
    url: {
        custom: function custom(url, data) {
            if (data.menu_item_type === 'external' && (!url || url === 'null')) {
                return {errors: {url: 'blank'}}
            }
            else {
                return null
            }
        }
    },
    name: {
        presence: true,
        length: { minimum: 1 }
    },
    status: {
        presence: true,
    },
}


const PageItemAddFormValidation = {
    link_id: {
        custom: function custom(link_id, data) {
            if ((!link_id || link_id === 'null')) {
                return {errors: {link_id: 'blank'}}
            }
            else {
                return null
            }
        }
    },
    name: {
        presence: true,
        length: { minimum: 1 }
    },
}


const UserAddFormValidation = {
    name: {
        presence: true,
        length: { minimum: 1 }
    },
    surname: {
        presence: true,
        length: { minimum: 1 }
    },
    email: {
        presence: true,
        length: { minimum: 1 }
    },
    password: {
        presence: true,
        length: { minimum: 6 }
    },
}

const UserEditFormValidation = {
    name: {
        presence: true,
        length: { minimum: 1 }
    },
    surname: {
        presence: true,
        length: { minimum: 1 }
    },
    email: {
        presence: true,
        length: { minimum: 1 }
    }
}

const ChangePasswordFormValidation = {
    password_old: {
        presence: true,
        length: { minimum: 6 }
    },
    password: {
        presence: true,
        length: { minimum: 6 }
    },
    password_confirmation: {
        presence: true,
        length: { minimum: 6 }
    },
}

const SignInFormValidation = {
    email: {
        presence: true,
        length: { minimum: 2 }
    },
    password: {
        presence: true,
        length: { minimum: 6 }
    },
}

export const validationConstraints = (data, type) => {
    if (type === 'languageCreate') {
        return {
            ...LanguageCreateFormValidation,
        };
    }
    if (type === 'widgetCreate') {
        return {
            ...WidgetCreateFormValidation,
        };
    }
    if (type === 'menuItemAdd') {
        return {
            ...MenuItemAddFormValidation,
        };
    }
    if (type === 'pageItemAdd') {
        return {
            ...PageItemAddFormValidation,
        };
    }
    if (type === 'userCreate') {
        return {
            ...UserAddFormValidation,
        };
    }
    if (type === 'userEdit') {
        return {
            ...UserEditFormValidation,
        };
    }
    if (type === 'changePassword') {
        return {
            ...ChangePasswordFormValidation,
        };
    }
    if (type === 'sign-in') {
        return {
            ...SignInFormValidation,
        };
    }
}
