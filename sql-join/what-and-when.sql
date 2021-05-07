select "f"."releaseYear",
       "c"."name",
       "fc"."categoryId"

from "filmCategory" as "fc"
join "films" as "f" using("filmId")
join "categories" as "c" using("categoryId")
where "f"."title"= 'Boogie Amelie'
