
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {getAuth} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCyJR5ZmEQ-GNTTBxqa_t0BE7i8ZWHTWVI",
    authDomain: "app-ad87d.firebaseapp.com",
    projectId: "app-ad87d",
    storageBucket: "app-ad87d.firebasestorage.app",
    messagingSenderId: "398461415874",
    appId: "1:398461415874:web:c8ad6241a4abe4aa65a65b"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
