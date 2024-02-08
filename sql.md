## Exercise 7 — Tasks

- Find the list of all buildings that have employees

```sql
SELECT DISTINCT Building FROM Employees;
```

- Find the list of all buildings and their capacity

```sql
SELECT  Building_name, capacity FROM Buildings;
```

- List all buildings and the distinct employee roles in each building (including empty buildings)

```sql
select distinct building_name, role from buildings
left join employees
on building = building_name

```

## Exercise 8:

- Find the name and role of all employees who have not been assigned to a building

```sql
SELECT name, role FROM employees where building IS NULL;
```

- Find the names of the buildings that hold no employees

```sql
SELECT * FROM buildings LEFT JOIN employees
on Building_name = building
where role is null;
```

## Exercise 9:

Exercise 9 — Tasks

- List all movies and their combined sales in millions of dollars

```sql
SELECT title, (International_sales + Domestic_sales)/1000000 AS combined_sales FROM movies inner join BoxOffice on id = movie_id;
```

- List all movies and their ratings in percent

```sql
SELECT title, rating*10 AS combined_sales FROM movies inner join BoxOffice on id = movie_id;
```

- List all movies that were released on even number years

```sql

SELECT title, Year  FROM movies inner join BoxOffice on id = movie_id
where Year%2 =0;
```

- when we need to expand the dta, we us egroup by

## eXERCISE 10:

- Find the longest time that an employee has been at the studio

```sql
SELECT max(Years_employed) FROM employees ;
```

- For each role, find the average number of years employed by employees in that role

```sql
select role, avg(years_employed) from employees group by role
```

- Find the total number of employee years worked in each building

```sql
select *, sum(years_employed) from employees group by building
```

## exercise 11

- Find the number of Artists in the studio (without a HAVING clause)

```sql
select *, count() from employees where role = "Artist"
```

- Find the number of Employees of each role in the studio

```sql
select *, count() from employees group by role
```

- Find the total number of years employed by all Engineers

```sql
select *, sum(years_employed) from employees group by role having role ="Engineer"

select *, sum(years_employed) from employees group by role having role ="Engineer"

```

## Exercise 12:

- Find the number of movies each director has directed

```

```

- Find the total domestic and international sales that can be attributed to each director

```sql
select director, sum(international_sales + domestic_sales) as total_sales
from movies inner join BoxOffice where id = movie_id group by director
```

## Exercise 13:

- Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.

```sql
insert into BoxOffice values(15, 8.7, 340000000, 270000000)
```

- Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)

```
insert into movies values(15, "Toy Story 4","Mano",2024,120);

```

## Exercise 14:

- The director for A Bug's Life is incorrect, it was actually directed by John Lasseter

```sql
update movies set director = "John Lasseter" where title = "A Bug's Life"
```

- The year that Toy Story 2 was released is incorrect, it was actually released in 1999

```sql
update movies set year = "1999" where title = "Toy Story 2"
```

- Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich

```sql
update movies set title = "Toy Story 3",director = "Lee Unkrich" where id = "11"
```

## Exercise 15:

- This database is getting too big, lets remove all movies that were released before 2005.

```sql
delete FROM movies where year < 2005;
```

- Andrew Stanton has also left the studio, so please remove all movies directed by him.

```sql
delete FROM movies where director = "Andrew Stanton";
```

## Exercise 17

- Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.

```sql
alter table movies add Aspect_ratio float
```

- Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.

```sql
alter table movies add Language text default english
```

- float - 3
- double -6
- real - 12
- character : specify the size
- varchar: few lines
- text: more than few lines
- blob : store binary data
  cypress : used for automation test cases

- validation on frontend and backend is for not messing up the database by the users
- database validation are there for us to not mess the database.
