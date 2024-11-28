module.exports = {
    darkMode: ["class"],
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Scan src folder for Tailwind classes
    ],
	theme: {
		extend: {
		  colors: {
			primary: '#5E35B1', // Main color from Figma
			secondary: '#D32F2F', // Accent color
			lightGray: '#F5F5F5', // Background Color
			darkGray: '#212121', // Text Color
		  },
		  fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		  },
		  screens: {
			sm: '640px',
			lg: '1024px',
		  },
		},
	  },
	  plugins: [],
	  };  