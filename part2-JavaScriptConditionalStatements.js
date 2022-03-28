var month = prompt('Month?');
month = parseFloat(month);
switch (month)
{
    case 1:
        x = 'JAN';
        break;

    case 2:
        x = 'FEB';
        break;
    case 3:
        x = 'MAR';
        break; 
    case 4:
        x = 'APR';
        break;
    case 5:
        x = 'MAY';
        break;
    case 6:
        x = 'JUN';
        break;
    case 7:
        x = 'JUL';
        break;
    case 8:
        x = 'AUG';
        break;
    case 9:
        x = 'SEPT';
        break;
    case 10:
        x = 'OCT';
        break;
    case 11:
        x = 'NOV'
        break;
    case 12:
        x = 'DEC'
        break;
    default:
        x = 'This Month Does Not Exist'
}

alert(x);