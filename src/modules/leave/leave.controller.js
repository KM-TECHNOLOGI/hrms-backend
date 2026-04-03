const Leave = require('./leave.model');
const sendEvent = require('../../kafka/producer'); // ✅ correct path

exports.applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);

    // 🔥 Kafka Event
    await sendEvent('leave-applied', leave);

    res.json({
      success: true,
      data: leave
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};