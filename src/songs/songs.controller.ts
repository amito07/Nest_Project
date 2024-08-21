import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService){}
    @Get()
    getAllSongs() {
        return this.songService.getAllSongs();
    }

    @Post()
    createSong() {
        return this.songService.createSong("Sonar Bangla");
    }

    @Get(':id')
    getOneSong() {
        return this.songService.getOneSong(0);
    }

    @Put(':id')
    updateSong() {
        return this.songService.updateSong(0, "GG Bangla");
    }

    @Delete(':id')
    deleteSong() {
        return this.songService.deleteSong(0);
    }
}
