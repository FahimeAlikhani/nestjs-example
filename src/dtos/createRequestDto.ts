import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateRequestDto {
  id: number;  
  
  @IsString()
  @IsNotEmpty()
  full_name: String  ;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @Matches(/^\+[1-9]\d{1,14}$/)
  phone_number : String ; 
  
  @IsString()
  @IsNotEmpty()
  email: String;

  @IsNotEmpty()
  message : String;

  @IsNotEmpty()
  create_date : Date ;            
}

export class requestData {
  id : 1;                   
  full_name: 'fahime';                              
  phone_number: '09129035123'; 
  email :'info@gmail.com';
  message: 'message';                
  create_date: '20211023';                     
} 