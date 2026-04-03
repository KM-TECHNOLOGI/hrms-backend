const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'hrms-app',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

let isConnected = false;

const connectProducer = async () => {
  if (!isConnected) {
    await producer.connect();
    isConnected = true;
    console.log('✅ Kafka Producer Connected');
  }
};

const sendEvent = async (topic, message) => {
  try {
    await connectProducer();

    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(message)
        }
      ]
    });

    console.log(`📤 Event sent to ${topic}`);
  } catch (error) {
    console.error('❌ Kafka Error:', error.message);
  }
};

module.exports = sendEvent;