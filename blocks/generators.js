Blockly.Python['linenotify'] = function(block) {
  var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC) || "";
  var value_stickerpackageid = Blockly.Python.valueToCode(block, 'stickerPackageId', Blockly.Python.ORDER_ATOMIC) || "";
  var value_stickerid = Blockly.Python.valueToCode(block, 'stickerId', Blockly.Python.ORDER_ATOMIC) || "";

  Blockly.Python.definitions_['import_usocket_as_socket'] = 'import usocket as socket';
  Blockly.Python.definitions_['import_ussl_as_ssl'] = 'import ussl as ssl';

  var functionName = Blockly.Python.provideFunction_(
    'SendNotify',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(auth, msg, stickerPackageId="", stickerId=""):',
    '  s = socket.socket()',
    '  ai = socket.getaddrinfo("notify-api.line.me", 443)',
    '  s.connect(ai[0][-1])',
    '  s = ssl.wrap_socket(s)',
    '  payload = "message=" + msg',
    '  if len(stickerPackageId) > 0:',
    '    payload = payload + "&stickerPackageId=" + stickerPackageId',
    '  if len(stickerId) > 0:',
    '    payload = payload + "&stickerId=" + stickerId',
    '  s.write("POST /api/notify HTTP/1.0\r\n")',
    '  s.write("Content-Type: application/x-www-form-urlencoded\r\n")',
    '  s.write("Authorization: Bearer {}\r\n".format(auth))',
    '  s.write("User-Agent: microBlock IDE\r\n")',
    '  s.write("Content-Length: {}\r\n".format(len(payload)))',
    '  s.write("\r\n")',
    '  s.write(payload)',
    '  ',
    '  print(s.read(4096))',
    '  ',
    '  s.close()']);

  var code = `${functionName}(${value_auth}, str(${value_msg}), ${value_stickerpackageid}, ${value_stickerid})\n`;
  return code;
};
