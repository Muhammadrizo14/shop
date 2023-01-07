import {IsNotEmpty} from "class-validator";

export class ProductEntity {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    image: string;
    @IsNotEmpty()
    price: string;
    @IsNotEmpty()
    sale: string;
    @IsNotEmpty()
    brend: string;
    @IsNotEmpty()
    sex: string;
    @IsNotEmpty()
    made: string;
    @IsNotEmpty()
    sell: string;
    @IsNotEmpty()
    season: string;
    @IsNotEmpty()
    createdAt: Date;
}
