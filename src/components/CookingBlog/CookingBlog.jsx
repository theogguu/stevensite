import Card from "../Card/Card"
import CardList from "../CardList/CardList"
import { cardContents } from "./cardContents"
const CookingBlog = () => {
    
    return (
    <CardList cards={cardContents} />
    )
}

export default CookingBlog