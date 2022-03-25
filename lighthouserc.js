module.exports = {
  ci: {
    collect: {
      headful: true,
      // settings: {
      //   emulatedFormFactor: 'desktop',
      //   throttling: { rttMs: 40, throughputKbps: 10 * 1024, cpuSlowdownMultiplier: 1 },
      // },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
};
