import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findAllEnrollments() {
    return Database.enrollments;
}
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
}
export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
    );
    return { status: "success" };
}
export function findUsersEnrolledInCourse(courseId) {
    const { users, enrollments } = Database;
    return users.filter((user) =>
        enrollments.some(
            (enrollment) =>
                enrollment.user === user._id && enrollment.course === courseId
        )
    );
}