interface ReviewParams{
    params:{
        reviewId :string
    }
}

export default function reviewIdPage({params}: ReviewParams){
    const {reviewId} =params;
    return (
        <div className="bg-black text-white w-full h-screen flex justify-center items-center">
        <h1>Review  : {reviewId}</h1>
    </div>
    )
}