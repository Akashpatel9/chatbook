import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUsers'

const getConversationId = async (
    conversationId : string
) => {
    try{
        const currentUser = await getCurrentUser();

        if(!currentUser?.email){
            return null ;
        }

        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include:{
                users: true
            }
        })

        return conversation;
    }
    catch(err:any){
        return null;
    }
}

export default getConversationId;