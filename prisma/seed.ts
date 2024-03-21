import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
    {
        slug: "my-first-post",
        title: "My First Post",
        markdown: `
  # This is my first post
  
  Isn't it great?
      `.trim(),
    },
    {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
        markdown: `
  # 90s Mixtape
  
  - I wish (Skee-Lo)
      `.trim(),
    },
];

(async () => {
    for (const post of posts) {
        await prisma.post.upsert({
            where: { slug: post.slug },
            update: post,
            create: post,
        });
    }

    // プロセスが終了する前にPrismaクライアントの接続を閉じる
    await prisma.$disconnect();
})();
