module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				anton: ["Anton", "sans-serif"],
				nunito: ["Nunito Sans", "sans-serif"],
				bebas: ["Bebas Neue", "cursive"],
			},
			backgroundImage: {
				reactbg: 'url("./components/assets/react.png")',
			},
			colors: {
				beige: "#FFDCA8",
				moss: "#97aa52",
				ash: "#b0cdaf",
			},
		},
	},
	plugins: [],
};
