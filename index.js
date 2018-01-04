var recipes= {

}

function updateObjectWithKeyAndValue(object,key,value) {
 var newObj = Object.assign({},object,{[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = '2';
  return object;
  }

function deleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}
