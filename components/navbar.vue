<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="./">VATAS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="./">BERANDA</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PROFIL
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/profil/sejarah">SEJARAH</a></li>
              <li><a class="dropdown-item" href="/profil/visimisi">VISI DAN MISI</a></li>
              <li><a class="dropdown-item" href="/profil/identitas">IDENTITAS</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/galeri">GALLERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/eskul">EKSTRAKULIKULER</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
}
.navbar-nav {
  justify-content: center;
}
.navbar .nav-link {
  color: white;  
}
.navbar .nav-link:hover {
  color: #ccc; 
}
.navbar-toggler {
  border-color: rgb(255, 255, 255); 
}
.navbar-toggler-icon {
  background-color: white;
}
.dropdown-menu {
  border-radius: 5px; 
  box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.15); 
}
</style>
