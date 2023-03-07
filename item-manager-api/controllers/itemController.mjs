import Item from '../models/Item.mjs';
import asyncWrapper from '../middleware/async-wrapper.mjs';
import { createCustomError } from '../errors/custom-error.mjs';

const getAllItems = asyncWrapper(async (req, res) => {
  const items = await Item.find({});
  res.status(200).json({ items });
});

const createItem = asyncWrapper(async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json({ item });
});

const getItem = asyncWrapper(async (req, res, next) => {
  const { id: itemID } = req.params;
  const item = await Item.findOne({ _id: itemID });
  if (!item) {
    return next(createCustomError(`No item with id : ${itemID}`, 404));
  }
  res.status(200).json({ item: item });
});

const updateItem = asyncWrapper(async (req, res) => {
  const { id: itemID } = req.params;
  const item = await Item.findOneAndUpdate({ _id: itemID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    return next(createCustomError(`No item with id : ${itemID}`, 404));
  }
  return res.status(200).json({ item: item });
});

const deleteItem = asyncWrapper(async (req, res) => {
  const { id: itemID } = req.params;
  const item = await Item.findOneAndDelete({ _id: itemID });
  if (!item) {
    return next(createCustomError(`No item with id : ${itemID}`, 404));
  }
  res.status(200).json({ item: item });
});

const getItemsCount = asyncWrapper(async (req, res) => {
  const numberOfItems = await Item.countDocuments({});
  res.status(200).json({ numberOfItems: numberOfItems });
});

const getPricesTotalSum = asyncWrapper(async (req, res) => {
  const totalPrice = await Item.aggregate([
    { $group: { _id: null, total: { $sum: '$price' } } },
  ]);
  res.status(200).json({ SumTotalPrices: totalPrice[0].total });
});

export default {
  getAllItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
  getItemsCount,
  getPricesTotalSum,
};
