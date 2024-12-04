let message = `
Status Class FriendlyName                                                  InstanceId                
------ ----- ------------                                                  ----------                
OK     USB   USB Composite Device                                          USBVID_0C45&PID_7666...
OK     USB   USB Composite Device                                          USBVID_3554&PID_F58E5...
OK     USB   USB Root Hub (USB 3.0)                                        USROOT_HUB304&1F6E11...
OK     USB   Generic USB Hub                                               USBVID_8087&PID_80005...
OK     USB   USB Composite Device                                          USBVID_0D8C&PID_00146...
OK     USB   Generic USB Hub                                               USBVID_1A40&PID_0105...
OK     USB   Intel(R) 8 Series USB Enhanced Host Controller #1 - 9C26      PCIVEN_8086&DEV_9C26&S...
OK     USB   Intel(R) USB 3.0 eXtensible Host Controller - 1.0 (Microsoft) PCIVEN_8086&DEV_9C31&S...
OK     USB   Realtek USB 2.0 Card Reader                                   USBVID_0BDA&PID_01292...
OK     USB   USB Root Hub                                                  USBOOT_HUB204&10E19AF&0
OK     USB   USB Composite Device                                          USBVID_1BCF&PID_2B8A6...
`;
let array = message.trim().slice(204).split('\n');
let msg2 = " USB Composite Device                                          "
console.log(msg2.length)
let i = 0;
while (i < array.length) {
  console.log(array[i].slice(0,7).trim());
  console.log(array[i].slice(7,7+5).trim())
  console.log(array[i].slice(7+5,63).trim())
  console.log(array[i].slice(63).trim())
  i++;
}
console.log(array);
let lines = message.split("\n")
for (const line of lines.slice(3)) { // Skip the header lines
  if (line.trim().length === 0) { // Fix the error here
    continue;
  }
  const columns = line.split(/\s{2,}/); // Split by two or more spaces
  if (columns.length < 4) {
    continue;
  }

  console.log(columns[0]); // Status
  console.log(columns[1]); // Class
  console.log(columns.slice(2, columns.length - 1).join(" ")); // FriendlyName
  console.log(columns[columns.length - 1]); // InstanceId
}
