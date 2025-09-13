document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const message = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        // Ambil nilai dari input
        const nama = document.getElementById('nama').value;
        const handphone = document.getElementById('handphone').value;
        const alamat = document.getElementById('alamat').value;

        // Validasi sederhana
        if (nama && handphone && alamat) {
            // Log data ke konsol
            console.log('Formulir berhasil dikirim!');
            console.log('Nama:', nama);
            console.log('Nomor Handphone:', handphone);
            console.log('Alamat:', alamat);

            // Tampilkan pesan sukses ke pengguna
            message.textContent = 'Terima kasih, data Anda telah kami terima!';
            message.style.color = 'green';
            contactForm.reset(); // Reset form
        } else {
            // Tampilkan pesan error
            message.textContent = 'Silakan isi semua kolom yang wajib diisi.';
            message.style.color = 'red';
        }
    });
});

// kontak
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzLhKneSmfSTDvtvlYno2Tbt7jGx4yClKhaQdLEJ2JTjRr7RuJhwz78CLQQLSG9dvZjOA/exec'
        const form = document.forms['kontak-pesan'];
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const myAlert = document.querySelector('.my-alert');
      
        form.addEventListener('submit', e => {
            e.preventDefault()
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                btnLoading.classList.toggle('d-none');
                btnKirim.classList.toggle('d-none');
                myAlert.classList.toggle('d-none');
                form.reset();
                console.log('Success!', response)
            })
              .catch(error => console.error('Error!', error.message))
          })