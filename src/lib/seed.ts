import { Redis } from "@upstash/redis";
import { countryList } from "./country";

const redis = new Redis({
  url: "https://current-satyr-36012.upstash.io",
  token:
    "AYysASQgZGQ1MTAzZjEtODUyNy00ZGZiLTgyM2EtMmI4MGI3M2Y5MTliMWQxYWMyNjQ3MmIwNDc5ZmIzOGI4Y2JiNzM1OTlkZjc=",
});

countryList.forEach((country) => {
  const term = country.toUpperCase();
  const terms: { score: 0; member: string }[] = [];

  for (let i = 0; i <= term.length; i++) {
    terms.push({ score: 0, member: term.substring(0, i) });
  }
  terms.push({ score: 0, member: term + "*" });

  const populateDb = async () => {
    // @ts-expect-error
    await redis.zadd("terms", ...terms);
  };

  populateDb();
});
