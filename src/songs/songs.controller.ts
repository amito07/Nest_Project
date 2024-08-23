import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get()
  getAllSongs() {
    return this.songService.getAllSongs();
  }

  @Post()
  createSong() {
    return this.songService.createSong('Sonar Bangla');
  }

  // add http exception error to the server
  @Get(':id')
  getOneSong(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      return this.songService.getOneSong(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  updateSong() {
    return this.songService.updateSong(0, 'GG Bangla');
  }

  @Delete(':id')
  deleteSong() {
    return this.songService.deleteSong(0);
  }
}
