$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

let activeConversation = false;

const NewSubject = (item) => {
    let section = item.viewed_status ? "#dialog" : "#pending"
    if (section) {
        $(section).prepend(
            `<div class="chat_block_left_content_item_content_item select-message"
                    id="${item.id}" data-site_id='${item.site_id}'
                    data-user_id='${item.user_id}'
                    data-subject_chat_id='${item.id}'
                    data-subject_id='${item.subject_id}'
                    data-token='${item.token}' data-type='${type}'>
                <div class="person_block online">
                    <div class="person_block_image">
                        ${item.short_name}
                    </div>
                </div>
                <div class="chat_block_left_content_item_content_item_head">
                    <h5 class="chat_block_left_content_item_content_item_head--header" ${item.new_message_count ? `data-budget="${item.new_message_count}"` : ''}>
                        ${item.auth_name}
                    </h5>
                    <h5 class="chat_block_left_content_item_content_item_head--description">
                         <span id="end_message_${item.id}">
                            ${item.message}
                         </span>
                     </h5>
                    <span id="typing_2_${item.id}"></span>
                </div>
                <span class="chat_block_left_content_item_content_item--date">
                    ${item.created_at}
                </span>
            </div>`
        )
    }
}

const Subjects = (subjects) => {

    let m = " ";

    if (subjects.length) {
        subjects.forEach((item => {
            if (item.viewed_status) {
                m += `<div class="chat_block_left_content_item_content_item select-message"
                        id="${item.id}"
                        data-site_id='${item.site_id}'
                        data-user_id='${item.user_id}'
                        data-subject_chat_id='${item.id}'
                        data-subject_id='${item.subject_id}'
                        data-token='${item.token}' data-type='${type}'>
                        <div class="person_block online">
                            <div class="person_block_image">
                                ${item.short_name}
                            </div>
                        </div>
                    <div class="chat_block_left_content_item_content_item_head">
                        <h5 class="chat_block_left_content_item_content_item_head--header" ${item.new_message_count ? `data-budget="${item.new_message_count}"` : ''}>
                            ${item.auth_name}
                        </h5>
                        <h5 class="chat_block_left_content_item_content_item_head--description">
                            <span id="end_message_${item.id}">
                                ${item.message}
                            </span>
                        </h5>
                    <span id="typing_2_${item.id}"></span>
                    </div>
                        <span class="chat_block_left_content_item_content_item--date">
                            ${item.created_at}
                        </span>
                    </div>`
            } else {
                $('#pending').append(`
                    <div class="chat_block_left_content_item_content_item select-message"
                        id="${item.id}"
                        data-site_id="${item.site_id}"
                        data-user_id="${item.user_id}"
                        data-subject_chat_id="${item.id}"
                        data-subject_id="${item.subject_id}"
                        data-token="${item.token}"
                        data-type="${type}">
                        <div class="person_block online">
                            <div class="person_block_image">
                                ${item.short_name}
                            </div>
                        </div>
                    <div class="chat_block_left_content_item_content_item_head">
                        <h5 class="chat_block_left_content_item_content_item_head--header">
                            ${item.auth_name}
                        </h5>
                        <h5 class="chat_block_left_content_item_content_item_head--description">
                            <span id="end_message_${item.id}">
                                 ${item.message}
                            </span>
                        </h5>
                        <span id="typing_2_${item.id}"></span>
                    </div>
                    <span class="chat_block_left_content_item_content_item--date">
                        ${item.created_at}
                    </span>
                    </div>
                `)
            }
        }));
    }

    return m ? m : "No message";
}

const ChatNewMessage = (data) => {
    if (activeConversation) {
        let filesArray = [];
        const files = data.files ? JSON.parse(data.files) : [];
        (files || []).map(file => {
            let fileHTML =
                `
                            <div class="chat_block_right_content_item_block--item-file">
                                <a href='${file.src}' title='${file.name}' download='${file.name}' >
                                    ${['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif'].includes(file.type)
                    ?
                    `
                                            <figure>
                                                <img src='${file.src}' alt='${file.name}'/>
                                                <figcaption>${file.name}</figcaption>
                                            </figure>
                                        `
                    :
                    file.name
                }
                        </a>
                    </div>
                `;
            filesArray.push(fileHTML)
        })
        let type = data.auth === 'client' ? 'sender' : 'receiver';
        if ($('.chat_block_right_content[data-chatId="' + data.subject_chat_id + '"] .chat_block_right_content_item--' + type + ':first-child').length) {
            if ($('.chat_block_right_content[data-chatId="' + data.subject_chat_id + '"] .chat_block_right_content_item--' + type + ':first-child .chat_block_right_content_item_block:first-child').attr('data-date') === data.time) {
                $('.chat_block_right_content[data-chatId="' + data.subject_chat_id + '"] .chat_block_right_content_item--' + type + ':first-child .chat_block_right_content_item_block:first-child').prepend(
                    ` <div class="chat_block_right_content_item_block--item">
                        ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                        ${data.message}
                    </div>`)
            } else {
                $('.chat_block_right_content[data-chatId="' + data.subject_chat_id + '"] .chat_block_right_content_item--' + type + ':first-child .chat_block_right_content_item_blocks').prepend(`<div class="chat_block_right_content_item_block" data-date="${data.time}">
                        <div class="chat_block_right_content_item_block--item">
                            ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                            ${data.message}
                        </div>
                    </div>`)
            }
        } else {
            $('.chat_block_right_content[data-chatId="' + data.subject_chat_id + '"]').prepend(`<div class="chat_block_right_content_item chat_block_right_content_item--${type}" data-userimagesrc="${data.image}" data-usernameshorts="${data.short_name}">
                    <div class="chat_block_right_content_item_info">
                        <div class="person_block_withName">
                            <div class="person_block_withName_image">
                                ${data.image ? `<img src="${data.image}" class="person_block_withName_image--img" alt="${data.full_name}" />` : data.short_name}
                            </div>
                        </div>
                    </div>
                    <div class="chat_block_right_content_item_blocks">
                        <div class="chat_block_right_content_item_block" data-date="${data.time}">
                            <div class="chat_block_right_content_item_block--item">
                                ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                                ${data.message}
                            </div>
                        </div>
                    </div>
                </div>`)
        }
    } else {
        // console.log(activeConversation)
    }
}

const ChatMessages = (auth_id, messages) => {
    let count = 0
    let messageGroup = {}
    let messageArray = []

    messages.sort((a, b) => {
        return b.id - a.id
    }).map((el, index) => {
        let type = el.auth_id === auth_id ? 'receiver' : 'sender'
        if (index !== 0) {
            if (messages[index - 1].auth_id !== el.auth_id) {
                count = count + 1
            }

            messageGroup = {
                ...messageGroup,
                [count + '___' + type]: messageGroup[count + '___' + type] ? {
                    ...messageGroup[count + '___' + type],
                    [el.time]: messageGroup[count + '___' + type][el.time] ? [...messageGroup[count + '___' + type][el.time], el] : [el]
                } : { [el.time]: [el] }
            }
        } else {
            messageGroup = {
                [count + '___' + type]: {
                    [el.time]: [el]
                }
            }
        }
    })

    Object.keys(messageGroup || {}).map((el, index) => {
        let type = el.split('___')
        let blockArray = []
        let personData = {}
        Object.keys(messageGroup[el] || {}).sort((a, b) => {
            return a - b
        }).map(item => {
            let itemArray = [];
            messageGroup[el][item].map(mess => {
                personData = {
                    full_name: mess.full_name,
                    auth_id: mess.auth_id,
                    id: mess.id,
                    user_id: mess.user_id,
                    subject_chat_id: mess.subject_chat_id,
                    image: mess.image,
                    short_name: mess.short_name
                }
                let filesArray = [];
                (mess.files || []).map(file => {
                    let fileHTML =
                        `
                            <div class="chat_block_right_content_item_block--item-file">
                                <a href='${file.src}' title='${file.name}' download='${file.name}' >
                                    ${['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif'].includes(file.type)
                            ?
                            `
                                            <figure>
                                                <img src='${file.src}' alt='${file.name}'/>
                                                <figcaption>${file.name}</figcaption>
                                            </figure>
                                        `
                            :
                            file.name
                        }
                                </a>
                            </div>
                        `;
                    filesArray.push(fileHTML)
                })

                let itemHTML = `<div class="chat_block_right_content_item_block--item ${mess.forward ? 'chat_block_right_content_item_block--item-forward' : ''}">
                                    ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                                    ${mess.forward ? `${mess.forward.reference_user} tərəfindən ${mess.forward.title}` : `${mess.message || ''}`}
                                </div>`

                itemArray.push(itemHTML)
            })
            let blockHTML = `<div class="chat_block_right_content_item_block" data-date="${item}"> ${itemArray.join('')}</div>`;
            blockArray.push(blockHTML)
        })

        let HTML = `
            <div class="chat_block_right_content_item chat_block_right_content_item--${type[1]}"
             data-userImageSrc="${personData.image}"
             data-userNameShorts="${personData.short_name}">
                <div class="chat_block_right_content_item_info">
                    <div class="person_block_withName">
                        <div class="person_block_withName_image">
                            ${personData.image ? `<img src="${personData.image}" class="person_block_withName_image--img" alt="${personData.full_name}" />` : personData.short_name}
                        </div>
                    </div>
                </div>
                <div class="chat_block_right_content_item_blocks" data-chatID="${personData.subject_chat_id}">
                    ${blockArray.join('')}
                </div>
            </div>`;
        messageArray.push(HTML)
    })
    return messageArray.join('')
}

const NotificationSound = () => {
    const audio = new Audio('http://' + window.location.hostname + '/music/message_beep.mp3')
    audio.play()
}

$(document).on("click", ".select-message", function () {
    let type = "all"
    const site_id = $(this).data('site_id');
    const auth_id = $(this).data('user_id');
    const subject_chat_id = $(this).data('subject_chat_id');
    const subject_id = $(this).data('subject_id');
    const chat_type = $(this).data('type');
    const token = $(this).data('token');
    removeBudget(subject_chat_id, token, subject_chat_id);
    if (chat_type === "personal") {
        type = "personal"
    }
    Conversation(site_id, auth_id, subject_chat_id, subject_id, token, type)
});

const ChatSubjects = (site_id, auth_id, type) => {
    if (!site_id) {
        site_id = 0;
    }
    $.ajax({
        "method": "GET",
        "url": "/admin/site/api/" + site_id + "/chat/" + auth_id + "/" + type,
        success: function (res) {
            $('#dialog').append(Subjects(res.conversation.subjects))
        },
        error: function (error) {
            // console.log(error)
        }
    })
}

const SendMessage = (data) => {
    socket.Send(data)
}

function adminSendMessageFn() {

    const sendMsg = (files) => {
        const message = $('.chat_block_right_footer_controller--input').val();
        SendMessage({
            event: "new_message",
            auth: "staff",
            parent_id: 0,
            subject_id: options[3],
            site_id: options[0],
            auth_id: auth_id,
            subject_chat_id: options[2],
            message: message,
            token: options[4],
            files: files.length ? JSON.stringify(files) : null
        })
        $('.chat_block_right_footer_controller--input').val(" ")
        $('.chat_block_right_footer_fileList').html('')
    }

    if (options.length) {
        if (dt.files.length) {
            var formData = new FormData();
            for (let i = 0; i < dt.files.length; i++) {
                let file = dt.files.item(i)
                formData.append('site_id', options[0])
                formData.append('subject_chat_id', options[2])
                formData.append('token', options[5])
                formData.append('files[]', file)
            }
            $.ajax({
                method: 'POST',
                url: '/admin/site/api/' + options[0] + '/chat/user/upload/file',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (res) {
                    if (res.file.length) {
                        sendMsg(res.file)
                        dt = new DataTransfer();
                    }
                }
            })
        } else {
            sendMsg([])
        }
    }
}

let options = [];

$(document).on("click", ".send_message", function (e) {
    e.preventDefault();

    adminSendMessageFn()
});
$(document).on('keydown', '.chat_block_right_footer_controller--input', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault()
        adminSendMessageFn()
    }
})

const Typing = () => {
    if (options.length) {
        // setTimeout(()=>{
        //     socket.Send({
        //         event: "typing",
        //         auth: "staff",
        //         site_id: options[0],
        //         subject_chat_id: options[2],
        //         subject_id: options[3],
        //         token: options[4]
        //     })
        // },2000)
    }
}

const MessageForm = (subject_chat_id) => {
    return $('.chat_block_right_footer').html(
        '<div id="typing_1_' + subject_chat_id + '"></div> ' +
        '<div class="chat_block_right_footer_fileList"></div>' +
        '<div class="chat_block_right_footer_controller">' +
        '<textarea class="chat_block_right_footer_controller--input" name="" onkeyup="Typing()" placeholder="Type your message here..."></textarea>' +
        '<label class="chat_block_right_footer_controller--fileLabel">' +
        '<input type="file" class="chat_block_right_footer_controller--fileInput" multiple name="file" id="file" />' +
        '</label>' +
        '<button class="customBtn primaryBtn sendBNBN send_message">Send</button>' +
        '</div>'
    )
}

const chat_options = (data) => {
    $('.chat_block_options_item_list').html('').append(
        `<div class="chat_block_options_item_list_item">
        <div class="chat_block_options_item_list_item--description">
            <p><strong>Ad: </strong>${data.full_name}</p>
            <p><strong>${data.citizenship.toUpperCase()}: </strong>${data.pin}</p>
            <p><strong>Telefon: </strong>${data.phone}</p>
            <p><strong>E-mail: </strong>${data.email}</p>
            <p><strong>Site: </strong>${data.site}</p>
            <p><strong>Mövzu: </strong>${data.direction_type}</p>
            <p><strong>İstiqamət: </strong>${data.subject}</p>
            <p><strong>Role: </strong>${data.applicant_role}</p>
        </div>
        </div>
        <div class="chat_block_options_item_list_item">
        <div class="chat_block_options_item_list_item--header subject_chat_id" data-subject_id="${data.subject_id}" data-subject_chat_id="${data.subject_chat_id}">
            Dialog Number:
        </div>
        <div class="chat_block_options_item_list_item--description">
        <a href="/admin/site/${data.site_id}/${data.auth_id}/dialogue/${data.subject_chat_id}/archive" class="customBtn linkBtn smallBtn ">
            ${data.subject_chat_id}
        </a>
        </div>
        </div>
        <div class="chat_block_options_item_list_item">
        <div class="chat_block_options_item_list_item--header">User ID:</div>
        <div class="chat_block_options_item_list_item--description">
        <a href="/admin/site/${data.site_id}/${data.auth_id}/dialogue/archive" class="customBtn linkBtn smallBtn ">
            ${data.auth_id}
        </a>
        </div>
        </div>`)
}

const ChatMessageHead = (auth) => {
    $('.chat_block_right_head').html('').append('<span class="chat_block_right_head_item chatBackButton">' +
        '<i class="chat-icons chat-chevron_left"></i>' +
        '</span>' +
        '<div class="person_block online">' +
        '<div class="person_block_image">' + auth.short_name + '</div>' +
        '</div>' +
        '<div class="chat_block_right_head_item">' +
        '<h5 class="chat_block_right_head--header">' + auth.full_name + '</h5>' +
        '<h5 class="chat_block_right_head--description">' + auth.site + '</h5>' +
        '</div>' +
        '<span class="chat_block_right_head_item chatOptionsOpen">' +
        '<i class="chat-icons chat-dots"></i>' +
        '</span>')
}

const NewForward = () => {
    socket.socket.on("forward_user", (res) => {
        if (res.status) {
            NewSubject(res)
        }
    })
}

const Conversation = (site_id, auth_id, subject_chat_id, subject_id, token, type) => {

    activeConversation = subject_chat_id;

    if (options.length) {
        options = [];
        options.push(site_id, auth_id, subject_chat_id, subject_id, token, type)
    } else {
        options.push(site_id, auth_id, subject_chat_id, subject_id, token, type)
    }

    $.ajax({
        "method": "GET",
        "url": "/admin/site/api/" + site_id + "/chat/" + auth_id + "/" + subject_chat_id + "/" + subject_id + "/" + token + "/" + type + "/conversation",
        success: function (res) {
            if (res.assessment) {
                $('.chat_block_right_footer').html('');
            } else {
                if (res.message_form) {
                    MessageForm(subject_chat_id)
                }
            }

            if (res.auth) {
                chat_options({
                    site_id: res.subject_chat.site_id,
                    subject_id: res.subject_chat.subject_id,
                    auth_id: res.auth.auth_id,
                    full_name: res.auth.full_name,
                    phone: res.auth.phone,
                    site: res.auth.site,
                    citizenship: res.auth.citizenship,
                    pin: res.auth.pin,
                    email: res.auth.email,
                    subject: res.subject_chat.subject,
                    direction_type: res.auth.direction_type,
                    applicant_role: res.auth.applicant_role,
                    subject_chat_id: res.subject_chat.subject_chat_id,
                })
                ChatMessageHead(res.auth)
            }

            if (res.messages) {
                $('.chat_block_right_content')
                    .attr('data-chatId', res.subject_chat.subject_chat_id)
                    .html('').append(ChatMessages(auth_id, res.messages))
            }

        },
        error: function (error) {
            // console.log(error)
        }
    })
}

if (type === "personal") {
    ChatSubjects(site_id, auth_id, type)
} else {
    ChatSubjects(site_id, 0, 'all')
}

NewForward();

var ch_token;
var ch_subject_chat_id;

function removeBudget(id, token, subject_chat_id) {
    ch_token = token;
    ch_subject_chat_id = subject_chat_id;
    $('.chat_block_left_content_item_content_item[data-subject_chat_id=' + id + '] .chat_block_left_content_item_content_item_head--header').removeAttr('data-budget')
    $.ajax({
        "method": "GET",
        "url": "/admin/site/api/read/" + token + "/" + subject_chat_id + "/conversation",
        success: function (res) {
            // console.log(res)
        }
    })
}

$(document).on('focus', '.chat_block_right_footer_controller--input', function (e) {
    removeBudget(options[2], ch_token, ch_subject_chat_id)
})
