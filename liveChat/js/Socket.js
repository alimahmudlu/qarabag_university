/**
 *
 *      SocketChat class ancaq admin panel ucun istiade edilir
 *
 */

class Socket {

    constructor(data) {
        this.site_id = data.site_id;
        this.auth_id = data.auth_id;
        this.check_status = data.check_status;
        this.type = data.type;
        this.socket = io("ws://192.168.178.1/socket");
        // this.socket = io("ws://localhost:3002")
    }

    Send(data) {
        this.socket.emit(data.event, JSON.stringify(data))
    }

    Start(page) {
        // console.log(page)
        this.socket.on('server_connect', (res) => {
            if (res.status) {
                this.Send({
                    auth: "staff",
                    auth_id: this.auth_id,
                    event: "active_user"
                })
            }
        })

        this.socket.on('chat_form', (res) => {
            if (res.event) {
                NewSubject({
                    id: res.subject_chat.id,
                    site_id: res.site_id,
                    user_id: res.operator.user_id,
                    auth_name: res.auth.full_name,
                    short_name: res.auth.short_name,
                    message: res.message,
                    subject_id: res.subject_chat.subject_id,
                    token: res.subject_chat.token,
                    type: page,
                    created_at: res.subject_chat.created_at
                })
                NotificationSound()
            }
        })

        this.socket.on('forward_user_response', (res) => {
            if (res) {
                $("#" + res).remove();
            }
        })

        this.socket.on('feedback', (res) => {
            // console.log(res)
        })

        this.socket.on('new_message', (res) => {
            if (res.event) {
                if (page === "personal") {
                    ChatNewMessage(res)
                    if (res.subject_chat_id && res.auth === "client") {
                        const count = $('.chat_block_left_content_item_content_item[data-user_id=' + res.user_id + '] .chat_block_left_content_item_content_item_head--header').attr('data-budget') || 0;
                        if ($("#" + res.subject_chat_id).remove()) {
                            NewSubject({
                                id: res.subject_chat_id,
                                site_id: res.site_id,
                                user_id: res.user_id,
                                subject_id: res.subject_id,
                                auth_name: res.full_name,
                                message: res.message,
                                viewed_status: res.viewed_status,
                                short_name: res.short_name,
                                token: res.token,
                                type: page,
                                created_at: res.created_at,
                                new_message_count: Number(count) + 1
                            })
                        }
                    }
                    if (res.subject_chat_id && res.message) {
                        $('#end_message_' + res.subject_chat_id).html(res.message);
                    }
                }
                if (res.auth === "client") {
                    NotificationSound()
                }
            }
        })

        this.socket.on('typing', (res) => {
            if (res.event && page === "personal") {

                $('#typing_1_' + res.subject_chat_id).html('').append('<span id="typing_1_' + res.subject_chat_id + '" class="text-muted">typing...</span>')

                setTimeout(function () {
                    $('#typing_1_' + res.subject_chat_id).html('')
                }, 3000)

                $('#typing_2_' + res.subject_chat_id).html('').append('<span id="typing_2_' + res.subject_chat_id + '" class="text-muted">typing...</span>')

                setTimeout(function () {
                    $('#typing_2_' + res.subject_chat_id).html('')
                }, 3000)
            }
        })
    }
}

