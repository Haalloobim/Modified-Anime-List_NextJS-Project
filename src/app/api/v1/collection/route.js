import prisma from "@/services/prisma"

const GET = async(request) => {
    return Response.json({data: 'This is a GET request'})
}

const POST = async(request) => {
    const { mal_id, user_email, user_name, anime_image, anime_title } = await request.json()
    const data = {
        mal_id,
        user_email,
        user_name,
        anime_image, 
        anime_title 
    }
    const createCollection = await prisma.collection.create({ data })

    if(!createCollection){ 
        return Response.json({
            status: 500,
            isCreated: false,
            error: 'Error creating collection'
        })
    }
    else {
        return Response.json({
            status: 200,
            isCreated: true,
            data: createCollection
        })
    }
}

export { GET, POST }