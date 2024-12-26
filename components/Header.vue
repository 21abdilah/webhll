<template>
  <div class="header-container">
    <div class="header-top">
      <span>Thu, Dec 26th, 2024</span>
      <span class="time">11:56:04 AM</span>
    </div>
    <div class="header-image">
      <img src="~/assets/img/gambar.png" alt="Background Image" class="background-image" />
      <div class="header-content">
        <img src="~/assets/img/logosmk4.png" alt="Logo" class="header-logo" />
        <h1>SELAMAT DATANG DIWEB</h1>
        <h2>SMK Negeri 4 Tasikmalaya</h2>
      </div>
    </div>
  </div>
</template>

<style>
.header-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.header-top {
  background-color: rgb(102, 102, 102);
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.header-top .time {
  font-weight: bold;
}

.header-image {
  position: relative;
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}

.background-image {
  width: 100%;
  object-fit: cover;
  max-height: 400px;
}

.header-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.header-content h1 {
  font-size: 38px;
  margin: 10px 0;
}

.header-content h2 {
  font-size: 35px;
}

.header-logo {
  width: 100px;
  height:100px;
  margin-bottom: 10px;
}
</style>
