import { PrismaClient } from '@prisma/client';
import express,{Request,Response} from 'express';

const client = new PrismaClient();
const app = express();

//middleware
app.use(express.json());
app.post('/signup', async (req, res) => {
    const user = await client.user.create({
        data: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    });
    res.json(user);
})
app.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await client.user.findFirst({
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
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
});
app.post('/createproject',async (req,res)=>{
    const {name,userId}= req.body;
    try{
        const project = await client.project.create({
            data:{
                name,
                userId
            }
        });
        res.json(project);
    }
    catch(error){
        res.status(400).json({message:"Something went wrong",error});
    }
})
app.post('/:projectId/folders',async (req ,res)=>{
    const {name}= req.body;
    const {projectId}= req.params;
    try{
        const folder = await client.folder.create({
            data:{
                name,
                projectId
            }
        });
        res.json(folder);
    }
    catch(error){
        res.status(400).json({message:"Something went wrong",error});
    }
})

app.post('/projects/:folderId/files',async (req ,res)=>{
    const {name,content}= req.body;
    const {folderId}= req.params;
    try{
        const file = await client.file.create({
            data:{
                name,
                content,
                folderId
            }
        });
        res.json(file);
    }
    catch(error){
        res.status(400).json({message:"Something went wrong",error});
    }
})
app.post('/user/code', async (req: Request, res: Response): Promise<void> => {
    const { userId, language, code } = req.body;

    try {
        // Find the user by username to get the correct userId
        const user = await client.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        else{

            
            // Create the code entry with the correct userId
            const userCode = await client.code.create({
            data: {
                userId: user.id, // Use the user's UUID, not username
                language,
                sourceCode: code
            }
        });   
        res.json(userCode);
    }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
});

app.post('/validate-google-user', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        const user = await client.user.findFirst({
            where: { email }
        });

        if (!user) {
            res.status(401).json({ message: "Google account not registered. Please sign up first." });
            return;
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
});
app.post('/user/createtemplate',async (req ,res)=>{
    const template = await client.
})

app.listen(3000);

