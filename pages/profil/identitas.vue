<template>
  <div class="school-identity">
    <h1 class="title">Identitas Sekolah Menengah Kejuruan Negeri 4 Tasikmalaya</h1>
    
    <div class="form-container">
      <div class="form-row">
        <div class="label">Nama Sekolah</div>
        <div class="value">SMK Negeri 4 Kota Tasikmalaya</div>
      </div>

      <div class="form-row">
        <div class="label">NPSN</div>
        <div class="value">20278063</div>
      </div>

      <div class="form-row">
        <div class="label">Nomor Statistik Sekolah</div>
        <div class="value">401327010004</div>
      </div>

      <div class="form-row">
        <div class="label">Alamat</div>
        <div class="value">
          <div class="address-container">
            <div class="address-row">
              <div class="address-label">Jalan</div>
              <div class="address-value">Jl Depok RT 02 RW 05</div>
            </div>
            <div class="address-row">
              <div class="address-label">Kelurahan</div>
              <div class="address-value">Sukamanah</div>
            </div>
            <div class="address-row">
              <div class="address-label">Kecamatan</div>
              <div class="address-value">Purbaratu</div>
            </div>
            <div class="address-row">
              <div class="address-label">Kota</div>
              <div class="address-value">Tasikmalaya</div>
            </div>
            <div class="address-row">
              <div class="address-label">Provinsi</div>
              <div class="address-value">Jawa Barat</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="label">Telp / Faks</div>
        <div class="value">(0265) 7525981</div>
      </div>

      <div class="form-row">
        <div class="label">Website</div>
        <div class="value">www.smkn4-tsm.sch.id</div>
      </div>

      <div class="form-row">
        <div class="label">E-Mail</div>
        <div class="value">info@smkn4-tsm.sch.id</div>
      </div>

      <div class="form-row">
        <div class="label">Tahun Berdiri/Beroperasi</div>
        <div class="value">2010</div>
      </div>

      <div class="form-row">
        <div class="label">Nomor SK Pendirian</div>
        <div class="value">420/SK/BPP/2012</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.school-identity {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 1rem;
}

.label {
  color: #4B5563;
}

.address-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.address-row {
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 1rem;
}

.address-label {
  color: #4B5563;
}
</style>