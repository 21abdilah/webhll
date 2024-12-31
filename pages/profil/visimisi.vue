<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <!-- Card Container -->
        <div class="card shadow-lg border-0 rounded-4">
          <!-- Header -->
          <div class="card-header bg-primary text-white text-center rounded-top">
            <h3 class="mb-0">VISI & MISI SMKN 4 TASIKMALAYA</h3>
          </div>
          <!-- Body -->
          <div class="card-body p-4">
            <!-- Visi Section -->
            <h4 class="text-primary text-center mb-3">VISI</h4>
            <p class="text-center text-secondary">
              TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, KOMPETITIF, ADAPTIF, DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA
            </p>
            <!-- Misi Section -->
            <h4 class="text-primary text-center mt-4 mb-3">MISI</h4>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item border-0 py-2">
                Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik hardskill maupun softskill.
              </li>
              <li class="list-group-item border-0 py-2">
                Meningkatkan dan mengembangkan aktifitas serta kreatifitas seluruh warga sekolah dalam berbagai kegiatan positif.
              </li>
              <li class="list-group-item border-0 py-2">
                Mewujudkan manajemen pengelolaan yang efektif, efisien, transparan, akuntabel dan layanan prima.
              </li>
              <li class="list-group-item border-0 py-2">
                Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya Manusia yang berdaya saing tinggi melalui berbagai kegiatan akademik maupun non akademik.
              </li>
              <li class="list-group-item border-0 py-2">
                Menyelenggarakan berbagai program kegiatan dalam upaya meningkatkan Sumber Daya Manusia yang mampu menyesuaikan dengan perkembangan.
              </li>
              <li class="list-group-item border-0 py-2">
                Mengembangkan sarana prasarana dan lingkungan sekolah yang menyenangkan sebagai wadah menumbuhkembangkan daya kreasi dan inovasi untuk menghasilkan produk teknologi tepat guna.
              </li>
              <li class="list-group-item border-0 py-2">
                Membangun jiwa wirausaha yang handal melalui pembelajaran Teaching Factory (TEFA) dan Kelas Industri.
              </li>
              <li class="list-group-item border-0 py-2">
                Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia Kerja (IDUKA) serta lembaga lainnya yang relevan.
              </li>
              <li class="list-group-item border-0 py-2">
                Menanamkan dan membudayakan sikap dan perilaku yang baik pada aktivitas di sekolah maupun dalam kehidupan sehari-hari.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
}

.card-header {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}


.text-primary {
  color: #0056b3 !important;
}

.text-secondary {
  color: #6c757d !important;
}

.list-group-item {
  background: transparent;
  font-size: 1rem;
}


@media (max-width: 768px) {
  .card-header {
    font-size: 1.2rem;
  }

  .card-body {
    padding: 1rem;
  }

  ol {
    padding-left: 1rem;
  }
}
</style>
