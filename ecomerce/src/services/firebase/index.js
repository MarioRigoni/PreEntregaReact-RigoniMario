import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhPDI3bLgBHCcKHyZDjw_NXD7GOJQlqrU",
  authDomain: "proye-creact.firebaseapp.com",
  projectId: "proye-creact",
  storageBucket: "proye-creact.appspot.com",
  messagingSenderId: "180758332564",
  appId: "1:180758332564:web:d198d20e428444e88a2081",
  measurementId: "G-5HZ6L7N3B5",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
