export async function getPosts(){
    const res = await fetch(`${process.env.API_URL}/posts?populate=image`);
    const result = await res.json()
    return result
}