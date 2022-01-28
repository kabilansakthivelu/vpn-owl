module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
         'image': "url('data:image/png;base64,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')",
        },
    },
  },
  plugins: [],
}