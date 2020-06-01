## Server API

### Get reviews info
  * GET `/api/products/:productId/reviews`

**Path Parameters:**
  * `productId` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "productId": "Number",
      "userId": "Number",
      "productName": "String",
      "ratingOverall": "Number",
      "isRecommended": "Boolean",
      "ratingSize": "Number",
      "ratingWidth": "Number",
      "ratingComfort": "Number",
      "ratingQuality": "Number",
      "isHelpful": "Number",
      "notHelpful": "Number",
      "createdAt": "Date",
      "userName": "String",
      "email": "String",
      "userVerified" : "Boolean",
      "subject" :"String",
      "description": "String", 
      "reviewId": "Number",
      "category": "String",
      "reviews": "Array",
    }
```

### Add review
  * POST `/api/products/reviews`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
      {
      "productId": "Number",
      "userId": "Number",
      "productName": "String",
      "ratingOverall": "Number",
      "isRecommended": "Boolean",
      "ratingSize": "Number",
      "ratingWidth": "Number",
      "ratingComfort": "Number",
      "ratingQuality": "Number",
      "createdAt": "Date",
      "userName": "String",
      "email": "String",
      "userVerified" : "Boolean",
      "subject" :"String",
      "description": "String", 
    }
```

### Update review info
  * PATCH `/api/products/:productId/reviews/:reviewId`

**Path Parameters:**
  * `productId` product id
  * `reviewId` review id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
{
      "productId": "Number",
      "userId": "Number",
      "productName": "String",
      "ratingOverall": "Number",
      "isRecommended": "Boolean",
      "ratingSize": "Number",
      "ratingWidth": "Number",
      "ratingComfort": "Number",
      "ratingQuality": "Number",
      "createdAt": "Date",
      "userName": "String",
      "email": "String",
      "userVerified" : "Boolean",
      "subject" :"String",
      "description": "String", 
    }
```


### Delete review
  * DELETE `/api/products/:productId/reviews/:reviewId`

**Path Parameters:**
  * `reviewId` review id
  * `productId` review id

**Success Status Code:** `204`