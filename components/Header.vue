<template>
  <div class="header-container">
    <div class="header-top">
      <span>{{ currentDate }}</span>
      <span class="current-time">{{ currentTime }}</span>
    </div>
    <div class="header-image">
      <img src="@/assets/img/gambar.png" alt="Background Image" class="background-image" />
      <div class="header-content">
        <img src="@/assets/img/logosmk4.png" alt="Logo SMK" class="header-logo" />
        <h1>Selamat Datang di <span class="highlight">Website</span></h1>
        <h2>SMK Negeri 4 Tasikmalaya</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      currentDate: '',
    };
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedTime = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      this.currentDate = formattedDate;
      this.currentTime = formattedTime;
    },
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  },
};
</script>

<style scoped>
.header-container {
  text-align: center;
  font-family: 'Poppins', Arial, sans-serif;
}

.header-top {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
}

.header-top .current-time {
  font-weight: bold;
  color: #e74c3c;
}

.header-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.header-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1.5s ease-in-out;
}

.header-content h1 {
  font-size: 2.8rem;
  margin: 10px 0;
}

.header-content h1 .highlight {
  color: #e74c3c;
}

.header-content h2 {
  font-size: 2rem;
  margin: 5px 0;
}

.header-logo {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  animation: float 4s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }

  .header-content h2 {
    font-size: 1.5rem;
  }

  .header-logo {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .header-content h1 {
    font-size: 1.8rem;
  }

  .header-content h2 {
    font-size: 1.2rem;
  }

  .header-logo {
    width: 60px;
    height: 60px;
  }
}
</style>
