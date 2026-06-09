import Course from "@/types/Course";

function useCourseUtils() {
    function getStudentsFinalGrade(course: Course): number[] {
        throw new Error("Method not implemented.");
    }

    return {
        getStudentsFinalGrade
    }
}

export default  useCourseUtils;
