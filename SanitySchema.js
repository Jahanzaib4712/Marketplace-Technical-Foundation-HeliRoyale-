Sanity CMS :

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