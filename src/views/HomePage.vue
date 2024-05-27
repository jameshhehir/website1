<template>
  <div class="container mx-auto py-8 text-primary font-sans">
    <section class="relative text-center h-half-screen">
      <div class="absolute inset-0 overflow-hidden">
        <div class="video-wrapper">
          <iframe 
            class="absolute top-0 left-0 w-full h-full object-cover" 
            src="https://www.youtube.com/embed/BE0GiPsbPgI?autoplay=1&mute=1&loop=1&playlist=BE0GiPsbPgI&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&start=3" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
            @load="handleVideoLoad"
          ></iframe>
        </div>
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div :class="{'animation-ended': animationEnded}" class="relative z-10 flex flex-col justify-center items-center h-full animate-text">
        <h1 class="text-4xl font-bold mb-4 text-white">Welcome to the Community Center</h1>
        <p class="mb-6 text-white">Your place for local events and activities.</p>
        <button class="bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-secondary transition duration-300">Join Us</button>
      </div>
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="service-card p-6 bg-white text-primary rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <div class="mb-4">
            <img :src="service.image" :alt="service.title" class="rounded-xl">
          </div>
          <h3 class="text-2xl font-bold mb-2">{{ service.title }}</h3>
          <p class="text-secondary mb-4">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Latest Posts</h2>
      <div class="flex justify-center">
        <iframe 
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552774406949&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          width="500" 
          height="600" 
          style="border:none;overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
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
  name: 'HomePage',
  data() {
    return {
      services: [
        { id: 1, title: 'MEALS ON WHEELS', description: 'Providing nutritious meals to those in need.', image: 'https://via.placeholder.com/300x200' },
        { id: 2, title: 'GYM', description: 'State-of-the-art gym facilities available for members.', image: 'https://via.placeholder.com/300x200' },
        { id: 3, title: 'LAUNDRY', description: 'Affordable laundry services for the community.', image: 'https://via.placeholder.com/300x200' },
        { id: 4, title: 'YOUNG AT HEART DAYCARE GROUP', description: 'Daycare services for the elderly.', image: 'https://via.placeholder.com/300x200' },
        { id: 5, title: 'HALL HIRE / ROOM HIRE', description: 'Spaces available for events and meetings.', image: 'https://via.placeholder.com/300x200' },
        { id: 6, title: 'BINGO', description: 'Weekly bingo games with great prizes.', image: 'https://via.placeholder.com/300x200' },
        { id: 7, title: 'CHILDREN\'S BIRTHDAY PARTYS', description: 'Fun and exciting birthday party packages.', image: 'https://via.placeholder.com/300x200' }
      ],
      selectedEvent: null,
      animationEnded: false
    };
  },
  methods: {
    openModal(event) {
      this.selectedEvent = event;
    },
    closeModal() {
      this.selectedEvent = null;
    },
    handleVideoLoad() {
      setTimeout(() => {
        this.animationEnded = true;
      }, 3000); // Adjust the timing to match your video start
    }
  }
};
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.overflow-hidden {
  overflow: hidden;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.inset-0 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-black {
  background-color: black;
}

.opacity-60 {
  opacity: 0.6;
}

.z-10 {
  z-index: 10;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.h-screen {
  height: 100vh;
}

.h-half-screen {
  height: 50vh;
}

.text-white {
  color: white;
}

.bg-accent {
  background-color: #007BFF; /* Adjust as needed */
}

.bg-secondary {
  background-color: #0056b3; /* Adjust as needed */
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 177.77vh; /* 100 * (16/9) */
  transform: translateX(-50%);
  object-fit: cover;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-text {
  animation: fadeIn 3s ease-in-out forwards;
}

.animation-ended {
  animation: none;
}
</style>
