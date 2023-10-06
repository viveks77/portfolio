/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ClassyVogue": "Classy Vogue",
        "Montserrat": "'Montserrat', sans-serif",
        "Poppins": "'Poppins', sans-serif",
        "Bricolage": "'Bricolage Grotesque', sans-serif",
        "Caudex": "'Caudex', serif",
        "Lato": "'Lato', sans-serif",
        "Rafins": "Rafins",
        "Beathani": "Beathani",
        "SpectralBridge": "Spectral Bridge"
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        foreground: {
          DEFAULT: "var(--foreground)",
          secondary: "var(--foreground-secondary)"
        },
      },
      width: {
        navbar: "var(--navbar-width)"
      },
      fontSize: {
        md: "0.9rem",
        heading: "var(--heading-font-size)"
      }
    },
  },
  plugins: [],
}

