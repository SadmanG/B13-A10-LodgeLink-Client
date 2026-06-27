import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PRICE_ID = {
    "Caesar Palace": price_1TmyJ8EZg7ID5pXZcHCEMVBa,
    "A-Frame Redwoods Sanctuary": price_1TmypjEZg7ID5pXZ21nvHAQm,
    "Blackstone River Lodge": price_1TmyqDEZg7ID5pXZRogw9YRa,
    "The Glass Cabin Oasis": price_1TmyrcEZg7ID5pXZOZyusZK6,
    "Whispering Pines Retreat": price_1TmyrxEZg7ID5pXZUmluunvy,
    "Summit Apex Chalet": price_1TmysIEZg7ID5pXZPjjTpjyf,
    "Nordic Minimalist Den": price_1TmyshEZg7ID5pXZ5XaRf3Tx
}