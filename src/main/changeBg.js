document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengganti latar belakang sesuai komponen yang diakses
    function changeBackground(component) {
      let background = "url('../images/icons/tirai.jpg') center/cover no-repeat";
  
      // Tentukan latar belakang berdasarkan komponen
      switch (component) {
        case '':
          background = "none";
          break;

        
        // Tambahkan case lain sesuai dengan komponen yang Anda miliki
  
        default:
          // Tidak ada perubahan jika komponen tidak dikenali
          break;
      }
  
      // Setel properti background pada elemen <style>
      document.getElementById('background-style').innerHTML = `body { background: ${background}; }`;
    }
  
    // Dapatkan komponen yang diakses dari URL
    let currentComponent = window.location.pathname.substring(1); // Ambil path tanpa karakter slash pertama
    changeBackground(currentComponent);
  });
  

  