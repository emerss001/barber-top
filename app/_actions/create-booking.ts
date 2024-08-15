"use server"

import { db } from "../_lib/prisma"

interface createBookingsParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async (params: createBookingsParams) => {
  await db.booking.create({
    data: params,
  })
}
