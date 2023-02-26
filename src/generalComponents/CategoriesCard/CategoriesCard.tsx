import "./CategoriesCardStyle.css"
interface CategoryCardProps{
    icon: any;
    category: string;
    pressed: boolean;
    onClick: () => void;
}
function CategoriesDropDown({icon, category, pressed, onClick}:CategoryCardProps) {

    return(
        <div className={"card "+(pressed ? "clicked" : "")} onClick={onClick}>
            <div className={"icon"}>{icon}</div>
            <p className={"category"}>{category}</p>
        </div>
    );
}


export default CategoriesDropDown;
