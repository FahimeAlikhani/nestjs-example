import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGaleryDto {
  id: number;  
  
  @IsString()
  @IsNotEmpty()
  title: String;

  @IsString()
  @IsNotEmpty()
  description : String;

  @IsString()
  @IsNotEmpty()
  picture_add : String;

  @IsNotEmpty()
  create_date : Date ;

  @IsNotEmpty()
  update_date : Date ;             
}

export class galeryData {
  id : 1;                   
  title: 'title';                              
  description: 'description'; 
  picture_add:'picture_add';               
  create_date: '20211023';  
  update_date: '20211023';                   
} 
