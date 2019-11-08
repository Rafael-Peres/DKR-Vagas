import {
  Table,
  PrimaryKey,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Unique,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Candidate from './candidate.model';

@Table({
  tableName: 'curriculums',
  underscored: true,
  timestamps: true,
})
export default class Curriculum extends Model<Curriculum> {
  @PrimaryKey
  @Column({ field: 'id' })
  public id: number;

  @Unique
  @ForeignKey(() => Candidate)
  @Column({ field: 'candidate_id' })
  public candidateId: number;

  @BelongsTo(() => Candidate)
  public candidate: Candidate;

  @Column
  public filename: string;

  @Column
  public extension: string;

  @Column
  public path: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  public createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  public updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  public deletedAt: Date;
}