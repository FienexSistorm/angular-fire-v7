import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "angular-fire-7-f8412",
      appId: "1:909649260801:web:b7750b89b9b08f78a22b00",
      storageBucket: "angular-fire-7-f8412.firebasestorage.app",
      apiKey: "AIzaSyCSXp0zLiaDdPVYHKRNWOxF8GGPLxweW2c",
      authDomain: "angular-fire-7-f8412.firebaseapp.com",
      messagingSenderId: "909649260801",
      measurementId: "G-FDPEHSQ755"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
