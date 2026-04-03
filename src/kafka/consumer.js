await consumer.subscribe({ topic: 'leave-applied' });
await consumer.subscribe({ topic: 'employee-created' });

await consumer.run({
  eachMessage: async ({ topic, message }) => {
    const data = JSON.parse(message.value.toString());

    if (topic === 'leave-applied') {
      console.log('📩 Leave Applied:', data);
    }

    if (topic === 'employee-created') {
      console.log('👤 New Employee:', data);
    }
  }
});