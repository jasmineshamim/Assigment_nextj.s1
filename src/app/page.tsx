import Link from "next/link";
function Home(){
    return(
        <div>
        <h1>Home Page</h1>
        <Link href="/countries">Countries Information</Link>
        </div>
    )
}
export default Home;