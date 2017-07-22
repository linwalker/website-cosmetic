import Router from 'koa-router';
import indexCtrl from '../controllers/indexCtrl';
import serverCtrl from '../controllers/serverCtrl';

const router = new Router();

router.prefix('/api');
router.get('/server', serverCtrl);

export default router;