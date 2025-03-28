"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client.user.create({
        data: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    });
    res.json(user);
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield client.user.findFirst({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
        if (!user) {
            res.status(404).json({ message: "Invalid email or password" });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
}));
app.post('/createproject', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, userId } = req.body;
    try {
        const project = yield client.project.create({
            data: {
                name,
                userId
            }
        });
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
}));
app.post('/:projectId/folders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const { projectId } = req.params;
    try {
        const folder = yield client.folder.create({
            data: {
                name,
                projectId
            }
        });
        res.json(folder);
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
}));
app.post('/projects/:folderId/files', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, content } = req.body;
    const { folderId } = req.params;
    try {
        const file = yield client.file.create({
            data: {
                name,
                content,
                folderId
            }
        });
        res.json(file);
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
}));
app.post('/user/code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, language, code } = req.body;
    try {
        // Find the user by username to get the correct userId
        const user = yield client.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            // Create the code entry with the correct userId
            const userCode = yield client.code.create({
                data: {
                    userId: user.id, // Use the user's UUID, not username
                    language,
                    sourceCode: code
                }
            });
            res.json(userCode);
        }
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
}));
app.post('/validate-google-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield client.user.findFirst({
            where: { email }
        });
        if (!user) {
            res.status(401).json({ message: "Google account not registered. Please sign up first." });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
}));
app.listen(3000);
