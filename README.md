# item-manager

Setup for startup app:

1. clone repository to local storage
2. get into `item-manager-api`
3. create `.env` with variables `PORT_APP` and `MONGO_URI_LOCAL`
   example: `PORT_APP=5000`, `MONGO_URI_LOCAL=mongodb://localhost:27017/12-ITEMS-MANAGER`
4. in folder `item-manager-api` run `npm install` and `npm start`
5. If successful startup console messages are `Connected to db ...` and `Server is listening on port 5000`
6. here is also postman collection `Item-Manager.postman_collection.json`

Endpoints for local server example `http://localhost:5000`:

- createItem request POST `/api/v1/items` - body: {
  "name": "Book",
  "price": 50,
  "priceVAT": 55,
  "code": "123hd67890"
  }
- getAllItems request GET `/api/v1/items`
- getOneItem request GET `/api/v1/items/item_id`
- updateItem request PATCH `/api/v1/items/item_id` - body: {
  "name": "Book",
  "price": 200,
  "priceVAT": 200,
  }
- deleteItem request DELETE `/api/v1/items/item_id`
- getCount request GET `/api/v1/items/count`
- getTotalSum request GET `/api/v1/items/sum_total_price`
