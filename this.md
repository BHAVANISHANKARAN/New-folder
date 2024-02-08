# this

- always depends a context
- this will get the context, only when the function is called
- window object contains all global methods

## call

- forcefully giving a context

class : used to mimick the real world thing

- databases are stored in cloud
- cloud: renting pc - advantages: disaster management

- ram is 10000 times faster than harddisk
- ssd is 10 times faster
- cpu is 1000 times faster than ram
- gpu is good at decimal point calculations
- small footprint : pay as u use

types of scaling:

- vertical scaling: more rams and harddisk space
- horizontal scaling: buy more pc, adding pc

- d - dos : to make the server overflow with requests.
- cache: process of keeping a copy
-

assignment:

- what are the different caching strategies.
- when it should be removed from the cache.
- database: special software , frequently ased will have in ram
- querying is easy
- crud , backup, undo
- performance
- redis
- pl/sql - cost high, liscence fee is high

- remove strategies for cache
- when u decide its stale cache:
- breaking down into tables is normalization

## first normal forms:

violation:

- row order ( we shouldnt maintain two data in single column)
- mixing data types

- having a table without primary key
- repeating gruops are not allowed
- data risk:
- update anomaly: inconsistency of data
- delete anomaly:

## second normal form:

- if a column depends on the primary key, then keep the column in the table
- if a column doesnt depends on the primary key, then remove the column in the table and add it in another table.

## third normal form

- every non key attribiute must depend on primary key attribute
-

## fourth normal form

- multivalue dependency on the table must be mmultivalued dependency on the key.

## fifth normal form:

- we should break tables in such a way that it couldn't be broke any further
