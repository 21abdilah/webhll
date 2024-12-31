<template>
  <div class="container my-5">
    <h1 class="text-center display-4 fw-bold text-primary mb-4">👔 Baju Seragam Harian 👕</h1>
    <div class="row g-4">
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/senin.jpg" class="img-fluid rounded shadow" alt="Senin" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">⭐ Baju Seragam Senin dan Selasa</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/rabu.jpg" class="img-fluid rounded shadow" alt="Rabu" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">💼 Baju Seragam Rabu</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/jumat.jpg" class="img-fluid rounded shadow" alt="Jumat" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌟 Baju Seragam Jumat</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/kamisrpl.jpg" class="img-fluid rounded shadow" alt="Kamis 1" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌼 Baju Kamis RPL</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/kamistkj.jpg" class="img-fluid rounded shadow" alt="Kamis 2" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌸 Baju Kamis TKJ</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/kamistoi.jpg" class="img-fluid rounded shadow" alt="Kamis 3" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌺 Baju Kamis TOI</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/kamistbsm.jpg" class="img-fluid rounded shadow" alt="Kamis 4" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌷 Baju Kamis TBSM</p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="~/assets/img/kamisdkv.jpg" class="img-fluid rounded shadow" alt="Kamis 5" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary">🌻 Baju Kamis DKV</p>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <h1 class="text-center display-4 fw-bold text-primary mb-4">✨ Kegiatan Seru Kami ✨</h1>
    <div class="row g-4">
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Seni" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"> </p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="RPL" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Job Pair" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Riding" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Upacara" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="MPLS" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Kemah" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
      <div class="col-lg-3">
        <div class="image-container">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded shadow" alt="Menjelajah" />
        </div>
        <p class="text-center mt-2 fw-bold text-secondary"></p>
      </div>
    </div>
  </div>
</template>
<style>
    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      transition: transform 0.3s ease-in-out;
    }

    .image-container img {
      transition: transform 0.3s ease-in-out;
    }

    .image-container:hover img {
      transform: scale(1.1);
    }

    .image-container:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .text-primary {
      color: #007bff;
    }

    .text-secondary {
      color: #6c757d;
    }

    .fw-bold {
      font-weight: bold;
    }
  </style>

