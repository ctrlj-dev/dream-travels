// src/store/tripStore.ts
import { create } from 'zustand';

interface TripStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useGlobalModalStore = create<TripStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useGlobalModalStore;
