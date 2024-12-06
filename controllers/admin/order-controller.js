const order = require('../../models/Order')

const getAllOrdersOfAllUsers = async (req, res) => {
    try {
      const orders = await order.find({});
  
      if (!orders.length) {
        return res.status(404).json({
          success: false,
          message: "No orders found!",
        });
      }
  
      res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
  };
  
  const getOrderDetailsForAdmin = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await order.findById(id);
  
      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found!",
        });
      }
  
      res.status(200).json({
        success: true,
        data: order,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
  };
  




  module.exports = {
    getAllOrdersOfAllUsers,
    getOrderDetailsForAdmin,
    // updateOrderStatus,
  };
  