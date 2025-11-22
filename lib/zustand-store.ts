import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ZustandState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useZustandStore = create<ZustandState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "zustand-storage", // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
);
