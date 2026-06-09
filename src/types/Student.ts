export interface Student {
    dni: string;
    surname: string;
    lastName: string;
}

export interface RegularStudent extends Student {
    attendance: number;  // is a percentage, from 0 to 100
    grades: number[];
}

export interface NonRegularStudent extends Student {
    grade: number;
}

export type StudentType = RegularStudent | NonRegularStudent;
