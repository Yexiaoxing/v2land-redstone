
// 默认不跑这个测试
describe('TelegramService', function() {
  it('should send a message', async function() {
    this.timeout(30000);
    await TelegramService.sendText(`Unit test: ${ new Date() }`);
  });
});
