<template>
  <div class="container">
    <!-- Judul Eskul -->
    <h2 class="text-start my-4">{{ eskul.judul }}</h2>

    <div class="row">
      <!-- Gambar Cover -->
      <div class="col-md-3">
        <img :src="eskul.cover" class="cover" :alt="eskul.judul" />
      </div>

      <!-- Detail Eskul -->
      <div class="col-md-9 p-5">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Organisasi: {{ eskul.judul }}
          </li>
          <li class="list-group-item">
            Pembina: {{ eskul.pembina }}
          </li>
          <li class="list-group-item">
            <span v-if="eskul.kategori && eskul.kategori.nama">
              Kategori: {{ eskul.kategori.nama }}
            </span>
            <span v-else>
              Kategori: Tidak tersedia
            </span>
          </li>
          <li class="list-group-item">
            Deskripsi: {{ eskul.deskripsi }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const route = useRoute();
const eskul = ref({});

const getEskulById = async () => {
  try {
    const { data, error } = await supabase
      .from("eskul")
      .select(`*, kategori: kategori_eskul(nama)`)
      .eq("id", route.params.id);

    if (error) {
      console.error("Error fetching eskul:", error.message);
      return;
    }

    if (data && data.length > 0) {
      eskul.value = data[0];
    } else {
      console.warn("Eskul not found");
    }
  } catch (error) {
    console.error("Error fetching eskul:", error.message);
  }
};

onMounted(() => {
  getEskulById();
});
</script>

<style scoped>
.cover {
  width: 100%;
  max-width: 255px;
  height: auto;
  object-fit: cover;
  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
</style>
