function showPage(id) {
  const pages = document.querySelectorAll('.page');
  const content = document.querySelector('.content');

  // Tambahkan blur jika halaman bukan dashboard
  if (id !== 'dashboard') {
    content.classList.add('blurred');
  } else {
    content.classList.remove('blurred');
  }

  // Ganti halaman dengan delay animasi
  setTimeout(() => {
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }, 100);
}
