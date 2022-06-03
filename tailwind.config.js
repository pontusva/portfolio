module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				anton: ["Anton", "sans-serif"],
				nunito: ["Nunito Sans", "sans-serif"],
			},
			backgroundImage: {
				reactbg: 'url("./components/assets/react.png")',
			},
		},
	},
	plugins: [],
};
