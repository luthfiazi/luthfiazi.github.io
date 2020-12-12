// event pada saat link di klik
$('.page-scroll').on('click',function (e){


	// ambil isi href
	var tujuan = $(this).attr('href');
	// menangkap elemen yg dituju
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html,body').animate({

		scrollTop: elemenTujuan.offset().top - 45
	
	},1250,'swing');

	e.preventDefault();
});
