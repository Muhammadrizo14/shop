import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards, Res
} from '@nestjs/common';
import { join } from 'path';
import { UploadService } from './upload.service';
import {UploadEntity} from "./entities/upload.entity";
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Response } from 'express';
import { multerOptions } from "../util/uploadConfig";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }


  @Post()
  @UseInterceptors(
    FileInterceptor('file', multerOptions)
  )
  uploadFile(@UploadedFile() file: UploadEntity) {
    return this.uploadService.create(file)
  }
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }

  @Get('file/:fileName')
  async getFileByName(@Param('fileName') fileName, @Res() res: Response) {
    const file = await this.uploadService.getFileByName(fileName)
    file.pipe(res)
  }


  @Get('fayl/:id')
  async getFileById(@Param('id') id, @Res() res: Response) {
    id = Math.floor(id)
    const file = await this.uploadService.getFileByFayl(id)
    file.pipe(res)

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
