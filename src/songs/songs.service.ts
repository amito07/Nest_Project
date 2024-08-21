import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs = []

    getAllSongs() {
        return this.songs;
    }

    getOneSong(id: number) {
        console.log("number", id)
        return this.songs[id];
    }

    createSong(song: string) {
        this.songs.push(song);
        return `${song} uploaded`;
    }

    updateSong(id: number, song: string) {
        this.songs[id] = song;
        return `${song} updated`;
    }

    deleteSong(id: number) {
        this.songs.splice(id, 1);
        return `Song deleted`;
    }



}
