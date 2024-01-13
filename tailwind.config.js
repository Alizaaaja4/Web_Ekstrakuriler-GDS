/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f0fdfa',
        'secondary': '#ecfeff',
        'button1': '#2D9596',
        'button2': '#12486B',
        'button3': '#94a3b8',
        'visual': '#053B50',
        'visual2': "#65a30d",
        'visual3': '#38bdf8',

      },
      backgroundImage: {
        'welcome1': "url('/img/bgAdmin.jpg')",
      }
    },
  },
  plugins: [],
}

