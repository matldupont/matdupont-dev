module.exports = {
  // darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-gradient':
          'radial-gradient(farthest-corner at top left, rgba(208, 133, 39, 0.8), rgba(208, 133, 39, 0.3), rgba(208, 133, 39, 0.1), transparent 45%), radial-gradient(farthest-corner at top right, rgba(11,20,25, 1), transparent ), radial-gradient(farthest-side at bottom right, rgba(94, 126,137, 0.9), rgba(94, 126,137, 0.6), rgba(94, 126,137, 0.3), transparent )',
        'homepage-image-dark': 'url(./assets/iceland-dark.jpeg)',
        'homepage-image-light': 'url(./assets/iceland-light.jpeg)',
      },
    },
  },
  plugins: [],
};
