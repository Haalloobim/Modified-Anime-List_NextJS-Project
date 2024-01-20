const GET = async(request) => {
    return Response.json({data: 'This is a GET request'})
}

const POST = async(request) => {
    const { mal_id, user_email, user_name } = await request.json()
    return Response.json({data: 'This is a POST request'})
}

export { GET, POST }