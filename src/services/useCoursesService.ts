import Course from "@/types/Course";

function useCoursesService() {
     async function getCourses() : Promise<Course[]> {
        // this method mimics a fetch call to an API endpoint

        return new Promise((resolve) => {
            setTimeout(() => {
                const response: Course[] = [
                    {
                        id: 1,
                        name: "Introduction to TypeScript",
                        students: [
                            {
                                dni: "12345678A",
                                surname: "Alice",
                                lastName: "Anderson",
                                attendance: 60,
                                grades: [9, 7, 8]
                            },
                            {
                                dni: "12345678B",
                                surname: "Bob",
                                lastName: "Bobson",
                                attendance: 80,
                                grades: [9, 5, 8]
                            },
                            {
                                dni: "12345678C",
                                surname: "Caroline",
                                lastName: "Carroll",
                                attendance: 80,
                                grades: [8]
                            },
                            {
                                dni: "12345678D",
                                surname: "Dario",
                                lastName: "Diaz",
                                attendance: 80,
                                grades: [8, 6, 7, 6]
                            },
                            {
                                dni: "12345678E",
                                surname: "Eve",
                                lastName: "Evans",
                                grade: 8
                            },
                        ]
                    }
                ];

                resolve(response);
            }, 1000);
        });
    };

    return {
        getCourses
    };
};

export default useCoursesService;
