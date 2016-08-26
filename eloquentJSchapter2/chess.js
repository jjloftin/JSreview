var size = Number(prompt('Enter size: '));

if(!isNaN(size))
{
  s = ''
  var base = ' #';
  var base2 = '# ';
  
  for(var counter = 0; counter < size; counter++)
    if(counter % 2 == 0)
    {
      for(var counter2 = 0; counter2 < size; counter2++)
      {
        if(counter2 % 2 == 0)
        {
          s += ' ';
        }
        else
        {
          s += '#';
        }
      }
      s += '\n'
    }
    else
    {
      for(var counter2 = 0; counter2 < size; counter2++)
      {
        if(counter2 % 2 == 0)
        {
          s += '#';
        }
        else
        {
          s += ' '; 
        }
      }
      s += '\n'
    }
}
console.log(s)