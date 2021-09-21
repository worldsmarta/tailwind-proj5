module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "banner-col": "#fd6162",
        "mid-col": "#3c3f60",
        "footer-col": "#24242c"
      },

      backgroundImage: {
        'iedbg': "url('/images/illustration-editor-desktop.svg')"
      }
    }
    ,

    container: {
      center: true
    }
  },
  variants: {
    display: ['group-hover'],
    extend: {
    },
  },
  plugins: [],
}
