<template>
  <div class="container mx-auto py-12 text-primary font-sans">
    <section class="text-center py-12">
      <h1 class="page-heading">About Us</h1>
      <p class="max-w-3xl mx-auto mb-6">The Community Center is dedicated to providing a space for local events and activities. Our mission is to foster community spirit and provide opportunities for residents to engage in various activities and events.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="team-card p-6 bg-white text-primary rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Team Member" class="rounded-full mb-4">
          <h3 class="text-2xl font-bold">John Doe</h3>
          <p class="text-secondary">Position</p>
        </div>
        <div class="team-card p-6 bg-white text-primary rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Team Member" class="rounded-full mb-4">
          <h3 class="text-2xl font-bold">Jane Smith</h3>
          <p class="text-secondary">Position</p>
        </div>
        <div class="team-card p-6 bg-white text-primary rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Team Member" class="rounded-full mb-4">
          <h3 class="text-2xl font-bold">Bob Johnson</h3>
          <p class="text-secondary">Position</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
.page-heading {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  animation: dropDown 1s ease;
}

@keyframes dropDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-primary {
  color: #333;
}

.text-secondary {
  color: #555;
}

.bg-accent {
  background-color: #007BFF;
}

.bg-secondary {
  background-color: #0056b3;
}
</style>
