function isleapYear (year){
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
    const check = isleapYear(2000);
    console.log(check);
