const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};
const module = {
    id: 1, name: "Module name",
    description: "Module description",
    course: "Module course"
};
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    
    
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = Number(newScore);
        res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        assignment.completed = newCompleted === "true";
        res.json(assignment);
    });

    // module
    app.get("/lab5/module/:fieldToEdit/:newValue", (req, res) => {
        const { fieldToEdit, newValue } = req.params;
        module[fieldToEdit] = newValue;
        res.json(module);
    });
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
};
