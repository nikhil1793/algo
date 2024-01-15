/**
 * Swap Two String Without Using Third variable
 */
function swapTwoString(source,target){
  source = source + target;
  target = source.substring(0,(source.length - target.length));
  source = source.substring(target.length);
  console.log(source,target);
}

swapTwoString("test","Heroko");