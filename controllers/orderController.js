const orderModel = require('../models/order');

const createOrder = async (req, res) => {
  const { userId, totalAmount } = req.body;
  try {
    const order = await orderModel.createOrder(userId, totalAmount);
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (err) {
    console.error('Error creating order:', err); // Log the error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addOrderItem = async (req, res) => {
  const { orderId, productId, quantity, price } = req.body;
  try {
    const orderItem = await orderModel.createOrderItem(orderId, productId, quantity, price);
    res.status(201).json({ message: 'Order item added successfully', orderItem });
  } catch (err) {
    console.error('Error adding order item:', err); // Log the error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createOrder, addOrderItem };
