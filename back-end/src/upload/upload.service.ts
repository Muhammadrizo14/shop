import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import {join} from 'path';
import {createReadStream} from "fs";
import {PrismaService} from "../prisma/prisma.service";

import * as fs from "fs"
import any = jasmine.any;
import {log} from "util";

const sharp = require('sharp');

@Injectable()
export class UploadService {
  constructor(private prismaService: PrismaService) {}


  create(createUploadDto: CreateUploadDto) {
    if (createUploadDto.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      const file = fs.readFileSync(createUploadDto.path)
      sharp(file).resize(64, 64).toFile(createUploadDto.destination+"/mini_"+createUploadDto.filename);
      createUploadDto.nameMini = "mini_"+createUploadDto.filename
    }
    return this.prismaService.uploadedFile.create({data: createUploadDto})
  }
  

  findAll() {
    return this.prismaService.uploadedFile.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }

  async getFileByName(fileName: string) {
    let file = await this.prismaService.uploadedFile.findUnique({where: {filename: fileName}})
    console.log(file);
    
    if (!file) {  
      file = await this.prismaService.uploadedFile.findUnique({where: {nameMini: fileName}})
    }
    return createReadStream(join(file.path))
  }

  async getFileNameById(id: number) {
    const file = await this.prismaService.uploadedFile.findUnique({where: {id}})
    return createReadStream(join(file.filename));
  }


  async getFileByFayl(id: number) {
    id = Math.floor(id)
    let file = await this.prismaService.uploadedFile.findUnique({where: {id}})
    return createReadStream(join(file.path))
  }
}
