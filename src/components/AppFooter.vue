<template>
  <footer class="bg-white text-primary text-center py-4 font-sans shadow-md">
    <div class="flex justify-center mb-4">
      <img src="@/assets/logo1.png" alt="Logo 1" class="h-12 mx-2"> <!-- Placeholder for the first additional logo -->
      <img src="@/assets/logo2.webp" alt="Logo 2" class="h-12 mx-2"> <!-- Placeholder for the second additional logo in webp format -->
      <img src="@/assets/logo3.webp" alt="Logo 3" class="h-12 mx-2"> <!-- Placeholder for the third additional logo in webp format -->
    </div>
    <p>&copy; 2024 Community Center</p>
    <router-link to="/privacy-policy" class="mt-2 text-sm text-accent hover:underline block">
      Privacy Policy
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.text-primary {
  color: #333;
}

.text-secondary {
  color: #555;
}

.text-accent {
  color: #007BFF;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mt-2 {
  margin-top: 0.5rem;
}

.text-sm {
  font-size: 0.875rem;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.h-12 {
  height: 3rem;
}
</style>
