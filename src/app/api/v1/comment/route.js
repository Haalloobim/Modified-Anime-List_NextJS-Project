import prisma from "@/services/prisma"

const GET = async(request) => {
    return Response.json({data: 'This is a GET request'})
}

const POST = async(request) => {
    const { mal_id, anime_title, user_name, user_email, comment } = await request.json()
    const data = {
        mal_id, 
        anime_title, 
        user_name, 
        user_email, 
        comment 
    }
    const createComment = await prisma.comment.create({ data })

    if(!createComment){ 
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
            data: createComment 
        })
    }
}

export { GET, POST }