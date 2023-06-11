import { create } from 'zustand';

export const useAppStore = create((set) => ({
  currentYear: new Date().getFullYear(),
  days: '',
  months: '',
  years: '',
  setDays: (value) => {
    set(() => ({ days: value }));
  },
  setMonths: (value) => {
    set(() => ({ months: value }));
  },
  setYears: (value) => {
    set(() => ({ years: value }));
  },
}));
