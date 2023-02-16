function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*
Even though the two function return the same value, each function handles the value
passed as an argument to buffer differently. The first function mutates the original
array that is referenced by the buffer  parameter using the push method. The second
function uses the concat method, a non mutative method, which returns a copy of the 
array referenced by buffer which means that now the buffer parameter points to a
different point in memory and not the original array that was passed to the function.  
*/