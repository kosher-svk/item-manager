import { Router } from 'express';
const router = Router();

import itemController from '../controllers/itemController.mjs';

router.route('/count').get(itemController.getItemsCount);
router.route('/sum_total_price').get(itemController.getPricesTotalSum);
router
  .route('/')
  .get(itemController.getAllItems)
  .post(itemController.createItem);
router
  .route('/:id')
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

export default router;
