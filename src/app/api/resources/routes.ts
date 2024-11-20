import { NextResponse} from 'next/server'
import { AppDataSource } from '@/data-source'
import { Resource } from '@/entity/Resource'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'



export async function GET() {
    try {
        const session = await getSession()
        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                
            )
        }

        const resourceRepository = AppDataSource.getRepository(Resource)
        const resources = await resourceRepository.find({
            relations: ['category', 'admin']
        })

        return NextResponse.json(resources)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            
        )
    }
}