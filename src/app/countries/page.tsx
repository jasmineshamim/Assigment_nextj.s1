 import Link from "next/link";
function Countries(){
    return(
        <div>
            <h1>Countries Information</h1>
            <ul>
                <li><Link href="/countries/canada">Canada</Link></li>
                <li><Link href="/countries/uk">UK</Link></li>
                <li><Link href="/countries/england">England</Link></li>
                <li><Link href="/countries/australia">Australia</Link></li>
                <li><Link href="/countries/thailand">Thailand</Link></li>
            </ul>
        </div>
   )
}
export default Countries;
