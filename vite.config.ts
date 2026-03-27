export default defineConfig({
  plugins: [react()],
  base: "/mcazzi/", // 👈 هذا هو الحل
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
