const flashdata = $('.flash-data').data('flashdata');

// console.log(flashdata);
// if(flashdata == 'ditambahkan'){
// 	Swal.fire ({
// 		title: 'Data',
// 		text: 'Berhasil '+flashdata,
// 		type: 'success'
// 	});
// } else if(flashdata == 'dihapus') {
// 	Swal.fire ({
// 		title : 'Data',
// 		text : 'Berhasil '+flashdata,
// 		type : 'info'
// 	})
// }

if(flashdata){
	Swal.fire({
		title: 'Data',
		text: 'Berhasil'+flashdata,
		type: 'success'
	});
}

// Untuk tombol hapus
$('.tombol-hapus').on('click', function(e){

	// untuk mematikan aksi default browser
	e.preventDefault();
	const href = $(this).attr('href');

	Swal.fire({
		title: 'Apakah anda yakin',
		text: "Data akan dihapus",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmBttonText: 'Hapus Data!'
	}).then((result) => {
		if(result.value) {
			document.location.href = href;
		}
	})
});