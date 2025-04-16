Blockly.Python['am-alert'] = function(block) {
  var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC) || "";
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC) || "";

  Blockly.Python.definitions_['import_usocket_as_socket'] = 'import usocket as socket';
  Blockly.Python.definitions_['import_ussl_as_ssl'] = 'import ussl as ssl';
  Blockly.Python.definitions_['import_ujson_as_json'] = 'import ujson as json';

  var functionName = Blockly.Python.provideFunction_(
    'SendAmAlert',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(auth, msg, image=""):',
    '  s = socket.socket()',
    '  ai = socket.getaddrinfo("alert.artronshop.co.th", 443)',
    '  s.connect(ai[0][-1])',
    '  s = ssl.wrap_socket(s)',
    '  obj = { }',
    '  obj["message"] = msg',
    '  if len(image) > 0:',
    '    obj["image"] = image',
    '  payload = json.dumps(obj)',
    '  s.write("POST /api/push HTTP/1.0\\r\\n")',
    '  s.write("Host: alert.artronshop.co.th\\r\\n")',
    '  s.write("Content-Type: application/json\\r\\n")',
    '  s.write("Authorization: Bearer {}\\r\\n".format(auth))',
    '  s.write("User-Agent: microBlock IDE\\r\\n")',
    '  s.write("Content-Length: {}\\r\\n".format(len(payload)))',
    '  s.write("\\r\\n")',
    '  s.write(payload)',
    '  ',
    '  print(s.read(4096))',
    '  ',
    '  s.close()']);

  var code = `${functionName}(${value_auth}, str(${value_msg}), ${value_image})\n`;
  return code;
};


Blockly.JavaScript['am-alert'] = function(block) {
  var value_auth = Blockly.JavaScript.valueToCode(block, 'auth', Blockly.JavaScript.ORDER_ATOMIC) || "";
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC) || "";
  var value_image = Blockly.JavaScript.valueToCode(block, 'stickerPackageId', Blockly.JavaScript.ORDER_ATOMIC) || "";

  Blockly.JavaScript.definitions_['include']['AmAlert.h'] = '#include <AmAlert.h>';

  var functionName = Blockly.JavaScript.provideFunction_(
    'SendAmAlert',
    [
      'bool ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(String token, String msg, String image = "") {',
      '  Alert.begin(token);',
      '  ',
      '  Am_Alert_Massage_Option_t option;',
      '  if (image.length() > 0) {',
      '    option.image.url = image;',
      '  }',
      '  return Alert.send(msg, &option);',
      '}'
    ]
  );

  var code = `${functionName}(${value_auth}, String(${value_msg}), String(${value_image}));\n`;
  return code;
};

