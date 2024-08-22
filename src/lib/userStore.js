import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: false,
  fetchUserInfo: async (uid) => {
    console.log('Fetching user info for UID:', uid);  // Log UID

    if (!uid) {
      set({ currentUser: null, isLoading: true });
      console.log('No UID provided, setting currentUser to null.');
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      console.log('Firestore document reference:', docRef);

      const docSnap = await getDoc(docRef);
      console.log('Document snapshot:', docSnap);

      if (docSnap.exists()) {
        console.log('User found:', docSnap.data());
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        console.log('No such user, setting currentUser to null.');
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log('Error fetching user info:', err);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
