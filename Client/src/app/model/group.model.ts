import { Member } from "./member.model";

export class Group {
    ClassId: number;
    ClassName: String;
    AcademyName: String;
    TeacherName: String;
    TeacherPhone: String;
    TeacherEmail: String;
    ClassSize: String;
    Image: String;
    Description: String ;
    Members: Array<Member>;
}
