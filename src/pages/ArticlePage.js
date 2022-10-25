import { useParams } from "react-router-dom";
import articles from './article-content';

const ArticlePage = () => {
    const params = useParams();
    const articleId = params.articleId;
    //or {articleId} = params;
    //or take out 4 and 5 and const {articleId} = useParams();
    const article = articles.find
    return(
        <h1>This is the article page for the article with id: {articleId}</h1>
    )
}
export default ArticlePage;