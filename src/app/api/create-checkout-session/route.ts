import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    if (!amount || typeof amount !== 'number' || amount < 1000 || amount > 5000000) {
      return NextResponse.json({ error: 'Monto inválido' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: 'Apoya a Ramón en China 🇨🇳 — Programa HUST 3+3',
              description: 'Ramón fue aceptado en el programa HUST 3+3 de la Huazhong University of Science and Technology en Wuhan, China. Tu donación cubre vuelo internacional, visa, seguro médico y primeros meses de estancia. A cambio, Ramón ofrece servicios de diseño web e identidad visual desde Studioko.dev. ¡Gracias por hacer posible esta aventura!',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Error al crear la sesión de pago' }, { status: 500 })
  }
}
