<template> 
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="./">
             BERANDA
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/profil"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PROFIL
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/sejarah">Profil</a></li>
              <li><a class="dropdown-item" href="#">Sejarah</a></li>
              <li><a class="dropdown-item" href="#">Visi Misi</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GALLERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">EKSTRAKULIKULER</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
background-color: rgb(102, 102, 102);
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: auto;
}

.navbar .navbar-nav {
justify-content: center;
display: flex;
width: 100%;
}

.navbar img {
margin-bottom: 10px;
}

.navbar .nav-link {
color: white;  
}

.navbar .nav-link i {
margin-right: 8px;
}
</style>
