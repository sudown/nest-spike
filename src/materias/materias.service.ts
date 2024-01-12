import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MateriasRepository } from 'src/prisma/repositories/materias.repository';

@Injectable()
export class MateriasService {
  constructor(private materiasRepository: MateriasRepository) {}
  async create(createMateriaDto: CreateMateriaDto) {
    return this.materiasRepository.create({
      Nome: createMateriaDto.Nome,
      Tipo: createMateriaDto.Tipo,
      URL: createMateriaDto.URL,
      aula: {
        connect: {
          Id: createMateriaDto.fk_Aula_Id,
        },
      },
    });
  }

  async findAll() {
    return this.materiasRepository.findAll();
  }

  async getMateriaisByAulaId(fk_aula_id: number) {
    return this.materiasRepository.getMateriaisByAulaId(fk_aula_id);
  }

  async findOne(id: number) {
    return this.materiasRepository.findOne(id);
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return this.materiasRepository.update(id, {
      Nome: updateMateriaDto.Nome,
      Tipo: updateMateriaDto.Tipo,
      URL: updateMateriaDto.URL,
    });
  }

  async remove(id: number) {
    return this.materiasRepository.delete(id);
  }
}
