<template>
  <div class="container-fluid">
    <!-- Sambutan Kepala Sekolah -->
    <div class="sambutan-kepala-sekolah mb-5 text-center">
      <div class="row align-items-center">
        <div class="col-md-3 mb-3 mb-md-0">
          <img
            src="~/assets/img/kepsek.jpeg"
            alt="Kepala Sekolah"
            class="img-fluid rounded-circle animate-img"
          />
        </div>
        <div class="col-md-9">
          <h3 class="text-primary">Sambutan Kepala Sekolah</h3>
          <p class="lead text-muted">
            Assalamualaikum Warahmatullahi Wabarakatuh, Selamat datang di SMKN 4 Tasikmalaya. Kami berharap dengan website ini, pengunjung dapat mengenal lebih jauh sekolah kami dan mempererat silaturahmi untuk kemajuan bersama.
          </p>
          <p class="font-weight-bold text-dark">
            Kepala Sekolah: <span class="text-success">Kurniawan Spd.mpd</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Statistik -->
    <div class="row text-center mb-5">
      <div class="col-md-4">
        <div class="statistic-card p-4 shadow-sm">
          <i class="fa fa-users fa-2x text-primary mb-3"></i>
          <h3 class="text-primary">Jumlah Siswa</h3>
          <p class="display-4 text-success">{{ statistics.students }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="statistic-card p-4 shadow-sm">
          <i class="fa fa-chalkboard-teacher fa-2x text-primary mb-3"></i>
          <h3 class="text-primary">Jumlah Guru</h3>
          <p class="display-4 text-success">{{ statistics.teachers }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="statistic-card p-4 shadow-sm">
          <i class="fa fa-users fa-2x text-primary mb-3"></i>
          <h3 class="text-primary">Jumlah Jurusan</h3>
          <p class="display-4 text-success">{{ statistics.jurusan }}</p>
        </div>
      </div>
    </div>

    <!-- Program Studi Kompetensi Keahlian -->
    <h2 class="text-center mb-4">Program Studi Kompetensi Keahlian</h2>
    <div class="row text-center mb-5">
      <div class="col-md-3" v-for="(program, index) in programs" :key="index">
        <div class="card shadow-sm hover-effect">
          <img :src="program.imageUrl" class="card-img-top" :alt="program.title" />
          <div class="card-body">
            <h5 class="card-title">{{ program.title }}</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Penerimaan Peserta Didik Baru -->
    <h2 class="text-center mb-4">Penerimaan Peserta Didik Baru 2025-2026</h2>
    <div class="row align-items-center">
      <div class="col-md-6 text-center">
        <div class="contact-box p-4 shadow-sm">
          <h4>Tanya Langsung</h4>
          <p>Hubungi kami langsung di KONTAK KAMI</p>
          <a href="tel:+6281234567890" class="btn btn-primary">Hubungi Sekarang</a>
        </div>
      </div>
      <div class="col-md-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.638940828823!2d106.8455998!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9f6791f7b%3A0x80f5d2d2b1d9776d!2sSMK%20Telkom%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
          width="100%"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          title: "Teknik Sepeda Motor",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Teknik Otomasi Industri",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Teknik Komputer Jaringan",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          title: "Rekayasa Perangkat Lunak",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      statistics: {
        students: 1500,
        teachers: 80,
        jurusan: 5,
      }
    };
  }
};
</script>

<style scoped>
.container-fluid {
  padding-top: 20px;
}

/* Sambutan Kepala Sekolah */
.sambutan-kepala-sekolah {
  background: linear-gradient(135deg, #ffffff, #f7f9fc);
  color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.sambutan-kepala-sekolah img.animate-img {
  transition: transform 0.3s ease;
}
.sambutan-kepala-sekolah img.animate-img:hover {
  transform: scale(1.1);
}

/* Statistik */
.statistic-card {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
.statistic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Program Studi */
.card {
  margin: 10px 0;
}
.card img {
  height: 150px;
  object-fit: cover;
}
.card.hover-effect:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.contact-box {
  background-color: #f8f9fa;
  border-radius: 10px;
  text-align: center;
}
</style>
