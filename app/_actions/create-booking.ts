"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface createBookingsParams {
  serviceId: string
  date: Date
}

export const createBooking = async (params: createBookingsParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado!")
  }

  const userId = (user.user as any).id

  const bookings = await db.booking.findMany({
    where: {
      AND: [
        {
          serviceId: params.serviceId,
        },
        {
          userId: userId,
        },
        {
          date: {
            gte: startOfDay(params.date),
            lte: endOfDay(params.date),
          },
        },
      ],
    },
    select: {
      id: true,
    },
  })

  if (bookings.length > 0) {
    throw new Error("appointment already exists")
  }

  await db.booking.create({
    data: { ...params, userId: userId },
  })

  revalidatePath("barbershops/[id]")
}
