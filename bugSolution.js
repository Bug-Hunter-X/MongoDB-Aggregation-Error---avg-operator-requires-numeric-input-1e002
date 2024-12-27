```javascript
db.users.aggregate([
  {
    $match: { age: { $type: "number" } } //Filter out non-numeric age values
  },
  {
    $match: { age: { $gt: 25 } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  }
]);
```
This revised aggregation pipeline first filters the documents to include only those where the `age` field is a number.  This prevents the `$avg` operator from encountering non-numeric values and avoids the error.