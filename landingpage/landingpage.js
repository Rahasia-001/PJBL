// -- MULAI KODE FILTER KATEGORI --

const filterButtons = document.querySelectorAll('.filter-btn');
// ✅ PERBAIKAN UTAMA: Targetkan semua tag <article> yang punya atribut data-category
const articleCards = document.querySelectorAll('article[data-category]'); 

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // 1. Kelola Class Aktif pada Tombol
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // 2. Ambil Kategori yang Dipilih
    const filterValue = button.getAttribute('data-filter');
    
    // 3. Loop dan Filter Artikel
    articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || filterValue === cardCategory) {
            // Tampilkan artikel
            card.style.display = 'block'; 
        } else {
            // Sembunyikan artikel
            card.style.display = 'none';
        }
    });
  });
});

// -- SELESAI KODE FILTER KATEGORI --