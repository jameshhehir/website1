<template>
  <div class="container mx-auto py-8 text-primary font-sans">
    <section class="text-center py-12">
      <h1 class="page-heading">Events</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="event in events" :key="event.id" class="event-card p-6 bg-white text-primary rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <div class="mb-4">
            <img src="https://via.placeholder.com/300x200" alt="Event Image" class="rounded-xl">
          </div>
          <h3 class="text-2xl font-bold mb-2">{{ event.title }}</h3>
          <p class="text-secondary mb-4">{{ event.date }}</p>
          <button @click="openModal(event)" class="mt-2 bg-accent text-white px-4 py-2 rounded-full">Details</button>
        </div>
      </div>
    </section>

    <div v-if="selectedEvent" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-xl shadow-lg text-primary animate-fadeIn">
        <h2 class="text-2xl font-bold mb-4">{{ selectedEvent.title }}</h2>
        <p class="mb-4">{{ selectedEvent.description }}</p>
        <button @click="closeModal" class="mt-4 bg-accent text-white px-4 py-2 rounded-full">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityEvents',
  data() {
    return {
      events: [
        { id: 1, title: 'Community Meeting', date: '2024-06-01', description: 'A community meeting to discuss local issues.' },
        { id: 2, title: 'Summer Festival', date: '2024-07-15', description: 'Annual summer festival with games and food.' }
      ],
      selectedEvent: null
    };
  },
  methods: {
    openModal(event) {
      this.selectedEvent = event;
    },
    closeModal() {
      this.selectedEvent = null;
    }
  }
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
