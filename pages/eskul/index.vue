<template>
  <div class="container-fluid">
    <!-- Daftar Eskul -->
    <div class="row mt-5">
      <div class="my-3 text-muted">
        Menampilkan {{ foto.length }} eskul
      </div>
    </div>
    <div class="row">
      <div v-if="foto.length > 0" v-for="(eskul, i) in foto" :key="i" class="col-lg-2">
        <nuxt-link :to="`/eskul/${eskul.id}`">
          <div class="card mb-3 shadow-sm hover-effect">
            <div class="card-body p-0">
              <img :src="eskul.cover" class="cover" />
              <div class="p-2">
                <h6 class="text-center">{{ eskul.judul }}</h6>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const foto = ref([]);

const getData = async () => {
  const { data, error } = await supabase
    .from("eskul")
    .select(`id, judul, cover, kategori: kategori_eskul(nama)`);

  if (error) {
    console.error("Error fetching data:", error.message);
    return;
  }

  foto.value = data || [];
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
.btn-light {
  background-color: #5fd8fe !important;
  box-shadow: 1px 1px 10px #5fd8fe !important;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #f0ffff !important;
}

.cover {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.card-body {
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.card.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.text-muted {
  color: #6c757d;
}
</style>
