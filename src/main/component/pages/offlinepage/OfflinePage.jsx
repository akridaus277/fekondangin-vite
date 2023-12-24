import React, { useEffect } from 'react'
import './OfflinePage.css'

const OfflinePage = () => {
  useEffect(() => {
    document.title = 'Offline Page';
    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    // Mengakses elemen <body> dan mengatur properti gaya
    const bodyElement = document.body;

    // Ganti properti gaya body saat offline
    bodyElement.style.display = 'flex';
    bodyElement.style.flexDirection = 'column';
    bodyElement.style.justifyContent = 'center';
    bodyElement.style.alignItems = 'center';
    bodyElement.style.height = '100vh';
    bodyElement.style.margin = '0';
    bodyElement.style.overflow = 'hidden';
    bodyElement.style.background = `url('images/icons/tirai.jpg') center/cover no-repeat`;
    bodyElement.style.backdropFilter = 'blur(2px)';

    // Pastikan untuk mengembalikan properti gaya ke nilai awal saat komponen unmount
    return () => {
      bodyElement.style.cssText = '';
    };
  }, []);


  

  const handleReload = () => {

    window.location.reload();
  }
  return (
    <>
    <center>
      <div className="logo-offline" >
        <img style={{justifyContent:'center', justifyItems:'center'}} src="../images/icons/kondangin.png" height="192px" alt="Logo Perusahaan" />
      </div>
    </center>
      <div class="keterangan-offline">
        <p style={{textAlign:'center'}}>Periksa koneksi internet anda!</p>
      </div>
      <div style={{textAlign:'center', justifyContent:'center', justifyItems:'center'}}>
        <button className="reload-button-offline" onClick={() => handleReload()} >Reload Halaman</button>
      </div>
    </>
  )
}

export default OfflinePage