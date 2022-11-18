

export default async function Layout(path:string){
    const com =  import(path)
    debugger
    return (
        <>
            <com />
        </>
    )
}