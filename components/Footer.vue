<template>
  <footer>
    <div class="footer-container">
      <div class="footer-about">
        <h3>Tentang Sekolah</h3>
        <p>Sekolah kami berkomitmen untuk mencetak generasi unggul, berkarakter, dan berprestasi. Selalu mendukung pembelajaran berbasis teknologi dan inovasi.</p>
      </div>
      <div class="footer-links">
        <h3>Link Terkait</h3>
        <ul>
          <li><a href="/profil">Profil Sekolah</a></li>
          <li><a href="/guru">Guru</a></li>
          <li><a href="/ekstrakurikuler">Ekstrakurikuler</a></li>
          <li><a href="/kontak">Kontak Kami</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h3>Kontak</h3>
        <p><strong>Alamat:</strong> Jl. Pendidikan No. 123, Kota Belajar</p>
        <p><strong>Email:</strong> info@sekolahku.sch.id</p>
        <p><strong>Telepon:</strong> +62 812-3456-7890</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Sekolahku. Semua Hak Dilindungi.</p>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-container div {
  flex: 1;
  margin: 10px;
}

.footer-about, .footer-links, .footer-contact {
  min-width: 250px;
}

.footer-about h3, .footer-links h3, .footer-contact h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #f39c12;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 5px 0;
}

.footer-links ul li a {
  color: #ecf0f1;
  text-decoration: none;
}

.footer-links ul li a:hover {
  text-decoration: underline;
  color: #f39c12;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #7f8c8d;
  padding-top: 10px;
  font-size: 0.9em;
}
</style>
