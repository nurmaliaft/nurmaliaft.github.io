<template>
  <div class="container mt-5">
    <header :style="{ backgroundColor: navBackground, padding: '0' }">
      <nav class="navbar navbar-expand-lg navbar-light">
        <h1 class="navbar-brand" style="margin-left: 50px;">My Profile</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#about">ABOUT ME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#project">PROJECTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#skills">SKILLS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <section :style="{ backgroundColor: navBackground, padding: '40px 20px' }" class="d-flex flex-column flex-md-row align-items-center justify-content-center text-center mb-5" id="about">
        <img 
          src="/profile.jpg" 
          alt="Profil picture of Nurmalia Fitria" 
          class="img-fluid rounded-circle mb-3 me-md-3 profile-img" 
          style="width: 180px; height: 180px;"
        />
        <div class="section__text text-md-start" style="margin-left: 20px;">
          <p class="section_text_p1">Hello, I'm</p>
          <h1 class="title"><strong>Nurmalia Fitria</strong></h1>
        </div>
      </section>

      <section :style="{ backgroundColor: aboutMeBackground }" class="mb-4 d-flex flex-column align-items-center text-center p-4" id="about-me">
        <h1 class="title mb-4">About Me</h1>
        <div class="col-md-8">
          <p class="text-justify">
            Nurmalia Fitria is a student at Brawijaya University majoring in Information Technology.
            A dedicated person with a passion for exploration and capable of collaborative and independent work.
            Currently interested in the field of art and has a strong desire
            to continue learning and gaining new experiences and insights.
          </p>
          <div id="socials-container" class="d-flex justify-content-start align-items-center mt-4">
              <a class="me-2" style="color: #999999; text-decoration: none; font-size: 18px; font-family: 'Times New Roman', Times, serif; font-weight: bold;">Connect With Me</a>
              <svg class="inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                <path stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            <img
              src="/linkedin.jpg"
              alt="LinkedIn logo"
              class="icon mx-2"
              style="width: 20px; height: 20px; cursor: pointer;"
              @click="openLink('https://www.linkedin.com/in/nurmalia-fitria-7b4338287')"
            />
            <img
              src="/instagram.jpg"
              alt="Instagram logo"
              class="icon mx-2"
              style="width: 23px; height: 23px; cursor: pointer;"
              @click="openLink('https://www.instagram.com/nurmaliaft_/')"
            />
            <img
              src="/github.jpg"
              alt="GitHub logo"
              class="icon mx-2"
              style="width: 20px; height: 20px; cursor: pointer;"
              @click="openLink('https://github.com/nurmaliaft')"
            />
          </div>
        </div>
      </section>

      <section :style="{ backgroundColor: skillsBackground }" class="mb-4 d-flex flex-column align-items-center p-4" id="skills">
        <span style="color: #999999;">Here are some</span>
        <h2 class="title mb-4">My Skills</h2>
        <div class="col-md-8 text-start">
          <div class="d-flex flex-column">
            <div class="d-flex align-items-center mb-2" v-for="(skill, index) in skills" :key="index">
              <img src="/checkmark.jpg" alt="Checkmark" class="mx-2" style="width: 20px; height: 20px;" />
              <p class="mb-0"><strong>{{ skill.name }}:</strong> {{ skill.level }}</p>
            </div>
          </div>
        </div>
      </section>

      <section :style="{ backgroundColor: projectBackground }" class="mb-4 d-flex flex-column align-items-center p-4" id="project">
        <span style="color: #999999;">Explore</span>
        <h2 class="title mb-4">My Projects</h2>
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <a href="https://github.com/nurmaliaft/contact-form">
                <img src="/form.jpg" class="card-img-top project-img" alt="form project" style="height: 200px; object-fit: cover;">
              </a>
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">When I got the task to create a contact form using PHP and HTML.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <a href="https://github.com/nurmaliaft/vue-project">
                <img src="/vue.jpg" class="card-img-top project-img" alt="vue project" style="height: 200px; object-fit: cover;">
              </a>
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">When I got the task to create a click counter, box color change using button, and image carousel using Vue and Node.js.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <a href="https://www.figma.com/proto/k5Bgh9uaqCdmVNhM7lX20e/coffee?node-id=0-1&t=1KzFHPbxntnFLred-1">
                <img src="/coffe.jpg" class="card-img-top project-img" alt="coffee website project" style="height: 200px; object-fit: cover;">
              </a>
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">When I got the task to redesign a coffee website in semester 2 using Figma.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <a href="https://www.figma.com/proto/9ktBvDljSEijBkU9eFMb7G/mobile-app?node-id=0-1&t=HNfwZztGDqIGjVlQ-1">
                <img src="/pinterest.jpg" class="card-img-top project-img" alt="pinterest app project" style="height: 200px; object-fit: cover;">
              </a>
              <div class="card-body">
                <h5 class="card-title">Project 4</h5>
                <p class="card-text">When I got the task to redesign an application Pinterest in semester 2 using Figma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section :style="{ backgroundColor: contactBackground }" class="mb-4 d-flex flex-column align-items-center p-4" id="contact">
        <h2 class="title mb-2">Contact</h2>
        <p>Feel free to reach out!</p>
        <form @submit.prevent="handleSubmit" class="border p-4 rounded col-md-8" :style="{ backgroundColor: '#ffffff' }">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" v-model="formData.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </section>

      <footer class="mt-2" :style="{ backgroundColor: footerBackground }">
        <div class="container text-center">
          <p class="p-3" style="color: black; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">&copy 2024 - All right reserved by Nurmalia Fitria</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBackground: '#dad4d4',
      aboutMeBackground: '#ffffff',
      projectBackground: '#ffffff',
      skillsBackground: '#ffffff',
      contactBackground: '#dad4d4',
      footerBackground: '#a59c9c',
      formData: {
        name: '',
        email: '',
        message: ''
      },
      skills: [
        { name: 'PHP', level: 'Basic' },
        { name: 'HTML', level: 'Basic' },
        { name: 'Figma', level: 'Basic' }
      ]
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message!'); 
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    },
    openLink(url) {
      window.open(url, '_blank');
    }
  },
  head() {
    return {
      title: 'My Profile - Nurmalia Fitria',
      meta: [
        { hid: 'description', name: 'description', content: 'Halaman profil Nurmalia Fitria, seorang mahasiswa Teknologi Informasi.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
      ]
    };
  }
}
</script>

<style scoped>
h1, h2, h3 {
  color: #333;
  font-size: 36px;
  font-family: 'Times New Roman', Times, serif;
}
.profile-img {
  margin-right: 20px;
}
.icon {
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
}
.icon:hover {
  transform: scale(1.2);
  filter: brightness(1.5);
}
.project-img {
  transition: transform 0.3s ease, filter 0.3s ease;
}
.project-img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}
.text-justify {
  text-align: justify;
}
footer {
  color: #fff;
  text-align: center;
}
</style>