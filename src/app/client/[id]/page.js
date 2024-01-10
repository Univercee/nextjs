import Link from 'next/link'

export async function generateMetadata({params, searchParams}){
    return {
        title: params.id,
        description: "The page id is: "+params.id
    }
}

export default function ClientID({params}){
    return (
        <div>
            <h1>Client id: <span className="clientid">{params.id}</span></h1>
            <Link href='/'>На главную</Link>
        </div>
    )
   }