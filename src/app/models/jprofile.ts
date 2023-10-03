import { Owner } from "./owner";

export class Jprofile {
    id: string = '';
	city: string = '';
	skills: string = '';
	introduction: string = '';
    
    ownerId: string = '';
	photoContentType : string = '';
	photoData: string = '';
    owner?: Owner = new Owner();
}
