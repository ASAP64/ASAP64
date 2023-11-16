<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8HuicHwscY4O4wFMbuXZZo13p-OOSVjI",
    authDomain: "asapsite-e622c.firebaseapp.com",
    projectId: "asapsite-e622c",
    storageBucket: "asapsite-e622c.appspot.com",
    messagingSenderId: "526561426439",
    appId: "1:526561426439:web:8bbd41ed5a9a24fafebea2",
    measurementId: "G-KD0XFF487W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialiser Firestore
  const firestore = firebase.firestore();
</script>