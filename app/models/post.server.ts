import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPosts() {
    return prisma.post.findMany();
}