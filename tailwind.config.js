module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary_transparent: 'hsla(10, 80%, 50%, .20)',
        modal_bg: '#D8D7DA',
        text_clr: '#302129',
        desc_clr: '#6B6166',
        'orange': '#E63C19',
        'orangepalido': '#FCE6E3',
        'azul':' #4 423E7',
        'textocarrito':'#404040',
        'orangetextoitem':'#E74423',
        'agregarpedidohover':'#B83014',
        'agregarpedidoaction':'#872612',
        
      },
      boxShadow:{
        "3xl":"0px -1px 5px rgba(0, 0, 0, 0.15)",
        "3sm":"0px -1px 2px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.1)",
        "header":" 0px 16px 24px -18px rgba(0, 0, 0, 0.12)",
        "botondefault":" 0px 1px 3px rgba(0, 0, 0, 0.12)",
        "botonhover":" 0px 3px 8px rgba(0, 0, 0, 0.2)",
        "botonactive":"0px 2px 8px rgba(231, 68, 35, 0.33)",
        "botonfocus":" 1px 1px 3px 2px rgba(68, 35, 231, 0.18)",
        "search":"0px 1px 3px rgba(0, 0, 0, 0.12)",
        "searchhover":"0px 3px 8px rgba(0, 0, 0, 0.2)",
        "searchactive":"0px 2px 3px rgba(0, 0, 0, 0.33)",
        "searchfocus":"1px 1px 3px 2px rgba(68, 35, 231, 0.18)",
        "cartasmobile":"0px -1px 2px rgba(0, 0, 0, 0.05)",
        "cartasmobilehover":"0px 3px 8px rgba(0, 0, 0, 0.2)",
        "cartasdesktop":" 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 4px 6px rgba(0, 0, 0, 0.08)",
        "cartasdektophover":" 0px 3px 8px rgba(0, 0, 0, 0.2)",
      },
      screens:{
        'desktop':"1440px",
        'desktop1920':"1920px",
        'botonatrascarrito':"1200px",
      },
      fontFamily:{
        cera:['Cera-Pro-Bold'],
        ceraregular:['Cera-Pro-Regular'],
        ceramedium:['Cera-Pro-Medium'],
      },
      fontSize:{
        'titulo1280':'24px' ,
      }
  
  },
  plugins: [],
}}