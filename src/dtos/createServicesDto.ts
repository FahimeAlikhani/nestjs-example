import { IsString, IsNotEmpty } from 'class-validator';

export class CreateServicesDto {
  id: number;  
  
  @IsString()
  @IsNotEmpty()
  title: String;

  @IsString()
  @IsNotEmpty()
  description : String;

  @IsNotEmpty()
  create_date : Date ;

  @IsNotEmpty()
  update_date : Date ;             
}

export class servicesData {
  id : 1;                   
  title: 'title';                              
  description: 'description';                
  create_date: '20211023';  
  update_date: '20211023';                   
} 
