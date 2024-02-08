## 1. Cache-Aside

The Cache-aside approach is one of the most commonly used caching strategies.

## Approach

1. Whenever a requests comes to the application, it firsts checks the requested data in the cache.

2. If yes, the cache returns the data.

3. Otherwise, the application queries the data from the database, updates the cache on the way back and then returns the data.

Advantages/Disadvantages

- Each cache miss results in three trips which might lead to a noticeable delay.
- Data might become stale if someone updates the database without writing to the cache. (Hence, Cache-aside is usually used alongside other strategies).

## 2. Read-through

In read-through approach, the cache makes the fetch/query call to the database and then updates itself and returns the requested data to the end-user.

## Approach

When a query reaches the application, the application queries the data from the cache.
If the data is not in the cache, the cache queries the data from the database and updates itself.
The cache returns the data to the end-user.

Advantages/Disadvantages

- Ease Application level Code: Read-through strategy ensures that the data fetching logic is shifted to the cache which simplifies the application code.
- Better read scalability. When a key expires in Cache-aside, concurrent requests might query the same data from the database multiple times.
- In Read-through, the cache ensures that only 1 query is sent to the database.

## 3. Refresh-ahead

The Refresh-ahead strategy, what it does is , it refreshes the cache data before its expiration time,it is done for hot-data, the data we expect to be requested in the near future.

## Approach

- Supposed the cached data’s expiration time is 60 seconds and the refresh-ahead factor is 0.5.
- If the cached object is accessed after 60 seconds, Coherence will perform a synchronous read from the cache store to refresh its value.
- If the cached data is accessed after 30 seconds, said 35th second, the cache returns the data and asynchronously refreshes the data.
