/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      'Holispay':'Holispay',

      'PoppinsExtraLight':'PoppinsExtraLight',
      'PoppinsLight':'PoppinsLight',
      'PoppinsMedium':'PoppinsMedium',
      'PoppinsRegular':'PoppinsRegular',
      'PoppinsSemiBold':'PoppinsSemiBold',
      'PoppinsSemiBlack':'PoppinsSemiBlack',
      'PoppinsSemiExtraBold':'PoppinsSemiExtraBold',
      'PoppinsThin':'PoppinsThin' 
    },
    extend: {
      backgroundImage: {
        'aboutSectionGandomLogo': "url('/landing/aboutSectionGandomLogo.svg')",
      }, 
      colors: {
        'g21': '#212121',
        'g30': '#303030',
        'g31': '#313131',
        'g3c': '#3c3c3c',
        'g4c': '#4c4c4c',
        'g70': '#707070',
        'g8': '#888888',
        'g92': '#929292',
        'g96': '#969696',
        'gb0': '#b0b0b0', 
        'ge4': '#e4e4e4',
        'gec': '#ececec',
        'gbc': '#BCBCBC',
        'gf5': '#f5f5f5',
        'gf': '#ffffff',
        'g6f':'#6F6F6F',
        'g3':'#333333',
        'gd9':'#D9D9D9',
        'gYellow': '#ffd101',
        'gDarkYellow': '#FAA71D',
        'gRed': '#faa71d',
        'gOrang': '#dd4141',
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
