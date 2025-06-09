'use server'

import { BasketItem } from "@/app/(store)/store"
import stripe from "@/lib/stripe";


export type Metadata = {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    clerkUserId: string;
}

export type GroupBasketItem = {
    product: BasketItem["product"];
    quantity: number;

}

export async function createCheckOutSession(items: GroupBasketItem[], metadata: Metadata) {
    try {
        const itemsWithoutPrice = items.filter((item) => !item.product.price)
        if (itemsWithoutPrice.length > 0) {
            throw new Error("Some items don't have a price")
        }
        const customers = await stripe.customers.list({
            email: metadata.customerEmail,
            limit: 1,
        })

        let customerId: string | undefined;
        if (customers.data.length > 0){
            customerId = customers.data[0].id;
        }
    } catch (error) {
        console.error("Error creating checkout sessions", error)
    }
}