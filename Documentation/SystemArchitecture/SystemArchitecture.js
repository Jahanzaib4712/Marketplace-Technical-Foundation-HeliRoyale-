/*
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

*/