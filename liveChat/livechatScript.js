
$(document).on('click', '.liveChatWidget_container_head_operations--sound', function (e) {
	e.preventDefault();
	e.stopPropagation();

	$(this).toggleClass('mute')
})

$(document).on('keydown', '.liveChatWidget_container_footer_controller--input', function (e) {
	if (e.keyCode == 13) {
		e.preventDefault()
		chat.SendMessage()
	}
});

let dts = new DataTransfer();

$(document).on('change', '.liveChatWidget_container_footer_controller--fileInput', function (e) {
	for (let i = 0; i < this.files.length; i++) {
		if (((this.files.item(i).size / 1024) / 1024).toFixed(2) <= 3) {
			let html = `<div class="liveChatWidget_container_footer_fileList_item"><span class="liveChatWidget_container_footer_fileList_item--delete"><i class="liveChatWidget-icons liveChatWidget-times"></i></span><span class="liveChatWidget_container_footer_fileList_item--icon"><i class="chat-icons chat-file"></i></span><span class="liveChatWidget_container_footer_fileList_item--name">${this.files.item(i).name}</span></div>`;
			$(".liveChatWidget_container_footer_fileList").append(html);
		}
		else {
			// console.log('hecm xetasi')
		}
	}
	for (let file of this.files) {
		if (((file.size / 1024) / 1024).toFixed(2) <= 3) {
			dts.items.add(file);
		}
		else {
			alert('Fayl həcmi 2 mb dan çox ola bilməz')
		}
	}
	this.files = dts.files;

	$('span.liveChatWidget_container_footer_fileList_item--delete').click(function () {
		let name = $(this).parents('.liveChatWidget_container_footer_fileList_item').find('.liveChatWidget_container_footer_fileList_item--name').text();
		$(this).parent().remove();
		if ($(this).parents('.liveChatWidget_container_footer_fileList_item').length == 0) {
			$(this).parents('.liveChatWidget_container_footer_fileList').html()
		}
		for (let i = 0; i < dts.items.length; i++) {
			if (name === dts.items[i].getAsFile().name) {
				dts.items.remove(i);
				continue;
			}
		}
		document.getElementById('liveChatWidget--file').files = dts.files;
	});
})


/*$(document).on('keyup', '.liveChatWidget--input:not(select)', function() {
	const name = chat.InputValue('name');
	const document_type = chat.InputValue('citizenship');
	const pin = chat.InputValue('pin');
	const phone = chat.InputValue('phone');
	const email = chat.InputValue('email');
	const subject_id = chat.InputValue('subject_id');
	const role_id = chat.InputValue('role_id');

	chat.validate(name, document_type, pin, phone, email, subject_id, role_id)
})
$(document).on('change', '.liveChatWidget--input:not(input)', function() {
	const name = chat.InputValue('name');
	const document_type = chat.InputValue('citizenship');
	const pin = chat.InputValue('pin');
	const phone = chat.InputValue('phone');
	const email = chat.InputValue('email');
	const subject_id = chat.InputValue('subject_id');
	const role_id = chat.InputValue('role_id');

	chat.validate(name, document_type, pin, phone, email, subject_id, role_id)
})*/
