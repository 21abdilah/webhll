<template>
  <div class="container-fluid">
    <h1>Berita Sekolah</h1>
    <div class="row">
      <div class="col-md-4" v-for="(news, index) in newsList" :key="index">
        <div class="card">
          <img :src="news.imageUrl" class="card-img-top" alt="Berita Image">
          <div class="card-body">
            <h5 class="card-title">{{ news.title }}</h5>
            <p class="card-text">{{ news.excerpt }}</p>
            <a :href="news.link" class="btn btn-primary">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: 'Pendaftaran Siswa Baru Tahun 2024',
          excerpt: 'Jangan lewatkan pendaftaran siswa baru di sekolah kami...',
          imageUrl: 'https://via.placeholder.com/150',
          link: 'https://id.search.yahoo.com/search?fr=mcafee&type=E210ID91215G0&p=ppdb'
        },
        {
          title: 'LOMBA LIWET',
          excerpt: 'Sekolah kami akan mengadakan lomba ngaliwet...',
          imageUrl: 'https://via.placeholder.com/150',
          link: '/berita/lomba-liwet-sekolah'
        },
        {
          title: 'Kegiatan Ekstrakurikuler Musim Ini',
          excerpt: 'Kami memiliki berbagai kegiatan ekstrakurikuler yang menarik...',
          imageUrl: 'https://via.placeholder.com/150',
          link: '/berita/kegiatan-ekstrakurikuler-musim-ini'
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.container-fluid {
  padding-top: 20px;
}
</style>
