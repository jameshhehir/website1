<template>
  <nav class="bg-white text-primary py-4 font-sans shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <img src="@/assets/logo.png" alt="Community Center Logo" class="h-32 w-auto">
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-primary focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="md:flex space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
        <li><router-link to="/" class="nav-link" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" class="nav-link" @click="closeMenu">About Us</router-link></li>
        <li><router-link to="/events" class="nav-link" @click="closeMenu">Events</router-link></li>
        <li><router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
nav img {
  height: 8rem; /* Adjust the height of the logo */
  width: auto; /* Maintain aspect ratio */
}

.nav-link {
  font-size: 1.5rem; /* Increase font size */
  padding: 0.5rem 1rem; /* Add padding for better clickability */
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for interactivity */
}

.nav-link:hover {
  color: #007BFF; /* Change text color on hover */
  background-color: #f0f0f0; /* Change background color on hover */
}

.nav-link.active {
  font-weight: bold; /* Bold text for the active link */
  border-bottom: 2px solid #007BFF; /* Underline active link */
}

/* Mobile menu styles */
@media (max-width: 768px) {
  .nav-link {
    font-size: 1.25rem; /* Slightly smaller font size for mobile */
  }
}
</style>
