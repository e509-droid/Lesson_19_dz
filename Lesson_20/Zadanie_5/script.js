const playlist = {
    name: "My Playlist",
    songs: [
        { title: "Drive By", artist: "Train", duration: "03:16" },
        { title: "Can't Stop The Feeling", artist: "Justin Timberlake", duration: "04:16" },
        { title: "Change", artist: "Taylor Swift", duration: "04:38" }
    ]
};

console.log(`Плейлист: ${playlist.name}`);
console.log("Список песен:");
playlist.songs.forEach(song => {
    console.log(`Название: "${song.title}", Исполнитель: ${song.artist}, Длительность: ${song.duration}`);
});