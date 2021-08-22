import prisma from "../../../util/prisma";

export default async (req, res) => {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end("Method not allowed");
  }

  const categories = await prisma.category.findMany({
    where: {
      products: { some: {} },
    },
    select: {
      id: true,
      name: true,
      products: {
        select: {
          id: true,
          name: true,
          image: true,
          price: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return res.status(200).json({ categories });
};
