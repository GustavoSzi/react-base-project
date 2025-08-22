import { create } from "zustand";

type LoadingStoreTypes = {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    currentRequests: number;
    addRequest: () => void;
    removeRequest: () => void;
}

export const useLoaderStore = create<LoadingStoreTypes>()((set, get) => ({
    isLoading: false,
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
    currentRequests: 0,
    addRequest: () => set({ currentRequests: get().currentRequests + 1 }),
    removeRequest: () => set({ currentRequests: get().currentRequests - 1 }),
}))