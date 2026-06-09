import { StudentType } from "./Student";

interface Course {
    id: number;
    name: string;
    students: StudentType[];
}

export default Course;

