import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { PracticeService } from './practice.service';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { version } from 'os';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  // add status code
  // add custom headers
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  create(@Body() createPracticeDto: CreatePracticeDto) {
    return this.practiceService.create(createPracticeDto);
  }

  // redirect
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  //Route wildcards
  @Get('ab*cd')
  findWildcard() {
    return 'This route uses a wildcard';
  }

  @Get()
  findAll() {
    return this.practiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePracticeDto: UpdatePracticeDto,
  ) {
    return this.practiceService.update(+id, updatePracticeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceService.remove(+id);
  }
}
