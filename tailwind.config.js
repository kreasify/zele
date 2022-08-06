module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -200%, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'none'
          },
        },
      }
    }
  },
  plugins: [],
}