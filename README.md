# MongoDB Aggregation Error: $avg operator requires numeric input

This repository demonstrates a common error encountered when using the `$avg` operator in MongoDB aggregations.  The `$avg` operator requires numeric input. If your field contains non-numeric values (e.g., strings, null), the aggregation will fail.

## Bug Description

The provided code attempts to calculate the average age of users grouped by city. However, if the `age` field contains non-numeric values, the `$avg` operator will throw an error. 

## Solution

The solution involves data cleaning before performing the aggregation to ensure that the `age` field contains only valid numeric values.  The solution code shows one approach using a separate pipeline stage to filter out problematic entries.