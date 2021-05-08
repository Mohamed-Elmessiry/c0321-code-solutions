select "c"."firstName",
       "c"."lastName",
       "p"."amount"

 from "payments" as "p"
 join "customers" as "c" using("customerId")
 order by "amount" DESC
 limit 10
