import { useParams } from "react-router-dom";
import articles from './article-content';
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    const params = useParams();
    const articleId = params.articleId;
    //or {articleId} = params;
    //or take out 5 and 6 and const {articleId} = useParams();
    const article = articles.find(article => article.name === articleId)
    if(!article) {
        return <NotFoundPage />

    }
    return(
        // <h1>This is the article page for the article with id: {articleId}</h1>
        <>
        <h1>{article.title}</h1> 

        
        {article.content.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
        ))}
        </>
    )
}
export default ArticlePage;