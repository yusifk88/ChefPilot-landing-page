
<template>
  <div class="page-wrapper">
    <div class="policy-container">
      <header class="policy-header">
        <h1>Privacy Policy</h1>
        <div class="effective-date">Effective Date: January 31, 2026</div>
      </header>

      <p>At <strong>Chefpilot</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered kitchen inventory and recipe service.</p>

      <h2>1. Information We Collect</h2>

      <h3>A. Personal Data</h3>
      <p>When you register for an account, we may collect information that identifies you, such as:</p>
      <ul>
        <li>Name and email address</li>
        <li>Profile preferences (dietary restrictions, health goals, and allergies)</li>
        <li>Account credentials and login data</li>
      </ul>

      <h3>B. Kitchen & Inventory Data</h3>
      <p>To provide our personalized AI Sous-Chef service, we collect data regarding your kitchen contents:</p>
      <ul>
        <li>Lists of ingredients currently in your pantry, fridge, or freezer</li>
        <li>Photos of receipts or grocery items (if you use our scanning features)</li>
        <li>Expiration dates, brands, and quantities of food items</li>
      </ul>

      <div class="highlight-section">
        <h3>C. Usage & AI Interaction Data</h3>
        <p>We automatically collect information about how you interact with the app, including recipes viewed, saved, or cooked, as well as device identifiers and diagnostic data to improve our AI models.</p>
      </div>

      <h2>2. How We Use Your Information</h2>
      <p>We use the data collected to deliver a premium, personalized culinary experience:</p>
      <ul>
        <li><strong>Personalization:</strong> Tailoring recipe suggestions to match your health profile and available ingredients.</li>
        <li><strong>AI Training:</strong> Anonymized data helps refine our machine learning algorithms for ingredient recognition and flavor pairing.</li>
        <li><strong>Automated Updates:</strong> Powering your morning "Dish of the Day" notifications based on inventory status.</li>
        <li><strong>Support:</strong> Responding to your comments, questions, and technical requests.</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>We respect your data. We do not sell your personal information to third parties. Sharing only occurs in the following instances:</p>
      <ul>
        <li><strong>Service Providers:</strong> Sharing with trusted partners who assist in cloud hosting (e.g., AWS/Google Cloud), payment processing, and app analytics.</li>
        <li><strong>Compliance:</strong> When required by law or to protect the safety and rights of Chefpilot and its community.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement robust security measures, including end-to-end encryption for sensitive data and secure API protocols, to protect your information from unauthorized access. While we strive for absolute security, no method of transmission is 100% impenetrable.</p>

      <h2>5. Your Rights & Control</h2>
      <p>You have full control over your data. Through your account settings, you may:</p>
      <ul>
        <li>Access, update, or correct your personal and dietary information</li>
        <li>Request the permanent deletion of your account and associated inventory history</li>
        <li>Opt-out of automated marketing and suggestion emails</li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>We may update this Privacy Policy to reflect changes in our AI capabilities or legal requirements. We will notify you of any significant changes via in-app notifications or email.</p>

      <div class="contact-card">
        <h2>Contact Our Privacy Team</h2>
        <p>Have questions about your data? Reach out to us directly.</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@chefpilot.ai">privacy@chefpilot.ai</a></p>
        <p><strong>Conatct:</strong> <a href="https://www.chefpilot.ai/contact">www.chefpilot.ai/contact</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "privacy"
})
</script>

<style scoped>
:root {
  --primary-green: #2D5A27;
  --secondary-green: #4ade80;
  --bg-sage: #F4F7F4;
  --white: #ffffff;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --accent-border: #d1fae5;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.page-wrapper {
  max-width: 850px;
  margin:auto;
  padding: 0 20px;
}

.policy-container {
  background: #ffffff!important;
  padding: 60px;
  padding-top: 10em;
  border-radius: 24px;
  border: 1px solid rgba(45, 90, 39, 0.08);
}

/* Header Styling */
.policy-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--accent-border);
}

h1 {
  color: var(--primary-green);
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.025em;
}

.effective-date {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  background: var(--bg-sage);
  display: inline-block;
  padding: 6px 16px;
  border-radius: 100px;
}

/* Content Styling */
h2 {
  color: var(--primary-green);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

h2::before {
  content: "";
  width: 12px;
  height: 12px;
  background: var(--secondary-green);
  border-radius: 3px;
  margin-right: 12px;
  display: inline-block;
}

h3 {
  color: var(--text-main);
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
  font-size: 1.05rem;
}

ul {
  margin-bottom: 25px;
  padding-left: 20px;
  list-style-type: none;
}

li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 24px;
}

li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--secondary-green);
  font-weight: bold;
}

.highlight-section {
  background-color: #f0fdf4;
  border-radius: 16px;
  padding: 30px;
  margin: 30px 0;
  border: 1px solid #dcfce7;
}

/* Footer/Contact Info */
.contact-card {
  margin-top: 60px;
  padding: 40px;
  background: var(--primary-green);
  color: var(--white);
  border-radius: 20px;
  text-align: center;
}

.contact-card h2 {
  color: var(--white);
  justify-content: center;
  margin-top: 0;
}

.contact-card h2::before {
  background: var(--secondary-green);
}

.contact-card a {
  color: var(--secondary-green);
  text-decoration: none;
  font-weight: 600;
}

.contact-card a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .policy-container {
    padding: 10em 20px;
  }
  h1 { font-size: 1.8rem; }
  .effective-date { font-size: 0.85rem; }
}
</style>