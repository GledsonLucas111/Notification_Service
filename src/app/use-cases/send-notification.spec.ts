import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const notification = await sendNotification.execute({
      content: 'Uma nova mensagem pra voce',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
