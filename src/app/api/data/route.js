export async function GET(request){
    const data = {
        name: "Alex",
        age: 23
    }
    return new Response(JSON.stringify(data))
}

export async function POST(request){
    return new Response(request.body)
}