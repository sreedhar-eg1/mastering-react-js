import { useRouter } from "next/router";

export default function DetailPage() {
  const { query } = useRouter();
  const newsId = query.newsid;
  return <h2>Detail page : {newsId}</h2>;
}
