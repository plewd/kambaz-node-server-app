import model from "./model.js";
export async function findCoursesForUser(userId) {
    if (typeof userId !== 'string') {
        throw new Error('userId must be a string');
    }

    const enrollments = await model.find(
        { user: userId },
        null,
        { sort: { createdAt: -1 } }
    ).populate("course");
    
    console.log("ENROLLMENTS: " + enrollments);

    if (!enrollments || !Array.isArray(enrollments)) {
        return [];
    }

    return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
    const newEnrollment = { user, course, _id: `${user}-${course}` };
    return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}
