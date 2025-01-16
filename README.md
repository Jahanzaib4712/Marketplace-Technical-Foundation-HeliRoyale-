# Marketplace-Technical-Foundation-HeliRoyale-
In Day 2, the focus was on planning the technical foundation for the project. Building upon the roadmap created on Day 1


---

Marketplace Technical Foundation - HeliRoyale 🚁
1. Technical Requirements
Frontend
Pages to Create:
Home Page: Showcase featured products, promotional banners, and categories.
Product Listing Page: Display all products with filtering and sorting options.
Product Details Page: Detailed view of a selected product including images, price, description, and stock.
Cart Page: View selected products with an option to update quantities.
Checkout Page: Collect user information and process payments.
Rental Listing Page: Display all rentable helicopters with availability and pricing.
Rental Details Page: Detailed view of a selected helicopter for rent including rental terms, pricing, and availability.
Rental Cart Page: View selected rental items and finalize booking details.

Responsive Design:
Ensure the design is optimized for both mobile and desktop users.
Utilize responsive CSS frameworks like Tailwind CSS or Bootstrap for consistency.

---

Sanity CMS
Schema Design for Data Management:
Product Schema:
export default {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'image', type: 'image', title: 'Product Image' }
  ]
};
Rental Schema:
export default {
  name: 'rental',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Helicopter Name' },
    { name: 'rentalPrice', type: 'number', title: 'Rental Price per Hour' },
    { name: 'availability', type: 'boolean', title: 'Availability' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'image', type: 'image', title: 'Helicopter Image' },
    { name: 'rentalTerms', type: 'text', title: 'Rental Terms' }
  ]
};
Customer Schema:
export default {
  name: 'customer',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Customer Name' },
    { name: 'email', type: 'string', title: 'Email Address' },
    { name: 'address', type: 'string', title: 'Shipping Address' }
  ]
};
Order Schema:
export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
    { name: 'total', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status' }
  ]
};
Rental Order Schema:
export default {
  name: 'rentalOrder',
  type: 'document',
  fields: [
    { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    { name: 'helicopter', type: 'reference', to: [{ type: 'rental' }], title: 'Helicopter' },
    { name: 'rentalDuration', type: 'number', title: 'Rental Duration (Hours)' },
    { name: 'total', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Rental Order Status' }
  ]
};

---

Third-Party APIs
APIs Required:
Payment Gateway API: For secure transaction processing.
Shipment Tracking API: To provide real-time shipment updates.
Email Notification API: For sending order confirmations.
Booking Availability API: To check helicopter rental availability.

---

2. System Architecture Design
System Overview Diagram:
+--------------------+
|     User Input     |
+--------------------+
          |
          v
+-----------------------+
|   Frontend (Next.js)  |
+-----------------------+
          |
  +-------+-------------------------------+
  |                                       |
  v                                       v
+--------------------+          +--------------------+
| Fetch Product Data |          | Fetch Rental Data  |
+--------------------+          +--------------------+
          |                           |
          v                           v
    +-------------+             +-------------+
    | Sanity CMS  |             | Sanity CMS  |
    +-------------+             +-------------+
          |                           |
  +-------+-------+                   |
  |               |                   |
  v               v                   v
+--------------------+          +--------------------+
| API Integration    |          | Third-party APIs   |
| Shipment + Booking |          + Send Notification  |



Workflows:
Product Data Fetching:
Frontend requests product data from Sanity CMS.
Sanity CMS retrieves and returns the data in JSON format.

Rental Data Fetching:
Frontend requests rental helicopter data from Sanity CMS.
Sanity CMS retrieves and returns the data in JSON format.

Order Processing:
Frontend sends order details to the API endpoint.
API saves the order in Sanity CMS.
Notification and payment processing APIs are triggered.

Rental Booking Processing:
Frontend sends rental booking details to the API endpoint.
API saves the booking in Sanity CMS.
Notification and payment processing APIs are triggered.

Shipment Integration:
Frontend fetches the shipment status from the Shipment Tracking API.
Status is displayed to the user on the Order Details page.

---

3. API Endpoints Plan
Planned Endpoints:
/products (GET)
Description: Fetch all product details.
Response Example:

[
  {
    "id": "1",
    "name": "T-Shirt",
    "price": 20.0,
    "stock": 50
  }
]
/rentals (GET)
Description: Fetch all available rental helicopters.
Response Example:

[
  {
    "id": "1",
    "name": "Helicopter A",
    "rentalPrice": 500,
    "availability": true
  }
]
/orders (POST)
Description: Save new order details.
Request Example:

{
  "customerId": "123",
  "products": ["1", "2"],
  "total": 40.0
}
/rentalOrders (POST)
Description: Save new rental booking details.
Request Example:

{
  "customerId": "123",
  "helicopterId": "1",
  "rentalDuration": 5,
  "total": 2500
}
/shipment (GET)
Description: Fetch the shipment status for an order.
Response Example:

{
  "orderId": "123",
  "status": "In Transit"
}

---

4. Technical Documentation
System Architecture
Include a detailed diagram showing interactions between components (Frontend (Next Js), Sanity CMS, APIs).
Workflows
Explain step-by-step workflows for:
Product browsing and filtering.
Adding products to the cart and placing an order.
Payment processing and shipment tracking.
Renting helicopters and managing bookings.

---

About HeliRoyale 🚁
HeliRoyale is an innovative platform offering both e-commerce and rental-commerce solutions for luxury helicopters. Whether you want to purchase a helicopter or rent one for special occasions, HeliRoyale provides a seamless experience with detailed listings, transparent pricing, and reliable customer support. Our mission is to redefine convenience and exclusivity in the luxury aviation market.
