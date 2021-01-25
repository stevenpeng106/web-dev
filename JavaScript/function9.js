// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    }
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[num - 1];
}
