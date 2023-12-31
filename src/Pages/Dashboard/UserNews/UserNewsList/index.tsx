import { UserNewsCard } from "../UserNewsCard/index.tsx";
import { useContext } from "react";
import { NewsContext } from "../../../../Providers/NewsContexts/NewsContexts.tsx";

export const UserNewsList = () => {
  const { userNewsList } = useContext(NewsContext);

  return (
    <ul>
      {userNewsList.map((news, index) =>
        news.userId ? <UserNewsCard key={index} news={news} /> : null
      )}
      {userNewsList.length > 0 ? null : <p>Você ainda não tem publicações.</p>}
    </ul>
  );
};
