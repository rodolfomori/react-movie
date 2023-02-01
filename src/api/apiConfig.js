const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2a51b144b0d9fcbeadf79af09bd3e1f2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;