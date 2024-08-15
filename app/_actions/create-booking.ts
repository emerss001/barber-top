"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface createBookingsParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async (params: createBookingsParams) => {
  const bookings = await db.booking.findMany({
    where: {
      AND: [
        {
          serviceId: params.serviceId,
        },
        {
          userId: params.userId,
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
    data: params,
  })

  revalidatePath("barbershops/[id]")
}
