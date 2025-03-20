interface DocsParams{
    params:{
        slug:string 
    }
}

export default function DocsPage({params}:DocsParams){
    const {slug} =params;
    if(slug?.length ==2){
    return (
        <div className="bg-black text-white w-full h-screen flex justify-center items-center">
        <h1>Showing Doc for {slug[0]}'s {slug[1]} </h1>
    </div>

    )}

     else if(slug?.length ==1 ){
        return (
            <div className="bg-black text-white w-full h-screen flex justify-center items-center">
            <h1>Showing Doc for {slug[0]} </h1>
        </div>
        )
    }

    return (
        <div className="bg-black text-white w-full h-screen flex justify-center items-center">
        <h1>There is No Slug So Default Page  Or More Than Two Slug </h1>
    </div>
    )



}