var feedBackData = {};

class ChatMessage {
    constructor(data) {
        this.site_id = data.site_code;
        this.soketUrl = data.soketUrl || 'livechat.api.edu.az';
        this.url = document.location.origin;
        this.socket = null;
        this.userData = null;
        this.LiveChat(this);
    }

    localGet() {
        return JSON.parse(localStorage.getItem('education_live_chat') || '{}');
    }

    localeRemove() {
        return localStorage.removeItem('education_live_chat');
    }

    localeSet(data) {
        localStorage.setItem('education_live_chat', JSON.stringify({
            site_id: data.site_id,
            auth_id: data.auth.id,
            subject_id: data.subject_chat.subject_id,
            subject_chat_id: data.subject_chat.id,
            token: data.subject_chat.token
        }));
    }

    Messages(subject, messages) {

        const auth_id = this.localGet().auth_id

        let m = " ";

        if (messages.length) {
            messages.forEach((item => {
                let filesArray = [];
                const files = item.files || [];
                (files || []).map(file => {
                    let fileHTML =
                        `<div class="liveChatWidget_container_content_item--message-file">
                            <a href='${file.src}' title='${file.name}' download='${file.name}' >
                                ${['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif'].includes(file.type) ?
                            `<figure>
                                        <img src='${file.src}' alt='${file.name}' />
                                        <figcaption>${file.name}</figcaption>
                                    </figure>`
                            : file.name}
                            </a>
                        </div>`;
                    filesArray.push(fileHTML)
                })
                if (auth_id === item.auth_id) {
                    m += `<div class="liveChatWidget_container_content_item liveChatWidget_container_content_item--receiver" data-date="${item.created_at}" data-read="${item.delivered}">
                            <div class="liveChatWidget_container_content_item--message">
                                ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                                ${item.message}
                            </div>
                        </div>`

                } else {
                    m += `<div class="liveChatWidget_container_content_item liveChatWidget_container_content_item--sender" data-date="${item.created_at}" data-read="${item.delivered}">
                            <div class="liveChatWidget_container_content_item--message">
                                ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                                ${item.message}
                            </div>
                        </div>`
                }
            }));
        }

        return m ? m : '<p class="text-center text-muted">No message</p>';
    }

    SendMessage() {
        const options = chat.localGet()

        if (Object.keys(options).length > 0) {

            const Send = (files) => {
                const message = chat.InputValue('message');
                chat.SocketSend({
                    event: "new_message",
                    auth: "client",
                    site_id: options.site_id,
                    auth_id: options.auth_id,
                    subject_id: options.subject_id,
                    subject_chat_id: options.subject_chat_id,
                    token: options.token,
                    parent_id: 0,
                    message: message,
                    files: files.length ? JSON.stringify(files) : null
                })
                dts = new DataTransfer();
                $('.liveChatWidget_container_footer_fileList').html('')
                document.getElementById('message').value = ''
            }

            if (dts.files.length) {

                var formData = new FormData();

                for (let i = 0; i < dts.files.length; i++) {
                    let file = dts.files.item(i)
                    //  formData.append('site_id', options.site_id)
                    //   formData.append('subject_chat_id', options.subject_chat_id)
                    //   formData.append('token', options.token)
                    formData.append('files[]', file)
                }

                if (formData) {
                    $.ajax({
                        method: 'POST',
                        ///file gondermek
                        // url: 'https://livechat.api.edu.az/api/' + options.site_id + '/' + options.auth_id + '/' + options.token + '/upload/file',
                        url: 'https://livechat.api.edu.az/api/upload',
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: formData,
                        success: function (res) {
                            if (res.length) {
                                Send(res)
                            }
                        },
                        error: function (error) {
                            console.log(error)
                        }
                    })
                }
            } else {
                Send([])
            }
        }
    }

    ReadMessage() {
        const options = chat.localGet()
        if (Object.keys(options).length > 0) {
            chat.SocketSend({
                event: "read_message",
                auth: "client",
                auth_id: options.auth_id,
                subject_chat_id: options.subject_chat_id,
                token: options.token
            })
        }
    }

    Typing() {
        const options = this.localGet()
        if (Object.keys(options).length > 0) {
            // chat.SocketSend({
            //     event: "typing",
            //     auth: "client",
            //     site_id: options.site_id,
            //     auth_id: options.auth_id,
            //     subject_id: options.subject_id,
            //     subject_chat_id: options.subject_chat_id,
            //     token: options.token
            // })
        }
    }


    Header(data) {
        return `<div class="liveChatWidget_container_head">
                <div class="liveChatWidget_user liveChatWidget_user--online">
                    <div class="liveChatWidget_user_head">
                        <div class="liveChatWidget_user_head_image">
                            <img src="${data.site.image}" class="liveChatWidget_user_head_image--img" alt="${data.site.short_name}" />
                            <span class="liveChatWidget_user_head_image--name">${data.site.short_name}</span>
                        </div>
                    </div>
                    <div class="liveChatWidget_user_content">
                        <div class="liveChatWidget_user_content--name" ${data.new_message_count ? `data-budget="${data.new_message_count}"` : ''}>${data.site.name}</div>
                    </div>
                </div>
                <div class="liveChatWidget_container_head_operations">
                    <span class="liveChatWidget_container_head_operations--toggle">
                        <i class="liveChatWidget-icons liveChatWidget-times"></i>
                    </span>
                    <span class="liveChatWidget_container_head_operations--sound">
                        <i class="liveChatWidget-icons liveChatWidget-sound"></i>
                        <i class="liveChatWidget-icons liveChatWidget-times"></i>
                    </span>
                </div>
            </div>`
    }

    Footer(data) {
        return `
            <div class="liveChatWidget_container_footer">
                ${!!data.assessment_status ?
                `<div class="liveChatWidget_container_footer_evaluation">
                            <label class="liveChatWidget_container_footer_evaluation_item">
                                <input type="radio" name="evaluation" id="evaluation_1" value="1">
                                <span>1</span>
                            </label>
                            <label class="liveChatWidget_container_footer_evaluation_item">
                                <input type="radio" name="evaluation" id="evaluation_2" value="2">
                                <span>2</span>
                            </label>
                            <label class="liveChatWidget_container_footer_evaluation_item">
                                <input type="radio" name="evaluation" id="evaluation_3" value="3">
                                <span>3</span>
                            </label>
                            <label class="liveChatWidget_container_footer_evaluation_item">
                                <input type="radio" name="evaluation" id="evaluation_4" value="4">
                                <span>4</span>
                            </label>
                            <label class="liveChatWidget_container_footer_evaluation_item">
                                <input type="radio" name="evaluation" id="evaluation_5" value="5">
                                <span>5</span>
                            </label>
                        </div>`
                :
                `<div class="liveChatWidget_container_footer_fileList"></div>
                        <div class="liveChatWidget_container_footer_controller">
                            <textarea class="liveChatWidget_container_footer_controller--input"
                            name="message" id="message"
                            placeholder="Type your message here..."></textarea>
                            <button type="button" onclick="chat.SendMessage()" class="liveChatWidget_container_footer_controller--btn">
                                <i class="liveChatWidget-icons liveChatWidget-send"></i>
                            </button>
                            <label class="liveChatWidget_container_footer_controller--fileLabel">
                                <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg,.pdf"
                                class="liveChatWidget_container_footer_controller--fileInput"
                                multiple=""
                                name="liveChatWidget--file"
                                id="liveChatWidget--file"/>
                            </label>
                        </div>
                    `
            }
            </div>`
    }

    ChatFormSelection(data) {
        if (data.name) {
            $("#name").attr('type', 'email')
        } else {
            $("#name").val('Anonim müraciətçi')
            $("#name").attr('hidden', true)
        }

        if (data.pin) {
            $("#pin").attr('type', 'email')
        } else {
            $("#pin").val('1AAAAAA')
            $("#pin").attr('hidden', true)
        }

        if (data.phone) {
            $("#phone").attr('type', 'email')
        } else {
            $("#phone").val('+994100000001')
            $("#phone").attr('hidden', true)
        }

        if (data.email) {
            $("#email").attr('type', 'email')
        } else {
            $("#email").val('sdsd@ail.ru')
            $("#email").attr('hidden', true)
        }

        if (data.subject) {
            // $("#subject_id").val('sdsd@ail.ru')
        } else {
            $("#subject_id option:last-child").prop('selected', true)
            $("#subject_id").attr('hidden', true)
        }

        if (data.role) {
            // $("#role_id").val(2)
        } else {
            $("#role_id option:last-child").prop('selected', true)
            $("#role_id").attr('hidden', true)
        }
    }

    RegisterForm(data, zz = false, invalid = false) {
        var bot_message = 'Salam! Canlı söhbətə qoşulmaq üçün məlumatları qeyd etməyiniz xahiş olunur.'
        if (data.information.status) {
            bot_message = data.information.message;
        }

        const register_form = `
                 <form class="liveChatWidget_container_content_startForm">
                   <!-- <div class="liveChatWidget_container_content_startForm--header">
                        Online söhbətə xoş gəlmisiniz!
                    </div>-->
                    <div class="liveChatWidget_container_content_startForm--description">
                        ${bot_message}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.name ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                            Ad, soyad, ata adı
                        </div>
                        <input type="text" ${(chat.userData || {}).name ? 'disabled' : ''} value="${(chat.userData || {}).name || invalid && data.old.name || ''}" class="liveChatWidget--input" placeholder="Ad, soyad, ata adı" name="name" id="name" />
                        ${invalid && data.validation.name ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.citizenship ? 'liveChatWidget--input-error' : ''}"">
                        <select class="liveChatWidget--input" name="citizenship" id="citizenship" ${(chat.userData || {}).citizenship ? 'disabled' : ''} required>
                            <option value="" selected disabled readonly>Sənəd növü</option>
                            <option ${(chat.userData || {}).citizenship == 'fin' || invalid && data.old.citizenship == 'fin' ? 'selected' : ''} value='fin'>FİN</option>
                            <option ${(chat.userData || {}).citizenship == 'myi' || invalid && data.old.citizenship == 'myi' ? 'selected' : ''} value='myi'>MYİ</option>
                            <option ${(chat.userData || {}).citizenship == 'dyi' || invalid && data.old.citizenship == 'dyi' ? 'selected' : ''} value='dyi'>DYİ</option>
                        </select>
                        ${invalid && data.validation.citizenship ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.pin ? 'liveChatWidget--input-error' : ''}">
                        <div class="liveChatWidget--label">
                            Fin
                        </div>
                        <input class="liveChatWidget--input" ${(chat.userData || {}).pin ? 'disabled' : ''} value="${(chat.userData || {}).pin || invalid && data.old.pin || ''}" placeholder="Fin" name="pin" id="pin" type="text" />
                        ${invalid && data.validation.pin ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.birthday ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                           Doğum tarixi
                        </div>
                        <input class="liveChatWidget--input" ${(chat.userData || {}).birthday ? 'disabled' : ''} value="${(chat.userData || {}).birthday || invalid && data.old.birthday || ''}" placeholder="Doğum tarixi" name="birthday" id="birthday" type="date" />
                        ${invalid && data.validation.birthday ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.phone ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                           Əlaqə nömrəsi
                        </div>
                        <input class="liveChatWidget--input" ${(chat.userData || {}).phone ? 'disabled' : ''} value="${(chat.userData || {}).phone || invalid && data.old.phone || ''}" placeholder="Əlaqə nömrəsi" name="phone" id="phone" type="tel" />
                        ${invalid && data.validation.phone ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>                    
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.email ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                            Email
                        </div>
                        <input class="liveChatWidget--input" ${(chat.userData || {}).email ? 'disabled' : ''} value="${(chat.userData || {}).email || invalid && data.old.email || ''}" placeholder="Email" name="email" id="email" type="email" />
                        ${invalid && data.validation.email ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.applicant_type_id ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                            Müraciət edən şəxs:
                        </div>
                        <select class="liveChatWidget--input" name="role_id" id="role_id" required>
                            <option value="" selected disabled readonly>Müraciət edən şəxs</option>
                            ${(data.roles || []).map((item => `<option ${invalid && data.old.role_id == item.id ? 'selected' : ''} value='${item.id}'>${item.name}</option>`)).join(' ')}
                        </select>
                        ${invalid && data.validation.role_id ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.subject_id ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                            İstiqamət:
                        </div>
                        <select class="liveChatWidget--input" name="direction_type_id" id="direction_type_id" required>
                            <option value="" selected disabled readonly>İstiqamət</option>
                            ${(data.types || []).map((item => `<option ${invalid && data.old.direction_type_id == item.id ? 'selected' : ''} value='${item.id}'>${item.name}</option>`)).join(' ')}
                        </select>
                        ${invalid && data.validation.direction_type_id ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>

                    <div class="liveChatWidget_container_content_startForm_formGroup ${invalid && data.validation.subject_id ? 'liveChatWidget--input-error' : ''}"">
                        <div class="liveChatWidget--label">
                            Mövzu:
                        </div>
                        <select class="liveChatWidget--input" name="subject_id" id="subject_id" required>
                            <option value="" selected disabled readonly>Mövzu</option>
                            ${(data.subjects || []).map((item => `<option ${invalid && data.old.subject_id == item.id ? 'selected' : ''} value='${item.id}'>${item.title}</option>`)).join(' ')}
                        </select>
                        ${invalid && data.validation.subject_id ? `<span class="liveChatWidget--error">Xananı düzgün doldurun</span>` : ''}
                    </div>
                    <button type="button" class="liveChatWidget--primaryBtn" onclick="chat.ChatRegister()">
                        Başla
                    </button>
                </form>`
        if (data.status && data.information.status) {
            return ` <div class="liveChatWidget liveChatWidget--start liveChatWidget--mute">
                <span class="liveChatWidget--toggleBtn">
                     <i class="liveChatWidget-icons liveChatWidget-type"></i>
                </span>
                <div class="liveChatWidget_container">
                    ${this.Header(data)}
<!--                    <div class="liveChatWidget_container_content">-->
                       ${register_form}
<!--                    </div>-->
                   ${this.Footer(data)}
                </div>
                </div>`
        } else {

            if (data.invalid_type === 'INVALID_VALIDATION') {
                return ` <div class="liveChatWidget liveChatWidget--start liveChatWidget--mute">
                <span class="liveChatWidget--toggleBtn">
                     <i class="liveChatWidget-icons liveChatWidget-type"></i>
                </span>
                <div class="liveChatWidget_container">
                    ${this.Header(data)}
                       ${register_form}
                   ${this.Footer(data)}
                </div>
                </div>`
            } else if (data.invalid_type === 'INVALID_OPERATOR') {
                return ` <div class="liveChatWidget liveChatWidget--start liveChatWidget--mute">
                <span class="liveChatWidget--toggleBtn">
                     <i class="liveChatWidget-icons liveChatWidget-type"></i>
                </span>
                <div class="liveChatWidget_container">
                    ${this.Header(data)}
                        <div class="liveChatWidget--start liveChatWidget_container_content_startForm">
                            Operator yoxdur
                        </div>
                   ${this.Footer(data)}
                </div>
                </div>`
            } else if (data.invalid_type === 'INVALID_SITE') {
                console.log('sayt baglidir');
                return null
            } else {
                return ` <div class="liveChatWidget liveChatWidget--start liveChatWidget--mute active">
                <span class="liveChatWidget--toggleBtn">
                     <i class="liveChatWidget-icons liveChatWidget-type"></i>
                </span>
                <div class="liveChatWidget_container">
                    ${this.Header(data)}
                       ${register_form}
                   ${this.Footer(data)}
                </div>
                </div>`
            }
        }
    }

    MessageForm(data) {
        var bot_message = '';

        const subject = `<h5 class="border-bottom pb-3">
                             ${data.subject_chat.title}
                         </h5>
                         <p>${bot_message}</p>
        `;

        if (data.information.status) {
            bot_message = `<p>${data.information.message}</p>`
        }

        return `
            <div class="liveChatWidget ${data.assessment_status ? 'liveChatWidget--final' : ''} liveChatWidget--mute">
                <span class="liveChatWidget--toggleBtn" ${data.new_message_count ? `data-budget="${data.new_message_count}"` : ''}>
                    <i class="liveChatWidget-icons liveChatWidget-type"></i>
                </span>
                <div class="liveChatWidget_container">
                    ${this.Header(data)}
                        <div class="liveChatWidget_container_content_items">
                            ${chat.Messages(subject, data.messages)}
                        </div>
                   ${this.Footer(data)}
                </div>
            </div>
        `
    }

    SendFeedback() {
        const options = this.localGet()
        if (Object.keys(options).length > 0) {
            const evaluated = $('[name=evaluation]:checked').val()
            const comment = ""
            chat.SocketSend({
                event: "feedback",
                auth: "client",
                site_id: options.site_id,
                auth_id: options.auth_id,
                subject_id: options.subject_id,
                subject_chat_id: options.subject_chat_id,
                token: options.token,
                evaluated: evaluated,
                comment: comment
            })
        }
    }

    validate(name, document_type, pin, phone, email, subject_id, birthday, direction_type_id, role_id) {
        let valid = true;
        if (!name || name.trim('').length < 5) {
            $('.liveChatWidget--input[name=name]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=name]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=name]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=name]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=name]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!document_type || document_type.trim('').length < 2) {
            $('.liveChatWidget--input[name=citizenship]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=citizenship]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=citizenship]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!pin || pin.trim('') == '' || (document_type == 'fin' ? pin.length != 7 : (['myi', 'dyi'].includes(document_type) ? ![6, 7].includes(pin.length) : true))) {
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=pin]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }
        if (!birthday) {
            $('.liveChatWidget--input[name=birthday]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=birthday]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=birthday]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=birthday]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=birthday]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!phone || phone.trim('').match(/\d/g).length < 10) {
            $('.liveChatWidget--input[name=phone]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=phone]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=phone]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=phone]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=phone]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!email || email.trim('') == '' || !(email.trim('').match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
            $('.liveChatWidget--input[name=email]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=email]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=email]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=email]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=email]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!subject_id || subject_id.trim('') == '') {
            $('.liveChatWidget--input[name=subject_id]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=subject_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=subject_id]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=subject_id]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=subject_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!role_id || role_id.trim('') == '') {
            $('.liveChatWidget--input[name=role_id]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=role_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=role_id]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=role_id]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=role_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }

        if (!direction_type_id || direction_type_id.trim('') == '') {
            $('.liveChatWidget--input[name=direction_type_id]').closest('.liveChatWidget_container_content_startForm_formGroup').addClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=direction_type_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
            $('.liveChatWidget--input[name=direction_type_id]').closest('.liveChatWidget_container_content_startForm_formGroup').append(`
                <span class="liveChatWidget--error">Xananı düzgün doldurun</span>
            `)
            valid = false;
        } else {
            $('.liveChatWidget--input[name=direction_type_id]').closest('.liveChatWidget_container_content_startForm_formGroup').removeClass('liveChatWidget--input-error')
            $('.liveChatWidget--input[name=direction_type_id]').closest('.liveChatWidget_container_content_startForm_formGroup').find('.liveChatWidget--error').remove()
        }
        return valid;
    }

    ChatRegister() {
        const name = chat.InputValue('name');
        const document_type = chat.InputValue('citizenship');
        const pin = chat.InputValue('pin');
        const birthday = chat.InputValue('birthday');
        const phone = chat.InputValue('phone');
        const email = chat.InputValue('email');
        const direction_type_id = chat.InputValue('direction_type_id');
        const subject_id = chat.InputValue('subject_id');
        const role_id = chat.InputValue('role_id');
        chat.userData = { name, document_type, pin, phone, email };

        if (chat.validate(name, document_type, pin, phone, email, subject_id, birthday, direction_type_id, role_id)) {
            postApi('chatRegister', {
                check_status: true,
                site_id: chat.site_id,
                name: name,
                birthday: birthday,
                pin: pin,
                citizenship: document_type,
                phone: phone,
                email: email,
                subject_id: subject_id,
                direction_type_id: direction_type_id,
                role_id: role_id
            }, (data) => {
                if (data.status) {
                    chat.onChatForm(data);
                } else {
                    ///??????
                }
            });
        }
    }

    NotificationSound() {
        const audio = new Audio('http://' + window.location.hostname + '/music/message_beep.mp3')
        audio.play()
    }

    InputValue(id) {
        return document.getElementById(id).value
    }

    InnerHtml(id, data) {
        document.getElementById(id).innerHTML = data;
    }

    RemoveElement(id) {
        let element = document.getElementById(id);
        if (typeof element === "object" && element !== null) {
            element.remove()
        }
    }

    AppendHtml(name, data) {
        document.getElementsByClassName(name).innerHTML += data;
    }

    ChatClose() {
        chat.InnerHtml('education_live_chat', chat.Feedback())
    }

    SocketSend(data) {
        this.socket.emit(data.event, JSON.stringify(data))
    };

    NewChat() {
        if (feedBackData) {
            chat.localeRemove()
            $('#education_live_chat').html('')
            chat.InnerHtml('education_live_chat',
                chat.RegisterForm(feedBackData)
            )
            $('.liveChatWidget').addClass('active')
        }
    }

    cookie_ch() {
        return navigator.cookieEnabled;
    }



    LogOut() {
        if (!!chat.socket) {
            chat.socket.disconnect();
            chat.socket = null;
        }
        chat.userData = null;
        chat.localeRemove();
        $('.liveChatWidget').removeClass('active');
    }

    LogIn(userData) {
        if (!!chat.socket) {
            chat.socket.disconnect();
            chat.socket = null;
        }
        chat.userData = userData;
        chat.localeRemove();
        $('.liveChatWidget').removeClass('active');
    }

    LiveChat(chat) {
        chat.InnerHtml('education_live_chat',
            `<div class="liveChatWidget liveChatWidget--start liveChatWidget--mute">
            <span class="liveChatWidget--toggleBtn">
                <i class="liveChatWidget-icons liveChatWidget-type"></i>
            </span>
        </div>`);
        $(document).on('click', '.liveChatWidget--toggleBtn, .liveChatWidget_container_head_operations--toggle', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(".liveChatWidget").hasClass("active")) {
                if (chat.socket) {
                    chat.socket.disconnect();
                    chat.socket = null;
                }
            } else {
                chat.openChat();
            }
            $('.liveChatWidget').toggleClass('active')
        })

    }


    openChat() {
        const options = this.localGet();
        let postData = null;
        if (Object.keys(options).length > 0) {
            postData = {
                check_status: true,
                site_id: options.site_id,
                url: this.url,
                auth_id: options.auth_id,
                user_id: options.user_id,
                subject_id: options.subject_id,
                subject_chat_id: options.subject_chat_id,
                token: options.token,
                auth: 'client'
            };
        } else {
            postData = {
                check_status: false,
                site_id: chat.site_id ?? false,
                url: chat.url ?? false,
                auth: 'client'
            }
        }
        postApi('checkChatData', postData, (data) => {
            if (data.status) {
                switch (data.event) {
                    case 'chat_form': chat.onChatForm(data); break;
                    default: chat.onChatRegister(data); break;
                }
            } else {
                ///??????
            }
        })
    }

    onChatRegister(res) {
        if (res.status) {
            chat.InnerHtml('education_live_chat',
                chat.RegisterForm(res)
            )
            chat.ChatFormSelection(res.form)
        } else {
            if (res.invalid_type) {
                chat.InnerHtml('education_live_chat',
                    chat.RegisterForm({ ...res, validation: res.validation ? res.validation : {}, old: res.old ? res.old : {} }, false, true)
                )
                chat.ChatFormSelection(res.form)
                $('.liveChatWidget').addClass('active')
            } else {
                console.log(res)
            }
        }
    }

    onChatForm(res) {
        chat.socket = io(`https://${chat.soketUrl}`, { query: "subject_chat_id=" + res.subject_chat_id });
        ///????auth_id
        chat.connectSocket();
        if (res.status) {
            if (chat.localGet.token !== res.subject_chat.token) {
                chat.localeSet(res)
            }

            chat.InnerHtml('education_live_chat',
                chat.MessageForm(res)
            )

            $('.liveChatWidget').addClass('active')

        } else {
            chat.InnerHtml('education_live_chat',
                '<p>chat aktiv deyil</p>'
            )
        }
    }

    connectSocket() {
        if (chat.cookie_ch()) {
            this.socket.on('new_message', (r) => {
                if (r && r.status) {
                    if (r.auth === "staff") {
                        const count = $('.liveChatWidget_user_content--name').attr('data-budget') || 0
                        $('.liveChatWidget_user_content--name').attr('data-budget', Number(count) + 1)
                        $('.liveChatWidget--toggleBtn').attr('data-budget', Number(count) + 1)
                    }

                    /**
                     *  Burada yeni socket yaratma connection problemi yarana bilir.
                     *  Səbəbə isə hərhansısa js xətasıdır. Məsələr: Olmayan bir dəyişkəndən istifadə etmək;
                     */
                    let filesArray = [];
                    const files = r.files ? JSON.parse(r.files) : [];
                    (files || []).map(file => {
                        let fileHTML =
                            `
                            <div class="liveChatWidget_container_content_item--message-file">
                                <a href='${file.src}' title='${file.name}' download='${file.name}' >
                                    ${['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif'].includes(file.type)
                                ?
                                `
                                        <figure>
                                            <img src='${file.src}' alt='${file.name}'/>
                                            <figcaption>${file.name}</figcaption>
                                        </figure>` : file.name
                            }
                                </a>
                            </div>
                        `;
                        filesArray.push(fileHTML)
                    })

                    $(".liveChatWidget_container_content_items").prepend(`
                             <div class="liveChatWidget_container_content_item liveChatWidget_container_content_item--${r.auth === "client" ? 'receiver' : 'sender'}" data-date="${r.created_at}" data-read="${r.delivered}">
                                <div class="liveChatWidget_container_content_item--message">
                                    ${filesArray.length ? `<div class="chat_block_right_content_item_block--item-files">${filesArray.join('')}</div>` : ''}
                                    ${r.message}
                                </div>
                            </div>
                        `)

                    if (r.auth === "client") {
                        document.getElementById('message').value = ''
                    }
                }
            })

            this.socket.on('feedback', (res) => {

                if (res.status) {
                    feedBackData = res
                    // language=HTML
                    $('.liveChatWidget_container_footer_evaluation').html(
                        `
                            <button type="button" class="liveChatWidget--primaryBtn" onclick="chat.NewChat()">
                                Yeni söhbətə Başla
                            </button>
                        `
                    )
                    // chat.InnerHtml('education_live_chat',
                    //     '<p class="alert-info">Feedback success :) Thank you</p>'
                    // )
                }
            })

            this.socket.on('end_chat', (res) => {
                if (res.status) {
                    $('.liveChatWidget').addClass('liveChatWidget--final');
                    $('.liveChatWidget_container_footer').remove()
                    $('.liveChatWidget_container').append(
                        `
                        ${this.Footer({ assessment_status: true })}
                   `);


                } else {
                    $('.liveChatWidget').removeClass('liveChatWidget--final')
                }
            })

            this.socket.on('typing', (res) => {
                if (res.event) {
                    chat.InnerHtml('ty_ping',
                        '<span id="typing" class="text-muted">typing...</span>'
                    )

                    setTimeout(() => {
                        chat.RemoveElement('typing')
                    }, 3000)
                }
            })

            $(document).on('change', '[name=evaluation]', function () {
                chat.SendFeedback()
            })

        } else {
            document.getElementById('education_live_chat').innerText = "Please do cookies settings active for chat"
        }
    }
}

function removeBudget() {
    $('.liveChatWidget_user_content--name').removeAttr('data-budget')
    $('.liveChatWidget--toggleBtn').removeAttr('data-budget')
    chat.ReadMessage();
}

$(document).on('focus', '.liveChatWidget_container_footer_controller--input', function (e) {
    removeBudget()
})
$(document).on('click', '.liveChatWidget--toggleBtn', function (e) {
    if (chat.socket) {
        removeBudget()
    }
})


function postApi(url, data, callback) {

    $.ajax({
        method: 'POST',
        url: 'https://livechat.api.edu.az/api/' + url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (res) {
            callback(res)
        },
        error: function (error) {
            callback(false)
        }
    })
}

