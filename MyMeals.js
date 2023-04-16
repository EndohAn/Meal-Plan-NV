import{AiFillEdit,AiFillDelete}from "react-icons/ai"

export const MyMeals =({text,updatingInInput,deleteMeal})=>{
    return(
        <div>
            <p>My meals</p>
            <AiFillEdit onClick ={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick ={deleteMeal}></AiFillDelete>
        </div>
    )
}