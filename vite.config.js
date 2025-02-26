import { sveltekit } from '@sveltejs/kit/vite';

export default {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['gsap', 'gsap/ScrollTrigger']
    },
    ssr: {
        noExternal: ['gsap']
    }
};