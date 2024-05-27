<template>
  <div class="container mx-auto py-12 text-primary font-sans">
    <section class="text-center py-12">
      <h1 class="page-heading">Contact Us</h1>
      <p class="mb-6">Sandhills Rd, Buncurrig, Ballyheigue, Co. Kerry, Ireland</p>
      <p class="mb-6">
        <a href="mailto:info@ballyheiguecommunitycentre.ie" class="text-accent hover:underline">
          info@ballyheiguecommunitycentre.ie
        </a>
      </p>
      <p class="mb-6">Tel: (066) 7133837</p>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3838306847325!2d-9.8338019!3d52.3883774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485ab69a4631c2cd%3A0xe6fe6612834ded39!2sCommunity%20Centre!5e0!3m2!1sen!2sie!4v1592288263290!5m2!1sen!2sie"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
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

.text-accent {
  color: #007BFF;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.map-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
