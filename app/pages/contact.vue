
<template>
  <div class="page-wrapper">
    <div class="contact-container">
      <div class="contact-info-sidebar">
        <div class="info-header">
          <h1>Contact Us</h1>
          <p>Have a question about your AI Sous-Chef? We're here to help you master your kitchen.</p>
        </div>

        <div class="info-details">
          <div class="info-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>support@chefpilot.live</span>
          </div>
          <div class="info-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>Lacota Ave, Forte Myers, FL</span>
          </div>
        </div>

        <div class="social-links">
          <a href="#" class="social-icon">
            <svg style="width:20px;height:20px" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" class="social-icon">
            <svg style="width:20px;height:20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>

      <!-- Form Area -->
      <div class="contact-form-area">
        <img src="https://flobaze.atl1.cdn.digitaloceanspaces.com/chefpilot/chef_cartoon.webp"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "contact"
})
</script>

<style>
:root {
  --primary-green: #2D5A27;
  --secondary-green: #4ade80;
  --bg-sage: #F4F7F4;
  --white: #ffffff;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --border-light: #e5e7eb;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}


.page-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 10em;
  background: var(--bg-sage);

}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background: var(--bg-sage);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(45, 90, 39, 0.08);
}

/* Sidebar Info */
.contact-info-sidebar {
  background-color: var(--primary-green);
  color: var(--white);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-header h1 {
  font-size: 2rem;
  margin: 0 0 15px 0;
  font-weight: 800;
}

.info-header p {
  color: #d1fae5;
  font-size: 1.05rem;
}

.info-details {
  margin: 40px 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.info-item svg {
  width: 24px;
  height: 24px;
  color: var(--secondary-green);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.social-icon:hover {
  background: var(--secondary-green);
}

/* Form Area */
.contact-form-area {
  padding: 50px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

input, textarea, select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-green);
  box-shadow: 0 0 0 4px rgba(45, 90, 39, 0.1);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background-color: var(--primary-green);
  color: var(--white);
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: #1e3d1a;
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  .contact-info-sidebar {
    padding: 40px;
  }
}
</style>