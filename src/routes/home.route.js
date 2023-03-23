import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to my API'
    });
});
router.get('/health', (req, res) => {
    return res.send('OK');
});
export default router;
