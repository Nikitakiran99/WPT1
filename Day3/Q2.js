let arr = [1, 2, 3, 4];

function arrayFunc(choice) {
  switch(choice) {
    case 'push':
      arr.push(5);
      console.log(arr);
      break;
    case 'pop':
      arr.pop();
      console.log(arr);
      break;
    case 'shift'://remove first ele
      arr.shift();
      console.log(arr);
      break;
    case 'unshift'://add first ele
      arr.unshift(0);
      console.log(arr);
      break;
    case 'slice':
      console.log(arr.slice(1, 3));
      break;
      case 'splice':
      arr.splice(1, 2);//start index,count to delete
      console.log(arr);
      break;
    default:
      console.log('Invalid operation');
  }
}

arrayFunc('push');
arrayFunc('pop');
arrayFunc('shift');
arrayFunc('unshift');
arrayFunc('slice');
arrayFunc('splice');