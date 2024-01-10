export const metadata = {
    title: 'Jsonplaceholder data',
    description: 'The data from https://jsonplaceholder.typicode.com/posts',
  }

async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = response.json()
    return result
}

export default async function Data() {
    const posts = await fetchData()
    return (
        <div>
            {posts.map(el => (
                <div key={el.id} className="post">
                    <h4 className="post-title">{el.title}</h4>
                    <p className="post-body">{el.body}</p>
                </div>
            ))}
        </div>
    )
}