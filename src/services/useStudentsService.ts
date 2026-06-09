import { Student } from "@/types/Student";

function useStudentsService() {
     async function getStudents() : Promise<Student[]> {
        // this method mimics a fetch call to an API endpoint

        return new Promise((resolve) => {
            setTimeout(() => {
                const response: Student[] = [
                    {
                        dni: "12345678A",
                        surname: "Alice",
                        lastName: "Anderson",
                    },
                    {
                        dni: "12345678B",
                        surname: "Bob",
                        lastName: "Bobson",
                    },
                    {
                        dni: "12345678C",
                        surname: "Caroline",
                        lastName: "Carroll",
                    },
                    {
                        dni: "12345678D",
                        surname: "Dario",
                        lastName: "Diaz",
                    },
                    {
                        dni: "12345678E",
                        surname: "Eve",
                        lastName: "Evans",
                    },
                ];

                resolve(response);
            }, 1000);
        });
    };

    return {
        getStudents
    }
};

export default useStudentsService;
