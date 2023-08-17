interface CommentProps{
 
    number : number | undefined,
}

export default function CommentNumber({number} : CommentProps){
    return(
        <>
            {number}개의 댓글
        </>
    )
}